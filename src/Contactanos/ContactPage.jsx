"use client";
import React from "react";
import styles from "./ContactPage.module.css";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <main className={styles.contactPage}>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
