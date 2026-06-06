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

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">Kontak Langsung</h3>
            <span className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neon/90">
              Available
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span className="font-medium text-white/90">WhatsApp</span>
              <span className="text-right text-white/70">{whatsappNumber}</span>
            </a>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span className="font-medium text-white/90">Instagram</span>
              <span className="break-all text-right text-white/70">{instagramUsername}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span className="font-medium text-white/90">Email</span>
              <span className="break-all text-right text-white/70">{email}</span>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span className="font-medium text-white/90">GitHub</span>
              <span className="break-all text-right text-white/70">{githubUsername}</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span className="font-medium text-white/90">LinkedIn</span>
              <span className="break-all text-right text-white/70">doni-agus-setiawan-a7a0202b2</span>
            </a>
          </div>

          <div className="mt-4 rounded-xl border border-neon/20 bg-neon/10 p-4 text-sm text-white/80">
            <p className="font-medium text-white">Lampung, Indonesia</p>
            <p className="mt-1">Siap untuk kolaborasi, project, organisasi, dan peluang profesional lainnya.</p>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur">
          <h3 className="mb-5 text-lg font-semibold">Quick Message</h3>
          <label className="mb-2 block text-sm text-white/80">Name</label>
          <input className="mb-3 w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none ring-0 transition placeholder:text-white/30 focus:border-neon/50" placeholder="Your name" />
          <label className="mb-2 block text-sm text-white/80">Email</label>
          <input className="mb-3 w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none ring-0 transition placeholder:text-white/30 focus:border-neon/50" placeholder="your@email.com" />
          <label className="mb-2 block text-sm text-white/80">Message</label>
          <textarea className="mb-4 w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none ring-0 transition placeholder:text-white/30 focus:border-neon/50" rows={5} placeholder="Tell me about your project..." />
          <button className="rounded-full bg-neon px-5 py-3 font-semibold text-black transition hover:brightness-110">Send Message</button>
        </form>
      </div>
    </section>
  )
}
