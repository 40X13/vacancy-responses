import VacanciesService from '../domain/vacancies-service.js';

class VacanciesController {
    async getVacancies(_req, res) {
        const vacancies = await VacanciesService.getVacancies();

        if (!vacancies) res.sendStatus(400);
        res.status(200).send(vacancies);

    }

    async createNew(_req, res) {
        const id = await VacanciesService.createNew();
        if (!id) res.sendStatus(400);

        const newVacancy = await VacanciesService.find(id);
        if (!newVacancy) res.sendStatus(400);
        res.status(200).send(newVacancy);

    }

    async update(req, res) {
        const {modifiedProperty, vacancyId} = req.body;
        if (!modifiedProperty || !vacancyId) res.sendStatus(400);

        await VacanciesService.update(modifiedProperty, vacancyId);
    }

    async delete(req, res) {
        const idList = req.body;
        console.log(idList);
        if (!idList||!idList.length) res.sendStatus(400);
        await VacanciesService.delete(idList);
        res.sendStatus(200);
    }
}

export default new VacanciesController();