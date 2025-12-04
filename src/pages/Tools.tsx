import Layout from "@/components/layout/Layout";
import ToolCard from "@/components/shared/ToolCard";
import { 
  MessageSquare, 
  Video, 
  Wrench, 
  Target, 
  Calendar, 
  Users, 
  Mail, 
  Hash 
} from "lucide-react";

const tools = [
  { 
    icon: MessageSquare, 
    title: "AI Caption Generator", 
    description: "Generate hooks, CTAs, long captions, and ad copy instantly. Perfect for Instagram, LinkedIn, and Facebook." 
  },
  { 
    icon: Video, 
    title: "Reel Script Generator", 
    description: "Create engaging short-form scripts optimized for TikTok, Reels, and Shorts based on your platform and objective." 
  },
  { 
    icon: Wrench, 
    title: "Fix My Ad Tool", 
    description: "Upload your ad and get AI-powered improvements for headline, copy, creative suggestions, and CTA options." 
  },
  { 
    icon: Target, 
    title: "6M's Campaign Builder", 
    description: "Enter your goal and generate a complete campaign: Market, Mission, Message, Media, Money, and Measurement." 
  },
  { 
    icon: Calendar, 
    title: "30-Day Content Calendar", 
    description: "Generate a full month of content ideas tailored to your brand, niche, and marketing objectives." 
  },
  { 
    icon: Users, 
    title: "Brand Positioning Tool", 
    description: "Use the STP (Segmentation, Targeting, Positioning) framework to define your market positioning strategy." 
  },
  { 
    icon: Mail, 
    title: "Influencer Outreach Maker", 
    description: "Create professional email templates for influencer collaboration requests and partnerships." 
  },
  { 
    icon: Hash, 
    title: "Hashtag Grouping Tool", 
    description: "Organize and group hashtags by category, reach, and relevance for maximum engagement." 
  },
];

const Tools = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Marketing Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marketing Tools Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful AI tools designed to streamline your marketing workflow and boost campaign performance.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="animate-fade-up opacity-0" 
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'forwards' }}
              >
                <ToolCard {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tools;
