import { HiBars3 } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "../../redux/Menu/Menu";
const Navbar = () => {
    const {menu} = useSelector(state =>state.menu)
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center p-4 relative">
            <div className="flex items-center gap-2">
                <div onClick={()=>{dispatch(showMenu("open"))}} className="cursor-pointer md:hidden">
                    <HiBars3 size={30} />
                </div>
                <div className="w-20 md:w-36">
                    <img className="w-full" src="/images/Logo.png" alt="" />
                </div>
            </div>
            {menu=="open" && <div onClick={()=>{dispatch(showMenu("close"))}} className="bg-black/50 z-10 absolute h-screen top-0 bottom-0 right-0 left-0"></div>}
            <div className={`${menu=="open" ? "w-60" : "w-0 md:w-full md:opacity-100 translate-x-36 md:translate-x-0"} transition-all duration-200 p-4 md:p-0 bg-yellow-200 md:bg-white z-20 absolute top-0 bottom-0 h-screen md:h-auto right-0 md:static block md:pl-8`}>
                <ul className="flex flex-col md:flex-row  md:justify-end items-start text-nowrap gap-2">
                    <li onClick={()=>{dispatch(showMenu("close"))}} className="md:hidden mb-6 cursor-pointer">
                        <TfiClose size={24}/>
                    </li>
                    <li className="w-full md:w-auto">
                        <a href="#" className="px-4 py-2 block w-full rounded-md transition-all duration-100 hover:bg-yellow-500 md:hover:bg-white md:hover:text-yellow-500 hover:text-white">صفحه اصلی</a>
                    </li>
                    <li className="w-full md:w-auto">
                        <a href="#" className="px-4 py-2 block w-full rounded-md transition-all duration-100 hover:bg-yellow-500 md:hover:bg-white md:hover:text-yellow-500 hover:text-white">سفارش اینترنتی</a>
                    </li>
                    <li className="w-full md:w-auto">
                        <a href="#" className="px-4 py-2 block w-full rounded-md transition-all duration-100 hover:bg-yellow-500 md:hover:bg-white md:hover:text-yellow-500 hover:text-white">درباره</a>
                    </li>
                    <li className="w-full md:w-auto">
                        <a href="#" className="px-4 py-2 block w-full rounded-md transition-all duration-100 hover:bg-yellow-500 md:hover:bg-white md:hover:text-yellow-500 hover:text-white">تماس با ما</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="text-white bg-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-600 transition-all duration-200">ورود</button>
            </div>
        </div>
    );
}

export default Navbar;
