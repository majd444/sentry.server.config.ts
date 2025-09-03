"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, MessageSquare } from "lucide-react";
import { format } from "date-fns";

export default function AgentHistoryPage() {
  const params = useParams();
  const router = useRouter();
  const agentId = params?.id as Id<"agents">;

  const sessions = useQuery(api.sessions.listByAgentForCurrentUser, agentId ? { agentId } : "skip");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-black hover:bg-gray-100"
            onClick={() => router.push(`/agent/${agentId}/settings`)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Settings
          </Button>
          <h1 className="text-xl font-semibold text-black">Conversation History</h1>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-md font-medium text-black">Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          {sessions === undefined ? (
            <div className="py-8 text-center text-gray-500">Loading...</div>
          ) : sessions.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              No conversations yet.
            </div>
          ) : (
            <div className="divide-y border rounded-md">
              {sessions.map((s) => (
                <div
                  key={s._id}
                  className="p-4 flex items-center justify-between hover:bg-accent/30 cursor-pointer"
                  onClick={() => router.push(`/agent/${agentId}/history/${s._id}`)}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium text-black truncate">Session {String(s._id).slice(-6)}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>
                          Last active: {format(new Date(s.lastActive), "MMM d, yyyy h:mm a")}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Placeholder for future: open session */}
                  {/* <Button size="sm" variant="outline" onClick={() => router.push(`/agent/${agentId}/chat/${s._id}`)}>Open</Button> */}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
