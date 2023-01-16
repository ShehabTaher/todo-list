import './App.css';
import {Toaster} from 'react-hot-toast'
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';

function App() {
  return (
    <>
    <div className="container">
      <PageTitle>ToDo List</PageTitle>
      <div className='app__wrapper'>
        <AppHeader />
        <AppContent></AppContent>
      </div>
    </div>
    <Toaster 
    position='bottom-right' 
    toastOptions={{
      style: {
        fontSize: '1.4rem'
      }
    }}/>
    </>
  );
}

export default App;
