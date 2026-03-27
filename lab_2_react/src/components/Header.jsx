function Header() {
  return (
    // bg-gradient-to-r створює плавний перехід кольору [cite: 84, 85]
    // shadow-lg додає помітну тінь [cite: 88, 94]
    <header className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-10 rounded-b-3xl shadow-lg mb-8">
      {/* text-5xl робить ім'я великим і помітним [cite: 73] */}
      <h1 className="text-5xl font-extrabold tracking-tight mb-2 uppercase">д.г</h1>
      {/* opacity-80 робить підзаголовок менш яскравим для ієрархії [cite: 75] */}
      <p className="text-2xl font-light opacity-90 tracking-wide">Студент</p>
    </header>
  );
}

export default Header;