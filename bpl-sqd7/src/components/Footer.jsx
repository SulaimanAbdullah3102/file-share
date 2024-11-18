
import logo from '../assets/logo.png'
import bg from '../assets/bg-shadow.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='bgd'>
            <div style={{backgroundColor :"white"}}
                className='flex flex-col justify-between items-center py-24 md:w-4/6 mx-auto bg rounded-lg'>

                <div>
                    <h1 className='text-3xl font-bold mb-4'>Subscribe to our Newsletter</h1>
                    <p style={{ color: "rgba(19, 19, 19, 0.7)" }} className='mb-6'>Get the latest updates and news right in your inbox!</p>
                </div>

                <div> <input className='border-2 rounded-md w-80 px-7' type="text" placeholder='Enter your email' />
                    <button className='ml-2 rounded-md py-1 px-2 bg-gradient-to-r from-pink-500 to-orange-500'>Subscribe</button>
                </div>

            </div>
            <div  className='flex flex-col justify-between items-center'>
                <div>
                    <img className='mb-24 mt-5' src={logo} alt="Logo pic" />
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4' >
                    <div id='about'>
                        <h1 className='text-white mb-5'>About Us</h1>
                        <p style={{ color: "rgba(255, 255, 255, 0.6)" }} className=''>We are a passionate team <br />
                            dedicated to providing the best <br />
                            services to our customers.</p>
                    </div>

                    <div id='links'>
                        <h1 className='text-white mb-5'>Quick Links</h1>
                        <ul className='list-disc space-y-2' style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                            <li><a href="">Home</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div id='sub'>
                        <h1 className='text-white mb-5'>Subscribe</h1>
                        <p style={{ color: "rgba(255, 255, 255, 0.6)" }} className='mb-5'>Subscribe to our newsletter for the <br />
                            latest updates.</p>
                        <div>
                            <input className='rounded-l-xl py-1 px-3' type="text" placeholder='Enter Your Email' />
                            <button className='rounded-r-xl py-1 px-2 bg-gradient-to-r from-pink-500 to-orange-500'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className='mt-28' style={{ color: "rgba(255, 255, 255, 0.6)" }}>@2024 Your Company All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;