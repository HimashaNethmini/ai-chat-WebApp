import "./rootLayout.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import the publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

//import react-query
const queryClient = new QueryClient();

// enabling client side routing
const RootLayout = () => {
  return (
    //add <ClerkProvider> to my app
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="rootLayout">
          <header>
            <Link to="/dashboard" className="logo">
              <img src="/logo.png" alt="" />
              <span>CHAT AI</span>
            </Link>

            <div className="user">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>

          <main>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
