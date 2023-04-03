import { HttpHeaders } from "../types/types";

export const useHttp = () => {

    const request = async (
        url: string,
        method: string = 'GET',
        body: null | string = null,
        headers: HttpHeaders = { 'Content-Type': 'application/json' }): Promise<any> => {

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch (e) {
            throw e;
        }
    };

    return { request }
}