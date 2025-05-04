
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  // Закрываем меню при ресайзе окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <header className="header relative">
      <a href="/" className="z-10">
        <img 
          src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/logo.png?raw=true" 
          alt="T-Rex-Entertainment" 
          className="header__logo"
        />
      </a>
      
      {/* Мобильная кнопка для меню */}
      <button 
        className="burger-button" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
      >
        {isMenuOpen ? (
          <X size={24} color="#fff" />
        ) : (
          <Menu size={24} color="#fff" />
        )}
      </button>
      
      {/* Навигация */}
      <div 
        className={`mobile-menu-container ${isMenuOpen ? 'open' : ''}`}
      >
        <nav className={`header-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
          <ul data-depth="0">
            <li className={`nav-dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
              <a 
                href="/about-us" 
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown('about');
                  }
                }}
              >
                О НАС
                {window.innerWidth <= 768 && (
                  <span className="dropdown-arrow">{activeDropdown === 'about' ? '▲' : '▼'}</span>
                )}
              </a>
              <div className={`nav-dropdown-menu ${activeDropdown === 'about' ? 'mobile-visible' : ''}`}>
                <ul data-depth="1">
                  <li>
                    <a href="/about-us">
                      Наша Студия
                    </a>
                  </li>
                  <li>
                    <a href="/team">
                      Наша Команда
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      Наш Блог
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/our-games">
                НАШИ ИГРЫ
              </a>
            </li>
            <li className={`nav-dropdown ${activeDropdown === 'jobs' ? 'active' : ''}`}>
              <a 
                href="/jobs" 
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown('jobs');
                  }
                }}
              >
                ПРИСОЕДИНЯЙТЕСЬ К НАМ
                {window.innerWidth <= 768 && (
                  <span className="dropdown-arrow">{activeDropdown === 'jobs' ? '▲' : '▼'}</span>
                )}
              </a>
              <div className={`nav-dropdown-menu ${activeDropdown === 'jobs' ? 'mobile-visible' : ''}`}>
                <ul data-depth="1">
                  <li>
                    <a href="/perks-and-benefits">
                      Льготы и Преимущества
                    </a>
                  </li>
                  <li>
                    <a href="/recruitment">
                      Процесс Набора
                    </a>
                  </li>
                  <li>
                    <a href="/internship">
                      Летняя Стажировка
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Социальные сети и переключатель языка */}
      <div className="header-social-wrapper">
        <div className="header__links">
          <a href="https://t.me/+Q6rIv-J3vDg1MzQy">
            <img src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/telegram.png?raw=true" alt="Telegram" width="35" height="35" />
          </a>
          <a href="#">
            <img src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/facebook.png?raw=true" alt="Facebook" width="35" height="35" />
          </a>
          <a href="https://youtube.com/@T-RexEntertainment">
            <img src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/youtube.png?raw=true" alt="YouTube" width="35" height="35" />
          </a>
        </div>
        <div className="header__language">
          <a href="/ru"><span className="active" id="lang-ru">RU</span></a> / 
          <a href="/en"><span id="lang-en">ENG</span></a>
        </div>
      </div>
      
      {/* Мобильные соцсети и язык (внутри выпадающего меню) */}
      {isMenuOpen && (
        <div className="mobile-social-wrapper">
          <div className="header__links">
            <a href="https://t.me/+Q6rIv-J3vDg1MzQy">
              <img src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/telegram.png?raw=true" alt="Telegram" width="30" height="30" />
            </a>
            <a href="#">
              <img src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/facebook.png?raw=true" alt="Facebook" width="30" height="30" />
            </a>
            <a href="https://youtube.com/@T-RexEntertainment">
              <img src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/youtube.png?raw=true" alt="YouTube" width="30" height="30" />
            </a>
          </div>
          <div className="header__language">
            <a href="/ru"><span className="active" id="lang-ru-mobile">RU</span></a> / 
            <a href="/en"><span id="lang-en-mobile">ENG</span></a>
          </div>
        </div>
      )}
      
      {/* Затемнение фона при открытом меню */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
