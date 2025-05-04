
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-black">Добро пожаловать!</h1>
          <p className="text-xl text-gray-600">Сайт T-Rex Entertainment</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
