import { contactEmail, eras, impact, interests, links, profile, projects, skills, stack } from "@/content/public";
import { privateContent } from "@/content/private";
import { hasAccess } from "@/lib/access";
import { Effects } from "@/components/Effects";
import { Unlock } from "@/components/Unlock";
import { YearCounter } from "@/components/YearCounter";

const NOW = new Date().getFullYear();

// Splits text into per-letter spans for the staggered reveal (screen readers get the plain label).
function Letters({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <span aria-hidden className="letters">
      {[...text].map((ch, i) => (
        <span key={i} style={{ animationDelay: `${(offset + i) * 45}ms` }}>{ch}</span>
      ))}
    </span>
  );
}

export default async function Home() {
  const unlocked = await hasAccess();
  // Private data is only read when unlocked, so it never reaches the HTML of a public visitor.
  const details = unlocked ? privateContent.eras : {};
  const allProjects = unlocked ? [...projects, ...privateContent.projects] : projects;

  return (
    <>
      <Effects />
      <div className="backdrop" aria-hidden>
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="spotlight" />
        <div className="grain" />
      </div>

      <aside className="stage" aria-hidden>
        {/* Placeholder until the aging portrait is ready */}
        <div className="portrait">
          <div className="ring" />
          <span className="monogram">ZU</span>
        </div>
      </aside>
      <YearCounter now={NOW} />

      <main className="content">
        <section className="hero" data-year={NOW}>
          <p className="eyebrow fade" style={{ animationDelay: "0ms" }}>
            {unlocked && privateContent.basedIn ? `Based in ${privateContent.basedIn}` : "Portfolio · Est. 2012"}
          </p>
          <h1 aria-label={profile.name}>
            <Letters text="Zeeshan" /><br />
            <Letters text="Umar" offset={7} />
          </h1>
          <p className="role shimmer fade" style={{ animationDelay: "600ms" }}>{profile.role}</p>
          <p className="lede fade" style={{ animationDelay: "750ms" }}>{profile.intro}</p>
          <nav className="links fade" style={{ animationDelay: "900ms" }}>
            {links.map((l) => (
              <a key={l.label} className="pill-link" href={l.href} target="_blank" rel="noopener noreferrer">{l.label} <span>↗</span></a>
            ))}
          </nav>
          <div className="fade" style={{ animationDelay: "1050ms" }}>
            <Unlock unlocked={unlocked} />
          </div>
          <p className="hint fade" style={{ animationDelay: "1300ms" }}><i />Scroll to go back in time</p>
        </section>

        <div className="marquee" aria-label="Technology stack">
          <div className="track">
            {[...stack, ...stack].map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>

        <section className="impact" data-year={NOW}>
          <h2 className="kicker" data-reveal>What I do best</h2>
          <div className="bento">
            {impact.map((c, i) => (
              <article key={c.label} className={`card c${i}`} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                <p className="card-value">{c.value}</p>
                <h3>{c.label}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about" data-year={NOW} data-reveal>
          <h2 className="kicker">About</h2>
          {profile.about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
        </section>

        <div className="timeline">
          <div className="rail" aria-hidden><span /></div>
          {eras.map((era) => {
            const d = details[era.id];
            return (
              <section key={era.id} className="era" data-year={era.year} data-reveal>
                <p className="eyebrow"><span className="dot" aria-hidden />{d ? d.dates : era.period}</p>
                <h2>{era.headline}</h2>
                <p className="where">
                  <strong>{era.title}</strong>
                  <span> · {d ? `${d.org}, ${d.location}` : era.where}</span>
                </p>
                {era.points.length > 0 && (
                  <ul>{era.points.map((pt) => <li key={pt.slice(0, 32)}>{pt}</li>)}</ul>
                )}
              </section>
            );
          })}
        </div>

        <section className="projects">
          <h2 className="kicker" data-reveal>Independent projects</h2>
          {allProjects.map((p) => (
            <a key={p.name} className="card project" href={p.url} target="_blank" rel="noopener noreferrer" data-reveal>
              <div>
                <h3>{p.name} <span className="tag">{p.status}</span></h3>
                <p>{p.summary}</p>
              </div>
              <span className="arrow" aria-hidden>↗</span>
            </a>
          ))}
        </section>

        <section className="skills">
          <h2 className="kicker" data-reveal>Toolbox</h2>
          <div className="skill-grid">
            {skills.map((s) => (
              <div key={s.group} data-reveal>
                <h3>{s.group}</h3>
                <ul className="chips">{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        {interests.length > 0 && (
          <section className="interests">
            <h2 className="kicker" data-reveal>Beyond work</h2>
            {interests.map((i) => <article key={i.title} className="card" data-reveal><h3>{i.title}</h3><p>{i.text}</p></article>)}
          </section>
        )}

        <footer className="contact" data-reveal>
          <h2 className="big">Let&apos;s build something <em>fast</em>.</h2>
          <p>
            {contactEmail
              ? <a className="pill-link solid" href={`mailto:${contactEmail}`}>{contactEmail}</a>
              : <a className="pill-link solid" href={links[0].href} target="_blank" rel="noopener noreferrer">Reach me on LinkedIn <span>↗</span></a>}
          </p>
          <p className="fine">© {NOW} Zeeshan Umar · mzeeshanu.com</p>
        </footer>
      </main>
    </>
  );
}
