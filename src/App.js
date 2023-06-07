
import './App.css';
import ShowList from './showList';
import ShowSummary from './showSummary';
import { BrowserRouter as Router,Route,Routes,Link, useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:showId" element={<ShowSummary />} />
      </Routes>
    </Router>
  );
};

export default App;
