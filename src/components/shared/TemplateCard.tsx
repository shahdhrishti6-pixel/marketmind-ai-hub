import { FileText, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TemplateCardProps {
  title: string;
  category: string;
  description: string;
}

const TemplateCard = ({ title, category, description }: TemplateCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group glass-card p-6 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
          <FileText className="w-5 h-5 text-accent" />
        </div>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        {description}
      </p>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full"
        onClick={handleCopy}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-2" />
            Copy Template
          </>
        )}
      </Button>
    </div>
  );
};

export default TemplateCard;
