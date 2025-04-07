import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        {/* Mobile */}
        <Link href="/">Tfootwear</Link>
        <Menu/>
    </div>
  );
}

export default Navbar;
