import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Code, Palette, Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "MissLili - Sistema de Gestión de Citas",
      ciclo: "III Ciclo",
      description: "Sistema administrativo para gestionar pacientes, doctores y agendar citas médicas con interfaz intuitiva.",
      tech: ["React", "Node.js", "MongoDB", "Bootstrap"],
      github: "https://github.com/XaviNole/Proyecto-Herramienta-Administrativa",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Matplay - Juegos Educativos",
      ciclo: "IV Ciclo",
      description: "Plataforma web interactiva de juegos matemáticos para niños con sistema de usuarios y progreso personalizado.",
      tech: ["React", "JavaScript", "MongoDB", "CSS"],
      github: "https://github.com/RosaLopezC/proyecto.git",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const experiences = [
    {
      type: "work",
      title: "UX/UI Designer",
      company: "KeOla Networks",
      period: "Mayo 2025 - Actualidad",
      description: "Creación de prototipos, wireframes y diseño de interfaces para productos físicos y plataformas web.",
      icon: <Palette className="w-5 h-5" />
    },
    {
      type: "work",
      title: "Desarrollador de Software (Prácticas)",
      company: "Sapiens Consulting",
      period: "Enero 2025 - Marzo 2025",
      description: "Mantenimiento de sistemas, actualización de frameworks y migración de bases de datos.",
      icon: <Code className="w-5 h-5" />
    },
    {
      type: "work",
      title: "Diseñadora Gráfica y Fotógrafa",
      company: "MMM - Movimiento Misionero Mundial",
      period: "Enero 2021 - Actualidad",
      description: "Diseño de material publicitario para eventos masivos.",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const skills = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Angular", "Tailwind CSS"],
    backend: ["Node.js", "MongoDB", "Mongoose", "Express"],
    design: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
    cloud: ["AWS", "Azure", "Google Cloud"],
    tools: ["Git", "GitHub", "VS Code", "Vercel"]
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rosa López
            </div>
            
            <div className="hidden md:block">
              <div className="flex space-x-1">
                {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-4 py-2 rounded-lg transition-all capitalize ${
                      activeSection === item
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                    }`}
                  >
                    {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre Mí' : item === 'skills' ? 'Habilidades' : item === 'experience' ? 'Experiencia' : item === 'projects' ? 'Proyectos' : 'Contacto'}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-purple-600/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 rounded-lg capitalize hover:bg-purple-600/20 transition-colors"
                >
                  {item === 'home' ? 'Inicio' : item === 'about' ? 'Sobre Mí' : item === 'skills' ? 'Habilidades' : item === 'experience' ? 'Experiencia' : item === 'projects' ? 'Proyectos' : 'Contacto'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-500/20"
              style={{
                width: Math.random() * 300 + 50 + 'px',
                height: Math.random() * 300 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                filter: 'blur(40px)',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">RL</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rosa López
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Desarrolladora de Software & Diseñadora UX/UI
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Transformando ideas en experiencias digitales impactantes con código limpio y diseño innovador
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Contáctame
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
              Ver Proyectos
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="https://github.com/RosaLopezC" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rosalopezc/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rosa.lopez@tecsup.edu.pe" className="hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Sobre Mí</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Estudiante de 6to ciclo de <span className="text-purple-400 font-semibold">Diseño y Desarrollo de Software en TECSUP</span>, becada por el BCP. 
                Combino mis habilidades técnicas en desarrollo web con mi experiencia en diseño gráfico para crear soluciones digitales completas.
              </p>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Actualmente trabajo como <span className="text-pink-400 font-semibold">UX/UI Designer en KeOla Networks</span>, donde diseño interfaces 
                intuitivas y realizo investigaciones de usuarios para crear experiencias digitales efectivas.
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                  🎓 Beca BCP
                </div>
                <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                  ☁️ Cloud Computing Certified
                </div>
                <div className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
                  🌐 Inglés Intermedio
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Educación</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• TECSUP - Diseño y Desarrollo de Software (2023 - Actual)</li>
                      <li>• UNI - Cloud Computing AWS, Azure, GCP (2025)</li>
                      <li>• CIBERTEC - Diseño Gráfico (2021-2022)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-6 rounded-xl border border-pink-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-600/20 rounded-lg">
                    <Award className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Logros</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Becaria BCP en TECSUP</li>
                      <li>• Certificación en Cloud Computing (UNI)</li>
                      <li>• 4+ años de experiencia en diseño gráfico</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Habilidades Técnicas</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gradient-to-br from-purple-900/20 to-gray-900 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-semibold mb-4 capitalize text-purple-400">
                  {category === 'frontend' ? '💻 Frontend' : 
                   category === 'backend' ? '⚙️ Backend' : 
                   category === 'design' ? '🎨 Diseño' : 
                   category === 'cloud' ? '☁️ Cloud' : '🛠️ Herramientas'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm hover:bg-purple-600/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experiencia</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg text-purple-400">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-purple-400">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-purple-600/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Proyectos Destacados</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-400">
                      {project.ciclo}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-600/10 border border-purple-500/20 rounded text-xs text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Ver en GitHub
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">¡Conectemos!</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            ¿Tienes un proyecto en mente? ¿Quieres colaborar? Estoy siempre abierta a nuevas oportunidades
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:rosa.lopez@tecsup.edu.pe" className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400">rosa.lopez@tecsup.edu.pe</p>
            </a>

            <a href="tel:933785009" className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <p className="text-sm text-gray-400">933 785 009</p>
            </a>

            <a href="https://www.linkedin.com/in/rosalopezc/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all">
              <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-400">@rosalopezc</p>
            </a>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="https://github.com/RosaLopezC" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rosalopezc/" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:rosa.lopez@tecsup.edu.pe" className="p-3 bg-purple-600/20 rounded-lg hover:bg-purple-600/30 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-950 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">© 2025 Rosa Elena López Clemente</p>
          <p className="text-sm">Hecho con 💜 y React</p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: rgb(147, 51, 234) rgb(17, 24, 39);
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: rgb(17, 24, 39);
        }
        
        *::-webkit-scrollbar-thumb {
          background: rgb(147, 51, 234);
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: rgb(168, 85, 247);
        }
      `}</style>
    </div>
  );
}

export default App;