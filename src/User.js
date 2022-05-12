import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
function User() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(params);
  return (
    <>
      <h3>User Component</h3>
      {location.state ? (
        <>
          Name:{location.state.name} <br />
          Age:{location.state.age} <br /> <br />
        </>
      ) : (
        <></>
      )}
      User ID :{params.userID} <br />
      Course ID:{params.courseID} <br /> <br />
      <button onClick={() => navigate(-1)}>Go Back</button> &nbsp;&nbsp;
      <button onClick={() => navigate(1)}>Go Forward</button>
    </>
  );
}

export default User;
