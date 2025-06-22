import {React,useState} from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState(0)
  const [from,setFrom]=useState('inr')
  const [to,setTo]=useState('usd')
  const currencies=useCurrencyInfo(from)
  const currencyOptions=Object.keys(currencies)
  const handlerSwap=()=>{
    setFrom(setTo)
    setTo(setFrom)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  return (
    <>
      <div className='flex'>
        <div className='h-screen w-[50vw]'>
          <img src="https://media.istockphoto.com/id/483424683/photo/euro-and-dollar-symbol-eur-usd-pair.jpg?s=612x612&w=0&k=20&c=sxpJ59whk1IQbv2O22UE0zYEmZ9zZA76-iJBsrsAa_I=" className='h-[100%]' />
        </div>
        <div className='w-[50vw] m-10 bg-black flex flex-col gap-8 justify-center items-center'>
          <h1 className='text-center font-bold text-4xl text-white'>Currency Converter</h1>
            <InputBox label="from" amount={amount} currencyOptions={currencyOptions} currCurrency={from} setAmount={setAmount} setCurrency={setFrom} disable={false} />
            <button type="button" className="text-white w-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handlerSwap}>Swap</button>
            <InputBox label="to" amount={convertedAmount} currencyOptions={currencyOptions} currCurrency={to} setAmount={setConvertedAmount} setCurrency={setTo} disable/>
            <button type="button" className="text-white w-21 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={()=> setConvertedAmount((currencies[to]*amount))}
            >Calculate</button>
        </div>
      </div>
    </>
  )
}

export default App
