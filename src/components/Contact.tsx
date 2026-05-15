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
      <div className="mb-6">
        <p className="text-neon text-sm uppercase tracking-[0.25em]">Contact Person</p>
        <h2 className="text-2xl font-bold">Contact Me</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-4 bg-white/3 rounded-lg border border-white/10 backdrop-blur">
          <h3 className="text-lg font-semibold mb-4">Kontak Langsung</h3>

          <div className="space-y-3 text-sm">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span>
                <span className="mr-2">📱</span>
                WhatsApp
              </span>
              <span className="text-white/70">{whatsappNumber}</span>
            </a>

            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span>
                <span className="mr-2">📸</span>
                Instagram
              </span>
              <span className="text-white/70 break-all text-right">{instagramUsername}</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span>
                <span className="mr-2">✉️</span>
                Email
              </span>
              <span className="text-white/70 break-all text-right">{email}</span>
            </a>

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span>
                <span className="mr-2">🐙</span>
                GitHub
              </span>
              <span className="text-white/70 break-all text-right">{githubUsername}</span>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-neon/40 hover:bg-white/5"
            >
              <span>
                <span className="mr-2">in</span>
                LinkedIn
              </span>
              <span className="text-white/70 break-all text-right">doni-agus-setiawan-a7a0202b2</span>
            </a>
          </div>

          <div className="mt-4 rounded-xl border border-neon/20 bg-neon/10 p-4 text-sm text-white/80">
            <p className="font-medium text-white">Lampung, Indonesia</p>
            <p className="mt-1">Siap untuk kolaborasi, project, organisasi, dan peluang profesional lainnya.</p>
          </div>
        </div>

        <form className="p-4 bg-white/3 rounded-lg border border-white/10 backdrop-blur">
          <label className="block mb-2">Name</label>
          <input className="w-full p-2 mb-3 rounded bg-black/20 outline-none ring-0 focus:border-neon/50 border border-white/10" />
          <label className="block mb-2">Email</label>
          <input className="w-full p-2 mb-3 rounded bg-black/20 outline-none ring-0 focus:border-neon/50 border border-white/10" />
          <label className="block mb-2">Message</label>
          <textarea className="w-full p-2 mb-3 rounded bg-black/20 outline-none ring-0 focus:border-neon/50 border border-white/10" rows={5} />
          <button className="px-4 py-2 bg-neon text-black rounded font-semibold transition hover:brightness-110">Send Message</button>
        </form>
      </div>
    </section>
  )
}
