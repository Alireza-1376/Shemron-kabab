import { GoShareAndroid } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { foodReducer } from "../../redux/FoodModal/FoodModal";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { use, useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
const FoodModal = ({ selectItem, setSelectItem, discount, handleDeleteItem, addToCart }) => {
    const { cart, setCart } = useContext(CartContext);
    const [addItem, setAddItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        const getCartItem = JSON.parse(localStorage.getItem('cartItems')) || []
        const filteredItem = getCartItem.filter((f) => {
            return f.id == selectItem.id;
        })
        setAddItem(filteredItem)
    }, [])

    useEffect(() => {
        const totalPrice = addItem.reduce((acc, curr) => {
            return acc + Number(curr.price)
        }, 0)
        if (discount) {
            const formated = (totalPrice * (1 - discount / 100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            setTotalPrice(formated)
        } else {
            const formated = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            setTotalPrice(formated)
        }
    }, [addItem])

    function addToLocalStorage(id) {
        const getCartItem = JSON.parse(localStorage.getItem('cartItems')) || [];
        const filterCartItem = getCartItem.filter(f => f.id != id)
        const newCartItem = [...filterCartItem, ...addItem]
        localStorage.setItem('cartItems', JSON.stringify(newCartItem))
        dispatch(foodReducer(false))
        setCart(newCartItem)
        setSelectItem(null)
    }

    function deleteOneItem(id) {
        const index = addItem.findIndex(f => f.id == id)
        let newAddItem = [...addItem]
        if (index != -1) {
            newAddItem.splice(index, 1)
        }

        setAddItem(newAddItem)
    }

    return (
        <div>
            <div className="bg-white rounded-md flex flex-col justify-between md:w-[550px] md:h-[700px] top-0 right-0  md:translate-x-1/2 md:top-4  bottom-0 left-0 md:right-1/2 z-50 fixed">
                <div>
                    <div className="flex items-center justify-between border-b p-2 px-4">
                        <span className="bg-gray-100 rounded-full w-10 h-8 cursor-pointer">
                            <GoShareAndroid size={20} color="gray" />
                        </span>
                        <button onClick={() => { dispatch(foodReducer(false)); setSelectItem(null) }}>
                            <TfiClose size={24} />
                        </button>
                    </div>
                    <div className={`${selectItem.items ? "overflow-auto max-h-[640px]" : ""} max-h-[400px]`}>
                        <div>
                            <div className="relative">
                                <img className="object-cover w-full" src={`${selectItem?.imageUrl}`} alt="" />
                                {discount && <p className="absolute flex justify-center items-center top-4 left-4 bg-yellow-500 h-8 w-8 rounded-md text-sm p-0">% {discount}</p>}
                            </div>
                        </div>
                        {selectItem.items ?
                            <div className="flex flex-col gap-4 px-4 my-2">
                                {selectItem.items.map((i) => {
                                    const formated = i.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                    const id = cart.filter((f) => {
                                        return f.id == i.id;
                                    })
                                    return (
                                        <div key={i.id} className="border p-2 ">
                                            <h2>{i.title}</h2>
                                            <div className="flex justify-between items-center">
                                                <p>{formated}</p>
                                                {id.length > 0 ?
                                                    <div className="flex items-center gap-2">
                                                        <button onClick={(e) => { handleDeleteItem(i.id); e.stopPropagation() }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                                            <HiOutlineMinus />
                                                        </button>
                                                        <span>{id.length}</span>
                                                        <button onClick={(e) => { addToCart(i); e.stopPropagation() }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                                            <HiOutlinePlus />
                                                        </button>
                                                    </div>
                                                    :
                                                    <button onClick={(e) => { addToCart(i); e.stopPropagation() }} className="border border-yellow-500 p-1.5 rounded-md text-xl hover:bg-yellow-500 transition-all duration-100">
                                                        <HiOutlinePlus />
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            : <div className="py-8">
                                <p className="font-bold text-xl p-2 px-4">{selectItem?.title}</p>
                                <div className="flex gap-4 px-4">
                                    <p className={`${discount ? "line-through text-gray-500 text-sm" : " text-black text-base"} `}>{selectItem?.price} تومان</p>
                                    {discount && <p>{(selectItem?.price) * (1 - discount / 100)} تومان</p>}
                                </div>
                                <p className="md:w-[470px] px-4 mt-4 text-gray-500">{selectItem?.description}</p>
                            </div>}
                    </div>
                </div>
                {!selectItem.items && <div className="flex items-center my-4 justify-between px-4 border-t pt-4">
                    <div>
                        <button className="bg-yellow-500 md:px-4 px-2 text-sm md:text-base rounded-md">
                            <span onClick={() => { addToLocalStorage(selectItem.id) }}>افزودن به سبد خرید {totalPrice}  تومان</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => { deleteOneItem(selectItem.id) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                <HiOutlineMinus />
                            </button>
                            <span>{addItem.length}</span>
                            <button onClick={() => { setAddItem((prev) => [...prev, selectItem]) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                <HiOutlinePlus />
                            </button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default FoodModal;
