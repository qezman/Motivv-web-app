import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Home from './pages/HomePage';
import Apply from './pages/Apply';
import Update from './pages/Update';
import Dashboard from './pages/Dashboard';
import AllJobs from './pages/AllJobs';
import Explore from './pages/Explore';
import { UserContext } from './components/UserContext';
import PrivateRoute from './components/authRoute/privateRoute';
import PublicRoute from './components/authRoute/publicRoute';
import ScrollToTop from './components/ScrollToTop';
import Cookies from 'js-cookie';
import AdminRoute from './components/authRoute/adminRoute';
import Login from './pages/Login';
import Clients from './pages/Clients';
import PendingPage from './pages/Pending';
import ApprovedPage from './pages/Approved';
import Edit from './pages/Edit';
import JobPostPage from './pages/JobPostPage';
import JobsPage from './pages/JobsPage';
import Challenge from './pages/Challenge';
import ChallengesDashboardPage from './pages/ChallengesDashboard';
import { useChallenge } from './components/ChallengeContext';
import DesignChallengeEdit from './components/DesignChallengeEdit';
import DesignChallenge from './pages/DesignChallenge.js';
import DesignSchoolComingSoon from './pages/DesignSchool.js';
import BusinessTemplate from './pages/BusinessTemplate';
import SuggestTemplate from './pages/SuggestTemplate';
import University from './University/index';
// import NewDesignChallenge from "./pages/NewDesignChallenge";
import Verification from './components/OtpEdit/Verification.js';

import AdminApproved from './admin/AdminApproved/AdminApproved.js';
import Pending from './admin/Pending/Pending.js';
import ClientsPage from './admin/Clients/Clients.js';
import Designers from './components/DesignersPage/Designers/index.js';
import NewApplyCard from './components/ApplyNew/NewApplyCard.js';
import DesignerCard from './components/DesignerCardPage/index.js';
import EditProfile from './components/EditProfile/index.js';

import GlobalContextProvider from './store/contexts/global-context.js';
import NewHomePage from './pages/NewHomePage.js';
import PaystackOtp from './components/PaystackOtp/index.js';
import PaystackRedirect from './components/PaystackRedirect/index.js';
import JobPostPageNew from './components/JobPostPageNew/index.js';

function App() {
  const user = useContext(UserContext);
  const { challengeUser } = useChallenge();
  return (
    <GlobalContextProvider>
      <Router basename="/">
        <ScrollToTop>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={NewHomePage} />
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/newapply" component={NewApplyCard} />
            <Route exact path="/jobs" component={JobsPage} />
            <Route exact path="/post-job" component={JobPostPage} />
            <Route exact path="/post-newjob" component={JobPostPageNew} />
            <Route exact path="/update/:id/:phone/:email" component={Update} />
            <Route exact path="/Edit" component={Edit} />
            <Route exact path="/verification" component={Verification} />
            <Route exact path="/designercard" component={DesignerCard} />
            <Route exact path="/paystackpay" component={PaystackOtp} />
            <Route exact path="/paystackredirect" component={PaystackRedirect} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route
              exact
              path="/challenges?email=:email&username=:username"
              component={DesignChallenge}
            />
            <Route exact path="/designers" component={Designers} />
            {/* <Route exact path="/challenges" component={NewDesignChallenge} /> */}
            <Route exact path="/challenges" component={DesignChallenge} />
            <Route exact path="/school" component={DesignSchoolComingSoon} />
            <Route exact path="/business-template" component={BusinessTemplate} />
            <Route exact path="/university" component={University} />
            <Route exact path="/business-template/suggest" component={SuggestTemplate} />
            Clients
            <Route exact path="/approved" component={AdminApproved} />
            <Route exact path="/pending" component={Pending} />
            <Route exact path={'/client'} component={ClientsPage} />
            <PrivateRoute
              user={challengeUser}
              challenge
              exact
              path="/challenges/dashboard"
              component={ChallengesDashboardPage}
            />
            <PrivateRoute
              user={user.user || Cookies.get('user-auth')}
              exact
              component={Explore}
              path="/explore"
            />
            <PublicRoute
              user={user.admin || Cookies.get('admin-auth')}
              restricted={true}
              exact
              component={Login}
              path="/admin"
            />
            <AdminRoute
              user={user.admin || Cookies.get('admin-auth')}
              exact
              component={Dashboard}
              path="/dashboard"
            />
            <AdminRoute
              user={user.admin || Cookies.get('admin-auth')}
              exact
              component={AllJobs}
              path="/all-jobs"
            />
            <AdminRoute
              user={user.admin || Cookies.get('admin-auth')}
              exact
              component={Clients}
              path="/clients"
            />
            <AdminRoute
              user={user.admin || Cookies.get('admin-auth')}
              exact
              component={PendingPage}
              path="/pending"
            />
            <AdminRoute
              user={user.admin || Cookies.get('admin-auth')}
              exact
              component={ApprovedPage}
              path="/approve"
            />
            <AdminRoute
              user={user.admin || Cookies.get('admin-auth')}
              exact
              component={Challenge}
              path="/design-challenge"
            />
            <AdminRoute
              user={user.admin || Cookies.get('admin-auth')}
              exact
              component={DesignChallengeEdit}
              path="/design-challenge/type=:type&id=:id"
            />
          </Switch>
        </ScrollToTop>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
