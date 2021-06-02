import React from 'react';
import { useSelector } from 'react-redux';
import {Name, Photo} from './styled';


export default function() {
    const mergersArray = useSelector(state => state.mergers);
    const ListCards = mergersArray.map(mergers => {
    return (

        <Name key={mergers.id}>
            <Photo src={mergers.user.avatar_url}/> 
            { mergers.user.login }
        </Name>
    )
    })
    return (
        <div>
            {ListCards}
        </div>
    );
}
