import { FaCode, FaPaintBrush, FaJsSquare, FaWordpress, FaProjectDiagram, FaChartBar, FaUsers, FaComments, FaHandshake, FaBullhorn, FaLightbulb, FaClock } from 'react-icons/fa'

export default function Skills(){
  const hard = [
    { name: 'HTML', level: 92, icon: FaCode, category: 'Frontend', accent: 'from-emerald-300/20 to-cyan-300/10' },
    { name: 'CSS', level: 90, icon: FaPaintBrush, category: 'Frontend', accent: 'from-sky-300/20 to-indigo-300/10' },
    { name: 'JavaScript', level: 86, icon: FaJsSquare, category: 'Frontend', accent: 'from-amber-300/20 to-yellow-300/10' },
    { name: 'WordPress', level: 84, icon: FaWordpress, category: 'CMS', accent: 'from-violet-300/20 to-fuchsia-300/10' },
    { name: 'UI/UX', level: 78, icon: FaProjectDiagram, category: 'Design', accent: 'from-pink-300/20 to-rose-300/10' },
    { name: 'OOP', level: 80, icon: FaCode, category: 'Programming', accent: 'from-teal-300/20 to-emerald-300/10' },
    { name: 'Data Analysis', level: 76, icon: FaChartBar, category: 'Data', accent: 'from-cyan-300/20 to-sky-300/10' },
    { name: 'System Admin', level: 74, icon: FaCode, category: 'Infra', accent: 'from-zinc-300/20 to-slate-300/10' },
  ]
  const soft = [
    { name: 'Leadership', icon: FaUsers, tag: 'Leading' },
    { name: 'Public Speaking', icon: FaComments, tag: 'Communication' },
    { name: 'Teamwork', icon: FaHandshake, tag: 'Collaboration' },
    { name: 'Event Management', icon: FaBullhorn, tag: 'Organization' },
    { name: 'Communication', icon: FaComments, tag: 'Communication' },
    { name: 'Problem Solving', icon: FaLightbulb, tag: 'Analysis' },
    { name: 'Time Management', icon: FaClock, tag: 'Planning' },
  ]
  return (
    <section id="skills" className="py-16" data-aos="fade-up">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-neon/80">Capabilities</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Skills & Technologies</h2>
        <p className="mt-3 text-sm text-white/70">
          Perpaduan kemampuan teknis dan soft skills yang saya gunakan untuk membangun website, mengelola proyek, dan bekerja dalam tim.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 lg:col-span-3">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h4 className="text-lg font-semibold">Hard Skills</h4>
            <span className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-neon/90">
              Core Stack
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {hard.map(skill => (
              <span
                key={skill.name}
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${skill.accent} px-3 py-1.5 text-sm text-white/85 transition hover:border-neon/40 hover:text-neon`}
              >
                <skill.icon className="text-xs text-neon/90" />
                {skill.name}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {hard.map(skill => (
              <div key={skill.name} className="rounded-xl border border-white/5 bg-black/10 p-3">
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium text-white/90">{skill.name}</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white/45">
                    {skill.category}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/7">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-neon via-cyan-300 to-emerald-300 shadow-[0_0_18px_rgba(34,197,94,0.35)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="mt-1 text-right text-xs text-white/40">{skill.level}% proficiency</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h4 className="text-lg font-semibold">Soft Skills</h4>
            <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/55">
              People Skills
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {soft.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black/15 px-4 py-3 transition duration-300 hover:border-neon/40 hover:bg-white/7"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neon/15 text-sm font-semibold text-neon">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <skill.icon className="text-base text-neon/80" />
                <div className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-white/85 transition group-hover:text-white">{skill.name}</span>
                  <span className="mt-0.5 inline-flex rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] text-white/45">
                    {skill.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
