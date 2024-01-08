import Navbar from "@/components/modules/navbar/Navbar";
import Sidebar from "@/components/modules/sidebar/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <Sidebar />

        <main className="main">
          <Navbar />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
