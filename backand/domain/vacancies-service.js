import VacanciesRepository from '../repositories/vacanсies-repository.js';
import uniqid from 'uniqid';

class VacanciesService {
    getVacancies() {
        return VacanciesRepository.getVacancies();
    }

    async createNew() {
        const newVacancy = {
            id: uniqid(),
            company: null,
            vacancy: null,
            salary: null,
            status: null,
            note: null
        };
        return await VacanciesRepository.addNew(newVacancy);
    }

    update(modifiedProperty, vacancyId){
        return  VacanciesRepository.update(modifiedProperty, vacancyId)
    }

    delete(idList){
        return VacanciesRepository.delete(idList)
    }

     find(id){
         return VacanciesRepository.find(id)
     }

}

export default new VacanciesService();