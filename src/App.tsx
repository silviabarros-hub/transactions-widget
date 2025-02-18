import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import WidgetsList from "./components/Widgets/WidgetsList";
import { mockUser } from "./data/mockUser/mockUser";
import { CONFIG } from "./constants/config";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, CONFIG.API_DELAY);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-wrapper">
      <Header
        isLoading={isLoading}
        firstName={mockUser.firstName}
        surname={mockUser.surname}
      />
      <WidgetsList isLoading={isLoading} />
    </div>
  );
}

export default App;
