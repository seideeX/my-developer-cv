import { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import { Sun, Moon, Menu, X, Network, Mail, Search } from "lucide-react";
import {
  profile,
  skills,
  projects,
  experience,
  education,
  certificates,
} from "./data/portfolio";
import "./portfolio.css";

/* ---------- hooks & helpers ---------- */
function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    } catch {}
    return "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "light" ? "dark" : "light"))];
}

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash, pathname]);
  return null;
}

export const filterProjects = (list, category, query) => {
  const q = query.trim().toLowerCase();
  return list.filter((p) => {
    if (category !== "All" && !p.category.includes(category)) return false;
    if (!q) return true;
    return [p.title, p.description, ...p.technologies, ...p.features]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
};

/* ---------- layout ---------- */
const NAV = ["home", "about", "skills", "projects", "experience", "contact"];

function Navbar() {
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach(
      (id) =>
        document.getElementById(id) && io.observe(document.getElementById(id)),
    );
    return () => io.disconnect();
  });
  return (
    <header className="nav-bar">
      <nav
        aria-label="Main"
        className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between"
      >
        <Link to="/#home" className="font-mono font-semibold">
          &lt;JXA<span className="accent"> /&gt;</span>
        </Link>
        <ul className="hidden md:flex gap-5 text-sm">
          {NAV.map((id) => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                aria-current={active === id ? "true" : undefined}
                className="nav-link capitalize"
              >
                {id}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <button
            className="btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            className="btn md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="md:hidden px-5 pb-3 reveal">
          {NAV.map((id) => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                onClick={() => setOpen(false)}
                className="block py-2 capitalize"
              >
                {id}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-5xl mx-auto px-5 py-14">
    <h2 className="section-title">
      <span className="accent font-mono text-base">//</span>
      {title}
    </h2>
    {children}
  </section>
);

/* ---------- projects ---------- */
function ProjectCard({ p }) {
  return (
    <Link
      to={`/projects/${p.id}`}
      className={`card overflow-hidden block ${p.featured ? "featured" : ""}`}
    >
      <div className="img-wrap">
        {p.image ? (
          <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
        ) : (
          <div className="img-fallback" aria-hidden="true">
            {p.title}
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between gap-2 items-start">
          <h3 className="font-semibold">{p.title}</h3>
          {p.featured && <span className="badge accent">Featured</span>}
        </div>
        <p className="text-sm muted my-2">{p.description}</p>
        <div>
          {p.technologies.map((t) => (
            <span className="badge" key={t}>
              {t}
            </span>
          ))}
        </div>
        <span className="text-sm accent font-medium">View details →</span>
      </div>
    </Link>
  );
}

function Projects() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const cats = useMemo(
    () => ["All", ...new Set(projects.flatMap((p) => p.category))],
    [],
  );
  const shown = filterProjects(
    [...projects].sort((a, b) => b.featured - a.featured),
    cat,
    q,
  );
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div
          className="flex flex-wrap gap-2 flex-1"
          role="group"
          aria-label="Filter by category"
        >
          {cats.map((c) => (
            <button
              key={c}
              className={`btn ${cat === c ? "btn-primary" : ""}`}
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="relative sm:w-64">
          <label htmlFor="psearch" className="sr-only">
            Search projects
          </label>
          <Search
            size={14}
            className="absolute left-3 top-3.5 muted"
            aria-hidden="true"
          />
          <input
            id="psearch"
            className="input"
            style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            placeholder="Search projects"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          {q && (
            <button
              onClick={() => setQ("")}
              aria-label="Clear search"
              className="absolute right-2 top-2.5"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
      {shown.length ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shown.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      ) : (
        <div className="card p-8 text-center" role="status">
          <p className="font-medium">No projects match your search.</p>
          <button
            className="btn mt-3"
            onClick={() => {
              setQ("");
              setCat("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </Section>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const p = projects.find((x) => x.id === id);
  if (!p) return <NotFound />;
  const related = projects
    .filter(
      (x) => x.id !== p.id && x.category.some((c) => p.category.includes(c)),
    )
    .slice(0, 2);
  const List = ({ title, items }) =>
    items?.length ? (
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <ul className="list-disc pl-5 muted space-y-1">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>
    ) : null;
  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <Link to="/#projects" className="accent text-sm">
        ← All projects
      </Link>
      <h1 className="text-3xl font-bold mt-3">{p.title}</h1>
      <p className="muted mt-1">{p.status}</p>
      {p.image && (
        <img
          src={p.image}
          alt={`${p.title} screenshot`}
          className="w-full rounded-xl border mt-6"
          style={{ borderColor: "var(--border)" }}
        />
      )}
      {p.screenshots.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          {p.screenshots.map((x, i) => (
            <img
              key={x}
              src={x}
              alt={`${p.title} screenshot ${i + 2}`}
              loading="lazy"
              className="rounded-lg border w-full"
              style={{ borderColor: "var(--border)" }}
            />
          ))}
        </div>
      )}
      <p className="mt-6">{p.overview}</p>
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">Technology stack</h2>
        <div>
          {p.technologies.map((t) => (
            <span className="badge" key={t}>
              {t}
            </span>
          ))}
        </div>
      </section>
      <List title="Key features" items={p.features} />
      {p.contribution && (
        <section className="mt-8">
          <h2 className="text-lg font-semibold mb-2">My contribution</h2>
          <p className="muted">{p.contribution}</p>
        </section>
      )}
      <List title="Challenges and solutions" items={p.challenges} />
      <div className="flex gap-3 mt-8">
        {p.demoUrl && (
          <a
            className="btn btn-primary"
            href={p.demoUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
          </a>
        )}
        {p.githubUrl && (
          <a
            className="btn"
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Network size={16} /> Source
          </a>
        )}
      </div>
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-lg font-semibold mb-3">Related projects</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <ProjectCard key={r.id} p={r} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-5 py-24 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="muted my-3">That page or project doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
    </main>
  );
}

/* ---------- contact ---------- */
// Set VITE_CONTACT_ENDPOINT to a service that accepts JSON POST (e.g. your Laravel /api/contact).
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

function ContactForm() {
  const [v, setV] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [errs, setErrs] = useState({});
  const [state, setState] = useState({ status: "idle", msg: "" });
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      er.email = "Please enter a valid email address.";
    if (v.message.trim().length < 10)
      er.message = "Message should be at least 10 characters.";
    setErrs(er);
    if (Object.keys(er).length || v.website) return; // honeypot
    if (!ENDPOINT) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject || "Portfolio message from " + v.name)}&body=${encodeURIComponent(v.message + "\n\n" + v.email)}`;
      setState({
        status: "info",
        msg: "No contact service is configured, so your email app was opened instead. Your message has not been sent yet.",
      });
      return;
    }
    setState({ status: "loading", msg: "" });
    try {
      const r = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(v),
      });
      if (!r.ok) throw new Error();
      setState({ status: "ok", msg: "Message sent. Thank you!" });
      setV({ name: "", email: "", subject: "", message: "", website: "" });
    } catch {
      setState({
        status: "error",
        msg: `Something went wrong. Please email ${profile.email} directly.`,
      });
    }
  }

  const Field = ({ k, label, type = "text", area }) => {
    const Tag = area ? "textarea" : "input";
    return (
      <div>
        <label htmlFor={k} className="text-sm font-medium">
          {label}
        </label>
        <Tag
          id={k}
          type={area ? undefined : type}
          rows={area ? 5 : undefined}
          className="input mt-1"
          value={v[k]}
          onChange={set(k)}
          aria-invalid={!!errs[k]}
          aria-describedby={errs[k] ? `${k}-e` : undefined}
        />
        {errs[k] && (
          <p id={`${k}-e`} className="err">
            {errs[k]}
          </p>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={submit} noValidate className="card p-5 space-y-4">
      {Field({ k: "name", label: "Name" })}
      {Field({ k: "email", label: "Email", type: "email" })}
      {Field({ k: "subject", label: "Subject (optional)" })}
      {Field({ k: "message", label: "Message", area: true })}
      <div className="sr-only" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={v.website}
            onChange={set("website")}
          />
        </label>
      </div>
      <button className="btn btn-primary" disabled={state.status === "loading"}>
        {state.status === "loading" ? "Sending…" : "Send message"}
      </button>
      {state.msg && (
        <p role="status" className={state.status === "error" ? "err" : "muted"}>
          {state.msg}
        </p>
      )}
    </form>
  );
}

/* ---------- home ---------- */
const Terminal = ({ title, children }) => (
  <div className="term" role="img" aria-label={title}>
    <div className="term-bar">
      <i />
      <i />
      <i />
      <span className="ml-2 font-mono">{title}</span>
    </div>
    {children}
  </div>
);

function Home() {
  return (
    <main>
      <section id="home" className="relative overflow-hidden">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-cyan" aria-hidden="true" />
        <div className="orb orb-violet" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-5 pt-20 pb-20 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center reveal">
          <div>
            <p className="font-mono text-sm accent mb-3">&gt; {profile.name}</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Full-Stack <span className="gradient-text">Developer</span>
            </h1>
            <p className="muted max-w-xl mt-5 text-lg">{profile.intro}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/#projects" className="btn btn-primary">
                Explore projects
              </Link>
              {profile.resumeUrl && (
                <a className="btn" href={profile.resumeUrl} download>
                  Download resume
                </a>
              )}
              <a
                className="btn"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Network size={16} /> GitHub
              </a>
              <a className="btn" href={`mailto:${profile.email}`}>
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Terminal title="developer.js">
              <pre>
                <code>{`const developer = {
  name: "${profile.name}",
  stack: ["React", "PHP", "Laravel", "MySQL"],
  focus: "database-driven web apps",
  seeking: "software development roles",
};`}</code>
              </pre>
            </Terminal>
          </div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-[1.2fr_.8fr] gap-10 items-start">
          <div className="space-y-4 muted">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-20 h-20 rounded-full object-cover border-2"
              style={{ borderColor: "var(--accent)" }}
            />
            {profile.about.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <p>{profile.goal}</p>
          </div>
          <Terminal title="highlights.sh">
            <div className="py-3 font-mono">
              {[
                "BSIT · ISU Ilagan · 2022–2026",
                "IT Specialist Certification: Databases (2024)",
                "Champion · Database App Dev · 2024, 2025",
                "Resource speaker · IFSU & ISU Cabagan",
              ].map((h) => (
                <p key={h} className="line muted">
                  <span className="accent">› </span>
                  {h}
                </p>
              ))}
            </div>
          </Terminal>
        </div>
      </Section>

      <Section id="skills" title="Skills & technologies">
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((g) => (
            <div key={g.cat} className="card p-4">
              <h3 className="text-sm font-semibold mb-2">{g.cat}</h3>
              {g.items.map((i) => (
                <span className="badge" key={i}>
                  {i}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Projects />

      <Section id="experience" title="Experience">
        <ol
          className="space-y-4 border-l pl-5"
          style={{ borderColor: "var(--border)" }}
        >
          {experience.map((e, i) => (
            <li key={i}>
              <div className="flex flex-wrap justify-between gap-1">
                <h3 className="font-semibold">{e.role}</h3>
                <span className="text-sm muted">{e.period}</span>
              </div>
              <p className="text-sm accent">{e.org}</p>
              <p className="text-sm muted mt-1">{e.text}</p>
            </li>
          ))}
        </ol>
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="font-semibold mb-3">Education</h3>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm font-medium">{e.degree}</p>
                  <p className="text-sm muted">
                    {e.school} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Certificates</h3>
            <ul className="list-disc pl-5 text-sm muted space-y-1">
              {certificates.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2 text-sm">
            <p className="muted">{profile.location}</p>
            <p>
              <a className="accent" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
            <p>
              <a
                className="accent"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </p>
            {profile.linkedin && (
              <p>
                <a
                  className="accent"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            )}
          </div>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Navbar />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer
        className="border-t text-center text-xs muted py-6"
        style={{ borderColor: "var(--border)" }}
      >
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </BrowserRouter>
  );
}
