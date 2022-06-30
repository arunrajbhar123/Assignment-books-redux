import React from "react";
import styled from "styled-components";
import { useLocation,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth } from "../Redux/AuthReducer/action.js";

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const comingFrom=location.state?.from.pathname ||"/";
 
   const user= {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAuth(user)).then((r)=>{
   
      if(r.type==="GET_AUTH_SUCCESS"){
    
        navigate(comingFrom,{replace:true})
      }
    })
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <BoxWrapper>
          <h1>Login</h1>
          <input type="text" placeholder="Email" />
          <br />
          <input type="password" placeholder="password" />
          <br />
          <button type="submit">Login</button>
        </BoxWrapper>
      </form>
    </div>
  );
};

export default Login;

const BoxWrapper = styled.div`
  box-shadow: 1px 1px 5px grey;
  width: 400px;
  margin: auto;
  padding: 12px;
`;
