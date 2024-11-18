
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Availableplayers from './components/Availableplayers';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [newcoin, setNewcoin] = useState(0);
  const [selectedplayers, setSelectedPlayers] = useState([]);
  const [num, setNum] = useState(0)
  

  const handleCoinamount = (coin) => {
    const newaddedcoin = newcoin + coin;
    setNewcoin(newaddedcoin);
    toast('Coin Added to your Account')

  }

  const handleselectplayer = (player, price) => {
    if (newcoin > price && num < 6) {
      const newselectedplayers = [...selectedplayers, player];
    setSelectedPlayers(newselectedplayers)
    toast('Player Added')
    const newnum = num + 1;
    setNum(newnum)
    const remainingcoin = newcoin - price ;
    setNewcoin(remainingcoin)
    }
    else{
      toast('Player can not be Added')
    }
  }

  const handleremainingselectedplayer = (id,price) => {
    const newremainingselectedplayer = selectedplayers.filter(remainingselectedplayer => remainingselectedplayer.id !== id);
    setSelectedPlayers(newremainingselectedplayer)
    toast('Player Removed')
    const newremainingcoin =  newcoin + price ;
    setNewcoin(newremainingcoin)
    const newnum = num - 1;
    setNum(newnum)
  }

  return (
    <>
      <Header newcoin={newcoin}></Header>
      <div className='max-w-7xl mx-auto'>
        <Banner handleCoinamount={handleCoinamount}></Banner>
        <Availableplayers handleremainingselectedplayer={handleremainingselectedplayer}
          handleselectplayer={handleselectplayer}
          selectedplayers={selectedplayers}
        ></Availableplayers>

      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  )
}

export default App
