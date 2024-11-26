import InputOutput from '../../InputOutput/InputOutput';
import {useHandlers} from '../../../hooks/useHandlers.js';
import {useVacancies} from '../../../hooks/useVacancies.js';

const Line = ({vacancy}) => {
    const vacancyPropertiesKeys = Object.keys(vacancy).filter(propKey => propKey !== 'id'&& propKey !=='_id');

    const {removeVacancy, toggleIdInRemoveList,updateVacancy} = useHandlers();
    const {idListForRemove} = useVacancies();

    return (
        <div>
            {
                vacancyPropertiesKeys.map((propertyKey, ind) => {
                    return <InputOutput
                        key={ind}
                        initialValue={vacancy[propertyKey] ?? '____'}
                        name={propertyKey}
                        id={vacancy.id}
                        updateVacancy={updateVacancy}
                    />;
                })
            }
            <button onClick={() => toggleIdInRemoveList(vacancy.id)}>
                {idListForRemove.includes(vacancy.id) ? 'x' : 'v'}
            </button>
            <button onClick={() => removeVacancy(vacancy.id)}>dell</button>
        </div>

    );
};

export default Line;