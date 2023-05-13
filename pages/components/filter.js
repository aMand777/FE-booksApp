import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const FilterBy = ({ title, className, ...rest }) => {
  const router = useRouter();

  const handleFilter = (event) => {
    const selectedFilter = event.target.value;
    router.push(`/books?filter=${selectedFilter}`);
  };
  return (
    <div className={`w-fit ${className}`}>
      <form>
        <label htmlFor="filter" className="inline-block">
          <Image src={'/img/icon-filter01.png'} alt="icon-filter" width={10} height={10} />
        </label>
        <select
          {...rest}
          name="filter"
          id="filter"
          onChange={handleFilter}
          className={` cursor-pointer border-0 h-5 w-12 ml-1 font-semibold hover:border focus:border-blue-600 hover:border-green-100 border-black rounded-md text-xs italic appearance-none`}>
          <option value="all">All Book</option>
          <option value="finish">Finished</option>
          <option value="unfinish">Unfinish</option>
          <option value="reading">Reading</option>
          <option value="unread">Unread</option>
        </select>
      </form>
    </div>
  );
};

export default FilterBy;
