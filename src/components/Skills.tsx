export default function Skills(){
  const hard = ['HTML','CSS','JavaScript','WordPress','UI/UX','OOP','Data Analysis','System Admin']
  const soft = ['Leadership','Public Speaking','Teamwork','Event Management','Communication','Problem Solving','Time Management']
  return (
    <section id="skills" className="py-16" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-6">Skills & Technologies</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Hard Skills</h4>
          <div className="space-y-3">
            {hard.map(h=> (
              <div key={h}>
                <div className="flex justify-between"><span>{h}</span><span className="text-sm">80%</span></div>
                <div className="w-full bg-white/6 h-2 rounded mt-1"><div className="bg-neon h-2 rounded" style={{width:'80%'}} /></div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Soft Skills</h4>
          <ul className="list-disc list-inside">
            {soft.map(s=> <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
