import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">Crypto Price Tracker</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/bitcoin" className="hover:underline">
              Bitcoin Info
            </a>
          </li>
          <li>
            <a href="/bitcoin/founder" className="hover:underline">
              Founder Info
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
