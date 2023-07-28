import React from 'react';
import './aboutus.css';

const Aboutus = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  
  return (
    <div className="sidescroll">
    <div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>A propos de </span> nous</h4>
          <p>In the fast-paced world of software development, there exists a talented and ambitious team known as "CodeForce." Led by their visionary project manager and co-founder, you, let's say, John, this group of skilled individuals has taken the tech industry by storm with their innovative solutions and unyielding passion for creating cutting-edge software.</p>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
            <h6>Who we are?</h6>
            <p>The CodeForce team is an eclectic mix of diverse backgrounds, each member bringing a unique set of skills and expertise to the table. From seasoned programmers to UX/UI design specialists, from creative thinkers to meticulous testers, the team is a perfect amalgamation of talent that makes them a force to be reckoned with.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
            <h6>What we do?</h6>
            <p>The journey of CodeForce started during your college days, where you and a few like-minded friends shared a common dream of making a significant impact in the world of technology. Driven by a shared passion for software development and a desire to create something extraordinary, the team officially came into existence upon graduation. With a strong foundation built on friendship, trust, and mutual respect, the team embarked on a remarkable journey of turning ideas into reality.</p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
            <h6>How we work?</h6>
            <p>One of the defining moments for CodeForce came when the team participated in a prestigious hackathon organized by Intelcia IT Solutions, a company renowned for its innovative approach to technology and software solutions. With adrenaline pumping through your veins, the team put their collective minds to work, brainstorming ideas that could revolutionize the way businesses manage their projects.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

        

  )
}
export default Aboutus