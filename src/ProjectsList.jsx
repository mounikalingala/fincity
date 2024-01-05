

const ProjectsList = (props) => {
    const { projectName, link, description, image } = props
    return (
        <div className='bg-white md:w-[520px] mb-24 md:mb-0 h-96 w-80 md:h-60 lg:pl-4 md:rounded-tl-md rounded-tr-md rounded-tl-md md:rounded-bl-md flex flex-col md:flex-row mt-12'  >
            <div className="flex flex-col ml-8 md:mr-4 mb-4 md:mb-0" >
                <h1 className="text-[#333333] font-playfair mt-[20px] text-2xl md:text-4xl font-bold">{projectName}</h1>
                <p className="w-60 md:w-76 text-[#828282] font-nunito mt-[20px] mb-[20px] text-[12px] md:text-sm">{description}</p>
                <button type="button" className=" bg-transparent border-2 border-black text-sm p-[10px] rounded-full mr-4 w-28 font-bold"><a href={link}>View Project</a></button>
            </div>
            <div>
                <img src={image} className="md:w-120 md:h-120 h-60 w-96 ml-0 rounded-bl-md rounded-br-md md:rounded-tr-md md:rounded-br-md " alt='' />
            </div>
        </div>

    )
}

export default ProjectsList