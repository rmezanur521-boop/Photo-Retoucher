import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/app/routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
