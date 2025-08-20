import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,

} from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null; // ✅ check properly
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <h3>Please log in to view this page.</h3>
        )
      }
    />
  );
};

function User() {
  const { userId } = useParams();
  return <h3>User ID: {userId}</h3>;
}

function Profile() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Profile Page</h2>
      <ul>
        <li>
          <Link to={`${url}/details`}>Details</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Settings</Link>
        </li>
        <li>
          <Link to={`${url}/user/123`}>User Example</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/details`}>
          <h3>Profile Details</h3>
        </Route>
        <Route path={`${path}/settings`}>
          <h3>Profile Settings</h3>
        </Route>
        {/* Example dynamic user route */}
        <PrivateRoute path={`${path}/user/:userId`} component={User} />
      </Switch>
    </div>
  );
}

export default Profile;
