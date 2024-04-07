import React, { useEffect, useState } from "react";
import mainIm from '../images/andy-kelly-0E_vhMVqL9g-unsplash 2.png'
import iconImage from '../images/White Logo.png'
import image2 from '../images/image 2.png'
import image3 from '../images/image 1.png'
import line from '../images/Line 6.png'
import liney from '../images/Line 7.png'

// const MobileNavigation = ({ closeNav }) => (
//     <div style={{
//         backgroundColor: 'white',
//         color: 'black',
//         padding: '10px',
//         textAlign: 'center',
//         width: '100%',
//         position: 'absolute',
//         top: '10px',
//         right: '0',
//         zIndex: '2',
//         animation: 'slideIn .5s forwards'
//     }}>
//         <div className="navbar-nav">
//             <a className="nav-link active" href="#" style={{ color: 'black' }}>SERVICES</a>
//             <a className="nav-link active" href="#" style={{ color: 'black' }}>ABOUT US</a>
//             <a className="nav-link active" href="#" style={{ color: 'black' }}>CONTACT US</a>
//             <a className="nav-link active" href="#" style={{ color: 'black' }}>CAREERS</a>
//         </div>
//         <button className="btn btn-link" onClick={closeNav} style={{ color: 'white' }}>Close</button>
//     </div>
// );

