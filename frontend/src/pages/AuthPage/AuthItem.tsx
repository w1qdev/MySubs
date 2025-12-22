import React from "react";
import { Label } from "@/components/ui/label";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { MailIcon, LockIcon } from "lucide-react";
import type { IUserInputValues } from "./AuthPage";

interface AuthItemProps {
    handleRegistration: () => void;
    handleChangeUserInputValues: () => void;
    userInputValues: IUserInputValues;
}

export const AuthItem = ({
    handleRegistration,
    handleChangeUserInputValues,
    userInputValues,
}: AuthItemProps) => {
    return (
        <>
            <div className="text-2xl font-extrabold text-[#343434]">
                С возвращением!
            </div>
            <div className="text-sm font-medium text-[#3434349c] mb-3">
                Введите свои данные для входа в панель управления сообществом.
            </div>

            <div className="w-full mb-2">
                <Label className="mb-1.5 text-md font-semibold" htmlFor="email">
                    Почта
                </Label>
                <InputGroup className="h-10 hover:border-[#D7A847]">
                    <InputGroupInput
                        required
                        type="email"
                        id="email"
                        placeholder="Введите вашу почту"
                        value={userInputValues.email}
                        onChange={handleChangeUserInputValues}
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
                        required
                        type="password"
                        id="password"
                        placeholder="Введите ваш пароль"
                        value={userInputValues.password}
                        onChange={handleChangeUserInputValues}
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
                <button
                    className="text-[#D7A847] cursor-pointer font-medium"
                    onClick={handleRegistration}
                >
                    Зарегистрироваться
                </button>
            </div>
        </>
    );
};
