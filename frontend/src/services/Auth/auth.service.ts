import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:3000/",
});

export class AuthService {
    provider: any;

    constructor(provider: any) {
        this.provider = provider;
    }

    async createUser(userData) {
        const response = await this.provider.post("users", userData);

        return response;
    }

    async loginUser(userData) {
        const response = await this.provider.post("users/auth", userData);

        console.log(response);
        return response;
    }
}

export const authService = new AuthService(instance);
