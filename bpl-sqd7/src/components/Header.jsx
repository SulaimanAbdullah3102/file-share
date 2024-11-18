import logo from '../assets/logo.png'
import coin from '../assets/coin.png'
import PropTypes from 'prop-types';

const Header = ({ newcoin }) => {
    return (
        <div className='sticky top-0 z-10 bg-opacity-85 bg-white'>
            <div className='flex justify-between items-center p-4 mx-auto text-base'>
                <img src={logo} alt="profile pic" />
                <div className='flex space-x-5 items-center'>
                    <ul className='flex space-x-8  text-gray-500'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">Fixture</a></li>
                        <li><a href="">Profile</a></li>
                    </ul>
                    <h1 className='flex items-center p-2 border-2'>{newcoin} Coin <img className='ml-1' src={coin} alt="coin pic" /></h1>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    newcoin: PropTypes.number
}

export default Header;