import { assetPath } from '../lib/assetPath'

type CertificateItem = {
  title: string
  issuer: string
  year: string
  category: string
  tone: string
  file: string
  previewType: 'image' | 'pdf'
}

export default function Certificates(){
  const list: CertificateItem[] = [
    {
      title: 'Panitia Pelatihan Dosen Wali dan CHIT-CHAT',
      issuer: 'Institut Teknologi Sumatera',
      year: '2024',
      category: 'Committee',
      tone: 'from-amber-200/20 via-white/5 to-amber-400/10',
      file: assetPath('/certificates/dosen-wali-chit-chat.png'),
      previewType: 'image'
    },
    {
      title: 'HMIF Mengabdi 2024',
      issuer: 'HMIF ITERA',
      year: '2024',
      category: 'Volunteer',
      tone: 'from-cyan-300/20 via-white/5 to-blue-400/10',
      file: assetPath('/certificates/hmif-mengabdi.jpg'),
      previewType: 'image'
    },
    {
      title: 'Seminar Nasional Public Speaking',
      issuer: 'Speaking Official',
      year: '2025',
      category: 'Seminar',
      tone: 'from-red-300/20 via-white/5 to-orange-300/10',
      file: assetPath('/certificates/seminar-public-speaking.jpg'),
      previewType: 'image'
    },
    {
      title: 'Panitia Duta Generasi Berencana ITERA 2025',
      issuer: 'PIK-R Sejahtera ITERA',
      year: '2025',
      category: 'Staff',
      tone: 'from-teal-300/20 via-white/5 to-emerald-400/10',
      file: assetPath('/certificates/panitia-dugen-2025.jpg'),
      previewType: 'image'
    },
    {
      title: 'Seminar Kependudukan BKKBN',
      issuer: 'BKKBN Provinsi Lampung',
      year: '2024',
      category: 'Seminar',
      tone: 'from-indigo-300/20 via-white/5 to-violet-400/10',
      file: assetPath('/certificates/seminar-kependudukan.png'),
      previewType: 'image'
    },
    {
      title: 'IBM Certification – Python 101 for Data Science',
      issuer: 'IBM / SkillsBuild',
      year: '2025',
      category: 'Certification',
      tone: 'from-blue-300/20 via-white/5 to-sky-400/10',
      file: assetPath('/certificates/ibm-certificate.pdf'),
      previewType: 'pdf'
    },
    {
      title: 'HMIF Mengabdi 2024',
      issuer: 'HMIF ITERA',
      year: '2024',
      category: 'Volunteer',
      tone: 'from-fuchsia-300/20 via-white/5 to-cyan-400/10',
      file: assetPath('/certificates/hmif-mengabdi.pdf'),
      previewType: 'pdf'
    }
  ]

  return (
    <section id="certificates" className="py-16" data-aos="fade-up">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-neon text-sm uppercase tracking-[0.25em]">Certificates</p>
          <h2 className="text-2xl font-bold">Certifications & Achievements</h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-white/70">
          <span className="text-neon">✦</span>
          Ready for PDF/preview upload
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {list.map((certificate, index) => {
          const isFeatured = index === 0 || certificate.previewType === 'pdf'

          return (
            <article
              key={`${certificate.title}-${index}`}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-neon/30 ${isFeatured ? 'md:col-span-2 xl:col-span-1' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${certificate.tone} opacity-100`} />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative flex h-full flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                    {certificate.category}
                  </span>
                  <span className="text-sm text-white/70">{certificate.year}</span>
                </div>

                <div className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${isFeatured ? 'min-h-[280px]' : 'min-h-[220px]'}`}>
                  <div className="mb-3 flex items-center justify-between text-xs text-white/60">
                    <span>Certificate Preview</span>
                    <span>{certificate.issuer}</span>
                  </div>

                  {certificate.previewType === 'image' ? (
                    <a href={certificate.file} target="_blank" rel="noreferrer" className="block">
                      <img
                        src={certificate.file}
                        alt={certificate.title}
                        className="h-[220px] w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                    </a>
                  ) : (
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-[220px] items-center justify-center rounded-xl border border-dashed border-white/15 bg-black/20 p-4 text-center transition hover:bg-black/30"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-neon/90">PDF</p>
                        <h3 className="mt-3 text-lg font-semibold leading-tight text-white">
                          {certificate.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/70">Klik untuk membuka PDF</p>
                      </div>
                    </a>
                  )}
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold leading-snug text-white">{certificate.title}</h4>
                  <p className="text-sm text-white/70">Diterbitkan oleh {certificate.issuer}</p>
                </div>

                <div className="mt-auto flex gap-3">
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-neon px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
                  >
                    <span>👁</span>
                    View
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = certificate.file
                      link.download = certificate.file.split('/').pop() || certificate.title
                      link.click()
                    }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 transition hover:border-neon/40 hover:bg-white/10"
                  >
                    <span>⬇</span>
                    Download
                  </button>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <p className="mt-5 text-sm text-white/55">
        Kalau Anda ingin, saya bisa lanjut memasukkan file PDF asli ke setiap kartu setelah Anda upload ke folder project.
      </p>
    </section>
  )
}
