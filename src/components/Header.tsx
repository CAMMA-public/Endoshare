// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Github, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

type HeaderProps = { minimal?: boolean };

const Header = ({ minimal = false }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid grid-cols-[auto_1fr_auto] items-center h-16 px-4">
        {/* Left: Logo → go home */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Endoshare Logo"
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold">Endoshare</h1>
        </Link>

        {/* Center: Nav */}
        {!minimal && (
          <nav className="hidden md:flex justify-self-center items-center gap-6 min-w-0">
            <HashLink smooth to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </HashLink>
            <HashLink smooth to="/#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </HashLink>
            <a
              href="https://github.com/CAMMA-public/Endoshare_code"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <HashLink smooth to="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </HashLink>
            <Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
          </nav>
        )}

        {/* Right: Buttons */}
        {!minimal && (
          <div className="flex items-center gap-3 justify-self-end">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/CAMMA-public/Endoshare_code"
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
              <HashLink smooth to="/#download" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </HashLink>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;