
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/hooks/useCart";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// As páginas Menu e Cart serão criadas nos próximos passos.
const App = () => (
  <TooltipProvider>
    <CartProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </TooltipProvider>
);

export default App;
