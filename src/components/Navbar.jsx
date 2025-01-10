import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-6 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-444554">WISDOM NWOKOCHA</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/wise4rmgod" className="hover:text-blue-400"><Github /></a>
          <a href="https://www.linkedin.com/in/joklinztech/" className="hover:text-blue-400"><Linkedin /></a>
          <a href="mailto:wise4rmgod@gmail.com" className="hover:text-blue-400"><Mail /></a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-50"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-eerieBlack text-paleDogwood shadow-lg md:hidden p-4 z-50">
            <div className="flex flex-col items-center space-y-6">
              <a href="https://github.com/wise4rmgod" className="hover:text-blue-400 flex items-center space-x-3 text-white w-full justify-center py-3 border border-gray-700 rounded-lg">
                <Github /> <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/joklinztech/" className="hover:text-blue-400 flex items-center space-x-3 text-white w-full justify-center py-3 border border-gray-700 rounded-lg">
                <Linkedin /> <span>LinkedIn</span>
              </a>
              <a href="mailto:wise4rmgod@gmail.com" className="hover:text-blue-400 flex items-center space-x-3 text-white w-full justify-center py-3 border border-gray-700 rounded-lg">
                <Mail /> <span>Email</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}