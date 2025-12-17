import React from "react";
import { Button } from "@/components/ui/button";

export const NotFoundPage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-50 gap-6">
            <div>
                <span className="text-9xl font-extrabold">404</span>
            </div>
            <div>Страница не найдена :(</div>
            <Button className="cursor-pointer">Вернуться на главную</Button>
        </div>
    );
};
