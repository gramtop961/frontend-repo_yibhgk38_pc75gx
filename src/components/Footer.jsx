export default function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something great</h3>
            <p className="mt-1 text-white/70 text-sm">Open to collaborations and freelance work.</p>
          </div>

          {/* Only GitHub link as requested */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12a9.997 9.997 0 006.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.158-1.11-1.466-1.11-1.466-.907-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.984 1.03-2.683-.103-.253-.447-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.844c.85.004 1.705.115 2.504.338 1.91-1.294 2.75-1.025 2.75-1.025.546 1.378.202 2.397.1 2.65.64.699 1.03 1.592 1.03 2.683 0 3.841-2.339 4.686-4.566 4.935.36.31.679.923.679 1.86 0 1.343-.012 2.427-.012 2.757 0 .268.18.579.688.48A10 10 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        </div>
        <div className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Monish. All rights reserved.</div>
      </div>
    </footer>
  );
}
