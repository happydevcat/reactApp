
import './App.css';
import Header from './components/Header';
import DayList from './components/DayList.tsx';
import Day from './components/Day.tsx';
import CreateWord from './components/CreateWord.tsx';
import CreateDay from './components/CreateDay';
// react-router-dom 버전 6 업그레이드가 되면서 Switch를 더이상 지원하지 않음. 
// Switch > Routes 변경
// Router > Route 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyPage from './components/EmptyPage';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<DayList />}></Route>
        <Route path="/day/:day" element={<Day />}></Route>
        <Route path="/createWord" element={<CreateWord />}></Route>
        <Route path="/createDay" element={<CreateDay />}></Route>
        <Route path="*" element = {<EmptyPage />}></Route>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
