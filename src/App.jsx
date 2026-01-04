import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./Admin";
import Messages from "./components/Messages";
import Notification from "./components/Notification";
import File from "./components/File";

function App() {
  return (
    <div>
      
     <Routes>
      <Route path="/" element={<Admin />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="file" element={<File />} />
        <Route path="messages" element={<Messages />} />
        <Route path="notification" element={<Notification />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
