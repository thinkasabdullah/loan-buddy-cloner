import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";

const Index = () => {
  const [currentView, setCurrentView] = useState<"login" | "register">("login");

  return (
    <>
      {currentView === "login" ? (
        <LoginForm onSwitchToRegister={() => setCurrentView("register")} />
      ) : (
        <RegisterForm onSwitchToLogin={() => setCurrentView("login")} />
      )}
    </>
  );
};

export default Index;
