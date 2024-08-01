function Header() {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50 border-gray-200 backdrop-blur-lg dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-3 mx-auto">
          <a href="https://miniflicks.in/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/public/Images/mf-logo.jpg" className="h-10" alt="MiniFlicks Logo" />
            {/* Apply Jokerman font to the logo name */}
            <span className="self-center text-4xl font-semibold tracking-wider text-teal-500 whitespace-nowrap" style={{ fontFamily: 'Jokerman' }}>MiniFlicks</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                {/* Adjust text colors for different states to teal variants */}
                <a href="#" className="block px-3 py-2 text-teal-500 rounded md:bg-transparent md:p-0 dark:text-teal-400" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-600 md:p-0 dark:text-teal-400 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-400 md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-600 md:p-0 dark:text-teal-400 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-400 md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-600 md:p-0 dark:text-teal-400 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-400 md:dark:hover:bg-transparent">Pricing</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-teal-600 md:p-0 dark:text-teal-400 md:dark:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-400 md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
