import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UserPage from './components/UserPage';
import UserCampaignsPage from './components/UserCampaignsPage';
import CampaignPage from './components/CampaignPage';
import PreferenceSettings from './components/PreferenceSettings';
import NewCampaign from './components/NewCampaign';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ErrorPage from './components/404ErrorPage';
import { authenticate } from './store/session';
import { get_questionnaire, rem_questionnaire } from './store/questionnaire';
import { read_campaigns } from './store/campaign';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const que = useSelector(state => state.questionnaire.questionnaire);
  const campaigns = useSelector(state => state.campaigns);
  const userId = user?.id;

  useEffect(() => {
    (async() => {
      dispatch(authenticate());
      if (!userId) dispatch(rem_questionnaire());
      else dispatch(get_questionnaire(userId));
      dispatch(read_campaigns());
      setLoaded(true);
    })();
  }, [dispatch, userId]);

  if (!loaded) return null;
  
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
          {user ? <Redirect to={`/users/${userId}`} exact={true} /> : <MainPage />}
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/register' exact={true}>
          <SignUpForm />
        </Route>
        <Route path={`/users/${userId}`} exact={true}>
          <UserPage user={user} questionnaire={que} />
        </Route>
        <Route path={`/users/${userId}/campaigns`} exact={true}>
          <UserCampaignsPage campaigns={campaigns} user={user} />
        </Route>
        <Route path={`/campaigns/:campaignId`} exact={true}>
          <CampaignPage user={user} campaigns={campaigns} />
        </Route>
        <Route path={`/users/${userId}/questionnaire/new`} exact={true}>
          <PreferenceSettings user={user} questionnaire={que} />
        </Route>
        <Route path={`/users/${userId}/campaigns/new`} exact={true}>
          <NewCampaign user={user} />
        </Route>
        <Route>
          <ErrorPage user={user} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
