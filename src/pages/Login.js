import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.err(errorCode, errorMessage);
      });
  };
  return (
    <>
      <main>
        <section>
          <div>
            <p>Firebase React Login</p>

            <form>
              <div>
                <label htmlFor="email-address">Email:</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password">Email:</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button onClick={onLogin}>Login</button>
              </div>
            </form>
            <p>
              No account yet? <NavLink to="/signup">Sign Up</NavLink>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
