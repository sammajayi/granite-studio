export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-black px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-black uppercase text-lg mb-4">Granite Studio</h3>
            <p className="font-medium">We build. You grow.</p>
          </div>
          <div>
            <h3 className="font-black uppercase text-lg mb-4">Services</h3>
            <ul className="font-medium space-y-2">
              <li><a href="#services" className="hover:text-lime-300">Websites</a></li>
              <li><a href="#services" className="hover:text-lime-300">Ecommerce</a></li>
              <li><a href="#services" className="hover:text-lime-300">Google Business</a></li>
              <li><a href="#services" className="hover:text-lime-300">Web3</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-black uppercase text-lg mb-4">Get in touch</h3>
            <p className="font-medium mb-2">
              <a href="mailto:hello@granitestudio.com" className="hover:text-lime-300">hello@granitestudio.com</a>
            </p>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 pt-8 text-center font-medium">
          <p>&copy; {new Date().getFullYear()} Granite Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
