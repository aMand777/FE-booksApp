import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from './button';

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    router.push({
      pathname: '/books',
      query: {
        search: search,
      },
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-row">
      <div className="text-white flex flex-row rounded-lg h-fit">
        <Image src="/img/icon-search01.png" alt="icon-search" width={15} height={10} className="mr-1" />
        <form>
          <input
            type="text"
            name="search"
            minLength="3"
            maxLength="20"
            placeholder="Search book . . ."
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            className="text-xs italic border rounded-lg text-black p-1 w-11 sm:w-28 hover:border-green-100"
          />
        </form>
      </div>
      <Button title="Search" onClick={handleSubmit} className={'ml-1'} />
    </div>
  );
};

export default Search;
