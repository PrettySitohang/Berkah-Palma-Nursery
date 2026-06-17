import React, { useState } from 'react';
import bgHero from '../../assets/foto_bibit_sawit.png'; 
import logoBerkah from '../../assets/logo_berkah.png'; 
import { FiEye, FiEyeOff } from 'react-icons/fi'; // 👈 Tambahkan import ikon mata ini

const LoginKaryawan = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative p-5 font-sans antialiased overflow-hidden m-0">
      
      {/* Background */}
      <div className="absolute inset-0 bg-white z-0"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.63]"
        style={{ backgroundImage: `url(${bgHero})` }}
      ></div>
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, 
            rgba(68, 96, 68, 0.72) 0%, 
            rgba(68, 96, 68, 0.46) 3%, 
            rgba(255, 255, 255, 0) 16%, 
            rgba(255, 196, 82, 0.22) 36%, 
            rgba(255, 255, 255, 0.62) 54%, 
            rgba(255, 255, 255, 0.95) 79%, 
            rgba(255, 255, 255, 1) 100%)`
        }}
      ></div>

      {/* Konten Utama */}
      <div className="relative z-10 w-full max-w-[380px] flex flex-col items-center">
        
        <div className="text-center mb-7">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoBerkah} alt="Logo" className="w-12 h-12 object-contain" />
            <span className="font-bold text-[#2a4530] tracking-wide text-[15px]">BERKAH PALMA</span>
          </div>
          {/* 🟢 UBAHAN DI SINI: Diganti jadi Panel Karyawan */}
          <p className="text-slate-800 font-medium text-[14px]">Selamat Datang di Panel Karyawan</p>
          <h1 className="text-[18px] font-black text-slate-900 mt-0.5">Berkah Palma Nursery</h1>
        </div>

        <div className="bg-white w-full rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-7 md:p-8">
          <h2 className="text-[22px] font-bold text-center text-slate-800 mb-6">Masuk Karyawan</h2>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-[14px] focus:outline-none focus:border-[#2a4530] focus:ring-1 focus:ring-[#2a4530] transition-colors placeholder:text-slate-400"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Kata Sandi"
                className="w-full border border-slate-200 rounded-xl pl-4 pr-12 py-3 text-[14px] focus:outline-none focus:border-[#2a4530] focus:ring-1 focus:ring-[#2a4530] transition-colors placeholder:text-slate-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#2a4530] focus:outline-none"
              >
                {/* 🟢 UBAHAN DI SINI: Pakai ikon asli biar sama persis kyk Figma */}
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-[12px] pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-500">
                <input type="checkbox" className="rounded border-slate-300 text-[#2a4530]" />
                Ingat Saya
              </label>
              <a href="#" className="text-slate-500 hover:text-[#2a4530]">Lupa Kata Sandi?</a>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full bg-[#2a4530] hover:bg-[#1e3223] text-white font-bold py-3 text-[14px] rounded-full transition-all active:scale-[0.98]"
              >
                Masuk
              </button>
            </div>
          </form>

          <p className="text-center text-[12px] text-slate-500 mt-6">
            Belum punya akun? <a href="#" className="font-bold text-slate-800">Daftar</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginKaryawan;