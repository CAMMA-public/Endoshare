import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Monitor, Apple, Smartphone, Github, ExternalLink } from "lucide-react";

const DownloadSection = () => {
  const platforms = [
    {
      name: "Windows",
      icon: <Monitor className="h-8 w-8" />,
      description: "Compatible with Windows 10 and later",
      downloadLink: "#",
      version: "v1.0.0",
      size: "45 MB"
    },
    {
      name: "macOS",
      icon: <Apple className="h-8 w-8" />,
      description: "Compatible with macOS 10.15 and later",
      downloadLink: "https://seafile.unistra.fr/f/6e054203416e414fac85/?dl=1",
      version: "v1.0.0",
      size: "52 MB"
    },
    {
      name: "Linux",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Ubuntu 20.04+ and other distributions",
      downloadLink: "#",
      version: "v1.0.0",
      size: "48 MB"
    }
  ];

  return (
    <section id="download" className="py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Download EndoShare
          </h2>
          <p className="text-lg text-muted-foreground">
            Get the latest version for your operating system. All builds are fully compiled 
            and ready to use immediately.
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
              <CardTitle className="text-xl">Open Source</CardTitle>
              <CardDescription>
                EndoShare is fully open source. View the code, contribute, or build from source.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center gap-2">
                <Badge variant="secondary">MIT License</Badge>
                <Badge variant="outline">Active Development</Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Documentation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All downloads are digitally signed and verified. 
            <br />
            System requirements and installation guides available in our documentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;