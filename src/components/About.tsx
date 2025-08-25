import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Database, Laptop } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Programming", items: ["Python", "Data Structures", "HTML & CSS", "MySQL"], icon: Code },
    { category: "AI/ML", items: ["Machine Learning", "Regression Analysis", "Model Evaluation"], icon: Brain },
    { category: "Tools", items: ["Flask", "Streamlit", "SQLite", "Bootstrap"], icon: Laptop },
    { category: "Languages", items: ["English", "Hindi", "Kannada"], icon: Database }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate B.E. student in Artificial Intelligence and Machine Learning with a current CGPA of 9.24/10. 
              Skilled in Python, Data Structures, and Machine Learning, I actively develop real-world projects and solve 
              coding challenges on platforms like LeetCode and HackerRank. I am seeking an internship opportunity where I can 
              apply my technical expertise, contribute to impactful solutions, and further enhance my professional growth 
              in a collaborative environment.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gradient-primary rounded-lg mr-3">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;