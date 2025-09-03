"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Bot } from "lucide-react";
import { format } from "date-fns";

export default function SessionDetailPage() {
  const params = useParams();
  const router = useRouter();
  const agentId = params?.id as Id<"agents">;
  const sessionId = params?.sessionId as Id<"chatSessions">;

  const msgsChat = useQuery(
    api.chat.getMessages,
    sessionId ? { sessionId } : "skip"
  );
  const msgsSessions = useQuery(
    api.sessions.getSessionMessages,
    sessionId ? { sessionId } : "skip"
  );
  const messages = (msgsChat && msgsChat.length > 0)
    ? msgsChat
    : ((msgsSessions && msgsSessions.length > 0) ? msgsSessions : (msgsChat ?? msgsSessions));

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-black hover:bg-gray-100"
            onClick={() => router.push(`/agent/${agentId}/history`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to History
          </Button>
          <h1 className="text-xl font-semibold text-black">Session {String(sessionId).slice(-6)}</h1>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-md font-medium text-black">Messages</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Debug counts to verify data paths */}
          <div className="text-[10px] text-gray-400 mb-2">chat.getMessages: {Array.isArray(msgsChat) ? msgsChat.length : 'loading'} | sessions.getSessionMessages: {Array.isArray(msgsSessions) ? msgsSessions.length : 'loading'}</div>
          {messages === undefined ? (
            <div className="py-8 text-center text-gray-500">Loading...</div>
          ) : messages.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              No messages in this session.
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((m) => (
                <div key={m._id} className="flex items-start gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-gray-200' : 'bg-blue-100'}`}>
                    {m.role === 'user' ? (
                      <User className="h-4 w-4 text-gray-700" />
                    ) : (
                      <Bot className="h-4 w-4 text-blue-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="font-medium text-gray-700 capitalize">{m.role}</span>
                      {m.createdAt && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {format(new Date(m.createdAt), 'MMM d, yyyy h:mm a')}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm whitespace-pre-wrap break-words text-black">
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
