import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "Единая аналитическая платформа для ритейла",
    client: "Крупная сеть супермаркетов",
    description: "Интеграция данных из 200+ магазинов в единую BI-систему с real-time дашбордами",
    technologies: ["Power BI", "Azure Data Factory", "SQL Server", "Python"],
    results: ["Сокращение времени на формирование отчетов в 10 раз", "Увеличение точности прогнозов на 25%", "ROI 300% за первый год"],
    category: "BI & Analytics"
  },
  {
    title: "Система предиктивной аналитики для производства",
    client: "Машиностроительный завод",
    description: "ML-модели для предсказания поломок оборудования и оптимизации производственных процессов",
    technologies: ["Python", "TensorFlow", "Apache Kafka", "Elasticsearch"],
    results: ["Снижение незапланированных простоев на 40%", "Экономия на обслуживании 15М ₽/год", "Увеличение OEE на 12%"],
    category: "Machine Learning"
  },
  {
    title: "Data Lake для финтех-компании",
    client: "Платежная система",
    description: "Создание корпоративного хранилища данных и системы мониторинга транзакций",
    technologies: ["AWS S3", "Spark", "Airflow", "Tableau"],
    results: ["Обработка 50M транзакций/день", "Сокращение времени расследования мошенничества в 5 раз", "Автоматизация 80% отчетов"],
    category: "Data Engineering"
  },
  {
    title: "CRM-аналитика для телекома",
    client: "Региональный оператор связи",
    description: "Внедрение системы анализа клиентского поведения и прогнозирования оттока",
    technologies: ["R", "PostgreSQL", "Qlik Sense", "API Integration"],
    results: ["Снижение оттока клиентов на 18%", "Увеличение ARPU на 22%", "Персонализация для 500K+ абонентов"],
    category: "Customer Analytics"
  },
  {
    title: "Цифровая трансформация логистики",
    client: "Транспортная компания",
    description: "Оптимизация маршрутов и управление парком через IoT и аналитику",
    technologies: ["IoT Sensors", "Power BI", "Azure ML", "GPS Tracking"],
    results: ["Снижение расхода топлива на 15%", "Улучшение пунктуальности на 30%", "Сокращение простоев на 25%"],
    category: "IoT & Logistics"
  },
  {
    title: "Система мониторинга качества в фарме",
    client: "Фармацевтический завод",
    description: "Real-time контроль качества продукции с использованием статистических методов",
    technologies: ["SPC", "Python", "InfluxDB", "Grafana"],
    results: ["100% соответствие стандартам GMP", "Сокращение брака на 35%", "Автоматизация контроля качества"],
    category: "Quality Control"
  }
];

const categories = ["Все проекты", "BI & Analytics", "Machine Learning", "Data Engineering", "Customer Analytics", "IoT & Logistics", "Quality Control"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Все проекты");
  
  const filteredProjects = activeCategory === "Все проекты" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Проектный опыт
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Успешные кейсы внедрения аналитических решений в различных отраслях
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="text-sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-primary font-semibold mb-4">
                  {project.client}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Технологии:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">Результаты:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" className="w-full">
                  Подробнее о проекте
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Результаты в цифрах
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Измеримые улучшения, которых достигли наши клиенты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">350%</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Средний ROI</h3>
              <p className="text-muted-foreground">По всем проектам за первый год</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">85%</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Сокращение времени</h3>
              <p className="text-muted-foreground">На подготовку аналитических отчетов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">40%</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Повышение эффективности</h3>
              <p className="text-muted-foreground">Бизнес-процессов в среднем</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-4">98%</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Успешных внедрений</h3>
              <p className="text-muted-foreground">Проекты сданы в срок и бюджет</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Хотите похожих результатов?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Обсудим вашу задачу и найдем оптимальное решение для вашего бизнеса
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Начать проект
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;