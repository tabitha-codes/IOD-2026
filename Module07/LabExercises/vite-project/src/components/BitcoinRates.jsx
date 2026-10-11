// ==== Exercise 03 ====
import { useState } from "react";
import { useData } from "../hooks/useData";
import { useMoodContext } from "../context/MoodContext"; // NEW

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const { emoji, moodLabel } = useMoodContext(); // NEW

    const { data, loading, error } = useData(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    );

    const price = data?.bitcoin?.[currency.toLowerCase()];
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <h3>
                Bitcoin Exchange Rate{' '}
                <span role="img" aria-label={moodLabel}>{emoji}</span> {/* NEW */}
            </h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>
                {loading ? 'Loading...'
                    : error ? `Error: ${error}`
                    : price !== undefined
                        ? `1 BTC = ${price.toLocaleString(undefined, { style: 'currency', currency })}`
                        : 'Price not available'}
            </p>
        </div>
    );
}

export default BitcoinRates;

// ==== Exercise 02 ====
// import { useState } from "react";
// import { useData } from "../hooks/useData";

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {
//     const [currency, setCurrency] = useState(currencies[0]);

// the hook handles fetching, loading, errors, and cleanup
//     const { data, loading, error } = useData(
//         `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
//     );

//     const price = data?.bitcoin?.[currency.toLowerCase()];
//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//             <p>
//                 {loading ? 'Loading...'
//                     : error ? `Error: ${error}`
//                     : price !== undefined
//                         ? `1 BTC = ${price.toLocaleString(undefined, { style: 'currency', currency })}`
//                         : 'Price not available'}
//             </p>
//         </div>
//     );
// }

// export default BitcoinRates;

// ==== Exercise 01 ====
// import { useState, useEffect } from "react";

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {
//     const [currency, setCurrency] = useState(currencies[0]);
//     const [price, setPrice] = useState(null);   // the fetched price
//     const [error, setError] = useState('');     // any fetch error message

//     useEffect(() => {
//         let ignore = false; // flag for discarding stale results

//         setPrice(null);  // clear the old price so it isn't shown under the wrong currency
//         setError('');

//         fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
//             .then(response => {
//                 if (!response.ok) throw new Error(`Request failed (${response.status})`);
//                 return response.json();
//             })
//             .then(json => {
// the API's response looks like: { bitcoin: { usd: 64000 } }
//                 if (!ignore) setPrice(json.bitcoin[currency.toLowerCase()]);
//             })
//             .catch(err => {
//                 if (!ignore) setError(err.message);
//             });

// cleanup: runs before the next effect (when currency changes) or on unmount
//         return () => {
//             ignore = true;
//         };
//     }, [currency]); // re-run whenever the selected currency changes

//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//             <p>
//                 {error ? `Error: ${error}`
//                     : price === null ? 'Loading...'
//                     : `1 BTC = ${price.toLocaleString(undefined, { style: 'currency', currency })}`}
//             </p>
//         </div>
//     );
// }

// export default BitcoinRates;

// Original Code:
// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {
// const [currency, setCurrency] = useState(currencies[0]);
// fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
// const options = currencies.map(curr => <option value={curr}
// key={curr}>{curr}</option>);
// return (
// <div className="BitcoinRates componentBox">
// <h3>Bitcoin Exchange Rate</h3>
// <label>Choose currency:
// <select value={currency} onChange={e =>
// setCurrency(e.target.value)}>
// {options}
// </select>
// </label>
// </div>
// )
// }

// export default BitcoinRates;