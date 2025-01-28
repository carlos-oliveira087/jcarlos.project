import { useState, useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { FaPlus, FaCheck } from "react-icons/fa";
import Cart from "./Cart";

function Items() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(true);
  const [showThird, setShowThird] = useState(true);
  const [estoque1, setEstoque1] = useState([]);
  const [estoque2, setEstoque2] = useState([]);
  const [estoque3, setEstoque3] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const firstClick = () => {
    setShowFirst(false);
    setShowSecond(true);
    setShowThird(true);
  };

  const secondClick = () => {
    setShowFirst(true);
    setShowSecond(false);
    setShowThird(true);
  };

  const thirdClick = () => {
    setShowFirst(true);
    setShowSecond(true);
    setShowThird(false);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((cartItem) => cartItem.id === item.id);
      if (exists) return prevItems;
      return [...prevItems, item];
    });  
};

  const isItemInCart = (item) => {
    return cartItems.some((cartItem) => cartItem.id === item.id);
  };

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const handleRemoveItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };
  
  useEffect(() => {
    const fetchCadeiras = async () => {
      try {
        const responseEstoque1 = await fetch("./assets/estoque1.json");
        const responseEstoque2 = await fetch("./assets/estoque2.json");
        const responseEstoque3 = await fetch("./assets/estoque3.json");

        if (
          !responseEstoque1.ok ||
          !responseEstoque2.ok ||
          !responseEstoque3.ok
        ) {
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
      <Cart isCartOpen={isCartOpen} cartCount={cartItems.length} cartItems={cartItems} handleRemoveItem={handleRemoveItem} handleToggleCart={handleToggleCart} />

      <div className="flex flex-col justify-center items-center">
        {showFirst ? (
          <div className="relative mt-16 mx-3 cursor-pointer" onClick={firstClick}>
            <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_1.png" />
            <img
              className="h-60 absolute -top-24 right-24 transform -translate-x-1/2"
              src="./assets/cadeira_1.png"
            />
          </div>
        ) : (
          <div className="relative mt-14 w-screen h-auto bg-white pt-7">
            <div className="flex items-center justify-center">
              <span
                className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary"
                onClick={() => setShowFirst(true)}
              >
                <MdKeyboardBackspace />
              </span>
              <span className="mx-auto font-roboto font-bold text-secondary text-2xl">
                Mais Vendidos
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10">
              {estoque1.map((cadeira) => (
                <div key={cadeira.id} className="flex flex-col items-center">
                  <img
                    src={`./assets/${cadeira.imagem}`}
                    alt={cadeira.nome}
                    className="h-52 object-cover rounded-lg"
                  />
                  <button
                    className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center"
                    onClick={() => addToCart(cadeira)}
                  >
                    <span className="text-white cursor-pointer">
                      {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {showSecond ? (
          <div className="relative mt-16 mx-3 cursor-pointer" onClick={secondClick}>
            <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_2.png" />
            <img
              className="h-56 absolute -top-16 right-[125px] transform -translate-x-1/2"
              src="./assets/cadeira_2.png"
            />
          </div>
        ) : (
          <div className="relative mt-14 w-screen h-auto bg-white pt-7">
            <div className="flex items-center justify-center">
              <span
                className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary"
                onClick={() => setShowSecond(true)}
              >
                <MdKeyboardBackspace />
              </span>
              <span className="mx-auto font-roboto font-bold text-secondary text-2xl">
                Linha Presidente
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10">
              {estoque2.map((cadeira) => (
                <div key={cadeira.id} className="flex flex-col items-center">
                  <img
                    src={`./assets/${cadeira.imagem}`}
                    alt={cadeira.nome}
                    className="h-52 object-cover rounded-lg"
                  />
                  <button
                    className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center"
                    onClick={() => addToCart(cadeira)}
                  >
                    <span className="text-white cursor-pointer">
                      {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {showThird ? (
          <div className="relative mt-16 mx-3 cursor-pointer" onClick={thirdClick}>
            <img className="h-40 mx-auto rounded-3xl mb-16" src="./assets/bg_3.png" />
            <img
              className="h-56 absolute -top-20 right-[112px] transform -translate-x-1/2"
              src="./assets/cadeira_4.png"
            />
          </div>
        ) : (
          <div className="relative mt-14 w-screen h-auto bg-white pt-7 mb-16">
            <div className="flex items-center justify-center">
              <span
                className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary"
                onClick={() => setShowThird(true)}
              >
                <MdKeyboardBackspace />
              </span>
              <span className="mx-auto font-roboto font-bold text-secondary text-2xl">
                Linha Executiva
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10">
              {estoque3.map((cadeira) => (
                <div key={cadeira.id} className="flex flex-col items-center">
                  <img
                    src={`./assets/${cadeira.imagem}`}
                    alt={cadeira.nome}
                    className="h-52 object-cover rounded-lg"
                  />
                  <button
                    className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center"
                    onClick={() => addToCart(cadeira)}
                  >
                    <span className="text-white cursor-pointer">
                      {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Items;
