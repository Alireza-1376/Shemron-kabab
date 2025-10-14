const Info = () => {
    return (
        <div className="lg:flex px-4">
            <div className=" lg:w-1/2">
                <h2 className="text-yellow-500 font-bold text-center my-8">سرویس دهی آنلاین</h2>
                <table className="w-full text-sm">
                    <thead className="flex flex-col justify-center">
                        <tr className="text-center border-b border-gray-400 flex justify-between items-center">
                            <th className="w-1/4 text-start py-4"></th>
                            <th className="w-1/4">صبحانه</th>
                            <th className="w-1/4">ناهار </th>
                            <th className="w-1/4">شام</th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col justify-center">
                        <tr className="text-center border-b flex justify-between items-center">
                            <td className="w-1/4 text-start py-4">شنبه</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4 text-nowrap">45 : 10 تا 23:45</td>
                        </tr>
                        <tr className="text-center border-b w-full flex justify-between items-center">
                            <td className="w-1/4 text-start py-4">یک شنبه</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4 text-nowrap">45 : 10 تا 23:45</td>
                        </tr>
                        <tr className="text-center  border-b flex justify-between items-center">
                            <td className="w-1/4 text-start py-4">دوشنبه</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4 text-nowrap">45 : 10 تا 23:45</td>
                        </tr>
                        <tr className="text-center  border-b flex justify-between items-center">
                            <td className="w-1/4 text-start py-4">سه شنبه</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4 text-nowrap">45 : 10 تا 23:45</td>
                        </tr>
                        <tr className="text-center  border-b flex justify-between items-center">
                            <td className="w-1/4 text-start py-4">چهارشنبه</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4 text-nowrap">45 : 10 تا 23:45</td>
                        </tr>
                        <tr className="text-center  border-b flex justify-between items-center">
                            <td className="w-1/4 text-start py-4">پنج شنبه</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4 text-nowrap">45 : 10 تا 23:45</td>
                        </tr>
                        <tr className="text-center border-b flex justify-between items-center">
                            <td className="w-1/4 text-start py-4">جمعه</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4">-</td>
                            <td className="w-1/4 text-nowrap">45 : 10 تا 23:45</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-yellow-500 font-bold text-center mt-4 mb-4 md:mt-8">نوع غذا</h2>
                <div className="flex justify-center gap-2">
                    <div className="border rounded-full border-gray-300 px-4 py-1">غذای ایرانی</div>
                    <div className="border rounded-full border-gray-300 px-4 py-1">کبابی یا جگرکی</div>
                </div>
            </div>
        </div>
    );
}

export default Info;
