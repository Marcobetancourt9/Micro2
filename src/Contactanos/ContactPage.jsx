"use client";
import React from "react";
import styles from "./ContactPage.module.css";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Header from "../Header";
import Footer from "../Footer";

const ContactPage = () => {
  return (
    <main className={styles.contactPage}>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default ContactPage;
