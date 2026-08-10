import React, { useState } from 'react';
import { products } from '../../data/products';

export function PurchaseForm() {
  const product = products[0]; // For demo, use first product
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const selectedVariant = product.variants.find(v => v.id === variantId)!;
  const total = selectedVariant.price * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center max-w-2xl mx-auto my-16">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Спасибо! Ваш заказ принят.</h3>
        <p className="text-green-600">Мы свяжемся с вами в ближайшее время для подтверждения.</p>
      </div>
    );
  }

  return (
    <section id="purchase-form" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-blue-600 p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Оформить заказ</h2>
            <p className="text-blue-100">Заполните форму ниже для получения доступа</p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Имя</label><input required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Фамилия</label><input required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /></div>
              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /></div>
              <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label><input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /></div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Выбор варианта</h3>
              <div className="space-y-3">
                {product.variants.map(v => (
                  <label key={v.id} className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${variantId === v.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="variant" checked={variantId === v.id} onChange={() => setVariantId(v.id)} className="h-5 w-5 text-blue-600" />
                      <span className="ml-3 font-medium text-gray-900">{v.name}</span>
                    </div>
                    <span className="font-bold text-gray-900">€{v.price}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-700">Количество:</span>
              <div className="flex items-center space-x-4">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-600 font-bold hover:bg-gray-100">-</button>
                <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-600 font-bold hover:bg-gray-100">+</button>
              </div>
            </div>

            <div className="flex justify-between items-center text-2xl mb-8">
              <span className="font-bold text-gray-900">Итого:</span>
              <span className="font-extrabold text-blue-600">€{total}</span>
            </div>

            <label className="flex items-start mb-8 cursor-pointer">
              <input type="checkbox" required className="mt-1 h-5 w-5 text-blue-600 rounded" />
              <span className="ml-3 text-sm text-gray-600">Я согласен с условиями покупки и политикой конфиденциальности</span>
            </label>

            <button type="submit" className="w-full bg-blue-600 text-white font-extrabold text-xl py-5 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all">
              ЗАКАЗАТЬ СЕЙЧАС
            </button>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500 font-medium">
              <span className="flex items-center">✓ Безопасная покупка</span>
              <span className="flex items-center">✓ Быстрая доставка</span>
              <span className="flex items-center">✓ Гарантия качества</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
