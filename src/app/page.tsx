import { contactEmail, eras, interests, links, profile, projects, skills, stats } from "@/content/public";
import { privateContent } from "@/content/private";
import { hasAccess } from "@/lib/access";
import { Unlock } from "@/components/Unlock";
import { YearCounter } from "@/components/YearCounter";

const NOW = new Date().getFullYear();

export default async function Home() {
  const unlocked = await hasAccess();
  // Private data is only read when unlocked, so it never reaches the HTML of a public visitor.
  const details = unlocked ? privateContent.eras : {};
  const allProjects = unlocked ? [...projects, ...privateContent.projects] : projects;

  return (
    <>
      <aside className="stage" aria-hidden>
        {/* Placeholder until the aging portrait is ready */}
        <div className="portrait">
          <span className="monogram">ZU</span>
        </div>
      </aside>
      <YearCounter now={NOW} />

      <main className="content">
        <section className="hero" data-year={NOW}>
          <p className="eyebrow">{unlocked && privateContent.basedIn ? `Based in ${privateContent.basedIn}` : "Portfolio"}</p>
          <h1>Zeeshan<br />Umar</h1>
          <p className="role">{profile.role}</p>
          <p className="lede">{profile.intro}</p>
          <nav className="links">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
            ))}
          </nav>
          <Unlock unlocked={unlocked} />
          <p className="hint"><i />Scroll to go back in time</p>
        </section>

        <section className="about" data-year={NOW}>
          <h2 className="kicker">About</h2>
          {profile.about.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>
            ))}
          </dl>
        </section>

        {eras.map((era) => {
          const d = details[era.id];
          return (
            <section key={era.id} className="era" data-year={era.year}>
              <p className="eyebrow">{d ? d.dates : era.period}</p>
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

        <section className="projects">
          <h2 className="kicker">Independent projects</h2>
          {allProjects.map((p) => (
            <article key={p.name}>
              <h3><a href={p.url} target="_blank" rel="noopener noreferrer">{p.name} ↗</a> <span className="tag">{p.status}</span></h3>
              <p>{p.summary}</p>
            </article>
          ))}
        </section>

        <section className="skills">
          <h2 className="kicker">Toolbox</h2>
          <div className="skill-grid">
            {skills.map((s) => (
              <div key={s.group}>
                <h3>{s.group}</h3>
                <p>{s.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {interests.length > 0 && (
          <section className="interests">
            <h2 className="kicker">Beyond work</h2>
            {interests.map((i) => <article key={i.title}><h3>{i.title}</h3><p>{i.text}</p></article>)}
          </section>
        )}

        <footer className="contact">
          <h2>Let&apos;s talk.</h2>
          <p>
            {contactEmail
              ? <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              : <>The fastest way to reach me is <a href={links[0].href} target="_blank" rel="noopener noreferrer">LinkedIn</a>.</>}
          </p>
          <p className="fine">© {NOW} Zeeshan Umar · mzeeshanu.com</p>
        </footer>
      </main>
    </>
  );
}
