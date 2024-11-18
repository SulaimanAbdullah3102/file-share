import banner from '../assets/banner-main.png'
import PropTypes from 'prop-types';
import './Footer.css'

const Banner = ({ handleCoinamount }) => {
    return (
        <div style={{backgroundColor :"black"}} className='flex flex-col items-center space-y-5  mx-auto py-16 mb-20 bg' >
            <div> <img src={banner} alt="Banner Pic" /></div>
            <h1 className='text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-2xl text-slate-400'>Beyond Boundaries Beyond Limits</p>
            <div className='p-1 border rounded-lg'>
                <button onClick={() => handleCoinamount(50000)} className='p-2  bg-yellow-400 rounded-lg' >Claim Free Credit</button>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleCoinamount: PropTypes.func
}

export default Banner;