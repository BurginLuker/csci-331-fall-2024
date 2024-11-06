import React from "react";
import Counter from "@/pages/components/Counter";

const MainPage = () => {
    return (
        <>
            <div style={{display: "flex", margin: "20px", textAlign: "center"}}>
                <div style={{margin: "20px"}}>
                    <Counter color={"green"} increment={1}/>
                </div>
                <div style={{margin: "20px"}}>
                    <Counter color={"red"} increment={2}/>
                </div>
            </div>
            <div>
                <h1 style={{marginBottom: "5px"}}>My Store API</h1>
                <a style={{textDecoration: "underline", padding: "10px"}} href={"http://localhost:3047/Store"}>Click
                    Here To Check Out The Store!</a>
            </div>
        </>
    )
}

export default MainPage;