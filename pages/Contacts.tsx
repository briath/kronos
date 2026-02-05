
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

interface ContactsProps {
  darkMode: boolean;
}

const Contacts: React.FC<ContactsProps> = ({ darkMode }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <div className={`pt-24 pb-20 min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Обсудим ваш проект</h1>
            <p className={`text-lg mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Оставьте заявку, и наши инженеры помогут подобрать оптимальное решение под ваши задачи и бюджет.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Телефон</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Электронная почта</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>hello@ingenious.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Офис</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>г. Москва, ул. Технологическая, д. 42, офис 501</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Режим работы</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Пн — Пт: 09:00 - 19:00</p>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Сб — Вс: Выходные</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-10 rounded-3xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Быстрая заявка</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ваше имя</label>
                <input 
                  type="text" 
                  required
                  className={`w-full px-5 py-4 rounded-xl outline-none border-2 transition-all ${
                    darkMode 
                      ? 'bg-gray-900 border-gray-700 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder="Иван Иванов"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Телефон *</label>
                <input 
                  type="tel" 
                  required
                  className={`w-full px-5 py-4 rounded-xl outline-none border-2 transition-all ${
                    darkMode 
                      ? 'bg-gray-900 border-gray-700 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder="+7 (___) ___-__-__"
                  value={formState.phone}
                  onChange={(e) => setFormState({...formState, phone: e.target.value})}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Комментарий к проекту</label>
                <textarea 
                  rows={4}
                  className={`w-full px-5 py-4 rounded-xl outline-none border-2 transition-all ${
                    darkMode 
                      ? 'bg-gray-900 border-gray-700 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-200 focus:border-blue-500'
                  }`}
                  placeholder="Опишите ваши пожелания..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
              >
                Отправить запрос <Send size={20} />
              </button>
              <p className="text-xs text-gray-500 text-center px-4">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработки персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
