import React from "react";
import { Label } from "@/components/ui/label";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { MailIcon, LockIcon } from "lucide-react";
import { IUserInputValues } from "./AuthPage";
import { IFormState } from "./AuthPage";
import { motion } from "framer-motion";

interface RegistrationItemProps {
    handleLogin: () => void;
    handleChangeUserInputValues: () => void;
    userInputValues: IUserInputValues;
    formState: IFormState;
}

export const RegistrationItem = ({
    handleLogin,
    handleChangeUserInputValues,
    userInputValues,
    formState,
}: RegistrationItemProps) => {
    return (
        <div>
            <div className="text-2xl font-extrabold text-[#343434]">
                Создание аккаунта
            </div>
            <div className="text-sm font-medium text-[#3434349c] mb-3">
                Введите свои данные для входа в панель управления сообществом.
            </div>

            <div className="w-full mb-2">
                <Label className="mb-1.5 text-sm font-semibold" htmlFor="email">
                    Почта
                </Label>
                <InputGroup className="h-10 hover:border-[#D7A847]">
                    <InputGroupInput
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
                        className="mb-1.5 text-sm font-semibold"
                        htmlFor="password"
                    >
                        Пароль
                    </Label>
                </div>
                <InputGroup className="h-10 hover:border-[#D7A847]">
                    <InputGroupInput
                        type="password"
                        id="password"
                        placeholder="Придумайте хороший и надёжный пароль"
                        value={userInputValues.password}
                        onChange={handleChangeUserInputValues}
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
                        htmlFor="repeatPassword"
                    >
                        Повтор пароля
                    </Label>
                </div>
                <InputGroup className="h-10 hover:border-[#D7A847]">
                    <InputGroupInput
                        type="password"
                        id="repeatPassword"
                        placeholder="Повторите придуманный пароль"
                        value={userInputValues.repeatPassword}
                        onChange={handleChangeUserInputValues}
                    />
                    <InputGroupAddon>
                        <LockIcon />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="w-full cursor-pointer py-5.5 mt-3 bg-[#FFE500] text-black text-[16px] font-medium hover:bg-[#ffec33]">
                    {formState.isFetching && <Spinner />} Зарегистрироваться
                </Button>
            </motion.div>

            <div className="w-full mt-2.5 text-md text-center">
                Уже есть аккаунт?{" "}
                <button
                    onClick={handleLogin}
                    className="text-[#D7A847] cursor-pointer font-medium"
                >
                    Войти
                </button>
            </div>
        </div>
    );
};
