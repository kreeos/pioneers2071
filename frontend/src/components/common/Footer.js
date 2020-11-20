import React, { Component } from 'react';

class Footer extends Component {
	render() {
		const { is_mobile } = this.props;
		return(
            <div>
            {
                is_mobile ?
					<div className='mobile-footer'>Radiation Materials and Nanomechanics Lab. <br/> Department of Nuclear and Quantum Engineering <br/> Korea Advanced Institute of Science and Technology <br/>
<br/>N7-1, Rm 2404, KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon, 305-701, South Korea <br/> Tel. +82)42-350-3813 | Fax. +82)42-350-3810
					    <div className="m-container">
					    	<img style={{ padding: 15, width: '100%', height: '100%'}} src={require('../static/images/footer/footer_mobile.png')}/>
							<button 
						  		className="m-btn-kaist"
							    onClick={(e) => {
							      e.preventDefault();
							      window.location.href='http://kaist.ac.kr';
							      }}
						  	></button>
						  	<button 
						  		className="m-btn-nqe"
							    onClick={(e) => {
							      e.preventDefault();
							      window.location.href='http://nuclear.kaist.ac.kr';
							      }}
						  	></button>
						</div>
					</div>
				:
				  <div className="container">
					<img style={{width: '100%', height:'100%'}} src={require('../static/images/footer/footer.png')}/>
				  	<button 
				  		className="btn-kaist"
					    onClick={(e) => {
					      e.preventDefault();
					      window.location.href='http://kaist.ac.kr';
					      }}
				  	></button>
				  	<button 
				  		className="btn-nqe"
					    onClick={(e) => {
					      e.preventDefault();
					      window.location.href='http://nuclear.kaist.ac.kr';
					      }}
				  	></button>
				  </div>
            }
            </div>
		);
	}
}

export default Footer;
