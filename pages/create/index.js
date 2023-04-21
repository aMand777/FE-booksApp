import React from 'react';
import { useRouter } from 'next/router';
import Button from '../components/button';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import CheckBox from '../components/checkbox';

const CreateBook = () => {
  const router = useRouter();
  const [books, setBooks] = useState({
    name: '',
    year: '',
    author: '',
    summary: '',
    publisher: '',
    pageCount: null,
    readPage: null,
    reading: false,
  });

  const handleChecked = (event) => {
    setBooks({ ...books, reading: event.target.checked });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooks({ ...books, [name]: value });
  };

  const handleSubmit = (event) => {
    if (!books.year || !books.author || !books.summary || !books.publisher || !books.pageCount || !books.readPage) {
      alert(`Inputan tidak boleh kosong`);
      event.preventDefault();
    } else {
      axios
        .post(`http://localhost:9000/books`, books)
        .then((response) => {
          setBooks(response.data.data.book);
          alert(response.data.message);
        })
        .catch((err) => console.log(err));
      router.push('/books');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <div className="container w-full sm:w-10/12 mx-auto mt-5">
      <div className="w-11/12 sm:w-10/12 md:8/12 mx-auto text-center mb-3 font-bold">
        <h1>Create New Book List</h1>
      </div>
      <div className="w-11/12 sm:w-10/12 md:8/12 mx-auto">
        <form method="post">
          <table class="table-fixed mx-auto w-10/12 text-left">
            <tbody>
              <tr>
                <th className="bg-slate-100">
                  <label htmlFor="title" className="cursor-pointer">
                    Title
                  </label>
                </th>
                <th className="bg-slate-100 w-3">:</th>
                <td className="bg-slate-100">
                  <input type="text" name="name" id="title" placeholder="title book . . ." required onKeyDown={handleKeyPress} value={books.name} onChange={handleChange} className="italic text-sm bg-slate-100 w-full outline-none" />
                </td>
              </tr>
              <tr>
                <th className="bg-green-100">
                  <label htmlFor="publisher" className="cursor-pointer">
                    Publisher
                  </label>
                </th>
                <th className="bg-green-100 w-3">:</th>
                <td className="bg-green-100">
                  <input
                    type="text"
                    name="publisher"
                    id="publisher"
                    placeholder="publisher . . ."
                    required
                    onKeyDown={handleKeyPress}
                    value={books.publisher}
                    onChange={handleChange}
                    className="italic text-sm bg-green-100 w-full outline-none"
                  />
                </td>
              </tr>
              <tr>
                <th className="bg-slate-100">
                  <label htmlFor="author" className="cursor-pointer">
                    Author
                  </label>
                </th>
                <th className="bg-slate-100 w-3">:</th>
                <td className="bg-slate-100">
                  <input type="text" name="author" id="author" placeholder="author . . ." required onKeyDown={handleKeyPress} value={books.author} onChange={handleChange} className="italic text-sm bg-slate-100 w-full outline-none" />
                </td>
              </tr>
              <tr>
                <th className="bg-green-100">
                  <label htmlFor="summary" className="cursor-pointer">
                    Summary
                  </label>
                </th>
                <th className="bg-green-100 w-3">:</th>
                <td className="bg-green-100">
                  <input type="text" name="summary" id="summary" placeholder="summary . . ." required onKeyDown={handleKeyPress} value={books.summary} onChange={handleChange} className="italic text-sm bg-green-100 w-full outline-none" />
                </td>
              </tr>
              <tr>
                <th className="bg-slate-100">
                  <label htmlFor="year" className="cursor-pointer">
                    Year
                  </label>
                </th>
                <th className="bg-slate-100 w-3">:</th>
                <td className="bg-slate-100">
                  <input type="number" name="year" id="year" placeholder="1990 . . ." required onKeyDown={handleKeyPress} value={books.year} onChange={handleChange} className="italic text-sm bg-slate-100 w-full outline-none" />
                </td>
              </tr>
              <tr>
                <th className="bg-green-100">
                  <label htmlFor="readPage" className="cursor-pointer">
                    Read Page
                  </label>
                </th>
                <th className="bg-green-100 w-3">:</th>
                <td className="bg-green-100">
                  <input type="number" name="readPage" id="readPage" placeholder="25 . . ." required onKeyDown={handleKeyPress} value={books.readPage} onChange={handleChange} className="italic text-sm bg-green-100 w-full outline-none" />
                </td>
              </tr>
              <tr>
                <th className="bg-slate-100">
                  <label htmlFor="pageCount" className="cursor-pointer">
                    Page Count
                  </label>
                </th>
                <th className="bg-slate-100 w-3">:</th>
                <td className="bg-slate-100">
                  <input
                    type="number"
                    name="pageCount"
                    id="pageCount"
                    placeholder="100 . . ."
                    required
                    onKeyDown={handleKeyPress}
                    value={books.pageCount}
                    onChange={handleChange}
                    className="italic text-sm bg-slate-100 w-full outline-none"
                  />
                </td>
              </tr>
              <tr>
                <th className="bg-green-100">
                  <label htmlFor="readPage" className="cursor-pointer">
                    Reading
                  </label>
                </th>
                <th className="bg-green-100 w-3">:</th>
                <td className="bg-green-100 flex pt-1">
                  <CheckBox checked={books.reading} onChange={handleChecked} name="reading" id="reading" />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-11/12 sm:w-10/12 md:8/12 mx-auto mt-3 flex flex-row justify-between">
            <Link href="/books">
              <Button title="Back" />
            </Link>
            <Button title="Save" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
