import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Copy, Check, Lightbulb } from "lucide-react";

const promptSuggestions = [
  "Create ad copy for ___ brand",
  "Generate 10 content ideas for ___ niche",
  "Explain marketing concepts simply",
  "Write a reel script for ___ product",
  "Rewrite my caption to increase engagement",
  "Make a marketing strategy for ___ objective",
];

const AICenter = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      setResult(`Here's what I generated for: "${prompt}"\n\n🎯 Marketing Strategy:\n\n1. Target Audience Analysis\nIdentify your ideal customer profile based on demographics, psychographics, and behavior patterns.\n\n2. Content Pillars\n• Educational content (40%)\n• Promotional content (30%)\n• Engagement content (20%)\n• User-generated content (10%)\n\n3. Platform Strategy\nFocus on platforms where your audience spends the most time. Consider Instagram for visual brands, LinkedIn for B2B, and TikTok for Gen Z audiences.\n\n4. Key Messages\n• Lead with value proposition\n• Address pain points directly\n• Include social proof\n• Clear call-to-action\n\n5. Performance Metrics\nTrack CTR, engagement rate, conversion rate, and ROAS to measure success.`);
      setIsLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <section className="py-20 min-h-[80vh]">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI Command Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter any marketing prompt and let AI generate content, strategies, and ideas for you instantly.
            </p>
          </div>

          {/* Prompt Suggestions */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Try these prompts:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {promptSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(suggestion)}
                  className="px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-sm transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 mb-6">
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your marketing prompt here... (e.g., 'Create a social media strategy for a fitness app targeting millennials')"
                className="min-h-[120px] resize-none border-0 bg-transparent text-base focus-visible:ring-0 p-0 mb-4"
              />
              <div className="flex justify-end">
                <Button 
                  onClick={handleSubmit} 
                  disabled={isLoading || !prompt.trim()}
                  variant="glow"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Result Area */}
            {result && (
              <div className="glass-card p-6 animate-fade-up">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="font-semibold">AI Response</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-foreground bg-transparent p-0">
                    {result}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AICenter;
