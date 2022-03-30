import { AmericanRivera } from './components/AmericanRivera';
import { ClientComments } from './components/ClientComments';
import { Dishes } from './components/Dishes';
import { Features } from './components/Features';
import { FirstOrder } from './components/FirstOrder';
import { Footer } from './components/Footer';
import { OneTreePlanted } from './components/OneTreePlanted';
import { Rewards } from './components/Rewards';
import { SpringSantuary } from './components/SpringSantuary';

function App() {
  return (
    <div className=''>
      <AmericanRivera />
      <Dishes />
      <SpringSantuary />
      <OneTreePlanted />
      <ClientComments />
      <Rewards />
      <Features />
      <FirstOrder />
      <Footer />
    </div>
  );
}

export default App;
