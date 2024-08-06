"use client"
import { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    setMainTask([...mainTask , {title, desc}])
    settitle("")
    setdesc("")
  }
 const deleteHandler=(i)=>{
let copytask=[...mainTask]
copytask.splice(i,1)
setMainTask(copytask)
 }
  let renderTask=<h2>No Task Available!</h2>
 if(mainTask.length>0){
   renderTask =mainTask.map((t,i)=>{
    return(
 <li key={i} className="flex items-center justify-between">
  <div className=" justify-between">
  <h5 className='font-bold'>{t.title}</h5>
  <p className=" justify-between">{t.desc}</p>
</div>
<button
onClick={()=>{
  deleteHandler(i)
}}
 className="bg-red-400 rounded px-4 py-2 font-bold text-white mb-3">Delete</button>
</li>
    );
  });
 }
 
  return (
   <>
   <h1 className='h-6 bg-black hover:bg-white text-white hover:text-black text-center'>Palak's todo list</h1>

   <form
   onSubmit={submitHandler}>
    <input type="text"className='text-2xl border-zinc-800 border-4 m-2 px-4 py-2 rounded'
    placeholder="Enter Task Here"
    value={title}
    onChange={(e)=>{
      settitle(e.target.value);
    }}
     />

    <input type="text"className='text-2xl border-zinc-800 border-4 m-2 px-4 py-2 rounded'
    placeholder="Enter Description Here"
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value);
    }} />
    
    <button className="bg-black  text-white  px-4 py-2 text-bold rounded m-5">Add Task</button>
   </form>
   <hr />
   <div className="p-8 bg-slate-200">
    <ul>
      {renderTask}
    </ul>
   </div>
   </>
  )
}

export default page
