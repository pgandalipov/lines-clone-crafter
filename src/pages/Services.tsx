import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Консультирование по аналитике",
    description: "Разработка стратегии внедрения аналитических решений в вашем бизнесе",
    features: ["Аудит текущих процессов", "Roadmap развития", "Выбор технологий", "Обучение команды"],
    price: "от 200 000 ₽"
  },
  {
    title: "Разработка BI-систем",
    description: "Создание комплексных решений для бизнес-аналитики и отчетности",
    features: ["Дашборды и отчеты", "Автоматизация", "Интеграция с системами", "Мобильные приложения"],
    price: "от 500 000 ₽"
  },
  {
    title: "Интеграция данных",
    description: "Объединение разрозненных источников в единую аналитическую платформу",
    features: ["ETL/ELT процессы", "Data Lake/Warehouse", "API интеграция", "Качество данных"],
    price: "от 300 000 ₽"
  },
  {
    title: "Аутстаффинг команд",
    description: "Предоставление высококвалифицированных аналитиков и разработчиков",
    features: ["Data Scientists", "BI-разработчики", "Data Engineers", "Проектные команды"],
    price: "от 150 000 ₽/мес"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Наши услуги
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Полный спектр решений для внедрения аналитики в ваш бизнес
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-primary font-bold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">
                  Узнать подробнее
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Как мы работаем
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Проверенная методология реализации аналитических проектов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Анализ", desc: "Изучаем ваши процессы и потребности" },
              { step: "02", title: "Планирование", desc: "Создаем детальный план реализации" },
              { step: "03", title: "Разработка", desc: "Внедряем решения поэтапно" },
              { step: "04", title: "Поддержка", desc: "Обеспечиваем стабильную работу" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;