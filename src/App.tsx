import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/lib/auth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLayout } from "@/components/AppLayout";
import Auth from "./pages/Auth";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import ChapterPage from "./pages/ChapterPage";
import Quizzes from "./pages/Quizzes";
import Tutor from "./pages/Tutor";
import Planner from "./pages/Planner";
import Analytics from "./pages/Analytics";
import MockTests, { MockTestExam, MockTestResult } from "./pages/MockTests";
import Premium from "./pages/Premium";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
            <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/:subject/:chapter" element={<ChapterPage />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/tutor" element={<Tutor />} />
              <Route path="/planner" element={<Planner />} />
              <Route path="/mock-tests" element={<MockTests />} />
              <Route path="/mock-tests/:id/result" element={<MockTestResult />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/premium" element={<Premium />} />
            </Route>
            <Route path="/mock-tests/:id" element={<ProtectedRoute><MockTestExam /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
