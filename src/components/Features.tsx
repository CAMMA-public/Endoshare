import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Shield, 
  Scissors, 
  Users, 
  FileVideo, 
  Lock,
  Zap,
  CheckCircle,
  Eye,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Merging",
      description: "Seamlessly combine multiple endoscopic video files into a single, coherent recording for comprehensive documentation."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Scene Detection and De-identification",
      description: "Automatically identify and blur out-of-body scenes to maintain focus on endoscopic procedures."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Pseudonymization",
      description: "Replace sensitive data with pseudonyms while maintaining referential integrity for research purposes."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Enhanced Sharing",
      description: "Enable distribution of endoscopic content for education, training, and clinical collaboration."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Quality Preservation",
      description: "Maintain original video quality while applying necessary privacy and security transformations."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Customizable Settings",
      description: "Fine-tune processing parameters to meet specific institutional requirements and workflows."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Powerful Features for Medical Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            Endoshare provides comprehensive tools for processing endoscopic videos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-medical hover:shadow-lg transition-all duration-300 group">
              <CardHeader>
                <div className="mb-2 rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;