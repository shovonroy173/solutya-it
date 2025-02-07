const Adv = () => {
  return (
    <div className="flex bg-[#ECA76E] flex-col md:flex-row">
        <div className="sm:w-[700px]">
            <img src="adv.png" alt="" className="w-full h-full object-cover"/>  
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-center py-10 px-20 w-full justify-between">
            <div className="text-2xl font-semibold text-white text-center">
                <p>Looking For The Best</p>
                <p>Architecture Services</p>
            </div>
            <button className="bg-white px-3 py-2 rounded-md w-fit h-fit">Submit Request</button>
        </div>
    </div>
  )
}

export default Adv