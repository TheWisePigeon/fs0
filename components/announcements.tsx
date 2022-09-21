import { useState } from "react"

export default function Announcements(){
    const currentAnnouncement = useState(0)


    return (
        <div className=" m-auto w-3/5 h-40 lg:w-96">
            <div>
                <img src="https://picsum.photos/200/200" className=" lg:w-96" alt="" />
            </div>
            <div className=" flex justify-between ">
                <button>
                    {"<"}
                </button>
                <button>
                    {">"}
                </button>
            </div>
        </div>
    )
}