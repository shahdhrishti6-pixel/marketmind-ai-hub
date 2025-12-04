import Layout from "@/components/layout/Layout";
import InsightCard from "@/components/shared/InsightCard";
import { 
  MousePointer, 
  DollarSign, 
  UserPlus, 
  TrendingUp, 
  CreditCard, 
  Filter,
  BarChart3,
  Megaphone
} from "lucide-react";

const metrics = [
  { 
    icon: MousePointer, 
    title: "Click-Through Rate", 
    acronym: "CTR",
    description: "The percentage of people who click on your ad after seeing it. Higher CTR means more relevant ads.",
    formula: "CTR = (Clicks ÷ Impressions) × 100"
  },
  { 
    icon: DollarSign, 
    title: "Cost Per Acquisition", 
    acronym: "CPA",
    description: "How much you spend to acquire one customer. Lower is better for profitability.",
    formula: "CPA = Total Cost ÷ Number of Conversions"
  },
  { 
    icon: UserPlus, 
    title: "Cost Per Lead", 
    acronym: "CPL",
    description: "The cost of generating one lead. Essential for measuring lead gen campaign efficiency.",
    formula: "CPL = Total Spend ÷ Number of Leads"
  },
  { 
    icon: TrendingUp, 
    title: "Return on Ad Spend", 
    acronym: "ROAS",
    description: "Revenue generated for every dollar spent on ads. A ROAS of 4:1 means $4 earned per $1 spent.",
    formula: "ROAS = Revenue ÷ Ad Spend"
  },
  { 
    icon: CreditCard, 
    title: "Cost Per Click", 
    acronym: "CPC",
    description: "The amount you pay each time someone clicks your ad. Varies by platform and competition.",
    formula: "CPC = Total Cost ÷ Number of Clicks"
  },
  { 
    icon: Filter, 
    title: "Sales Funnel", 
    acronym: "",
    description: "The customer journey from awareness to purchase: Awareness → Interest → Consideration → Intent → Purchase.",
    formula: ""
  },
  { 
    icon: BarChart3, 
    title: "Performance Ads", 
    acronym: "",
    description: "Ads optimized for specific actions (clicks, conversions, leads) rather than just impressions or brand awareness.",
    formula: ""
  },
  { 
    icon: Megaphone, 
    title: "Campaign Types", 
    acronym: "",
    description: "Brand Awareness, Lead Generation, Conversion, Retargeting, and Engagement campaigns serve different marketing goals.",
    formula: ""
  },
];

const Insights = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Marketing Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Marketing Metrics Explained
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understand the key metrics that drive digital marketing success. Beginner-friendly explanations with formulas.
            </p>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                className="animate-fade-up opacity-0" 
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'forwards' }}
              >
                <InsightCard {...metric} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;
