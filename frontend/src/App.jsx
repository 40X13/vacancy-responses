import {useEffect, useState} from 'react';

import './App.css';

import Table from './components/Table/Table.jsx';

import {useVacancies} from './hooks/useVacancies.js';
import {useHandlers} from './hooks/useHandlers.js';

function App() {

    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    const {totalVacancies} = useVacancies();
    const {setVacancies, createNewVacancy,removeVacancies, drop} = useHandlers();

    const fetchData = async () => {
        try {
            await setVacancies();
            setIsFetching(false);
        } catch (err) {
            setError(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isFetching) return <h1>Loading...</h1>;
    if (error) return <h1> some error {error}</h1>;

    return (
        <div className={'wrapper'}>
            <main>
                {!!totalVacancies &&
                    <>
                        <Table/>
                        <button onClick={removeVacancies}>dell all</button>
                    </>}
                <button onClick={createNewVacancy}>add new</button>
            <button onClick={drop}>I</button>
            </main>
        </div>

    );

}

export default App;

