import Video1 from '../assets/video1.mp4'
import Video2 from '../assets/video2.mp4'

function HeroSection(){
    return(
        <>
            <div className='flex flex-col items-center mt-6 lg:mt-20'>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wider">
                    VirtualR Build Tools 
                    <span className=' bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ml-5'>
                        For Developers
                    </span> 
                </h1>
                <p className=' text-center text-lg tracking-wider mt-10 text-neutral-500 max-w-4xl'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui repellendus sed obcaecati, distinctio laudantium quod cumque placeat veritatis laboriosam eveniet facere a tempore, ad nesciunt explicabo? Qui, nihil cumque!
                </p>
                <div className='flex justify-center my-10'>
                    <a href='#' className=' bg-gradient-to-r from-orange-500 to-orange-800 px-2 py-3 mx-3 rounded-md'>
                        Start for free
                    </a>
                    <a href='#' className=' px-2 py-3 rounded-md border'>
                        Documentation
                    </a>
                </div>
                <div className='flex justify-center mt-10 max-w-4xl'>
                    <video autoPlay loop muted 
                        className=' rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
                    >
                        <source src={Video1} type='video/mp4' />
                    </video>
                    <video autoPlay loop muted 
                        className=' rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'
                    >
                        <source src={Video2} type='video/mp4' />
                    </video>
                </div>
            </div>
        </>
    )
}

export default HeroSection