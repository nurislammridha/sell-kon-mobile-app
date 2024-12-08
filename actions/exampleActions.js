// actions/exampleActions.js
export const fetchData = () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST' });
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
        }
    };
};
