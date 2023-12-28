import React from 'react'
import Nav from '../0navbar/Nav';
import '../2Banner/Banner.css'
import { Link } from 'react-router-dom';

function Banner(){
  return (
    <div>
		<Nav/>
        <section id="banner_container">
				<div className="container">
					<div className="row">
						<div className="col6 col-sm-12 col-md-12">
							<div className="content_sec">
							
								<h1>Welcome to Multi</h1>
								
								<p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi 
								nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse 
								doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
								
								
								<div className="col12 col-sm-12 col-md-12">
									<div className="primaryButton">
										<button><b><Link to='readmore' >Read More</Link></b></button>
										<button><b><Link to='readnext' >Read Next</Link></b></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}

export default Banner;