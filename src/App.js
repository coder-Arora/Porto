
import './App.css';
import Navbar from "./Items/Navbar";
import Section from './Items/Section';
import  GlobalStyle  from './Style/GlobalStyle.jsx';
import Tabs from "./components/Tabs";
import { Card } from './CardInfo';



function App() {
  return (
    <div className="App">
    <GlobalStyle />
      <Navbar />
      <Section /> 
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
    </div>
  );
}

export default App;
