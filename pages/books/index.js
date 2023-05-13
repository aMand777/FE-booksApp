import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/button';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FilterBy from '../components/filter';
import Search from '../components/search';

const BookList = () => {
  const router = useRouter();

  const { search, user, filter } = router.query;
  const [books, setBooks] = useState([]);
  const [userLogin, setUserLogin] = useState('');

  useEffect(() => {
    if (filter === 'unread') {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/books?reading=0`)
        .then((response) => {
          setBooks(response.data.data.books);
        })
        .catch((err) => console.log(err));
    } else if (filter === 'reading') {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/books?reading=1`)
        .then((response) => {
          setBooks(response.data.data.books);
        })
        .catch((err) => console.log(err));
    } else if (filter === 'finish') {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/books?finished=1`)
        .then((response) => {
          setBooks(response.data.data.books);
        })
        .catch((err) => console.log(err));
    } else if (filter === 'unfinish') {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/books?finished=0`)
        .then((response) => {
          setBooks(response.data.data.books);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/books`)
        .then((response) => {
          setBooks(response.data.data.books);
        })
        .catch((err) => console.log(err));
    }
  }, [filter]);

  useEffect(() => {
    if (search) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/books?name=${search}`)
        .then((response) => {
          setBooks(response.data.data.books);
        })
        .catch((err) => console.log(err));
    }
  }, [search]);

  useEffect(() => {
    setUserLogin(user);
  }, []);

  const time = new Date().getHours();
  const greeting = time < 12 ? 'pagi' : time < 15 ? 'siang' : time < 18 ? 'sore' : 'malam';
  let count = 1;

  return (
    <>
      <Head>
        <title>Book Apps</title>
      </Head>
      <div className="flex flex-row justify-center mt-10 items-center">
        <p className="text-sm italic">Selamat {greeting},</p>
        <h1 className="italic font-title font-medium ml-2 text-lg">{userLogin}</h1>
      </div>
      <div className="container mx-auto 11/12 sm:w-10/12">
        <div className="flex flex-row mt-10 mx-auto w-10/12 justify-between mb-2">
          <Search />
          <FilterBy />
        </div>
        <table class="sm:table-auto table-fixed mx-auto w-10/12 border-separate">
          <thead className="bg-slate-500">
            <tr>
              <th className="bg-slate-300 hidden sm:block pt-2 pb-[2px]">#</th>
              <th className="bg-slate-300">Title</th>
              <th className="bg-slate-300">Publisher</th>
              <th className="bg-slate-300 flex justify-center pb-2">
                <Image src="/img/icon-book02.png" alt="book-icon" width={25} height={20} />
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="odd:bg-green-100 bg-slate-100">
                <td className="italic font-thin font-title hidden sm:block">{count++ + '.'}</td>
                <td className="italic font-semibold font-title">{book.name || ''}</td>
                <td className="italic font-medium font-title">{book.publisher}</td>
                <td className="text-center italic font-title text-base">
                  <Link href={`/books/${book.id}`} className="text-blue-600 hover:text-blue-400">
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="mt-5 mx-auto w-full flex justify-end sticky bottom-3">
          <Link href="/create">
            <Button title="Create" className={`mr-3`} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookList;
