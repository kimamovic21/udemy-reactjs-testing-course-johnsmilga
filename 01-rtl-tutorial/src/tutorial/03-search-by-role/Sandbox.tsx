import { useEffect, useState } from 'react';

const Sandbox = () => {
  const [showAsyncButton, setShowAsyncButton] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAsyncButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <nav>
        <a href='/' className='hover:underline mr-2'>Home</a>
        <a href='/about' className='hover:underline'>About</a>
      </nav>

      <h2 className='text-2xl font-bold'>Main Heading</h2>
      <h3 className='text-xl font-semibold'>Subheading</h3>

      <img src='vitest.jpg' alt='Example' className='w-40 my-5'/>

      <button className='mr-2 bg-blue-500 px-4 py-2 rounded-md text-white'>
        Click me
      </button>
      <button className='mr-1 bg-blue-500 px-4 py-2 rounded-md text-white'>
        Submit
      </button>
      <button className='ml-1 bg-blue-500 px-4 py-2 rounded-md text-white'>
        Cancel
      </button>

      {showError && (
        <button className='ml-2 bg-red-500 px-4 py-2 rounded-md text-white'>
          Error
        </button>
      )}

      {showAsyncButton && (
        <button className='ml-2 bg-blue-500 px-4 py-2 rounded-md text-white'>
          Async Button
        </button>
      )}
    </div>
  );
};

export default Sandbox;