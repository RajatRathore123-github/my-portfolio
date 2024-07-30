
import cohere from "../assets/experience/cohere.png"
import lvlup from "../assets/experience/lvlup.png"
import wordquant from "../assets/experience/worldquant.png"
import marquee from "../assets/experience/marquee.png"
import infosys from "../assets/experience/infosys.png"
import finlatics from "../assets/experience/finlatics.png"

export default function Experience(){

    const experience = [
        {
            id: 1,
            src: cohere,
            title: "Mentee @ AI Alignment Cohort (BIRDS x Safety) "
        },
        {
            id: 2,
            src: lvlup,
            title: "Venture Scout"
        },
        {
            id: 3,
            src: wordquant,
            title: "Quantitative Researcher @ WorldQuant Brainz"
        },
        {
            id: 4,
            src: marquee,
            title: "Investment Banking Fellow"
        },
        {
            id: 5,
            src: infosys,
            title: "Project Intern"
        },
        {
            id: 6,
            src: finlatics,
            title: "Financial Analyst and Investment Banker"
        },
    ]
    return (
        <div name="Experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">
                        These are the places I have served
                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {experience.map(({ id, src, title }) => {
                    return (
                    <div key={id} className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img src={src} alt="" className="w-50 mx-auto"/>
                    <p className="mt-4">
                    {title}
                    </p>
                    </div>
                    
                )})}</div>
            </div>
        </div>
    )
}