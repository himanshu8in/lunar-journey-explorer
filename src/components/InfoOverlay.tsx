
import { useState } from 'react';

const InfoOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500`}
    >
      <div className="absolute top-4 left-4 p-6 bg-space-black/80 backdrop-blur-md rounded-lg border border-space-silver/10 pointer-events-auto animate-fade-in">
        <h1 className="text-space-white text-2xl font-light mb-2">Luna Explorer</h1>
        <p className="text-space-silver/80 text-sm">
          Click and drag to rotate. Scroll to zoom.
        </p>
      </div>

      <div className="absolute bottom-4 right-4 p-6 bg-space-black/80 backdrop-blur-md rounded-lg border border-space-silver/10 pointer-events-auto animate-fade-in">
        <h2 className="text-space-white text-lg font-light mb-2">Moon Facts</h2>
        <ul className="text-space-silver/80 text-sm space-y-2">
          <li>Distance from Earth: 384,400 km</li>
          <li>Diameter: 3,475 km</li>
          <li>Surface gravity: 1.62 m/s²</li>
        </ul>
      </div>

      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 left-4 px-4 py-2 bg-space-black/80 backdrop-blur-md rounded-lg border border-space-silver/10 text-space-silver hover:bg-space-gray/80 transition-colors pointer-events-auto"
      >
        {isVisible ? 'Hide Info' : 'Show Info'}
      </button>
    </div>
  );
};

export default InfoOverlay;
