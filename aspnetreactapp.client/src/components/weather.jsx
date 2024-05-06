import React from "react";
import { useEffect, useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function Basic() {
    const [forecasts, setForecasts] = useState();

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
                                    <MDBTypography tag="h6">15:07</MDBTypography>
                                </div>

                                <div className="d-flex flex-column text-center mt-5 mb-4">
                                    <MDBTypography
                                        tag="h6"
                                        className="display-4 mb-0 font-weight-bold"
                                        style={{ color: "#1C2331" }}
                                    >
                                            {" "}
                                            {forecast.temperatureC}{" "}
                                    </MDBTypography>
                                        <span className="small" style={{ color: "#868B94" }}>
                                            {forecast.summary}
                                    </span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                        <div>
                                            <MDBIcon
                                                fas
                                                icon="wind fa-fw"
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 40 km/h</span>
                                        </div>
                                        <div>
                                            <MDBIcon
                                                fas
                                                icon="tint fa-fw"
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 84% </span>
                                        </div>
                                        <div>
                                            <MDBIcon
                                                fas
                                                icon="sun fa-fw"
                                                style={{ color: "#868B94" }}
                                            />{" "}
                                            <span className="ms-1"> 0.2h </span>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                                            width="100px"
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