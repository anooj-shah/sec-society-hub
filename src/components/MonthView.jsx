import React from "react";
import CardDay from "./CardDay";
import { Container, Col, Row } from "react-bootstrap";

function MonthView() {
    return (
        <div>
            <Container>
                <Row>
                    <Col><CardDay day="Monday" agenda="SEC Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Tuesday" agenda="Big Event Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Wednesday" agenda="ZLP Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Thursday" agenda="Mechanical Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Friday" agenda="Computer Science Meeting" time="8:15" /></Col>
                </Row>
                <Row>
                    <Col><CardDay day="Monday" agenda="SEC Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Tuesday" agenda="Big Event Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Wednesday" agenda="ZLP Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Thursday" agenda="Mechanical Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Friday" agenda="Computer Science Meeting" time="8:15" /></Col>
                </Row>
                <Row>
                    <Col><CardDay day="Monday" agenda="SEC Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Tuesday" agenda="Big Event Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Wednesday" agenda="ZLP Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Thursday" agenda="Mechanical Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Friday" agenda="Computer Science Meeting" time="8:15" /></Col>
                </Row>
                <Row>
                    <Col><CardDay day="Monday" agenda="SEC Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Tuesday" agenda="Big Event Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Wednesday" agenda="ZLP Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Thursday" agenda="Mechanical Meeting" time="8:15" /></Col>
                    <Col><CardDay day="Friday" agenda="Computer Science Meeting" time="8:15" /></Col>
                </Row>
            </Container>
        </div>
    );
}

export default MonthView;
