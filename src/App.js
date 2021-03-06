import { useState, useCallback } from "react";
import Building from "./components/Building/Building";
import RemoteControl from "./components/RemoteControl/RemoteControl";
import './App.css';

const defaultState = {
  floor: 0,
};

export default function App() {
  const [state, setState] = useState(defaultState);

  const toggleFloor = useCallback(id => setState(prev => ({...prev, floor: id})), []);

  return (
    <div className="App">
      <RemoteControl toggleFloor={toggleFloor}/>
      <Building state={state}/>
    </div>
  );
}