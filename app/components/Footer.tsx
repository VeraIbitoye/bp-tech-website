export default function Footer() {
  return (
    <footer className="bg-[var(--bp-blue)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <img
            src="/bpLogo.png"
            alt="BP Tech Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-300">
            BP Tech and Resources Nigeria Limited delivers professional
            fiber optic and telecommunications infrastructure solutions
            across Nigeria.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Fiber Optic Installation</li>
            <li>Network Design</li>
            <li>FTTH Solutions</li>
            <li>Telecom Infrastructure</li>
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-semibold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>ISPs</li>
            <li>Corporate Offices</li>
            <li>Estates & Campuses</li>
            <li>Government Projects</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📍 Palmgroove, Lagos</li>
            <li>📞 08087410061</li>
            <li>📧 bptechandresourcesltd@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BP Tech and Resources Nigeria Limited.
        All rights reserved.
      </div>
    </footer>
  );
}
