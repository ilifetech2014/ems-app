import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Switch} from 'react-router-dom';
import data from './data';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Video from './components/Video';
import Register from './components/Register';
import Login from './components/Login';
import Gallery from './components/Gallery';
import Vappa from './components/Vappa';
import Books from './components/Books';
import Book1 from './components/Book1';
import Book2 from './components/Book2';
import Book3 from './components/Book3';
import Book4 from './components/Book4';
import Book5 from './components/Book5';
import Book6 from './components/Book6';
import Book7 from './components/Book7';
import Book8 from './components/Book8';
import Book9 from './components/Book9';
import Book10 from './components/Book10';
import Book11 from './components/Book11';
import Book12 from './components/Book12';
import Book13 from './components/Book13';
import Book14 from './components/Book14';
import Book15 from './components/Book15';
import Book16 from './components/Book16';
import Book17 from './components/Book17';
import Book18 from './components/Book18';
import Book19 from './components/Book19';
import Book20 from './components/Book20';
import Book21 from './components/Book21';
import Book22 from './components/Book22';
import Book23 from './components/Book23';
import Akarathi from './components/Akarathi';
import Ubathesa_Korvai from './components/Ubathesa_Korvai';
import Kavithai_Noolkal from './components/Kavithai_Noolkal';
import Gnana_Vilaka_Noolkal from './components/Gnana_Vilaka_Noolkal';
import Tamil_Ilakiya_Noolkal from './components/Tamil_Ilakiya_Noolkal';
import Moulith_Noolkal from './components/Moulith_Noolkal';
import Yaseen_Noolkal from './components/Yaseen_Noolkal';
import Varalatru_Noolkal from './components/Varalatru_Noolkal';
import Vahapiya_Ethirpu_Noolkal from './components/Vahapiya_Ethirpu_Noolkal';
import Varithathukkal from './components/Varithathukkal';
import Audio from './components/Audio';
import Thanthai from './components/Thanthai';
import Appa from './components/Appa';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Checkout from './components/Checkout';
import Popup from './components/Popup';
import Cart from './components/Cart';
import CopyBoard from './components/CopyBoard';
import SocialFollow from './components/SocialFollow';
import CreateProduct from './components/CreateProduct';

function App(){

    return (
      <div>
      <Router>
      <div className="wrapper bg--zircon-light color-scheme-1">
        <Navbar />
        <div>
           
            <Switch>
            <Route  path='/createproduct' component={CreateProduct} />
             <Route  path='/socialfollow' component={SocialFollow} />
            <Route  path='/copyboard' component={CopyBoard} />
            <Route  path='/cart:id?' component={Cart} />
            <Route  path='/product:id' component={Popup} />
            <Route  path='/data' component={data} />
            <Route exact   path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route  path='/contact' component={Contact} />
            <Route  path='/video' component={Video} />
            <Route  path='/register' component={Register} />
            <Route  path='/login' component={Login} />
            <Route  path='/gallery' component={Gallery} />
            <Route  path='/vappa' component={Vappa} />
            <Route  path='/books' component={Books} />
            <Route  path='/book1' component={Book1} />
            <Route  path='/book2' component={Book2} />
            <Route  path='/book3' component={Book3} />
            <Route  path='/book4' component={Book4} />
            <Route  path='/book5' component={Book5} />
            <Route  path='/book6' component={Book6} />
            <Route  path='/book7' component={Book7} />
            <Route  path='/book8' component={Book8} />
            <Route  path='/book9' component={Book9} />
            <Route  path='/book10' component={Book10} />
            <Route  path='/book11' component={Book11} />
            <Route  path='/book12' component={Book12} />
            <Route  path='/book13' component={Book13} />
            <Route  path='/book14' component={Book14} />
            <Route  path='/book15' component={Book15} />
            <Route  path='/book16' component={Book16} />
            <Route  path='/book17' component={Book17} />
            <Route  path='/book18' component={Book18} />
            <Route  path='/book19' component={Book19} />
            <Route  path='/book20' component={Book20} />
            <Route  path='/book21' component={Book21} />
            <Route  path='/book22' component={Book22} />
            <Route  path='/book23' component={Book23} />
            <Route  path='/akarathi' component={Akarathi} />
            <Route  path='/ubathesa_Korvai' component={Ubathesa_Korvai} />
            <Route  path='/kavithai_noolkal' component={Kavithai_Noolkal} />
            <Route  path='/gnana_vilaka_noolkal' component={Gnana_Vilaka_Noolkal} />
            <Route  path='/tamil_ilakiya_noolkal' component={Tamil_Ilakiya_Noolkal} />
            <Route  path='/moulith_noolkal' component={Moulith_Noolkal} />
            <Route  path='/yaseen_noolkal' component={Yaseen_Noolkal} />
            <Route  path='/varalatru_noolkal' component={Varalatru_Noolkal} />
            <Route  path='/vahapiya_ethirpu_noolkal' component={Vahapiya_Ethirpu_Noolkal} />
            <Route  path='/varithathukkal' component={Varithathukkal} />
            <Route  path='/audio' component={Audio} />
            <Route  path='/thanthai' component={Thanthai} />
            <Route  path='/appa' component={Appa} />
            <Route  path='/sidebar' component={Sidebar} />
            <Route  path='/checkout' component={Checkout} />
            </Switch>
            </div>
          <Footer />
      </div>
        </Router>
      </div>
    );
  }


export default App;