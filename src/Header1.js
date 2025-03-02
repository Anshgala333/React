import React from "react";
import "./Styles/Header1.css"
import { IoReload } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

function Header1() {
    return (
        <div className="container-fluid pt-3 pb-3 d-flex ">
            <div style={{ width: "55%", position: "relative" }}>
                <span className="searchIcon">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9.3 15.6C12.7794 15.6 15.6 12.7794 15.6 9.3C15.6 5.82061 12.7794 3 9.3 3C5.82061 3 3 5.82061 3 9.3C3 12.7794 5.82061 15.6 9.3 15.6Z" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.0004 17.0004L14.9004 14.9004" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <input className="input1" placeholder="Search" />
            </div>
            <div className="i1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.417 2.33301V5.83301H9.91699" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.9521 8.74985C11.5729 9.82313 10.8552 10.7441 9.90703 11.374C8.95888 12.0038 7.8317 12.3085 6.69535 12.242C5.55899 12.1755 4.47503 11.7415 3.60679 11.0054C2.73856 10.2693 2.1331 9.27089 1.88165 8.16071C1.6302 7.05053 1.74638 5.8887 2.21269 4.8503C2.679 3.8119 3.47017 2.95318 4.46698 2.40355C5.46379 1.85392 6.61223 1.64315 7.73925 1.80301C8.86626 1.96287 9.9108 2.48469 10.7154 3.28985L13.4163 5.83318" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className="d-flex flex-row btn2">
                <div className="i1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.33301 12.2503V8.16699" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.33301 5.83333V1.75" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 12.25V7" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7 4.66667V1.75" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.667 12.2497V9.33301" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.667 7V1.75" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M0.583008 8.16699H4.08301" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.25 4.66699H8.75" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.91699 9.33301H13.417" stroke="#6D7885" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="i1 blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.6668 8.77772V13.4441C12.6668 13.8567 12.5029 14.2524 12.2112 14.5442C11.9194 14.8359 11.5237 14.9998 11.1111 14.9998H2.55577C2.14315 14.9998 1.74744 14.8359 1.45567 14.5442C1.16391 14.2524 1 13.8567 1 13.4441V4.88878C1 4.47616 1.16391 4.08045 1.45567 3.78868C1.74744 3.49692 2.14315 3.33301 2.55577 3.33301H7.22212" stroke="#2800FC" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.334 1H15.0003V5.66635" stroke="#2800FC" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.07617 9.92482L14.7354 1.26562" stroke="#2800FC" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </div>


        </div>
    )
}
export default Header1;

