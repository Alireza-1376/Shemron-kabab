import { useContext, useState } from "react";
import { GoShareAndroid } from "react-icons/go";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { CartContext } from "../../context/CartContext";
import FoodModal from "../../Modal/FoodModal";
import { foodReducer } from "../../../redux/FoodModal/FoodModal";
import { useDispatch, useSelector } from "react-redux";


const Beverage = ({ beverage  }) => {
    const { cart, setCart } = useContext(CartContext);
    const [selectItem, setSelectItem] = useState(null);
    const { foodModal } = useSelector(state => state.foodModal);
    const dispatch = useDispatch();
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
                <h2 className="text-xl font-bold text-gray-600 text-nowrap">نوشیدنی</h2>
                <span className="bg-gray-100 rounded-full w-10 h-8 cursor-pointer">
                    <GoShareAndroid size={20} color="gray" />
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {beverage.map((item) => {
                    const id = cart.filter((i) => {
                        return i.id == item.id;
                    })
                    const formated = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    return (
                        <div onClick={() => { dispatch(foodReducer(true)); setSelectItem(item) }} key={item.id} className="border shadow">
                            <div>
                                <img className="object-cover w-full" src={`${item.imageUrl}`} alt="" />
                            </div>
                            <div className="flex justify-between items-end p-4">
                                <div>
                                    <p className="font-bold mb-2">{item.title}</p>
                                    <p>{formated} تومان</p>
                                </div>
                                <div>
                                    {id.length > 0 ?
                                        <div className="flex items-center gap-2">
                                            <button onClick={(e) => {e.stopPropagation() ;handleDeleteItem(item.id) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                                <HiOutlineMinus />
                                            </button>
                                            <span>{id.length}</span>
                                            <button onClick={(e) => {e.stopPropagation() ;addToCart(item) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                                <HiOutlinePlus />
                                            </button>
                                        </div>
                                        :
                                        <button onClick={(e) => {  if(!item.items){addToCart(item) ;e.stopPropagation() }}} className="border border-yellow-500 p-1.5 rounded-md text-xl hover:bg-yellow-500 transition-all duration-100">
                                            <HiOutlinePlus />
                                        </button>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {foodModal && selectItem &&
                <div>
                    <FoodModal handleDeleteItem={handleDeleteItem} addToCart={addToCart} setSelectItem={setSelectItem} selectItem={selectItem}  />
                    <div onClick={() => { dispatch(foodReducer(false)) ; setSelectItem(null)  }} className="bg-black/50 top-0 bottom-0 right-0 left-0 z-40 fixed"></div>
                </div>
            }
        </div>
    );
}

export default Beverage;
