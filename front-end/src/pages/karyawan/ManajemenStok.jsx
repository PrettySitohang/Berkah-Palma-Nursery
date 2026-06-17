import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineBars3, HiChevronRight } from 'react-icons/hi2';
import { FiPlus, FiArrowDown } from 'react-icons/fi';
import bgHero from '../../assets/foto_bibit_sawit.png'; 
import logoBerkah from '../../assets/logo_berkah.png'; 
import SidebarKaryawan from '../../components/SidebarKaryawan';

const ManajemenStok = () => {
  const navigate = useNavigate();

  // Data Dummy untuk Ketersediaan
  const dataStok = [
    { id: 1, nama: 'PPKS Simalungun', qty: '5.190', status: 'aman' },
    { id: 2, nama: 'Topaz Series 3', qty: '3.465', status: 'aman' },
    { id: 3, nama: 'Socfindo La Me', qty: '150', status: 'kritis' },
  ];

  // Data Dummy untuk Riwayat Masuk
  const riwayatMasuk = [
    { id: 1, nama: 'Topaz Series 3', author: 'Dimas', waktu: 'Hari ini, 08:30', qty: '+500' },
    { id: 2, nama: 'PPKS Simalungun', author: 'Riko', waktu: 'Kemarin, 16:15', qty: '+1.200' },
    { id: 3, nama: 'Socfindo La Me', author: 'Dimas', waktu: '09 Jun, 10:00', qty: '+300' },
  ];

  return (
    <div 
      className="min-h-screen pb-12 font-sans selection:bg-[#2DAB80] selection:text-white relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Sidebar Karyawan */}
      <SidebarKaryawan />

      {/* Layer background transparan */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-[#f4f7f4] pointer-events-none z-0" />

      {/* Konten bergeser ke kanan di Desktop */}
      <div className="relative z-10 flex flex-col min-h-screen md:ml-[280px] transition-all duration-300">
        
        {/* --- HEADER HIJAU LENGKUNG --- */}
        {/* 🟢 UBAHAN DI SINI: Warna diganti jadi bg-[#294D29] agar 100% sama dengan Sidebar */}
        <div className="bg-[#294D29] text-white px-6 md:px-10 pt-8 pb-24 md:pb-28 rounded-b-[40px] md:rounded-bl-[60px] md:rounded-br-none shadow-md relative z-10">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            
            {/* Hamburger hilang di Desktop */}
            <label htmlFor="sidebar-karyawan" className="md:hidden text-2xl cursor-pointer hover:text-emerald-200 transition-colors">
              <HiOutlineBars3 />
            </label>
            
            {/* Logo Berkah (Hilang di desktop) */}
            <div className="flex items-center gap-2 md:hidden">
              <img src={logoBerkah} alt="Logo" className="w-6 h-6 bg-white rounded-full p-0.5 object-contain" />
              <span className="font-bold tracking-widest text-[13px] uppercase">BERKAH PALMA</span>
            </div>

            {/* Foto/Inisial Profil */}
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-black shadow-sm border-2 border-white/20 ml-auto cursor-pointer">
              DA
            </div>
          </div>

          {/* Judul Halaman */}
          <div>
            <h1 className="text-[28px] md:text-3xl font-black tracking-tight leading-tight">Manajemen Stok</h1>
            <p className="text-emerald-100/80 text-xs md:text-sm font-medium mt-1">Pantau persediaan & riwayat masuk</p>
          </div>
        </div>

        {/* --- KONTEN UTAMA --- */}
        <div className="px-5 md:px-10 -mt-12 relative z-20 space-y-6 md:space-y-8 max-w-6xl">
          
          {/* 1. KARTU INPUT STOK BARU */}
          <div 
            onClick={() => navigate('/karyawan/stok/input')}
            className="bg-white rounded-[24px] p-4 md:p-5 md:w-max md:pr-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center gap-10 justify-between cursor-pointer hover:shadow-md hover:border-emerald-100 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#48A382] flex items-center justify-center text-white text-xl shadow-sm">
                <FiPlus />
              </div>
              <div>
                <h3 className="font-bold text-[#020202] text-[15px]">Input Stok Baru</h3>
                <p className="text-[11px] text-slate-400 font-medium mt-0.5">Catat penambahan fisik bibit</p>
              </div>
            </div>
            <HiChevronRight className="text-2xl text-emerald-600" />
          </div>

          {/* Grid Layout untuk Layar Lebar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            
            {/* 2. SECTION KETERSEDIAAN STOK */}
            <div className="space-y-3">
              <h4 className="text-[11px] md:text-xs font-black text-slate-500 uppercase tracking-widest px-2">Ketersediaan Stok</h4>
              <div className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 space-y-4">
                {dataStok.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.status === 'aman' ? 'bg-[#2DAB80]' : 'bg-[#F9303B]'}`} />
                        <span className="font-bold text-[#334155] text-[13px] md:text-[14px]">{item.nama}</span>
                      </div>
                      <div className="text-right">
                        <span className={`font-black text-[15px] md:text-[16px] ${item.status === 'aman' ? 'text-[#020202]' : 'text-[#F9303B]'}`}>
                          {item.qty}
                        </span>
                        <span className={`text-[9px] md:text-[10px] font-bold ml-1 ${item.status === 'aman' ? 'text-slate-400' : 'text-[#F9303B]/70'}`}>
                          Pkk
                        </span>
                      </div>
                    </div>
                    {/* Garis Pembatas */}
                    {index !== dataStok.length - 1 && <hr className="border-slate-100 mt-4" />}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. SECTION RIWAYAT MASUK */}
            <div className="space-y-3">
              <div className="flex justify-between items-center px-2">
                <h4 className="text-[11px] md:text-xs font-black text-slate-500 uppercase tracking-widest">Riwayat Masuk</h4>
                <button className="text-[10px] md:text-[11px] font-bold text-[#2DAB80] hover:text-emerald-700 transition-colors">
                  Lihat Semua
                </button>
              </div>
              
              <div className="space-y-3">
                {riwayatMasuk.map((item) => (
                  <div key={item.id} className="bg-white hover:bg-slate-50 cursor-pointer rounded-[20px] p-4 shadow-sm border border-gray-100 flex items-center justify-between transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#EAEFEA] flex items-center justify-center text-[#2DAB80] text-lg shrink-0">
                        <FiArrowDown />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#334155] text-[13px] md:text-[14px] leading-tight">{item.nama}</h3>
                        <p className="text-[10px] md:text-[11px] text-slate-400 font-medium mt-1">Oleh: {item.author} • {item.waktu}</p>
                      </div>
                    </div>
                    <span className="font-black text-[#2DAB80] text-[15px] md:text-[16px]">{item.qty}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ManajemenStok;