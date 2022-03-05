import React from "react";
import Head from "next/head";
import { ContactMain, Footer, Header } from "../components";

const contact = () => {
  return (
    <div>
      <Head>
        <title>SoftKode</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ContactMain />
      <Footer />
    </div>
  );
};

export default contact;
