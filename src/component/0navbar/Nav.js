import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Nav(){
	const {id} = useParams();
  return (
    <div>
        <header id="header_container">
			<div className="container">
				<div className="row">
					<div className="col3 col-sm-6 col-md-6 d-block">
						<div className="logo_sec">
							<h2><Link to='/'>MULTI</Link></h2>
						</div>
					</div>
					<div className="col7 col-sm-12 col-md-12 d-none flex">
						<div className="nav">
							<nav className="nav_sec">
								<ul className="head_flex">
									<button><b><Link to='/Banner'>Banner</Link></b></button>
									<button><b><Link to='/about'>About</Link></b></button>
									<button><b><Link to='/Service'>Service</Link></b></button>
									<button><b>Portfolio</b></button>
									<button><b>Team</b></button>
									<button className="dropdown_sec"><b>Drop Down</b>
									
										<ul className="dropdown_list">
											<li><b>Drop Down 1</b></li>
											<li className="deep_dropdown_sec"><b>Deep Drop Down</b>
												<ul className="deep_dropdown">
													<li><b>Deep Drop Down 1</b></li>
													<li><b>Deep Drop Down 2</b></li>
													<li><b>Deep Drop Down 3</b></li>
													<li><b>Deep Drop Down 4</b></li>
													<li><b>Deep Drop Down 5</b></li>
												</ul>
											</li>
											<li><b>Drop Down 2</b></li>
											<li><b>Drop Down 3</b></li>
											<li><b>Drop Down 4</b></li>
										</ul>
										
									
									
									</button>
									
								</ul>
							</nav>
						</div>
					</div>
					<div className="col2 col-sm-6 col-md-6 d-none d-block">
						<div className="row fxend">
							<div className="primaryButton">
								<button><b>Get Started</b></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		{/* <p> Name: {id}</p> */}
    </div>
  )
}

export default Nav