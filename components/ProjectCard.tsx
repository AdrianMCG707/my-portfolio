import Link from "next/link"
import { Project } from "../data/projects"

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="bg-white border border-[#D3D1C7] rounded-xl p-5 hover:border-[#888780] transition-colors cursor-pointer">
        <div className="w-full h-40 bg-[#E8E6E0] rounded-lg mb-4 flex items-center justify-center">
          <span className="text-[#888780] text-sm">Project image</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-sm font-medium text-[#1a1a18]">{project.title}</h2>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E8E6E0] text-[#2C2C2A] border border-[#B4B2A9]">
            {project.status}
          </span>
        </div>
        <p className="text-[10px] text-[#888780] mb-2">{project.tags.join(" · ")}</p>
        <p className="text-xs text-[#5f5e5a] mb-3 leading-relaxed line-clamp-2">{project.description}</p>
        <span className="text-xs font-medium text-[#2C2C2A]">View project →</span>
      </div>
    </Link>
  )
}