import "./styles.css";
import { Auth } from "./components/Auth";
import { Banking } from "./components/Banking";
export default function App() {
  return (
    <div className="App">
      <Auth />
      <Banking />
    </div>
  );
}
