import MoonVest from './MoonVest';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/plugins.css';
import './assets/styles.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="App main-wrapper">
      <Header></Header>
      <MoonVest></MoonVest>
      <Footer></Footer>
    </div>
  );
}

export default App;
