import React from 'react'
import { CgCalculator } from "react-icons/cg";
import Nav from '../0navbar/Nav'

function Service(){
  return (
    <div>
		<Nav />
        <section id="service_container">
				<div class="container contain2">
					<div class="row">
						<div class="col12 col-sm-12 col-md-12">
							<div class="title_section">
								<h4>SERVICES</h4>
								<h1>CHECK OUR SERVICES</h1>
							</div>
						</div>
						
						<div class="col4 col-sm-12 col-md-6">
							<div class="service_card">
								<div class="section_cardicon">
									<p className='CgCalculator'><CgCalculator /></p>
								</div>
								<div class="service_cardcontent">
									<h2>Lorem Ipsum</h2>
									<p>Voluptatum deleniti atque corrupti quos dolores et quas
									molestias excepturi</p>
								</div>
							</div>
						</div>
						
						<div class="col4 col-sm-12 col-md-6">
							<div class="service_card">
								<div class="section_cardicon">
								<p className='CgCalculator'><CgCalculator /></p>
								</div>
								<div class="service_cardcontent">
									<h2>Sed ut perspiciatis</h2>
									<p>Duis aute irure dolor in reprehenderit in voluptate velit
									esse cillum dolore</p>
								</div>
							</div>
						</div>
						
						<div class="col4 col-sm-12 col-md-6">
							<div class="service_card">
								<div class="section_cardicon">
								<p className='CgCalculator'><CgCalculator /></p>
								</div>
								<div class="service_cardcontent">
									<h2>Magni Dolores</h2>
									<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa
									qui officia</p>
								</div>
							</div>
						</div>
						
						<div class="col4 col-sm-12 col-md-6">
							<div class="service_card">
								<div class="section_cardicon">
								<p className='CgCalculator'><CgCalculator /></p>
								</div>
								<div class="service_cardcontent">
									<h2>Nemo Enim</h2>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiisi</p>
								</div>
							</div>
						</div>
						
						<div class="col4 col-sm-12 col-md-6">
							<div class="service_card">
								<div class="section_cardicon">
								<p className='CgCalculator'><CgCalculator /></p>
								</div>
								<div class="service_cardcontent">
									<h2>Dele cardo</h2>
									<p>Quis consequatur saepe eligendi voluptatem consequatur dolor</p>
								</div>
							</div>
						</div>
						
						<div class="col4 col-sm-12 col-md-6">
							<div class="service_card">
								<div class="section_cardicon">
								<p className='CgCalculator'><CgCalculator /></p>
								</div>
								<div class="service_cardcontent">
									<h2>Divera don</h2>
									<p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}

export default Service