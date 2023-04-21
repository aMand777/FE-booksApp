import React from 'react';
import Button from './button';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Welcome = () => {
  const [user, setUser] = useState('');
  const router = useRouter();

  const handleInputChange = (event) => {
    event.preventDefault();
    setUser(event.target.value);
  };

  const handleButtonClick = (event) => {
    if (user.length === 0) {
      alert('Please input your name !');
      event.preventDefault();
    } else
      router.push({
        pathname: '/books',
        query: {
          user: user,
        },
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <div className="w-10/12 mx-auto mt-5">
      <h1 className="text-2xl font-extrabold text-center">Welcome Home</h1>
      <div className="flex flex-row justify-center mt-5">
        <form>
          <label htmlFor="user" className="text-bold italic cursor-pointer font-light mr-2 font-title">
            Please input :
          </label>
          <input type="text" id="user" name="user" placeholder="your name . ." required minLength={3} value={user} onChange={handleInputChange} onKeyDown={handleKeyPress} className="italic border rounded-lg hover:border-green-100" />
        </form>
        <Button title="Go to" className={`font-semibold ml-3`} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Welcome;
