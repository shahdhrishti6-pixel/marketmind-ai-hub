import Layout from "@/components/layout/Layout";
import { Sparkles, Target, Zap, Users } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI-Powered", description: "Leverage cutting-edge AI to generate content and strategies in seconds." },
  { icon: Target, title: "Strategy Focused", description: "Built on proven marketing frameworks like 6M's, AIDA, and STP." },
  { icon: Zap, title: "Fast & Efficient", description: "Save hours on content creation and campaign planning." },
  { icon: Users, title: "Built for Marketers", description: "Designed by marketers, for marketers, creators, and students." },
];

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Story Behind{" "}
              <span className="gradient-text">MarketMind AI</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MarketMind AI is built for digital marketers, creators, and students who need smart tools to work faster and create better campaigns. Our goal is to simplify marketing by combining strategy, creativity, and AI into one powerful workspace.
            </p>
          </div>

          {/* Mission Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe that great marketing shouldn't require a massive team or budget. MarketMind AI democratizes access to professional marketing tools, giving everyone from solo entrepreneurs to marketing students the power to create impactful campaigns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By combining battle-tested marketing frameworks with modern AI technology, we're creating a new standard for how marketing work gets done — faster, smarter, and more creatively than ever before.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 text-center hover-lift animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
