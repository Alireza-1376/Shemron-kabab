import ScrollSpy from "react-scrollspy-navigation";
import SearchItem from "./SearchItem";
import Kabab from "./kabab";
import Rice from "./Rice";
import KababRice from "./KababRice";
import Salad from "./Salad";
import Beverage from "./Beverage";


const kabab = [
    {
        id: 1,
        imageUrl: "/images/kabab/1.jpg",
        title: "جوجه کباب فیله",
        description: "هر سیخ 500 گرم به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص ( 60 سانتی )",
        price: "540000"
    },
    {
        id: 2,
        imageUrl: "/images/kabab/2.jpg",
        title: "لقمه گوسفندی",
        description: "هر سیخ 250 گرم به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص ( 45 سانتی )",
        price: "675000"
    },
    {
        id: 3,
        imageUrl: "/images/kabab/3.jpg",
        title: "جوجه کباب ران",
        description: "یک سیخ جوجه بدون استخوان ران 500 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص ( 60 سانتی )",
        price: "540000"
    },
    {
        id: 4,
        imageUrl: "/images/kabab/4.jpg",
        title: "جوجه با استخوان",
        description: "یک سیخ جوجه کامل به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص ( 60 سانتی )",
        price: "540000"
    },
    {
        id: 5,
        imageUrl: "/images/kabab/5.jpg",
        title: "راسته بره",
        description: "یک سیخ راسته بره 400 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص ( 60 سانتی )",
        price: "1395000"
    },
    {
        id: 6,
        imageUrl: "/images/kabab/6.jpg",
        title: "شیشلیک",
        description: "یک سیخ شیشلیگ 500 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص ( 50 سانتی )",
        price: "1395000"
    },
    {
        id: 7,
        imageUrl: "/images/kabab/7.jpg",
        title: "میکس کباب خانواده",
        description: "دو سیخ لقمه گوسفندی 250 گرمی یک سیخ جوجه بدون استخوان 500 گرمی یک سیخ جوجه با استخوان یک سیخ شیشلیگ و یک سیخ راسته بره به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "4140000"
    },
    {
        id: 8,
        imageUrl: "/images/kabab/8.jpg",
        title: "گوجه اضافه",
        description: "",
        price: "50000"
    },
    {
        id: 9,
        imageUrl: "/images/kabab/9.jpg",
        title: "فلفل کبابی",
        description: "",
        price: "50000"
    },
]
const rice = [
    {
        id: 1,
        imageUrl: "/images/rice/1.jpg",
        title: "چلوکره",
        description: "",
        price: "300000"
    },
]
const kababrice = [
    {
        id: 1,
        imageUrl: "/images/kababrice/1.jpg",
        title: "کباب وزیری",
        description: "یک سیخ کباب لقمه 250 گرمی و یک سخ جوجه فیله 500 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "832500"
    },
    {
        id: 2,
        imageUrl: "/images/kababrice/2.jpg",
        title: "کباب امیری",
        description: "یک سیخ جوجه فیله 500 گرمی و یک سیخ شیشلیگ 500 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "1890000"
    },
    {
        id: 3,
        imageUrl: "/images/kababrice/3.jpg",
        title: "کباب درباری",
        description: "یک سیخ جوجه کامل با استخوان یک سیخ راسته بره 400 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "1890000"
    },
    {
        id: 4,
        imageUrl: "/images/kababrice/4.jpg",
        title: "کباب مظفری",
        description: "یک سیخ لقمه 250 گرم یک سیخ شیشلیگ 500 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "1687500"
    },
    {
        id: 5,
        imageUrl: "/images/kababrice/5.jpg",
        title: "کباب شاهی",
        description: "یک سیخ شیشلیگ 500 گرمی و یک سیخ راسته بره 400 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "2745000"
    },
    {
        id: 6,
        imageUrl: "/images/kababrice/6.jpg",
        title: "کباب سالاری",
        description: "یک سیخ لقمه 250 گرمی یک سیخ جوجه ران 500 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "832500"
    },
    {
        id: 7,
        imageUrl: "/images/kababrice/7.jpg",
        title: "کباب سلطانی",
        description: "یک سیخ لقمه 250 گرمی و یک سیخ کباب بره 400 گرمی به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "1687500"
    },
    {
        id: 8,
        imageUrl: "/images/kababrice/8.jpg",
        title: "کباب شکاری",
        description: "یک سیخ لقمه 250 گرمی یک سیخ جوجه کامل با استخوان به همراه نان داغ گوجه فرنگی ریحان تازه پیاز سس مخصوص",
        price: "832500"
    }
]
const salad = [
    {
        id: 1,
        imageUrl: "/images/salad/1.jpg",
        title: "بورانی اسفناج",
        description: "",
        price: "110000"
    },
    {
        id: 2,
        imageUrl: "/images/salad/2.jpg",
        title: "زیتون",
        description: "",
        price: "200000"
    },
    {
        id: 3,
        imageUrl: "/images/salad/3.jpg",
        title: "ماست موسیر",
        description: "",
        price: "110000"
    },
    {
        id: 4,
        imageUrl: "/images/salad/4.jpg",
        title: "بورانی بادمجان",
        description: "",
        price: "110000"
    },
    {
        id: 5,
        imageUrl: "/images/salad/5.jpg",
        title: "ماست شوید",
        description: "",
        price: "110000"
    },
    {
        id: 6,
        imageUrl: "/images/salad/6.jpg",
        title: "ماست خیار",
        description: "",
        price: "110000"
    }
]
const beverage = [
    {
        id: 1,
        imageUrl: "/images/beverage/1.jpg",
        title: "باربیکن ساده",
        description: "",
        price: "47000"
    },
    {
        id: 2,
        imageUrl: "/images/beverage/2.jpg",
        title: "آب معدنی",
        description: "",
        price: "9000"
    },
    {
        id: 3,
        imageUrl: "/images/beverage/3.jpg",
        title: "دوغ محلی زالی",
        description: "",
        price: "40000"
    },
    {
        id: 4,
        imageUrl: "/images/beverage/4.jpg",
        title: "نوشابه قوطی",
        description: "",
        price: "47000"
    },
    {
        id: 5,
        imageUrl: "/images/beverage/5.jpg",
        title: "هی دی قوطی",
        description: "",
        price: "47000"
    }
]

