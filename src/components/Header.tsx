import { Newspaper } from "lucide-react";
import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <Newspaper className="h-6 w-6 text-editorial-red" />
            <span>Press Release BR</span>
          </NavLink>
          
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink 
              to="/" 
              className="transition-colors hover:text-editorial-red"
              activeClassName="text-editorial-red"
            >
              Início
            </NavLink>
            <NavLink 
              to="/historia" 
              className="transition-colors hover:text-editorial-red"
              activeClassName="text-editorial-red"
            >
              História
            </NavLink>
            <NavLink 
              to="/importancia" 
              className="transition-colors hover:text-editorial-red"
              activeClassName="text-editorial-red"
            >
              Importância
            </NavLink>
            <NavLink 
              to="/jornalistas" 
              className="transition-colors hover:text-editorial-red"
              activeClassName="text-editorial-red"
            >
              Jornalistas
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
