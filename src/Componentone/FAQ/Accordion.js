import React, { useState } from "react";
import "./Faq.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { BiChevronsDown } from "react-icons/bi";
const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [textColor, setTextColor] = useState("white");
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <hr />
          <div
            onClick={() => {
              setIsActive(!isActive);
              setTextColor(textColor === "white" ? "#009EFF" : "white");
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "13px",
            }}
          >
            <div
              className="label label1"
              style={{
                display: "flex",
                color: textColor,
              }}
            >
              <b>{title}</b>
            </div>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              {isActive ? (
                <BiChevronsDown size={35} />
              ) : (
                <FaAngleDoubleRight size={25} />
              )}
            </div>
          </div>
          {isActive && (
            <div>
              <b>{content}</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
