import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Styles/home.css";
import Left from "./Left";
import Header1 from "./Header1";
import { IoCallSharp } from "react-icons/io5";
import ok from "./Styles/one.module.css"
import Logo from "../src/Assets/logo.png"
import logosmall from "../src/Assets/logo1.png"
import logobig from "../src/Assets/logo2.jpg"
import Left1 from "./Left1";


function Home() {


    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://backend-ig1p.onrender.com/hello", {
                    method: "GET",
                });

                const data = await response.json();
                console.log(data);
                setData(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [isClicked, setisClicked] = useState(false)

    function time(date1) {

        const date = new Date(date1);

        // Options for formatting
        const options = {
            day: 'numeric',
            month: 'short',  // "Nov"
            year: '2-digit', // ‘24
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        };

        // Format date
        const formattedDate = date.toLocaleString('en-GB', options).replace(',', '').replace('at', '');
        return formattedDate;
    }
    return (
        <div class="container-fluid" style={{ paddingLeft: 0 }}>


            <div class="row">
                <div class="left col-xxl-3 "
                    style={{ width: isClicked ? "220px" : "50px", transition: "width 0.3s ease" }}
                >
                    <div className={isClicked ? "logobig" : "logosmall"}>
                        <img src={isClicked ? logobig : logosmall} />
                    </div>

                    {!isClicked && <Left isClicked={isClicked} setisClicked={setisClicked} />}
                    {isClicked && <Left1 />}
                </div>
                <div class="right col-xxl-9 ">
                    <Header />
                    <Header1 />

                    
                    <div className="table-responsive">
                        <table class="table tablestyle">

                            <thead>
                                <tr style={{ padding: "10px 0" }}>
                                    <th style={{ width: "5ch" }} scope="col">Trip</th>
                                    <th style={{ width: "5ch" }} scope="col">Indent</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Source</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Destination</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Route</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Vehicle</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Driver</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Transporter</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Start time</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Hop</th>
                                    <th style={{ maxWidth: "30ch" }} scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>


                                {data && data.map((e) => {
                                    return (
                                        <tr key={e.tripId}>
                                            <td>{e.tripId}</td>
                                            <td>{e.indentIdInOrder}</td>
                                            <td>{e.source.address.addressLine1}{e.source.address.addressLine1}</td>
                                            <td style={{ maxWidth: "30ch", textOverflow: "ellipsis", overflow: "hidden" }}>{e.destination.address.addressLine1}</td>
                                            <td style={{ maxWidth: "30ch", textOverflow: "ellipsis", overflow: "hidden" }}>Nagpur-cfa</td>
                                            <td>{e.vehicle.regNo == "" ? '  ---' : e.vehicle.regNo}</td>
                                            <td>Satish</td>
                                            <td style={{ maxWidth: "30ch", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                                                <span className="call">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                        <g clip-path="url(#clip0_9041_2737)">
                                                            <path d="M9.1666 7.04972V8.29972C9.16707 8.41576 9.1433 8.53062 9.09681 8.63694C9.05032 8.74327 8.98214 8.83871 8.89663 8.91716C8.81112 8.99561 8.71017 9.05533 8.60024 9.09251C8.49032 9.12969 8.37384 9.14349 8.25826 9.13305C6.97611 8.99373 5.74451 8.55561 4.66243 7.85388C3.65569 7.21416 2.80215 6.36062 2.16243 5.35388C1.45826 4.26688 1.02003 3.0293 0.883265 1.74138C0.872852 1.62616 0.886546 1.51003 0.923473 1.40039C0.960401 1.29075 1.01975 1.19 1.09775 1.10456C1.17575 1.01911 1.27068 0.950844 1.37651 0.904099C1.48234 0.857354 1.59674 0.833157 1.71243 0.833048H2.96243C3.16464 0.831058 3.36068 0.902664 3.514 1.03452C3.66732 1.16638 3.76746 1.34948 3.79576 1.54971C3.84852 1.94974 3.94637 2.34252 4.08743 2.72055C4.14349 2.86968 4.15562 3.03176 4.12239 3.18758C4.08916 3.3434 4.01196 3.48643 3.89993 3.59971L3.37076 4.12888C3.96391 5.17203 4.82762 6.03573 5.87076 6.62888L6.39993 6.09972C6.51322 5.98769 6.65625 5.91049 6.81206 5.87725C6.96788 5.84402 7.12996 5.85615 7.2791 5.91221C7.65713 6.05328 8.0499 6.15112 8.44993 6.20388C8.65233 6.23244 8.83718 6.33438 8.96932 6.49034C9.10146 6.64629 9.17167 6.84537 9.1666 7.04972Z" fill="#2800FC" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_9041_2737">
                                                                <rect width="10" height="10" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>

                                                </span>
                                                {e.transporter.name}</td>
                                            <td>{time(e.startTime)}</td>
                                            <td>{e.source.hopCode}</td>
                                            <td>
                                                {e.status == "cancelled" && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                    <circle cx="6" cy="6" r="6" fill="#AC1000" fill-opacity="0.2" />
                                                    <circle cx="6" cy="6" r="3" fill="#AC1000" />
                                                </svg>}
                                               <span style={{marginLeft:"20px"}}> {e.status}</span></td>
                                        </tr>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button onClick={() => setisClicked(!isClicked)}>click</button>
        </div>
    )
}
export default Home;
