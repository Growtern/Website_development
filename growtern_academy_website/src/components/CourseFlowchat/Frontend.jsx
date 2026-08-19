import React from "react";
import tailwind from "../../assets/Logos/Tailwindlogo.png"

const FrontendTechFlow = () => {
  return (
    <div className="hero-section">
      <style>{`
        .hero-section {
          width: 100%;
          padding: 20px;
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        .tech-flow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 40px;
          position: relative;
        }

        .tech-icon {
          width: 75px;
          height: 75px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          position: relative;
        }

        .tech-icon:hover {
          transform: scale(1.1);
        }

        /* Arrow between icons */
        .tech-flow .tech-icon:not(:last-child)::after {
          content: "➜";
          position: absolute;
          right: -35px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 28px;
          color: #ffffff;
          font-weight: 700;
        }

        /* Colors for each tech */
        .html {
          background: #e34f26;
        }

        .css {
          background: #1572b6;
        }

        .bootstrap {
          background: #563d7c;
        }

        .js {
          background: #f7df1e;
          color: #000;
        }

        .react {
          background: #61dafb;
          color: #000;
        }

        .next {
          background: #68a063;
        }

        .Tailwind {
          background: #d076f3ff;
        }

        .icon-text {
        
          font-size: 24px;
          margin-bottom: 5px;
        }

        .icon-label {
          font-size: 11px;
          font-weight: 600;
        }
          @media screen and (max-width: 768px){
        .tech-flow {
    flex-direction: row;
  }

  .tech-flow .tech-icon:not(:last-child)::after {
    content: "➜";
    top: 45px;
    left: 75px;
    font-weight: 700;
  }

  .hero-section {
    padding: 0px;
  }
}

      `}</style>

      <div className="tech-flow">
        <div className="tech-icon html">
          <div className="icon-text">5</div>
          <div className="icon-label">HTML</div>
        </div>
        <div className="tech-icon css">
          <div className="icon-text">3</div>
          <div className="icon-label">CSS</div>
        </div>
        <div className="tech-icon bootstrap">
          <div className="icon-text">B</div>
          <div className="icon-label">Bootstrap</div>
        </div>
        <div className="tech-icon js">
          <div className="icon-text">JS</div>
          <div className="icon-label">JavaScript</div>
        </div>
        <div className="tech-icon react">
          <div className="icon-text">⚛</div>
          <div className="icon-label">React</div>
        </div>
        <div className="tech-icon next">
          <div className="icon-text">N</div>
          <div className="icon-label">Next.js</div>
        </div>
        <div className="tech-icon Tailwind">
          <div className="icon-text" style={{ display: "flex", justifyContent: "center" }}>
            <img src={tailwind} alt="Tailwind" style={{ width: "60%" }} />
          </div>
          <div className="icon-label">Tailwind</div>
        </div>
      </div>
    </div>
  );
};

export default FrontendTechFlow;
