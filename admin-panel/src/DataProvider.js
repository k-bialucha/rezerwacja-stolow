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
}

export default DataProvider;