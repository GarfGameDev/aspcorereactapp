import React from "react";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTint, faSun } from '@fortawesome/free-solid-svg-icons';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function Basic() {
    const [forecasts, setForecasts] = useState();

    function ImageToShow({ summary }) {
        if (summary === 'Thunderstorm') {
            return (
                <img
                    src="../src/assets/thunderstorm.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Sunny') {
            return (
                <img
                    src="../src/assets/sunny.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Freezing') {
            return (
                <img
                    src="../src/assets/freezing.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Cloudy Sunny Showers') {
            return (
                <img
                    src="../src/assets/cloudysunnyshowers.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Windy') {
            return (
                <img
                    src="../src/assets/windy.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Heavy Rain') {
            return (
                <img
                    src="../src/assets/heavyrain.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Cloudy') {
            return (
                <img
                    src="../src/assets/cloudy.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Cloudy Sunshine') {
            return (
                <img
                    src="../src/assets/cloudysunshine.png"
                    width="100px"
                />
            )
        }
        if (summary === 'Light Rain') {
            return (
                <img
                    src="../src/assets/lightrain.png"
                    width="100px"
                />
            )
        }
    }

    useEffect(() => {
        populateWeatherData();
    }, []);

    return (

        <section className="vh-100" style={{ backgroundColor: "#4B515D" }}>
            <MDBContainer className="h-100">
                <MDBRow className="justify-content-center align-items-center h-100 w-100">
                    {(forecasts || []).map(forecast =>
                        <MDBCol md="8" lg="6" xl="4" key={forecast.date} >
                        <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
                            <MDBCardBody className="p-4">
                                <div className="d-flex">
                                    <MDBTypography tag="h6" className="flex-grow-1">
                                        {forecast.date}
                                        </MDBTypography>
                                        <MDBTypography tag="h6">{forecast.time}</MDBTypography>
                                </div>

                                <div className="d-flex flex-column text-center mt-5 mb-4">
                                    <MDBTypography
                                        tag="h6"
                                        className="display-4 mb-0 font-weight-bold"
                                        style={{ color: "#1C2331" }}
                                    >
                                            {" "}
                                            {forecast.temperatureC}{'\u00b0'}C{" "}
                                    </MDBTypography>
                                        <span className="small" style={{ color: "#868B94" }}>
                                            {forecast.summary}
                                    </span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                            <div>
                                                <FontAwesomeIcon
                                                icon={faWind}
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 40 km/h</span>
                                        </div>
                                            <div>
                                                <FontAwesomeIcon
                                                icon={faTint}
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 84% </span>
                                        </div>
                                            <div>
                                                <FontAwesomeIcon
                                                    icon={faSun}
                                                    style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 0.2h </span>
                                        </div>
                                    </div>
                                        <div>
                                            <ImageToShow
                                                summary={forecast.summary}
                                            />

                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBContainer>
        </section>
    );

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }
}