
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <div className="banner">
          <div className="banner__text">
            Добро пожаловать в T-Rex Entertainment!
          </div>
          <button className="banner__button">
            <img 
              src="https://github.com/T-Rex-Entertainment/T-Rex-Entertainment.github.io/blob/main/images/arrowdown.png?raw=true" 
              alt="Scroll Down" 
              width="40" 
              height="40" 
            />
          </button>
        </div>
        
        <section className="about">
          <h2>О НАШЕЙ СТУДИИ</h2>
          <p>
            Мы - команда разработчиков игр, создающая увлекательные миры и незабываемые впечатления.
            Наша миссия - делать игры, которые объединяют людей и дарят радость.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2025 T-Rex Entertainment. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
