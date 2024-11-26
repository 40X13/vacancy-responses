export const vacanciesAPI = {
    baseURL: (process.env.BASE_URL || 'http://localhost:5000') + '/api/vacancies',

    async getVacancies() {
        const res = await fetch(this.baseURL);
        if (res.ok) return await res.json();
    },

    async createNewVacancy() {
        const res = await fetch(this.baseURL, {method: 'POST'});
        if (res.ok) return await res.json();
    },

    async updateVacancy(modifiedProperty, vacancyId) {
        const res = await fetch(this.baseURL,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({modifiedProperty, vacancyId})
            }
        );
        if (res.ok) return await res.json();
    },

    async removeVacancies(idList) {
        const res = await fetch(`${this.baseURL}/delete`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(idList)
            });
        if (res.ok) return await res.json();
    },

    async drop() {
        await fetch(`${this.baseURL}/drop`,);
    }
};


