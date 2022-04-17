import { ChangeEvent, FormEvent, useState } from "react";

import { signInWithGoogle } from "utils/firebase";

function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormData({ email: "", password: "" });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = formData;

  return (
    <form className="SignIn" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
      />
      <input type="submit" value="Sign In" />
      <button onClick={handleGoogleAuth}>Sign In With Google</button>
    </form>
  );
}

export default SignIn;
