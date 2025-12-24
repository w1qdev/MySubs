import axios, { AxiosInstance } from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:3000/",
});
export interface IUserDataDto {
    email: string;
    password: string;
    repeatPassword?: string;
}

export class AuthService {
    provider: AxiosInstance;

    constructor(provider: AxiosInstance) {
        this.provider = provider;
    }

    async createUser(userData: IUserDataDto) {
        const response = await this.provider.post("users", userData);

        return response;
    }

    async loginUser(userData: IUserDataDto) {
        const response = await this.provider.post("users/auth", userData);

        return response;
    }
}

export const authService = new AuthService(instance);
