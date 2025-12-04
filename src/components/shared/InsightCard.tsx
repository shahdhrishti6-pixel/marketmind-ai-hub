import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  icon: LucideIcon;
  title: string;
  acronym?: string;
  description: string;
  formula?: string;
}

const InsightCard = ({ icon: Icon, title, acronym, description, formula }: InsightCardProps) => {
  return (
    <div className="group glass-card p-6 hover-lift">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {acronym && (
          <span className="text-2xl font-bold gradient-text">{acronym}</span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-3">
        {description}
      </p>
      
      {formula && (
        <div className="px-4 py-2 rounded-lg bg-secondary/50 text-sm font-mono text-foreground">
          {formula}
        </div>
      )}
    </div>
  );
};

export default InsightCard;
