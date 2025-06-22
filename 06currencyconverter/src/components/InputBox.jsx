import { useId } from "react";
function InputBox({
    label,
    amount,
    currencyOptions=[],
    currCurrency,
    setAmount,
    setCurrency,
    disable
}) {
    const randomId=useId()
    return (
        <div className={` p-8 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={randomId}  className="text-white mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={randomId}
                    className="outline-none w-full bg-transparent text-white py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    disabled={disable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full text-white">Currency Type</p>
                <select
                    value={currCurrency}
                    onChange={(e)=> setCurrency(e.target.value)}
                    className="rounded-lg px-1 py-1 text-black bg-gray-100 cursor-pointer outline-none"
                    
                >
                    {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}>
                            {currency}
                        </option>
                        ))
                    }
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
