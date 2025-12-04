import { FileText, Copy, Check, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface TemplateCardProps {
  title: string;
  category: string;
  description: string;
  content: string;
}

const TemplateCard = ({ title, category, description, content }: TemplateCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast({
      title: "Template copied!",
      description: "The template has been copied to your clipboard.",
    });
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
      
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="flex-1">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                {title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {category}
                </span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleCopy}
                >
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
              <div className="bg-secondary/50 rounded-xl p-6 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                {content}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <Button 
          variant="default" 
          size="sm" 
          className="flex-1"
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
              Copy
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default TemplateCard;
