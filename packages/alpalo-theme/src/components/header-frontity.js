import React from "react"
import { connect, styled, css } from "frontity"
import Link from "@frontity/components/link"

const HeaderComponent = ({ state, actions }) => {
    const data = state.source.get(state.router.link)

    return (
        <HeaderFrontity id="home">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            {/*<HeaderContent>*/}
                {/*<h1>Hey there! I am Alex!</h1>*/}
                {/*{ state.theme.isUrlVisible*/}
                {/*    ? <>Current URL: {state.router.link} <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button></>*/}
                {/*    : <Button onClick={actions.theme.toggleUrl}>Show URL &#x3e;</Button>*/}
                {/*}*/}
                {/*<Menu>*/}
                {/*    <Link link="/">Home</Link>*/}
                {/*    <br />*/}
                {/*    <Link link="/about-us">About Us</Link>*/}
                {/*    <br />*/}
                {/*    <Link link="/destinations">Destinations</Link>*/}
                {/*</Menu>*/}

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    {/*<li><a className="smoothscroll" href="#portfolio">Works</a></li>*/}
                    {/*<li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>*/}
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    <li><>Current URL: {state.router.link} <Button onClick={actions.theme.toggleUrl}>&#x3c; Hide URL</Button></></li>
                </ul>
            {/*</HeaderContent>*/}
        </HeaderFrontity>

    // <HeaderFrontity>
    //     <nav id="nav-wrap">
    //
    //         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    //         <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
    //
    //         <ul id="nav" className="nav">
    //             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
    //             <li><a className="smoothscroll" href="#about">About</a></li>
    //             <li><a className="smoothscroll" href="#resume">Resume</a></li>
    //             <li><a className="smoothscroll" href="#portfolio">Works</a></li>
    //             <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
    //             <li><a className="smoothscroll" href="#contact">Contact</a></li>
    //         </ul>
    //
    //     </nav>
    //
    //     <div className="row banner">
    //         <div className="banner-text">
    //             <h1 className="responsive-headline">I'm {name}.</h1>
    //             <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
    //             <hr />
    //             <ul className="social">
    //                 {networks}
    //             </ul>
    //         </div>
    //     </div>
    //
    //     <p className="scrolldown">
    //         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
    //     </p>
    // </HeaderFrontity>

    )

}

export default connect(HeaderComponent)

const HeaderFrontity = styled.header` 
`
// const HeaderContent = styled.div`
//     max-width: 800px;
//     padding: 2em 1em;
//     margin: auto;
// `

const Menu = styled.nav`

`
const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`


// /* ------------------------------------------------------------------ */
// /* b. Header Styles
// /* ------------------------------------------------------------------ */
//
// header {
//     position: relative;
//     height: 800px;
//     min-height: 500px;
//     width: 100%;
//     background: #161415 url(../images/header-background.jpg) no-repeat top center;
//     background-size: cover !important;
//     -webkit-background-size: cover !important;
//     text-align: center;
//     overflow: hidden;
// }
//
// /* vertically center banner section */
// header:before {
//     content: '';
//     display: inline-block;
//     vertical-align: middle;
//     height: 100%;
// }
// header .banner {
//     display: inline-block;
//     vertical-align: middle;
//     margin: 0 auto;
//     width: 85%;
//     padding-bottom: 30px;
//     text-align: center;
// }
//
// header .banner-text { width: 100%; }
// header .banner-text h1 {
//     font: 90px/1.1em 'opensans-bold', sans-serif;
//     color: #fff;
//     letter-spacing: -2px;
//     margin: 0 auto 18px auto;
//     text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);
// }
// header .banner-text h3 {
//     font: 18px/1.9em 'librebaskerville-regular', serif;
//     color: #A8A8A8;
//     margin: 0 auto;
//     width: 70%;
//     text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
// }
// header .banner-text h3 span,
// header .banner-text h3 a {
//     color: #fff;
// }
// header .banner-text hr {
//     width: 60%;
//     margin: 18px auto 24px auto;
//     border-color: #2F2D2E;
//     border-color: rgba(150, 150, 150, .1);
// }
//
// /* header social links */
// header .social {
//     margin: 24px 0;
//     padding: 0;
//     font-size: 30px;
//     text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);
// }
// header .social li {
//     display: inline-block;
//     margin: 0 15px;
//     padding: 0;
// }
// header .social li a { color: #fff; }
// header .social li a:hover { color: #11ABB0; }
//
// /* scrolldown link */
// header .scrolldown a {
//     position: absolute;
//     bottom: 30px;
//     left: 50%;
//     margin-left: -29px;
//     color: #fff;
//     display: block;
//     height: 42px;
//     width: 42px;
//     font-size: 42px;
//     line-height: 42px;
//     color: #fff;
//     border-radius: 100%;
//
//     -webkit-transition: all .3s ease-in-out;
//     -moz-transition: all .3s ease-in-out;
//     -o-transition: all .3s ease-in-out;
//     transition: all .3s ease-in-out;
// }
// header .scrolldown a:hover { color: #11ABB0; }
//
// /* primary navigation
// --------------------------------------------------------------------- */
// #nav-wrap ul, #nav-wrap li, #nav-wrap a {
//     margin: 0;
//     padding: 0;
//     border: none;
//     outline: none;
// }
//
// /* nav-wrap */
// #nav-wrap {
//     font: 12px 'opensans-bold', sans-serif;
//     width: 100%;
//     text-transform: uppercase;
//     letter-spacing: 2.5px;
//     margin: 0 auto;
//     z-index: 100;
//     position: fixed;
//     left: 0;
//     top: 0;
// }
// .opaque { background-color: #333; }
//
// /* hide toggle button */
// #nav-wrap > a.mobile-btn { display: none; }
//
// ul#nav {
//     min-height: 48px;
//     width: auto;
//
//     /* center align the menu */
//     text-align: center;
// }
// ul#nav li {
//     position: relative;
//     list-style: none;
//     height: 48px;
//     display: inline-block;
// }
//
// /* Links */
// ul#nav li a {
//
//     /* 8px padding top + 8px padding bottom + 32px line-height = 48px */
//
//     display: inline-block;
//     padding: 8px 13px;
//     line-height: 32px;
//     text-decoration: none;
//     text-align: left;
//     color: #fff;
//
//     -webkit-transition: color .2s ease-in-out;
//     -moz-transition: color .2s ease-in-out;
//     -o-transition: color .2s ease-in-out;
//     -ms-transition: color .2s ease-in-out;
//     transition: color .2s ease-in-out;
// }
//
// ul#nav li a:active { background-color: transparent !important; }
// ul#nav li.current a { color: #F06000; }