export const validateEmail = (email: string) => {
    if (!email) {
        return { isValid: false, error: "email обязателен для заполнения" };
    }

    // Простое и эффективное регулярное выражение
    const emailRegex =
        /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i;

    if (!emailRegex.test(email)) {
        return { isValid: false, error: "email введен не правильно" };
    }

    return { isValid: true, message: "Данные правильные" };
};

interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export const validatePassword = (password: string): ValidationResult => {
    const errors: string[] = [];
    const passwordLength: number = 6;

    // Список проверок
    if (password.length < passwordLength) {
        errors.push(
            `Пароль должен содержать минимум ${passwordLength} символов`
        );
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Пароль должен содержать одну заглавную букву");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Пароль должен содержать одну цифру");
    }

    return {
        isValid: errors.length === 0,
        errors: errors,
    };
};
