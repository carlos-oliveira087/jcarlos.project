import Cart from "./Cart";

function Header() {
  
  return (
    <div className="fixed w-full z-50 top-0 bg-white rounded-b-2xl px-7 py-6 border-[2px] border-t-0 border-secondary">
      <div className="flex justify-center">
        <img className="h-[85px] cursor-pointer" src="./assets/logo.png" alt="Logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
      </div>
      <Cart/>
    </div>
  );
}

export default Header;
