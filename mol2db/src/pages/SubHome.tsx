


export default function SubHome() {
    return (
        <>
            <nav className=" bg-gray-100 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                    <div id="button-menu" className="flex items-center">
                        <div className="flex-shrink-0">
                        <a className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            RIZZODB</a>
                        </div>
                        <div className="hidden md:block">
                        <div  className="ml-10 flex items-baseline space-x-4">

                            <a href="#" id="lets_dock"
                            className="text-black hover:bg-gray-700 hover:text-white hover: px-3 py-2 rounded-md text-sm font-medium"
                            aria-current="page">Let's grab molecules</a>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </>
   )
}