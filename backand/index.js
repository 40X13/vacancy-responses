import {app} from './backand/app.js';
import {runDb} from './backand';

const port = 5000;
const host = 'localhost';

const startApp = async () => {
    await runDb();
    app.listen(port, host, () => console.log(`сервер запущен на порту ${port}`));
};

await startApp();


