import React from "react";
import web from "./Images/img2.jpg";
import { Link } from "react-router-dom";
import Common from "./Common";

export default function About() {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
}
