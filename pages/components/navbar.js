import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 flex flex-row justify-around py-1 items-center sticky top-0">
      <div>
        <Image src="/icon-book01.png" alt="icon-book" width="25" height="25" />
      </div>
      <div>
        <h className="text-white font-bold">
          <Link href="/books">BooksApp</Link>
        </h>
      </div>
      <div className="flex flex-row">
        <h1 className="italic font-title text-white text-xs">find your book</h1>
      </div>
    </nav>
  );
};

export default Navbar;
