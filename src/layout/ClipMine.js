import './style.scss';
import clipMineLogo from '../assets/clip-mine-logo.png';
import topSection from '../assets/top-section.jpg';
import videoJobsGates from '../assets/video-jobs-gates.png';
import { AiOutlineSearch, AiFillCaretDown } from 'react-icons/ai';
import { BsFillTagFill } from 'react-icons/bs';
import { RiShareForwardFill } from 'react-icons/ri';
import { FaMagnet } from 'react-icons/fa';
import videoRonConway from '../assets/video-ronconway.png';
import videoFallout from '../assets/video-fallout.png';
import meaningfulSharing from '../assets/meaningful-sharing.png';
import smartTagging from '../assets/smart-tagging.png';
import interactiveEmbeds from '../assets/interactive-embeds.png'
import benefitAnalytics from '../assets/benefit-analytics.png';
import benefitPersonal from '../assets/benefit-personal.png';
import benefitEngagement from '../assets/benefit-engagement.png';
import collectionML from '../assets/collection-ml.png';
import collectionStartup from '../assets/collection-startup.png';
import partner500 from '../assets/partner-500.png';
import partnerCV from '../assets/partner-cv.png';
import partnerUCF from '../assets/partner-ucf.png';
import partnerBothside from '../assets/partner-bothside.png';
import partnerBlackbox from '../assets/partner-blackbox.png';
import partnerYC from '../assets/partner-yc.png';
import platformYoutube from '../assets/platform-youtube.png';
import platformDailymotion from '../assets/platform-dailymotion.png';
import platformVimeo from '../assets/platform-vimeo.png';
import platformHTML5 from '../assets/platform-html5.png';

