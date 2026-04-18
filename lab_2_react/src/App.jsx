import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// 1. Імпортуємо 3D фон
import Background3D from './components/Background3D';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Автоматичне перемикання теми за часом
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'dark' ? 'dark bg-slate-900 text-white min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
      {/* 2. Додаємо 3D об'єкти на фон */}
      <Background3D />

      <button 
        onClick={toggleTheme}
        className="fixed top-5 right-5 z-[100] p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-200 dark:border-slate-700"
      >
        {theme === 'light' ? '🌙 Нічна' : '☀️ Денна'}
      </button>

      {/* 3. Огортаємо контент у відносний позиціонінг із z-index, щоб він був поверх 3D */}
      <main className="relative z-10">
        <Header />
        <div className="container mx-auto py-8 space-y-10">
          <Experience />
          <Reviews />
        </div>
        <ContactForm />
      </main>
      
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default App;