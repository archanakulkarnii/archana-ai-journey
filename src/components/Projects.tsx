import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Attendance Leave Tracker",
      description: "Developed an automated system to streamline leave management in institutions. Reduced paperwork and administrative effort while providing a reliable platform for both students and administrators.",
      technologies: ["Flask", "HTML & CSS", "Bootstrap", "SQLite"],
      category: "Web Application"
    },
    {
      title: "Match Ticket Analysis",
      description: "Designed a dynamic pricing model that adjusts ticket costs based on audience interest in participating teams using data analysis and predictive modeling.",
      technologies: ["Python", "Streamlit", "Data Analysis"],
      category: "Data Science"
    },
    {
      title: "Air Quality Index (AQI) Prediction",
      description: "Built and evaluated a predictive model to estimate AQI levels from environmental factors. Assessed model accuracy using performance metrics including MAE and MSE.",
      technologies: ["Machine Learning", "Regression", "Python"],
      category: "AI/ML"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing my expertise in AI/ML, web development, and data analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-gradient-accent text-white border-none">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-primary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;