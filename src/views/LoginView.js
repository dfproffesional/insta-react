import React from 'react';
import LayoutLogin from '../layout/login/LayoutLogin';
import {LoginImagePhone as Image} from '../components/login/LoginImagePhone';
import {LoginForm as Form} from '../components/login/LoginForm';
import {LoginSignUp as SignUp} from '../components/login/LoginSignUp';
import {LoginAds as Ads} from '../components/login/LoginAds';
import {LoginFooter as Footer} from '../components/login/LoginFooter';

function LoginView() {
  return (
    <React.StrictMode>
      <LayoutLogin>
        <Image />
        <Form />
        <SignUp />
        <Ads />
        <Footer />
      </LayoutLogin>
    </React.StrictMode>
  );
}

export default LoginView;
