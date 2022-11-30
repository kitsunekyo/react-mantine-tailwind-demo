import { useState } from "react";
import {
  Autocomplete,
  Button,
  ColorPicker,
  MantineProvider,
} from "@mantine/core";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, onChange] = useState("rgba(47, 119, 150, 0.7)");

  return (
    <MantineProvider
      theme={{
        primaryColor: "#ffcc00",
      }}
      withNormalizeCSS
      withGlobalStyles
    >
      <div className="text-center p-8">
        <div className="flex gap-4 justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="h-[100px] logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img
              src={reactLogo}
              className="h-[100px] logo react"
              alt="React logo"
            />
          </a>
        </div>
        <h1>Vite, React, Typescript, Tailwind, Mantine</h1>
        <div className="card">
          <Button
            radius="md"
            variant="light"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </Button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <div className="max-w-[400px] mx-auto">
            <Autocomplete
              label="Your favorite framework/library"
              placeholder="Pick one"
              data={["React", "Angular", "Svelte", "Vue"]}
            />
            <hr className="my-6" />
            <ColorPicker format="rgba" value={value} onChange={onChange} />
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </MantineProvider>
  );
}

export default App;
