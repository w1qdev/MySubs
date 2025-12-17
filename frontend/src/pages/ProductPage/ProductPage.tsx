import React from "react";
import ProductImage from "@/assets/product-avatar-example.png";
import TelegramIcon from "@/components/Icons/Telegram.svg";
import DiscordIcon from "@/components/Icons/Discord.svg";
import ArrowIcon from "@/components/Icons/Arrow.svg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const ProductPage = () => {
    return (
        <motion.div
            className="w-full flex flex-col items-center justify-center mt-30 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
        >
            <div className="w-107.5 rounded-2xl shadow-2xl shadow-gray-200 flex flex-col items-center justify-center gap-2 overflow-hidden mb-10">
                <div className="w-full h-40 bg-[#7860F3]"></div>
                <div className="w-35 h-35 border-2 border-white bg-white -mt-23.5 rounded-full">
                    <img src={ProductImage} alt="Product" />
                </div>
                <div className="text-[#343434] text-[20px] font-black">
                    Sarah Jenkins
                </div>
                <div className="text-[#343434] text-[15px] font-normal pb-2">
                    @sarah.jenkins · Visual Designer
                </div>
                <div>
                    <span className="font-medium text-[#343434] text-[45px]">
                        499₽
                    </span>
                    /месяц
                </div>
                <div className="w-full px-8 flex flex-col">
                    <div className="font-bold w-full mb-2">Доступ к чатам:</div>
                    <div className="flex flex-row gap-3 mb-4">
                        <div className="bg-[#3B9DFF] px-3 py-1.5 text-white flex justify-center items-center rounded-full">
                            <img src={TelegramIcon} alt="telegram icon" />{" "}
                            @sarah_tg
                        </div>
                        <div className="bg-[#240054] px-3 py-1.5 text-white flex justify-center items-center rounded-full">
                            <img src={DiscordIcon} alt="discord icon" /> ds
                            @sarah_tg
                        </div>
                    </div>
                </div>

                <div className="w-full flex px-8 flex-col mb-2">
                    <div className="flex justify-start items-start gap-4 mb-3">
                        <div className="w-10 h-10 bg-[#6c71fd88] rounded-sm"></div>
                        <div className="w-70">
                            <div className="font-semibold h-6 mt-0">
                                Доступ к чатам в Telegram
                            </div>
                            <div className="text-gray-500 text-sm">
                                Получите доступ к закрытым чатам в Telegram с
                                дизайнерским сообществом.
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start items-start gap-4 mb-3">
                        <div className="w-10 h-10 bg-[#BC45DC88] rounded-sm"></div>
                        <div className="w-70">
                            <div className="font-semibold h-6 mt-0">
                                Доступ к чатам в Discord
                            </div>
                            <div className="text-gray-500 text-sm">
                                Получите доступ к закрытым чатам в Discord с
                                дизайнерским сообществом.
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start items-start gap-4 mb-3">
                        <div className="w-10 h-10 bg-[#09C4EB88] rounded-sm"></div>
                        <div className="w-70">
                            <div className="font-semibold h-6 mt-0">
                                Доступ к чатам в Discord
                            </div>
                            <div className="text-gray-500 text-sm">
                                Получите доступ к закрытым чатам в Discord с
                                дизайнерским сообществом.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-8 flex flex-col mb-6">
                    <Button className="h-10 flex justify-center items-center gap-2 cursor-pointer bg-[#7860F3] text-white text-[17px] font-normal hover:bg-[#9c7ff5]">
                        Подписаться за 499₽
                        <img className="w-4" src={ArrowIcon} alt="" />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};
