import React from "react";

import '../Styles/Review.css';

//import All images
import user1 from "../assets/Ratings/user-1.png"
import user2 from "../assets/Ratings/user-2.png"
import user3 from "../assets/Ratings/user-3.png"
import user4 from "../assets/Ratings/user-4.png"
import user5 from "../assets/Ratings/user-5.png"
import user6 from "../assets/Ratings/user-6.png"
import user7 from "../assets/Ratings/user-7.png"
import user8 from "../assets/Ratings/user-8.png"
import user9 from "../assets/Ratings/user-9.png"
import user10 from "../assets/Ratings/user-10.png"
import user11 from "../assets/Ratings/user-11.png"
import user13 from "../assets/Ratings/user-13.png"
import user14 from "../assets/Ratings/user-14.png"
import user15 from "../assets/Ratings/user-15.png"
import user16 from "../assets/Ratings/user-16.png"
import user17 from "../assets/Ratings/user-17.png"
import user19 from "../assets/Ratings/user-19.png"
import user20 from "../assets/Ratings/user-20.png"




// Slide-1 All Datas
const Slide1 = [
  {
    id: 1,
    image: user1,
    Name: "Khushi Agarwal",
    message: "Growtern truly changed my career! The mentors are super supportive, and the classes are easy to follow."
  },
  {
    id: 2,
    image: user2,
    Name: "Heena Gupta",
    message: "If you want real skills and real results — Growtern is the place!"
  },
  {
    id: 3,
    image: user3,
    Name: "Uditanshu Parida",
    message: "I’m so glad I joined Growtern — their training helped me land my first job!"
  },
  {
    id: 4,
    image: user4,
    Name: "Amit Prasad Sahoo",
    message:"Growtern gives you the confidence and skills you need to succeed in your career"
  },
  {
    id: 5,
    image: user5,
    Name: "Jitu Rath",
    message: "Their placement assistance is exceptional — I got my job right after completing the course."
  },
  {
    id: 6,
    image: user6,
    Name: "Mamali Manoswini",
    message: "Growtern lives up to its name — it truly helps you grow and intern with top companies"
  },
  {
    id: 7,
    image: user7,
    Name: "Bebina Palai",
    message: "From zero to job-ready — that’s what Growtern did for me!"
  },
  {
    id: 8,
    image: user8,
    Name: "Mousumi Patra",
    message:
      "I had an excellent experience with Growtern Academy. From the start, the environment was supportive.",
  },
  {
    id: 9,
    image: user9,
    Name: "Subhashree Dash",
    message:
      "I learned about Java Development. I really enjoyed the practical part of the course.",
  },
  {
    id: 10,
    image: user10,
    Name: "Subhendra Sahoo",
    message: "I was nervous before joining, but Growtern made everything simple and enjoyable."
  },
  {
    id: 11,
    image: user11,
    Name: "Kiran Kumar Hati",
    message: "The mentors at Growtern are industry experts who genuinely care about your growth."
  },
];

// Slide-2 All Datas
const Slide2 = [
  {
    id: 12,
    image: user15,
    Name: "NIHAR RANJAN SAHOO",
    message: "Joining Growtern was the best decision I made this year. Learned a lot and met amazing people!"
  },
  {
    id: 13,
    image: user13,
    Name: "Deepak Patra",
    message: "I joined Growtern to learn Python for AI and Data Science — and now I’m interning at a startup!"
  },
  {
    id: 14,
    image: user14,
    Name: "Satyajit Pradhan",
    message:
      "I had a great learning experience at Growtern Academy.",
  },
  {
    id: 15,
    image: user15,
    Name: " Priyadarshani",
    message:
      "I learned about MERN and gained more confidence in myself. It was a valuable experience. Thank you✨",
  },
  {
    id: 16,
    image: user16,
    Name: "Priyanka Patra",
    message:
      "Really, Growtern Academy is the best skill development platform. Thank you Growtern Academy🤗.",
  },
  {
    id: 17,
    image: user10,
    Name: "Smruti Sudha Papali",
    message:
      "I had a great experience at Growtern Academy. The trainers are very cooperative and supportive.",
  },
  {
    id: 18,
    image: user17,
    Name: "Asingh Das",
    message: "Growtern helped me master Python with practical tasks and live examples. Great institute for beginners!"
  },
  {
    id: 19,
    image: user19,
    Name: "Tapan kumar Panda",
    message:
      "It’s a great institute with a positive environment, and I had an excellent experience here.",
  },
  {
    id: 20,
    image: user20,
    Name: "Gayatree Pati",
    message:
      "This experience is very helpful to me for my future, and this class was very interesting.",
  },
];



const ReviewRating = () => {
    return (
        <>
            <section className="Review-Section">
                <div className="container">
                    <div className="row ">
                        <h2 className="Review-heading p-0">
                          Learners Speak Their <span style={{ color: " rgb(254, 137, 35)" }}>Experience with Growtern</span>
                          {/* Recent <span style={{ color: " #f9a938ff" }}>Ratings</span> & <span style={{ color: " #f9a938ff" }}>Reviews</span> By Learners */}
                        </h2>
                        <p className="msg-rate p-0 "><span style={{ fontWeight: "600" }}>GROWTERN  </span>has received honest feedback from our learners around the globe</p>
                        <p className="msg-rate p-0">Google ⭐⭐⭐⭐⭐ 4.9 reviews</p>

                        <div className="p-0">
                            <div className="Slider ">
                                <div className="Slider-Track">
                                    {Slide1.map((item) => (
                                        <div className="Slide" key={item.id}>
                                            <img className="image" src={item.image} alt={item.Name} />
                                            <div className="Lower-msg">
                                                <h6 className="mb-0 fw-bold" style={{fontSize:"0.8rem"}}>{item.Name}<span style={{ fontSize: "0.6  rem" }}>(⭐⭐⭐⭐⭐)</span></h6>
                                                <p className="mb-0" style={{ fontSize: "0.7rem" }}>{item.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-0">
                            <div className="Slider">
                                <div className="Slider-Track-2">
                                    {Slide2.map((item) => (
                                        <div className="Slide" key={item.id}>
                                            <img className="image" src={item.image} alt={item.Name} />
                                            <div className="Lower-msg">
                                                <h6 className="mb-0 fw-bold" style={{ fontSize: "0.8rem" }}>{item.Name}<span style={{ fontSize: "0.8  rem" }}>(⭐⭐⭐⭐⭐)</span></h6>
                                                <p className="mb-0" style={{ fontSize: "0.7rem" }}>{item.message}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReviewRating;