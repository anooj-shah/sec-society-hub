import React from "react";
import "../styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";

import Header from "./Header";
import NavBar from "./NavBar";
import DayView from "./DayView";
import WeekView from "./WeekView";
import MonthView from "./MonthView";

function App() {
  const [view, setView] = React.useState(WeekView);
  function onDay() {
    setView(DayView)
  }

  function onWeek() {
    setView(WeekView)
  }

  function onMonth() {
    setView(MonthView)
  }

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}><NavBar day={onDay} week={onWeek} month={onMonth} /></Col>
        </Row>
        <Row>
          <Col sm={"auto"}>{view}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
