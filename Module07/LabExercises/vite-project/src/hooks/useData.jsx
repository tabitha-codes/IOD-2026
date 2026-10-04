import { useReducer, useEffect } from "react";

const initialState = { loading: true, data: null, error: '' };

// every possible state change, in one place
function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_START':
            return { loading: true, data: null, error: '' };
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: '' };
        case 'FETCH_ERROR':
            return { loading: false, data: null, error: action.payload };
        default:
            return state;
    }
}

export function useData(url) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (!url) return;

        let ignore = false;
        dispatch({ type: 'FETCH_START' });

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Request failed (${response.status})`);
                return response.json();
            })
            .then(json => { if (!ignore) dispatch({ type: 'FETCH_SUCCESS', payload: json }); })
            .catch(err => { if (!ignore) dispatch({ type: 'FETCH_ERROR', payload: err.message }); });

        return () => { ignore = true; };
    }, [url]);

    return state; // { loading, data, error }
}




// import { useState, useEffect } from "react";

// // Generic hook: fetches JSON from any URL and re-fetches when the URL changes
// export function useData(url) {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         if (!url) return; // nothing to fetch yet

//         let ignore = false;
//         setData(null);
//         setError('');

//         fetch(url)
//             .then(response => {
//                 if (!response.ok) throw new Error(`Request failed (${response.status})`);
//                 return response.json();
//             })
//             .then(json => { if (!ignore) setData(json); })
//             .catch(err => { if (!ignore) setError(err.message); });

//         return () => { ignore = true; }; // discard stale responses
//     }, [url]);

//     const loading = !data && !error;
//     return { data, loading, error };
// }