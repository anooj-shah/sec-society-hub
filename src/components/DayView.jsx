import React from "react";
import CardDay from "./CardDay";
import { Container, Col } from "react-bootstrap";
import Events from "../events";

function DayView() {
    return (
        <div>
            <Container>
                {Events.map((event) =>
                    <Col><CardDay day={event.day} agenda={event.title} /></Col>
                )}
            </Container>
        </div>
    );
}

//time={x.time}

export default DayView;
