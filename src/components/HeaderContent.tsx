
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const HeaderContent = () => {
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
    <header className="header">
      <a href="/ru">
        <img 
          src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/logo.png?raw=true" 
          alt="T-Rex-Entertainment" 
          className="header__logo"
        />
      </a>
      
      {/* Мобильная кнопка для меню */}
      <button 
        className="mobile-menu-button" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        style={{
          display: window.innerWidth <= 768 ? 'block' : 'none',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 1001
        }}
      >
        {isMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
      </button>
      
      {/* Навигация */}
      <nav className={`header-nav ${isMenuOpen ? 'mobile-open' : ''}`}
        style={{
          ...(window.innerWidth <= 768 && {
            position: 'fixed',
            top: 0,
            right: isMenuOpen ? 0 : '-100%',
            width: '80%',
            maxWidth: '320px',
            height: '100vh',
            backgroundColor: '#151515',
            padding: '80px 20px 20px',
            transition: 'right 0.3s ease',
            zIndex: 1000,
            overflowY: 'auto'
          })
        }}
      >
        <ul data-depth="0" 
          style={{
            ...(window.innerWidth <= 768 && {
              flexDirection: 'column', 
              width: '100%'
            })
          }}
        >
          <li className={`nav-dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
            <a 
              href="/ru/about-us" 
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('about');
                }
              }}
              style={{
                ...(window.innerWidth <= 768 && {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #333',
                  padding: '15px 10px',
                  width: '100%'
                })
              }}
            >
              О НАС
              {window.innerWidth <= 768 && (
                <span style={{ marginLeft: '10px', fontSize: '12px' }}>
                  {activeDropdown === 'about' ? '▲' : '▼'}
                </span>
              )}
            </a>
            <div className={`nav-dropdown-menu ${activeDropdown === 'about' ? 'mobile-visible' : ''}`}
              style={{
                ...(window.innerWidth <= 768 && activeDropdown === 'about' && {
                  opacity: 1,
                  visibility: 'visible',
                  maxHeight: '1000px',
                  padding: '10px',
                  position: 'static',
                  backgroundColor: '#333'
                }),
                ...(window.innerWidth <= 768 && activeDropdown !== 'about' && {
                  maxHeight: 0,
                  padding: 0,
                  overflow: 'hidden'
                })
              }}
            >
              <ul data-depth="1">
                <li>
                  <a href="/ru/about-us">
                    Наша Студия
                  </a>
                </li>
                <li>
                  <a href="/ru/team">
                    Наша Команда
                  </a>
                </li>
                <li>
                  <a href="/ru/blog">
                    Наш Блог
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="/ru/our-games"
              style={{
                ...(window.innerWidth <= 768 && {
                  borderBottom: '1px solid #333',
                  padding: '15px 10px',
                  width: '100%'
                })
              }}
            >
              НАШИ ИГРЫ
            </a>
          </li>
          <li className={`nav-dropdown ${activeDropdown === 'jobs' ? 'active' : ''}`}>
            <a 
              href="/ru/jobs" 
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  toggleDropdown('jobs');
                }
              }}
              style={{
                ...(window.innerWidth <= 768 && {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #333',
                  padding: '15px 10px',
                  width: '100%'
                })
              }}
            >
              ПРИСОЕДИНЯЙТЕСЬ К НАМ
              {window.innerWidth <= 768 && (
                <span style={{ marginLeft: '10px', fontSize: '12px' }}>
                  {activeDropdown === 'jobs' ? '▲' : '▼'}
                </span>
              )}
            </a>
            <div className={`nav-dropdown-menu ${activeDropdown === 'jobs' ? 'mobile-visible' : ''}`}
              style={{
                ...(window.innerWidth <= 768 && activeDropdown === 'jobs' && {
                  opacity: 1,
                  visibility: 'visible',
                  maxHeight: '1000px',
                  padding: '10px',
                  position: 'static',
                  backgroundColor: '#333'
                }),
                ...(window.innerWidth <= 768 && activeDropdown !== 'jobs' && {
                  maxHeight: 0,
                  padding: 0,
                  overflow: 'hidden'
                })
              }}
            >
              <ul data-depth="1">
                <li>
                  <a href="/ru/perks-and-benefits">
                    Льготы и Преимущества
                  </a>
                </li>
                <li>
                  <a href="/ru/recruitment">
                    Процесс Набора
                  </a>
                </li>
                <li>
                  <a href="/ru/internship">
                    Летняя Стажировка
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      
      {/* Социальные сети и переключатель языка для десктопа */}
      <div className="header__links" style={{ display: window.innerWidth <= 768 ? 'none' : 'flex' }}>
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
      <div className="header__language" style={{ display: window.innerWidth <= 768 ? 'none' : 'flex' }}>
        <a href="/ru"><span className="active" id="lang-ru">RU</span></a> / 
        <a href="/en"><span id="lang-en">ENG</span></a>
      </div>
      
      {/* Мобильные соцсети и язык (внутри выпадающего меню) */}
      {isMenuOpen && window.innerWidth <= 768 && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: 0,
          right: 0,
          backgroundColor: '#222',
          padding: '15px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderTop: '1px solid #333'
        }}>
          <div className="header__links" style={{ marginBottom: '10px' }}>
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
      {isMenuOpen && window.innerWidth <= 768 && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 990
          }}
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default HeaderContent;
