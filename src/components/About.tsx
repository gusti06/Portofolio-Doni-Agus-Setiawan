export default function About(){
  return (
    <section id="about" className="py-16" data-aos="fade-up">
      <div className="mb-6 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-neon/80">About Me</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">About Me</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10">
          <p className="text-sm leading-7 text-white/75">
            Saya adalah mahasiswa Teknik Informatika ITERA angkatan 2023 yang memiliki minat pada pengembangan web, teknologi digital, manajemen proyek, dan kepemimpinan organisasi. Saya aktif mengikuti berbagai kegiatan kampus, kepanitiaan, dan pengembangan diri untuk meningkatkan kemampuan teknis maupun soft skills.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10">
          <p className="text-sm leading-7 text-white/75">
            Saya memiliki pengalaman dalam pengembangan website desa dan BUMDES saat kegiatan KKN, serta pernah mengembangkan game sebagai project mata kuliah Pemrograman Berorientasi Objek. Fokus saya adalah membangun solusi yang bermanfaat, rapi, dan siap digunakan.
          </p>
        </div>
      </div>
    </section>
  )
}
