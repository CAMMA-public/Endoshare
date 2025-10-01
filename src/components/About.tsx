import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Users, Zap, Heart, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Privacy", value: "Data Protection", icon: <Shield className="h-5 w-5" /> },
    { label: "Open Source", value: "MIT License", icon: <Code className="h-5 w-5" /> },
    { label: "Cross Platform", value: "Win/Mac/Linux", icon: <Globe className="h-5 w-5" /> },
    { label: "Medical Focus", value: "Education & Research", icon: <Heart className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              About Endoshare
            </h2>
            <p className="text-lg text-muted-foreground">
              A free and open-source platform for sharing endoscopic videos in educational, research, and collaborative contexts
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
                  For Medical Communities
                </CardTitle>
                <CardDescription>
                  Developed to support teaching and collaboration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Endoshare is designed to make the exchange of endoscopic videos easier in education, 
                  training, and research. It includes mechanisms to minimize exposure of sensitive information, 
                  while enabling effective knowledge sharing.
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
                  Technical Approach
                </CardTitle>
                <CardDescription>
                  Built with open methods and community review
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The platform uses established video processing techniques and integrates 
                  privacy-preserving features. The open-source codebase allows contributions, 
                  peer review, and transparent evaluation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cross-Platform</Badge>
                  <Badge variant="secondary">Open Source</Badge>
                  <Badge variant="secondary">Community-Driven</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;