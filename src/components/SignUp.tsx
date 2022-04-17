import { ChangeEvent, FormEvent, useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormData({ displayName: "", email: "", password: "" });
  };

  const { email, password, displayName } = formData;

  return (
    <form className="SignUp" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        name="displayName"
        placeholder="Display Name"
        value={displayName}
        onChange={handleChange}
      />
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
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUp;
