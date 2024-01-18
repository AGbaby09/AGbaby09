import './Hero.css';
import homePNG from '../../assets/home_hero.png';
// import hello from '../../assets/.png';


const Hero = () => {

    return (
        <section id='Hero'>
            <img src={homePNG} alt="" className='homeHero'/>
            {/* <img src={hello} alt="" className="hello" /> */}
            <div className="HeroText">
                <h1>Crafting Digital Experiences: </h1>
                <h1>From Frontend Flourishes to Backend Brilliance – </h1>
                <h1>Elevating Your Ideas into Seamless Solutions.</h1>
            </div>
        </section>
    )
}

export default Hero;