
import './App.css';
import Navbar from "./Items/Navbar";
import Section from './Items/Section';
import  GlobalStyle  from './Style/GlobalStyle.jsx';
import Tabs from "./Components/Tabs";
import { Card } from './CardInfo';
import { TabsContainer } from './Style/AppStyle';
// import RespNavbar from './Items/RespNavbar';



function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <Navbar />
      {/* <RespNavbar/> */}

      <Section /> 

      <TabsContainer>
      <Tabs CardImage={Card[0].img}
        Cardtitle={Card[0].title}
        CardDescription={Card[0].describe}

      />
      <Tabs CardImage={Card[1].img}
        Cardtitle={Card[1].title}
        CardDescription={Card[1].describe}

      />
      <Tabs CardImage={Card[2].img}
        Cardtitle={Card[2].title}
        CardDescription={Card[2].describe}

      />
      </TabsContainer>
      {/* </Section> */}
    </div>
  );
}

export default App;
