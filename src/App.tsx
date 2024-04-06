import React, { useState } from "react";
import "./App.scss";
import portrait from "../src/assets/images/portrait.jpg";
import personalIcon from "../src/assets/icons/user-svgrepo-com.svg";
import languagesIcon from "../src/assets/icons/global-svgrepo-com.svg";
import technologiesIcon from "../src/assets/icons/ruler-cross-pen-svgrepo-com.svg";
import hobbyIcon from "../src/assets/icons/heart-svgrepo-com.svg";
import bikeIcon from "../src/assets/icons/bicycling-svgrepo-com.svg";
import campingIcon from "../src/assets/icons/bonfire-svgrepo-com.svg";
import cookingIcon from "../src/assets/icons/chef-hat-svgrepo-com.svg";
import skillsIcon from "../src/assets/icons/laptop-svgrepo-com.svg";
import workHistoryIcon from "../src/assets/icons/case-round-svgrepo-com.svg";
import educationIcon from "../src/assets/icons/square-academic-cap-svgrepo-com.svg";
import { myInfoEn } from "./myInfoEn";
import { myInfoPl } from "./myInfoPl";

const hobbyIcons: { [key: string]: string } = {
  bike: bikeIcon,
  camping: campingIcon,
  cooking: cookingIcon,
};

function App() {
  const [language, setLanguage] = useState<"pl" | "en">("pl");
  const myInfo = language === "pl" ? myInfoPl : myInfoEn;
  const {
    name,
    description,
    personalInfo,
    languagesInfo,
    technologiesStrongInfo,
    technologiesInfo,
    hobbyInfo,
    skillsInfo,
    workHistoryInfo,
    educationInfo,
    clause,
  } = myInfo;

  const toggleLanguage = (): void =>
    setLanguage(language === "pl" ? "en" : "pl");

  return (
    <>
      <div className={"print-area"}>
        <div className={"portrait"}>
          <div className={"image-container"}>
            <img src={portrait} alt="portrait" />
          </div>
        </div>

        <div className={"header"}>
          <div className={"name"}>{name}</div>
          <div className={"description"}>{description}</div>
        </div>

        <div className="additional-info">
          <div className="personal-info">
            <div className="part-header">
              <span className="icon">
                <img src={personalIcon} alt="personal icon" />
              </span>
              <p>{language === "pl" ? "informacje" : "personal info"}</p>
            </div>

            {personalInfo.map((info) => {
              return (
                <div className="item">
                  <div className="personal-info-name">{info.name}</div>
                  <div className="personal-info-details">{info.details}</div>
                </div>
              );
            })}
          </div>

          <div className="languages">
            <div className="part-header">
              <span className="icon">
                <img src={languagesIcon} alt="languages icon" />
              </span>
              <p>{language === "pl" ? "języki obce" : "languages"}</p>
            </div>

            {languagesInfo.map((info) => {
              return (
                <div className="item">
                  <b>{info.language}:</b>&nbsp;&nbsp;&nbsp;{info.level}
                </div>
              );
            })}
          </div>

          <div className="technologies">
            <div className="part-header">
              <span className="icon">
                <img src={technologiesIcon} alt="technologies icon" />
              </span>
              <p>{language === "pl" ? "narzędzia" : "technologies"}</p>
            </div>

            <div className="technologies-items">
              <div className="technologies-items">
                {technologiesStrongInfo.map((technology) => {
                  return <div className="strong-item">{technology}</div>;
                })}
              </div>
              <div className="technologies-items">
                {technologiesInfo.map((technology) => {
                  return <div className="item">{technology}</div>;
                })}
              </div>
            </div>
          </div>

          <div className="hobby">
            <div className="part-header">
              <span className="icon">
                <img src={hobbyIcon} alt="hobby icon" />
              </span>
              <p>hobby</p>
            </div>

            {hobbyInfo.map((hobby) => {
              return (
                <div className="item">
                  <span className="smaller-icon">
                    <img src={hobbyIcons[hobby.iconName]} alt="hobby icon" />
                  </span>

                  <p>{hobby.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="main-info">
          <div className="skills">
            <div className="part-header">
              <span className="icon">
                <img src={skillsIcon} alt="skills icon" />
              </span>
              <p>{language === "pl" ? "umiejętności" : "skills"}</p>
            </div>

            {skillsInfo.map((skill) => {
              return (
                <div className="item">
                  <div className="dot"></div>
                  <div className="line"></div>
                  <div>{skill}</div>
                </div>
              );
            })}
          </div>

          <div className="work-history">
            <div className="part-header">
              <span className="icon">
                <img src={workHistoryIcon} alt="work history icon" />
              </span>
              <p>{language === "pl" ? "doświadczenie" : "work history"}</p>
            </div>

            {workHistoryInfo.map((work) => {
              return (
                <div className="item">
                  <div className="row">
                    <div className="period">
                      {work.start} -<br />
                      {work.end}
                    </div>
                    <div className="dot"></div>
                    <div className="line"></div>
                    <p className="position">{work.position}</p>
                  </div>
                  <div className="row">
                    <div className="line"></div>
                    <p className="employer">
                      {`${work.employer}${!!work.city ? ", " + work.city : ""}`}
                    </p>
                  </div>
                  {work.details?.map((detail) => (
                    <div className="row">
                      <div className="line"></div>
                      <p className="work-details">- {detail}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="education">
            <div className="part-header">
              <span className="icon">
                <img src={educationIcon} alt="education icon" />
              </span>
              <p>{language === "pl" ? "edukacja" : "education"}</p>
            </div>

            {educationInfo?.map((education) => (
              <div className="item">
                <div className="row">
                  <div className="period">
                    {education.start} -<br />
                    {education.end}
                  </div>
                  <div className="dot"></div>
                  <div className="line"></div>
                  <p className="field">
                    {education.field}, {education.grade}
                  </p>
                </div>
                <div className="row">
                  <div className="line"></div>
                  <p className="school">{education.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer">
          <p>{clause}</p>
        </div>

        <div className="languageToggler" onClick={toggleLanguage}>
          {language === "pl" ? "English" : "polski"}
        </div>
      </div>
    </>
  );
}

export default App;
