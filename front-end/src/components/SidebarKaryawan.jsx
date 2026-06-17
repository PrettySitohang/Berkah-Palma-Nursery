import React from 'react';
// Tambahkan FiAlertTriangle untuk ikon Lapor Bibit Afkir
import { FiHome, FiBox, FiShoppingCart, FiAlertTriangle, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import logoBerkah from '../assets/logo_berkah.png'; 

const SidebarKaryawan = () => {
  return (
    <>
      {/* ID diubah jadi sidebar-karyawan agar tidak bentrok dengan admin */}
      <input type="checkbox" id="sidebar-karyawan" className="peer hidden" />
      <label htmlFor="sidebar-karyawan" className="fixed inset-0 bg-slate-900/60 z-40 hidden peer-checked:block md:hidden cursor-pointer backdrop-blur-sm transition-opacity" />

      <aside className="fixed top-0 left-0 bottom-0 w-[280px] z-50 bg-[#294D29] transform -translate-x-full peer-checked:translate-x-0 md:translate-x-0 transition-transform duration-300 shadow-2xl flex flex-col rounded-r-2xl md:rounded-none border-r border-[#1e3223]">
        
        <div className="h-28 flex items-center justify-between px-6 bg-[#294D29] rounded-tr-2xl md:rounded-none ">
          <div className="flex items-center gap-3">
            <img 
              src={logoBerkah} 
              alt="Logo Berkah Palma" 
              className="w-10 h-10 object-contain bg-white rounded-full p-0.5" 
            />
            <h1 className="text-white font-bold text-lg tracking-wide">BERKAH PALMA</h1>
          </div>
          <label htmlFor="sidebar-karyawan" className="md:hidden text-white/50 hover:text-white text-2xl cursor-pointer transition-colors">
            <FiX />
          </label>
        </div>
        
        <nav className="px-4 py-6 space-y-2 flex-1">
          {/* 1. Dashboard Karyawan */}
          <NavLink to="/karyawan/dashboard" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-white/20 text-white shadow-inner' : 'text-emerald-100/70 hover:bg-white/10 hover:text-white'}`}>
            <FiHome /> Dashboard
          </NavLink>
          
          {/* 2. Manajemen Stok Bibit */}
          <NavLink to="/karyawan/stok" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-white/20 text-white shadow-inner' : 'text-emerald-100/70 hover:bg-white/10 hover:text-white'}`}>
            <FiBox /> Manajemen Stok Bibit
          </NavLink>

          {/* 3. Lapor Bibit Afkir */}
          <NavLink to="/karyawan/afkir" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-white/20 text-white shadow-inner' : 'text-emerald-100/70 hover:bg-white/10 hover:text-white'}`}>
            <FiAlertTriangle /> Lapor Bibit Afkir
          </NavLink>

          {/* 4. Kelola Pesanan */}
          <NavLink to="/karyawan/pesanan" className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive ? 'bg-white/20 text-white shadow-inner' : 'text-emerald-100/70 hover:bg-white/10 hover:text-white'}`}>
            <FiShoppingCart /> Kelola Pesanan
          </NavLink>
        </nav>

      </aside>
    </>
  );
};

export default SidebarKaryawan;