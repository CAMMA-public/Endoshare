import { Button } from "@/components/ui/button";
import { Shield, Video, Users, Download, Github, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="hero-gradient absolute inset-0" />
      
      <div className="container relative z-10 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <img 
              src="/logo.png" 
              alt="EndoShare Logo" 
              className="h-24 w-24 md:h-32 md:w-32"
            />
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">EndoShare</span>
          </h1>
          
          <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
            Compliant Surgical Video Processing
          </p>
          
          <p className="mb-12 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Merge, de-identify, and pseudonymize surgical videos with confidence. 
            EndoShare removes out-of-body scenes and ensures HIPAA-compliant sharing 
            for medical education and collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#download" className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download EndoShare
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#github" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                View Source Code
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Video Processing</h3>
              <p className="text-muted-foreground">
                Merge multiple surgical videos and remove out-of-body scenes automatically
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent/10 p-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">HIPAA Compliant</h3>
              <p className="text-muted-foreground">
                De-identify and pseudonymize content to meet medical privacy standards
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-success/10 p-4">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Enhanced Sharing</h3>
              <p className="text-muted-foreground">
                Enable safe collaboration and education in the medical community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;