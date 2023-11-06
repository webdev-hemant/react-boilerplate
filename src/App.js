import Home from "./components/Home";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* we want to protect these routes */}
        <Route path="/" element={<Home />} />
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
