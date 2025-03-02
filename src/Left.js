import React from "react";
import { MdPeople } from "react-icons/md";
import "./Styles/Left1.css"
import { GoPeople } from "react-icons/go";
import { FiRadio } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuFileSpreadsheet } from "react-icons/lu";
import Logo from "../src/Assets/logo.png"

function Left({isClicked , setisClicked}) {
    return (
        <div className="left-parent">
            <ul className="lefticons">
                <li onClick={() => setisClicked(!isClicked)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.25 6.75H15.75" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.75 15.75V6.75" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li onClick={() => setisClicked(!isClicked)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M12.75 15.75V14.25C12.75 13.4544 12.4339 12.6913 11.8713 12.1287C11.3087 11.5661 10.5456 11.25 9.75 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.25 15.7502V14.2502C17.2495 13.5855 17.0283 12.9397 16.621 12.4144C16.2138 11.889 15.6436 11.5138 15 11.3477" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 2.34766C12.6453 2.51288 13.2173 2.88818 13.6257 3.41439C14.0342 3.9406 14.2559 4.58778 14.2559 5.25391C14.2559 5.92003 14.0342 6.56722 13.6257 7.09342C13.2173 7.61963 12.6453 7.99493 12 8.16016" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li onClick={() => setisClicked(!isClicked)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <g clip-path="url(#clip0_9041_6117)">
                            <path d="M8.25 3H3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V9.75" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.875 1.87517C14.1734 1.5768 14.578 1.40918 15 1.40918C15.422 1.40918 15.8266 1.5768 16.125 1.87517C16.4234 2.17354 16.591 2.57821 16.591 3.00017C16.591 3.42213 16.4234 3.8268 16.125 4.12517L9 11.2502L6 12.0002L6.75 9.00017L13.875 1.87517Z" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_9041_6117">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </li>

                <li onClick={() => setisClicked(!isClicked)} className="selected">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M12 2.25H0.75V12H12V2.25Z" stroke="#2800FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 6H15L17.25 8.25V12H12V6Z" stroke="#2800FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.125 15.75C5.16053 15.75 6 14.9105 6 13.875C6 12.8395 5.16053 12 4.125 12C3.08947 12 2.25 12.8395 2.25 13.875C2.25 14.9105 3.08947 15.75 4.125 15.75Z" stroke="#2800FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.875 15.75C14.9105 15.75 15.75 14.9105 15.75 13.875C15.75 12.8395 14.9105 12 13.875 12C12.8395 12 12 12.8395 12 13.875C12 14.9105 12.8395 15.75 13.875 15.75Z" stroke="#2800FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li onClick={() => setisClicked(!isClicked)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9.75 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6.75L9.75 1.5Z" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.75 1.5V6.75H15" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li onClick={() => setisClicked(!isClicked)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M10.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V15C3 15.3978 3.15804 15.7794 3.43934 16.0607C3.72064 16.342 4.10218 16.5 4.5 16.5H13.5C13.8978 16.5 14.2794 16.342 14.5607 16.0607C14.842 15.7794 15 15.3978 15 15V6L10.5 1.5Z" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5 1.5V6H15" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 9.75H6" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 12.75H6" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.5 6.75H6.75H6" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
                <li onClick={() => setisClicked(!isClicked)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.1804 5.81977C12.5987 6.23769 12.9307 6.73399 13.1571 7.28028C13.3836 7.82658 13.5001 8.41215 13.5001 9.00352C13.5001 9.59489 13.3836 10.1805 13.1571 10.7267C12.9307 11.273 12.5987 11.7693 12.1804 12.1873M5.82035 12.1798C5.40196 11.7618 5.07004 11.2655 4.84358 10.7192C4.61712 10.173 4.50056 9.58739 4.50056 8.99602C4.50056 8.40465 4.61712 7.81908 4.84358 7.27278C5.07004 6.72649 5.40196 6.23019 5.82035 5.81227M14.3029 3.69727C15.7089 5.10372 16.4987 7.01103 16.4987 8.99977C16.4987 10.9885 15.7089 12.8958 14.3029 14.3023M3.69785 14.3023C2.29182 12.8958 1.50195 10.9885 1.50195 8.99977C1.50195 7.01103 2.29182 5.10372 3.69785 3.69727" stroke="#6D7885" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </li>
            </ul>
        </div>
    )
}
export default Left;




