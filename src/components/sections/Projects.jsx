import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const Projects = () => {
    return (
        <section id="projects" className='min-h-screen flex items-center justify-center py-20'>

            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/*--------- E-Commerce Project----------- */}
                        <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'>
                            <h3 className='text-xl font-bold mb-2'>E-Commerce</h3>
                            <p className='text-gray-400 mb-4'>Full Stack E-Commerce Website [MERN] </p>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>Developed a comprehensive e-commerce web application </li>
                                <li>Created a responsive shopping cart allowing item <span className="pl-5"> additions, removals, and quantity adjustments.</span></li>
                                <li>Integrated Razorpay, Stripe, and COD payment methods <span className="pl-5">for a seamless and flexible checkout experience.</span> </li>
                            </ul>
                            <div className='flex flex-wrap gap-2 mb-2 pt-4'>
                                {["MongoDB", "Express.js", "React", "Node.js", "TailWind CSS", "Axios", "Cloudinary", "Mongoose"].map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://e-commerce-website-frontend-0ofq.onrender.com" target="_blank" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project → </a>
                            </div>

                        </div>

                        {/*--------- Netflix Clone ----------- */}
                        <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'>
                            <h3 className='text-xl font-bold mb-2'>Netflix Clone</h3>
                            <p className='text-gray-400 mb-4'>FrontEnd Clone Of Netflix Website</p>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>Built a Netflix-Inspired Web App . </li>
                                <li>Designed a Visually appealing and Responsive UI.</li>
                                <li>Focused on optimizing UI components for better User <span className="pl-5">experience.</span>  </li>
                            </ul>
                            <div className='flex flex-wrap gap-2 mb-2 pt-4'>
                                {["React", "TailWind CSS", "React-Router-DOM"].map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://netflix-clone-m3iana27l-shashwat-saxenas-projects-507b56ac.vercel.app" target="_blank" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project → </a>
                            </div>

                        </div>

                        {/*--------- GeekyCodeWorld_Clone ----------- */}
                        <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'>
                            <h3 className='text-xl font-bold mb-2'>GeekyCodeWorld_Clone</h3>
                            <p className='text-gray-400 mb-4'>FrontEnd Clone Of GeeksforGeeks Website</p>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>Built a GeeksforGeeks Website Frontend </li>
                                <li>Designed a Visually appealing and Responsive UI.</li>
                                <li>Focused on optimizing UI components for better User <span className="pl-5">experience.</span>  </li>
                            </ul>
                            <div className='flex flex-wrap gap-2 mb-2 pt-4'>
                                {["React", "TailWind CSS", "React-Router-DOM"].map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://geeky-code-world-clone.vercel.app/" target="_blank" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project → </a>
                            </div>

                        </div>

                                {/*
                               
                        <div className='p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]'>
                            <h3 className='text-xl font-bold mb-2'>Weather App</h3>
                            <p className='text-gray-400 mb-4'>A Climate App made Using Javascript and API</p>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li>Fetches live weather updates using the OpenWeather API </li>
                                <li>Displays temperature, humidity, wind speed, and Weather <span className="pl-5"> Icons based on API response.</span></li>
                                <li>Users can check the weather for any city by entering its <span className="pl-5">name.</span>   </li>
                            </ul>
                            <div className='flex flex-wrap gap-2 mb-2 pt-4'>
                                {["JavaScript", "HTML", "CSS"].map((tech, key) => (
                                    <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project → </a>
                            </div>

                        </div>

                                */}
                        
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    )
}

export default Projects