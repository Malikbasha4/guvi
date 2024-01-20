import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="container">
      <h2>Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" name="age" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="text" id="dob" name="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input type="text" id="mobile" name="mobile" />
        </div>
        <button type="submit">Update Profile</button>
      </form>
      <p>Want to create an account? <Link to="/signup">Sign Up</Link>.</p>
      <p>Already have an account? <Link to="/login">Login</Link>.</p>
    </div>
  );
};

export default Profile;
