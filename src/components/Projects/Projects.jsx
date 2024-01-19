import './Projects.css'
import ten from '../../assets/ten.png'
import avatar from '../../assets/avatar.png'
import tabbed from '../../assets/tabbed.png'
import art from '../../assets/art.png'

const Projects = () => {

    return (
        <section id="Projects">
            <div className="MyWorks">
                <p>Browse through my</p>
                <h1>Works</h1>
            </div>
            <div id="Works" className='scrollable'>
                <div className="work">
                    <p className="workTitle">Mila solves problems</p>
                    <img src={ten} alt="project preview" className="full" />
                    <button className="livePreview center">
                        <a href="" className='center'> Live Preview <i className='bx bx-link'></i>  </a> 
                    </button>
                    <button className="sourceCode center">
                        <a href="" className='center'><i className='bx bxl-github'></i> Source code </a> 
                    </button>
                </div>
                <div className="work">
                    <p className="workTitle">Simplest way to create forms</p>
                    <img src={avatar} alt="project preview" className="full" />
                    <button className="livePreview center">
                        <a href="https://google.com" target='blank' className='center'> Live Preview <i className='bx bx-link'></i>  </a> 
                    </button>
                    <button className="sourceCode center">
                        <a href="" className='center'><i className='bx bxl-github'></i> Source code </a> 
                    </button>
                </div>
                <div className="work">
                    <p className="workTitle">Fun, engaging, and authentic</p>
                    <img src={tabbed} alt="project preview" className="full" />
                    <button className="livePreview center">
                        <a href="" className='center'> Live Preview <i className='bx bx-link'></i>  </a> 
                    </button>
                    <button className="sourceCode center">
                        <a href="" className='center'><i className='bx bxl-github'></i> Source code </a> 
                    </button>
                </div>
                <div className="work">
                    <p className="workTitle">Art Director</p>
                    <img src={art} alt="project preview" className="full" />
                    <button className="livePreview center">
                        <a href="" className='center'> Live Preview <i className='bx bx-link'></i>  </a> 
                    </button>
                    <button className="sourceCode center">
                        <a href="" className='center'><i className='bx bxl-github'></i> Source code </a> 
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Projects;