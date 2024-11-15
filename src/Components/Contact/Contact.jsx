

export default function Contact() {
  return (
    <section className="pb-5">
              <div className="pt-36">
    <div className="">
      <h2 className="font-bold text-slate-700 text-center text-3xl lg:text-4xl tracking-wide uppercase">conatct section</h2>
      <div className=" flex justify-center mt-2 gap-2">
     <hr className='w-24 mt-2 border-t-4 border-slate-700' />
     <i className="fa-solid fa-star text-slate-700"></i>
     <hr className='w-24 mt-2 border-t-4 border-slate-700' />
     </div>
    </div>
    </div>
    <div className="lg:w-[50%] mx-auto md:w-[90%] px-5 pt-28">
    <label form="userName" className="text-teal-400 "></label>
    <input id="userName" type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" placeholder="userName"/>
    </div>
    <div className="lg:w-[50%] mx-auto md:w-[90%] px-5 pt-12">
    <label form="userAge" className="text-teal-400 "></label>
    <input id="userAge" type="number" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" placeholder="userAge"/>
    </div>
    <div className="lg:w-[50%] mx-auto md:w-[90%] px-5 pt-12">
    <label form="userEmail" className="text-teal-400 "></label>
    <input id="userEmail" type="email" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" placeholder="userEmail"/>
    </div>
    <div className="lg:w-[50%] mx-auto md:w-[90%] px-5 pt-12">
    <label form="userPassword" className="text-teal-400 "></label>
    <input id="userPassword" type="text" className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" placeholder="userPassword"/>
    </div>
    <div className="flex items-center justify-center pt-7">
       <button type="button" className="px-7 py-3 bg-teal-400 border-teal-400 text-white font-semibold rounded-md ">Send Messege</button>
    </div>
    </section>
  )
}
