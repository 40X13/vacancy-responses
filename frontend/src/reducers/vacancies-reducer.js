const SET_VACANCIES = 'set vacancies-api.js';
const REMOVE_VACANCIES = 'remove vacancies-api.js';
const UPDATE_VACANCY = 'update vacancy';
const CREATE_VACANCY = 'create vacancy';
export const TOGGLE_IS_FETCHING = 'toggle is fetching';
const TOGGLE_IS_ERROR = 'toggle is error';


// это вызываю в компоненте
// const [state, dispatch] = useReducer(vacanciesReducer, initialState)
//    const {vacancies, isFetching, isError} = state;

const AC = {
    toggleIsFetching(payload) {
        return {
            type: TOGGLE_IS_FETCHING,
            payload
        };
    },
    toggleIsError(payload) {
        return {
            type: TOGGLE_IS_ERROR,
            payload,
        };
    },
    updateVacancy(payload) {
        return {
            type: UPDATE_VACANCY,
            payload,
        };
    },
    createVacancy() {
        return {
            type: CREATE_VACANCY,
        };
    },
    setVacancies(payload) {
        return {
            type: SET_VACANCIES,
            payload
        };
    }
};

const initialState = {
    vacancies: [],
    isFetching: null,
    isError: null
};

const vacanciesReducer = (state , action) => {
    switch (action.type) {
        case REMOVE_VACANCIES:
            return {...state,};
        case SET_VACANCIES:
            return {...state, vacancies: [ ...action.payload]};
        case TOGGLE_IS_FETCHING:
            return {...state,isFetching:action.payload};
        case UPDATE_VACANCY:
            return;
        case CREATE_VACANCY:
            return;
        default:
            return state;
    }
};

export {vacanciesReducer, initialState, AC};


// const handlers = {
//     async createNewVacancy() {
//         console.log(vacancies-api.js);
//         const newVacancy = await API.createNewVacancy();
//         console.log(vacancies-api.js);
//         setVacancies([...vacancies-api.js, newVacancy]);
//     },
//     async updateVacancy(vacancy) {
//         const updatedVacancy = await API.updateVacancy(vacancy);
//         const notUpdatedVacancies = vacancies-api.js.filter(vacancy => vacancy.id !== updatedVacancy.id);
//         setVacancies([...notUpdatedVacancies, updatedVacancy]);
//     },
//     async removeVacancies(removeList) {
//         const res = await API.removeVacancies(removeList.join('&'));
//         if (res.status === 200) {
//             const savedVacancies = vacancies-api.js.filter(vacancy => !removeList.some(id => vacancies-api.js.id === id));
//             setVacancies([...savedVacancies]);
//         }
//
//     },
// };

// const API = {
//     baseURL: 'http://localhost:5000/api/vacancies',
//
//     async getVacancies() {
//         const res = await fetch(this.baseURL);
//         if (res.ok) return await res.json();
//     },
//
//     async createNewVacancy() {
//         const res = await fetch(this.baseURL, {method: 'POST'});
//         if (res.ok) return await res.json();
//     },
//
//     async updateVacancy(vacancy) {
//         const res = await fetch(this.baseURL, {method: 'PUT', body: vacancy});
//         if (res.ok) return await res.json();
//     },
//
//     async removeVacancies(query) {
//         const res = await fetch(`${this.baseURL}?${query}`, {method: 'DELETE'});
//         if (res.ok) return await res.json();
//     }
// };
