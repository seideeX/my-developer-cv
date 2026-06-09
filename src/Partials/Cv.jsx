import { useState } from "react";
import unnamed from "../assets/unnamed.jpg";
import ibims from "../assets/ibims.png";
import cra from "../assets/cra.png";

const data = {
  name: "John Xedric B. Alejo",
  contact: {
    phone: "(+63) 9063852906",
    email: "johnxedricalejo07@gmail.com",
    address:
      "Purok 07, Centro San Antonio, City of Ilagan, Isabela, Philippines, 3300",
    github: "https://github.com/seideeX",
  },
  objective:
    "Motivated and dedicated Bachelor of Science in Information Technology graduate seeking an opportunity to apply technical skills, leadership experience, and problem-solving abilities to contribute effectively to organizational success while continuously developing professionally.",
  experience: [
    {
      id: 1,
      title: "President",
      org: "Philippine Information Technology of the North (PiTON)",
      period: "AY 2025–2026",
      point:
        "Led a student IT organization dedicated to promoting technology education, professional development, and innovation among students. Organized academic programs, technical workshops, seminars, and technology-related events while coordinating with faculty members, industry professionals, and student leaders.",
    },
    {
      id: 2,
      title: "Information Technology Intern (OJT)",
      org: "Schools Division Office – City of Ilagan, ICT Unit",
      period: "2025–2026",
      point:
        "Provided technical support and ICT services, including computer troubleshooting, printer maintenance, software installation, system configuration, and network assistance. Participated in the development of Project TALA, a centralized time and attendance logging system, performing database design, coding, testing, debugging, biometric device integration, and system optimization.",
    },
    {
      id: 3,
      title: "Resource Speaker – IT Specialist: Database Training",
      org: "Ifugao State University (IFSU) Potia Campus",
      period: "2025",
      point:
        "Conducted lectures and hands-on training sessions on database concepts, database design, SQL, and application development. Guided students through practical exercises and real-world database implementation techniques.",
    },
    {
      id: 4,
      title: "Resource Speaker – IT Specialist: Database Training",
      org: "Isabela State University (ISU) Cabagan Campus",
      period: "2025",
      point:
        "Delivered specialized database programming training and workshops, focusing on database management systems, data modeling, and database-driven application development. Facilitated interactive learning activities to strengthen students' technical competencies.",
    },
    {
      id: 5,
      title: "Research Presenter",
      org: "International Conference on Sustainable Health, Education, and Technology",
      period: "2025",
      point:
        "Presented a research paper at an international academic conference, demonstrating strong research, analytical, public speaking, and technical communication skills while engaging with researchers and professionals from various disciplines.",
    },
    {
      id: 6,
      title: "Two-Time Champion – Database Application Development",
      org: "ICT Roadshow Competitions",
      period: "2024–2025",
      point:
        "Earned consecutive championship titles in Database Application Development competitions during 2024 and 2025. Designed and developed database-driven applications, showcasing proficiency in database management, system analysis, programming, and technical presentation.",
    },
  ],
  projects: [
    {
      id: 1,
      name: "iBIMS",
      full: "Ilagan City Barangay Information Management System",
      desc: "Full-stack web application for efficient barangay data management and reporting.",
      tags: ["Laravel", "React", "PHP", "GitHub"],
      github: "https://github.com/your-username/ibims",
      // Replace with an actual screenshot URL or import
      image: ibims,
    },
    {
      id: 2,
      name: "CDRRMO Risk Assessment",
      full: "Community Risk Assessment System",
      desc: "System for assessing disaster damages in barangays of the City of Ilagan, supporting data collection, risk analysis, and reporting.",
      tags: ["PHP", "Laravel", "MySQL", "GitHub"],
      github: "https://github.com/your-username/cdrrmo",
      // Replace with an actual screenshot URL or import
      image: cra,
    },
  ],
  education: [
    {
      id: 1,
      degree: "Bachelor of Science in Information Technology",
      school: "Isabela State University – Ilagan Campus",
      address: "Calamagui 2nd, City of Ilagan, Isabela",
      period: "2022 – 2026",
    },
    {
      id: 2,
      degree: "Senior High School – STEM Strand",
      school: "Isabela National High School - INHS",
      address: "San Vicente, City of Ilagan, Isabela",
      period: "2020 – 2022",
    },
    {
      id: 3,
      degree: "Junior High School",
      school:
        "San Antonio National Agro-Industrial and Vocational High School - SANAIVHS",
      address: "Centro San Antonio, City of Ilagan, Isabela",
      period: "2016 – 2020",
    },
    {
      id: 4,
      degree: "Primary Education",
      school: "San Antonio Elementary School",
      address: "Centro San Antonio, City of Ilagan, Isabela",
      period: "2009 – 2016",
    },
  ],
  skills: [
    {
      id: 1,
      cat: "Web Development",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    { id: 2, cat: "Frameworks & Tools", items: ["Laravel", "GitHub"] },
    {
      id: 3,
      cat: "Programming Languages",
      items: ["PHP", "Java", "C++", "Python", ".NET"],
    },
    {
      id: 4,
      cat: "Networking",
      items: ["LAN setup", "Troubleshooting", "Cisco Packet Tracer"],
    },
    { id: 5, cat: "Technical Support", items: ["Hardware troubleshooting"] },
    { id: 6, cat: "Software & Apps", items: ["MS Office", "Canva"] },
  ],
  certificates: [
    "IT Specialist Certification in Databases (2024)",
    "2nd Place – TRON 2025 Cyber Defense",
    "Champion – 2024 CSSICT Roadshow (Database Application)",
    "Champion – 2025 CSSICT Roadshow (Database Application)",
    "Regional ITE Convention 2025",
    "National Certificate II – Computer Systems Servicing (2025)",
    "TCON 7 National IT Certificate 2023",
    "AI Ready ASEAN Certificate 2025",
  ],
  references: [
    {
      id: 1,
      name: "Mark Gil T. Gañgan, MIT",
      role: "Capstone Project Adviser",
      email: "markgil.t.gangan@isu.edu.ph",
    },
    {
      id: 2,
      name: "Orfel L. Bejarin, DIT",
      role: "Organization Adviser",
      email: "orfel.l.bejarin@isu.edu.ph",
    },
  ],
};

// Replace with your actual photo import, e.g.:
// import profilePhoto from "./assets/profile.jpg";
const profilePhoto = unnamed;

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400 whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-slate-800" />
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block text-[11px] px-2 py-0.5 rounded border border-slate-700 bg-slate-900 text-slate-400 mr-1.5 mb-1.5">
      {children}
    </span>
  );
}

