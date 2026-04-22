export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white selection:bg-indigo-500 selection:text-white">
      <div className="text-center px-4 flex flex-col items-center">
        
        {/* Animated Status Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm font-medium text-zinc-300 shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
          Under Construction
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Coming Soon
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
          We are currently working hard behind the scenes to bring you something extraordinary.
        </p>
        {/* Footer/Social Links Placeholder */}
        <div className="mt-16 text-zinc-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Not A Game Company. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}