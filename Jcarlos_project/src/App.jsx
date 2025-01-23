import { useState, useEffect } from "react";
import { PiMapPinAreaFill } from "react-icons/pi";
import { HiShoppingCart } from "react-icons/hi";
import { FaAngleUp, FaPlus } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";


function App() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(true);
  const [showThird, setShowThird] = useState(true);
  const [estoque1, setEstoque1] = useState([]);
  const [estoque2, setEstoque2] = useState([]);
  const [estoque3, setEstoque3] = useState([]);

  const firstClick = () => {
    setShowFirst(false);
    setShowSecond(true);
    setShowThird(true);
  }

  const secondClick = () => {
    setShowFirst(true);
    setShowSecond(false);
    setShowThird(true);
  }

  const thirdClick = () => {
    setShowFirst(true);
    setShowSecond(true);
    setShowThird(false);;
  }

  useEffect(() => {
    const fetchCadeiras = async () => {
      try {
        const responseEstoque1 = await fetch("/estoque1.json");
        const responseEstoque2 = await fetch("/estoque2.json");
        const responseEstoque3 = await fetch("/estoque3.json");

        if (!responseEstoque1.ok || !responseEstoque2.ok || !responseEstoque3.ok) {
          throw new Error("Erro ao carregar os arquivos JSON");
        }

        const estoque1 = await responseEstoque1.json();
        const estoque2 = await responseEstoque2.json();
        const estoque3 = await responseEstoque3.json();

        setEstoque1(estoque1);
        setEstoque2(estoque2);
        setEstoque3(estoque3);

      } catch (error) {
        console.error("Erro ao carregar os JSON:", error);
      }
    };

    fetchCadeiras();
  }, []);
  

  return (

<div>

    <div className='relative bg-white rounded-b-3xl px-7 py-6'>
      <div className='flex justify-center'> 
        <img className='h-[85px]' src="../public/logo.png"/>
      </div>
      <span className="absolute top-1/2 right-10 transform -translate-y-1/2 text-secondary text-4xl"><HiShoppingCart/></span>
    </div>


    <div className='flex flex-col justify-center items-center'>

      {showFirst ? (
        <div className="relative mt-16 mx-3 cursor-pointer" onClick={firstClick}>
          <img className='h-40 mx-auto rounded-3xl' src="../public/bg_1.png"/>
          <img className='h-60 absolute -top-24 right-24 transform -translate-x-1/2' src="../public/cadeira_1.png"/>
        </div>

      ) : (

        <div className="relative mt-14 w-screen h-auto bg-white pt-7">

          <div className="flex items-center justify-center">

            <span className="absolute left-7 text-3xl text-secondary cursor-pointer" onClick={()=> setShowFirst(true)}><TbArrowBackUp /></span>
            <span className="mx-auto font-roboto font-bold text-secondary text-2xl">Mais Vendidos</span>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10">
            {estoque1.map((cadeira) => (
              <div key={cadeira.id} className="flex flex-col items-center">

                <img src={`/public/${cadeira.imagem}`} alt={cadeira.nome} className="h-52 object-cover rounded-lg"/>

                

                <button className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center">
                  <span className="text-white"><FaPlus/></span>
                </button>

              </div>

            ))}

          </div>

        </div>

      )}
      

      {showSecond ? (
        <div className="relative mt-16 mx-3 cursor-pointer" onClick={secondClick}>
          <img className='h-40 mx-auto rounded-3xl' src="../public/bg_2.png"/>
          <img className='h-56 absolute -top-16 right-[125px] transform -translate-x-1/2' src="../public/cadeira_2.png"/>
        </div>

      ) : (

        <div className="relative mt-14 w-screen h-auto bg-white pt-7">

          <div className="flex items-center justify-center">

            <span className="absolute left-7 text-3xl text-secondary cursor-pointer" onClick={()=> setShowSecond(true)}><TbArrowBackUp /></span>
            <span className="mx-auto font-roboto font-bold text-secondary text-2xl">Linha Presidente</span>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10">
            {estoque2.map((cadeira) => (
              <div key={cadeira.id} className="flex flex-col items-center">

                <img src={`/public/${cadeira.imagem}`} alt={cadeira.nome} className="h-52 object-cover rounded-lg"/>

                <button className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center">
                  <span className="text-white"><FaPlus/></span>
                </button>

              </div>

            ))}

          </div>

        </div>

      )}
      

      {showThird ? (
        <div className="relative mt-16 mx-3 corsor-pointer" onClick={thirdClick}>
          <img className='h-40 mx-auto rounded-3xl mb-16' src="../public/bg_3.png"/>
          <img className='h-56 absolute -top-20 right-[112px] transform -translate-x-1/2' src="../public/cadeira_4.png"/>
        </div>

      ) : (

        <div className="relative mt-14 w-screen h-auto bg-white pt-7 mb-16">

          <div className="flex items-center justify-center">

            <span className="absolute left-7 text-3xl text-secondary cursor-pointer" onClick={()=> setShowThird(true)}><TbArrowBackUp /></span>
            <span className="mx-auto font-roboto font-bold text-secondary text-2xl">Linha Executiva</span>

          </div>

          <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10">
            {estoque3.map((cadeira) => (
              <div key={cadeira.id} className="flex flex-col items-center">

                <img src={`/public/${cadeira.imagem}`} alt={cadeira.nome} className="h-52 object-cover rounded-lg"/>

                <button className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center">
                  <span className="text-white"><FaPlus/></span>
                </button>

              </div>

            ))}

          </div>

        </div>

      )}
      

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
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl h-10">Ir com Google Maps</a>
        <span className="text-white font-roboto italic m-3" >Ou</span>
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">Entrar em contato</a>
      </div>

      <div className="mx-5">
        <img className="rounded-t-2xl" src="../public/loja_caruaru.jpg" alt="" />
      </div>

      <div className="flex flex-col justify-center items-center text-center rounded-b-2xl mb-16 mx-5 bg-secondary h-[340px] w-auto">
        <p className="text-white mb-4 font-roboto mx-4 text-2xl font-bold">Caruaru</p>
        <p className="text-white mb-6 font-roboto mx-4 text-base">Av. Agamenon Magalhães, 1678<br/>Maurício de Nassau, 55014-000</p>
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">Ir com Google Maps</a>
        <span className="text-white font-roboto italic m-3" >Ou</span>
        <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">Entrar em contato</a>
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
