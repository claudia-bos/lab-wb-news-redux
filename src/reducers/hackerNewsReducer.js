import axios from "axios";

//Action types
const PENDING = 'PENDING';
const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

//Creating my intial state

const initialState = {
    loading: false,
    articles: []
};

// Creating a simple reducer function

const hackerNewsReducer = (state = initialState, action) => {

    //creating two action types called PENDING and REQUEST_ARTICLES
    //Setting loading to true or false indicate when data is being requested and when the request is complete.
    //Updating articles with the data from action.payload 
    //ensures that the state always has the latest requested articles, ready to be displayed to the user.

    switch (action.type){
        case PENDING:
            return {
                ...state,
                loading: true
            }

        case REQUEST_ARTICLES:
            return {
                ...state,
                loading: false,
                articles: action.payload
            }
    
        default:
             return state

   }
};

export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})
    let articles = await axios.get('/api/hacker-news').then(res => res.data);

    dispatch({ 
        type: REQUEST_ARTICLES,
        payload: articles
    })

}



//exporting the reducer as the default export
export default hackerNewsReducer;