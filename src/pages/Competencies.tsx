import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const competencies = [
  {
    title: "Бизнес-аналитика и BI",
    description: "Разработка и внедрение систем бизнес-аналитики для принятия данных-ориентированных решений",
    skills: ["Power BI", "Tableau", "Qlik Sense", "Custom BI solutions"]
  },
  {
    title: "Машинное обучение",
    description: "Создание предиктивных моделей и алгоритмов для автоматизации аналитических процессов",
    skills: ["Python/R", "TensorFlow", "Scikit-learn", "MLOps"]
  },
  {
    title: "Интеграция данных",
    description: "Объединение разрозненных источников данных в единую аналитическую платформу",
    skills: ["ETL/ELT", "API Integration", "Data Warehousing", "Real-time processing"]
  },
  {
    title: "Облачные решения",
    description: "Миграция и разработка аналитических решений в облачной инфраструктуре",
    skills: ["AWS", "Azure", "Google Cloud", "Hybrid solutions"]
  }
];

const Competencies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наши компетенции
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Глубокая экспертиза в области аналитики данных и системной интеграции
            </p>
          </div>
        </div>
      </section>

      {/* Competencies Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competencies.map((competency, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {competency.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {competency.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {competency.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Готовы применить нашу экспертизу?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Расскажите о вашей задаче, и мы предложим оптимальное решение
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            Обсудить проект
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Competencies;