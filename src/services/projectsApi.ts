import axios from "axios";


export function ProjectsApi() {
    const url = "https://private-052d6-testapi4528.apiary-mock.com/info";


    async function getAll(token: string) {
        const { data } = await axios.get(url, {
            headers: { Authorization: "Bearer " + token },
        });
        return data;
    }

    return { getAll};
}