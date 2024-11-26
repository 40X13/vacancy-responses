import {app} from './app.js';
import {runDb} from './repositories/db.js';

const port = process.env.PORT||5000;
const host = 'localhost';

const startApp = async () => {
    await runDb();
    app.listen(port, host, () => console.log(`сервер запущен на порту ${port}`));
};

await startApp();


