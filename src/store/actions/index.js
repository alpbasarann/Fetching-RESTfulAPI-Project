import axios from 'axios';

export const fetchMergersRequest = () => {
    return{
        type:"FETCH_MERGERS_REQUEST"
    }
}
export const fetchMergersSuccess = (mergers) => {
    return{
        type:"FETCH_MERGERS_SUCCESS",
        payload: mergers
    }
}
export const fetchMergersFail = (error) => {
    return{
        type:"FETCH_MERGERS_FAIL",
        payload: error
    }
}

export const fetchClosedPRs = () => {
    return (dispatch) => {
        dispatch(fetchMergersRequest)
        axios.get("https://api.github.com/repos/facebook/react/pulls?state=closed")
            .then(response => {
                const mergers = response.data
                dispatch(fetchMergersSuccess(mergers))
            })
            dispatch(fetch)
            .catch (error => {
                dispatch(fetchMergersFail(error.message))
            })
    }
}
