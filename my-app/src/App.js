import './App.css';
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./build1/Build/build1.loader.js",
  dataUrl: "./build1/Build/build1.data",
  frameworkUrl: "./build1/Build/build1.framework.js",
  codeUrl: "./build1/Build/build1.wasm",
});

function App() {
  return (
    
    <div className="App">
      <div className ="Unity">
        <Unity unityContext={unityContext} 
        style= {{
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          justifySelf: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}/>  
      </div>

      <div className="HeaderBar">
        <h1>Octocat World</h1>
      </div>
    </div>
  );
}

export default App;