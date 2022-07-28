import React from "react";
import web from "./Images/img2.jpg";
import { Link } from 'react-router-dom';
import Common from "./Common";

export default function Home() {
  return (
    <>
      <Common 
      name="Grow your business"
      imgsrc={web}
      visit="/service"
      btname="Get Started"/>
    </>
  );
}
