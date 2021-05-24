import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/plugins.css';
import './assets/styles.css';
import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/js/bootstrap.bundle';
import './assets/custom';

function App() {
  return (
    <>
      <div className="Loader"></div>
      <div className="App main-wrapper">
        <Header></Header>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
