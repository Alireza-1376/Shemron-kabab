import { GoShareAndroid } from "react-icons/go";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";


const KababRice = ({ kababrice, discount }) => {
    const { cart, setCart } = useContext(CartContext);
    const [showDesc, setShowDesc] = useState(null);

    function addToCart(item) {
        setCart((prev) => [...prev, item])
        const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        localStorage.setItem("cartItems", JSON.stringify([...getCartItems, item]));
    }
    function handleDeleteItem(id) {
        let newCart = JSON.parse(localStorage.getItem("cartItems")) || []
        const findItem = newCart.findIndex((item) => {
            return item.id == id
        });
        newCart.splice(findItem, 1);
        localStorage.setItem("cartItems", JSON.stringify(newCart));
        setCart(newCart);
    }

    return (
        <div className='mt-8'>
            <div className="flex justify-start items-center gap-4">
                <h2 className="text-xl font-bold text-gray-600 text-nowrap">منوی ترکیبی</h2>
                <span className="bg-gray-100 rounded-full w-10 h-8 cursor-pointer">
                    <GoShareAndroid size={20} color="gray" />
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {kababrice.map((item) => {
                    const id = cart.filter((i) => {
                        return i.id == item.id;
                    })
                    return (
                        <div onMouseLeave={() => { setShowDesc(null) }} onMouseEnter={() => { setShowDesc(item.id) }} key={item.id} className="border shadow">
                            <div className="relative">
                                <img className="object-cover w-full" src={`${item.imageUrl}`} alt="" />
                                {item.description && <div className={`${showDesc == item.id ? "bg-white/90" : ""} z-10 transition-all duration-200 hidden md:flex absolute top-0 bottom-0 right-0 left-0  items-center p-4`}>
                                    <p className={`${showDesc == item.id ? " " : "translate-y-40 opacity-0"} transition-all duration-200`}>{item.description}</p>
                                </div>}
                                <p className="absolute flex justify-center items-center top-4 left-4 bg-yellow-500 h-8 w-8 rounded-md text-sm p-0">% {discount}</p>

                            </div>
                            <div className="flex justify-between items-end p-4">
                                <div>
                                    <p className="font-bold mb-2">{item.title}</p>
                                    <p className="text-xs md:hidden">{item.description}</p>
                                    <p className="line-through text-gray-500 text-sm">{item.price} تومان</p>
                                    <p>{(item.price)*(1-discount/100)} تومان</p>
                                </div>
                                <div>
                                    {id.length > 0 ?
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => { handleDeleteItem(item.id) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                                <HiOutlineMinus />
                                            </button>
                                            <span>{id.length}</span>
                                            <button onClick={() => { addToCart(item) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                                <HiOutlinePlus />
                                            </button>
                                        </div>
                                        :
                                        <button onClick={() => { addToCart(item) }} className="border border-yellow-500 p-1.5 rounded-md text-xl hover:bg-yellow-500 transition-all duration-100">
                                            <HiOutlinePlus />
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default KababRice;
