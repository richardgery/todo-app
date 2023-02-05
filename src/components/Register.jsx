import React, { useState } from "react";
import CountryDropdown from "country-dropdown-with-flags-for-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, country, address, gender };
    console.log(regobj);
  };
  return (
    <>
      <div className="offset-lg-3 col-lg-6">
        <form action="" className="container" onSubmit={handleSubmit}>
          <div className="card">
            {/* form title */}
            <div className="card-header">
              <h1>Register</h1>
            </div>
            <div className="card-body">
              <div className="row">
                {/* input username for user */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="uname">
                      Username <span className="errmsg">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="uname"
                      id="uname"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                {/* input password for user */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="password">
                      Password <span className="errmsg">*</span>{" "}
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                {/* input fullname for user */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="fname">
                      Fullname <span className="errmsg">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                {/* input email for user */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="errmsg">*</span>{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                {/* input phone for user */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone <span className="errmsg">*</span>{" "}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>

                {/* input country for user */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="country">
                      Country <span className="errmsg">*</span>{" "}
                    </label>
                    <CountryDropdown
                      id="country"
                      className="form-control"
                      preferredCountries={["gb", "us"]}
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      handleChange={(e) => console.log(e.target.value)}
                    ></CountryDropdown>
                  </div>
                </div>

                {/* input address for user */}
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      name="address"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                {/* input gender for user */}
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Gender</label>
                    <br />
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="app-check"
                    />
                    <label htmlFor="">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="app-check"
                    />
                    <label htmlFor="">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>{" "}
              |{" "}
              <Link to="/" className="btn btn-danger">
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
