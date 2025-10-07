const Cart = () => {
    return (
        <div className="border mt-4 rounded-md ml-4 lg:sticky lg:top-0">
            <div className="flex items-center flex-col ">
                <h2 className="border-b w-full text-lg font-bold p-2">سبد خرید</h2>
                <div className="flex flex-col items-center py-10 gap-4">
                    <img src="/images/cart.png" alt="" />
                    <p className="text-slate-800">سبد خرید خالی است</p>
                </div>
            </div>
        </div>
    );
}

export default Cart;
