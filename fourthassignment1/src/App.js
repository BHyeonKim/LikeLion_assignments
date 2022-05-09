import Main from 'components/Main/Main';
import Navigation from 'components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='App'>
      <Profile />
      <Navigation />
      <Main name='김보현' />
    </div>
  );
}

export default App;
