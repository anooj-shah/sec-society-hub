import React from "react";
import { Button, ButtonGroup } from '@material-ui/core';
import "../styles/NavBar.css";

function NavBar(props) {
    function handleDay() {
        props.day();
    }
    function handleWeek() {
        props.week();
    }
    function handleMonth() {
        props.month();
    }
    return (
        <div id="NavBar">
            <ButtonGroup size="small" color="primary" aria-label="large outlined primary button group">
                <Button onClick={handleDay}>Day</Button>
                <Button onClick={handleWeek}>Week</Button>
                <Button onClick={handleMonth}>Month</Button>
            </ButtonGroup>
        </div>
    );
}
export default NavBar;