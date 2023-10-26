import React from 'react';
import Design from "./components/Design";
import Form from "./components/From";

function App() {
  return (
    <div className='relative' style={{ background: 'rgb(5,8,22)' }}>
      <div className="absolute inset-0 z-0">
        <Design />
      </div>
      <div className="z-10 relative mt-4">
        <Form />
      </div>
    </div>
  );
}
export default App;
