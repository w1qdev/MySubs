import React from "react";
import { motion } from "framer-motion";
import {
    WalletIcon,
    UserPlus,
    TrendingUp,
    Star,
    Zap,
    LockKeyhole,
    ChartNoAxesCombined,
} from "lucide-react";

export const HomePage = () => {
    return (
        <main className="relative overflow-hidden">
            <div className="relative pt-5 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 relative z-10 flex flex-col items-start text-left">
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 border border-yellow-100 mb-8 shadow-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                                </span>
                                <span className="text-xs font-bold tracking-wide text-yellow-800 uppercase">
                                    Версия 1.0 уже доступна
                                </span>
                            </motion.div>
                            <motion.h1
                                className="text-4xl font-extrabold tracking-tight text-[#343434] leading-[1.1] mb-6"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Монетизируйте свои закрытые сообщества Telegram
                                и Discrod <br />с MySubs
                            </motion.h1>
                            <motion.p
                                className="text-md text-[#919191] text-text-muted mb-8 max-w-xl"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                {" "}
                                Автоматизируйте платный доступ в Telegram и
                                Discord. Принимайте платежи в любой валюте,
                                управляйте подписками и анализируйте рост
                                аудитории на одной платформе.{" "}
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <button className="bg-[#FFE500] text-[#343434] px-8 py-4 text-base font-bold rounded-xl shadow-lg shadow-yellow-200/50 transition-all transform hover:-translate-y-1 hover:shadow-yellow-300/50 cursor-pointer w-full sm:w-auto">
                                    Начать бесплатно
                                </button>
                            </motion.div>
                            <motion.div
                                className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 w-full animate-levitate"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <div className="flex -space-x-3">
                                    <img
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpIU5sktEznAqSV9mEeyrnb-34s94f3BXs0Flb_L-3Y_CNtoeKiQGjVTi4ebyJRKIEFNyLsTTAbjYfkspOnTRVkXp-96A-lrxCPDE-f1it8tt4NlCAEl-jd87u0olVHPiYUg3nXAg_0r0v6L1N6Ny7mK_TWSyWQHmIMZHNIkJpjZ17CgtPUsHC2y2DnBnguc8H4wHPjKiCNfdpGbskt3yKdYnRCbdJ3glOqRFMugpUPV_LZi5a5r814jOMyk_2tgsCIyjd3ISRIsw"
                                    />
                                    <img
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVnjkhwUuA8i2k6RHuSSUqse8s1a2QWyo6xRvx_wJE4SemCMQxm3x39uezdCGfaaNo3nCZRdXA4fkZB2eezdhxXgY44uLy52tmKX9QLWI9yxml1VIJ00KujnHl4bc4-mEeo3D9e-xBXuRaUFZ2JxDwKIG1fXe-kfP6R-4Vs1sLoDVjYd6eo72AWiurqlupwhFI8nkkSfopjbvreDCYfUP8X8SuEURJIgrOcWHzgT8g_28qu1H4683482gsPp0YyGy7OhuSEN3rrkk"
                                    />
                                    <img
                                        alt="User"
                                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWV5JaHcLz6fcponchi9rH1Hp-FyFTDopH_o2dcDJOd0oqsMeuFvfFBleTH99Idf08OuQq2LZ75v5niIWu6vti9Oxs84TqsSpSGQ_C8L_U49U9KbZ2OU_gS2rzRVktiwvO3gCspm1mkv74PulnkMWhgtbp6U105WkJYbbv_ZJQpG-vBxXN8yzReBjK89cXFkx8wskZN7ibOnBuGMbALZ4-XSv9-DMcOczhUf-F4iNe-bruC8V2gcEJmhPwIvxbm_-_ZISzaGw1p1o"
                                    />
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                                        {" "}
                                        +1k{" "}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-yellow-400 text-lg">
                                        <span className="material-symbols-outlined text-[20px] fill-current">
                                            <Star className="w-5 h-5" />
                                        </span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">
                                            <Star className="w-5 h-5" />
                                        </span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">
                                            <Star className="w-5 h-5" />
                                        </span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">
                                            <Star className="w-5 h-5" />
                                        </span>
                                        <span className="material-symbols-outlined text-[20px] fill-current">
                                            <Star className="w-5 h-5" />
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium text-text-muted">
                                        Выбор {"  "}
                                        <span className="font-bold text-[#343434]">
                                            1000+{"  "}
                                        </span>
                                        авторов
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            className="lg:col-span-6 relative lg:h-175 flex items-center justify-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <div className="relative w-full max-w-lg perspective-1000">
                                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-yellow-900/10 bg-white border-4 border-white/50 ring-1 ring-gray-900/5 transition-transform duration-700 hover:scale-[1.01] animate-float">
                                    <div className="absolute inset-0 bg-linear-to-tr from-yellow-500/10 via-transparent to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                                    <img
                                        alt="Abstract 3D Shape representing growth"
                                        className="w-full h-auto object-cover animate-levitate"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3wylRRsKFbF80SV0iiQwPOv6AVk8dfGMTNmae2WUPEtEAwAU95ulppKVMm1DiDf3MFSIxEEo0gd6-q4I5stDHc8v49jJDvEi2LB0esQ1BgXs8ztBtJiIc0vaFF_E3UbELX7Ts1G8SzNQkALb8iG2VLbbtC17Sf_JdKP5gbdNp83mbN2FCpoeywRO48w27j7zib5GkEyZZLxGA7eJJpGs_sHhX4y5Dh8SzqxJ-1qpjCU_iQ2P0SAcPcG1zai9a0CA0N5_OVDmWIJY"
                                    />
                                </div>
                                <div className="absolute -bottom-10 -left-6 sm:-left-12 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 min-w-65 animate-float-delayed">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                                                <span className="material-symbols-outlined text-xl">
                                                    <WalletIcon />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                                                    Выручка
                                                </p>
                                                <p className="text-xs font-semibold text-gray-800">
                                                    Январь 2026
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end justify-between">
                                        <div className="text-3xl font-bold text-[#343434] tracking-tight">
                                            ₽452,000
                                        </div>
                                        <span className="flex items-center text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded-full mb-1">
                                            <span className="material-symbols-outlined text-[14px] mr-0.5">
                                                <TrendingUp />
                                            </span>{" "}
                                            12%{" "}
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute top-10 -right-4 sm:-right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-20 flex items-center gap-4 animate-float">
                                    <div className="w-12 h-12 rounded-full bg-[#343434] text-primary flex items-center justify-center shadow-lg shadow-slate-900/20">
                                        <UserPlus className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-700 font-bold uppercase tracking-widest mb-0.5">
                                            Новые подписчики
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <p className="text-xl font-extrabold text-[#343434]">
                                                +128
                                            </p>
                                            <p className="text-xs text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">
                                                сегодня
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-tr from-yellow-200/20 via-white to-blue-100/20 rounded-full blur-3xl opacity-60"></div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFE500] transition-colors duration-300 shadow-sm group-hover:shadow-yellow-200">
                                <span className="text-yellow-600 text-3xl transition-colors">
                                    <Zap className="group-hover:text-[#343434] transition-colors duration-300" />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-[#343434] mb-3">
                                Быстрый старт
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {" "}
                                Интеграция с Telegram и Discord за 2 клика.
                                Никакого кода — просто подключите бота и
                                настройте тарифы.{" "}
                            </p>
                        </div>
                        <div className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#343434] transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-slate-600 text-3xl group-hover:text-white transition-colors">
                                    <LockKeyhole />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-[#343434] mb-3">
                                Полный контроль
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {" "}
                                Наш бот автоматически добавляет платных
                                подписчиков и удаляет тех, кто перестал платить.
                                Вы спите — система работает.{" "}
                            </p>
                        </div>
                        <div className="group p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm">
                                <span className="material-symbols-outlined text-indigo-600 text-3xl group-hover:text-white transition-colors">
                                    <ChartNoAxesCombined />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-[#343434] mb-3">
                                Аналитика дохода
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {" "}
                                Прозрачные отчеты по LTV, оттоку и новым
                                подпискам в реальном времени. Понимайте свой
                                бизнес на 100%.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
