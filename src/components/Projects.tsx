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
    }
  ]

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p=> (
          <article
            key={p.title}
            className="p-4 bg-white/3 rounded-lg transition duration-300 hover:-translate-y-1 hover:bg-white/5"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm mt-2">{p.desc}</p>
            {p.demo && <p className="text-xs mt-2 text-neon/80">Demo: <a href={p.demo} target="_blank" rel="noreferrer" className="underline hover:text-neon">{p.demo.replace('https://', '')}</a></p>}
            <div className="mt-3 flex flex-wrap gap-2">{p.tech.map(t=> <span key={t} className="px-2 py-1 bg-white/6 rounded-full text-xs">{t}</span>)}</div>
            <div className="mt-4 flex gap-2">
              <a href={p.github} target="_blank" rel="noreferrer" className="flex-1 px-3 py-1 bg-neon text-black rounded text-center text-sm font-semibold hover:brightness-110 transition">GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
