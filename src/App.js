import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ForgotPassword } from './Pages/ForgotPassword.jsx';
import Home from './Pages/Home.jsx';
import { Offers } from './Pages/Offers'
import { Profile } from './Pages/Profile.jsx';
import { SignIn } from './Pages/SignIn.jsx';
import { SignUp } from './Pages/SignUp.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-In' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
