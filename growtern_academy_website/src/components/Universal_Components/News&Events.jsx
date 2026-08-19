import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../../Styles/Universal_Components_Style/News&Events.css";

// images
import Pannep01 from "../../assets/News&Events Image/1st_pannel_member.png";
import Pannel02 from "../../assets/News&Events Image/2nd_pannel_members.png";
import OurTeam from "../../assets/News&Events Image/Our_team.png";
import DiscusswithJyoti from "../../assets/News&Events Image/Leaders_discuss_withJyoti.png";
import AttentSem from "../../assets/News&Events Image/Attent_Seminar.jpg";
import Discus from "../../assets/News&Events Image/Discuss_with_Sumitpremi.png";
import WithMegha from "../../assets/News&Events Image/Photo_with_MeghaJasani.png";

const items = [
  {
    id: 1,
    type: "event",
    title: "AI-Powered Learning Paths Now Live",
    date: "Feb 20, 2026",
    img: Pannep01,
  },
  {
    id: 2,
    type: "event",
    title: "Live Webinar: Future of Online Education",
    date: "Mar 5, 2026",
    img: OurTeam,
  },
  {
    id: 3,
    type: "news",
    title: "New Quiz Builder for Educators",
    date: "Feb 15, 2026",
    img: DiscusswithJyoti,
  },
  {
    id: 4,
    type: "event",
    title: "Workshop: Launch Your First Course",
    date: "Mar 12, 2026",
    img: AttentSem,
  },
  {
    id: 5,
    type: "news",
    title: "Short Videos Boost Retention by 68%",
    date: "Feb 8, 2026",
    img: Pannel02,
  },
  {
    id: 6,
    type: "event",
    title: "Industry Leaders Interaction Session",
    date: "Apr 2, 2026",
    img: WithMegha,
  },
  {
    id: 7,
    type: "news",
    title: "Startup Mentorship Discussion",
    date: "Feb 18, 2026",
    img: Discus,
  },
];

const row1 = items;
const row2 = [...items].reverse();

const NewsCard = ({ item, onCardClick }) => (
  <div
    className="ne-card"
    onClick={() => onCardClick(item.img)}
    style={{ margin: "0 10px" }}
  >
    <img
      src={item.img}
      alt={item.title}
      className="ne-card-img"
    />

    <div className="ne-card-overlay" />

    <span className={`ne-badge ne-badge--${item.type}`}>
      {item.type === "news" ? "News" : "Event"}
    </span>

    <div className="ne-card-bottom">
      <p className="ne-card-date">
        {item.date}
      </p>
    </div>
  </div>
);

export default function NewsEvents() {
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setModalImg(null);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <section className="ne-section">

        <div className="ne-header">
          <h2 className="ne-title">
            News &{" "}
            <span style={{ color: "#ff7913" }}>
              Events
            </span>
          </h2>
        </div>

        {/* First Row */}
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
          autoFill
          className="mb-3"
        >
          {row1.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              onCardClick={setModalImg}
            />
          ))}
        </Marquee>

        {/* Second Row */}
        <Marquee
          speed={35}
          direction="right"
          gradient={false}
          pauseOnHover
          autoFill
        >
          {row2.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              onCardClick={setModalImg}
            />
          ))}
        </Marquee>

      </section>

      {/* Modal */}
      {modalImg && (
        <div
          className="ne-modal"
          onClick={() => setModalImg(null)}
        >
          <div
            className="ne-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="ne-modal-close"
              onClick={() => setModalImg(null)}
            >
              ✕
            </span>

            <img
              src={modalImg}
              alt="preview"
            />
          </div>
        </div>
      )}
    </>
  );
}