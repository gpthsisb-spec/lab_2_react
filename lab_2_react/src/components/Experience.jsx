function Experience() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      {/* Стилізація заголовка секції з лінією знизу [cite: 86, 89] */}
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-4 border-blue-500 inline-block">
        Досвід роботи
      </h2>
      
      {/* Картка досвіду з ефектом hover [cite: 84, 90] */}
      <div className="bg-white p-6 rounded-2xl shadow-md border-l-8 border-blue-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-2xl font-bold text-blue-900">Студент-розробник</h3>
        <p className="text-slate-500 font-medium italic mb-4">Навчальна практика, 2026</p>
        
        {/* Стилізація списку [cite: 87] */}
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-slate-700">Створення семантичної розмітки на HTML.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-slate-700">Робота з Git (ініціалізація, коміти).</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-slate-700">чччччччч.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;