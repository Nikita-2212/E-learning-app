import React from 'react'
import list from "../../public/list.json"
import Cards from "../components/Cards"
import {Link} from "react-router-dom"
function Course() {
  return (
<>
<div className=" max-w-screen-2xl container mx-auto md:px-20">
<div className="mt-28 items-center">
  <h1 className=" text-2xl font-semibold md:text-4xl">We are Delighted to have you <span className="text-pink-500">here !</span> </h1>
<p className="mt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A eveniet iusto alias aspernatur doloribus cumque quis illo architecto. Nisi in doloribus quasi inventore tenetur fuga nobis cum laboriosam dignissimos amet!</p>
<Link to="/">
<button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-950 duration-300 mt-6">Back</button>

</Link>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
  {
    list.map((item)=>(
      <Cards key={item.id }item={item}/>
    ))
  }
</div>
</div>
</>
  )
}

export default Course