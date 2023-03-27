import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1'
export class CatsService {

    static async getAll(): Promise<any> {
        try {
            const res = await axios.get(BASE_URL + '/images/search?limit=10');
            return res.data;
        } catch (err) {
            console.log(err)
        }
    }
}