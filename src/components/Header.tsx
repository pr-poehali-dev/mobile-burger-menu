
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
    <header className="header relative flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <a href="/ru" className="z-10">
        <img 
          src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/logo.png?raw=true" 
          alt="T-Rex-Entertainment" 
          className="header__logo h-12"
        />
      </a>
      
      {/* Мобильная кнопка для меню */}
      <button 
        className="md:hidden z-50 p-2" 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Навигация */}
      <div 
        className={`
          col-md-8 col-xl-4 fixed md:static top-0 right-0 h-full md:h-auto w-4/5 md:w-auto 
          bg-white md:bg-transparent z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          pt-16 md:pt-0 overflow-y-auto md:overflow-visible shadow-lg md:shadow-none
        `}
      >
        <nav className="header-nav px-4 md:px-0">
          <ul data-depth="0" className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <li className={`nav-dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
              <a 
                href="/ru/about-us" 
                className="block text-gray-800 font-medium hover:text-gray-600"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown('about');
                  }
                }}
              >
                О НАС
                <span className="ml-1 md:hidden">{activeDropdown === 'about' ? '▲' : '▼'}</span>
              </a>
              <div className={`nav-dropdown-menu mt-2 md:absolute md:bg-white md:shadow-md md:rounded md:p-2 md:min-w-44
                ${activeDropdown === 'about' || window.innerWidth > 768 ? '' : 'hidden'}
              `}>
                <ul data-depth="1" className="pl-4 md:pl-0 space-y-2">
                  <li>
                    <a href="/ru/about-us" className="block py-1 text-gray-700 hover:text-gray-900">
                      Наша Студия
                    </a>
                  </li>
                  <li>
                    <a href="/ru/team" className="block py-1 text-gray-700 hover:text-gray-900">
                      Наша Команда
                    </a>
                  </li>
                  <li>
                    <a href="/ru/blog" className="block py-1 text-gray-700 hover:text-gray-900">
                      Наш Блог
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/ru/our-games" className="block text-gray-800 font-medium hover:text-gray-600">
                НАШИ ИГРЫ
              </a>
            </li>
            <li className={`nav-dropdown ${activeDropdown === 'jobs' ? 'active' : ''}`}>
              <a 
                href="/ru/jobs" 
                className="block text-gray-800 font-medium hover:text-gray-600"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    toggleDropdown('jobs');
                  }
                }}
              >
                ПРИСОЕДИНЯЙТЕСЬ К НАМ
                <span className="ml-1 md:hidden">{activeDropdown === 'jobs' ? '▲' : '▼'}</span>
              </a>
              <div className={`nav-dropdown-menu mt-2 md:absolute md:bg-white md:shadow-md md:rounded md:p-2 md:min-w-44
                ${activeDropdown === 'jobs' || window.innerWidth > 768 ? '' : 'hidden'}
              `}>
                <ul data-depth="1" className="pl-4 md:pl-0 space-y-2">
                  <li>
                    <a href="/ru/perks-and-benefits" className="block py-1 text-gray-700 hover:text-gray-900">
                      Льготы и Преимущества
                    </a>
                  </li>
                  <li>
                    <a href="/ru/recruitment" className="block py-1 text-gray-700 hover:text-gray-900">
                      Процесс Набора
                    </a>
                  </li>
                  <li>
                    <a href="/ru/internship" className="block py-1 text-gray-700 hover:text-gray-900">
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
      <div className="hidden md:flex items-center">
        <div className="header__links flex space-x-3">
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
        <div className="header__language ml-5">
          <a href="/ru"><span className="active" id="lang-ru">RU</span></a> / 
          <a href="/en"><span id="lang-en">ENG</span></a>
        </div>
      </div>
      
      {/* Мобильные соцсети и язык (внутри выпадающего меню) */}
      {isMenuOpen && (
        <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4">
          <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <div className="header__links flex space-x-4 mb-3">
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
        </div>
      )}
      
      {/* Затемнение фона при открытом меню */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
