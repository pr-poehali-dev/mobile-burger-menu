
import Header from '@/components/Header';

const Index = () => {
  return (
    <>
      <Header />
      <main className="main">  
        {/* Баннер */}
        <div className="banner">
          <video className="banner__video" autoPlay loop muted playsInline>
            <source src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/videos/primer1.mp4?raw=true" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="banner__text" id="banner-text">CREATORS OF INTERACTIVE STORIES</div>
          <button 
            className="banner__button" 
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          >
            <img 
              src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/arrow.png?raw=true" 
              alt="Arrow" 
              width="40" 
              height="40" 
            />
          </button>
        </div>

        {/* Новости */}
        <section className="news-section">
          <h2 id="news-title">Новости</h2>
          {/* Контейнер для новостей */}
          <div id="news-container" className="news-list">
            {/* Здесь будут динамически загружаться новости */}
          </div>
        </section>
        
        {/* Контакты */}
        <section className="contacts">
          <h2>Контакты</h2>
          <p>Email: trex-entertainment@gmail.com</p>
          <p>Адрес: 1234 Street Name, City, Country</p>
        </section>
      </main>

      {/* Куки-уведомление */}
      <div id="cookie-consent" style={{ display: 'none' }}>
        <p>Этот сайт использует cookies для улучшения работы с пользователем. <a href="/privacy-policy">Подробнее</a>.</p>
        <button id="accept-cookies">Принять</button>
        <button id="decline-cookies">Отказаться</button>
      </div>

      {/* Кнопка прокрутки вверх */}
      <button 
        className="scroll-to-top" 
        style={{ display: 'none' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img 
          src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/arrowup.png?raw=true" 
          alt="Scroll to top" 
          width="40" 
          height="40" 
        />
      </button>
    </>
  );
};

export default Index;
