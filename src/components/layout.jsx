const Layout = ({ children, slide }) => {
  // full page div
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#111] to-[#372f47] p-3 text-white">
      <main className="flex flex-grow items-center justify-center p-32">
        {children}
      </main>
      <footer className="flex ml-auto font-mono">{slide}</footer>
    </div>
  );
};

export default Layout;
