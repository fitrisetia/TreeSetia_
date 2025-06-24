// components/icons/HamburgerIcon.tsx
// Ini adalah komponen icon hamburger yang berdiri sendiri

import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  className?: string; // Untuk menambahkan kelas Tailwind jika diperlukan
  color?: string;     // Untuk memaksakan warna stroke
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, className, color }) => {
  // Tentukan warna stroke. Jika prop 'color' diberikan, gunakan itu.
  // Jika tidak, gunakan 'currentColor' yang akan mengambil warna dari elemen parent (button).
  const strokeColor = color || 'currentColor'; // Default ke currentColor

  return (
    <svg
      className={`w-6 h-6 ${className || ''}`}
      fill="none"
      stroke={strokeColor} // Warna stroke diatur di sini
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
      ></path>
    </svg>
  );
};

export default HamburgerIcon;