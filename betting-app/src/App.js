import logo from './logo.svg';
import './App.css';
import CreateBetPage from './pages/CreateBets';
import WalletNavbar from './pages/navBar';
import {ConnectButton} from '@suiet/wallet-kit';
import AllBetsPage from './pages/BetsPage';
import BetDetails from './pages/BetDetails';
function App() {
  return (
    <div className="App">

<CreateBetPage/>
<AllBetsPage/>
<BetDetails/>
<ConnectButton/>



    </div>
  );
}

export default App;
