export default function Contact(){
  const whatsappNumber = '6285609002347'
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const email = 'doni.123140009@student.itera.ac.id'
  const linkedin = 'https://www.linkedin.com/in/doni-agus-setiawan-a7a0202b2/'
  const instagram = 'https://instagram.com/__tyqz'
  const instagramUsername = '@__tyqz'
  const github = 'https://github.com/gusti06'
  const githubUsername = 'gusti06'

  return (
    <section id="contact" className="py-16" data-aos="fade-up">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-neon/80">Contact Person</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Contact Me</h2>
        <p className="mt-3 text-sm text-white/70">
          Kalau Anda ingin berdiskusi tentang project, kolaborasi, organisasi, atau peluang profesional, silakan hubungi saya melalui kanal berikut.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Contact Me</h3>
            <p className="mt-3 text-sm text-white/75">Saya terbuka untuk kolaborasi, project, mentoring, atau kesempatan organisasi. Pilih salah satu kanal di bawah untuk menghubungi saya langsung.</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-neon/90 px-4 py-2 text-sm font-semibold text-black transition hover:brightness-105">
                <span>WhatsApp</span>
                <span className="text-xs text-black/70">{whatsappNumber}</span>
              </a>

              <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5">
                Email
              </a>

              <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5">
                LinkedIn
              </a>

              <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/5">
                GitHub
              </a>
            </div>

            <div className="mt-4 rounded-xl border border-neon/20 bg-neon/10 p-3 text-sm text-white/80 inline-block">
              <p className="font-medium text-white">Lampung, Indonesia</p>
            </div>
          </div>

          <div className="w-full md:w-36 text-center">
            <img src="/FOTO PORTO.jpeg" alt="Doni Agus Setiawan" className="mx-auto h-28 w-28 rounded-full object-cover border-2 border-white/10" />
            <p className="mt-3 text-sm text-white/75">Open to Collaboration</p>
          </div>
        </div>
      </div>
    </section>
  )
}
