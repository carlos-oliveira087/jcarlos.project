import Cart from "./Cart";

function Header() {
  return (
    <div className="relative bg-white rounded-b-3xl px-7 py-6">
      <div className="flex justify-center">
        <img className="h-[85px]" src="./assets/logo.png" alt="Logo"/>
      </div>
      <Cart/>
    </div>
  );
}

export default Header;
