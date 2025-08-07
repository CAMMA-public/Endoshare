import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Endoshare Logo" 
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold">Endoshare</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
            Download
          </a>
          <a href="#github" className="text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" asChild>
            <a href="#github" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">Source</span>
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="#download" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;