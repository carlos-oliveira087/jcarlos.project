import { PiMapPinAreaFill } from "react-icons/pi";
import { FaAngleUp } from "react-icons/fa";


function Location() {


  return (

    <div className="flex justify-center items-center text-center bg-white rounded-t-3xl">

      <div>
        <div className="flex items-center justify-center text-secondary gap-3 mb-10">
          <h1 className="flex text-2xl font-roboto font-semibold mt-10">Onde estamos localizados</h1>
          <span className="text-3xl mt-10"><PiMapPinAreaFill /></span>
        </div>

        <div className="mx-5 max-w-[900px]">
          <img className="rounded-t-2xl" src="./assets/loja_recife.jpg"/>
        </div>

        <div className="flex flex-col justify-center items-center text-center rounded-b-2xl mb-12 mx-5 bg-secondary h-[340px] w-auto max-w-[900px]">
          <p className="text-white mb-4 font-roboto mx-4 text-2xl font-bold">Recife</p>
          <p className="text-white mb-6 font-roboto mx-4 text-base">
            Av. Eng. Domingos Ferreira, 1183<br />Boa Viagem, 51011-051
          </p>
          <a href="https://maps.app.goo.gl/jzyCbyggAsw7pd6M7" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl h-10">
            Ir com Google Maps
          </a>
          <span className="text-white font-roboto italic m-3">Ou</span>
          <a href="tel:+558133274262" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">
            Entrar em contato
          </a>
        </div>

        <div className="mx-5 max-w-[900px]">
          <img className="rounded-t-2xl" src="./assets/loja_caruaru.jpg" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center text-center rounded-b-2xl mb-16 mx-5 bg-secondary h-[340px] w-auto max-w-[900px]">
          <p className="text-white mb-4 font-roboto mx-4 text-2xl font-bold">Caruaru</p>
          <p className="text-white mb-6 font-roboto mx-4 text-base">
            Av. Agamenon Magalhães, 1678<br />Maurício de Nassau, 55014-000
          </p>
          <a href="https://maps.app.goo.gl/EfMoAD2Ys1CQtpQb6" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">
            Ir com Google Maps
          </a>
          <span className="text-white font-roboto italic m-3">Ou</span>
          <a href="tel:+558137212117" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl">
            Entrar em contato
          </a>
        </div>

        <div>
          <div className="flex flex-col text-secondary items-center text-center justify-center mb-16 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl"><FaAngleUp /></span>
            <span className="text-lg font-semibold font-roboto">Voltar ao topo</span>
          </div>
          <div className="flex justify-center items-center bg-secondary text-white mx-[55px] h-[37px] rounded-t-xl">
            <span className="text-sm font-normal font-roboto">Created by Carlos Oliveira</span>
          </div>

        </div>

      </div>

    </div> 
  );
}

export default Location;

