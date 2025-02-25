import { useState, useEffect } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { FaPlus, FaCheck } from "react-icons/fa";
import Cart from "./Cart";

function Items() {
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(true);
  const [showThird, setShowThird] = useState(true);
  const [showForth, setShowForth] = useState(true);
  const [showFifth, setShowFifth] = useState(true);
  const [showSixth, setShowSixth] = useState(true);
  const [estoque1, setEstoque1] = useState([]);
  const [estoque2, setEstoque2] = useState([]);
  const [estoque3, setEstoque3] = useState([]);
  const [estoque4, setEstoque4] = useState([]);
  const [estoque5, setEstoque5] = useState([]);
  const [estoque6, setEstoque6] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const firstClick = () => {
    setShowFirst(false);
    setShowSecond(true);
    setShowThird(true);
    setShowForth(true);
    setShowFifth(true);
    setShowSixth(true);
  };

  const secondClick = () => {
    setShowFirst(true);
    setShowSecond(false);
    setShowThird(true);
    setShowForth(true);
    setShowFifth(true);
    setShowSixth(true);
  };

  const thirdClick = () => {
    setShowFirst(true);
    setShowSecond(true);
    setShowThird(false);
    setShowForth(true);
    setShowFifth(true);
    setShowSixth(true);
  };

  const forthClick = () => {
    setShowFirst(true);
    setShowSecond(true);
    setShowThird(true);
    setShowForth(false);
    setShowFifth(true);
    setShowSixth(true);
  };

  const fifthClick = () => {
    setShowFirst(true);
    setShowSecond(true);
    setShowThird(true);
    setShowForth(true);
    setShowFifth(false);
    setShowSixth(true);
  };

  const sixthClick = () => {
    setShowFirst(true);
    setShowSecond(true);
    setShowThird(true);
    setShowForth(true);
    setShowFifth(true);
    setShowSixth(false);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const exists = prevItems.some((cartItem) => cartItem.id === item.id);

      if (prevItems.length === 0) {
        (setIsCartOpen(true))
      }

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
        const responseEstoque4 = await fetch("./assets/estoque4.json");
        const responseEstoque5 = await fetch("./assets/estoque5.json");
        const responseEstoque6 = await fetch("./assets/estoque6.json");

        if (
          !responseEstoque1.ok ||
          !responseEstoque2.ok ||
          !responseEstoque3.ok ||
          !responseEstoque4.ok ||
          !responseEstoque5.ok ||
          !responseEstoque6.ok
        ) {
          throw new Error("Erro ao carregar os arquivos JSON");
        }

        const estoque1 = await responseEstoque1.json();
        const estoque2 = await responseEstoque2.json();
        const estoque3 = await responseEstoque3.json();
        const estoque4 = await responseEstoque4.json();
        const estoque5 = await responseEstoque5.json();
        const estoque6 = await responseEstoque6.json();

        setEstoque1(estoque1);
        setEstoque2(estoque2);
        setEstoque3(estoque3);
        setEstoque4(estoque4);
        setEstoque5(estoque5);
        setEstoque6(estoque6);
      } catch (error) {
        console.error("Erro ao carregar os JSON:", error);
      }
    };

    fetchCadeiras();
  }, []);

  
  return (
    <div>
      <Cart isCartOpen={isCartOpen} cartCount={cartItems.length} cartItems={cartItems} handleRemoveItem={handleRemoveItem} handleToggleCart={handleToggleCart} />

      <div className="flex flex-wrap overflow-hidden justify-center items-center mt-32 md:mt-36 md:gap-3">
        
          <section id="firstSection">
            {showFirst ? (
              <div className="relative mt-16 mx-3 cursor-pointer" 
              onClick={() => {
                firstClick();
                const section = document.getElementById("firstSection");
                
                if (section) {
                  const headerHeight = 95;
                  const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
                  
                  window.scrollTo({ 
                    top: sectionPosition - headerHeight,
                    behavior: "smooth" 
                  });
                }
              }}>
                <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_1.png" />
                <img
                  className="h-60 absolute -top-24 right-24 transform -translate-x-1/2"
                  src="./assets/cadeira_1.png"
                />
              </div>
            ) : (
              <div className="relative mt-14 w-screen h-auto bg-white pt-7 md:pb-10">
                <div className="flex items-center justify-center">
                  <span
                    className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary md:left-14"
                    onClick={() => {
                      setShowFirst(true);
                      window.scrollTo({top, behavior: 'smooth'})
                    
                    }}
                  >
                    <MdKeyboardBackspace />
                  </span>
                  <span className="mx-auto font-arimo font-bold text-secondary text-2xl">
                    Mais Vendidos
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10 md:grid-cols-3 md:gap-y-12 md:gap-x-0">
                  {estoque1.map((cadeira) => (
                    <div key={cadeira.id} className="flex flex-col items-center">
                      <img
                        src={`./assets/${cadeira.imagem}`}
                        alt={cadeira.nome}
                        className="h-52 object-cover rounded-lg md:h-72"
                      />
                      <button
                        className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center md:w-[90px] md:h-7"
                        onClick={() => addToCart(cadeira)}
                      >
                        <span className="text-white cursor-pointer md:text-[18px]">
                          {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </section>

        <section id="secondSection">      
          {showSecond ? (
            <div className="relative mt-16 mx-3 cursor-pointer" 
            onClick={() => {
              secondClick();
              const section = document.getElementById("secondSection");
              if (section) {
                let headerHeight;

                if (window.innerWidth <= 768) {
                  headerHeight = 95;
                } else {
                  headerHeight = -140;
                }

                const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            
                window.scrollTo({ 
                  top: sectionPosition - headerHeight,
                  behavior: "smooth" 
                });
              }
            }}>
              <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_2.png" />
              <img
                className="h-56 absolute -top-16 right-[125px] transform -translate-x-1/2"
                src="./assets/cadeira_2.png"
              />
            </div>
          ) : (
            <div className="relative mt-14 w-screen h-auto bg-white pt-7 md:pb-10">
              <div className="flex items-center justify-center">
                <span
                  className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary md:left-14"
                  onClick={() => {
                    setShowSecond(true);
                    window.scrollTo({top, behavior: 'smooth'})
                  }}
                >
                  <MdKeyboardBackspace />
                </span>
                <span className="mx-auto font-arimo font-bold text-secondary text-2xl">
                  Linha Presidente
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10 md:grid-cols-3 md:gap-y-12 md:gap-x-0">
                {estoque2.map((cadeira) => (
                  <div key={cadeira.id} className="flex flex-col items-center">
                    <img
                      src={`./assets/${cadeira.imagem}`}
                      alt={cadeira.nome}
                      className="h-52 object-cover rounded-lg md:h-72"
                    />
                    <button
                      className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center md:w-[90px] md:h-7"
                      onClick={() => addToCart(cadeira)}
                    >
                      <span className="text-white cursor-pointer md:text-[18px]">
                        {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="thirdSection">
          {showThird ? (
            <div className="relative mt-16 mx-3 cursor-pointer" 
            onClick={() => {
              thirdClick();
              const section = document.getElementById("thirdSection");
              if (section) {
                let headerHeight;

                if (window.innerWidth <= 768) {
                  headerHeight = 95;
                } else {
                  headerHeight = -140;
                }

                const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            
                window.scrollTo({ 
                  top: sectionPosition - headerHeight,
                  behavior: "smooth" 
                });
              }
            }}>
              <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_3.png" />
              <img
                className="h-56 absolute -top-20 right-[112px] transform -translate-x-1/2"
                src="./assets/cadeira_3.png"
              />
            </div>
          ) : (
            <div className="relative mt-14 w-screen h-auto bg-white pt-7 md:pb-10">
              <div className="flex items-center justify-center">
                <span
                  className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary md:left-14"
                  onClick={() => {
                    setShowThird(true);
                    window.scrollTo({top, behavior: 'smooth'})
                  }}
                >
                  <MdKeyboardBackspace />
                </span>
                <span className="mx-auto font-arimo font-bold text-secondary text-2xl">
                  Linha Executiva
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-5 p-5 pb-10 md:grid-cols-3 md:gap-y-12 md:gap-x-0">
                {estoque3.map((cadeira) => (
                  <div key={cadeira.id} className="flex flex-col items-center">
                    <img
                      src={`./assets/${cadeira.imagem}`}
                      alt={cadeira.nome}
                      className="h-52 object-cover rounded-lg md:h-72"
                    />
                    <button
                      className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center md:w-[90px] md:h-7"
                      onClick={() => addToCart(cadeira)}
                    >
                      <span className="text-white cursor-pointer md:text-[18px]">
                        {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="forthSection">
          {showForth ? (
            <div className="relative mt-16 mx-3 cursor-pointer" 
            onClick={() => {
              forthClick();
              const section = document.getElementById("forthSection");
              if (section) {
                let headerHeight;

                if (window.innerWidth <= 768) {
                  headerHeight = 95;
                } else {
                  headerHeight = -140;
                }  
                const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
                
                window.scrollTo({ 
                  top: sectionPosition - headerHeight,
                  behavior: "smooth" 
                });
              }
            }}>
              <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_4.png" />
              <img
                className="h-60 absolute -top-[80px] right-[102px] transform -translate-x-1/2"
                src="./assets/cadeira_4.png"
              />
            </div>
          ) : (
            <div className="relative mt-14 w-screen h-auto bg-white pt-7 md:pb-10">
              <div className="flex items-center justify-center">
                <span
                  className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary md:left-14"
                  onClick={() => {
                    setShowForth(true);
                    window.scrollTo({top, behavior: 'smooth'})
                  }}
                >
                  <MdKeyboardBackspace />
                </span>
                <span className="mx-auto font-arimo font-bold text-secondary text-2xl">
                  Cadeiras Fixas
                </span>
              </div>

              <div className="grid grid-cols-2 gap-5 px-5 pb-10 md:grid-cols-3 md:gap-y-12 md:gap-x-0">
                {estoque4.map((cadeira) => (
                  <div key={cadeira.id} className="flex flex-col items-center">
                    <img
                      src={`./assets/${cadeira.imagem}`}
                      alt={cadeira.nome}
                      className="h-52 object-cover rounded-lg md:h-72"
                    />
                    <button
                      className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center md:w-[90px] md:h-7"
                      onClick={() => addToCart(cadeira)}
                    >
                      <span className="text-white cursor-pointer md:text-[18px]">
                        {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="fifthSection">
         {showFifth ? (
           <div className="relative mt-16 mx-3 cursor-pointer" 
           onClick={() => {
            fifthClick();
            const section = document.getElementById("fifthSection");
            if (section) {
              let headerHeight;

                if (window.innerWidth <= 768) {
                  headerHeight = 95;
                } else {
                  headerHeight = -140;
                }

              const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
          
              window.scrollTo({ 
                top: sectionPosition - headerHeight,
                behavior: "smooth" 
              });
            }
          }}>
              <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_5.png" />
              <img
                className="h-60 absolute -top-12 right-[87px] transform -translate-x-1/2"
                src="./assets/cadeira_5.png"
              />
            </div>
          ) : (
            <div className="relative mt-14 w-screen h-auto bg-white pt-7 md:pb-10">
              <div className="flex items-center justify-center">
                <span
                  className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary md:left-14"
                  onClick={() => {
                    setShowFifth(true);
                    window.scrollTo({top, behavior: 'smooth'})
                  }}
                >
                  <MdKeyboardBackspace />
                </span>
                <span className="mx-auto font-arimo font-bold text-secondary text-2xl">
                  Longarinas
                </span>
              </div>

              <div className="grid grid-cols-2 gap-5 px-5 pb-10 md:grid-cols-3 md:gap-y-12 md:gap-x-0">
                {estoque5.map((cadeira) => (
                  <div key={cadeira.id} className="flex flex-col items-center">
                    <img
                      src={`./assets/${cadeira.imagem}`}
                      alt={cadeira.nome}
                      className="h-52 object-cover rounded-lg md:h-72"
                    />
                    <button
                      className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center md:w-[90px] md:h-7"
                      onClick={() => addToCart(cadeira)}
                    >
                      <span className="text-white cursor-pointer md:text-[18px]">
                        {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <section id="sixthSection">
          {showSixth ? (
            <div className="relative mt-16 mx-3 cursor-pointer" 
            onClick={() => {
              sixthClick();
              const section = document.getElementById("sixthSection");
              if (section) {
                let headerHeight;

                if (window.innerWidth <= 768) {
                  headerHeight = 95;
                } else {
                  headerHeight = -140;
                }

                const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            
                window.scrollTo({ 
                  top: sectionPosition - headerHeight,
                  behavior: "smooth" 
                });
              }
            }}>
              <img className="h-40 mx-auto rounded-3xl" src="./assets/bg_6.png" />
              <img
                className="h-[268px] absolute -top-[100px] right-[65px] transform -translate-x-1/2"
                src="./assets/cadeira_6.png"
                />
            </div>
          ) : (
            <div className="relative mt-14 w-screen h-auto bg-white pt-7 mb-16 md:pb-10">
              <div className="flex items-center justify-center">
                <span
                  className="absolute flex justify-center items-center left-7 text-[26px] rounded-lg h-[28px] w-10 text-white cursor-pointer bg-secondary md:left-14" 
                  onClick={() => {
                    setShowSixth(true);
                    window.scrollTo({top, behavior: 'smooth'})
                  }}>
                  <MdKeyboardBackspace />
                </span>
                <span className="mx-auto font-arimo font-bold text-secondary text-2xl">
                  Outros
                </span>
              </div>

              <div className="grid grid-cols-2 gap-5 px-5 pb-10 md:grid-cols-3 md:gap-y-12 md:gap-x-0">
                {estoque6.map((cadeira) => (
                  <div key={cadeira.id} className="flex flex-col items-center">
                    <img
                      src={`./assets/${cadeira.imagem}`}
                      alt={cadeira.nome}
                      className="h-52 object-cover rounded-lg md:h-72"
                      />
                    <button
                      className="flex mt-3 bg-secondary w-20 h-7 rounded-lg justify-center items-center md:w-[90px] md:h-7"
                      onClick={() => addToCart(cadeira)}
                    >
                      <span className="text-white cursor-pointer md:text-[18px]">
                        {isItemInCart(cadeira) ? <FaCheck /> : <FaPlus />}
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Items;
