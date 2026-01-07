import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

import { Home } from "./pages/Home";
import { Books } from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import { ReadingLists } from "./pages/ReadingLists";
import { Recommendations } from "./pages/Recommendations";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import ConfirmSignup from "./pages/ConfirmSignup"; // ✅ default import
import { Admin } from "./pages/Admin";
import { NotFound } from "./pages/NotFound";

import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/common/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/books/:id" element={<BookDetail />} />
              <Route path="/reading-lists" element={<ReadingLists />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/confirm" element={<ConfirmSignup />} />

              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}