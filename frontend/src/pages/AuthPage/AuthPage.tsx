import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { MailIcon, LockIcon } from "lucide-react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const AuthPage = () => {
    const [isRegistration, setIsRegistration] = useState(false);

    const handleRegistrationClick = () => {
        setIsRegistration(true);
    };

    const handleLoginClick = () => {
        setIsRegistration(false);
    };

    return (
        <div className="w-full flex flex-row">
            <div className="w-3/10 h-screen bg-[#FFFFFF] flex justify-center items-center z-5">
                <motion.div
                    className="w-full flex flex-col px-10 justify-center items-start gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="w-full flex flex-row justify-between gap-1 rounded-md bg-[#F8FAFC] px-2 py-2 mb-6">
                        <button
                            onClick={handleLoginClick}
                            className={`w-5/10 py-2 cursor-pointer rounded-md font-medium ${
                                isRegistration === false
                                    ? "text-[#343434] bg-white"
                                    : "text-gray-500 hover:bg-[#f1f1f1]"
                            } px-2 transition duration-300 ease-in-out`}
                        >
                            Вход
                        </button>
                        <button
                            onClick={handleRegistrationClick}
                            className={`w-5/10 cursor-pointer text-[#343434] font-medium hover:bg-[#f1f1f1] px-2 py-2 rounded-md transition duration-300 ease-in-out ${
                                isRegistration === true
                                    ? "bg-white"
                                    : "text-gray-500 bg-[#F8FAFC]"
                            }`}
                        >
                            Регистрация
                        </button>
                    </div>

                    {isRegistration === false ? (
                        <>
                            <div className="text-2xl font-extrabold text-[#343434]">
                                С возвращением!
                            </div>
                            <div className="text-sm font-medium text-[#3434349c] mb-3">
                                Введите свои данные для входа в панель
                                управления сообществом.
                            </div>

                            <div className="w-full mb-2">
                                <Label
                                    className="mb-1.5 text-md font-semibold"
                                    htmlFor="email"
                                >
                                    Почта
                                </Label>
                                <InputGroup className="h-10 hover:border-[#D7A847]">
                                    <InputGroupInput
                                        className=""
                                        type="email"
                                        placeholder="Введите вашу почту"
                                    />
                                    <InputGroupAddon>
                                        <MailIcon />
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>

                            <div className="w-full mb-2">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <Label
                                        className="mb-1.5 text-md font-semibold"
                                        htmlFor="email"
                                    >
                                        Пароль
                                    </Label>
                                    <button className="cursor-pointer text-sm text-[#D7A847]">
                                        Забыли пароль?
                                    </button>
                                </div>
                                <InputGroup className="h-10 hover:border-[#D7A847]">
                                    <InputGroupInput
                                        type="password"
                                        placeholder="Введите ваш пароль"
                                    />
                                    <InputGroupAddon>
                                        <LockIcon />
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>

                            <Button className="w-full cursor-pointer py-5.5 mt-3 bg-[#FFE500] text-black text-[17px] font-medium hover:bg-[#ffec33]">
                                Войти
                            </Button>

                            <div className="w-full mt-2.5 text-md text-center">
                                Нет аккаунта?{" "}
                                <button className="text-[#D7A847] cursor-pointer font-medium">
                                    Зарегистрироваться
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="text-2xl font-extrabold text-[#343434]">
                                Создание аккаунта
                            </div>
                            <div className="text-sm font-medium text-[#3434349c] mb-3">
                                Введите свои данные для входа в панель
                                управления сообществом.
                            </div>

                            <div className="w-full mb-2">
                                <Label
                                    className="mb-1.5 text-sm font-semibold"
                                    htmlFor="email"
                                >
                                    Почта
                                </Label>
                                <InputGroup className="h-10 hover:border-[#D7A847]">
                                    <InputGroupInput
                                        className=""
                                        type="email"
                                        placeholder="Введите вашу почту"
                                    />
                                    <InputGroupAddon>
                                        <MailIcon />
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>

                            <div className="w-full mb-2">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <Label
                                        className="mb-1.5 text-sm font-semibold"
                                        htmlFor="email"
                                    >
                                        Пароль
                                    </Label>
                                </div>
                                <InputGroup className="h-10 hover:border-[#D7A847]">
                                    <InputGroupInput
                                        type="password"
                                        placeholder="Придумайте хороший и надёжный пароль"
                                    />
                                    <InputGroupAddon>
                                        <LockIcon />
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>

                            <div className="w-full mb-2">
                                <div className="w-full flex flex-row justify-between items-center">
                                    <Label
                                        className="mb-1.5 text-sm font-semibold"
                                        htmlFor="email"
                                    >
                                        Повтор пароля
                                    </Label>
                                </div>
                                <InputGroup className="h-10 hover:border-[#D7A847]">
                                    <InputGroupInput
                                        type="password"
                                        placeholder="Повторите придуманный пароль"
                                    />
                                    <InputGroupAddon>
                                        <LockIcon />
                                    </InputGroupAddon>
                                </InputGroup>
                            </div>

                            <Button className="w-full cursor-pointer py-5.5 mt-3 bg-[#FFE500] text-black text-[17px] font-medium hover:bg-[#ffec33]">
                                Зарегистрироваться
                            </Button>

                            <div className="w-full mt-2.5 text-md text-center">
                                Уже есть аккаунт?{" "}
                                <button
                                    onClick={handleLoginClick}
                                    className="text-[#D7A847] cursor-pointer font-medium"
                                >
                                    Войти
                                </button>
                            </div>
                        </>
                    )}
                </motion.div>
            </div>
            <div className="w-7/10 bg-[#F8FAFC] h-screen flex justify-center items-center"></div>
        </div>
    );
};
