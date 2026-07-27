import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";

export const AppLayout = () => (
  <div className="flex min-h-screen">
    <AppSidebar />
    <main className="flex-1 p-8 overflow-x-hidden">
      <Outlet />
    </main>
  </div>
);
