import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
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
              A free and source-available platform for sharing and preparing endoscopic videos. 
              Intended for educational and research use, with privacy-preserving features.
            </p>
            <p className="text-muted-foreground mb-4 max-w-md">
              <strong>Disclaimer:</strong> Endoshare is research and educational software. 
              It is not a medical device and is not certified for clinical or diagnostic use.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/CAMMA-public/Endoshare_code" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <Link
                to="/docs#using-endoshare"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Documentation"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h4 className="font-semibold mb-4">Project</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <HashLink smooth to="/#features" className="hover:text-primary transition-colors">
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#download" className="hover:text-primary transition-colors">
                  Download
                </HashLink>
              </li>
              <li>
                <Link to="/docs#using-endoshare" className="hover:text-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <HashLink smooth to="/docs#installation" className="hover:text-primary transition-colors">
                  Installation From Source
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <HashLink smooth to="/#about" className="hover:text-primary transition-colors">
                  About
                </HashLink>
              </li>
              <li>
                <a 
                  href="http://camma.u-strasbg.fr/" 
                  className="hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  CAMMA Lab
                </a>
              </li>
              <li>
                <a 
                  href="https://forms.gle/ndkDNeNzSUfSYmPT9" 
                  className="hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Provide Feedback
                </a>
              </li>
                            <li>
                <a 
                  href="https://polyformproject.org/licenses/noncommercial/1.0.0/" 
                  className="hover:text-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Text */}
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <p>© 2025 Endoshare. Source code available under PolyForm Noncommercial License 1.0.0.</p>
            <p>Not a medical device. For educational and research use only.</p>
          </div>

          {/* Logos and Acknowledgment */}
          <div className="flex flex-col md:flex-row items-center md:items-end text-center md:text-right space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-muted-foreground text-sm">
              Developed at
            </p>
            <div className="flex items-center space-x-3">
              <img src={`${import.meta.env.BASE_URL}camma_logo.png`} alt="CAMMA" className="h-6" />
              <img src={`${import.meta.env.BASE_URL}unistra_logo.png`} alt="University of Strasbourg" className="h-6" />
              <img src={`${import.meta.env.BASE_URL}healthtech_logo.png`} alt="HealthTech" className="h-6" />
              <img src={`${import.meta.env.BASE_URL}ihu_logo.png`} alt="IHU" className="h-6" />
              <p className="text-muted-foreground text-sm">as part of CompSurg</p>
              <img src={`${import.meta.env.BASE_URL}erc_logo.png`} alt="ERC" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;