import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // Відкриваємо через 1 хв 
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-8 rounded-2xl max-w-md w-full relative">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500">✕</button>
        <h2 className="text-xl font-bold mb-4">Зворотній зв'язок</h2>
        {/* Заміни ВАШ_ЕНДПОЙНТ на посилання з Formspree [cite: 852] */}
        <form action="https://formspree.io/f/mojkbrnz" method="POST" className="flex flex-col gap-3">
          <input type="text" name="name" placeholder="Ваше ім'я" className="border p-2 rounded" required />
          <input type="email" name="email" placeholder="Email" className="border p-2 rounded" required />
          <textarea name="message" placeholder="Повідомлення" className="border p-2 rounded" required></textarea>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Відправити</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;