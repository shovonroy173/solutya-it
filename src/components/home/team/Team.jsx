const Team = () => {
  return (
    <div className="p-18">
        <div className="flex flex-col gap-5 items-center">
            <div className="relative w-[300px] h-[400px]">
                <div className="w-full h-full">
                    <img src="team-1.jpeg" alt="" className="w-full h-full rounded-md object-cover"/>
                </div>
                
                <div className="w-[280px] h-[380px] bg-[#B68053] rounded-md absolute -bottom-3 -left-3 -z-10"></div>
            </div>
            <div className="flex flex-col items-center">
            <p className="text-[24px] font-semibold">Ronald Richards</p>
            <p className="text-[14px]">Web Designer</p>
            </div>
            
        </div>
        
    </div>
  )
}

export default Team