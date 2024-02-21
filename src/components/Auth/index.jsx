import React, { useState } from "react";
import cls from "./Auth.module.scss";
import TabBody from "../CTabs/TabBody";
import { AuthContext } from "./context/AuthContext";

// components
import Login from "./Login";
import OTP from "./OTР";
import Registration from "./Registration";
import LoginType from "./LoginType";

function Auth() {
  const [tabValue, setTabValue] = useState(3);
  const [loginData, setLoginData] = useState({ phone: "" });
  const [isConfirm, setIsConfirm] = useState(false);
  const [loginResult, setLoginResult] = useState("");

  return (
    <div className={cls.root}>
      <div className={cls.wrapper} />
      <AuthContext.Provider
        value={{
          setTabValue,
          tabValue,
          setLoginData,
          loginData,
          setIsConfirm,
          isConfirm,
          setLoginResult,
          loginResult,
        }}
      >
        <TabBody tab={0} tabValue={tabValue}>
          <LoginType />
        </TabBody>
        <TabBody tab={1} tabValue={tabValue}>
          <Login />
        </TabBody>
        <TabBody tab={2} tabValue={tabValue}>
          <OTP />
        </TabBody>
        <TabBody tab={3} tabValue={tabValue}>
          <Registration />
        </TabBody>
      </AuthContext.Provider>
    </div>
  );
}

export default Auth;
