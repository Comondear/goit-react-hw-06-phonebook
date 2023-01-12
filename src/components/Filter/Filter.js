import css from './Filtter.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter';


export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <>
        <label>
        Find contacts by name
                <input className={css.inp}
                    type="text"
                    value={filter}
                    onChange={e => dispatch(setFilter(e.target.value))}/>
        </label>
        </>
    )
}


