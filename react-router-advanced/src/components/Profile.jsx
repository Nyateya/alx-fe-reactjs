function Profile() {
  const baseUrl = "/profile"; // ✅ no need for useMatch

  return (
    <div>
      <h2>Profile Page</h2>
      <ul>
        <li>
          <Link to={`${baseUrl}/details`}>Details</Link>
        </li>
        <li>
          <Link to={`${baseUrl}/settings`}>Settings</Link>
        </li>
        <li>
          <Link to={`${baseUrl}/user/123`}>User Example</Link>
        </li>
      </ul>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        <Route
          path="user/:userId"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
export default Profile;
