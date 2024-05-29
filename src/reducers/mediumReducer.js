import axios from "axios";

//action types
const PENDING = 'PENDING';
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';


// basic initial state and function creation

const initialState =  {
    loading: true,
    articles: []
};

const mediumReducer = (state = initialState, action) => {

    switch (action.type) {
        case PENDING:
            return {
                ...state,
                loading: true
            };
        
        case REQUEST_ARTICLES: 
            return {
                ...state,
                loading: false,
                articles: action.payload
            };

        default:
             return state
    }
    
};


export const requestArticles = async (dispatch) => {
    dispatch({type: 'PENDING'})
    let articles = await axios.get('/api/medium').then(res => res.data);
  dispatch({ type: REQUEST_ARTICLES, payload: articles })
}

export default mediumReducer;
