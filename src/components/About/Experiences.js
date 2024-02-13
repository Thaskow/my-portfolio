import experiences from "../../assets/data/experiences.json";
import React from "react";

function Experiences() {
  return (
    <div className="experiences">
        <div className="animation">
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
        <div className="content">
            {experiences.reverse().slice(0, 3).reverse().map((experience) => (
                <div className="experience">
                    <a href={experience.site} target='_blank' rel='noreferrer'>
                        <div className="poste">
                            <div className="pos">
                                <p>{experience.poste}</p>
                            </div>
                            <div className="contrat">
                            <p>, {experience.contrat}</p>
                            </div>
                        </div>
                        <div className="entreprise">
                            <p>{experience.entreprise}, {experience.ville}</p>
                        </div>
                        <div className="date">
                            <p>{experience.date}, {experience.duree}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>
        <div className="title-experiences">
            <h1>Experiences</h1>
        </div>
    </div>
  );
}

export default Experiences;