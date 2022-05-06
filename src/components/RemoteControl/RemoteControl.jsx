import "./RemoteControl.css";

const buttons = Array.from(Array(12).keys());

export default function RemoteControl() {
  return (
    <div className="buttons_wrapper">
      {buttons.map(button => <div key={button} className="button" />)}
    </div>
  );
}