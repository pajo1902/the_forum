import decode from 'jwt-decode';

const ROOT_URL = 'https://lab.willandskill.eu';
const REGISTER_URL = `${ROOT_URL}/api/v1/auth/users/`;
const LOGIN_URL = `${ROOT_URL}/api/v1/auth/api-token-auth/`;
const COUNTRY_URL = `${ROOT_URL}/api/v1/countries/`;
const ME_URL = `${ROOT_URL}/api/v1/me/`;

export default class {
    
    register(payload) {
        return fetch(REGISTER_URL, {method: "POST", body: JSON.stringify(payload), headers: this.getPublicHeaders()})
    }

    login(payload) {
        return fetch(LOGIN_URL, { method: "POST", body: JSON.stringify(payload), headers: this.getPublicHeaders() })
    }

    logout() {
        localStorage.removeItem("JWT_APP");
    }

    getPrivateHeaders() {
        return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.getToken()}`
        }
    }

    getPublicHeaders() {
        return {
            "Content-Type": "application/json"
        }
    }

    setToken(token) {
        localStorage.setItem("JWT_APP", token)
    }

    getToken() {
        return localStorage.getItem("JWT_APP")
    }

    isTokenValid() {
        const token = this.getToken();
        
        if(!token) {
            return false;
        } 
        const { exp } = decode(token);

        try {
            if(exp < new Date().getTime() / 1000) {
                return false;
            } else {
                return true;
            }
        } catch (e) {
            return false;
        }
    }

    getCountries() {
        return fetch(COUNTRY_URL, { headers: this.getPublicHeaders() })
    }

    getUser() {
        return fetch(ME_URL, { headers: this.getPrivateHeaders() })
    }
}