const useLocalhost = true;
const localhostUrl = 'http://localhost:8000';
const remoteUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000';

const apiUrl = useLocalhost ? localhostUrl : remoteUrl;

const endpoints = {
    reservations: 'testsite/api2'
}

const composeUrl = (resource, key) => 
    `${apiUrl}/${endpoints[resource]}/${key ? key+'/' : ''}`
;

class DataProvider {
    constructor(token) {
        this.token = token;
    }
    getReservations() {
        const Authorization = `Token ${this.token}`;
        const url = composeUrl('reservations');
        return fetch(url, {
            headers: {
                'accept': 'application/json',
                Authorization
            }
        })
        .then( response => response.json() );
    }
    deleteReservation(key) {
        const Authorization = `Token ${this.token}`;
        const url = composeUrl('reservations', key)
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                Authorization
            }
        })
    }
}

export default DataProvider;