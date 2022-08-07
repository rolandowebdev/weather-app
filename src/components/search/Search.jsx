import { useState } from 'react';

export default function Search({ setQuery }) {
  const [city, setCity] = useState('');

  const handleSearchCity = () => {
    if (city !== '') setQuery({ q: city });
  };

  return (
    <div className='w-full form-control'>
      <div className='input-group'>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type='text'
          placeholder='Search by city...'
          className='w-full border-r-0 input input-bordered bg-black/50 backdrop-blur-sm border-black/50'
        />
        <button
          onClick={handleSearchCity}
          className='z-10 cursor-pointer btn bg-black/50 hover:bg-black backdrop-blur-sm border-black/50'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
