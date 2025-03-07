import React from 'react'
import RevealOnScroll from '../RevealOnScroll';

const About = () => {

    const languages = ["Java", "JavaScript", "Node.JS", "HTML/CSS"];
    const frameworks = ["React.JS ", "Express.JS", "Tailwind CSS"];
    const developerTools = ["Git", "VS Code"];
    const libraries = ["Redux"];
    const databases = ["MongoDB"];
    const coreSubjects = ["DSA", "OS", "DBMS", "CN", "OOP", "COA"];

    return (
        <section id="about" className='min-h-screen flex items-center justify-center py-20'>

            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>About me</h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

                        <p className='text-gray-300 mb-6 font-serif flex justify-center text-2xl '>These are some of the Languages I Learned</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/*------------- Languages ---------------- */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/*------------- Frameworks ---------------- */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/*------------- Developer Tools ---------------- */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Developer Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {developerTools.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/*------------- Libraries ---------------- */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    {libraries.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/*------------- Databases ---------------- */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Databases</h3>
                                <div className="flex flex-wrap gap-2">
                                    {databases.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/*------------- Core Subjects ---------------- */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className='text-xl font-bold mb-4'>Core Subjects</h3>
                                <div className="flex flex-wrap gap-2">
                                    {coreSubjects.map((tech, key) => (
                                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className='text-xl font-bold mb-4'> 🏫Education🏫 </h3>
                            <ul className='list-disc list-inside text-gray-300 space-y-2'>
                                <li className='font-semibold'>Under Graduation: <br /><div className="pl-5">BTech in Computer Science <br /> SRM University (2022-2026)</div>  </li>
                                <li className='font-semibold'>High School: <br /><div className="pl-5">St. Anslem School, Jaipur <br /> PCM</div>  </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className='text-xl font-bold mb-4'> 💼Work Experience💼 </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className='font-semibold'> Fresher</h4>
                                    {/* <p>Developed and maintained microservices for cloud-based applications.</p> */ } 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>

        </section>
    )
}

export default About