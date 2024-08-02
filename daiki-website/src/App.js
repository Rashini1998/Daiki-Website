// import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Header from '../src/components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Services from './pages/Service';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => (
//   <Router>
//     <div>
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   </Router>
// );

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
