import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import VacanciesProvider from './components/Providers/VacanciesProvider.jsx';

createRoot(document.getElementById('root')).render(
    <VacanciesProvider>
        <App/>
    </VacanciesProvider>
);
