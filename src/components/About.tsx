import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Users, Zap, Heart, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Privacy First", value: "Healthcare-Grade", icon: <Shield className="h-5 w-5" /> },
    { label: "Open Source", value: "MIT License", icon: <Code className="h-5 w-5" /> },
    { label: "Cross Platform", value: "Win/Mac/Linux", icon: <Globe className="h-5 w-5" /> },
    { label: "Medical Focus", value: "Built for Surgeons", icon: <Heart className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              About EndoShare
            </h2>
            <p className="text-lg text-muted-foreground">
              Revolutionizing surgical video sharing through privacy-compliant technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="card-medical text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-2 rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  <div className="text-lg font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  For Medical Professionals
                </CardTitle>
                <CardDescription>
                  Designed specifically for the healthcare industry
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  EndoShare was created to address the critical need for secure, compliant sharing 
                  of surgical videos in medical education and collaboration. Our solution ensures 
                  that sensitive patient information is protected while enabling valuable knowledge transfer.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Medical Education</Badge>
                  <Badge variant="secondary">Surgical Training</Badge>
                  <Badge variant="secondary">Research Collaboration</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-medical">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  Technical Excellence
                </CardTitle>
                <CardDescription>
                  Built with modern technology and best practices
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Our application leverages advanced video processing algorithms and robust 
                  privacy protection mechanisms. The entire codebase is open source, 
                  allowing for community contributions and transparent security auditing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cross-Platform</Badge>
                  <Badge variant="secondary">High Performance</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="card-medical mt-8">
            <CardHeader className="text-center">
              <CardTitle>Privacy & Compliance</CardTitle>
              <CardDescription>
                Your data security is our top priority
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="mx-auto mb-3 rounded-full bg-success/10 w-12 h-12 flex items-center justify-center text-success">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Built for Sensitive Data Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Meets all healthcare privacy and security requirements
                  </p>
                </div>
                <div>
                  <div className="mx-auto mb-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center text-primary">
                    <Code className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Transparent</h4>
                  <p className="text-sm text-muted-foreground">
                    Open source code allows for security auditing and verification
                  </p>
                </div>
                <div>
                  <div className="mx-auto mb-3 rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center text-accent">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Community Driven</h4>
                  <p className="text-sm text-muted-foreground">
                    Built by and for the medical community with continuous feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;