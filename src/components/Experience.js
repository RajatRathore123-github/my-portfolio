import Gssoc from "../assets/experience/Gssoc.png"

export default function Experience(){

    const experience = [
        {
            id: 1,
            src: "",
            title: ""
        },
        {
            id: 2,
            src: "",
            title: ""
        },
        {
            id: 3,
            src: "",
            title: ""
        },
    ]
    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
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
                    <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg">
                    <img src={Gssoc} alt="" className="w-50 mx-auto"/>
                    <p className="mt-4">
                        Tempor sunt cillum nisi aute dolore deserunt consequat laboris. Sint excepteur dolor mollit amet nostrud eiusmod ut sit nisi esse sit in magna. Ex qui veniam cillum ullamco magna id voluptate velit velit aute in non qui mollit. Dolore adipisicing tempor velit consequat consectetur.
                    </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}