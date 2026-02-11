import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="mx-auto min-h-fit">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
