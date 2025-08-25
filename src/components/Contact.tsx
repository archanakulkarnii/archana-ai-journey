import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Github, Linkedin, Code, Trophy } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "bf77ed56-a2f3-4f63-9ea5-a954ab3ae883");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "archanakulkarni134@gmail.com",
      href: "mailto:archanakulkarni134@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8951394626",
      href: "tel:+918951394626"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/archanakulkarnii",
      href: "https://github.com/archanakulkarnii"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/archana-kulkarni-46227631a",
      href: "https://linkedin.com/in/archana-kulkarni-46227631a"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/archana_kulkarni_/",
      href: "https://leetcode.com/u/archana_kulkarni_/"
    },
    {
      icon: Trophy,
      label: "HackerRank",
      value: "hackerrank.com/profile/archanakulkarni4",
      href: "https://hackerrank.com/profile/archanakulkarni4"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for internship opportunities and collaborations in AI/ML and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Let's discuss potential opportunities and collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell me about the opportunity or project you'd like to discuss..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Connect with me through various platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : '_self'}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="flex items-center p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                      >
                        <div className="p-2 bg-gradient-primary rounded-lg mr-4 group-hover:shadow-glow transition-all duration-300">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-accent text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Open to Opportunities</h3>
                <p className="text-sm opacity-90">
                  I'm actively seeking internship opportunities where I can apply my AI/ML expertise 
                  and contribute to meaningful projects. Let's build something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;