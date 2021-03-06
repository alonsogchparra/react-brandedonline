import { AmericanRivera } from './components/AmericanRivera';
import { ClientComments } from './components/ClientComments';
import { ClientCommentsTwo } from './components/ClientCommentsTwo';
import { Dishes } from './components/Dishes';
import { Features } from './components/Features';
import { FirstOrder } from './components/FirstOrder';
import { FollowKaren } from './components/FollowKaren';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { OneTreePlanted } from './components/OneTreePlanted';
import { Rewards } from './components/Rewards';
import { RightReserved } from './components/RightReserved';
import { SpringSantuary } from './components/SpringSantuary';

function App() {
  return (
    <div className=''>
      <Header />
      <Navbar />
      <AmericanRivera />
      <Dishes />
      <SpringSantuary />
      <OneTreePlanted />
      <ClientComments />
      <FollowKaren />
      <Rewards />
      <Features />
      <FirstOrder />
      <Footer />
      <RightReserved />
    </div>
  );
}

export default App;
