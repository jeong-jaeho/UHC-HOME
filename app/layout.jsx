import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "UHC@HOME",
  description: "Making UHC accessible right in your own room!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
