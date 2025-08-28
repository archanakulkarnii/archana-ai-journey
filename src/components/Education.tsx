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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 animate-slide-in">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      {edu.field && <CardDescription className="text-primary font-medium">{edu.field}</CardDescription>}
                      <CardDescription className="mt-1">{edu.institution}</CardDescription>
                    </div>
                    {edu.current && (
                      <Badge className="bg-gradient-primary">Current</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.duration}
                    </div>
                    <Badge variant="outline" className="font-semibold text-primary">
                      {edu.grade}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-primary" />
              Achievements
            </h3>
            <Card className="shadow-card">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-4">
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
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