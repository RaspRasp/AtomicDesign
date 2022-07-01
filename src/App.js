import { UserProveider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProveider>
      <Router />
    </UserProveider>
  );
}
