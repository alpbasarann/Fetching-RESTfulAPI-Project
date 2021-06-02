import React, { useEffect }  from 'react';
import {fetchClosedPRs} from '../../actions';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import Loading from '../Slider';
import ListCards from '../ListCards';
import Area from './styled';

function List () {
    const dispatch = useDispatch()
    const allArrays = useSelector(state => state); 
    console.log(useSelector(state => state));

    useEffect(() => {
        dispatch (fetchClosedPRs())
    },[])

    const Child = allArrays.loading 
        ? Loading  
        : ListCards

        return(
            <div>
                <Area>
                    <Child />
                </Area>
            </div>
        )

}

export default List;
