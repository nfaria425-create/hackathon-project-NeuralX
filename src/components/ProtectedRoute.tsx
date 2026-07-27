import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="size-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
      </div>
    );
  }
  if (!user) return <Navigate to="/auth" replace />;
  return children;
};
