import heroChild from "../../assests/herochild.jpg";
function HeroSection(){
    return(
        <div className="group relative h-[67vh] min-h-105 w-full overflow-hidden">
            <img
            src={heroChild}
            alt="Child and healthcare"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 z-1 bg-[linear-gradient(90deg,rgba(0,70,55,0.65),rgba(0,90,65,0.25))]"></div>
            <div className="absolute inset-0 z-20 flex w-[67%] flex-col justify-center px-[10%] text-xl text-white">
                <h1 className="mb-5 text-[50px] font-bold font-serif"> Every Child. Every Dose. On Time.</h1>
                <p className="mb-7 leading-relaxed font-serif">We provide a comprehensive, human-centered platform to empower health workers and improve community care outcomes.</p>
            </div>
        </div>
    )
}

export default HeroSection