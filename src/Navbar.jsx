const Navbar = () => {
    return (
        <div>
            <div className="bg-white m-8">
                <div className='flex flex-row justify-between'>
                    <h1 className="text-[#25282B] font-Comfortaa">Mounika Lingala</h1>
                    <div className=''>
                        <a href='/about' className="">About</a>
                        <a href='/projects' className="ml-4 mr-4">projects</a>
                        <a href='/contacts'>Contacts</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar