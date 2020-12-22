import React    from "react";
import ReactDOM from 'react-dom'
import './InfoSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap}  from '@fortawesome/free-solid-svg-icons';
import BatFace from './img/batFace.png';
import Chosen from './img/ETC.png';
import Marvel from './img/Marvel.png';
import Siemens from './img/siemens.png';
import SkillsFund from './img/skills.png';
import Mlb from './img/MLB.png';
import $ from 'jquery';



const InfoSection = () => {
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 1000);
        });
    });
    
  
  return (
<div class="infoSection">
<div class="container sections-wrapper">
        <div class="row">
            <div class="primary col-lg-8 col-12">
                <section class="about section">
                    <div class="section-inner">
                        <h2 class="heading">About Me</h2>
                        <div class="content">
                            <p>A passionate and experienced developer that loves every aspect of web development. 
                                Fast and eager learner and a reliable team member that will stand behind his work. 
                                I am very skilled with HTML, Sass, CSS, jQuery, Bootstrap and JavaScript. I have over five years of experience with each of these technologies, and I’m eager to learn even more languages and frameworks to sharpen my skills. In addition to web technologies, I’m skilled in frameworks such as AngularJS and ReactJS. </p>
                        </div>
                    </div>       
                </section>
               <section class="latest section">
                    <div class="section-inner">
                        <h2 class="heading">Latest Projects</h2>
                        <div class="content">                   
                            <div class="item featured text-center">
                                <div class="featured-image">
                                    <a href="https://new.siemens.com/us/en/products/buildingtechnologies/home.html" >
                                    <img class="img-fluid project-image" style={{height: '100px'}} src={Siemens} alt="project name" />
                                    </a>
                                </div>
                                <div class="desc text-center">                                   
                                    <p>Currently, I am working on implementing feature requests and updates to our web configuration tool. This tool is used to configure our client's HVAC/Lighting setpoints and schedules.
                                        This tool was built in AngularJS.
                                    </p>
                                </div>                   
                            </div>
                            <hr class="divider" />
                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://github.com/bttodd11/SkillsFund">
                                <img class="img-fluid project-image" src={SkillsFund} alt="project name" />
                                </a>
                                <div class="desc text-md-left col-md-8 col-12">
                                    <h3 class="title"><a href="https://github.com/bttodd11/SkillsFund">Skills Fund Mock Up</a></h3>
                                    <p class="mb-2">This is a mockup site that I created for the company during an interview. The company wanted a strategically designed site to get customer to sign up for their mailing list. I utilized bootstrap and jQuery for this site.</p>
                                </div>                        
                            </div>
                            
                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://github.com/bttodd11/Ballot">
                                <img class="img-fluid project-image" src={Mlb} alt="project name" />
                                </a>
                                <div class="desc text-md-left col-md-8 col-12">
                                    <h3 class="title"><a href="https://github.com/bttodd11/Ballot">Gary Sheffield MLB Ballot</a></h3>
                                    <p class="mb-2">This is a ballot to get Gary Sheffield's name into the MLB hall of fame. With this project, I wanted to test using a database and also wanted to try out PHP. I used MySQL and was able to push and get data from users that signed the ballot.</p>
                                </div>                        
                            </div>

                            <div class="item row">
                                <a class="col-md-4 col-12" href="https://github.com/bttodd11/EricTheChosen">
                                <img class="img-fluid project-image" src={Chosen} alt="project name" />
                                </a>
                                <div class="desc text-md-left col-md-8 col-12">
                                    <h3 class="title"><a href="https://github.com/bttodd11/EricTheChosen">EricTheChosen</a></h3>
                                    <p class="mb-2 ">This is a site that I made for hip-hop artist EricTheChosen. I was given free reign to build the site with just being given content to use. I used JavaScript, Bootstrap and Sass on this site.</p>
                                </div>                        
                            </div>
                            <div class="item row">
                                <a class="col-md-4 col-12">
                                <img class="img-fluid project-image" src={Marvel} alt="project name" />
                                </a>
                                <div class="desc text-md-left col-md-8 col-12">
                                    <h3 class="title"><a href="https://bttodd11.github.io/marvelDatabase/">Marvel Database</a></h3>
                                    <p class="mb-2">This is a database I am working on using the Marvel developer API. It will take an input and return the Marvel character that is selected.</p>
                                </div>                       
                            </div>
                            <div class="item row">
                                <a class="col-md-4 col-12">
                                <img class="img-fluid project-image" src={BatFace} alt="project name" />
                                </a>
                                <div class="desc text-md-left col-md-8 col-12">
                                    <h3 class="title"><a href="https://rocky-carrot-d1st1d3bpo.glitch.me/">Chiroptophobia</a></h3>
                                    <p class="mb-2">This is a falling dot game I made in Glitch for a interview process with a company. This game was made with VanillaJS and CSS.</p>
                                </div>                         
                            </div>  
                        </div>
                    </div>              
                </section>
                <section class="experience section">
                    <div class="section-inner">
                        <h2 class="heading">Work Experience</h2>
                        <div class="content">
                            <div class="item">
                                <h3 class="title">Software Developer - <span class="place"><a>Siemens</a></span> <span class="year">(2014 - Present)</span></h3>
                            <ul>
                                <li>
                                    Developed and implemented feature requests made by the operations team to make tasks easier, these features were
                                    made using AngularJS and helped with standardizing globals to eliminate user error.
                                </li>
                                <li>
                                    Became proficient with command-line tools such as Git for version control and collaboration.
                                </li>
                                <li>
                                    Refactored previous application code for readability to ensure that the code was precise and easy to follow for all developers.
                                </li>
                                <li>
                                    Validated user input client-side by creating JavaScript functions to test inputs and alert users when passed data is not valid.
                                </li>
                                <li>
                                    Created training documentation for feature/software releases and presented this information to the operations team.
                                </li>
                                <li>
                                    Contributed to the product roadmap for future software releases by presenting a business case on how the new features can generate revenue and cut down operational cost.
                                </li>
                                <li>
                                    Gave weekly updates to engineering to make certain that the software is compliant with the client's needs. 
                                </li>
                            </ul>
                            </div>
    
                            
                        </div>
                    </div>               
                </section>
            </div>
            <div class="secondary col-lg-4 col-12">
                 <aside class="info aside section">
                    <div class="section-inner">
                        <h2 class="heading sr-only">Basic Information</h2>
                        <div class="content">
                            <ul class="list-unstyled">
                                <li><span class="">Location:</span> Austin, Texas</li>
                                <li><span class="">Email:</span><a> bttodd@icloud.com</a></li>
                            </ul>
                        </div>
                    </div>             
                </aside>
                
                <aside class="skills aside section">
                    <div class="section-inner">
                        <h2 class="heading">Skills</h2>
                        <div class="content">
                            <div class="skillset">
                                <div class="item">
                                    <h3 class="level-title">Javascript &amp; jQuery<span class="level-label"  data-placement="left" data-animation="true"><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar">
                                        <div class="level-bar-inner" data-level="96%">
                                        </div>                                      
                                    </div>                             
                                </div>
                                <div class="item">
                                    <h3 class="level-title">HTML, CSS, SASS &amp; LESS<span class="level-label"  data-placement="left" data-animation="true"><i class="fas fa-info-circle"></i>Expert</span></h3>
                                    <div class="level-bar">
                                        <div class="level-bar-inner" data-level="96%">
                                        </div>                                      
                                    </div>                       
                                </div>
                                
                                <div class="item">
                                    <h3 class="level-title">Java<span class="level-label" data-placement="left" data-animation="true" ><i class="fas fa-info-circle"></i>Novice</span></h3>
                                    <div class="level-bar">
                                        <div class="level-bar-inner" data-level="30%">
                                        </div>                                      
                                    </div>                                
                                </div>
                                
                            </div>              
                        </div>
                    </div>         
                </aside>
                <aside class="education aside section">
                    <div class="section-inner">
                        <h2 class="heading">Education</h2>
                        <div class="content">
                            <div class="item">                      
                                <h3 class="title"><FontAwesomeIcon icon={faGraduationCap} /> BA Computer Information Systems</h3>
                                <h4 class="university"> University of Mary Hardin - Baylor</h4>
                            </div>
                            <div class="item">
                                <h3 class="title"><FontAwesomeIcon icon={faGraduationCap} /><></> Full-Stack Developer Certificate</h3>
                                <h4 class="university">Austin Coding Academy </h4>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</div>



  )

}

export default InfoSection;
