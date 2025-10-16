import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[url('/images/footer.jpg')] w-screen h-72 object-cover relative">
            <div className="flex flex-col gap-2 pt-6 md:flex-row md:justify-between md:items-center md:px-4">
                <p className="text-white text-center">حقوق مادی و معنوی متعلق به <span className="text-yellow-500">شمرون کباب</span> است</p>
                <div className="flex justify-center items-center gap-3 md:pl-4">
                    <a href="https://facebook.com/shemroon.kabab">
                        <FaFacebookF color="#eab308" size={30} />
                    </a>
                    <a href="https://instagram.com/shemroonkabab">
                        <IoLogoInstagram color="#eab308" size={36} />
                    </a>
                </div>
            </div>
            <div className="flex justify-center gap-2 items-center mt-8 md:mt-24">
                <button onClick={()=>{window.location.href = "tel:1775"}} className="bg-green-500 z-10 shadow-sm shadow-green-600 w-16 transition-all duration-200 h-16 md:w-36 gap-4 rounded-full flex justify-center items-center fixed bottom-4 right-4">
                    <span className="hidden md:flex text-white transition-all duration-200">تماس تلفنی</span>
                    <FaPhoneAlt size={30} color="white"/>
                </button>
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-white text-center">طراحی و پیاده سازی توسط <span className="text-lg text-purple-700">وندو</span></p>
                    </div>
                    <div className="flex gap-2">
                        <div className="bg-gray-900 h-10 md:h-14 rounded-md">
                            <a href="https://sibche.com/applications/shemroon_migrated" >
                                <img className="h-10 md:h-14 object-cover" src="/images/ios-sibche.png" alt="" />
                            </a>
                        </div>
                        <div className="bg-gray-900 h-10 md:h-14 rounded-md">
                            <a href="https://cafebazaar.ir/app/delino.custom.shemroonkabab">
                                <img className="h-10 md:h-14 object-cover " src="/images/android-bazaar.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <a href="https://trustseal.enamad.ir/?id=498160&Code=Mm5gmivvdh5auUJZFxavshcP8ogeYwRo" className=" absolute bottom-1 left-1 md:bottom-4 md:left-4">
                    <img src="/images/enamad.aspx" alt="" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
