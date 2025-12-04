import { useState } from "react";
import Layout from "@/components/layout/Layout";
import TemplateCard from "@/components/shared/TemplateCard";
import { Button } from "@/components/ui/button";

const categories = ["All", "Copywriting", "Strategy", "Design & Content", "Client Management"];

const templates = [
  { title: "Creative Brief", category: "Strategy", description: "Comprehensive template for outlining project objectives, target audience, and creative direction." },
  { title: "Client Pitch Deck Structure", category: "Client Management", description: "Professional slide structure for presenting marketing proposals to clients." },
  { title: "Ad Copy Formats", category: "Copywriting", description: "Multiple ad copy formats including AIDA, PAS, and problem-agitate-solve frameworks." },
  { title: "Influencer Outreach Email", category: "Client Management", description: "Professional email template for reaching out to influencers for collaboration." },
  { title: "Instagram Carousel Layout", category: "Design & Content", description: "Visual layout guide for creating engaging Instagram carousel posts." },
  { title: "Content Strategy Template", category: "Strategy", description: "Complete framework for planning content across all marketing channels." },
  { title: "Monthly Report Format", category: "Client Management", description: "Professional template for reporting marketing performance metrics to stakeholders." },
  { title: "AIDA Copywriting Template", category: "Copywriting", description: "Attention, Interest, Desire, Action framework for persuasive copywriting." },
  { title: "50 Reel Ideas for Any Brand", category: "Design & Content", description: "Curated list of proven reel concepts adaptable to any industry or niche." },
  { title: "Social Media Calendar", category: "Strategy", description: "Weekly and monthly planning template for social media content scheduling." },
  { title: "Email Newsletter Template", category: "Copywriting", description: "Engaging email structure optimized for open rates and click-through." },
  { title: "Brand Voice Guidelines", category: "Strategy", description: "Template for defining and documenting your brand's tone and communication style." },
];

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates = activeCategory === "All" 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Templates Library
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ready-to-Use Templates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional marketing templates you can copy and customize for your campaigns.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <div 
                key={index} 
                className="animate-fade-up opacity-0" 
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <TemplateCard {...template} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Templates;
