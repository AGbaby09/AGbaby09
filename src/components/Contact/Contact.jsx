import './Contact.css'
import adminBG from '../../assets/minimal_dashboard.png'
import arrow from '../../assets/arrow.png'
import { useContext } from 'react'
import ContextVariales from '../../context/contextVariables'

const Contact = () => {
    const {setCallReview, setCallTalk} = useContext(ContextVariales)

    return (
        <section id="Contact">
            <div id="contactBG">
                <img src={adminBG} alt="" className="full" />
            </div>
            <div id="content">
                <h1>Turning Vision into Digital Reality: Your Ideas, Elevated. Let's Connect for Tailored Full-Stack Development Solutions.</h1>
                <button className='center' onClick={()=>{setCallTalk(true)}}>Let's talk</button>
                <h2>If you've got this far, please</h2>
                <button className='center btn1' onClick={()=>{setCallReview(true)}}>Review my Portfolio</button>
            </div>
        </section>
    )
}

export default Contact