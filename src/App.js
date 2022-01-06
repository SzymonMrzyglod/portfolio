import Header from './components/Header/Header';
import Body from './components/Body/Body';
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/Body/About/About'
import Work from './components/Body/Work/Work';
import Contact from './components/Body/Contact/Contact';
import Main from './components/Body/Main/Main';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: #181818;
color: #D9D9D9;
`

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Wrapper>
      </Router>
  );
}

export default App;
