import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ToolCard from "@/components/shared/ToolCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  Video, 
  Wrench, 
  Target, 
  Calendar, 
  Users, 
  Mail, 
  Hash,
  ArrowRight,
  Sparkles
} from "lucide-react";

const tools = [
  { icon: MessageSquare, title: "AI Caption Generator", description: "Generate hooks, CTAs, long captions, and ad copy instantly." },
  { icon: Video, title: "Reel Script Generator", description: "Create short-form scripts based on platform and objective." },
  { icon: Wrench, title: "Fix My Ad Tool", description: "Upload your ad and get AI-powered improvements for better results." },
  { icon: Target, title: "6M's Campaign Builder", description: "Build complete campaigns with Market, Mission, Message, Media, Money, Measurement." },
  { icon: Calendar, title: "30-Day Content Calendar", description: "Generate a full month of content ideas tailored to your brand." },
  { icon: Users, title: "Brand Positioning Tool", description: "Use the STP framework to define your market positioning." },
  { icon: Mail, title: "Influencer Outreach Maker", description: "Create professional templates for influencer collaboration." },
  { icon: Hash, title: "Hashtag Grouping Tool", description: "Organize and group hashtags for maximum reach." },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      {/* Tools Preview Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Marketing Tools Dashboard
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, optimize, and scale your marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {tools.slice(0, 4).map((tool, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ToolCard {...tool} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="glow" size="lg">
              <Link to="/tools">
                View All Tools
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI Center CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              AI Command Center
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enter any marketing prompt and let AI generate content, strategies, and ideas for you instantly.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/ai-center">
                <Sparkles className="w-5 h-5" />
                Launch AI Center
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
