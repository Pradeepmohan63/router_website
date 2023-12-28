import React from 'react';
import '../1About/About.css'
import { Link } from 'react-router-dom';
import Nav from '../0navbar/Nav';
import Videosec from '../3videoSec/Videosec'

function About(){
  return (
    <div>
        <Nav />
        <div className="about_container">
			<div className="container">
				<div className="row">
					<div className="col12 col-sm-12 col-md-12">
						<div className="title_section">
							<h4>ABOUT</h4>
							<h1>ABOUT US</h1>
						</div>
					</div>
					<div className="col6 col-sm-12 col-md-12">
						<div className="about_card">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
							ut labore et dolore magna aliqua.</p>
							
							<div className="nav_list">
								<ul className="about_img">
									<p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
									<p>Duis aute irure dolor in reprehenderit in voluptate velit</p>
									<p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
								</ul>
							</div>
						</div>
					</div>
					
					<div className="col6 col-sm-12 col-md-12">
						<div className="about_card">
							<p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
							in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<div className="secondary_button">
								<b><Link to='/'>Learn More</Link></b>
							</div>
						</div>
					</div>
					
					<div className="col3 col-md-6 col-sm-12">
						<div className="about_details">
							<h2><i className="bi bi-emoji-smile"></i> 232</h2>
							
							<p><b>Happy Clients </b>consequuntur quae qui deca rode</p>
						
							<p>Find out more »</p>
						</div>
					</div>
					
					<div className="col3 col-md-6 col-sm-12">
						<div className="about_details">
							<h2>232</h2>
							
							<p><b>Projects  </b>adipisci atque cum quia aut numquam delectus</p>
						
							<p>Find out more » </p>
						</div>
					</div>
					
					<div className="col3 col-md-6 col-sm-12">
						<div className="about_details">
							<h2>232</h2>
							
							<p><b>Hours Of Support </b> aut commodi quaerat. Aliquam ratione</p>
						
							<p>Find out more »</p>
						</div>
					</div>
					
					<div className="col3 col-md-6 col-sm-12">
						<div className="about_details">
							<h2> 232</h2>
							
							<p><b>Hard Workers </b> rerum asperiores dolor molestiae doloribu</p>
						
							<p>Find out more »</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Videosec />
	</div>	
    
  )
}

export default About