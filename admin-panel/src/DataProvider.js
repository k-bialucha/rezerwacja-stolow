const useLocalhost = true;
const localhostUrl = 'http://localhost:8000/';
const remoteUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000/';

const apiUrl = useLocalhost ? localhostUrl : remoteUrl;

const endpoints = {
    reservations: 'testsite/api2/'
}

const composeUrl = resource => 
    apiUrl+endpoints[resource]
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
}

export default DataProvider;