import { useState } from 'react';
import './App.css';

interface Project {
  id: string;
  title: string;
  stills: string[];
}

function App() {
  const [activeMenu, setActiveMenu] = useState<string>('scene');
  
  // Progetti di esempio coerenti con il mockup
  const [projects] = useState<Project[]>([
    {
      id: 'p1',
      title: 'Project 1',
      stills: [
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1518676599649-7c77c68b64e5?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=150&auto=format&fit=crop&q=80',
      ]
    },
    {
      id: 'p2',
      title: 'Project 2',
      stills: [
        'https://images.unsplash.com/photo-1518676599649-7c77c68b64e5?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=150&auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 'p3',
      title: 'Project 3',
      stills: [
        'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=150&auto=format&fit=crop&q=80'
      ]
    }
  ]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      alert(`Sceneggiatura ricevuta: ${e.dataTransfer.files[0].name}`);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="layout-container">
      {/* SIDEBAR SINISTRA */}
      <aside className="sidebar">
        <h2 className="sidebar-heading">Menù</h2>
        
        <div className="user-profile">
          <div className="user-avatar"></div>
          <span className="user-name">Il Tuo Team</span>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeMenu === 'odg' ? 'active' : ''}`}
            onClick={() => setActiveMenu('odg')}
          >
            <span className="nav-icon">📅</span>
            <span>ODG</span>
          </button>

          <button 
            className={`nav-item ${activeMenu === 'scene' ? 'active' : ''}`}
            onClick={() => setActiveMenu('scene')}
          >
            <span className="nav-icon">🎬</span>
            <span>Scene</span>
          </button>

          <button 
            className={`nav-item ${activeMenu === 'media' ? 'active' : ''}`}
            onClick={() => setActiveMenu('media')}
          >
            <span className="nav-icon">▶️</span>
            <span>Media e Inspo</span>
          </button>

          <button 
            className={`nav-item ${activeMenu === 'archivio' ? 'active' : ''}`}
            onClick={() => setActiveMenu('archivio')}
          >
            <span className="nav-icon">📦</span>
            <span>Archivio</span>
          </button>

          <button 
            className={`nav-item ${activeMenu === 'cestino' ? 'active' : ''}`}
            onClick={() => setActiveMenu('cestino')}
          >
            <span className="nav-icon">🗑️</span>
            <span>Cestino</span>
          </button>
        </nav>
      </aside>

      {/* CONTENUTO PRINCIPALE */}
      <main className="main-viewport">
        {/* HERO SECTION */}
        <header className="hero-header">
          <h1 className="brand-title">NOME SITO</h1>
          <p className="hero-subtitle">
            Tutto ciò che serve alla troupe<br />
            — copione, location, media e note —<br />
            in un unico strumento professionale e sempre accessibile.
          </p>
          <h2 className="hero-claim">
            La scheda tecnica digitale per ogni scena della tua produzione.
          </h2>
        </header>

        {/* CONTAINER "I TUOI PROGETTI" */}
        <section className="projects-wrapper">
          <h3 className="section-title">I TUOI PROGETTI</h3>

          {/* Griglia delle card dei progetti */}
          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="project-card">
                <span className="project-card-title">{proj.title}</span>
                <div className="stills-grid">
                  {proj.stills.map((imgUrl, idx) => (
                    <img key={idx} src={imgUrl} alt={`Still ${idx + 1}`} className="still-thumb" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Box tratteggiato per nuovo progetto con drag & drop */}
          <div 
            className="new-project-dropzone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <span className="dropzone-title">Nuovo Progetto</span>
            <div className="plus-icon-container">
              <span className="plus-sign">+</span>
            </div>
            <p className="dropzone-text">trascina qui la tua sceneggiatura</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;