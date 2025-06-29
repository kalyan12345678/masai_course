import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [quote,setQuote]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]= useState(null)

  async function fetchQuote() {
 try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'LOUTa1QuZWCCmaNF4ZkPwA==1T75PI9qzOiIfJj6',
        },
      });
      if(!res.ok) throw new Error("faild to Fetch quote")
        const data = await res.json()
      setQuote(data[0])
      setError(null)
    } catch (error) {
      setError(error.message)
    }finally{
      setLoading(false)
    }

    
  };

  useEffect(()=>{
    fetchQuote();

    const intervalId = setInterval(()=>{
      fetchQuote();
    },30000)
      return()=> clearInterval(intervalId)
  },[])
  if(loading){
    return(
      <h1>🔃 Loading....</h1>
    )
  }
  if(error){
    return(
      <p>Error:{error}</p>
    )
  }
  return (
    <>
      <h1>Daily Quote viewer</h1>
      <div>

        <blockquote>"{quote.quote}"</blockquote>
        <p>----{quote.author}</p>
      </div>
    <button onClick={fetchQuote}>Get New Quote</button>
    </>
  )
}

export default App
