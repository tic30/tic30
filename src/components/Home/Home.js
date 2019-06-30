import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import Header from '../Header';
import Flyer from '../Flyer';
import ContactBubble from '../ContactBubble';
import Texts from '../../texts';
import './Home.scss';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dynamicFlyer: ""
		}
		this.hand = React.createRef();
		this.smile = React.createRef();
		this.logoHover = this.logoHover.bind(this);
		this.logoHoverEnd = this.logoHoverEnd.bind(this);
		this.callFlyer = this.callFlyer.bind(this);
	}

	logoHover() {
		this.hand.current.classList.remove("animated", "tada");
		this.hand.current.classList.add("visible", "animated", "tada");
		this.smile.current.classList.add("visible");
	}

	logoHoverEnd() {
		const myself = this;
		setTimeout(function () {
			myself.hand.current.classList.remove("visible", "animated", "tada");
			myself.smile.current.classList.remove("visible");
		}, 800);
	}

	callFlyer(e) {
		const data = e.currentTarget.getAttribute("data-target");
		this.setState({
			dynamicFlyer: data
		})
	}

	componentDidMount() {
		const myself = this;

		setTimeout(function () {
			myself.logoHover();
			myself.logoHoverEnd();
		}, 2000);
	}

	render() {
		const { dynamicFlyer } = this.state

		return (
			<React.Fragment>
				<Header />
				<ContactBubble />
				<section id="sec1">
					<div className="container">
						<div id="img-container" onMouseEnter={this.logoHover} onMouseLeave={this.logoHoverEnd}>
							<img id="chu-logo" src="/imgs/chu-logo.png" alt="Loading Logo..." />
							<div id="hand" ref={this.hand}><img src="/imgs/hand.png" alt="Loading hand..." /></div>
							<img id="smile" src="/imgs/smile.png" alt="Loading smile..." ref={this.smile} />
						</div>
						<h1>{Texts.Hero.title}</h1>
						<p className="contentText">{Texts.Hero.content}</p>
					</div>
				</section>
				<section id="sec2">
					<div className="container">
						{dynamicFlyer && <Flyer direction="left" animated="true" content={Texts[dynamicFlyer]} />}
						<Flyer direction="left" animated="false" content={Texts.SelfIntro} />
						<Flyer direction="right" animated="false" content={Texts.Company} callFlyer={this.callFlyer}/>
					</div>
				</section>
				<section id="sec3"></section>
			</React.Fragment>
		);
	}
}

export default Home;
