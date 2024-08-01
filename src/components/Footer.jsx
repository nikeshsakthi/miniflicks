

function Footer() {
  return (
    <footer className="py-8 text-white bg-black">
  <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      
      {/* Logo and Description */}
      <div>
        <img src="../public/Images/mf-logo.jpg" alt="MiniFlicks Logo" className="w-20 h-20 mb-3" />
        <p>MiniFlicks Private Theater in Bangalore is a versatile celebration space that caters to a range of events, including movie screenings, birthday celebrations, anniversaries, and proposals. With its state-of-the-art audiovisual technology and customizable ambiance, MiniFlicks provides the perfect setting for creating memorable experiences.</p>
      </div>

      {/* Links */}
      <div>
        <h3 className="mb-3 text-xl font-semibold text-teal-500">Links</h3>
        <ul>
          <li className="mb-3"><a href="/about" className=" hover:text-teal-300">About</a></li>
          <li className="mb-3"><a href="/faqs" className=" hover:text-teal-300">Faqs</a></li>
          <li className="mb-3"><a href="/contact" className="hover:text-teal-300">Contact</a></li>
          <li className="mb-3"><a href="/my-account" className="hover:text-teal-300">My Account</a></li>
          <li className="mb-3"><a href="/gallery" className="hover:text-teal-300">Gallery</a></li>
        </ul>
      </div>

      {/* Address */}
      <div>
        <h3 className="mb-3 text-xl font-semibold text-teal-500">Address</h3>
        <address>
          THE SUMMIT # 13, 2nd Floor,<br />
          1st ‘A’ Cross, Anantharama Reddy Layout,<br />
          Outer Ring Road, Chinnappanahalli,<br />
          Marathahalli, Bengaluru-560037<br />
          <a href="mailto:Miniflicksprivatetheatres@gmail.com" className=" hover:text-gray-300">Miniflicksprivatetheatres@gmail.com</a><br />
          <a href="tel:+919019162002" className="hover:text-gray-300">+91 9019162002</a>
        </address>
      </div>

    </div>
  </div>
</footer>

  )
}

export default Footer