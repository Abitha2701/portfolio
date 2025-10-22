import React from 'react'
import { skills } from '../data/content'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiPostman,
  SiC,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { MdApi } from 'react-icons/md'
import { VscCode } from 'react-icons/vsc'

const iconMap = {
  HTML: <SiHtml5 color="#e34f26" aria-hidden="true"/>,
  CSS: <SiCss3 color="#1572b6" aria-hidden="true"/>,
  JavaScript: <SiJavascript color="#f7df1e" aria-hidden="true"/>,
  React: <SiReact color="#61dafb" aria-hidden="true"/>,
  Bootstrap: <SiBootstrap color="#7952b3" aria-hidden="true"/>,
  'Node.js': <SiNodedotjs color="#68a063" aria-hidden="true"/>,
  MongoDB: <SiMongodb color="#4db33d" aria-hidden="true"/>,
  'REST APIs': <MdApi color="#9dc5ff" aria-hidden="true"/>,
  Git: <SiGit color="#f34f29" aria-hidden="true"/>,
  'VS Code': <VscCode color="#3aa0ff" aria-hidden="true"/>,
  Postman: <SiPostman color="#ff6c37" aria-hidden="true"/>,
  C: <SiC color="#00599c" aria-hidden="true"/>,
  Java: <FaJava color="#f89820" aria-hidden="true"/>,
}

const Badge = ({ name }) => (
  <span className="badge">{iconMap[name] || null} <b>{name}</b></span>
)

export default function Skills(){
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="grid cols-2">
        <div className="card">
          <h3>Frontend Development</h3>
          <div>
            {skills.frontend.map(item => <Badge key={item} name={item} />)}
          </div>
        </div>
        <div className="card">
          <h3>⚙️ Backend Development</h3>
          <div>
            {skills.backend.map(item => <Badge key={item} name={item} />)}
          </div>
        </div>
        <div className="card">
          <h3>🧰 Frameworks, Tools & Environment</h3>
          <div>
            {skills.tooling.map(item => <Badge key={item} name={item} />)}
          </div>
        </div>
        <div className="card">
          <h3>💻 Programming Languages</h3>
          <div>
            {skills.languages.map(item => <Badge key={item} name={item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
