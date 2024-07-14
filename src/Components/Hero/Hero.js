import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'

const Hero = ({setHeroCount,heroData,heroCount,setPlayStatus,playStatus}) => {
    return(
      <>
          <div className='hero'>
            <div className='hero-text'>
                
            </div>

            <div className='hero-explore'>
              <p>Explore The Features</p>
               <img src={arrow_btn} alt='' />
             </div>

             <div className='hero-dot-play'>
              <ul className='hero-dots'>
                 <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                 <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot purple":"hero-dot"}></li>
                 <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot black":"hero-dot"}></li>
              </ul>
              <div className="hero-play">
                <img src={playStatus?pause_icon:play_icon} alt='' onClick={()=>setPlayStatus(!playStatus)} />
                  <p>See the video</p>
              </div>
             </div>
          </div>
      </>
    )
  }
  export default Hero