import React, { useEffect, useState } from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import Selectedplayer from './Selectedplayer';

const Availableplayers = ({ handleselectplayer, selectedplayers, handleremainingselectedplayer }) => {
    const [players, setPlayers] = useState([]);
    const [selected, setSelected] = useState(true)

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    const handletuggleS = () => {
        const newValue = true;
        setSelected(newValue)
        
    }

    const handletuggleA = () => {
        const newValue = false;
        setSelected(newValue)
    }

    return (
        <div>
            
            {selected ? 
           <div>
            <div className='md:flex justify-between items-center'>
                <h1>Available Players  :{players.length}</h1>

                <div className=''>
                    <button className='p-3 border-2 border-black bg-yellow-400 rounded-l-xl' onClick={handletuggleS}>Available</button>
                    <button className='p-3 border-y-2 border-r-2 border-black rounded-r-xl' onClick={handletuggleA}>Selected ({selectedplayers.length})</button>
                </div>

            </div>
             <div id='availableplayer' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    players.map(player => <Player
                        key={player.id}
                        player={player}
                        handleselectplayer={handleselectplayer}
                    ></Player>)
                }
            </div> 
           </div>
            : 
            
            <div id='selectedplayer' className='my-6'>
                <div className='md:flex justify-between items-center'>
                <h1>Available Players  :{players.length}</h1>

                <div className=''>
                    <button className='p-3 border-2 border-black rounded-l-xl' onClick={handletuggleS}>Available</button>
                    <button className='p-3 border-y-2 border-r-2 border-black bg-yellow-400 rounded-r-xl' onClick={handletuggleA}>Selected ({selectedplayers.length})</button>
                </div>

            </div>
                {
                    selectedplayers.map((selectedplayer, idx) => <Selectedplayer key={idx}
                        selectedplayer={selectedplayer}
                        handleremainingselectedplayer={handleremainingselectedplayer}
                    ></Selectedplayer>)
                }
                <button className='p-3 border-2 border-black bg-yellow-400 rounded-xl' onClick={handletuggleS}>Add more player</button>
            </div>}


        </div>
    );
};

Availableplayers.propTypes = {
    handleselectplayer: PropTypes.func,
    selectedplayers: PropTypes.array,
    handleremainingselectedplayer: PropTypes.func
}

export default Availableplayers;