export default function Projects(){
  const projects = [
    {
      title: 'Website BUMDES Desa Hanura',
      category: 'Web Development',
      desc: 'Mengembangkan website BUMDES Desa Hanura saat kegiatan KKN sebagai media informasi dan digitalisasi layanan desa.',
      tech: ['HTML','CSS','JavaScript','WordPress'],
      github: 'https://github.com/desahanura/website-bumdes',
      demo: 'https://bumdes.desahanura.id/'
    },
    {
      title: 'Website WordPress Desa Hanura',
      category: 'CMS Development',
      desc: 'Membangun website desa berbasis WordPress untuk mendukung publikasi informasi dan dokumentasi kegiatan desa selama KKN.',
      tech: ['WordPress','Elementor'],
      github: 'https://github.com/desahanura/website-bumdes',
      demo: 'https://desahanura.id/'
    },
    {
      title: 'Game Project – Pemrograman Berorientasi Objek',
      category: 'Game Development',
      desc: 'Mengembangkan game sebagai project mata kuliah dengan menerapkan konsep OOP.',
      tech: ['Java','OOP'],
      github: 'https://github.com/gusti06/TUBES-PBO-GAME',
      demo: ''
    },
    {
      title: 'GlycoAI — Deteksi Risiko Diabetes',
      category: 'Kecerdasan Komputasional',
      desc: 'Tugas besar mata kuliah Kecerdasan Komputasional: web untuk deteksi risiko diabetes dan monitoring pasien diabetes.',
      tech: ['Python','Flask','TensorFlow','JavaScript','HTML','CSS'],
      github: 'https://github.com/gusti06/Tubes-KK_GlycoAI',
      demo: ''
    },
    {
      title: 'SmartMatch — Rekomendasi Laptop',
      category: 'Kecerdasan Komputasional',
      desc: 'Tugas besar Kecerdasan Komputasional: sistem rekomendasi pembelian laptop menggunakan metode pembelajaran mesin.',
      tech: ['Python','scikit-learn','Flask','JavaScript','HTML','CSS'],
      github: 'https://github.com/gusti06/Tubes-KK-SmartMatch',
      demo: ''
    },
    {
      title: 'MageArena',
      category: 'Game Development',
      desc: 'Project game berbasis arena untuk menampilkan pengembangan gameplay, logika permainan, dan interaksi pengguna.',
      tech: ['Game Development','JavaScript'],
      github: 'https://github.com/gusti06/MageArena',
      demo: ''
    }
  ]

  return (
    <section id="projects" className="py-16">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-neon/80">Selected Work</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Featured Projects</h2>
        <p className="mt-3 text-sm text-white/70">
          Beberapa proyek utama yang saya kerjakan, mulai dari tugas besar kecerdasan komputasional sampai project web dan game.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(p=> (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-neon/40 hover:bg-white/7"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-neon/10 blur-3xl transition duration-300 group-hover:bg-neon/20" />
            <div className="relative flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">{p.category}</p>
                <h3 className="mt-2 text-lg font-semibold leading-tight">{p.title}</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neon/80">
                Project
              </span>
            </div>

            <p className="relative mt-4 text-sm leading-6 text-white/75">{p.desc}</p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.tech.map(t=> <span key={t} className="rounded-full border border-white/10 bg-white/7 px-2.5 py-1 text-[11px] text-white/80">{t}</span>)}
            </div>

            <div className="relative mt-6 flex gap-3">
              <a href={p.github} target="_blank" rel="noreferrer" className="flex-1 rounded-full bg-neon px-4 py-2 text-center text-sm font-semibold text-black transition hover:brightness-110">
                GitHub
              </a>
              {p.demo ? (
                <a href={p.demo} target="_blank" rel="noreferrer" className="flex-1 rounded-full border border-white/10 px-4 py-2 text-center text-sm font-semibold text-white/80 transition hover:border-neon/50 hover:text-neon">
                  Demo
                </a>
              ) : (
                <span className="flex-1 rounded-full border border-dashed border-white/10 px-4 py-2 text-center text-sm text-white/35">
                  No demo
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
