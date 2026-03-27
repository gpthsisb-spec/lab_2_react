import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    // Отримуємо дані про браузер та платформу
    const info = `${navigator.userAgent} (${navigator.platform})`;
    // Зберігаємо в localStorage [cite: 833]
    localStorage.setItem('system_info', info);
    // Оновлюємо стан [cite: 834]
    setSysInfo(info);
  }, []);

  return (
    <footer className="p-4 bg-slate-800 text-white text-center text-xs">
      <p>© 2026 д.г. Всі права захищені.</p>
      <p className="mt-2 opacity-60">Ваша система: {sysInfo}</p>
    </footer>
  );
}

export default Footer;