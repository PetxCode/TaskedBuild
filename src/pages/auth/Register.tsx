import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerAuth } from "../../api/authAPI"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    const model = yup.object({
        name: yup.string().required(),
        email: yup.string().required(),
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(model)
    })

    const onHandleSubmit = handleSubmit(async (res) => {
        const { name, email } = res
        console.log({ name, email })

        registerAuth({ name, email }).then(() => {
            navigate("/sign-in")
        })
    })

    return (
        <div className="flex items-center justify-center h-[100vh]">

            <form
                onSubmit={onHandleSubmit}
                className="w-[400px] border rounded min-h-[300px] flex flex-col items-center pt-8" >

                {/* inputs */}

                <div className="w-[90%] border h-[40px] flex items-center my-2 relative ">
                    <label className=" absolute top-[-10px] px-2 bg-white text-[10px] font-bold " >Name</label>

                    <BsFillPersonFill className="text-[silver] text-[30px] ml-2 " />
                    <input
                        className="flex-1 outline-none pl-4 "
                        placeholder="Enter Name"
                        {...register("name")}
                    />
                </div>

                {/* inputs */}

                <div className="w-[90%] border h-[40px] flex items-center my-2 relative ">
                    <label className=" absolute top-[-10px] px-2 bg-white text-[10px] font-bold " >Email</label>

                    <AiOutlineMail className="text-[silver] text-[30px] ml-2 " />
                    <input
                        className="flex-1 outline-none pl-4 "
                        placeholder="Enter Email"
                        {...register("email")}
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="bg-[purple] w-[90%] text-white h-[40px] rounded mt-6"
                >Register</button>
            </form>
        </div>
    )
}

export default Register