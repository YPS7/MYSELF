import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let hue = 280;

    const updateCursorEffect = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 100;
      mouseY = (e.clientY / window.innerHeight) * 100;
      
      // Calculate hue based on mouse position with darker colors
      hue = ((e.clientX / window.innerWidth) * 360 + (e.clientY / window.innerHeight) * 180) % 360;
      
      // Update CSS custom properties
      document.documentElement.style.setProperty('--cursor-x', `${mouseX}%`);
      document.documentElement.style.setProperty('--cursor-y', `${mouseY}%`);
      document.documentElement.style.setProperty('--hue', hue.toString());
    };

    document.addEventListener('mousemove', updateCursorEffect);
    return () => document.removeEventListener('mousemove', updateCursorEffect);
  }, []);

  return <div className="cursor-gradient" />;
}