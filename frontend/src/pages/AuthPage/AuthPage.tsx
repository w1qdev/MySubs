import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuthItem } from "./AuthItem";
import { RegistrationItem } from "./RegistrationItem";
import { authService } from "../../services/Auth/auth.service";
import { validateEmail, validatePassword } from "../../common/utils/utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export interface IUserInputValues {
    email: string;
    password: string;
    repeatPassword?: string;
}

export interface IFormState {
    isFetching: boolean;
}

export const AuthPage = () => {
    const [isRegistration, setIsRegistration] = useState<boolean>(false);
    const navigate = useNavigate();
    const [userInputValues, setUserInputValues] = useState<IUserInputValues>({
        email: "",
        password: "",
        repeatPassword: "",
    });
    const [formState, setFormState] = useState<IFormState>({
        isFetching: false,
    });

    const handleRegistration = () => {
        setIsRegistration(true);
    };

    const handleLogin = () => {
        setIsRegistration(false);
    };

    const handleChangeUserInputValues = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setUserInputValues(() => ({
            ...userInputValues,
            [e.target.id]: e.target.value,
        }));
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState(() => ({ ...formState, isFetching: true }));

        try {
            const validatePasswordsResult = validatePassword(
                userInputValues.password
            );
            if (validatePasswordsResult.isValid === false) {
                toast.error(validatePasswordsResult.errors[0]);
                return;
            }

            if (
                isRegistration &&
                userInputValues.password !== userInputValues.repeatPassword
            ) {
                toast.error("Пароли не совпадают");
                return;
            }

            const validateEmailResult = validateEmail(userInputValues.email);
            if (validateEmailResult.isValid === false) {
                toast.error(validateEmailResult.error);
                return;
            }

            if (isRegistration) {
                // user registration
                await authService
                    .createUser(userInputValues)
                    .then((res) => {
                        toast.success("Вы успешно зарегистрировались!");

                        setTimeout(() => {
                            return navigate("/app");
                        }, 2000);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                    });
            } else {
                // user authorization
                await authService
                    .loginUser(userInputValues)
                    .then((res) => {
                        toast.success("Успешная авторизация!");

                        setTimeout(() => {
                            return navigate("/app");
                        }, 2000);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                    });
            }
        } catch (error) {
            if (error.response) {
                const errorMessage = error.response.data.message;

                return toast.error(errorMessage);
            } else {
                console.error("Проблема с подключением");
            }
        } finally {
            setFormState(() => ({ ...formState, isFetching: false }));
        }
    };

    return (
        <div className="w-full flex flex-row">
            <div className="w-3/10 h-screen bg-[#FFFFFF] flex justify-center items-center z-5">
                <motion.div
                    className="w-full h-75 flex flex-col px-10 justify-center items-start gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <div className="w-full flex flex-row justify-between gap-1 rounded-md bg-[#F8FAFC] px-2 py-2 mb-6">
                        <button
                            onClick={handleLogin}
                            className={`w-5/10 py-2 cursor-pointer rounded-md font-medium ${
                                isRegistration === false
                                    ? "text-[#343434] bg-white"
                                    : "text-gray-500 hover:bg-[#f1f1f1]"
                            } px-2 transition duration-300 ease-in-out`}
                        >
                            Вход
                        </button>
                        <button
                            onClick={handleRegistration}
                            className={`w-5/10 cursor-pointer text-[#343434] font-medium hover:bg-[#f1f1f1] px-2 py-2 rounded-md transition duration-300 ease-in-out ${
                                isRegistration === true
                                    ? "bg-white"
                                    : "text-gray-500 bg-[#F8FAFC]"
                            }`}
                        >
                            Регистрация
                        </button>
                    </div>

                    <form onSubmit={handleFormSubmit}>
                        {isRegistration === false ? (
                            <AuthItem
                                handleChangeUserInputValues={
                                    handleChangeUserInputValues
                                }
                                userInputValues={userInputValues}
                                handleRegistration={handleRegistration}
                            />
                        ) : (
                            <RegistrationItem
                                formState={formState}
                                handleChangeUserInputValues={
                                    handleChangeUserInputValues
                                }
                                userInputValues={userInputValues}
                                handleLogin={handleLogin}
                            />
                        )}
                    </form>
                </motion.div>
            </div>
            <div className="w-7/10 bg-[#F8FAFC] h-screen flex justify-center items-center"></div>
        </div>
    );
};
