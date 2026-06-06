export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/10 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-white/75">
          © {new Date().getFullYear()} Doni Agus Setiawan
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
          Mahasiswa Teknik Informatika ITERA
        </p>
      </div>
    </footer>
  )
}
