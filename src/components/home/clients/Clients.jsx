import { clients } from "../../../assets/dummyData"

const Clients = () => {
  return (
    <div className="flex flex-col p-18 items-center justify-center gap-8">
        <p className="text-center">
            <p className="font-display2 text-[37px] font-semibold">WE WORK WITH TOP <span className="text-[#82631C]">CLIENTS</span> </p>
            <p className="text-[15px] font-normal">PARTNERS</p>
        </p>
        <div className="flex items-center justify-center gap-28 flex-wrap">
            {clients.map((client)=>(
                <div key={client.id}>
                    <img src={client.img} alt={""} />
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Clients