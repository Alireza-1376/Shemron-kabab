import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Order from "./Order";
import Info from "./Info";

const MainPage = () => {
    const location = useLocation();
    // console.log(location.pathname)
    return (
        <div id="MainPage" className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-4">
                <div className="w-full lg:flex lg:gap-4 bg-gray-300 lg:bg-white rounded-full lg:overflow-x-auto h-10 lg:h-14 flex lg:border-b lg:rounded-none">
                    <span className=" w-full lg:w-auto rounded-full">
                        <NavLink to="order" className="lg:bg-white hover:text-yellow-500">منو سفارش</NavLink>
                    </span>
                    <span className="w-full lg:w-auto rounded-full">
                        <NavLink to="info" className="lg:bg-white hover:text-yellow-500">اطلاعات رستوران</NavLink>
                    </span>
                </div>
                <div>
                    <Routes>
                        <Route path="/order" element={<Order />} />
                        <Route path="/info" element={<Info />} />
                    </Routes>
                </div>
            </div>
            <div className="bg-red-100 lg:col-span-4">
                cart
            </div>
        </div>
    );
}

export default MainPage;
