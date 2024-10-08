import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"


function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
const userInfo={
  fullname:data.fullname,
  email:data.email,
  password:data.password,
} 
await axios.post("http://localhost:4001/user/signup",userInfo)
.then((res)=>{
  console.log(res.data)
  if(res.data){
    alert("signup successfuly")
  }
  localStorage.setItem("Users",JSON.stringify (res.data.user));
}).catch((err)=>{
 if(err.response){
  console.log(err);
  alert("error:" + err.response.data.message);
 }
})
};
  return (
<>
<div className="flex h-screen items-center justify-center">
<div className=" w-[600px]">
  <div className=" modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className="mt-4 space-y-2">
    <span>Name</span><br/>
    <input type="text" placeholder="Enter your FullName"
     className="w-80 px-3 border rounded-md outline-none"
     {...register("fullname", { required: true })} 
/>
<br/>
    {errors.name && 
   ( <span className="text-red-500 text-sm">
      This field is required
      </span>)}

</div>
<div className="mt-4 space-y-2">
    <span>Email</span><br/>
    <input type="email"
     placeholder="Enter your email" 
     className="w-80 px-3 border rounded-md outline-none"
     {...register("email", { required: true })} />
<br/>
    {errors.email && 
   ( <span className="text-red-500 text-sm">
      This field is required
      </span>)}

</div>
<div className="mt-4 space-y-2">
    <span>Password</span><br/>
    <input type="Password"
     placeholder="Enter your Password" 
     className="w-80 px-3 border rounded-md outline-none"
     {...register("password", { required: true })} />
<br/>
    {errors.password && 
   ( <span className="text-red-500 text-sm">
      This field is required
      </span>)}

</div>
<div className="flex justify-around mt-4">
    <button className="bg-pink-500 duration-200 rounded-md text-white px-3 py-1 hover:bg-pink-900">
      Signup</button>
    <p>Have Account? 
      <button className=" cursor-pointer underline text-blue-500" 
      onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>
      <Login/>
      </p>
    </div> 
    </form>

 </div>
</div>
 </div>
</>
);
}


export default Signup;