import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, TrendingUp, Users, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      description: "Interactive Tableau dashboard analyzing 2+ years of sales data with automated KPI tracking and predictive forecasting.",
      icon: <BarChart3 className="h-6 w-6" />,
      technologies: ["Tableau", "SQL", "Python", "PostgreSQL"],
      metrics: ["40% faster reporting", "95% accuracy in forecasts"],
      category: "Business Intelligence"
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Machine learning clustering analysis identifying 5 distinct customer segments, leading to 25% increase in marketing ROI.",
      icon: <Users className="h-6 w-6" />,
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      metrics: ["25% increase in ROI", "5 customer segments identified"],
      category: "Machine Learning"
    },
    {
      id: 3,
      title: "E-commerce Analytics Platform",
      description: "End-to-end analytics solution processing 1M+ daily transactions with real-time monitoring and anomaly detection.",
      icon: <ShoppingCart className="h-6 w-6" />,
      technologies: ["Python", "Apache Spark", "Redis", "Power BI"],
      metrics: ["1M+ daily transactions", "Real-time processing"],
      category: "Data Engineering"
    },
    {
      id: 4,
      title: "Financial Fraud Detection",
      description: "Advanced ML model detecting fraudulent transactions with 99.2% accuracy and reduced false positives by 60%.",
      icon: <TrendingUp className="h-6 w-6" />,
      technologies: ["Python", "TensorFlow", "Pandas", "SQL"],
      metrics: ["99.2% accuracy", "60% reduction in false positives"],
      category: "Machine Learning"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="bg-gradient-to-r from-primary to-data-teal bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A showcase of data analysis projects that demonstrate my expertise in 
              turning complex data into actionable business insights.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-accent/20"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary">
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Results</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, index) => (
                        <Badge 
                          key={index} 
                          className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open('https://github.com/Sonukumar6543211', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://github.com/Sonukumar6543211', '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-semibold"
              onClick={() => window.open('https://github.com/Sonukumar6543211', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;