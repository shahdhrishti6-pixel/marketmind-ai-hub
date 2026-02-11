import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Automations = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [payload, setPayload] = useState('{\n  "action": "new_lead",\n  "source": "MarketMind AI"\n}');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTrigger = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!webhookUrl) {
      toast({ title: "Missing URL", description: "Please enter your Zapier webhook URL", variant: "destructive" });
      return;
    }

    setIsLoading(true);

    try {
      let body: any;
      try {
        body = JSON.parse(payload);
      } catch {
        toast({ title: "Invalid JSON", description: "Please fix your JSON payload", variant: "destructive" });
        setIsLoading(false);
        return;
      }

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          ...body,
          timestamp: new Date().toISOString(),
          triggered_from: window.location.origin,
        }),
      });

      toast({ title: "Request Sent!", description: "Check your Zap's history to confirm it was triggered." });
    } catch (error) {
      console.error("Webhook error:", error);
      toast({ title: "Error", description: "Failed to trigger webhook. Check the URL and try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Zap className="w-4 h-4" />
              Automation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Zapier Automations</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect MarketMind AI to 5,000+ apps using Zapier webhooks. Automate your marketing workflows effortlessly.
            </p>
          </div>

          <div className="max-w-2xl mx-auto grid gap-8">
            {/* How it works */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How It Works</CardTitle>
                <CardDescription>Set up in 3 simple steps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { step: "1", text: "Create a Zap in Zapier with a \"Webhooks by Zapier\" trigger (Catch Hook)." },
                  { step: "2", text: "Copy the webhook URL and paste it below." },
                  { step: "3", text: "Customize the JSON payload and hit Send to trigger your Zap." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                      {item.step}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Webhook form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Trigger a Zap</CardTitle>
                <CardDescription>Enter your Zapier webhook URL and payload</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTrigger} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Webhook URL</label>
                    <Input
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                      placeholder="https://hooks.zapier.com/hooks/catch/..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">JSON Payload</label>
                    <Textarea
                      value={payload}
                      onChange={(e) => setPayload(e.target.value)}
                      className="font-mono text-sm min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} variant="glow" size="lg" className="w-full">
                    {isLoading ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Send to Zapier</>}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Use cases */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Popular Automations</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  "New lead → Add to CRM + send welcome email",
                  "Campaign completed → Post summary to Slack",
                  "Content calendar generated → Create tasks in Notion",
                  "Ad copy created → Save to Google Sheets",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {text}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Automations;
