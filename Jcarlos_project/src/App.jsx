import './App.css'

function App() {
  return (
<div>

    <div className='flex bg-white justify-center'>
      <div className='flex center mx-7 my-6 items-center gap-12 bg-white justify-center'> 
        <h1 className='text-3xl text-secondary font-roboto font-bold text-'>Catálogo</h1>
        <img className='h-[75px]' src="../public/logo.png"/>
      </div>
    </div>

    <div className='flex flex-col justify-center items-center'>

      <div>
        <img className='h-40 justify-center items-center mt-10 rounded-2xl' src="../public/mais_vendidos.png"/>
      </div>

      <div>
        <img className='h-40 justify-center items-center mt-7 rounded-2xl' src="../public/linha_presidente.png"/>
      </div>

      <div>
        <img className='h-40 justify-center items-center mt-7 rounded-2xl' src="../public/linha_executiva.png"/>
      </div>

      <div>
        <img className='h-40 justify-center items-center mt-7 mb-10 rounded-2xl' src="../public/linha_diretor.png"/>
      </div>

    </div>

</div>

  );
}




export default App
