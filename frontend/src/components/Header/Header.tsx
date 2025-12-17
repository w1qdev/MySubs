import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";

export const Header = () => {
    const isProductPage = window.location.pathname === "/";

    return (
        <header className="w-100wv h-17 flex items-center justify-center fixed top-0 inset-x-0">
            <div className="w-240 bg-white/80 backdrop-blur-lg border-gray-50 rounded-4xl py-3 px-7 flex items-center justify-between">
                <Link
                    to="/"
                    className="w-auto font-extrabold text-xl flex items-center cursor-pointer"
                >
                    <div className="text-white bg-[#343434] text-center flex items-center justify-center rounded-sm w-8 h-8 mr-2">
                        М
                    </div>
                    <div className="text-[#343434]">MySubs</div>
                </Link>

                {isProductPage === true ? (
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
                ) : null}

                <div className="flex gap-2 text-gray-500 cursor-pointer font-medium items-center">
                    <Button className="cursor-pointer bg-[#FFE500] text-[#343434] hover:bg-[#ffee6e] font-normal">
                        + Попробовать бесплатно
                    </Button>
                    <MoonIcon className="ml-3" />
                </div>
            </div>
        </header>
    );
};
