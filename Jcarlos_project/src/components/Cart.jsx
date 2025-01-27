import { useEffect } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaCircle, FaTrash } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

/* eslint-disable react/prop-types */
function Cart({ cartCount, cartItems, handleRemoveItem, isCartOpen, handleToggleCart }) {

  useEffect(() => {
    console.log('Updated cartCount:', cartCount);
  }, [cartCount]);

  
return (
  
  <div>
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
      <HiShoppingCart
        className="text-red-600 text-4xl cursor-pointer"
        onClick={handleToggleCart}
      />
    </div>

    
    {cartCount > 0 && (
      <div className="absolute top-11 right-9 transform -translate-y-1/2">
        <FaCircle className="text-orange-400 text-xs cursor-pointer" />
      </div>
    )}

    {isCartOpen &&
      <div className="fixed z-50 top-8 right-0 w-[300px] h-[435px] bg-secondary border-orange-400 border-2 border-r-0 rounded-lg rounded-r-none shadow-lg font-roboto text-white overflow-y-auto transition-all duration-300">
         
          {cartCount >= 1 ? (
            <div className="flex flex-col items-center rounded-lg text-left pt-7 pb-[105px] px-[25px]">
              <p className="text-[22px] font-bold mb-3">Meu carrinho</p>

              {cartItems.map((item, index) => (

                  <div key={index} className="flex p-1 rounded-lg text-left items-center justify-center mt-3 gap-[30px]">

                    <img src={`/public/${item.imagem}`} alt={item.nome} className="h-[65px] w-12  object-cover rounded-md"/>

                    <div className="flex-col justify-center items-center">
                      <p className="font-bold text-[13px]">{item.nome}</p>
                      <p className="font-bold text-[13px]">Ref: {item.id}</p>
                    </div>

                    <div className="flex flex-row items-center justify-center text-center">
                      <button
                        className="flex bg-orange-400 text-white rounded-lg w-9 h-9 text-lg font-bold items-center justify-center"
                        onClick={() => handleRemoveItem(index)}
                      ><FaTrash/>
                      </button>
                    </div>
                    
                  </div>

          ))}
          
              <div className="fixed flex items-center justify-center text-center h-[90px] mt-[313px] w-[299px] rounded-lg rounded-t-none bg-secondary border-t-[1px] border-white">
                <button className="bg-orange-400 w-60 h-10 rounded-lg text-lg font-bold  transition-all duration-300 ease-in-out" onClick={handleToggleCart}>
                Pedir meu orçamento
                </button>
              </div>
              

            </div>
          ) : (
            <div className="flex flex-col justify-center items-center text-center h-[300px] gap-12">
              <p className="text-[22px] font-bold">Seu carrinho está vazio...</p>
              <span className="text-9xl"><MdOutlineRemoveShoppingCart/></span>
              <button className="bg-orange-400 w-60 h-10 rounded-lg text-lg font-bold  transition-all duration-300 ease-in-out" onClick={handleToggleCart}>
                VOLTAR
              </button>
            </div>
          )}
      
        
      </div>
    }
  </div>
    
);
}

export default Cart;
