import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App/App';
import ChallengeShowPage from './components/ChallengeShowPage';
import ChallengeIndexPage from './components/ChallengeIndexPage';
import './index.css';

render(
	(
	  <Router history={hashHistory}>
	    <Route path="/" component={App}>
	   		 <Route path="challenges" component={ChallengeIndexPage}/>
	   		 <Route path="/challenges/:challengeId" component={ChallengeShowPage}/>
	    </Route>
	  </Router>
	)
  ,
  document.getElementById('root')
);
