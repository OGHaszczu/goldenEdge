"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefon",
    description: "Numer Kontaktowy",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    description: "biuro@goldenedge.pl",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adres",
    description: "Już wkrótce!",
  },
];

const kontakt = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    ></motion.section>
  );
};

export default kontakt;
