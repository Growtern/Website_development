import React, { useState, useEffect } from 'react';

// Mock student data - Replace these with your actual imports
import StudentDats from '../data/PlaceStudentData.jsx';

const PlaceStudent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        .placement-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #19A6ED 0%, #0e5c84ff 25%,  #4facfe 75%, #074a6cff 100%);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
          position: relative;
          overflow: hidden;
          padding: 60px 0;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: floatParticle 20s infinite ease-in-out;
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0.8;
          }
        }

        .particle:nth-child(2n) { animation-duration: 15s; animation-delay: 2s; }
        .particle:nth-child(3n) { animation-duration: 25s; animation-delay: 4s; }

        .header-section {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          text-shadow: 2px 4px 8px rgba(0,0,0,0.3);
          margin-bottom: 20px;
          animation: fadeInDown 1s ease;
        }

        .subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          animation: fadeInUp 1s ease;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .divider-line {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, white, transparent);
          margin: 30px auto;
        }

        .student-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.4);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          animation: cardSlideUp 0.6s ease forwards;
          opacity: 0;
          height: 100%;
          position: relative;
        }

        .student-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #f7dc6f, #ff6b6b);
          background-size: 300% 300%;
          border-radius: 25px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: gradientRotate 3s linear infinite;
        }

        @keyframes gradientRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .student-card:hover::before {
          opacity: 1;
        }

        .student-card.visible {
          opacity: 1;
        }

        @keyframes cardSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .student-card:hover {
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.6);
        }

        .card-img-wrapper {
          width: 100%;
          height: 250px;
          overflow: hidden;
          position: relative;
        }

        .card-img-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .student-card:hover .card-img-wrapper::after {
          opacity: 1;
        }

        .card-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          filter: brightness(0.9);
        }

        .student-card:hover .card-img-wrapper img {
          transform: scale(1.15) rotate(2deg);
          filter: brightness(1.1);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }

        .card-body {
          padding: 20px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        }

        .student-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
          text-shadow: 1px 2px 4px rgba(0,0,0,0.3);
        }

        .student-role {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 12px;
          font-weight: 500;
        }

        .company-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
          padding: 6px 14px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }

        .student-card:hover .company-badge {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.25));
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .company-name {
          color: white;
          font-weight: 600;
          font-size: 0.85rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }

        .stats-section {
          margin-top: 80px;
          position: relative;
          z-index: 2;
        }

        .stat-box {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 40px 20px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-box:hover {
          transform: translateY(-10px);
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          .subtitle {
            font-size: 1.1rem;
          }
        }
      `}</style>

      <div className="placement-container">
        {/* Particles Background */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          {/* Header */}
          <div className="header-section">
            <h1 className="main-title">Placed Student's</h1>
            <p className="subtitle">
              Celebrating our talented students who have secured amazing positions
            </p>
            <div className="divider-line"></div>
          </div>

          {/* Student Cards */}
          <div className="row g-4">
            {StudentDats.map((student, index) => (
              <div key={student.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  className={`student-card ${mounted ? 'visible' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transform: 'translateY(50px)'
                  }}
                >
                  <div className="card-img-wrapper">
                    <img
                      src={student.Image}
                      alt={student.Name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${student.Name}&size=300&background=667eea&color=fff&bold=true`;
                      }}
                    />
                    <div className="card-overlay"></div>
                  </div>
                  <div className="card-body">
                    <h5 className="student-name">{student.Name}</h5>
                    <p className="student-role">{student.Role}</p>
                    <div className="company-badge">
                      <span>🏢</span>
                      <span className="company-name">{student.comp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <p className='text-center text-white'>Many More...</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PlaceStudent;