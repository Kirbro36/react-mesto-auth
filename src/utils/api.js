class Api {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _checkRes(res) { 
        return res.ok ? res.json() : Promise.reject(`${res.status} ${res.statusText}`) 
    }

    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
          .then(this._checkRes)
      }

    getInfo(token) {
        return this._request('/users/me', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }
    
    setUserInfo(data, token) {
        return this._request('/users/me', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.username,
                about: data.about,
            })
        })
    }

    getCards(token) {
        return this._request('/cards', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }

    addCard(data, token) {
        return this._request('/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.title,
                link: data.link,
            })
        })
    }

    setNewAvatar(data, token) {
        return this._request('/users/me/avatar', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })
    }

    addLike(cardId, token) {
        return this._request(`/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }

    removeLike(cardId, token) {
        return this._request(`/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }

    removeCard(cardId, token) {
        return this._request(`/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }
}

const api = new Api({
    baseUrl: 'http://localhost:3000'
});

export default api;