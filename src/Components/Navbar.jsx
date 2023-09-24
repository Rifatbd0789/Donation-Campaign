import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-0 lg:px-16 ">
      <div className="flex-1">
        <a className=" normal-case text-xl">
          <img src="/public/Logo.png" alt="" />
        </a>
      </div>
      <div className="">
        <ul className="flex gap-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "underline text-lal" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/all"}
              className={({ isActive }) =>
                isActive ? "underline text-lal" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/stat"}
              className={({ isActive }) =>
                isActive ? "underline text-lal" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
