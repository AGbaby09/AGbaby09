import './Talk.css'
import { useContext } from 'react';
import ContextVariales from '../../context/contextVariables';

const Talk = () => {
    const {setCallTalk} = useContext(ContextVariales)

    return (
        <section id="Talk" className='contact'>
            <form>
                <button className="close" onClick={(e)=>{e.preventDefault();setCallTalk(false)}}>
                    <i className="bx bx-x"></i>
                </button>
            </form>
        </section>
    )
}

export default Talk;