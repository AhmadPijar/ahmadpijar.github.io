import { useState, useRef, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Workflow } from 'lucide-react';
import useClickOutside from '../newHook/useClickOutside';
import { NavbarContext } from '../newContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled, setIsScrolled } = useContext(NavbarContext);

  const mobileRef = useRef(null);
  useClickOutside(mobileRef, () => setMobileOpen(false));

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsScrolled]);

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-160 ease-in-out ${isScrolled ? 'navbar-scroll shadow-sm' : 'bg-transparent border-b border-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700">
            <Workflow size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">Portfolio</p>
            <p className="text-base font-semibold text-slate-900 hover:text-violet-800 cursor-pointer">Ahmad Pijar Maulana</p>
          </div>
        </button>

        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="text-sm font-medium text-slate-700 transition hover:text-violet-800">
              {item.label}
            </Link>
          ))}
        </div>

        <button className="rounded-full border border-slate-200 bg-white p-2 text-slate-700 md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div ref={mobileRef} className="border-t border-slate-200 bg-white/95 px-4 py-3 shadow-lg md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className="rounded-2xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
