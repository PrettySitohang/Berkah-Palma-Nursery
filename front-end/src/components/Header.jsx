import React from 'react';
import { HiOutlineBars3 } from "react-icons/hi2"; 
import { BsPersonCircle } from "react-icons/bs"; 
import Logo from '../assets/logo_berkah.png'; 

export default function Header() {
  return (
    // UBAH: z-50 diganti menjadi z-30 agar posisinya di bawah Sidebar (z-50) dan Overlay (z-40)
    <div className="md:hidden bg-[#294D29] text-white px-6 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] sticky top-0 z-30 flex justify-between items-center">
      
      {/* Tombol Hamburger */}
      <label 
        htmlFor="sidebar-toggle" 
        className="text-white text-2xl cursor-pointer focus:outline-none hover:text-emerald-200 transition-colors" 
        aria-label="Menu"
      >
        <HiOutlineBars3 />
      </label>

      {/* Logo Gambar & Tulisan Berkah Palma */}
      <div className="flex items-center gap-2">
        <img 
          src={Logo} 
          alt="Logo Berkah Palma" 
          className="w-6 h-6 object-contain rounded-full bg-white p-0.5" 
        />
        <span className="text-xs font-bold tracking-wider uppercase">
          BERKAH PALMA
        </span>
      </div>

      {/* Tombol Profil di Kanan */}
      <button className="text-white text-2xl focus:outline-none hover:text-emerald-200 transition-colors" aria-label="Profile">
        <BsPersonCircle />
      </button>

    </div>
  );
}