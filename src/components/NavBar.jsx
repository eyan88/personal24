

export default function NavBar() {
    return (
        <header className="fixed top-0 z-50 flex w-full justify-between px-4 py-3 md:px-16">
            <a href="#hero" className="text-tertiary-100 font-sentient font-normal text-2xl md:text-[32px]">
                Yan Wei Peng
            </a>
            <nav className="font-satoshi-regular space-x-7 pt-1 hidden md:inline-block md:text-text-body-2">
                <a href="#about" className="relative group">
                    <span className="">about</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[0.1rem] group-hover:w-full bg-tertiary-100 duration-300 opacity-30"></span>
                </a>
                <a href="#projects" className="relative group">
                    <span className="">projects</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[0.1rem] group-hover:w-full bg-tertiary-100 duration-300 opacity-30"></span>
                </a>
                <a href="#contact" className="relative group">
                    <span className="">contact</span>
                    <span className="absolute left-0 bottom-0 w-0 h-[0.1rem] group-hover:w-full bg-tertiary-100 duration-300 opacity-30"></span>
                </a>
            </nav>
        </header>
    )
}