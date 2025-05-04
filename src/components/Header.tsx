
import { useEffect, useState } from 'react';
import HeaderContent from './HeaderContent';

const Header = () => {
  const [isHeaderReady, setIsHeaderReady] = useState(false);

  // Имитация загрузки header через fetch как в твоем исходном коде
  useEffect(() => {
    // Задержка для имитации загрузки
    const timer = setTimeout(() => {
      setIsHeaderReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isHeaderReady) {
    return <div className="header-placeholder">Загрузка...</div>;
  }

  return <HeaderContent />;
};

export default Header;
