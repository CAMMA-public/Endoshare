import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Monitor, Apple, Smartphone, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadSection = () => {
  const platforms = [
    {
      name: "Windows",
      icon: <Monitor className="h-8 w-8" />,
      description: "Tested on Windows 10 and later",
      downloadLink: "https://seafile.unistra.fr/f/626347ee28b64ea5b4c7/?dl=1",
      version: "v1.0.0",
      size: "477 MB"
    },
    {
      name: "macOS",
      icon: <Apple className="h-8 w-8" />,
      description: "Tested on macOS 10.15 and later",
      downloadLink: "https://seafile.unistra.fr/f/39f25a094d81461692b3/?dl=1",
      version: "v1.0.0",
      size: "473 MB"
    },
    {
      name: "Linux",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Coming Soon",
      downloadLink: "https://www.youtube.com/watch?v=xvFZjo5PgG0&list=RDxvFZjo5PgG0&start_radio=1",
      version: "na",
      size: "na"
    }
  ];

  return (
    <section id="download" className="py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Download Endoshare
          </h2>
          <p className="text-lg text-muted-foreground">
            Pre-built binaries for your operating system are available below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => (
            <Card key={index} className="card-medical hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-primary/10 p-4 text-primary">
                  {platform.icon}
                </div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary">{platform.version}</Badge>
                  <Badge variant="outline">{platform.size}</Badge>
                </div>
                <Button className="w-full" asChild>
                  <a href={platform.downloadLink} className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download for {platform.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="card-medical">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 rounded-full bg-accent/10 p-4 text-accent">
                <Github className="h-8 w-8" />
              </div>
              <CardTitle className="text-xl">Source Available</CardTitle>
              <CardDescription>
                The full source code is available for review and contributions.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center gap-2">
                <Badge variant="secondary">PolyForm Noncommercial License</Badge>
                <Badge variant="outline">Active Development</Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" asChild>
                  <a href="https://github.com/CAMMA-public/Endoshare_code" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/docs" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Documentation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Installation instructions and system requirements are provided in the documentation.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> Endoshare is source-available software intended for educational and research use only. 
            It is not a medical device and is not certified for clinical or diagnostic use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;