const Scroll = () => {
   

    function scrollTo(id) {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    
    return (
        <div>
            <ScrollSpy activeClass="nav-active">
                <nav className="sticky top-0 bg-white">
                    <ul className="flex gap-4 md:gap-12 pt-4 border-b overflow-auto pb-2 md:pb-0">
                        <li onClick={() => { scrollTo("target-1") }} className="flex w-20 flex-col items-center cursor-pointer">
                            <img className="w-8 md:w-14" src="/images/menu/icon-kebab.png" alt="" />
                            <a href="#target-1" className="text-sm text-nowrap">کباب ها</a>
                        </li>
                        <li onClick={() => { scrollTo("target-2") }} className="flex w-20 flex-col items-center cursor-pointer">
                            <img className="w-8 md:w-14" src="/images/menu/icon-rice.png" alt="" />
                            <a href="#target-2" className="text-sm text-nowrap">چلو</a>
                        </li>
                        <li onClick={() => { scrollTo("target-3") }} className="flex w-20 flex-col items-center cursor-pointer">
                            <img className="w-8 md:w-14" src="/images/menu/icon-kebabrice.png" alt="" />
                            <a href="#target-3" className="text-sm text-nowrap">منوی ترکیبی</a>
                        </li>
                        <li onClick={() => { scrollTo("target-4") }} className="flex w-20 flex-col items-center cursor-pointer">
                            <img className="w-8 md:w-14" src="/images/menu/icon-salad.png" alt="" />
                            <a href="#target-4" className="text-sm text-nowrap">پیش غذا</a>
                        </li>
                        <li onClick={() => { scrollTo("target-5") }} className="flex w-20 flex-col items-center cursor-pointer">
                            <img className="w-8 md:w-14" src="/images/menu/icon-beverage.png" alt="" />
                            <a href="#target-5" className="text-sm text-nowrap">نوشیدنی</a>
                        </li>
                    </ul>
                </nav>
            </ScrollSpy>
            <SearchItem />
            <div>
                <section className="scroll-mt-[110px] md:scroll-mt-[116px]" id="target-1">
                    <Kabab kabab={kabab} />
                </section>
                <section className="scroll-mt-24 md:scroll-mt-28" id="target-2">
                    <Rice rice={rice} />
                </section>
                <section className="scroll-mt-24 md:scroll-mt-28" id="target-3">
                    <KababRice kababrice={kababrice} />
                </section>
                <section className=" scroll-mt-24 md:scroll-mt-28" id="target-4">
                    <Salad salad={salad} />
                </section>
                <section className="scroll-mt-24 md:scroll-mt-28 " id="target-5">
                    <Beverage beverage={beverage} />
                </section>
            </div>
        </div>
    );
}

export default Scroll;
