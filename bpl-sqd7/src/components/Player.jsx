import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
import PropTypes from 'prop-types';

const Player = ({ player, handleselectplayer }) => {
    const {id, picture, name, country, type, rating, batting_style, price } = player;
    
    return (
        <div>
            <div className="mx-8 my-10 border pt-3 pl-8 pb-3 pr-0 rounded-lg">
                <img className="w-72 h-56 rounded-3xl mb-5" src={picture} alt="pic of player" />
                <div className="flex items-center space-x-1 mb-4 text-xl ">
                    <span><FaUser /></span><p>{name}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-1 text-slate-500">
                        <span><IoFlagSharp /> </span><p>{country}</p>
                    </div>

                    <div className="w-28"><p className="pl-4 py-1 bg-slate-200 rounded-lg">{type}</p></div>
                    <hr /><hr />
                    <p>Rating</p>        <p>{rating}</p>
                    <p>Bating Style</p>  <p>{batting_style}</p>
                    <p>Price:{price}</p>

                    <div>
                        <button onClick={() => handleselectplayer(player,price,id)} className="px-3 py-1 border-2 rounded-lg">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleselectplayer: PropTypes.func
}

export default Player;