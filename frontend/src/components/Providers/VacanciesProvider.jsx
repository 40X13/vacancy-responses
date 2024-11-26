import {createContext, useState} from 'react';
import {vacanciesAPI} from '../../api/vacancies-api.js';

export const VacanciesContext = createContext({});
export const HandlersContext = createContext({});

const VacanciesProvider = ({children}) => {

    const [vacanciesList, setVacanciesList] = useState([]);
    const [idListForRemove, setIdListForRemove] = useState([]);

    const totalVacancies = vacanciesList.length;

    const setVacancies = async () => {
        const data = await vacanciesAPI.getVacancies();
        setVacanciesList([...data]);
    };
    const createNewVacancy = async () => {
        const newVacancyList = await vacanciesAPI.createNewVacancy();
        setVacanciesList([...vacanciesList, ...newVacancyList]);
    };
    const updateVacancy = async (modifiedProperty, vacancyId) => {
        const updateVacancy = await vacanciesAPI.updateVacancy(modifiedProperty, vacancyId);
        const newList = vacanciesList.filter(vacancy => vacancy.id !== updateVacancy.id);
        setVacanciesList([...newList, updateVacancy]);
    };
    const removeVacancies = async () => {
        const res = await vacanciesAPI.removeVacancies(idListForRemove);

        const newList = vacanciesList.filter(vacancy => !idListForRemove.some(id => vacanciesList.id === id));
        setVacanciesList([...newList]);
    };

    const removeVacancy = async (newId) => {
        const res = await vacanciesAPI.removeVacancies([ newId]);

        const newList = vacanciesList.filter(vacancy => vacancy.id !== newId);
        const newIdList = idListForRemove.filter(id => id !== newId);
        setIdListForRemove([...newIdList]);
        setVacanciesList([...newList]);
    };

    const toggleIdInRemoveList = (newId) => {
        if (idListForRemove.includes(newId)) {
            const newIdList = idListForRemove.filter(id => id !== newId);
            setIdListForRemove([...newIdList]);
        } else {
            setIdListForRemove([...idListForRemove, newId]);
        }
    };

    const drop = async () => {
        if (confirm('уверен?')) {
            await vacanciesAPI.drop();
        }
    };

    return (
        <VacanciesContext.Provider value={{vacanciesList, totalVacancies, idListForRemove}}>
            <HandlersContext.Provider
                value={{setVacancies, createNewVacancy, updateVacancy, removeVacancies,removeVacancy, toggleIdInRemoveList, drop}}>
                {children}
            </HandlersContext.Provider>
        </VacanciesContext.Provider>
    );
};

export default VacanciesProvider;