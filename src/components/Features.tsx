import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  Shield, 
  Lock,
  Users, 
  Eye,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Merging",
      description: "Combine multiple endoscopic video files into a single recording for documentation or review."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Scene Detection and De-identification",
      description: "Identify and blur out-of-body scenes to keep the focus on the surgical field."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Pseudonymization",
      description: "Substitute sensitive identifiers with pseudonyms while keeping data consistent for research."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sharing Support",
      description: "Facilitate distribution of video material for education, training, or collaborative work."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Quality Preservation",
      description: "Apply privacy and processing steps without altering the original visual quality of the videos."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Customizable Settings",
      description: "Adjust processing parameters to align with local needs or institutional workflows."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Endoshare includes a range of tools for preparing and sharing endoscopic videos.
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