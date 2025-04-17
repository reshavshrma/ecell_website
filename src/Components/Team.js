import React from "react";
import "../App.css";
import team1 from "../assets/Team/team1.jpg";
import { teams } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Team() {
  return (
    <section className="w-full h-auto mx-auto py-20 bg-primary flex items-center flex-col">

<div className="w-full max-h-[80vh] overflow-hidden flex justify-center items-center">
  <img
    src={team1}
    alt=""
    className="w-auto h-full object-contain"
  />
</div>

      {/* Faculty Coordinator Section */}
      <div className="m-2 z-40">
        <span className="bg-gradient-to-r from-slate-800 to-slate-600 text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transparent dark:text-blue-100">
          <br></br>
          <br></br>
        
          Faculty Coordinator
        </span>
      </div>

      <div className="flex flex-wrap mt-[-14px] justify-center items-center mb-14 gap-7 p-10 glass">
        {teams.FactAdv.map((team, index) => (
          <div className="wrapper m-4 mt-24 mb-28">
            <div className="img-area">
              <div className="inner-area bg-slate-100">
                {/* Smaller Image Size */}
                <img className="w-32 h-32 object-cover rounded-full" src={team.url} alt="" />
              </div>
            </div>
            <div className="effect"></div>
            <div className="name">{team.name}</div>
            <div className="secname">{team.name}</div>
            <div className="about">{team.designation}</div>
            <div className="social-icons">
              {/* Social Icons */}
              <a href="#" className="XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat">
                  <FontAwesomeIcon icon={faXTwitter} />
                </div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Leads Section */}
      <div className="m-2 z-40">
        <span className="bg-gradient-to-r from-slate-800 to-slate-600 text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transparent dark:text-blue-100">
          Leads
        </span>
      </div>

      <div className="flex mt-[-14px] flex-wrap justify-center items-center gap-7 mx-7 py-10 glass">
        {teams.lead.map((team, index) => (
          <div className="wrapper m-4 mt-24 mb-28">
            <div className="img-area">
              <div className="inner-area bg-slate-100">
                <img className="w-32 h-32 object-cover rounded-full" src={team.url} alt="" />
              </div>
            </div>
            <div className="effect"></div>
            <div className="name">{team.name}</div>
            <div className="secname">{team.name}</div>
            <div className="about">{team.designation}</div>
            <div className="social-icons">
              {/* Social Links */}
              <a href="#" className="XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faXTwitter} /></div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faFacebook} /></div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faLinkedinIn} /></div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faInstagram} /></div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Domain Leads Section */}
      <div className="m-2 z-40 mt-16">
        <span className="bg-gradient-to-r from-slate-800 to-slate-600 text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transparent dark:text-blue-100">
          Domain Leads
        </span>
      </div>

      <div className="flex flex-wrap mt-[-14px] justify-center items-center mx-7 gap-7 py-10 glass">
        {teams.member.map((team, index) => (
          <div className="wrapper m-4 mt-24 mb-28">
            <div className="img-area">
              <div className="inner-area bg-slate-100">
                <img className="w-32 h-32 object-cover rounded-full" src={team.url} alt="" />
              </div>
            </div>
            <div className="effect"></div>
            <div className="name">{team.name}</div>
            <div className="secname">{team.name}</div>
            <div className="about">{team.designation}</div>
            <div className="social-icons">
              {/* Social Links */}
              <a href="#" className="XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faXTwitter} /></div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faFacebook} /></div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faLinkedinIn} /></div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faInstagram} /></div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Core Members Section */}
      <div className="m-2 z-40 mt-16">
        <span className="bg-gradient-to-r from-slate-800 to-slate-600 text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transparent dark:text-blue-100">
          Core Members
        </span>
      </div>

      <div className="flex flex-wrap mt-[-14px] justify-center items-center mx-7 gap-7 py-10 glass">
        {teams.Jmember.map((team, index) => (
          <div className="wrapper m-4 mt-24 mb-28">
            <div className="img-area">
              <div className="inner-area bg-slate-100">
                <img className="w-32 h-32 object-cover rounded-full" src={team.url} alt="" />
              </div>
            </div>
            <div className="effect"></div>
            <div className="name">{team.name}</div>
            <div className="secname">{team.name}</div>
            <div className="about">{team.designation}</div>
            <div className="social-icons">
              {/* Social Links */}
              <a href="#" className="XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faXTwitter} /></div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faFacebook} /></div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faLinkedinIn} /></div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 text-zinc-100 iconbeat"><FontAwesomeIcon icon={faInstagram} /></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team; // ✅ Full updated code with smaller image and comments
