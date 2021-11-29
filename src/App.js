import './App.css';
import Address from './Component/profile/Address';
import FullName from './Component/profile/FullName';
import ProfilePhoto from './Component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      
      <ProfilePhoto />
      <h1>Profile Information :</h1>
      <FullName />
      <Address />
    </div>
  );
}

export default App;
