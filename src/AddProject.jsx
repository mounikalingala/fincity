import img from './images/Vector (3).png'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import projectImg from "./images/Rectangle 7.png"
import ProjectsList from './ProjectsList'
import Contacts from './Contacts'

const projectsList = [
    {
        id: uuidv4(),
        projectName: "Tasty Kitchens",
        link: "https://mouniskitchen.ccbp.tech/login",
        image: { projectImg },
        description: "Tasty Kitchens is online food ordering and delivery platform, delivers the food from our favorite Resturats."
    },
    {
        id: uuidv4(),
        projectName: "App Store",
        link: "https://storapps.ccbp.tech/",
        image: { projectImg },
        description: "Appstore is a website which is a store for the several applications including social,games,news, and food."
    },
    {
        id: uuidv4(),
        projectName: "Openauto",
        link: "https://sage-genie-ffb86f.netlify.app/",
        image: { projectImg },
        description: "Openauto is a ride hailing website, we njoy the trip with a simple booking of a ride."
    },
    {
        id: uuidv4(),
        projectName: "Food Munch",
        link: "https://mounikafoods.ccbp.tech/",
        image: { projectImg },
        description: "Food munch is a ecomers food website, easy to order food from our favorite restaurants."
    },

]

console.log(projectsList)
const AddProject = () => {

    const [newProjectsList, setNewProjectsList] = useState(projectsList)
    const [projectName, setName] = useState("")
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")

    const onchangeName = (e) => {
        setName(e.target.value)
    }

    const onchangeLink = (e) => {
        console.log(setLink(e.target.value))
    }

    const onchangeDescription = (e) => {
        setDescription(e.target.value)
    }

    const addProject = (e) => {
        e.preventDefault()
        const { projectName,
            link,
            Description } = useState
        const newProject = {
            id: uuidv4(),
            projectName,
            link,
            image: { projectImg },
            Description,
        }
        setNewProjectsList((prev) => ({
            newProjectsList: [...prev.newProjectsList, newProject],
            projectName: setName(projectName),
            link: setLink(link),
            description: setDescription(description),
            image: { projectImg }
        }))

    }

    console.log(newProjectsList)


    return (
        <div className="flex flex-col items-center bg-blue-50 mt-12 lg:mt-0 lg:m-0">
            <h1 className="text-[#333333] font-playfair mt-[20px] text-3xl mb-0 font-bold">Add Project</h1>
            <div className="border-b-4 w-20 mt-0 p-2 border-[#FDC435] "></div>
            <form
                onSubmit={addProject}
                className="lg:m-8 m-12 p-8 lg:p-4 flex flex-col mt-8"
            >

                <label className="lg:text-md text-sm w-40 mt-4 mb-2 font-Comfortaa" htmlFor="name">Project Name</label>
                <input
                    id="name"
                    className="lg:w-[400px] lg:h-[40px] w-80 h-8 md:h-20 rounded-xl  border-2 border-[#E8ECF4] outline-none p-4 "
                    type="text"
                    value={projectName}
                    onChange={onchangeName} />
                <label className="lg:text-md text-sm  w-40 mb-2 mt-4 font-Comfortaa" htmlFor="link">Project link</label>
                <input
                    id="link"
                    type="url"
                    value={link}
                    className="lg:w-[400px] lg:h-[40px] w-80 h-8 rounded-xl border-2 border-[#E8ECF4] outline-none p-4 "
                    onChange={onchangeLink} />
                <label htmlFor="description" className="lg:text-md text-sm mb-2 w-40 mt-4 font-Comfortaa">Description</label>
                <input type="text" value={description} id="description" className="lg:w-[400px] lg:h-[40px] w-80 h-24 rounded-xl border-2 border-[#E8ECF4] outline-none p-4 mb-8"
                    onChange={onchangeDescription} />
                <button
                    className=" bg-[#FDC435] text-sm p-[10px] rounded-md mr-4 w-20 font-bold ml-60 lg:ml-80 "
                    type="submit">
                    Add
                </button>
            </form>
            <img src={img} alt='' />
            <div className="flex flex-col items-center bg-blue-50">
                <h1 className="text-[#333333] font-playfair mt-[20px] text-3xl mb-0 font-bold">Projects</h1>
                <div className="border-b-4 w-20 mt-0 p-2 border-[#FDC435] "></div>
            </div>
            <ul>
                {projectsList.map(eachList => (
                    <li>
                        <ProjectsList
                            key={eachList.id}
                            image={eachList.image.projectImg}
                            link={eachList.link}
                            description={eachList.description}
                            projectName={eachList.projectName} />
                    </li>
                ))}
            </ul>
            <Contacts />
            <img src={img} alt='' />
        </div>
    )
}
export default AddProject