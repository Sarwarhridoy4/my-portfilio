import ContactPage from "@/pages/ContactPage";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Contact - Lets Work Together",
  description: "Contact With Me",
};
const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <ContactPage />
    </React.Fragment>
  );
};

export default Contact;
