const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Услуги",
      links: [
        { name: "Системная интеграция", href: "#systems" },
        { name: "Импортозамещение", href: "#import" },
        { name: "Аутстаффинг команд", href: "#outstaffing" },
        { name: "Аудит проекта", href: "#audit" }
      ]
    },
    {
      title: "Компания",
      links: [
        { name: "О нас", href: "#about" },
        { name: "Команда", href: "#team" },
        { name: "Карьера", href: "#career" },
        { name: "Контакты", href: "#contacts" }
      ]
    },
    {
      title: "Ресурсы",
      links: [
        { name: "Блог", href: "#blog" },
        { name: "Кейсы", href: "#cases" },
        { name: "Документация", href: "#docs" },
        { name: "Поддержка", href: "#support" }
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
              <div className="bg-gradient-primary p-2 rounded-lg">
                <span className="text-white font-bold text-lg">7RED</span>
              </div>
              <span className="font-bold text-lg text-white">LINES</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Внедряем аналитику и повышаем эффективность бизнес-процессов через современные ИТ-решения.
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
                    <a 
                      href={link.href}
                      className="text-background/70 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
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
              © {currentYear} 7RED LINES. Все права защищены.
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