
import { useEffect } from 'react';

const MobileMenuScript = () => {
  useEffect(() => {
    // Добавляем кнопку и оверлей для мобильного меню
    const setupMobileMenu = () => {
      // Проверяем, существует ли уже бургер и оверлей
      if (document.querySelector('.burger-button') || document.querySelector('.burger-overlay')) {
        return;
      }

      // Создаем кнопку бургер-меню
      const burgerButton = document.createElement('button');
      burgerButton.className = 'burger-button';
      burgerButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
      burgerButton.style.cssText = `
        position: fixed;
        top: 15px;
        right: 15px;
        z-index: 100;
        background: none;
        border: none;
        cursor: pointer;
        display: none;
        padding: 8px;
        background-color: white;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      `;

      // Создаем оверлей
      const overlay = document.createElement('div');
      overlay.className = 'burger-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 45;
        display: none;
      `;

      // Добавляем элементы в DOM
      document.body.appendChild(burgerButton);
      document.body.appendChild(overlay);

      // Находим элемент навигации
      const headerNav = document.querySelector('.header-nav') as HTMLElement;
      if (!headerNav) return;

      // Добавляем обработчик клика для кнопки
      burgerButton.addEventListener('click', () => {
        if (headerNav.classList.contains('open')) {
          headerNav.classList.remove('open');
          overlay.style.display = 'none';
          burgerButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          `;
          document.body.style.overflow = '';
        } else {
          headerNav.classList.add('open');
          overlay.style.display = 'block';
          burgerButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          `;
          document.body.style.overflow = 'hidden';
        }
      });

      // Добавляем обработчик клика для оверлея
      overlay.addEventListener('click', () => {
        headerNav.classList.remove('open');
        overlay.style.display = 'none';
        burgerButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
        document.body.style.overflow = '';
      });

      // Добавляем медиа-запрос для показа кнопки только на мобильных
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      
      function handleMobileChange(e: MediaQueryListEvent | MediaQueryList) {
        if (e.matches) {
          burgerButton.style.display = 'block';
        } else {
          burgerButton.style.display = 'none';
          headerNav.classList.remove('open');
          overlay.style.display = 'none';
          document.body.style.overflow = '';
        }
      }
      
      handleMobileChange(mediaQuery); // Вызываем при загрузке
      mediaQuery.addEventListener('change', handleMobileChange);

      // Настраиваем поведение выпадающих меню на мобильной версии
      const dropdowns = document.querySelectorAll('.nav-dropdown > a');
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = (this as HTMLElement).parentElement;
            parent?.classList.toggle('active');
          }
        });
      });
    };

    // Вызываем функцию после загрузки DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupMobileMenu);
    } else {
      setupMobileMenu();
    }

    // Удаляем все при размонтировании компонента
    return () => {
      const burgerButton = document.querySelector('.burger-button');
      const overlay = document.querySelector('.burger-overlay');
      
      if (burgerButton) document.body.removeChild(burgerButton);
      if (overlay) document.body.removeChild(overlay);
      
      document.body.style.overflow = '';
    };
  }, []);

  return null;
};

export default MobileMenuScript;
