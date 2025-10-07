import { GoShareAndroid } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi2";

const Salad = ({salad}) => {
    return (
        <div className='mt-8'>
            <div className="flex justify-start items-center gap-4">
                <h2 className="text-xl font-bold text-gray-600 text-nowrap">پیش غذا</h2>
                <span className="bg-gray-100 rounded-full w-10 h-8 cursor-pointer">
                    <GoShareAndroid size={20} color="gray" />
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
                {salad.map((item) => {
                    console.log(item)
                    return (
                        <div className="border shadow">
                            <div>
                                <img className="object-cover w-full" src={`${item.imageUrl}`} alt="" />
                            </div>
                            <div className="flex justify-between items-end p-4">
                                <div>
                                    <p className="font-bold mb-2">{item.title}</p>
                                    <p className="line-through text-gray-500 text-sm">900.000 تومان</p>
                                    <p>{item.price} تومان</p>
                                </div>
                                <div>
                                    <button className="border border-yellow-500 p-1.5 rounded-md text-xl hover:bg-yellow-500 transition-all duration-100">
                                        <HiOutlinePlus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Salad;
