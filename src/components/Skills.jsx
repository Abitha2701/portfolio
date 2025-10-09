import React from 'react'
import { skills } from '../data/content'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiMongodb, SiReact } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const iconMap = {
  HTML: <SiHtml5 color="#e34f26"/>,
  CSS: <SiCss3 color="#1572b6"/>,
  JavaScript: <SiJavascript color="#f7df1e"/>,
  Java: <FaJava color="#f89820"/>,
  Bootstrap: <SiBootstrap color="#7952b3"/>,
  MERN: <><SiMongodb color="#4db33d"/> <SiReact color="#61dafb"/></>
}

export default function Skills(){
  return (
    <div className="skills" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="grid cols-2">
        <div className="card">
          <h3>Languages</h3>
          {skills.languages.map(s => (
            <div key={s.name} style={{margin:'10px 0'}}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <span className="badge">{iconMap[s.name]} <b>{s.name}</b></span>
                <span className="kbd">{s.level}%</span>
              </div>
              <div className="progress"><span style={{width: s.level+'%'}}/></div>
            </div>
          ))}
        </div>
        <div className="card">
          <h3>Frameworks</h3>
          {skills.frameworks.map(s => (
            <div key={s.name} style={{margin:'10px 0'}}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <span className="badge">{iconMap[s.name] || null} <b>{s.name}</b></span>
                <span className="kbd">{s.level}%</span>
              </div>
              <div className="progress"><span style={{width: s.level+'%'}}/></div>
            </div>
          ))}
          <h3 style={{marginTop:16}}>Tools</h3>
          <div>
            {skills.tools.map(t => <span key={t} className="badge">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}
