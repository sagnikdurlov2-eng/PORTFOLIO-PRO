import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Mail,ArrowUpRight,Download,Code2,Database,Globe,Menu,X,ExternalLink,MapPin,Sparkles,ChevronDown,StarIcon,PenIcon,Award,BookIcon, Eye} from 'lucide-react';
import './styles.css';

const profile={name:'Swastika Mitra',email:'swastikamitra55@gmail.com',github:'https://github.com/swastikamitra05-coder',linkedin:'https://www.linkedin.com/in/swastika-mitra-768b2836a'};
const heroPortrait='/swastika-portrait-final.jpg?cache=2026-09-14-1';
const resumeUrl='/resume.pdf';
const highlightStats=[
 {label:'Available for',value:'Internships'},
 {label:'Focus',value:'Frontend + Full-stack'},
 {label:'Location',value:'Kolkata'}
];
const projects=[
 {title:'News Search App',desc:'A web application for searching and exploring news content through a clean, focused interface.',tags:['HTML','CSS','JavaScript'],link:'https://github.com/swastikamitra05-coder/news-search-app'},
 {title:'Card Guess',desc:'A lightweight interactive card-guessing project demonstrating frontend logic, interaction and user-focused UI.',tags:['HTML','CSS','JavaScript','Solidity'],link:'https://github.com/swastikamitra05-coder/Card-Guess'}
];
const skills=['Python','JavaScript','HTML','CSS','React','Django','Git & GitHub','Database — Learning'];
const nav=['Home','About','Projects','Experience','Achievements','Certifications','Contact'];

