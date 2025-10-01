import { BrowserRouter as Router, Routes } from "react-router-dom";
import Slider from "./pages/Slider";
import CursorChaos from "@/components/cursor/CursorChaos";

export default function App() {
  return (
    <Router>
      <CursorChaos />
      <Slider />
      <Routes></Routes>
    </Router>
  );
}
