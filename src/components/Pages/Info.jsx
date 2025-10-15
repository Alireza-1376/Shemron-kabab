import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap, useMapEvent } from 'react-leaflet/hooks';


const Info = () => {
    const position = [35.806945960346695, 51.429513293122206]
    return (
        <div>
            <div className="lg:flex  border-b pb-6">
                <div className=" lg:w-1/2 ">
                    <h2 className="text-yellow-500 font-bold text-center my-8">سرویس دهی آنلاین</h2>
                    <table className="w-full text-sm overflow-x-hidden">
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
            <div>
                <div>
                    <h2 className="text-yellow-500 font-bold text-center my-4"> آدرس رستوران</h2>
                    <p className="text-center">میدان تجریش ، ضلع شمال شرقی</p>
                    <div className="flex justify-center items-center gap-4">
                        <span>تلفن : </span>
                        <span className="border-b">0211775</span>
                        <span className="border-b">02122746008</span>
                        <span className="border-b">02122746007</span>
                    </div>
                </div>
                <div className='mb-4'>
                    <MapContainer center={position} zoom={15} scrollWheelZoom={false} attributionControl={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <ClickOnMap />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Info;


function ClickOnMap(){
    useMapEvent({
        click(e){
            console.log(e.latlng)
        }
    })
}
