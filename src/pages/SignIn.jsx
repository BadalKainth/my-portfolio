import axios from "axios";

const SignIn = () => {
  async function handleSubmit(e) {
    // Prevett default browser behavior
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("/user/signin", {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <html lang="en">
      <head>
        {/* Include head partial */}
        <title>SignIn</title>
      </head>
      <body>
        {/* Include nav partial */}
        <div className="container mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="email"
              />
              <div id="email" className="form-text">
                We will never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        {/* Include scripts partial */}
      </body>
    </html>
  );
};

export default SignIn;
