import { LiaSearchSolid } from "react-icons/lia";
const SearchItem = () => {
    return (
        <div className="border-b mb-2">
            <div className="flex gap-2 items-center  border border-gray-400 my-2 w-60 py-1 px-2 rounded-md">
                <LiaSearchSolid size={30}/>
                <input className=" outline-none" type="text" placeholder='جستجو سریع' />
            </div>
        </div>
    );
}

export default SearchItem;
