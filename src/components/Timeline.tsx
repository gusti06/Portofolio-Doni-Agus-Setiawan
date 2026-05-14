export default function Timeline(){
  const organisationalExperience = [
    {
      period: '2024',
      title: 'Kepala Divisi Acara - KKN Desa Hanura',
      description:
        'Memimpin dan mengatur seluruh rangkaian kegiatan acara selama satu bulan pelaksanaan KKN, termasuk koordinasi tim, penyusunan konsep acara, pengaturan jadwal, dan komunikasi antar divisi.',
      tags: ['Leadership', 'Event Management', 'Team Coordination'],
      images: [
        '/FOTO%20MC%20KKN%201.jpeg',
        '/FOTO%20MC%20KKN%202.jpeg',
        '/FOTO%20MC%20KKN%203.jpeg',
      ],
      imageAlt: 'Dokumentasi MC KKN Desa Hanura',
    },
    {
      period: 'Agt 2023 - Sekarang',
      title: 'Kepala Divisi Seleksi dan Orientasi - KSR PMI Unit ITERA',
      description:
        'Memimpin divisi yang bertanggung jawab atas administrasi dan operasional kegiatan KSR, termasuk koordinasi seleksi anggota dan orientasi kegiatan organisasi.',
      tags: ['Leadership', 'Administration', 'Operations'],
    },
    {
      period: 'Mar 2025 - Mar 2026',
      title: 'BPH PIK-R Sejahtera ITERA - Divisi LifeSkill',
      description:
        'Sebagai Kakak Asuh TPB 52, membimbing mahasiswa TPB/baru pada tahun 2024 serta mengelola program life skill dan kewirausahaan untuk anggota PIK-R.',
      tags: ['Mentoring', 'Life Skill', 'Entrepreneurship'],
    },
    {
      period: 'Mar 2024 - Mar 2025',
      title: 'PIK-R Sejahtera ITERA - Staf BPH LifeSkill',
      description:
        'Berpartisipasi saat magang di divisi Humas PIK-R Sejahtera dan saat ini sedang magang di divisi PSKS.',
      tags: ['Public Relations', 'PSKS', 'Internship'],
    },
    {
      period: 'Jan 2024 - Jan 2025',
      title: 'Staf PPK - BPH HMIF ITERA',
      description:
        'Merancang dan melaksanakan program pengembangan keprofesian anggota HMIF agar aktivitas organisasi dan pengembangan diri berjalan selaras.',
      tags: ['Professional Development', 'Program Planning', 'HMIF'],
    },
    {
      period: 'Feb 2026 - Sekarang',
      title: 'Bendahara - Ambalan Singa Branta, Pramuka SMAN 1 Gadingrejo',
      description:
        'Bertanggung jawab atas pengelolaan keuangan ambalan pramuka, termasuk penerimaan dan pengeluaran dana, penyusunan anggaran, dan memastikan anggaran sesuai kebutuhan organisasi.',
      tags: ['Finance', 'Budgeting', 'Planning'],
    },
    {
      period: 'Jul 2020 - Jul 2023',
      title: 'PIK-R Sejahtera ITERA - Staf BPH LifeSkill',
      description:
        'Menjadi bagian dari pengembangan life skill, kakak asuh TPB, dan terlibat dalam kegiatan organisasi sejak awal periode kepengurusan.',
      tags: ['Kakak Asuh', 'Life Skill', 'Organization'],
    },
    {
      period: 'Sep 2022 - Jun 2023',
      title: 'Anggota Aktif - Palang Merah Remaja (PMR) SMAN 1 Gadingrejo',
      description:
        'Memberikan pertolongan pertama pada kondisi darurat serta terlibat dalam kegiatan kemanusiaan seperti penggalangan dana, pembagian bantuan, dan kunjungan sosial.',
      tags: ['First Aid', 'Humanitarian Work', 'Volunteering'],
    },
  ]

  const committeeExperience = [
    {
      period: '2024',
      title: 'PPLK 2024 - PJ Sekre Medis',
      description: 'Mengelola koordinasi administrasi sekretariat dan mendukung kebutuhan medis kegiatan PPLK 2024.',
      tags: ['Secretariat', 'Medical', 'Event Support'],
    },
    {
      period: '2024',
      title: 'Pelatihan Dosen Wali & Chit Chat 2024 - Acara',
      description: 'Membantu menyusun dan menjalankan rangkaian acara agar kegiatan berjalan tertib dan tepat waktu.',
      tags: ['Event', 'Coordination'],
    },
    {
      period: '2024',
      title: 'ITERUN 2024 - Medis',
      description: 'Terlibat sebagai tim medis untuk mendukung keamanan dan penanganan peserta selama kegiatan berlangsung.',
      tags: ['Medical', 'Safety'],
    },
    {
      period: '2024',
      title: 'CYKRAP / SIKRAP 2024 - MC',
      description: 'Menjadi MC pada kegiatan Cyberia Akrap / Sikrap 2024 dan menjaga alur acara tetap hidup serta terarah.',
      tags: ['MC', 'Public Speaking'],
      images: [
        '/FOTO%20MC%20SIKRAP%201.jpeg',
        '/FOTO%20MC%20SIKRAP%202.jpeg',
      ],
      imageAlt: 'Dokumentasi MC Sikrap 2024',
    },
    {
      period: '2024',
      title: 'IFGTTPB 2024 - Acara, PJ Game',
      description: 'Mengelola bagian acara serta bertanggung jawab pada pelaksanaan game agar kegiatan lebih interaktif.',
      tags: ['Event', 'Game', 'Fun Activity'],
    },
    {
      period: '2024',
      title: 'INTEX 2024 - Acara',
      description: 'Mendukung pelaksanaan inti acara, koordinasi rundown, dan kesiapan teknis selama kegiatan.',
      tags: ['Event', 'Rundown'],
    },
    {
      period: '2024',
      title: 'FTI EXPO 2024 - Acara',
      description: 'Membantu operasional acara dan memastikan kebutuhan pelaksanaan kegiatan terpenuhi.',
      tags: ['Event', 'Operations'],
    },
    {
      period: '2024',
      title: 'Dies Natalis KSR 2024 - Acara',
      description: 'Terlibat dalam panitia acara untuk mendukung perayaan dan keberlangsungan kegiatan organisasi.',
      tags: ['Event', 'Organization'],
    },
    {
      period: '2025',
      title: 'OPREC PIK-R 2025 - Acara, MC, Moderator',
      description: 'Berperan dalam pelaksanaan open recruitment sebagai tim acara, MC, dan moderator kegiatan.',
      tags: ['Event', 'MC', 'Moderator'],
    },
    {
      period: '2025',
      title: 'OPREC KSR 2025 - PJ Daplok',
      description: 'Bertanggung jawab atas dapur logistik untuk memastikan kebutuhan konsumsi dan perlengkapan tersedia.',
      tags: ['Logistics', 'Consumption'],
    },
    {
      period: '2025',
      title: 'FG KSR 2025 - Kadiv PDD',
      description: 'Memimpin divisi publikasi dan dokumentasi untuk mendukung publikasi kegiatan dan dokumentasi acara.',
      tags: ['PDD', 'Documentation', 'Leadership'],
    },
    {
      period: '2025',
      title: 'PILDUGEN 2025 - Staff Humas',
      description: 'Mendukung tim humas dalam komunikasi, koordinasi, dan hubungan antar pihak selama kegiatan.',
      tags: ['Public Relations', 'Communication'],
    },
    {
      period: '2025',
      title: 'StafSus PJ Sekre Medis PPLK 2025',
      description: 'Membantu kebutuhan sekretariat medis dan memastikan administrasi berjalan rapi selama rangkaian kegiatan.',
      tags: ['Secretariat', 'Medical'],
    },
    {
      period: '2025',
      title: 'Seminar Infest HMIF 2025 - Kadiv Acara',
      description: 'Mengatur jalannya acara seminar, koordinasi panitia, dan memastikan kegiatan berjalan lancar.',
      tags: ['Event', 'Leadership'],
    },
    {
      period: '2025',
      title: 'Mubes Oktober HMIF 2025 - Staf PDD Point Project',
      description: 'Membantu publikasi, dokumentasi, dan kebutuhan visual untuk mendukung agenda point project.',
      tags: ['PDD', 'Visual'],
    },
    {
      period: '2025',
      title: 'Mubes Oktober HMIF 2025 - Staff PDD / Media Kreatif',
      description: 'Membuat dan mengelola materi media kreatif untuk mendukung dokumentasi serta publikasi acara.',
      tags: ['Media Creative', 'PDD'],
    },
    {
      period: '2025',
      title: 'Dies Natalis KSR 2025 - Humas',
      description: 'Menjalankan tugas kehumasan untuk membantu komunikasi, promosi, dan koordinasi kegiatan.',
      tags: ['Public Relations', 'Communication'],
    },
    {
      period: '2025',
      title: 'HMIF Career Development 2025 - Humas',
      description: 'Mendukung kebutuhan humas dan komunikasi dalam kegiatan pengembangan karier mahasiswa.',
      tags: ['Public Relations', 'Career Development'],
    },
    {
      period: '14 - 15 Nov 2025',
      title: 'MC Wisuda ITERA Periode 23',
      description: 'Menjadi MC pada momen wisuda ITERA Periode 23 dan memandu jalannya acara resmi universitas.',
      tags: ['MC', 'Formal Event', 'Public Speaking'],
      image: '/FOTO%20MC%20WISUDA.jpeg',
      imageAlt: 'Dokumentasi MC Wisuda ITERA Periode 23',
    },
    {
      period: '2025',
      title: 'Sarasehan IF 2025 - Acara',
      description: 'Membantu tim acara dalam persiapan dan pelaksanaan sarasehan agar berlangsung tertib dan nyaman.',
      tags: ['Event', 'Coordination'],
    },
  ]

  const volunteerExperience = [
    {
      period: '2024',
      title: 'Pemateri Kesehatan Mental - Pra LKMM-TD 2024',
      description: 'Berbagi materi dan pengalaman tentang kesehatan mental kepada peserta kegiatan pra LKMM-TD 2024.',
      tags: ['Mentor', 'Mental Health', 'Public Speaking'],
    },
    {
      period: '2024',
      title: 'Volunteer Performance - DUGEN 2024',
      description: 'Mendukung jalannya penampilan dan kebutuhan teknis sebagai volunteer pada kegiatan DUGEN 2024.',
      tags: ['Volunteer', 'Performance'],
    },
    {
      period: '2024 / 2025',
      title: 'Kakak Asuh TPB 52',
      description: 'Membimbing mahasiswa TPB sebagai kakak asuh untuk membantu adaptasi awal perkuliahan dan kehidupan kampus.',
      tags: ['Mentoring', 'Student Support'],
    },
    {
      period: '2024',
      title: 'HMIF Mengabdi 2024',
      description: 'Menjadi MC di panti asuhan, PJ kelas, dan PJ game di SD sebagai bagian dari kegiatan pengabdian masyarakat.',
      tags: ['Community Service', 'MC', 'Education'],
    },
    {
      period: 'Jul 2024',
      title: 'Medis Riuh Periode Juli 2024 - HMEI',
      description: 'Mendukung kebutuhan medis kegiatan Riuh agar keamanan dan pertolongan pertama tetap terjaga.',
      tags: ['Medical', 'Event Safety'],
    },
    {
      period: '2024',
      title: 'Jaga Medis - Gunung Betung',
      description: 'Terlibat dalam penjagaan medis kegiatan di Gunung Betung untuk membantu respons kondisi darurat.',
      tags: ['Medical', 'Volunteer'],
    },
  ]

  const renderCards = (items: Array<{ period: string; title: string; description: string; tags: string[]; image?: string; images?: string[]; imageAlt?: string }>) => (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={`${item.title}-${item.period}`} className="p-5 bg-white/3 rounded-lg border border-white/10 hover:border-neon/40 transition-colors">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neon">{item.period}</p>
              <h3 className="font-semibold mt-2">{item.title}</h3>
            </div>
          </div>
          {item.image ? (
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <img src={item.image} alt={item.imageAlt ?? item.title} className="h-48 w-full object-cover" />
            </div>
          ) : item.images ? (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {item.images.map((image, index) => (
                <div key={image} className="overflow-hidden rounded-lg border border-white/10 bg-black/20">
                  <img
                    src={image}
                    alt={`${item.imageAlt ?? item.title} ${index + 1}`}
                    className="h-24 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
          <p className="text-sm mt-3 text-white/80">{item.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-white/6 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )

  return (
    <section id="leadership" className="py-16" data-aos="fade-up">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-neon text-sm uppercase tracking-[0.25em]">Experience</p>
          <h2 className="text-2xl font-bold">Organisational, Committee, and Volunteer Experience</h2>
        </div>
      </div>

      <div className="space-y-10">
        <section>
          <h3 className="text-lg font-semibold mb-4">Organisational Experience</h3>
          {renderCards(organisationalExperience)}
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Kepanitiaan</h3>
          {renderCards(committeeExperience)}
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-4">Volunteer</h3>
          {renderCards(volunteerExperience)}
        </section>
      </div>
    </section>
  )
}
