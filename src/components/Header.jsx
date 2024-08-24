import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { IoMdLogIn } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ data }) => {
  const isUser = !!data?.user; // Assuming `data` is passed as a prop and contains user information
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="w-full z-10 absolute">
        <nav className="flex justify-between items-center max-w-[1440px] mx-auto sm:px-16 px-6 py-4 bg-transparent">
          <a href='/' className="flex justify-center items-center">
            <span className="text-2xl font-bold text-black">Al-Professor</span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href='/' className="text-lg font-medium text-gray-700 hover:text-black transition-colors">Home</a>
            <a href='/services' className="text-lg font-medium text-gray-700 hover:text-black transition-colors">Services</a>
            <a href="tel:00971561868236" className="text-lg font-medium text-gray-700 hover:text-black transition-colors">+971 56 186 8236</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-black focus:outline-none">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>

          {isUser || data ? (
            <div className="hidden md:flex logedin">
              <a href="/dashboard">
                <CgProfile />
              </a>
            </div>
          ) : (
            <div className="hidden md:flex logedin">
              <a href='/auth/signin'>
                <IoMdLogIn />
              </a>
            </div>
          )}
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-4 px-6 py-4 bg-white">
            <a href='/' className="text-lg font-medium text-gray-700 hover:text-black transition-colors" onClick={toggleMenu}>Home</a>
            <a href='/services' className="text-lg font-medium text-gray-700 hover:text-black transition-colors" onClick={toggleMenu}>Services</a>
            <a href="tel:00971561868236" className="text-lg font-medium text-gray-700 hover:text-black transition-colors" onClick={toggleMenu}>+971 56 186 8236</a>
            <div className="flex logedin">
              {isUser || data ? (
                <>
                  <a href="/dashboard" onClick={toggleMenu}>
                    <CgProfile />
                  </a>
                </>
              ) : (
                <>
                  <a href='/auth/signin' onClick={toggleMenu}>
                    <IoMdLogIn />
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
