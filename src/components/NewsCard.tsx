import { ExternalLink, Calendar, Building2 } from "lucide-react";
import { Card } from "./ui/card";

interface NewsCardProps {
  title: string;
  description: string;
  source: string;
  date: string;
  link: string;
}

const NewsCard = ({ title, description, source, date, link }: NewsCardProps) => {
  return (
    <Card className="p-6 hover-editorial transition-all duration-300 hover:shadow-lg cursor-pointer group">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex items-start gap-3 mb-3">
          <Building2 className="h-4 w-4 text-editorial-red shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-lg leading-tight group-hover:text-editorial-red transition-colors">
              {title}
            </h3>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{source}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time>{date}</time>
          </div>
        </div>
      </a>
    </Card>
  );
};

export default NewsCard;
