import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = [
    { name: "Компетенции", href: "#competencies" },
    { name: "Услуги", href: "#services" },
    { name: "О нас", href: "#about" },
    { name: "Сообщество", href: "#community" },
    { name: "Инвесторам", href: "#investors" },
    { name: "Проектный опыт", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <span className="text-white font-bold text-lg">7RED</span>
            </div>
            <span className="font-bold text-lg">LINES</span>
          </div>

          {/* Навигация */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Контакты */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+7" className="text-sm text-muted-foreground hover:text-primary">
              📞
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              ✈️
            </a>
            <a href="mailto:" className="text-sm text-muted-foreground hover:text-primary">
              ✉️
            </a>
          </div>

          {/* Мобильное меню */}
          <Button variant="ghost" size="sm" className="lg:hidden">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;