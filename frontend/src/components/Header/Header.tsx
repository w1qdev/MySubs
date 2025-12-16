import React from "react";

export const Header = () => {
  return (
    <header className="w-100wv h-20 flex items-center justify-center fixed top-0 inset-x-0">
      <div className="w-240 shadow-xl shadow-gray-100/50 border-2 border-gray-50 rounded-4xl py-3 px-7 flex items-center justify-between">
        <div className="w-auto font-extrabold text-xl flex items-center cursor-pointer">
          <div className="text-white bg-[#343434] text-center flex items-center justify-center rounded-sm w-8 h-8 mr-2">
            М
          </div>
          <div className="text-[#343434]">MySubs</div>
        </div>
        <div className="w-auto flex gap-10 text-gray-400 cursor-pointer">
          <div className="transition duration-300 ease-in-out hover:text-gray-800">
            Как работает
          </div>
          <div className="transition duration-300 ease-in-out hover:text-gray-800">
            Возможности
          </div>
          <div className="transition duration-300 ease-in-out hover:text-gray-800">
            Цены
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 cursor-pointer font-medium">
          <button className="cursor-pointer bg-[#ffffff] transition duration-300 ease-in-out px-6 py-1.5 rounded-xl hover:bg-gray-100">
            Регистрация
          </button>
          <button className="cursor-pointer bg-[#343434] text-white px-6 py-1.5 rounded-xl transition duration-300 ease-in-out hover:bg-[#FFE500] hover:text-black">
            Войти
          </button>
          {/* <button className="cursor-pointer">theme_icon</button> */}
        </div>
      </div>
    </header>
  );
};
