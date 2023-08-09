import { useDispatch } from "react-redux"
import { logOut } from "../../global/globalState"

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className="
        bg-black text-white h-20 flex
        items-center justify-between px-8
        " >
            <div className="text-[40px] font-extrabold " >Logo</div>
            <button
                className="
            bg-[purple]
            py-[8px]
            px-[28px]
            rounded-[30px]
            text-[20px]
            font-bold
            transition-all
            duration-300
            hover:scale-[1.05]
                "

                onClick={() => {
                    dispatch(logOut())
                }}
            >Log Out</button>
        </div>
    )
}

export default Header