import './App.css';
import Front from './Components/Front';
import Navbar from './Components/Navbar';
import ShareButton from './Image/share.svg';
import WhiteInstaButton from './Image/instagram-white.svg';
import BlackInstaButton from './Image/instagram-black.svg';
import BorderTwitterButton from './Image/twitter-border.svg';
import TwitterButton from './Image/twitter.svg';
import SnapButton from './Image/snap.svg';
import { useState } from 'react';
import CloseButton from './Image/close.svg';

function App() {
  const [icon,setIcon] = useState(false)
  const [border,setBorder] = useState(false)
  const [changeButton,setChangeButton] = useState(false)

  return (
    <div className="container">
      <div className=''>
        <p className='p-3 rounded-full bg-white relative top-24 cursor-pointer share' onClick={() => setChangeButton(!changeButton)}>
          {
            (changeButton)
            ? <img src={ShareButton}/>
            : <img src={CloseButton}/>
          }
        </p>
        <p className={
          (!changeButton)
          ? "p-3 rounded-full bg-white cursor-pointer instagram instagram-show"
          : "p-3 rounded-full bg-white cursor-pointer instagram instagram-hide"
        } onMouseEnter={() => setIcon(true)} onMouseLeave={() => setIcon(false)}>
          {
            (icon)
            ? <img src={WhiteInstaButton}/>
            : <img src={BlackInstaButton}/>
          }
        </p>
        <p className={
          (!changeButton)
          ? "p-3 rounded-full bg-white  cursor-pointer snapchat snapchat-show"
          : "p-3 rounded-full bg-white  cursor-pointer snapchat snapchat-hide"
        }>
          <img src={SnapButton}/>
        </p>
        <p className={
          (!changeButton)
          ? "p-3 rounded-full bg-white  cursor-pointer twitter twitter-show"
          : "p-3 rounded-full bg-white  cursor-pointer twitter twitter-hide"
        } onMouseEnter={() => setBorder(true)} onMouseLeave={() => setBorder(false)}>
          {
            (border)
            ?  <img src={TwitterButton}/>
            :  <img src={BorderTwitterButton}/>
          }
        </p>
      </div>
    </div>
  )
}

export default App;
