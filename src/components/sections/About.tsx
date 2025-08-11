import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Database, BarChart3, Brain } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Engineering",
      description: "ETL pipelines, database optimization, and data warehouse design"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Visualization",
      description: "Interactive dashboards and compelling visual storytelling"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Statistical Analysis",
      description: "Advanced statistical modeling and predictive analytics"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Machine Learning",
      description: "Supervised and unsupervised learning algorithms"
    }
  ];

  const tools = [
    "Python", "R", "SQL", "Tableau", "Power BI", "Excel", 
    "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Apache Spark", "PostgreSQL"
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-to-r from-primary to-data-teal bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate data analyst with 5+ years of experience turning complex datasets 
              into strategic business insights and data-driven solutions.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I specialize in extracting meaningful patterns from complex datasets and 
                translating them into actionable business strategies. My approach combines 
                statistical rigor with creative problem-solving to deliver insights that 
                drive real business impact.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                From exploratory data analysis to advanced machine learning models, 
                I help organizations make data-driven decisions that accelerate growth 
                and optimize operations.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-data-teal">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-data-purple">100M+</div>
                  <div className="text-sm text-muted-foreground">Records Analyzed</div>
                </div>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="text-primary mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;