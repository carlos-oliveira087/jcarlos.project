import { PiMapPinAreaFill } from "react-icons/pi";
import { HiShoppingCart } from "react-icons/hi";
import { FaAngleUp } from "react-icons/fa";


function App() {
  return (

<div>

    <div className='relative bg-white rounded-b-3xl px-7 py-6'>
      <div className='flex justify-center'> 
        <img className='h-[85px]' src="../public/logo.png"/>
      </div>
      <span className="absolute top-1/2 right-10 transform -translate-y-1/2 text-secondary text-4xl"><HiShoppingCart/></span>
    </div>

    <div className='flex flex-col justify-center items-center'>
      <div className="relative mt-16 mx-3">
        <img className='h-40 mx-auto rounded-3xl' src="../public/bg_1.png"/>
        <img className='h-60 absolute -top-24 right-24 transform -translate-x-1/2' src="../public/cadeira_1.png"/>
      </div>

      <div className="relative mt-16 mx-3">
        <img className='h-40 mx-auto rounded-3xl' src="../public/bg_2.png"/>
        <img className='h-56 absolute -top-16 right-[125px] transform -translate-x-1/2' src="../public/cadeira_2.png"/>
      </div>


      <div className="relative mt-16 mx-3">
        <img className='h-40 mx-auto rounded-3xl mb-16' src="../public/bg_3.png"/>
        <img className='h-56 absolute -top-20 right-[112px] transform -translate-x-1/2' src="../public/cadeira_4.png"/>
      </div>

    </div>
    
    <div className='bg-white pb-7 rounded-t-3xl'>
      <div className='flex items-center justify-center text-secondary gap-3 mb-10'>
        <h1 className='flex text-2xl font-roboto font-semibold mt-10'>Onde estamos localizados</h1>
        <span className='text-3xl mt-10'><PiMapPinAreaFill/></span>
      </div>
      
      <div className="mx-5">
        <img className="rounded-t-2xl" src="../public/loja_recife.jpg" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center text-center rounded-b-2xl mb-12 mx-5 bg-secondary h-[340px] w-auto">
        <p className="text-white mb-4 font-roboto mx-4 text-2xl font-bold">Recife</p>
        <p className="text-white mb-6 font-roboto mx-4 text-base">Av. Eng. Domingos Ferreira, 1183<br/>Boa Viagem, 51011-051</p>
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" target="_blank" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl h-10">Ir com Google Maps</a>
        <span className="text-white font-roboto italic m-3" >Ou</span>
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" target="_blank" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">Entrar em contato</a>
      </div>

      <div className="mx-5">
        <img className="rounded-t-2xl" src="../public/loja_caruaru.jpg" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center text-center rounded-b-2xl mb-16 mx-5 bg-secondary h-[340px] w-auto">
        <p className="text-white mb-4 font-roboto mx-4 text-2xl font-bold">Caruaru</p>
        <p className="text-white mb-6 font-roboto mx-4 text-base">Av. Agamenon Magalhães, 1678<br/>Maurício de Nassau, 55014-000</p>
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" target="_blank" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">Ir com Google Maps</a>
        <span className="text-white font-roboto italic m-3" >Ou</span>
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" target="_blank" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">Entrar em contato</a>
      </div>

      <div className="flex flex-col text-secondary items-center text-center justify-center mb-10 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="text-2xl"><FaAngleUp/></span>
        <span className="text-lg font-semibold font-roboto">Voltar ao topo</span>
      </div>
    </div>

</div>

  );
}




export default App