export default function AlejoCV() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Gradient accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500" />

      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* ── Header ─────────────────────────────────────── */}
        <header className="flex flex-col sm:flex-row gap-6 items-start mb-10">
          {/* Avatar */}
          <div className="shrink-0">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="John Xedric B. Alejo"
                className="w-24 h-24 rounded-full object-cover border-2 border-slate-700"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl font-medium text-slate-500">
                JXA
              </div>
            )}
          </div>

          {/* Name + contact */}
          <div className="flex-1">
            <p className="text-[11px] tracking-[0.2em] uppercase text-cyan-400 font-semibold mb-1">
              Curriculum Vitae
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-none mb-3">
              John Xedric
              <br />
              <span className="text-slate-400 font-light">B. Alejo</span>
            </h1>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-[12px] text-slate-400">
              <span>{data.contact.phone}</span>
              <a
                href={`mailto:${data.contact.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {data.contact.email}
              </a>
              <a
                href={data.contact.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                GitHub
              </a>
              <span>{data.contact.address}</span>
            </div>
          </div>
        </header>

        {/* Objective */}
        <div className="border-l-2 border-cyan-500 pl-4 text-[13px] text-slate-400 leading-relaxed bg-slate-900/40 py-3 pr-4 rounded-r-md mb-10">
          {data.objective}
        </div>

        {/* ── Projects ───────────────────────────────────── */}
        <section className="mb-10">
          <SectionHeader title="Major Projects" />
          <div className="grid sm:grid-cols-2 gap-4">
            {data.projects.map((p) => (
              <div
                key={p.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-700 transition-colors duration-200"
              >
                {/* Project image / placeholder */}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-36 object-cover"
                  />
                ) : (
                  <div className="w-full h-36 bg-slate-800 flex flex-col items-center justify-center gap-2 text-slate-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0zm6-4a2 2 0 11-4 0 2 2 0 014 0zM3 8a2 2 0 114 0 2 2 0 01-4 0z"
                      />
                    </svg>
                    <span className="text-[11px]">{p.name}</span>
                  </div>
                )}

                <div className="p-4">
                  <p className="text-[13px] font-semibold text-white">
                    {p.name}
                  </p>
                  <p className="text-[11px] text-slate-500 mb-2">{p.full}</p>
                  <p className="text-[12px] text-slate-400 leading-relaxed mb-3">
                    {p.desc}
                  </p>
                  <div className="mb-3">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-md border border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    {/* GitHub icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ─────────────────────────────────── */}
        <section className="mb-10">
          <SectionHeader title="Experience" />
          <div className="space-y-5">
            {data.experience.map((e) => (
              <div
                key={e.id}
                className="border-l border-slate-800 hover:border-cyan-600 transition-colors duration-200 pl-4"
              >
                <div className="flex flex-wrap justify-between items-baseline gap-1 mb-0.5">
                  <p className="text-[13px] font-semibold text-white">
                    {e.title}
                  </p>
                  {e.period && (
                    <span className="text-[11px] text-slate-500">
                      {e.period}
                    </span>
                  )}
                </div>
                <p className="text-[12px] text-cyan-500 mb-1.5">{e.org}</p>
                <p className="text-[12px] text-slate-400 leading-relaxed flex gap-2">
                  <span className="text-slate-600 mt-0.5 shrink-0">›</span>
                  {e.point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Education ──────────────────────────────────── */}
        <section className="mb-10">
          <SectionHeader title="Education" />
          <div className="divide-y divide-slate-800">
            {data.education.map((e) => (
              <div
                key={e.id}
                className="flex flex-wrap justify-between items-start gap-2 py-4"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-white">
                    {e.degree}
                  </p>
                  <p className="text-[12px] text-slate-300 mt-0.5">
                    {e.school}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {e.address}
                  </p>
                </div>
                <span className="text-[11px] text-slate-500 shrink-0 pt-0.5">
                  {e.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ─────────────────────────────────────── */}
        <section className="mb-10">
          <SectionHeader title="Skills" />
          <div className="grid sm:grid-cols-2 gap-3">
            {data.skills.map((sk) => (
              <div
                key={sk.id}
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-3"
              >
                <p className="text-[11px] text-slate-500 font-medium mb-2">
                  {sk.cat}
                </p>
                <div>
                  {sk.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Certificates + References ──────────────────── */}
        <div className="grid sm:grid-cols-2 gap-10 mb-10">
          <section>
            <SectionHeader title="Certificates" />
            <ul className="space-y-2">
              {data.certificates.map((cert, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[12px] text-slate-400 leading-relaxed"
                >
                  <span className="text-cyan-600 shrink-0 mt-0.5 text-[9px]">
                    ◆
                  </span>
                  {cert}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeader title="References" />
            <div className="space-y-5">
              {data.references.map((ref) => (
                <div key={ref.id}>
                  <p className="text-[13px] font-semibold text-white">
                    {ref.name}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {ref.role}
                  </p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {ref.email}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-4 flex justify-between text-[11px] text-slate-600">
          <span>John Xedric B. Alejo · CV</span>
          <span>City of Ilagan, Isabela, PH</span>
        </footer>
      </div>
    </div>
  );
}
