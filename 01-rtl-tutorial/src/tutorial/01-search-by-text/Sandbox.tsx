import { useState, useEffect } from 'react';

const Sandbox = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>React Testing Library Examples</h2>
      <p>You can search me with regular expression: 123-456-7890</p>

      {showError && <p className='text-red-500'>Error message</p>}

      <ul>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
    </div>
  );
};

export default Sandbox;