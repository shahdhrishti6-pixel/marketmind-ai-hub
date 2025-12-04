import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Sparkles, FileText, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animate-grid opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow delay-500" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            AI-Powered Marketing Platform
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
            Your Digital Marketing
            <span className="block gradient-text">Headquarters</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            MarketMind AI gives marketers the tools, templates, and AI workflows they need to create better campaigns — faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button asChild variant="hero" size="xl">
              <Link to="/tools" className="gap-3">
                <Wrench className="w-5 h-5" />
                Open Marketing Tools
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/ai-center" className="gap-3">
                <Sparkles className="w-5 h-5" />
                Generate Ideas with AI
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="lg">
              <Link to="/templates" className="gap-2">
                <FileText className="w-5 h-5" />
                Explore Templates
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-up delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">8+</div>
              <div className="text-sm text-muted-foreground mt-1">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground mt-1">Marketers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
