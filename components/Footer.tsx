import React from 'react';
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6">
      
      <nav className="mb-6">
        <ul className="flex justify-center space-x-6">
          <li className="">
            <Link href="/" className="text-muted-foreground hover:text-gray-300 transition-colors duration-200 transform px-6 py-3 rounded-md">Impressum</Link>
          </li>
          <li className="">
            <Link href="/" className="text-muted-foreground hover:text-gray-300 transition-colors duration-200 transform px-6 py-3 rounded-md">Datenschutz</Link>
          </li>
          
        </ul>
      </nav>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Immocloud. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
