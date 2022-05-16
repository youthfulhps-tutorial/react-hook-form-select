import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import Select from "./components/Select";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Select registerReturn={{ ...register("select") }} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
