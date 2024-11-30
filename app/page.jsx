import Header from "../sections/Header";
import Services from "../sections/Services";
import Work from "../sections/Work";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Footer from "../sections/Footer";
import React from "react";
import { client } from "../lib/client";

export const metadata = {
  title: "Salman Haider",
  description: "Hi! I'm a full stack software developer",
};
const Home = async () => {
  const query = '*[_type == "works"]';
  const projects = await client.fetch(query, { cache: "no-store" });
  return (
    <div>
      <Header />
      <Services />
      <Work works={projects} />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "works"]';
//   const projects = await client.fetch(query);

//   return {
//     props: { projects },
//   };
// };

export default Home;
