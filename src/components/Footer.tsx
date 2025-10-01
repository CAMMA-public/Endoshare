import { Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Endoshare Logo" 
                className="h-8 w-8"
              />
              <h3 className="text-lg font-bold">Endoshare</h3>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A free and open-source platform for sharing and preparing endoscopic videos. 
              Intended for educational and research use, with privacy-preserving features.
            </p>
            <p className="text-muted-foreground mb-4 max-w-md">
              <strong>Disclaimer:</strong> Endoshare is research and educational software. 
              It is not a medical device and is not certified for clinical or diagnostic use.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Documentation"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Project</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-primary transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  System Requirements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Endoshare. Open source under MIT License.  
            Not a medical device. For educational and research use only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;