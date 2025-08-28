import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Artificial Intelligence & Machine Learning",
      institution: "Ballari Institute of Technology and Management",
      duration: "2022 – Present (Expected: 2026)",
      grade: "CGPA: 9.24/10",
      current: true
    },
    {
      degree: "Pre-University (PUC)",
      field: "",
      institution: "Bellary Residential School and College",
      duration: "2020 – 2022",
      grade: "Percentage: 91%",
      current: false
    },
    {
      degree: "Secondary School (SSLC)",
      field: "",
      institution: "Bala Bharathi Vivekananda High School",
      duration: "2020",
      grade: "Percentage: 91%",
      current: false
    }
  ];

  const achievements = [
    "Selected among top 120 students in the Super120 batch out of 900 participants",
    "Secured Top 3 position in Department-level Competition",
    "Won 2nd place in Short Movie Competition",
    "Cleared Junior Grade Certification in Hindustani Music"
  ];

  const certifications = [
    { name: "Python", provider: "EZ Trainings and Technologies" },
    { name: "Data Structures and Algorithms", provider: "Infosys Springboard" },
    { name: "Cloud Computing- AWS Cloud Practitioner", provider: "Amazon Web Services" }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        {/* Education */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-glow hover:shadow-xl transition-all duration-500 animate-fade-in border-primary/10 bg-gradient-to-r from-background via-background/95 to-background/90">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-2">{edu.degree}</CardTitle>
                      {edu.field && <CardDescription className="text-lg text-primary font-semibold mb-1">{edu.field}</CardDescription>}
                      <CardDescription className="text-base text-muted-foreground font-medium">{edu.institution}</CardDescription>
                    </div>
                    {edu.current && (
                      <Badge className="bg-gradient-primary text-white px-4 py-2 text-sm font-semibold shadow-lg">
                        Current
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-base text-muted-foreground">
                      <Calendar className="mr-3 h-5 w-5 text-primary" />
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    <Badge variant="outline" className="font-bold text-lg text-primary border-primary/30 px-4 py-2">
                      {edu.grade}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Achievements */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center justify-center lg:justify-start">
              <Award className="mr-4 h-8 w-8 text-primary" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Achievements</span>
            </h3>
            <Card className="shadow-glow hover:shadow-xl transition-all duration-500 border-primary/10 bg-gradient-to-br from-background via-background/95 to-background/90">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gradient-primary rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-base leading-relaxed font-medium text-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center justify-center lg:justify-start">
              <GraduationCap className="mr-4 h-8 w-8 text-primary" />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-glow hover:shadow-xl transition-all duration-500 border-primary/10 bg-gradient-to-r from-background via-background/95 to-background/90 group">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{cert.name}</h4>
                    <p className="text-base text-muted-foreground font-medium">{cert.provider}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;