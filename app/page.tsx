import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"
import FadeUp from "../components/FadeUp"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F4EF]">

      <nav className="bg-[#FAFAF7] border-b border-[#D3D1C7] px-8 h-14 flex items-center justify-between sticky top-0 z-10">
        <span className="text-sm font-medium text-[#1a1a18]">Adrian McGee</span>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm text-[#5f5e5a] hover:text-[#1a1a18] transition-colors">Work</a>
          <a href="#about" className="text-sm text-[#5f5e5a] hover:text-[#1a1a18] transition-colors">About</a>
          <a href="#contact" className="text-sm text-[#5f5e5a] hover:text-[#1a1a18] transition-colors">Contact</a>
          <button className="text-xs px-4 py-2 rounded-md bg-[#2C2C2A] text-[#F1EFE8] hover:bg-[#444441] transition-colors">
            Resume ↗
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-12">

        <FadeUp delay={0}>
          <div className="bg-white border border-[#D3D1C7] rounded-xl p-6 flex gap-5 items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#E8E6E0] flex items-center justify-center text-lg font-medium text-[#2C2C2A] flex-shrink-0">
              AM
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-medium text-[#1a1a18] mb-1">Adrian McGee</h1>
              <p className="text-xs text-[#5f5e5a] leading-relaxed mb-3">
                Backend software engineer and recent CS graduate from CSU East Bay.
                I build production-grade REST APIs, secure authentication systems,
                and scalable data layers using Java, Spring Boot, and PostgreSQL.
                Currently working in enterprise IT at Kaiser Permanente.
              </p>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1.5 rounded-md bg-[#2C2C2A] text-[#F1EFE8] hover:bg-[#444441] transition-colors">
                  View Resume ↗
                </button>
                <button className="text-xs px-3 py-1.5 rounded-md border border-[#2C2C2A] text-[#2C2C2A] hover:bg-[#F5F4EF] transition-colors">
                  GitHub ↗
                </button>
                <button className="text-xs px-3 py-1.5 rounded-md border border-[#2C2C2A] text-[#2C2C2A] hover:bg-[#F5F4EF] transition-colors">
                  LinkedIn ↗
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-4 gap-3 mb-8">
            {[
              { value: "2", label: "Projects" },
              { value: "8+", label: "Technologies" },
              { value: "3.6", label: "GPA" },
              { value: "B.S.", label: "Computer Science" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white border border-[#D3D1C7] rounded-lg p-3 text-center">
                <p className="text-lg font-medium text-[#1a1a18]">{stat.value}</p>
                <p className="text-[10px] text-[#888780]">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <section id="projects" className="mb-12">
            <p className="text-[11px] font-medium text-[#888780] uppercase tracking-widest mb-4">Projects</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp delay={0.3}>
          <section id="about" className="bg-white border border-[#D3D1C7] rounded-xl p-6 mb-8">
            <p className="text-[11px] font-medium text-[#888780] uppercase tracking-widest mb-3">About me</p>
            <p className="text-sm text-[#5f5e5a] leading-relaxed mb-4">
              I'm a backend software engineer and recent Computer Science graduate from CSU East Bay (3.6 GPA).
              I specialize in building production-style REST APIs using Java, Spring Boot, and PostgreSQL,
              with hands-on experience in Docker, Flyway migrations, and JWT authentication.
              Currently supporting 1,000+ staff at Kaiser Permanente as an Associate Workstation Technician
              while actively building toward a full-time software engineering role.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "PostgreSQL", "Docker", "Python", "JavaScript", "SQL", "Git", "REST APIs", "JUnit"].map((skill) => (
                <span key={skill} className="text-xs px-2 py-1 rounded bg-[#E8E6E0] text-[#2C2C2A]">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp delay={0.4}>
          <section id="contact" className="bg-white border border-[#D3D1C7] rounded-xl p-6">
            <p className="text-[11px] font-medium text-[#888780] uppercase tracking-widest mb-3">Contact</p>
            <p className="text-sm text-[#5f5e5a] leading-relaxed mb-4">
              Interested in working together or have a question? Feel free to reach out.
            </p>
            <button className="text-xs px-4 py-2 rounded-md bg-[#2C2C2A] text-[#F1EFE8] hover:bg-[#444441] transition-colors">
              Get in touch ↗
            </button>
          </section>
        </FadeUp>

      </main>
      </div>
  )
}