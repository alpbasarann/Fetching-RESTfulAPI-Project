const initialState = {
  loading: true,
  mergers: [],
  error: ''
};

const mergedPRs = (state= initialState, action) => {
    switch (action.type) {
        case "FETCH_MERGERS_REQUEST":
          return {
            ...state,
            loading: true
          }
        case "FETCH_MERGERS_SUCCESS":
          return {
            loading: false,
            mergers: action.payload,
            error: ''
          }
        case "FETCH_MERGERS_FAILURE":
          return {
            loading: false,
            mergers: [],
            error: action.payload
          }
        default: return state
      }
    }

export default mergedPRs
