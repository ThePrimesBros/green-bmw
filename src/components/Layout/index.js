import Navbar from "../Navbar";

export default function Layout({ children }) {
    return (
        <div className="h-screen w-full relative scroll-smooth">
            <header className="z-40 h-20 w-full fixed">
                <Navbar />
            </header>
            <main className="h-full w-full overflow-auto z-10">
                {children}
            </main>
        </div>
    );
}