import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full relative scroll-smooth flex">
      <header className="z-40 h-20 w-full fixed">
        <Navbar />
      </header>
      <main className="h-[calc(100%_-_5rem)] w-full overflow-auto z-10 absolute bottom-0">
        {children}
      </main>
    </div>
  );
}
