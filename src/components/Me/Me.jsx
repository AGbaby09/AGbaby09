import './Me.css'
import pattern from '../../assets/backgroundpattern.png'
import portfolio1 from '../../assets/portfolio3.jpg'
import portfolio2 from '../../assets/portfolio.jpg'
import AboutMe from './AboutMe'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactIcon from '../../assets/react.svg'
import viteIcon from '/vite.svg'


const Me = () => {
    const [read, setRead] = useState('about')

    return (
        <section id='Me'>
            <div className="background">
                <img src={pattern} alt="pattern" className='full upDown'/>
            </div>
            <div className="codes">
                <div className="left side">
                    <div className="spEven">
                        <lord-icon
                            src="https://cdn.lordicon.com/ipbtscff.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/sjmgcire.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                    </div>
                    <div className="spEven">
                        <lord-icon
                            src="https://cdn.lordicon.com/qzhyovfj.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/wxwbdnuw.json"
                            trigger="loop"
                            state="hover-roll"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/ewvteifo.json"
                            trigger="loop"
                            state="hover-roll"
                            delay="2000">
                        </lord-icon>
                    </div>
                    <div className="spEven">
                        <lord-icon
                            src="https://cdn.lordicon.com/tmffjodc.json"
                            trigger="loop"
                            state="hover-roll"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/aqkujosf.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                    </div>
                    
                </div>
                <div className="right side">
                    <div className="spEven">
                        <lord-icon
                            src="https://cdn.lordicon.com/kgwqxfas.json"
                            trigger="loop"
                            state="hover-roll"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/rokunbup.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                    </div>
                    <div className="spEven">
                        <lord-icon
                            src="https://cdn.lordicon.com/ffoywhrm.json"
                            trigger="loop"
                            state="morph-code"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/blkavbjg.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/noklggsz.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                    </div>
                    <div className="spEven">
                        <lord-icon
                            src="https://cdn.lordicon.com/yypubrzc.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                        <lord-icon
                            src="https://cdn.lordicon.com/dqrpfjei.json"
                            trigger="loop"
                            delay="2000">
                        </lord-icon>
                    </div>
                    
                </div>
            </div>
            <div className="MyTitle">
                <p>Welcome to</p>
                <h1>Michael Agbotse's</h1>
                <p>Portfolio</p>
                <div className="options spEven">
                    <button className='center' onClick={()=>{setRead('about')}}>About Me</button>
                    <button className='center' onClick={()=>{setRead('skills')}}>Skills</button>
                    <button className='center' onClick={()=>{setRead('resume')}}>Resume</button>
                </div>
            </div>
            <div id="myOutlets">
                { read === 'about' ? (
                        <>
                            <div className="desc">
                                <h3>A little about me</h3>
                                <p>Meet the maestro behind the screen – a web wizard with a penchant for pixels and a keyboard in constant cahoots with creativity. By day, I’m a code conjurer, sculpting sleek and seamless interfaces that dance across your screen. By night, you’ll find me in a caffeine-induced coding trance, embracing the digital symphony of ones and zeros. When not immersed in the magical world of coding, I’m an avid explorer of art and food, a basketball and anime enthusiast, and an aspiring music director with love for the acoustic/lead guitar. Join me on this digital adventure, where lines of code meet laughter, and websites become whimsical wonders!</p>
                            </div>
                            <div className="photo one">
                                <img src={portfolio1} alt="portfolio" className='full'/>
                            </div>
                            <div className="photo two">
                                <img src={portfolio2} alt="portfolio" className='full'/>
                            </div>
                        </>
                    ) : read === 'skills' ? (
                        <>
                            <div className="skillTabs">
                                <div className="tab tab1">
                                    <div className="front end">
                                        <div className="heading center">
                                            <p className='head'>Frontend</p>
                                        </div>
                                        <div className="boding">
                                            <div className="icon">
                                                <img src={reactIcon} alt="" className="full" />
                                            </div>
                                            <div className="icon">
                                                <img src={viteIcon} alt="" className="full" />
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="html-5--v1" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/48/tailwindcss.png" alt="html-5--v1" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/nolan/64/bootstrap.png" alt="html-5--v1" className='full'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="back end">
                                        <div className="heading center">
                                            <p className='head'>Backend</p>
                                        </div>
                                        <div className="boding">
                                            <div className="icon">
                                                <img src="https://img.icons8.com/fluency/48/node-js.png" alt="html-5--v1" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/48/nodejs.png" alt="html-5--v1" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/nolan/64/express-js.png" alt="html-5--v1" className='full'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="db end">
                                        <div className="heading center">
                                            <p className='head'>DBMS</p>
                                        </div>
                                        <div className="boding">
                                            <div className="icon">
                                                <img src="https://img.icons8.com/plasticine/100/postgreesql.png" alt="html-5--v1" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/144/my-sql.png" className='full'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="other end">
                                        <div className="heading center">
                                            <p className='head'>Programming Languages</p>
                                        </div>
                                        <div className="boding">
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png" alt="java-logo" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/dusk/256/php-logo.png" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/3d-fluency/188/python.png" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/144/dart.png" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/color/144/c-programming.png" className='full'/>
                                            </div>
                                            <div className="icon">
                                                <img src="https://img.icons8.com/fluency/144/c-plus-plus-logo.png" className='full'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab tab2">
                                    <div className="midTab">
                                        <i className='bx bxs-badge-check'></i>
                                        <p>Experience</p>
                                        <h2>3+</h2>
                                        <p>years</p>
                                    </div>
                                    <div className="midTab">
                                        <i className='bx bx-male-female'></i>
                                        <p>Clients</p>
                                        <h2>23+</h2>
                                    </div>
                                    <div className="midTab">
                                        <i className='bx bxs-briefcase'></i>
                                        <p>Projects</p>
                                        <h2>7+</h2>
                                    </div>
                                </div>
                                <div className="tab tab3">
                                    <h3>About My Skills</h3>
                                    <p>
                                    As a seasoned full-stack developer, I bring a versatile set of skills to the digital table. Proficient in both front-end and back-end technologies, I wield the power of JavaScript and its frameworks for dynamic and responsive user interfaces. On the server side, my expertise extends to Java and Python, where I architect robust and scalable solutions. Navigating the depths of data structures and algorithms, C and C++ serve as my trusted companions for optimal system performance. In the mobile realm, Dart becomes the language of choice, allowing me to craft seamless cross-platform applications. With a keen eye for detail and a commitment to best practices, I seamlessly integrate these languages into a harmonious symphony of code, ensuring the delivery of high-quality, efficient, and scalable software solutions.
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : read === 'resume' ? (
                        <>
                            <div className="resumeTab center">
                                <button className="center resume">Download my Resume</button>
                            </div>
                        </>
                    ) : (<></>)
                }
            </div>
        </section>
    )
}

export default Me;