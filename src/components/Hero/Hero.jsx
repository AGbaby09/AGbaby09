import './Hero.css';
import homePNG from '../../assets/home_hero.png';
// import hello from '../../assets/.png';


const Hero = () => {

    return (
        <section id='Hero'>
            <h1 id="logo">AGBaby09</h1>
            <div className="HeroText">
                <h1>Crafting Digital Experiences: </h1>
                <h1>From <span className='frontend'>Frontend</span> Flourishes to <span className='backend'>Backend</span> Brilliance – </h1>
                <h1>Elevating Your Ideas into Seamless Solutions.</h1>
            </div>
            <div className="HeroIMG">
                <img src={homePNG} alt="" className='homeHero'/>
            </div>
        </section>
    )
}

export default Hero;