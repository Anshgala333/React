import React, { useState, useRef } from "react";
import "./Styles/home.css"; // Importing the external CSS file
import { TfiReload } from "react-icons/tfi";
import Ansh from "../src/Assets/ANSH.jpg"
import { RxCaretDown } from "react-icons/rx";
function Header() {
    const [isClicked, setisClicked] = useState(false)
    const [openSection, setOpenSection] = useState(null);
    const sections = [
        { id: "B", title: "Trip Id", content: ["Value1", "Value2", "Value3"] },
        { id: "d", title: "Indent Id", content: ["Value1", "Value2", "Value3" , "value4"] },
        { id: "e", title: "sorce", content: ["Value1", "Value2",] },
        { id: "f", title: "route", content: ["Value1", "Value2", "Value3" , "value5" , "value6"] },
        { id: "g", title: "destination", content: ["Value1", "Value2", "Value3"] },
    ];

    const toggleSection = (id) => {
        setOpenSection(openSection === id ? null : id);
    };
    const contentRefs = useRef({});

    return (

        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <ul class="d-flex flex-row p-2 ul1">
                        <li style={{ borderRight: "1px solid gray", padding: "0 10px" }}>Dashboard</li>
                        <li style={{ borderRight: "1px solid gray", padding: "0 10px" }}>Trip</li>
                        <li style={{ padding: "0 10px" }}>Trip Details</li>
                    </ul>
                    <ul class="d-flex flex-row gap-3">
                        <div className="d-flex  button-parent">
                            <div className="b1">Primary</div>
                            <div className="b2">Secondary</div>
                        </div>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M23 4V10H17" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 20V14H7" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.51 8.99959C4.01717 7.56637 4.87913 6.28499 6.01547 5.27501C7.1518 4.26502 8.52547 3.55935 10.0083 3.22385C11.4911 2.88834 13.0348 2.93393 14.4952 3.35636C15.9556 3.77879 17.2853 4.5643 18.36 5.63959L23 9.99959M1 13.9996L5.64 18.3596C6.71475 19.4349 8.04437 20.2204 9.50481 20.6428C10.9652 21.0652 12.5089 21.1108 13.9917 20.7753C15.4745 20.4398 16.8482 19.7342 17.9845 18.7242C19.1209 17.7142 19.9828 16.4328 20.49 14.9996" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li>
                            <img src={Ansh} alt="Icon" className="user-img" />
                        </li>
                        <li className="username">Ansh Gala</li>
                        <li style={{ cursor: "pointer" }} onClick={() => setisClicked(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 8.40039L12.1562 14.5565L18.312 8.40039" stroke="#6D7885" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </nav>
            <div
                onClick={() => setisClicked(false)}
                class={`blackbox ${isClicked ? "visible" : ""}`}></div>
            <div class={`left-section ${isClicked ? "show" : ""}`}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", }}>
                    <span className="acc-header">Filter</span>
                    <span style={{cursor: "pointer"}} onClick={() => setisClicked(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                            <path d="M13 0.5L1 12.5" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 0.5L13 12.5" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                {sections.map((section) => (
                    <div 
                    className="acc-list"

                     key={section.id}>

                        <div onClick={() => toggleSection(section.id)}
                            style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px " }}>
                            <span className="acc-1">{section.title}</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#6D7885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <ul
                            ref={(el) => (contentRefs.current[section.id] = el)}
                            style={{
                                height: openSection === section.id ? `${contentRefs.current[section.id]?.scrollHeight}px` : "0",
                            }}
                            className={`accordion-content`}>
                            {section.content.map((item, index) => (
                                <li
                                    style={{ padding: "5px 10px" ,cursor:"pointer"}}
                                    key={index}>
                                    <label style={{cursor : "pointer"}}>
                                        <input className="check" type="checkbox" />
                                        <span style={{ paddingLeft: "10px" }}>{item}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}


                <div className="resetbtnparent">
                    <button className="resetbtn">Reset</button>
                    <button className="filter">Apply filter</button>
                </div>

            </div>
        </>
    )
}
export default Header;
