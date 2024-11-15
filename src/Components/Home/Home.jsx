import logo from '../../assets/avataaars.svg'
export default function Home() {
  return (
    <div className="bg-teal-400 h-[100vh] flex justify-center items-center pt-10 relative">
      <div className="flex-col">
        <img className='w-60 mx-auto' src={logo} alt="" />
      <h2 className='font-bold text-white text-center mt-8 text-3xl lg:text-4xl tracking-wide'>START FRAMEWORK</h2>
     <div className=" flex justify-center mt-2 gap-2">
     <hr className='w-24 mt-2 border-t-4' />
     <i className="fa-solid fa-star text-white"></i>
     <hr className='w-24 mt-2 border-t-4' />
     </div>
     <p className='text-white text-center mt-3 font-medium'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>

  )
}
