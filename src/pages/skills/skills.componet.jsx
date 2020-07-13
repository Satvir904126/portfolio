import React, { useEffect, useContext } from "react";
import { DataContext } from "../../components/context";
import styled from "styled-components";
import SectionTop from "../../style/sectionTop";

const Skills = () => {
  const {
    logo: [logo, setlogo],
  } = useContext(DataContext);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <>
      <SectionTop id="skill"></SectionTop>

      <div className="jumbotron pt-0 mb-0 skills">
        {console.log(logo[0].img)}

        <h1 className="text-center section-heading">Skills</h1>
        <div className="row justify-content-center">
          <div className="col-sm-4 m-3 col-md-4">
            <Div className="card s-hover  p-5">
              <h3 className="text-center  skillTitle">Front End</h3>
              <ul>
                <li>
                  <Img src={logo[0].img} />
                  <Spam> HTML5</Spam>
                </li>
                <li>
                  <Img src={logo[1].img} />
                  <Spam> CSS</Spam>
                </li>
                <li>
                  <Img src={logo[2].img} />
                  <Spam> JavaScript</Spam>
                </li>
                <li>
                  <Img src={logo[3].img} />
                  <Spam> Bootstrap4</Spam>
                </li>
                <li>
                  <Img src={logo[6].img} />
                  <Spam> React</Spam>
                </li>
                <li>
                  <Img src={logo[6].img} />
                  <Spam> React Router</Spam>
                </li>
                <li>
                  <Img src={logo[6].img} />
                  <Spam> React Bootstrap</Spam>
                </li>
              </ul>
            </Div>
          </div>
          <div className=" col-sm-4 m-3 col-md-4">
            <Div className=" card s-hover p-5">
              <h3 className="text-center  skillTitle">Back End</h3>
              <ul>
                <li>
                  <Img src={logo[11].img} />
                  <Spam> Node Js</Spam>
                </li>
                <li>
                  <Img src={logo[5].img} />
                  <Spam> PHP</Spam>
                </li>
                <li>
                  <Img src={logo[8].img} />
                  <Spam> Java</Spam>
                </li>
              </ul>
            </Div>
            <Div className=" card s-hover mt-4 p-5">
              <h3 className="text-center  skillTitle">Programing Language</h3>
              <ul>
                <li>
                  <Img src={logo[2].img} />
                  <Spam> JavaScript</Spam>
                </li>
                <li>
                  <Img src={logo[12].img} />
                  <Spam> C#</Spam>
                </li>
              </ul>
            </Div>
          </div>

          <Div className="card s-hover col-sm-4 m-3 col-md-4 p-5">
            <h3 className="text-center  skillTitle">Database</h3>
            <ul>
              <li>
                <Img src={logo[4].img} />
                <Spam> My-SQL</Spam>
              </li>
              <li>
                <Img src={logo[7].img} />
                <Spam> SOL-lite</Spam>
              </li>
            </ul>
          </Div>
          <Div className="card s-hover col-sm-4 m-3 col-md-4 pb p-5 ">
            <h3 className="text-center  skillTitle">Vision Control</h3>
            <ul>
              <li>
                <Img src={logo[10].img} />
                <Spam> Git</Spam>
              </li>
              <li>
                <Img src={logo[13].img} />
                <Spam> BitBucket</Spam>
              </li>
            </ul>
          </Div>
        </div>
      </div>
    </>
  );
};
const Div = styled.div`
  padding-bottom: 0px !important;
`;
const Img = styled.img`
  height: 65px;
  width: 65px;
`;
const Spam = styled.samp`
  margin-left: 10px;
`;
export default Skills;
