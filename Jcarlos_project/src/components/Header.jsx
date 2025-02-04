import Cart from "./Cart";

function Header() {
  
  return (
    <div className="fixed w-full z-50 top-0 bg-white rounded-b-2xl px-7 py-6 border-b-[3px] border-secondary">
      <div className="flex justify-center">
        <img className="h-[85px]" src="./assets/logo.png" alt="Logo"/>
      </div>
      <Cart/>
    </div>
  );
}

export default Header;
