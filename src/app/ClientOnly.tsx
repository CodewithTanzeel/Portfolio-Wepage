"use client"
// components/ClientOnly.tsx
import { useEffect } from 'react';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Create the dot cursor element
    const dotCursor = document.createElement('div');
    dotCursor.classList.add('dot-cursor'); // Apply the CSS class
    document.body.appendChild(dotCursor); // Add the dot cursor to the body

    // Function to update the cursor's position
    const moveCursor = (e: MouseEvent) => {
      dotCursor.style.left = `${e.clientX}px`;
      dotCursor.style.top = `${e.clientY}px`;
    };

    // Attach the mousemove event listener to update cursor position
    document.addEventListener('mousemove', moveCursor);

    // Cleanup the event listener and cursor element on component unmount
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(dotCursor);
    };
  }, []);

  return <>{children}</>;
};

export default ClientOnly;