const TopNavigation = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        setIsClosing(false);
    }

    const closeNav = () => {
        setIsNavOpen(false);
        setIsClosing(true);
    }





    return (
        <>
            <nav class="navbar navbar-expand-md navbar-light" style={{
                backgroundColor: isNavOpen ? 'white' : '#6B3CC9', alignItems: 'center', justifyContent: 'center',
                // animation: isNavOpen ? 'slideIn .5s forwards' : 
                // isClosing ? 'slideOut .5s forwards' : 
                // 'none' 
            }}>
                <div class="container-fluid" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <a class="navbar-brand" href="#" style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <img src={iconImage} class="logo-icon me-5" alt="logo" style={{ marginLeft: 20 }} />

                    </a>
                    <button class="navbar-toggler" onClick={toggleNav} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                        style={{
                            display: isNavOpen ? 'none' : ' ',
                            // backgroundColor:'#6B3CC9',border:'none' 
                        }}
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNavAltMarkup" style={{ alignItems: 'end', justifyContent: 'end' }}>

                        {isNavOpen && (
                            <button className="btn-close" onClick={closeNav} aria-label="Close" style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: 'white' }}>
                                <span aria-hidden="true"></span>
                            </button>
                        )}
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#" style={{ fontSize: '14px', color: 'black', display: isNavOpen ? 'block' : 'none' }}>HOME</a>
                            <a class="nav-link active" aria-current="page" href="#" style={{ fontSize: '14px', color: isNavOpen ? 'black' : 'white' }}>SERVICES</a>
                            <a class="nav-link active" aria-current="page" href="#" style={{ fontSize: '14px', color: isNavOpen ? 'black' : 'white' }}>ABOUT US</a>
                            <a class="nav-link active" aria-current="page" href="#" style={{ fontSize: '14px', color: isNavOpen ? 'black' : 'white' }}>CONTACT US</a>
                            <a class="nav-link active" aria-current="page" href="#" style={{ fontSize: '14px', color: isNavOpen ? 'black' : 'white' }}>CAREERS</a>
                        </div>

                    </div>

                </div>
            </nav>

            <div class="container-fluid px-0" style={{ position: "relative" }}>
                <img src={mainIm} alt="Image" style={{ width: '100%', height: 'auto' }}

                />


                <div className="d-flex align-items-start mt-3" style={{ position: "absolute", background: 'linear-gradient(90deg, rgba(77,202,121,1) 3%, rgba(28,189,221,1) 87%)', height: 280, width: 540 }}>
                    <div style={{ margin: '15px' }}>
                        <h1 style={{ margin: '0', color: '#fff', textAlign: 'start' }}>We Crush Your Competitors, Goals, And Sales Records - Without The B.S.</h1>
                        <button class="btn btn-sm" style={{ backgroundColor: '#F28D35', color: 'white', fontWeight: '700', border: 'none', borderRadius: '5px', marginTop: '15px', cursor: 'pointer' }}>GET FREE CONSULTATION</button>
                    </div>
                </div>


            </div>

            <div class="container" style={{ position: "relative" }}>
                <div class="row" style={{ width: '100%' }}>
                    <div class="col-12 col-md-6 col-6 d-flex justify-content-center align-items-center">
                        <img src={image2} alt="Image" class="img-fluid" style={{ maxWidth: "100%" }} />
                    </div>
                    <div class="col mt-3 d-flex flex-column justify-content-center align-items-start"
                        //  d-flex justify-content-start align-items-center text-align-start" 
                        style={{ fontWeight: '400' }}>
                        <div class="content-container">
                            <h2 style={{ color: '#6B3CC9' }}>Web & Mobile App Development</h2>


                            <p >Your web and mobile Apps are pieces of the puzzle to grow your business.
                                We use frameworks which tailor content and engagement methods to respond to
                                different intents shown by your potential customers who interact with your
                                business online.</p>

                            <button class="btn btn-sm"
                                style={{
                                    backgroundColor: '#F28D35', color: 'white',
                                    fontWeight: '700', border: 'none', borderRadius: '5px',
                                    marginTop: '15px', cursor: 'pointer'
                                }}>LEARN MORE</button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container" style={{ position: "relative", marginBlock: 'auto' }}>
                <div class="row" style={{ width: '100%' }}>
                    <div class="col mt-3 d-flex flex-column justify-content-center align-items-start order-md-1 order-2"
                        //  d-flex justify-content-start align-items-center text-align-start" 
                        style={{ fontWeight: '400' }}>
                        <div class="content-container">
                            <h2 style={{ color: '#6B3CC9' }}>Digital Strategy Consulting</h2>


                            <p >Your digital strategy should complement the overall marketing
                                strategy of the company. In online marketing, each component
                                will never work in isolation and every business needs a different
                                mix. We provide a clear concept and strategic overview to find the
                                most efficient model for your business.</p>

                            <button class="btn btn-sm"
                                style={{
                                    backgroundColor: '#F28D35', color: 'white',
                                    fontWeight: '700', border: 'none', borderRadius: '5px',
                                    marginTop: '15px', cursor: 'pointer'
                                }}>LEARN MORE</button>
                        </div>

                    </div>
                    <div class="col-12 col-md-6 col-6 d-flex justify-content-center align-items-center order-md-2 order-1">
                        <img src={image3} alt="Image" class="img-fluid" style={{ maxWidth: "100%" }} />
                    </div>

                </div>
            </div>

            <div class="container mt-5" style={{ position: "relative" }}>
                <div class="row justify-content-center" >
                    <div class="col-12 d-flex flex-column justify-content-center align-items-center mb-3">
                        <h2 style={{ color: '#6B3CC9' }}>Frequently asked questions</h2>
                    </div>
                    <div class="col-8 mb-3" style={{ backgroundColor: '#FAF8FF' }}>
                        <p style={{ color: '#6B3CC9', fontWeight: '500', marginTop: 10, position: 'relative' }}>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                            <span style={{ color: '#6B3CC9', fontWeight: '500', fontSize: 20, position: 'absolute', top: 0, right: 0 }}>-</span>
                        </p>
                        <p style={{ color: '#6F6C90' }}>Lorem ipsum dolor sit amet consectetur.
                            Faucibus commodo suscipit id ipsum.
                            Elementum ultrices nulla faucibus odio est sed aliquam.
                            Sapien massa morbi risus sagittis tortor integer.</p>
                    </div>
                    <div class="col-8 mb-3 " style={{ backgroundColor: '#FAF8FF' }}>
                        <p style={{ color: '#000000', fontWeight: '500', marginTop: 10, position: 'relative' }}>Lorem ipsum dolor sit amet consectetur. Tortores scelerisque integer?
                            <span style={{ color: '#000000', fontWeight: '500', fontSize: 20, position: 'absolute', top: 0, right: 0 }}>+</span>
                        </p>

                    </div>
                    <div class="col-8 mb-3" style={{ backgroundColor: '#FAF8FF' }}>
                        {/* <p style={{color:'#000000',fontWeight:'500',marginTop:10}}>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</p> */}
                        <p style={{ color: '#000000', fontWeight: '500', marginTop: 10, position: 'relative' }}>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                            <span style={{ color: '#000000', fontWeight: '500', fontSize: 20, position: 'absolute', top: 0, right: 0 }}>+</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="container-fluid p-0 mt-5" style={{ backgroundColor: '#6B3CC9', paddingLeft: 0, paddingRight: 0 }}>
                <div class="row mx-0 mb-3" style={{ width: '100%' }}>

                    <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <img src={iconImage} class="logo-icon me-5" alt="logo" style={{ marginLeft: 20, marginTop: 15 }} />

                        <p style={{ marginTop: 10, marginLeft: 20, color: '#FFFFFF', fontWeight: '400', fontSize: 16 }}>Your goal is our target. Not anything in between. We use online marketing
                            platforms and tools to achieve single objective - your business results.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">

                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-12 mb-3">
                        <h6 style={{ fontWeight: 600, marginTop: 15, color: '#FFFFFF', marginLeft: 20, }}>Our Technologies</h6>
                        <ul style={{ listStyleType: 'none', padding: 0, color: '#FFFFFF', fontSize: 16, marginLeft: 20, }}>
                            <li>ReactJS</li>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
                        <h6 style={{ fontWeight: 600, marginTop: 15, color: '#FFFFFF', marginLeft: 20, }}>Our Services</h6>
                        <ul style={{ listStyleType: 'none', padding: 0, color: '#FFFFFF', fontSize: 16, marginLeft: 20, }}>
                            <li>Social media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data & Analytics</li>
                        </ul>
                    </div>
                </div>

                <div class="row justify-content-center align-items-center mx-0" style={{ width: '100%' }}>
                    <div class="col-10 mb-3 d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                        <div class="content-container3" style={{ width: '100%' }}>
                            <img src={line} class="line-icon me-2" alt="line" style={{ width: '80%', marginLeft: '10%' }} />
                            {/* , marginLeft: '10%', marginRight: '5%' */}
                            <p style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 14, alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                <span style={{ marginRight: 20 }}>Privacy Policy</span>
                                <span>|</span>
                                <span style={{ marginLeft: 20 }}>Terms & Conditions</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};
export default TopNavigation;
