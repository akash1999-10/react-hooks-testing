import React from "react";

const HelloWorld = ({ onLoad, onExit }) => {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    onLoad();
    return onExit;
  }, []);

  React.useEffect(() => console.log(`hello ${name}`), [name]);

  return <input value={name} onChange={event => setName(event.target.value)} />;
};

export default HelloWorld;
