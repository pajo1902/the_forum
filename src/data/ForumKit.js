const ROOT_URL = 'https://lab.willandskill.eu';
const POSTS_URL = `${ROOT_URL}/api/v1/forum/posts/`;
const CAT_URL = `${ROOT_URL}/api/v1/forum/categories/`;

export default class {
    fetchAll() {
        return fetch(POSTS_URL, { headers: this.getPrivateHeaders() });
    }

    fetchOne(id) {
        const url = `${ROOT_URL}/api/v1/forum/posts/${id}/`;
        return fetch(url, { headers: this.getPrivateHeaders() });
    }

    createPost(payload) {
        return fetch(POSTS_URL, { method: "POST", body: JSON.stringify(payload), headers: this.getPrivateHeaders() });
    }

    fetchAllCategories() {
        return fetch(CAT_URL, { headers: this.getPrivateHeaders() });
    }

    fetchReplies(id) {
        const url = `${ROOT_URL}/api/v1/forum/posts/${id}/replies`
        return fetch(url, { headers: this.getPrivateHeaders() });
    }

    createReply(payload) {
        return fetch(POSTS_URL, { method: "POST", body: JSON.stringify(payload), headers: this.getPrivateHeaders() });
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

}