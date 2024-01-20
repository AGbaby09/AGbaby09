import './Contact.css'
import adminBG from '../../assets/minimal_dashboard.png'
import arrow from '../../assets/arrow.png'

const Contact = () => {

    return (
        <section id="Contact">
            <div id="contactBG">
                <img src={adminBG} alt="" className="full" />
            </div>
            <div id="content">
                <h1>Turning Vision into Digital Reality: Your Ideas, Elevated. Let's Connect for Tailored Full-Stack Development Solutions.</h1>
                <button className='center'>Let's talk</button>
                
                <form>
                    <input type="text" placeholder='Enter your email'/>
                    <textarea name="" id="" cols="50" rows="10" placeholder='Enter your message' />
                    <button>Send a message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact