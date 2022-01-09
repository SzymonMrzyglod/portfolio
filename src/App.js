import Header from './components/Header/Header';
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './components/Body/Projects/Projects'
import Work from './components/Body/Work/Work';
import Contact from './components/Body/Contact/Contact';
import Main from './components/Body/Main/Main';
import Hobby from './components/Body/Hobby/Hobby';
import LeftSidePanel from './components/Body/SidePanels/LeftSidePanel';
import RightSidePanel from './components/Body/SidePanels//RightSidePanel';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
// align-items: stretch;
// height: 100vh;
color: #D9D9D9;
background: #181818;
z-index: 0;
`

const Body = styled.div`
display: flex;

height: 85%;
// width: 100%;
`

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Header />
          <Body>
            <LeftSidePanel/>
              <Routes>
                <Route path="/projects" element={<Projects/>}></Route>
                <Route path="/work" element={<Work />}></Route>
                <Route path="/hobby" element={<Hobby />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/" element={<Main />}></Route>
              </Routes>
            <RightSidePanel/>
          </Body>
      </Wrapper>
    </Router>
  );
}

export default App;
