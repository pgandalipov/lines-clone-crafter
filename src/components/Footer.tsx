import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Услуги",
      links: [
        { name: "Системная интеграция", href: "/services", internal: true },
        { name: "Импортозамещение", href: "/services", internal: true },
        { name: "Аутстаффинг команд", href: "/services", internal: true },
        { name: "Аудит проекта", href: "/services", internal: true }
      ]
    },
    {
      title: "Компания",
      links: [
        { name: "О нас", href: "/about", internal: true },
        { name: "Команда", href: "/about", internal: true },
        { name: "Карьера", href: "/about", internal: true },
        { name: "Контакты", href: "/about", internal: true }
      ]
    },
    {
      title: "Ресурсы",
      links: [
        { name: "Блог", href: "/projects", internal: true },
        { name: "Кейсы", href: "/projects", internal: true },
        { name: "Документация", href: "/competencies", internal: true },
        { name: "Поддержка", href: "/about", internal: true }
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Логотип и описание */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg shadow-glow">
                <span className="text-white font-bold text-lg">SMART</span>
              </div>
              <span className="font-bold text-lg text-white">LYTICS</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Умная аналитика и AI-решения для трансформации вашего бизнеса. Превращаем данные в конкурентные преимущества.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                📧
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                📞
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                ✈️
              </a>
            </div>
          </div>

          {/* Ссылки */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.internal ? (
                      <Link 
                        to={link.href}
                        className="text-background/70 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        className="text-background/70 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/70 text-sm mb-4 md:mb-0">
              © {currentYear} SmartLytics. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-background/70 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;