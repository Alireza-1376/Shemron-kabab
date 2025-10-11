import { GoShareAndroid } from "react-icons/go";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { foodReducer } from "../../redux/FoodModal/FoodModal";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2";
import { useState } from "react";
const FoodModal = ({ selectItem, discount, handleDeleteItem, addToCart }) => {
    const [numOfFood, setNumOfFood] = useState([])
    const dispatch = useDispatch();

    return (
        <div>
            <div className="bg-white rounded-md flex flex-col justify-between md:w-[550px] md:h-[700px] top-0 right-0  md:translate-x-1/2 md:top-4  bottom-0 left-0 md:right-1/2 z-50 fixed">
                <div>
                    <div className="flex items-center justify-between border-b p-2 px-4">
                        <span className="bg-gray-100 rounded-full w-10 h-8 cursor-pointer">
                            <GoShareAndroid size={20} color="gray" />
                        </span>
                        <button onClick={() => { dispatch(foodReducer(false)) }}>
                            <TfiClose size={24} />
                        </button>
                    </div>
                    <div className="max-h-[400px]">
                        <div>
                            <div className="relative">
                                <img className="object-cover w-full" src={`${selectItem.imageUrl}`} alt="" />
                                <p className="absolute flex justify-center items-center top-4 left-4 bg-yellow-500 h-8 w-8 rounded-md text-sm p-0">% {discount}</p>
                            </div>
                        </div>
                        <div className="py-8">
                            <p className="font-bold text-xl p-2 px-4">{selectItem.title}</p>
                            <div className="flex gap-4 px-4">
                                <p className="line-through text-gray-500 text-sm">{selectItem.price} تومان</p>
                                <p>{(selectItem.price) * (1 - discount / 100)} تومان</p>
                            </div>
                            <p className="md:w-[470px] px-4 mt-4 text-gray-500">{selectItem.description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center my-4 justify-between px-4 border-t pt-4">
                    <div>
                        <button>
                            <span>افزودن به سبد خرید { } تومان</span>
                        </button>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => { handleDeleteItem(selectItem.id) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                <HiOutlineMinus />
                            </button>
                            <span>{numOfFood.length}</span>
                            <button onClick={() => { addToCart(item) }} className="border border-yellow-500 p-1.5 rounded-md text-xl bg-yellow-500 transition-all duration-100">
                                <HiOutlinePlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodModal;
