import './Me.css'
import pattern from '../../assets/backgroundpattern.png'
import portfolio1 from '../../assets/portfolio3.jpg'
import portfolio2 from '../../assets/portfolio.jpg'

const Me = () => {

    return (
        <section id='Me'>
            <div className="background">
                <img src={pattern} alt="" className='full upDown'/>
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
                    <button className='center'>About Me</button>
                    <button className='center'>Skills</button>
                    <button className='center'>Resume</button>
                </div>
            </div>
            <div id="myOutlets">
                <div className="desc">
                    <h3>A little about me</h3>
                    <p>Meet the maestro behind the screen – a web wizard with a penchant for pixels and a keyboard in constant cahoots with creativity. By day, I’m a code conjurer, sculpting sleek and seamless interfaces that dance across your screen. By night, you’ll find me in a caffeine-induced coding trance, embracing the digital symphony of ones and zeros. When not immersed in the magical world of coding, I’m an avid explorer of art and food, a basketball and anime enthusiast, and an aspiring music director with love for the acoustic/lead guitar. Join me on this digital adventure, where lines of code meet laughter, and websites become whimsical wonders!</p>
                </div>
                <div className="photo one">
                    <img src={portfolio1} alt="" className='full'/>
                </div>
                <div className="photo two">
                    <img src={portfolio2} alt="" className='full'/>
                </div>
            </div>
        </section>
    )
}

export default Me;