import React, { Component, lazy, Suspense} from 'react';
//import FuncComp from "./FuncComp";
import './App.css';
const OtherComponent = React.lazy(() => import('./FuncComp'));
//const FuncComp = lazy(()=> import("./FuncComp"));

class App extends Component {
  render() {
    return (
      <Suspense fallback = {<div>loading....</div>}>
        <div className="App">
          <OtherComponent></OtherComponent>
        </div>
      </Suspense>

    );
  }
}

export default App;
