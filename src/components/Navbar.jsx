import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-2xl bg-[#f8fafc]">
          <span className="text-[24px] font-medium text-[#7da2ff] tracking-tight">
            AM
          </span>
        </div>
      </NavLink>

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          A propos
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projets
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
