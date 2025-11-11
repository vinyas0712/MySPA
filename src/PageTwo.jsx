
import React from 'react';

function PageTwo() {
  const throwError = () => {
    throw new Error('This is a deliberate JavaScript error!');
  };

  return (
    <div>
      <h1>Welcome to Page Two</h1>
      <p>This page contains a button that throws an error.</p>
      <button onClick={throwError}>Click to Throw Error</button>
    </div>
  );
}

export default PageTwo;
