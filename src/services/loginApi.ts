import axios from "axios";

export function LoginApi(){
    const url = "https://private-052d6-testapi4528.apiary-mock.com/authenticate";

    async function login(email:string, password:string) {
        const { data } = await axios.post(url, {email, password});
        return data;
    }

    return {login}
}