
const Headers = () => {
    const tableHeaders = ['Компания', 'Вакансия', 'Зарплатная вилка', 'Статус отклика', 'Заметка'];
    return (
        tableHeaders.map((title, ind) => <span key={ind}>{title}</span>)
    );
};
export default Headers;