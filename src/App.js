import './App.css';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';

function App() {
  return (
    <div className="container">
      <PageTitle>ToDo List</PageTitle>
      <div className='app_header'>
        <AppHeader />
      </div>
    </div>
  );
}

export default App;
