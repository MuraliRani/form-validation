import "./App.css";
import { userValidation } from "./Validation";
function App() {
  const createUser = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    console.log(formData);
    const isValid = await userValidation.isValid(formData);
    console.log(isValid);
  };
  return (
    <>
      <div className="container" onSubmit={createUser}>
        <form className="form">
          <input type="text" placeholder="Enter your name" />
          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your password" />
          <input type="submit" className="submit" />
        </form>
      </div>
    </>
  );
}

export default App;
