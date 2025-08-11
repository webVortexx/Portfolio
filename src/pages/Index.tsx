import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, MapPin, Briefcase, Trophy, ExternalLink } from "lucide-react";

const Index = () => {
  const skills = [
    "ReactJS", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS", "Node.js", "REST API",
    "Oracle DB", "MySQL", "PostgreSQL", "MongoDB", "PromQL", "Grafana", "Docker", "Linux",
  ];

  const projects = [
    {
      title: "Doubt Free",
      desc: "Full‑stack learning platform with course access, real‑time interaction, Razorpay integration, and admin dashboards.",
      tags: ["ReactJS", "ExpressJS", "MongoDB", "Razorpay API"],
      link: "#",
    },
    {
      title: "Cipher‑Chat",
      desc: "Secure real‑time chat with bcrypt‑based auth, groups, notifications, and low‑latency Socket.io messaging.",
      tags: ["Socket.io", "ReactJS", "NodeJS", "MongoDB"],
      link: "#",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer",
      company: "Cubastion Consulting Pvt. Ltd.",
      period: "Jan 2025 – Present",
      location: "Gurgaon, India",
      bullets: [
        "Built Oracle DB monitoring with Oracle DB Exporter, Prometheus and custom Grafana dashboards.",
        "Orchestrated UAT→Production migrations and ODI job pipelines with recovery and zero‑downtime integrity.",
        "Administered and fine‑tuned Oracle 19c, implemented RMAN recovery and optimized SQL performance.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "Yhills Edutech Pvt. Ltd.",
      period: "May 2023 – Jul 2023",
      location: "Remote",
      bullets: [
        "Delivered React UI modules and reusable components improving maintainability and engagement.",
        "Improved state management for faster updates and reduced front‑end time by 30%.",
      ],
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <nav className="container mx-auto flex items-center justify-between h-14">
          <a href="#home" className="font-display text-lg">RP</a>
          <div className="hidden md:flex items-center gap-2 text-sm">
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#projects">Projects</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:janpra.prajapat13000@gmail.com" aria-label="Email Rahul"><Button variant="outline"><Mail className="mr-2"/>Email</Button></a>
          </div>
        </nav>
      </header>

      <main id="home" className="container mx-auto">
        {/* Hero */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="orb w-[38rem] h-[38rem] -top-24 -left-20"></div>
            <div className="orb orb-2 w-[32rem] h-[32rem] -bottom-24 -right-10"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight animate-enter">
                <span className="text-gradient">Rahul Prajapati</span>
              </h1>
              <p className="mt-3 text-muted-foreground text-lg">Software Developer • Full‑stack • ReactJS • Oracle/Prometheus/Grafana</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/lovable-uploads/b141a2d7-9bb0-4aa5-b5f8-47012354e379.png" download>
                  <Button variant="hero"><Download className="mr-2"/>Download Resume</Button>
                </a>
                <a href="https://github.com/rahulprajapati01" target="_blank" rel="noreferrer">
                  <Button variant="outline"><Github className="mr-2"/>GitHub</Button>
                </a>
                <a href="https://linkedin.com/in/Rahul" target="_blank" rel="noreferrer">
                  <Button variant="outline"><Linkedin className="mr-2"/>LinkedIn</Button>
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4"/> <span>India</span>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 card-hover">
              <p className="text-sm text-muted-foreground">Education</p>
              <h3 className="text-xl font-semibold mt-2">IIT (ISM) Dhanbad — B.Tech in Computer Science</h3>
              <p className="text-sm text-muted-foreground mt-2">CGPA: 7.1 • 2020 – 2024</p>
              <ul className="mt-4 space-y-2 text-sm list-disc pl-5">
                <li>Relevant coursework: Data Structures, Algorithms, OS, DBMS, CN, Cloud Computing.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12">
          <h2 className="section-title text-2xl md:text-3xl font-display font-semibold flex items-center gap-2"><Briefcase/> Experience</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <Card key={exp.company} className="card-elevated card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription>{exp.company} • {exp.period} • {exp.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {exp.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <h2 className="section-title text-2xl md:text-3xl font-display font-semibold flex items-center gap-2"><ExternalLink/> Projects</h2>
          <div className="mt-6 grid grid-auto-fit gap-6">
            {projects.map((p) => (
              <Card key={p.title} className="card-elevated card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{p.title}</CardTitle>
                  <CardDescription>{p.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (<Badge key={t} variant="secondary">{t}</Badge>))}
                  </div>
                  <div className="mt-4">
                    <a href={p.link} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline"><ExternalLink className="mr-2"/>Visit</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-12">
          <h2 className="section-title text-2xl md:text-3xl font-display font-semibold">Technical Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s) => (<Badge key={s} variant="outline">{s}</Badge>))}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12">
          <h2 className="section-title text-2xl md:text-3xl font-display font-semibold flex items-center gap-2"><Trophy/> Achievements</h2>
          <div className="mt-6 grid grid-auto-fit gap-6">
            <Card className="card-elevated card-hover">
              <CardContent className="pt-6 space-y-2 text-sm">
                <p>Finalist at IIT (ISM) Dhanbad Hackfest 2022 for innovative coding solution.</p>
                <p>Winner, KIMO's Edge 2023 Tech Competition — 1st place out of 200+ participants.</p>
                <p>Ranked in top 3% globally on Codeforces; 1000+ competitive problems solved.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-20">
          <div className="glass-panel rounded-xl p-8 text-center card-hover">
            <h2 className="text-2xl md:text-3xl font-display font-semibold">Let's build something great</h2>
            <p className="mt-2 text-muted-foreground">Open to Software Engineer roles and impactful collaborations.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a href="mailto:janpra.prajapat13000@gmail.com"><Button variant="hero"><Mail className="mr-2"/>Email Me</Button></a>
              <a href="https://github.com/rahulprajapati01" target="_blank" rel="noreferrer"><Button variant="outline"><Github className="mr-2"/>GitHub</Button></a>
              <a href="https://linkedin.com/in/Rahul" target="_blank" rel="noreferrer"><Button variant="outline"><Linkedin className="mr-2"/>LinkedIn</Button></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t">
        <div className="container mx-auto text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Rahul Prajapati</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4"/> India</span>
        </div>
      </footer>
    </>
  );
};

export default Index;
