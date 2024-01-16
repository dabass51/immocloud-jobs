'use client'

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import {Button} from "@/components/ui/button"

import { usePathname } from 'next/navigation';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
            <div>
                <Link href="/">
                    <Image
                            src="/immocloud-b.png.webp"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '200px', height: 'auto' }}
                            alt="immocloud jobs"
                        />
                </Link>
            </div>
            
            <div className="flex md:hidden">
                <Button 
                    variant="outline"
                    aria-label="toggle menu"
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path fillRule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5z"></path>
                    </svg>
                </Button>
            </div>
        </div>

        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
            </Button>
            
        </nav>
    </div>
  );
}

export default Header;
