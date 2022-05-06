import "./RemoteControl.css";

const buttons = Array.from(Array(12).keys());

export default function RemoteControl({ toggleFloor }) {
  return (
    <div className="remote_control">
      <div className="buttons_wrapper">
        {buttons.map(button => (
          <div
            key={button}
            className="button"
            onClick={() => toggleFloor(button)}
          />
        ))}
      </div>
    </div>
  );
}