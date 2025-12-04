import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

const ToolCard = ({ icon: Icon, title, description, onClick }: ToolCardProps) => {
  return (
    <div className="group glass-card p-6 hover-lift cursor-pointer" onClick={onClick}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4">
        {description}
      </p>
      
      <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary">
        Try Now
        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default ToolCard;
