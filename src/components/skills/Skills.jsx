import Frontend from "./Frontend"
import "./skills.css"
const Skills = () => {
  return (
    <section className="skills section" id="stack">
      <h2 className="section__title about">Stack</h2>

      <div className="skills__container container grid">
         <Frontend />
      </div>
    </section>
  )
}

export default Skills