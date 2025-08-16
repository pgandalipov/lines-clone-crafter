import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Алексей Петров",
    position: "CEO & Data Science Lead",
    experience: "10+ лет в аналитике",
    description: "Эксперт по машинному обучению и стратегическому планированию"
  },
  {
    name: "Мария Сидорова", 
    position: "CTO & Solutions Architect",
    experience: "8+ лет в BI-разработке",
    description: "Архитектор корпоративных аналитических решений"
  },
  {
    name: "Дмитрий Иванов",
    position: "Lead Data Engineer", 
    experience: "7+ лет в интеграции данных",
    description: "Специалист по созданию надежных data pipeline"
  },
  {
    name: "Елена Козлова",
    position: "Business Analyst",
    experience: "6+ лет в бизнес-анализе",
    description: "Эксперт по трансформации бизнес-требований в техрешения"
  }
];

const values = [
  {
    title: "Качество",
    description: "Каждое решение проходит многоуровневое тестирование и соответствует лучшим практикам индустрии"
  },
  {
    title: "Прозрачность", 
    description: "Открытые коммуникации на всех этапах проекта, регулярная отчетность и feedback"
  },
  {
    title: "Инновации",
    description: "Используем передовые технологии и подходы для решения сложных аналитических задач"
  },
  {
    title: "Результат",
    description: "Фокусируемся на достижении конкретных бизнес-целей и измеримых KPI"
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              О компании SmartLytics
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Мы превращаем данные в конкурентные преимущества вашего бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Наша миссия
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Помогаем компаниям принимать обоснованные решения на основе данных. 
              Мы создаем аналитические решения, которые трансформируют бизнес-процессы 
              и открывают новые возможности для роста.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">50+</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Проектов</h3>
                <p className="text-muted-foreground">Успешно реализованных решений</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">5</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Лет опыта</h3>
                <p className="text-muted-foreground">На рынке аналитических решений</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">95%</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Довольных клиентов</h3>
                <p className="text-muted-foreground">Рекомендуют наши услуги</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Наша команда
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты с глубокой экспертизой в области аналитики данных
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {member.position}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {member.experience}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Наши ценности
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы к сотрудничеству?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Расскажите о вашей задаче, и мы найдем оптимальное решение
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Связаться с нами
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;