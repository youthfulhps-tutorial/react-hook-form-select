import React from "react";
import "./App.css";
import { useForm, Controller } from "react-hook-form";
import Select from "./components/Select";
import ReactSelect from "react-select";
import { selectableOptions } from "./constants";

function App() {
  const { register, control, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  const registeredSelect = register("select", { required: true });

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <Select registerReturn={{ ...registeredSelect }} />
        <Controller
          name="react-select"
          control={control}
          render={({ field }) => (
            <ReactSelect {...field} options={selectableOptions} />
          )}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
