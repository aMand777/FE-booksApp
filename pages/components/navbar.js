import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 flex flex-row justify-around py-1 items-center sticky top-0">
      <div className="w-6 h-6 bg-cover overflow-hidden relative">
        <Image src="/img/icon-book02.png" alt="icon-book" fill={true} />
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
