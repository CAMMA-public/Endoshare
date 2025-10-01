import { Button } from "@/components/ui/button";
import { Github, Download, ExternalLink } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Grid: [logo] [centered nav] [buttons] */}
      <div className="container grid grid-cols-[auto_1fr_auto] items-center h-16 px-4">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Endoshare Logo" 
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold">Endoshare</h1>
        </div>

        {/* Center: Nav (truly centered, independent of side widths) */}
        <nav className="hidden md:flex justify-self-center items-center gap-6 min-w-0">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
            Download
          </a>
          <a
            href="https://github.com/your-repo"
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3 justify-self-end">
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a
              href="https://arxiv.org/abs/your-paper-id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Paper</span>
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