import React from "react";
import CardDay from "./CardDay";
import { Container, Col } from "react-bootstrap";

function DayView() {
    return (
        <div>
            <Container>
                <Col><CardDay day="Monday" agenda="SEC Meeting" time="8:15" /></Col>
            </Container>
        </div>
    );
}

export default DayView;
