import ScrollSpy from "react-scrollspy-navigation";

const Scroll = () => {
    function scrollTo(id){
        const element =document.getElementById(id)
        if(element){
            element.scrollIntoView({behavior:"smooth"})
        }
    }
    return (
        <div>
            <ScrollSpy activeClass="nav-active">
                <nav className="sticky top-0">
                    <ul className="flex gap-4">
                        <li>
                            <a onClick={()=>{scrollTo("target-1")}} href="#target-1">کباب ها</a>
                        </li>
                        <li>
                            <a onClick={()=>{scrollTo("target-2")}} href="#target-2">چلو</a>
                        </li>
                        <li>
                            <a onClick={()=>{scrollTo("target-3")}} href="#target-3">منوی ترکیبی</a>
                        </li>
                        <li>
                            <a onClick={()=>{scrollTo("target-4")}} href="#target-4">پیش غذا</a>
                        </li>
                        <li>
                            <a onClick={()=>{scrollTo("target-5")}} href="#target-5">نوشیدنی</a>
                        </li>
                    </ul>
                </nav>
            </ScrollSpy>
            <div>
                <section className="h-screen bg-red-100" id="target-1">1</section>
                <section className="h-screen bg-blue-100" id="target-2">2</section>
                <section className="h-screen bg-gray-100" id="target-3">3</section>
                <section className="h-screen bg-green-100" id="target-4">4</section>
                <section className="h-screen bg-yellow-100" id="target-5">5</section>
            </div>
        </div>
    );
}

export default Scroll;
