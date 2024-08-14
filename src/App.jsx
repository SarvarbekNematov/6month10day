import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState([])
  
  useEffect(() => {
    setIsLoading(true)
     fetch('https://api.escuelajs.co/api/v1/products').then((res) => res.json()).then((data) => {
      setTimeout(() => {
        setIsLoading(false) 
        setCount(data);
      },500)
    })
  },[]) 

  return (
    <>
    <div className="container p-[20px]">
      <ul className='grid grid-cols-2 items-center gap-[20px] justify-between'>
      {
        isLoading ? "Loading..." :
      count.length && count.map((item) => (  
        
        <li key={item.id} className='flex gap-[10px]'>
            {
            item.id < 50 ? <img className='w-[200px]'  src={item.images[0]} alt="img" /> : null
            }
          <div>
           <strong className='text-[23px]'>{item.title}</strong>
            <div className='flex items-center gap-[30px] mt-[15px]'>
                <p className='text-bold text-[22px] text-red-500'>{item.price} $</p>
                <button className='w-[100px] h-[30px] border-[1px] border-green-500 rounded-[13px] text-green-500 text-bold'>Buy</button>
            </div>
           <p>{item.description}</p>
          </div>
           </li>
      ))}
    </ul>
    </div>
    
      
    </>
  )
}

export default App
