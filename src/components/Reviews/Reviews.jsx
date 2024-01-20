import { useContext } from 'react';
import './Reviews.css'
import ContextVariales from '../../context/contextVariables';

const Reviews = () => {
    const {setCallReview} = useContext(ContextVariales)

    return (
        <section id="Reviews" className='contact'>
            <form>
                <button className="close" onClick={(e)=>{e.preventDefault();setCallReview(false)}}>
                    <i className="bx bx-x"></i>
                </button>
            </form>
        </section>
    )
}

export default Reviews;