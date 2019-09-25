import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';
import './Preloader.scss';

class Preloader extends Component {
    state = {
        animationCount: 0,
        redirect: window.matchMedia('(max-width: 599px)').matches //Go directly to home on phone
    }

    setRedirect = () => {
        const { animationCount } = this.state;
        if(animationCount>=2){
            this.setState({
                redirect: true
            });
        } else {
            this.setState({
                animationCount: animationCount + 1
            });
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect push to='/home' />
        }

        return (
            <div className="preloader-wrapper">
                <div className="preloader-header" onAnimationEnd={this.setRedirect}>
                    <div className="preloader-header-text">Hello, this is Tim Chu</div>
                </div>
            </div>
        );
    }
}

export default Preloader;
