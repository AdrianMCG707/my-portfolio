import Link from "next/link"
import { projects } from "../../../data/projects"


type Props = {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F5F4EF] p-12">
        <p className="text-[#888780]">Project not found.</p>
      </main>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F4EF]">

      <nav className="bg-[#FAFAF7] border-b border-[#D3D1C7] px-8 h-14 flex items-center justify-between sticky top-0 z-10">
        <span className="text-sm font-medium text-[#1a1a18]">Adrian McGee</span>
        <Link href="/" className="text-sm text-[#5f5e5a] hover:text-[#1a1a18] transition-colors">
          ← Back to projects
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-8 py-12">

        <div className="bg-white border border-[#D3D1C7] rounded-xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-medium text-[#1a1a18]">{project.title}</h1>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#E8E6E0] text-[#2C2C2A] border border-[#B4B2A9]">
              {project.status}
            </span>
          </div>
          <p className="text-sm text-[#888780] mb-6">{project.year}</p>
          <p className="text-sm text-[#5f5e5a] leading-relaxed">{project.description}</p>
        </div>

        <div className="bg-white border border-[#D3D1C7] rounded-xl p-8 mb-6">
          <p className="text-[11px] font-medium text-[#888780] uppercase tracking-widest mb-4">
            Highlights
          </p>
          <ul className="space-y-3">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-3 text-sm text-[#5f5e5a] leading-relaxed">
                <span className="text-[#2C2C2A] font-medium mt-0.5">→</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-[#D3D1C7] rounded-xl p-8 mb-6">
          <p className="text-[11px] font-medium text-[#888780] uppercase tracking-widest mb-4">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-md bg-[#E8E6E0] text-[#2C2C2A]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {(project.githubUrl || project.liveUrl) && (
          <div className="bg-white border border-[#D3D1C7] rounded-xl p-8">
            <p className="text-[11px] font-medium text-[#888780] uppercase tracking-widest mb-4">
              Links
            </p>
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-xs px-4 py-2 rounded-md bg-[#2C2C2A] text-[#F1EFE8] hover:bg-[#444441] transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="text-xs px-4 py-2 rounded-md border border-[#2C2C2A] text-[#2C2C2A] hover:bg-[#F5F4EF] transition-colors"
                >
                  Live site ↗
                </a>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  )
}