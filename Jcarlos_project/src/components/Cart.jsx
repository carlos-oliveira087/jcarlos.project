import { HiShoppingCart } from "react-icons/hi";
import { FaCircle, FaTrash } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

/* eslint-disable react/prop-types */
function Cart({ cartCount, cartItems, handleRemoveItem, isCartOpen, handleToggleCart }) {

  const generateCartMessage = () => {
    if (cartItems.length === 0) return 'Meu carrinho está vazio';
  
    let message = '*Olá! Gostaria de saber mais informações sobre o seguintes itens:*\n\n';
    
    cartItems.forEach((item) => {
      message += `Nome: ${item.nome}\n Ref: ${item.id}\n\n Que vi no site de vocês.`;
    });
  
    return message;
  };
  
  const handleOpenWhatsApp = () => {
    const message = generateCartMessage();
    const encodedMessage = message;
    const phoneNumber = '5583998081114';
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(url, '_blank');
  };
  
  

  
return (
  
  <div>
    <div className="absolute top-[68px] right-10 transform -translate-y-1/2">
      <HiShoppingCart
        className="text-secondary text-4xl cursor-pointer"
        onClick={handleToggleCart}
      />
    </div>

    
    {cartCount > 0 && (
      <div className="absolute top-11 right-9 transform -translate-y-1/2">
        <FaCircle className="text-orange-400 text-xs cursor-pointer" />
      </div>
    )}

    {isCartOpen &&
      <div className="fixed z-50 top-8 right-0 w-[301px] h-[435px] bg-secondary border-orange-400 border-2 border-r-0 rounded-lg rounded-r-none shadow-lg font-roboto text-white  overflow-y-scroll scrollbar-hide transition-all duration-300 px-10">
         
          {cartCount >= 1 ? (
            <div className="flex flex-col items-center rounded-lg text-left pb-[108px]">
              
              <div className="fixed top-[33px] flex items-center justify-center text-center h-16 w-[299px] rounded-lg rounded-b-none bg-secondary border-b-[1px] border-orange-400">
                <p className="text-[22px] font-bold">Meu carrinho</p>
              </div>
              

              <div className="mt-[62px]">
                {cartItems.map((item, index) => (

                  <div key={index} className="flex rounded-lg text-left items-center mt-5" >

                    <img src={`./assets/${item.imagem}`} alt={item.nome} className="h-[65px] w-12  object-cover rounded-md"/>

                    <div className="flex-col justify-center mx-4 mr-auto">
                      <p className="font-bold text-[13px] whitespace-nowrap">{item.nome}</p>
                      <p className="font-bold text-[13px] whitespace-nowrap">Ref: {item.id}</p>
                    </div>

                    <div className="flex justify-end w-24">
                      <button
                        className="flex bg-orange-400 text-white rounded-lg w-9 h-7 text-[16px] font-bold items-center justify-center"
                        onClick={() => handleRemoveItem(index)}
                      ><FaTrash/>
                      </button>
                    </div>
                    
                  </div>

                ))}
              </div>
              
          
              <div className="fixed flex items-center justify-center text-center h-[90px] mt-[342px] w-[299px] rounded-lg rounded-t-none bg-secondary border-t-[1px] border-orange-400">
                <button className="bg-orange-400 w-60 h-10 rounded-lg text-lg font-bold  transition-all duration-300 ease-in-out" onClick={handleOpenWhatsApp}>
                Pedir meu orçamento
                </button>
              </div>
              

            </div>
          ) : (
            <div className="flex flex-col justify-center items-center text-center h-auto gap-12 mt-14">
              <p className="text-[22px] font-bold whitespace-nowrap">Seu carrinho está vazio...</p>
              <span className="text-[125px]"><MdOutlineRemoveShoppingCart/></span>
              <button className="bg-orange-400 w-60 h-10 rounded-lg text-lg font-bold" onClick={handleToggleCart}>
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
