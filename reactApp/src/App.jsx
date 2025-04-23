import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Filters from './img/filter.png'
import FilterDropdown from './components/FilterDropdown'

function App() {
  const [data, setData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [stateSort, setStateSort] = useState("по умолчанию")
  const [stateFilter, setFilter] = useState(false)
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:4000/posters"
      );
      const parsed = await response.json();
      setData(parsed);
  
    })();
  }, []);
  
  function Filter(){
    return(
      <div className=' flex border-y-2 border-[#FA9F42]  rounded-sm mx-36 max-xl:mx-20 p-5 h-208 justify-between mt-16 max-xl:text-xs '>
        <div className=' px-4 flex flex-col items-center	 max:border-x-2 hover:border-[#FA9F42] rounded-sm'>
          <div className='flex items-center my-auto	'>
            <button className='flex h-[25px] my-auto' onClick={() => {setFilter(!stateFilter)}} >Фильтр 
            <img className='w-[25px] h-[25px] my-auto ml-4' src={Filters}/></button>
          </div>
          <div>
            {(stateFilter) ? <FilterDropdown datas={data}/> : null}
          </div>
        
        </div>
        <div className=' px-8 max:border-x-2  rounded-sm my-auto flex max-xl:flex-col max-xl:justify-center'>
          <p className='mx-auto upercase my-2 xl:mr-2 p-2 '>Сортировка</p>
          <select id="sort" name="sort" value={stateSort} onChange={(value) => {setStateSort(event.target.value)}} onClick={(value) => {setStateSort(event.target.value)}} className='my-2 border-y-2 hover:border-[#FA9F42] rounded-sm  p-2 focus:outline-none'>
            <option value="по умолчанию">по умолчанию</option>
            <option value="цена по возростанию">цена по возростанию</option>
            <option value="по убыванию">цена по убыванию</option>
          </select>
        </div>
        <div className='max:border-x-2 hover:border-[#FA9F42] rounded-sm '>
          <div className='flex justify-between py-2 px-2'>
          <p className=''>От</p>
          <p className=''>Цена</p>
          <p className=''>До</p>

          </div>
          <div className='mx-4'> 
            <input onChangeCapture={(event) => setMinPrice(event.target.value)} value={minPrice} placeholder='от 0' className='focus:outline-none border-y-2 hover:border-[#FA9F42] rounded-sm  p-2' defaultValue={0}/>
            <input onChange={(event) => {
              if(event.target.value == "" || event.target.value == 0){
                setMaxPrice(1000)
              }else{
                setMaxPrice(event.target.value)
              }}
            } value={maxPrice}  placeholder=' до 1000' className='border-y-2 focus:outline-none hover:border-[#FA9F42] rounded-sm p-2' defaultValue={1000}/>
          </div>
        </div>
      </div>
    )
  }
  useEffect(() =>{
    const cloneData = data
    if(stateSort == "цена по возростанию"){
      for(let i = 0;  i <=50; i++){ 
        cloneData.sort(function(obj1, obj2) {
          // Сортировка по возрастанию
          return Number(obj2.sales)-Number(obj1.sales);
        })
      }
        console.log("по возрастанию2")
    }else if (stateSort == "по убыванию"){
      for(let i = 0;  i <=50; i++){ 
        cloneData.sort(function(obj1, obj2) {
          // Сортировка по возрастанию
          return Number(obj1.sales)- Number(obj2.sales);
        });
        console.log("по убыванию2")
      }
    }else{
      cloneData.sort(function(a, b) {
        return Math.random() - 0.5
    });
    }
    console.log(stateSort)
    
    setData(cloneData)
  },[stateSort])
  const Lists = data.map((e) =>{
    if( e.sales >= minPrice && e.sales <= maxPrice){
      return(
      <div className=' w-8/12 border border-[#FA9F42]  rounded p-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110' key={Date.now() + e.title}>
        <p className='text-xl text-center mb-2' >
          {e.title}
        </p>
        <img className='' loading='lazy' src={e.image}/>
        <p className='text-lg my-2'> {e.description}</p>
        <div className='flex justify-between  w-2/2 py-4 mx-6'>
          <p className='text-xl  uppercase'>
            цена 
          </p>
          <p>
            <strong className='line-through'> {e.price}$</strong>
            <strong >  {e.sales}$</strong>
          </p>
        </div>
      <button className=' border rounded p-2 w-full  uppercase hover:bg-[#FA9F42] hover:text-white	hover:shadow-lg hover:shadow-[#FA9F42] hover:border-[#FA9F42] transition ease-in-out duration-0 hover:duration-300'> изучить </button>
      </div>)
    }
  })


  return (
    <>
      <Header/>
      {Filter()}
      <div className=' grid max-md:grid-cols-1 max-xl:grid-cols-2 grid-cols-3 ap-x-10 gap-y-14 mx-20  justify-items-center py-20 px-0 ' >
      {Lists}
      </div>
    </>
  )
}

export default App
