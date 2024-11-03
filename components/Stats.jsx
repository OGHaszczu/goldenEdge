"use client";

import CountUp from "react-countup";

const startDate = new Date("2025-05-01");

const stats = [
  {
    num: 2,
    text: "Aktualna Liczba Pracowników",
  },
  {
    num: 0,
    text: "Liczba Naszych Ofert ",
  },
  {
    num: 0,
    text: "Liczba Zadowolonych Klientów",
  },
  {
    num: 0,
    text: "Współprac B2B",
  },
];

const Stats = () => {
  const currentDate = new Date();

  // Sprawdzenie, czy data jest przed 1 kwietnia 2025
  const isBeforeStartDate = currentDate < startDate;

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {isBeforeStartDate ? (
          // Wyświetl komunikat przed datą 1.04.2025
          <div className="text-center text-4xl font-bold">
            Start już 1.04.2025
          </div>
        ) : (
          // Po tej dacie wyświetl statystyki
          <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
            {stats.map((item, index) => {
              return (
                <div
                  className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                  key={index}
                >
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p
                    className={`${
                      item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/80`}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Stats;
