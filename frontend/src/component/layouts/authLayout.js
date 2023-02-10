import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from '../agentAuth/Login/Login';
import Register from '../agentAuth/Register/Register';
import Verify from '../agentAuth/Verify/Verify';
import Profile from '../agentAuth/Profile/Profile';
import CreditPayment from '../agentAuth/AgentSelect/creditPayment';
import BusinessDetail from '../agentAuth/BusinessDetail/BusinessDetail';
import InviteTeam from '../agentAuth/InviteTeam/InviteTeam';
import SelectCredit from '../agentAuth/SelectCredit/SelectCredit';

function AuthLayout() {


  return (
    <>
    <Routes>

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/verify" element={<Verify />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/credit-payment" element={<CreditPayment />} />
        <Route exact path="/business-detail" element={<BusinessDetail />} />
        <Route exact path="/invite-team" element={<InviteTeam />} />
        <Route exact path="/select-credit" element={<SelectCredit />} />


    </Routes>
    </>
  )
}

export default AuthLayout;