const ClipMine = () => {
    return (
        <div>
            <div className='header'>
                <div className='left-container'>
                    <img src={clipMineLogo}/>
                    <span>Home</span>
                    <span className='icon-label'>Help<AiOutlineSearch/></span>
                    <span className='icon-label'>Search<AiFillCaretDown/></span>
                </div>
                <div className='right-container'>
                    <span>Blog</span>
                    <span>Log In</span>
                    <span>Sign Up</span>
                </div>
            </div>
            <div className='top-section'>
                <img src={topSection}/>
                <div className='sign-up-section'>
                    <span>A Better Video Experience for the Web</span>
                    <span className='clip-mine-info'>ClipMine enables bloggers, creators and enthsiasts to tag content inside online videos and create a more engaging video experience.</span>
                    <button>SIGN UP</button>
                </div>
            </div>
            <div className='video-section'>
                <span className='video-section-heading'>Help you reviewers discover what matters most to them!</span>
                <div className='videos-list'>
                    <div className='video-container'>
                        <img src={videoJobsGates}/>
                        <span>@01:07:45 The greatest thing about Bill and Steve's relationship</span>
                        <div className='like-share-info'>
                            <span className='icon-label'><BsFillTagFill/>7 people tagged</span>
                            <span className='icon-label share-label'><RiShareForwardFill/>290</span>
                        </div>
                        <div className='buttons-container'>
                            <button><FaMagnet/>Embed</button>
                            <button class='share-button'><RiShareForwardFill/>Share</button>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={videoRonConway}/>
                        <span>@07:03 The greatest con man in American history</span>
                        <div className='like-share-info'>
                            <span className='icon-label'><BsFillTagFill/>3 people tagged</span>
                            <span className='icon-label share-label'><RiShareForwardFill/>107</span>
                        </div>
                        <div className='buttons-container'>
                            <button><FaMagnet/>Embed</button>
                            <button class='share-button'><RiShareForwardFill/>Share</button>
                        </div>
                    </div>
                    <div className='video-container'>
                        <img src={videoFallout}/>
                        <span>@05:34 The 2nd screen experience from a gamer's perspective</span>
                        <div className='like-share-info'>
                            <span className='icon-label'><BsFillTagFill/>21 people tagged</span>
                            <span className='icon-label share-label'><RiShareForwardFill/>300</span>
                        </div>
                        <div className='buttons-container'>
                            <button><FaMagnet/>Embed</button>
                            <button class='share-button'><RiShareForwardFill/>Share</button>
                        </div>
                    </div>
                </div>
                <span className='video-section-footer'>ClipMine works great for sharing and embedding recorded video-game sessions, turtorials, product reviews, talk shows, speeches, lectures and sport coverage. Tryout more samples!</span>
            </div>
            <div className='feature-section'>
                <span className='feature-section-heading'>Features</span>
                <div className='features-list'>
                    <div className='feature-container'>
                        <img src={meaningfulSharing}/>
                        <span className='feature-heading'>Meaningful Sharing</span>
                        <span>ClipMine works great for sharing and embedding recorded video-game sessions, turtorials, product reviews, talk shows, speeches, lectures and sports coverage. Try out more samples!</span>
                    </div>
                    <div className='feature-container'>
                        <img src={interactiveEmbeds}/>
                        <span className='feature-heading'>Interactive Embeds</span>
                        <span>ClipMine works great for sharing and embedding recorded video-game sessions, turtorials, product reviews, talk shows, speeches, lectures and sports coverage. Try out more samples!</span>
                    </div>
                    <div className='feature-container'>
                        <img src={smartTagging}/>
                        <span className='feature-heading'>Smart Tagging</span>
                        <span>ClipMine works great for sharing and embedding recorded video-game sessions, turtorials, product reviews, talk shows, speeches, lectures and sports coverage. Try out more samples!</span>
                    </div>
                </div>
            </div>
            <div className='benefit-section'>
                <span className='benefit-section-heading'>Benefits</span>
                <div className='benefits-list'>
                    <div className='benefit-container'>
                        <img src={benefitPersonal}/>
                        <div class='benefit-details'>
                            <span className='benefit-heading'>Personalized Experience</span>
                            <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span>
                        </div>
                    </div>
                    <div className='benefit-container'>
                        <img src={benefitEngagement}/>
                        <div class='benefit-details'>
                            <span className='benefit-heading'>Improved Engagement</span>
                            <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span>
                        </div>
                    </div>
                    <div className='benefit-container'>
                        <img src={benefitAnalytics}/>
                        <div class='benefit-details'>
                            <span className='benefit-heading'>Actionable Analytics</span>
                            <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='video-collection'>
                <span className='video-collection-heading'>ClipMine Video Collections</span>
                <div className='collections-list'>
                    <div className='collection-container'>
                        <img src={collectionStartup}/>
                        <span>STARTUPS</span>
                    </div>
                    <div className='collection-container'>
                        <img src={collectionML}/>
                        <span>MACHINE LEARNING</span>
                    </div>
                </div>
                <span className='video-collection-footer'>These are curated lists of high quality online videos, tagged by ClipMine's smart algos and editors to demonstrate the usefulness of ClipMine.</span>
            </div>
            <div className='clipmine-users-section'>
                <span className='users-section-heading'>Who's using ClipMine?</span>
                <div className='users-list'>
                    <img src={partnerYC}/>
                    <img src={partnerBlackbox}/>
                    <img src={partnerUCF}/>
                    <img src={partner500}/>
                    <img src={partnerBothside}/>
                    <img src={partnerCV}/>
                </div>
            </div>
            <div className='tag-section'>
                <span className='tag-heading'>What would you like to tag?</span>
                <div className='tag-input'>
                    <input placeholder='Paste a YouTube, Vimeo or Dailymotion video URL'/>
                    <button>TAG NOW</button>
                </div>
            </div>
            <div className='supported-platform-section'>
                <span className='supported-platform-heading'>Supported Platforms</span>
                <div className='platforms-list'>
                    <img src={platformYoutube}/>
                    <img src={platformVimeo}/>
                    <img src={platformDailymotion}/>
                    <img src={platformHTML5}/>
                </div>
            </div>
            <div className='footer'>
                <div className='nav-bar'>
                    <a href='#'>Contact Us</a>
                    <a href='#'>About ClipMine</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Help Center</a>
                </div>
                <span className='copyrights'>
                    <a href='#'>© 2016 ClipMine, Inc.</a>|<a href='#'> Terms of Use </a>|<a href='#'>Privacy Policy</a>
                </span>
            </div>
        </div>
    )
}
export default ClipMine;