import { useEffect } from 'react';
import useFluidCursor from '../hooks/useFluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      useFluidCursor();
    }, 100); // Small delay to ensure canvas is mounted

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-0 pointer-events-none">
      <canvas id="fluid" className="h-screen w-screen" />
    </div>
  );
};

export default FluidCursor;