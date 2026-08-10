import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToBuy = () => {
    setIsOpen(false);
    const form = document.getElementById('purchase-form');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
    else navigate('/'); // fallback
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-bold text-gray-900">
            PRO<span className="text-blue-600">SALES</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <NavLink to="/?tab=VSL" className="text-gray-600 hover:text-gray-900 font-medium">VSL</NavLink>
            <NavLink to="/?tab=TSL" className="text-gray-600 hover:text-gray-900 font-medium">TSL</NavLink>
            <button onClick={handleScrollToBuy} className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
              Купить
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4 shadow-xl absolute w-full">
          <NavLink to="/?tab=VSL" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium text-gray-800">VSL</NavLink>
          <NavLink to="/?tab=TSL" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium text-gray-800">TSL</NavLink>
          <button onClick={handleScrollToBuy} className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mt-4">
            Купить сейчас
          </button>
        </div>
      )}
    </header>
  );
}
