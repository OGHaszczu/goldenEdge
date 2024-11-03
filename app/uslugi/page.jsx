"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Doradztwo ds. Nieruchomośći",
    description:
      "Potrzebujesz sprzedać lub kupić nieruchomość? Świetnie sie składa! Nasi doradzcy z chęcia Ci pomogą. Załatwimy wszystkie formalnośći, wystwaimy ogłoszenie na 26 portalach aukcyjnych, sprawdzimy potencjalnego kupującego. Z nami masz gwarancję szybkiej i bezpiecznej transakcji!",
    href: "",
  },
  {
    num: "02",
    title: "Pomoc w Uzyskaniu Kredytu",
    description:
      "Czy wiesz, że 90% zakupów nieruchomości odbywa się poprzez kredyt? Sprawdzimy Twoją zdolność kredytową i pomożemy uzyskać najlepszą możliwą ofertę. Nie musisz się martwić nie pobieramy żadnego wynagrodzenia. Warunki będą identyczne jak w banku, z tą różnicą, że bez kolejek! Masz inny cel kredytowy? To nie problem!",
    href: "",
  },
  {
    num: "03",
    title: "Ubezpieczenie to podstawa",
    description:
      "Masz już swój wymarzony dom, mieszkanie albo samochód? A może chciałbyś po prostu ubezpieczyć siebie? Niezależnie od tego, co potrzebujesz, to Ty decydujesz, co będzie dla Ciebie najlepsze! Uwaga! Prawdopodobnie otrzymasz lepszą ofertę niż gdziekolwiek indziej, ale chyba nie musimy tego zbyt mocno podkreślać, prawda?",
    href: "",
  },
  {
    num: "04",
    title: "To nie koniec ",
    description:
      "Aktualnie ten kafelek jest pusty, ale to tylko kwestia czasu, zanim pojawią się w nim nowe, ekscytujące informacje! Chociaż bardzo chcielibyśmy już teraz podzielić się szczegółami, musimy jeszcze chwilę zachować je w tajemnicy. Obiecujemy, że warto będzie poczekać! Serio, serio będzie warto.",
    href: "",
  },
];

const Uslugi = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className=" duration-500 text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white  group-hover:bg-yellow transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl -yellow" />
                  </Link>
                </div>
                <h2 className="text-white font-bold leading-none text-[42px] group-hover:text-pink duration-500">
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Uslugi;
