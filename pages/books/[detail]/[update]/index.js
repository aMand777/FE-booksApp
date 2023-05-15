import React from 'react';
import { useRouter } from 'next/router';
import Button from '../../../components/button';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CheckBox from '../../../components/checkbox';
import Head from 'next/head';

const UpdateBook = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const { update } = router.query;
  const [formData, setFormData] = useState({
    name: '',
    publisher: '',
    author: '',
    summary: '',
    year: '',
    pageCount: '',
    reading: false,
    readPage: null,
    finished: null,
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/books/${update}`)
      .then((response) => {
        setFormData(response.data.data.book);
      })
      .catch((err) => console.log(err.message));
  }, [update]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChecked = (event) => {
    setIsChecked(!isChecked);
    setFormData((prev) => ({ ...prev, reading: event.target.checked }));
    console.log('reading :', formData.reading);
  };

  const handleSubmit = (event) => {
    if (!formData.year || !formData.author || !formData.summary || !formData.publisher || !formData.pageCount || !formData.readPage) {
      alert(`Inputan tidak boleh kosong`);
      event.preventDefault();
    } else {
      axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/books/${update}`, formData)
        .then((response) => {
          alert(response.data.message);
        })
        .catch((err) => alert(err.message));
      router.push(`/books/${update}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <>
      <Head>
        <title>BookApps | Update</title>
      </Head>
      <div className="container w-full sm:w-10/12 mx-auto mt-5">
        <div className="w-11/12 sm:w-10/12 md:8/12 mx-auto text-center mb-3 font-bold italic text-xl">
          <h1>Update Book List</h1>
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
                    <input type="text" required name="name" id="title" placeholder="title book . . ." onKeyDown={handleKeyPress} onChange={handleChange} value={formData.name} className="italic text-sm bg-slate-100 w-full outline-none" />
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
                      required
                      name="publisher"
                      id="publisher"
                      placeholder="publisher . . ."
                      onKeyDown={handleKeyPress}
                      onChange={handleChange}
                      value={formData.publisher}
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
                    <input type="text" required name="author" id="author" placeholder="author . . ." onKeyDown={handleKeyPress} onChange={handleChange} value={formData.author} className="italic text-sm bg-slate-100 w-full outline-none" />
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
                    <input
                      type="text"
                      required
                      name="summary"
                      id="summary"
                      placeholder="summary . . ."
                      onKeyDown={handleKeyPress}
                      onChange={handleChange}
                      value={formData.summary}
                      className="italic text-sm bg-green-100 w-full outline-none"
                    />
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
                    <input
                      type="number"
                      required
                      name="year"
                      id="year"
                      placeholder="1990 . . ."
                      min="1990"
                      onKeyDown={handleKeyPress}
                      onChange={handleChange}
                      value={formData.year}
                      className="italic text-sm bg-slate-100 w-full outline-none"
                    />
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
                    <input
                      type="number"
                      required
                      name="readPage"
                      id="readPage"
                      placeholder="25 . . ."
                      onKeyDown={handleKeyPress}
                      onChange={handleChange}
                      value={formData.readPage}
                      className="italic text-sm bg-green-100 w-full outline-none"
                    />
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
                      required
                      name="pageCount"
                      id="pageCount"
                      placeholder="100 . . ."
                      onKeyDown={handleKeyPress}
                      onChange={handleChange}
                      value={formData.pageCount}
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
                    <CheckBox checked={formData.reading} onChange={handleChecked} name="reading" id="reading" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-11/12 sm:w-10/12 md:8/12 mx-auto mt-3 flex flex-row justify-between">
              <Link href={`/books/${update}`}>
                <Button title="Back" />
              </Link>
              <Button title="Save" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
