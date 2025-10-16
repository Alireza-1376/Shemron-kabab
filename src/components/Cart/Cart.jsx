import { useDispatch, useSelector } from "react-redux";
import { PiShoppingCartLight } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import { LuTrash } from "react-icons/lu";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";

import { CartContext } from "../context/CartContext";

const Cart = ({discount}) => {
    const { cart, setCart } = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);
    const [totalPrice, setTotalPrice] = useState(null);
    const [discountPrice , setDiscountPrice] = useState(null)
    const [uniq, setUniq] = useState();

    useEffect(() => {
        const uniqItem =cart.filter((item , index , self)=>{
           return index == self.findIndex(f=>f.id==item.id) 
        })
        setUniq(uniqItem)
    }, [cart])

    function handleDeleteCartItems() {
        localStorage.removeItem("cartItems")
        setCart([])
    }

    useEffect(() => {
        if (cart.length > 0) {
            const totalPrice = cart.reduce((acc, curr) => {
                return acc + Number(curr.price)
            }, 0)
            setTotalPrice(totalPrice)
            setDiscountPrice(totalPrice * (discount /100))
        }
    }, [cart])

    function addToCart(item){
        setCart((prev) => [...prev, item])
        const getCartItems =JSON.parse(localStorage.getItem("cartItems")) || [] ;
        localStorage.setItem("cartItems" , JSON.stringify([...getCartItems , item]));
    }
    function handleDeleteItem(id){
        let newCart =JSON.parse(localStorage.getItem("cartItems")) || []
        const findItem = newCart.findIndex((item)=>{
            return item.id==id
        });
        newCart.splice(findItem , 1);
        localStorage.setItem("cartItems" , JSON.stringify(newCart));
        setCart(newCart);
    }

    return (
        <>
            <div className={` border overflow-hidden mt-4 rounded-md ml-4 lg:sticky lg:top-4`}>
                {cart.length == 0 ?
                    <div className={`${showCart ? " lg:translate-x-0" : "-translate-x-72 lg:translate-x-0"} transition-all duration-200 items-center flex-col px-1 lg:px-0 flex fixed z-30 top-0 left-0 w-72 lg:w-full bottom-0 bg-white lg:static`}>
                        <h2 className="border-b w-full text-lg font-bold p-2">سبد خرید</h2>
                        <div className="flex flex-col items-center py-10 gap-4">
                            <img src="/images/cart.png" alt="" />
                            <p className="text-slate-800">سبد خرید خالی است</p>
                        </div>
                    </div>
                    :
                    <div className={`${showCart ? " lg:translate-x-0" : "-translate-x-72 lg:translate-x-0"} transition-all duration-200 items-center flex-col px-1 lg:px-0 md:flex flex z-30 fixed top-0 left-0 w-72 lg:w-full bottom-0 bg-white lg:static`}>
                        <div className="border-b flex items-center justify-between w-full">
                            <h2 className="w-full text-lg font-bold p-2">سبد خرید ( {cart.length})</h2>
                            <span onClick={() => { handleDeleteCartItems() }} className="pl-2 cursor-pointer">
                                <LuTrash size={24} />
                            </span>
                        </div>
                        <div className="max-h-[481px] overflow-auto w-full">
                            {uniq.map((item) => {
                                const id = cart.filter((f)=>{
                                    return f.id==item.id
                                })
                                const formated = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                
                                return (
                                    <div key={item.id} className="flex items-center justify-between w-full p-2 border-b">
                                        <div className="flex flex-col gap-1">
                                            <p className="font-bold">{item.title}</p>
                                            <p>{formated} تومان</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => { handleDeleteItem(item.id) }} className="border border-yellow-500 p-1.5 rounded-md text-xl hover:bg-yellow-500 transition-all duration-100">
                                                <HiOutlineMinus />
                                            </button>
                                            <span>{id.length}</span>
                                            <button onClick={() => {addToCart(item)}} className="border border-yellow-500 p-1.5 rounded-md text-xl hover:bg-yellow-500 transition-all duration-100">
                                                <HiOutlinePlus />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between items-center w-full p-2 ">
                                <p> تخفیف :</p>
                                <p>{discountPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</p>
                            </div>
                            <div className="flex justify-between items-center w-full p-2 font-bold">
                                <p>هزینه کل :</p>
                                <p> {((totalPrice)*(1-discount/100))?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان </p>
                            </div>
                            <div className="mt-8">
                                <span className="text-yellow-400 font-bold text-lg cursor-pointer">کد تخفیف دارید ؟</span>
                            </div>
                            <div className="p-2">
                                <button className="bg-yellow-500 block w-full p-3 rounded-md">تکمیل سفارش</button>
                            </div>
                        </div>
                    </div>
                }
            </div>

            {showCart && <div onClick={() => { setShowCart(false) }} className="bg-black/50 fixed top-0 bottom-0 left-0 right-0 z-20 lg:hidden"></div>}
            {cart.length != 0 && <div onClick={() => { setShowCart(true) }} className={`${showCart ? "translate-y-16" : "translate-y-0"} transition-all duration-200 cursor-pointer z-20 lg:hidden flex items-center justify-between bg-yellow-500 px-4 fixed bottom-0 right-0 left-0`}>
                <div className="flex items-center gap-2">
                    <PiShoppingCartLight size={24} />
                    <span>سبد خرید ( {cart.length})</span>
                </div>
                <div className="bg-yellow-600 px-4 rounded-full py-0 my-1.5">
                    <span>{totalPrice} تومان</span>
                </div>
            </div>}
        </>
    );
}

export default Cart;
