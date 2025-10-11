
import './App.css'
import NavigationSideBar from './components/navigationBar'
import Button from './components/Button';
import { AiFillHome } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { FaClock } from 'react-icons/fa';
import { useState } from 'react';
import HomeCounter from './Pages/Home';
import { VscGraph } from 'react-icons/vsc';
import { FaInfinity } from 'react-icons/fa';
import Logo from './components/logo/index.';
import View from './components/View';
import Settings from './Pages/Settings';

export default function App() {
  const [windowShow, setWindowShow] = useState<String>('home')
  const [check, setCheck] = useState<boolean> ()
  return (
    
    <View className="flex min-h-screen min-w-screen m-0 p-9 bg-geral">
       <View>

        <NavigationSideBar>
                <Logo><FaInfinity size={40} color='#137FEC'/></Logo>
               <Button variant='icon' isSelected ={windowShow == "home"} onClick={() => setWindowShow("home")}><AiFillHome size={20}/></Button>
               <Button variant='icon' isSelected ={windowShow == "settings"} onClick={() => setWindowShow("settings")}><AiFillSetting size={20}/></Button>
               <Button variant='icon' isSelected ={windowShow == "anality"} onClick={() => setWindowShow("anality")}><VscGraph size={20}/></Button>
               <Button variant='icon' isSelected ={windowShow == "presets"} onClick={() => setWindowShow("presets")}><FaClock size={20}/></Button>
         </NavigationSideBar>
       </View>
       <View className="flex-1 flex bg-geral items-center justify-center">
           {windowShow === "home" && (
              <HomeCounter/>
            )}
             {windowShow === "settings" && (
              <Settings></Settings>
            )}
      </View>
    </View>
  );
}