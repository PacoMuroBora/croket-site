import React from 'react';
import useStore from '../hooks/useStore';
import CanvasWrapper from '../components/CanvasWrapper';

function Home() {
  const count = useStore((state) => state.count);
  const addCount = useStore((state) => state.addCount);

  return (
    <>
      <div className="absolute h-full w-full top-0 left-0 z-0">
        <CanvasWrapper />
      </div>

      <div className="relative container mx-auto">
        <h1>This is home page.</h1>
        <h4>{count}</h4>
        <button onClick={addCount}>addCount </button>
      </div>
    </>
  );
}

export default Home;
