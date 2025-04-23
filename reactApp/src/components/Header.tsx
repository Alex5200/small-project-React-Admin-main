import { useEffect, useState } from "react"

export default function Header(){
  const[stateHamburger, setHamburger] = useState(false)
  useEffect(() =>{
    if(window.innerWidth > 3000){
      setHamburger(true)
    }
  },[window.innerWidth])
  setInterval(() =>{  // Перестраховываюсь 
    if(window.innerWidth > 1300){
      setHamburger(true)
    }
  }, 1000)
return(
    <header>
      <div className=" flex justify-center text-center max-xl:mx-28">
        <a href="./index.html" className="py-10 xl:w-1/4 max-xl:w-2/4">
          <img src="./src/img/icon/logotype.svg" />
        </a>
        <div className="xl:w-2/4 max-xl:w-2/4 max-xl:flex max-xl:flex-col max-xl:items-center max-xl:justify-items-center">
            <button  className="w-6 xl:hidden py-10 max-xl:content-end max-xl:flex-right max-xl:flex-wrap" onClick={() => {setHamburger(!stateHamburger)}}>
              <img className="w-6 xl:hidden" src="/src/img/hamburger.png"/>
            </button>
            {(stateHamburger)?
          <nav className="flex max-xl:flex-col max-xl:items-center  max-xl:w-full  xl:py-10 md:w-full">
            <a className="w-[20%] text-[#353A5A] way text-center max-xl:mb-5">О нас</a>
            <a className="w-[20%] text-[#353A5A] way text-center max-xl:mb-5">Платформа</a>
            <a className="w-[20%] text-[#353A5A] way text-center max-xl:mb-5" href="./curse.html ">
              Курсы
            </a>
            <a className="w-[20%] text-[#353A5A] way text-center max-xl:mb-5">Лекции</a>
            <a className="w-[20%] text-[#353A5A] way text-center max-xl:mb-5">Тарифы</a>
            <a className="w-[20%] text-[#353A5A] way text-center max-xl:mb-5">Блог</a>
            <a className="w-[20%] text-[#353A5A] way text-center">Контакты</a>
          </nav>
          : null}
        </div>

      </div>
      <div className="flex xl:ml-44 max-xl:ml-28">
        <div className="text-[#353A5A]">
          <button>Главная </button>
        </div>
        <div className="mt-2 mx-4">
          <img src="./src/img/icon/right.svg" />
        </div>
        <div className="text-[#fffff]">
          <button>Курсы </button>
        </div>
      </div>
    </header>
)
}