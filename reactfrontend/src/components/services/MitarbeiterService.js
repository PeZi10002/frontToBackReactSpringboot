import axios from 'axios'
const MITARBEITER_REST_API_URL = 'http://localhost:8080/api/mitarbeiter';

class MitarbeiterService {
    getMitarbeiter() {
        return axios.get(MITARBEITER_REST_API_URL);
    }
}

export default new MitarbeiterService(); //diese Klasse als Objekt exportieren