function App(){
 const [open,setOpen]=useState(false);
 const [showcaseOpen,setShowcaseOpen]=useState(false);
 useEffect(()=>{document.documentElement.dataset.theme='dark';},[]);
 const go=id=>{document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:'smooth'});setOpen(false);setShowcaseOpen(false)};
 return <div className="site">
  <header className="nav"><div className="nav-inner"><button className="brand" onClick={()=>go('home')}><span className="brand-mark"><BookIcon size={22}/></span><span>Swastika's Portfolio<span className="dot">.</span></span></button>
   <nav className={open?'nav-links open':'nav-links'}>{nav.map(n=><button key={n} onClick={()=>go(n)}>{n}</button>)}</nav>
   <div className="nav-actions"><button className="showcase-btn" aria-label="Open quick portfolio view" onClick={()=>setShowcaseOpen(!showcaseOpen)}><Eye size={16}/> Quick View</button><a className="resume-btn" href={resumeUrl} target="_blank" rel="noopener noreferrer" download="Swastika-Mitra-Resume.pdf"><Download size={16}/> Resume</a><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div></header>
  <div className={showcaseOpen?'showcase-panel open':'showcase-panel'}>
   <div className="showcase-head"><span>Portfolio snapshot</span><button onClick={()=>setShowcaseOpen(false)}>Close</button></div>
   <div className="showcase-grid">
    <div className="showcase-item"><b>Builds</b><span>Web products & interfaces</span></div>
    <div className="showcase-item"><b>Focus</b><span>Full-stack + frontend</span></div>
    <div className="showcase-item"><b>Stack</b><span>React, Django, Python</span></div>
   </div>
   <button className="showcase-cta" onClick={()=>go('projects')}>See featured work <ArrowUpRight size={16}/></button>
  </div>

  <main>
   <section id="home" className="hero section"><div className="glow glow1"/><div className="glow glow2"/><div className="hero-grid">
    <div className="hero-copy"><div className="eyebrow"><span className="pulse"/> Open to software & full-stack internships</div>
     <h1>Hello, I’m <span>Swastika Mitra.</span></h1><h2>B.Tech IT Student <i>·</i> Software & Full-Stack Developer</h2>
     <p>I build practical web experiences with <b>Python, Django, JavaScript and React</b>, and I enjoy turning ideas into clean, useful products.</p>
     <div className="hero-ctas"><button className="primary" onClick={()=>go('projects')}>View Projects <ArrowUpRight size={18}/></button><button className="secondary" onClick={()=>go('contact')}>Contact Me</button></div>
     <div className="quick-highlights">{highlightStats.map(item=><div className="highlight-item" key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
     <div className="socials"><a href={profile.github} target="_blank"><Globe size={19}/> GitHub</a><a href={profile.linkedin} target="_blank"><Globe size={19}/> LinkedIn</a><a href={'mailto:'+profile.email}><Mail size={19}/> Email</a></div>
    </div>
    <div className="hero-card"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="avatar"><img src={heroPortrait} alt="Swastika Mitra portrait" /></div><div className="float-card fc1"><Code2 size={17}/><div><b>Full-Stack</b><small>Development</small></div></div><div className="float-card fc2"><PenIcon size={17}/><div><b>8.2 CGPA</b><small>B.Tech IT · 2028</small></div></div><div className="hero-card-caption"><MapPin size={15}/> Kolkata, India</div></div>
   </div><button className="scroll" onClick={()=>go('about')}><span>Scroll to explore</span><ChevronDown size={16}/></button></section>

   <section id="about" className="section"><div className="section-head"><span></span><div><p className="kicker">About me</p><h2>Building with curiosity.<br/><em>Learning by shipping.</em></h2></div></div><div className="about-grid"><div className="about-text"><p>I’m a <strong>B.Tech Information Technology</strong> student at Narula Institute of Technology, currently in my 5th semester and graduating in 2028.</p><p>My focus is software development and full-stack engineering. I work with Python, Django, JavaScript and React, while continuously strengthening my database and engineering fundamentals.</p><p>Beyond coursework, I’ve taken part in hackathons, technical communities and student activities — experiences that have taught me how to collaborate, present ideas and build under pressure.</p></div><div className="stats"><div><strong>8.2</strong><span>CGPA</span></div><div><strong>2028</strong><span>Graduation</span></div><div><strong>3+</strong><span>Core web stacks</span></div><div><strong>∞</strong><span>Curiosity</span></div></div></div></section>

   <section id="skills" className="section compact"><div className="section-head"><span></span><div><p className="kicker">Toolkit</p><h2>Technologies I use</h2></div></div><div className="skill-grid">{skills.map((s,i)=><div className="skill" key={s}><span className="skill-icon">{i===0?<Code2 size={19}/>:i===6?<Globe size={19}/>:i===7?<Database size={19}/>:<Globe size={19}/>}</span><b>{s}</b><span className="skill-line"/></div>)}</div></section>

   <section id="projects" className="section"><div className="section-head"><span></span><div><p className="kicker">Selected work</p><h2>Projects that show how I build.</h2></div></div><div className="project-grid">{projects.map((p,i)=><article className="project" key={p.title}><div className="project-top"><span className="project-num">0{i+1}</span><a href={p.link} target="_blank" aria-label={'Open '+p.title}><ExternalLink size={19}/></a></div><div className="project-visual"><div className="mini-window"><div className="window-bar"><i/><i/><i/></div><div className="mock-lines"><span/><span/><span className="short"/><div className="mock-box"/></div></div></div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a className="project-link" href={p.link} target="_blank">View on GitHub <ArrowUpRight size={16}/></a></article>)}</div></section>

   <section id="experience" className="section compact"><div className="section-head"><span></span><div><p className="kicker">Experience</p><h2>Learning beyond the classroom.</h2></div></div><div className="timeline"><div className="timeline-item"><div className="timeline-dot"/><div><div className="timeline-meta">2026 · Student Internship</div><h3>EduSkill</h3><p>Internship experience focused on building practical exposure alongside academic learning.</p></div></div><div className="timeline-item"><div className="timeline-dot"/><div><div className="timeline-meta">2025–Present · Student Communities</div><h3>Technical Club · IETE · Cultural Club</h3><p>Participating in technical, collaborative and campus activities while developing communication and teamwork skills.</p></div></div></div></section>

   <section id="achievements" className="section"><div className="section-head"><span></span><div><p className="kicker">Achievements</p><h2>Competitive spirit, collaborative mindset.</h2></div></div><div className="achievement-grid"><div className="achievement featured"><span>01</span><StarIcon/><h3>Youth Parliament — Winner</h3><p>Winner at Amity University’s Youth Parliament, demonstrating research, communication and presentation skills.</p></div><div className="achievement"><span>02</span><Code2/><h3>Hackathons</h3><p>Participated in multiple hackathons including Hack-o-NIT, Cosmo Hack finalist, IEEE Hackathon, SIH, Metamorph and TCS Tech Day.</p></div><div className="achievement"><span>03</span><Globe/><h3>Project Building</h3><p>Hands-on experience turning ideas into working student projects and learning through iteration.</p></div></div></section>

   <section id="certifications" className="section compact"><div className="section-head"><span></span><div><p className="kicker">Certifications</p><h2>Continuous learning.</h2></div></div><div className="cert-box">
  <div className="cert-icon"><BookIcon/></div>
  <div>
    <h3>Certifications & learning</h3>
    <p>Certification details showing my commitment to continuous learning and professional development.</p>
  </div>
  <a className="coming" href="https://drive.google.com/folderview?id=1cmqMkjz3pVKey-v3VmREuT-xk7jktIpw" target="_blank" rel="noopener noreferrer">
    <Award size={16}/> View Certificates
  </a>
</div></section>

   <section id="contact" className="section contact"><div className="contact-panel"><div><p className="kicker"> · Contact</p><h2>Let’s build something<br/><em>worth talking about.</em></h2><p>For internship opportunities, collaborations or project discussions, feel free to reach out.</p></div><div className="contact-actions"><a className="primary" href={'mailto:'+profile.email}><Mail size={18}/> Email Swastika</a><a className="secondary" href={profile.linkedin} target="_blank"><Globe size={18}/> LinkedIn</a><a className="secondary" href={profile.github} target="_blank"><Globe size={18}/> GitHub</a></div></div></section>
  </main>
  <footer className="site-footer"><div className="footer-main"><div><span className="brand-mark small"><BookIcon size={18}/></span><span>Swastika Mitra</span></div><span className="footer-tagline">Better code. Brighter future.</span><div className="footer-links"><a href={profile.github} target="_blank"><Globe/></a><a href={profile.linkedin} target="_blank"><Globe/></a><a href={'mailto:'+profile.email}><Mail/></a></div></div><div className="footer-meta"><span>Open to internships & collaborations</span><span>Built by Swastika</span></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
