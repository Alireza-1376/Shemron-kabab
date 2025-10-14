import Order from "./Order/Order";
import Info from "./Info";
import { useState } from "react";
import Cart from "../Cart/Cart";

const discount = 10 ;

const MainPage = () => {
    const [ menu , setMenu ]=useState(1);
    return (
        <div id="MainPage" className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 p-4">
                <div className="w-full lg:flex lg:gap-4 bg-gray-300 lg:bg-white rounded-full lg:overflow-x-auto h-10 lg:h-14 flex lg:border-b lg:rounded-none">
                    <span onClick={()=>{setMenu(1)}} className=" w-full lg:w-auto rounded-full cursor-pointer">
                        <a className={`${menu==1 ? "active" : ""} lg:bg-white`}>منو سفارش</a>
                    </span>
                    <span onClick={()=>{setMenu(2)}} className="w-full lg:w-auto rounded-full cursor-pointer">
                        <a className={`${menu==2 ? "active" : ""} lg:bg-white`}>اطلاعات رستوران</a>
                    </span>
                </div>
                <div>
                    {menu==1 ? <Order discount={discount}/> : <Info /> }
                </div>
            </div>
            <div className={`${menu==2 ? "lg:block hidden w-full" : ""} lg:col-span-4`}>
                <Cart discount={discount}/>
            </div>
        </div>
    );
}

export default MainPage;







