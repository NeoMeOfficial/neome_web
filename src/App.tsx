import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { Header } from "@/components/Header";
import CookieConsent from "@/components/CookieConsent";
import SocialProofNotification from "@/components/SocialProofNotification";
import Blog from "./pages/Blog";
import BlogEditor from "./pages/BlogEditor";
import About from "./pages/About";
import OAplikacii from "./pages/OAplikacii";
import PrecoNeoMe from "./pages/PrecoNeoMe";
import Cena from "./pages/Cena";
import Contact from "./pages/Contact";
import Cvicenie from "./pages/Cvicenie";
import Strava from "./pages/Strava";
import Mysel from "./pages/Mysel";
import Extras from "./pages/Extras";
import Komunita from "./pages/Komunita";
import Programy from "./pages/Programy";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import AdminSettings from "./pages/AdminSettings";
import Transformacie from "./pages/Transformacie";
import HomeNew from "./pages/HomeNew";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeNew />} />
            <Route path="/o-aplikacii" element={<OAplikacii />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/editor" element={<BlogEditor />} />
            <Route path="/preco-neome" element={<PrecoNeoMe />} />
            <Route path="/cena" element={<Cena />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/cvicenie" element={<Cvicenie />} />
            <Route path="/strava" element={<Strava />} />
            <Route path="/mysel" element={<Mysel />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/komunita" element={<Komunita />} />
            <Route path="/programy" element={<Programy />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/transformacie" element={<Transformacie />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
          <SocialProofNotification />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
