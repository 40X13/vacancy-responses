import {vacanciesCollection} from './db.js';

class VacanciesRepository {

    getVacancies() {
        return vacanciesCollection.find({}).toArray();
    }

    async addNew(newVacancy) {
        await vacanciesCollection.insertOne(newVacancy);
        return newVacancy.id;

    }

    async update(modifiedProperty, vacancyId) {

        return await vacanciesCollection.findOneAndUpdate({id: vacancyId},
            {$set: modifiedProperty},
            {returnDocument: 'after'});
    }

    async delete(idList) {
        await vacanciesCollection.deleteMany({id: {$in: idList}});
    }

    async find(id) {
        return vacanciesCollection.find({id}).toArray();
    }

}

export default new VacanciesRepository();

