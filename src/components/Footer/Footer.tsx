import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-4">PRO<span className="text-blue-500">SALES</span></h2>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
          <a href="#" className="hover:text-white transition">Условия использования</a>
          <a href="#" className="hover:text-white transition">Контакты</a>
        </div>
        <p>© {new Date().getFullYear()} PROSALES. Все права защищены.</p>
      </div>
    </footer>
  );
}
