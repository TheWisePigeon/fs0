export default function Menu(){
    return(
        <>
            <div className=" absolute right-0 flex flex-col h-[700px] justify-center gap-5 px-2 z-20 ">
                <button className=" lg:text-2xl lg:p-3 cta-btn">Formations</button>
                <button className=" lg:text-2xl lg:p-3 cta-btn">Produits</button>
                <button className=" lg:text-2xl lg:p-3 cta-btn">Recettes</button>
            </div>
        </>
    )
}