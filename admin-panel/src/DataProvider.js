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

const composeRequestDetails = (token, method, body) => ({
    method: method || "GET",
    ...body ? {body: JSON.stringify(body)} : {},
    headers: {
        'accept': 'application/json',
        'Authorization': `Token ${token}`
    }
});

class DataProvider {
    constructor(token) {
        this.token = token;
    }
    getReservations() {
        const url = composeUrl('reservations');
        const requestDetails = composeRequestDetails(this.token);
        return fetch(url, requestDetails)
            .then( response => response.json() );
    }
    deleteReservation(key) {
        const url = composeUrl('reservations', key);
        const requestDetails = composeRequestDetails(this.token, 'DELETE');
        return fetch(url, requestDetails);
    }
    updateReservation(key, item) {
        const url = composeUrl('reservations', key);
        const requestDetails = composeRequestDetails(this.token, 'PUT', item);
        return fetch(url, requestDetails)
    }
}

export default DataProvider;