import React from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';

const BookDetail = () => {
  const router = useRouter();
  const { detail } = router.query;
  const [detailBook, setDetailBook] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/books/${detail}`)
      .then((response) => {
        setDetailBook(response.data.data.book);
      })
      .catch((err) => console.log(err));
  }, [detail]);

  const handlerDelete = () => {
    const confirmation = confirm(`Anda yakin akan menghapus buku ${detailBook.name} ?`);
    if (confirmation) {
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}/books/${detail}`)
        .then((response) => alert(response.data.message))
        .catch((err) => console.log(err));
      router.push('/books');
    } else {
      null;
    }
  };

  return (
    <>
      <Head>
        <title>BookApps | Detail</title>
      </Head>
      <div className="container w-full sm:w-10/12 mx-auto mt-5">
        {detailBook && (
          <div className="w-11/12 sm:w-10/12 md:8/12 mx-auto">
            <h1 className="text-center font-extrabold font-title text-2xl">{detailBook.name}</h1>
            <Link href="/books">
              <div className="cursor-pointer w-5 h-5 bg-cover bg center overflow-hidden relative">
                <Image src="/img/icon-back02.png" alt="icon-back" fill={true} />
              </div>
            </Link>
            <table class="table-fixed mx-auto w-10/12 text-left mt-5">
              <tbody>
                <tr>
                  <th className="bg-slate-100">Publisher</th>
                  <th className="bg-slate-100 w-3">:</th>
                  <td className="bg-slate-100 italic text-sm font-semibold">{detailBook.publisher}</td>
                </tr>
                <tr>
                  <th className="bg-green-100">Author</th>
                  <th className="bg-green-100 w-3">:</th>
                  <td className="bg-green-100 italic text-sm font-semibold">{detailBook.author}</td>
                </tr>
                <tr>
                  <th className="bg-slate-100 align-top">Summary</th>
                  <th className="bg-slate-100 w-3 align-top">:</th>
                  <td className="bg-slate-100 italic text-sm font-semibold">{detailBook.summary}</td>
                </tr>
                <tr>
                  <th className="bg-green-100">Year</th>
                  <th className="bg-green-100 w-3">:</th>
                  <td className="bg-green-100 italic text-sm font-semibold">{detailBook.year}</td>
                </tr>
                <tr>
                  <th className="bg-slate-100">PageCount</th>
                  <th className="bg-slate-100 w-3">:</th>
                  <td className="bg-slate-100 italic text-sm font-semibold">{detailBook.pageCount}</td>
                </tr>
                <tr>
                  <th className="bg-green-100">ReadPage</th>
                  <th className="bg-green-100 w-3">:</th>
                  <td className="bg-green-100 italic text-sm font-semibold">{detailBook.readPage}</td>
                </tr>
                <tr>
                  <th className="bg-slate-100">Reading</th>
                  <th className="bg-slate-100 w-3">:</th>
                  <td className="bg-slate-100 italic text-sm font-semibold">{detailBook.reading === true ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <th className="bg-green-100">Finished</th>
                  <th className="bg-green-100 w-3">:</th>
                  <td className="bg-green-100 italic text-sm font-semibold">{detailBook.finished === true ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                  <th className="bg-slate-100">{detailBook.insertedAt === detailBook.updatedAt ? 'createdAt' : 'updatedAt'}</th>
                  <th className="bg-slate-100 w-3">:</th>
                  <td className="bg-slate-100 italic text-sm font-semibold">{detailBook.insertedAt === detailBook.updatedAt ? detailBook.insertedAt : detailBook.updatedAt}</td>
                </tr>
              </tbody>
            </table>
            <div className="w-11/12 sm:w-10/12 md:8/12 mx-auto mt-3 flex flex-row justify-between">
              <Link href={`/books/[update]/${detail}`}>
                <Button title="Update" />
              </Link>
              <Button title="Delete" onClick={handlerDelete} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BookDetail;
