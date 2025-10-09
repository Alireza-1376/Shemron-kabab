import { HiChevronDown } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { BounceLoader } from "react-spinners";
import { showBranch } from "../../redux/Branch/Branch";
const Branch = () => {
    const { branch } = useSelector(state => state.branch)
    const dispatch = useDispatch()
    
    return (
        <div >
            <div className=" bg-[url('/images/branch.jpg')] w-screen h-64 md:h-80 bg-center bg-cover bg-no-repeat bg-black">
                <div className="w-full h-full bg-black/40 text-white flex flex-col md:items-start items-center gap-3 md:pr-8">
                    <div className="flex items-center gap-2 mt-10 md:mt-16">
                        <h1 className="text-3xl font-bold">تجریش</h1>
                        <span className="bg-yellow-500 text-black rounded-md px-4 py-1.5">تا % 10 تخفیف</span>
                    </div>
                    <div>
                        <p className="font-semibold">آدرس : میدان تجریش ، ضلع شمال شرقی</p>
                    </div>
                    <div>
                        <button onClick={() => { dispatch(showBranch("open")) }} className="flex items-center gap-2 bg-white text-black px-4 py-1.5 rounded-md">
                            <span>تفییر مجموعه</span>
                            <HiChevronDown />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mt-8 md:mt-14">
                        <BounceLoader size={20} color="#10da10" />
                        <p>سفارش می پذیریم</p>
                    </div>
                </div>
            </div>

            <div className={`${branch=="open" ? "translate-y-0" : "top-[10000px] scale-0"} fixed z-30 transition-all duration-300 md:w-96 md:h-96 md:rounded-lg md:top-1/2 md:right-1/2 md:translate-x-1/2 shadow-md md:-translate-y-1/2 top-0 bottom-0 right-0 left-0 bg-white`}>
                <div className="flex items-center justify-between gap-4 border-b py-4 px-8">
                    <h2 className="text-lg font-semibold text-center">لطفا مجموعه موردنظر را انتخاب کنید</h2>
                    <button onClick={() => { dispatch(showBranch("close")) }}>
                        <TfiClose size={24} />
                    </button>
                </div>
                <div className="flex flex-col items-center gap-6 mt-8">
                    <a className="block w-full text-center py-1" href="#">تجریش</a>
                    <a className="block w-full text-center py-1" href="#">نیاوران</a>
                    <a className="block w-full text-center py-1" href="#">دشت بهشت</a>
                </div>
            </div>

            {branch == "open" && <div onClick={() => { dispatch(showBranch("close")) }} className="bg-black/50 z-20 absolute h-screen top-0 bottom-0 right-0 left-0"></div>}
        </div>
    );
}

export default Branch;
