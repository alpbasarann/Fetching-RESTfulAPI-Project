import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {fetchClosedPRs} from '../../actions';
import { useDispatch } from 'react-redux';
import {Area, Name} from './styled';

// in test
// import the utility function X
// mock function X and put some dummy mock return

function UserCounter() {
  const dispatch = useDispatch()
  const [userRankList, setUserRankList] = useState([]);
  const mergersArray = useSelector(state => state.mergers);

  useEffect(() => {
    // in this file
    // if store has state.mergers filled, do not fetch again
    // you can put a flag to the store like; mergeFetching, mergeFetched
    // if mergeFetched, do not call this
    // if (!store.getState().mergers.mergeFetched) {
    dispatch(fetchClosedPRs())
    // }
    // in this file, TODO move to utils, and add single line of code here to call the utility function X
    mergersArray.forEach((mergers) => {
      let indexOf = userRankList.findIndex((x) => Object.keys(x)[0] === mergers.user.login);
      if (indexOf !== -1) {
        userRankList[indexOf][mergers.user.login] =  userRankList[indexOf][mergers.user.login] + 1;
      } else {
        let innerObj = {};
        innerObj[mergers.user.login] = (innerObj[mergers.user.login] || 0) + 1;
        userRankList.push(innerObj);
      }
    });
    setUserRankList(userRankList || [])
    console.log(userRankList);

  },[])

  return(
    <div>
      {userRankList.map((mergers, index) => {
        return (
          <div key={index}>
            <Area>
              <Name>
                <span>
                {Object.values(mergers) && Object.values(mergers)[0]}
                </span>
                <br></br>
                <div>
                  {Object.keys(mergers) && Object.keys(mergers)[0]}
                </div>
              </Name>
            </Area>
          </div>
        )
      })}
    </div>
  )
}
export default UserCounter;
