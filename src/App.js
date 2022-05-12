import React from 'react';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import User from './User';
export default function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Dashboard </Link> &nbsp;
        <Link to="/AboutUs"> AboutUs</Link> &nbsp;
        <Link to="/ContactUs">ContactUs </Link> &nbsp;
        <Link to="/User/3/course/10?sort=asc&filter=true">User</Link> &nbsp;
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>

          <Route path="/aboutus" element={<AboutUs />}>
            <Route path="" element={<AboutUsIndex />} />
            <Route path="history" element={<History />} />
            <Route path="Branches" element={<Branches />} />
          </Route>

          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route
            path="/user/:userID/course/:courseID"
            element={<User />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <h3> Dashboard Component</h3>
      <button onClick={() => navigate(-1)}>Go Back</button>&nbsp; &nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
      <button
        onClick={() =>
          navigate('/User/3/course/10', { state: { name: 'XXX', age: 10 } })
        }
      >
        User Component{' '}
      </button>
    </>
  );
}

function AboutUs() {
  const navigate = useNavigate();
  return (
    <>
      <h3>AboutUs Component</h3>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp; &nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button> <br /> <br />
      <button onClick={() => navigate('/aboutus/history')}>History</button>{' '}
      &nbsp; &nbsp;
      <button onClick={() => navigate('/aboutus/branches')}>Branches</button>
      <Outlet />
    </>
  );
}

function AboutUsIndex() {
  return (
    <>
      <h3>AboutUs Home Page</h3>
    </>
  );
}

function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <h3> ContactUs Component</h3>
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;&nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </>
  );
}

function History() {
  return (
    <>
      <h3>History Component</h3>
    </>
  );
}

function Branches() {
  return (
    <>
      <h3> Branches Component</h3>
    </>
  );
}
