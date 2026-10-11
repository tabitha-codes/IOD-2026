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