export type Project = {
    id: number
    title: string
    year: string
    description: string
    tags: string[]
    status: "Live" | "Complete" | "In Progress"
    highlights: string[]
    githubUrl: string
    liveUrl: string
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Resume Server",
      year: "2025",
      description:
        "A production-style backend REST API built in Java with Spring Boot. Stores and serves resume data — users, projects, skills, work experience, and education — secured with JWT authentication and backed by PostgreSQL.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
      status: "Complete",
      highlights: [
        "Built a layered architecture (Controller → Service → Repository) with full separation of concerns",
        "Implemented JWT authentication with BCrypt password hashing and a Spring Security filter chain",
        "Designed a relational PostgreSQL schema with foreign keys, indexes, and Flyway versioned migrations",
        "Wrote unit and integration tests using JUnit and MockMvc following Arrange/Act/Assert pattern",
        "Configured Docker Compose for local development and environment-variable-based secrets management",
      ],
      githubUrl: "https://github.com/AdrianMCG707/resume-server",
      liveUrl: "link incoming ...",
    },
  ]