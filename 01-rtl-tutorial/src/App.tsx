// import Sandbox from './tutorial/01-search-by-text/Sandbox';
// import Sandbox from './tutorial/02-tdd-example/Sandbox';
// import Sandbox from './tutorial/03-search-by-role/Sandbox';
import Sandbox from './tutorial/04-user-interactions/Sandbox';

function App() {
  return (
    <div className='p-8'>
      <h1 className='font-bold text-2xl'>React Testing Library</h1>
      <p className='mt-4 text-gray-700 mb-10'>
        React Testing Library and Vitest work together to provide a robust
        testing environment.
      </p>
      <Sandbox />
    </div>
  );
};

export default App;