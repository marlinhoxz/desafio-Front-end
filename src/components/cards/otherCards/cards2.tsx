'use client'

import Image from "next/image";
import s from "./cards2.module.css";

type CardType = "arrival" | "wifi" | "breakfast";

interface CardBase {
  id: number;
  id_number: string;
  icon: string;
  type: CardType;
  title: string;
  subtitle: string;
  description: string;
}

interface ArrivalCard extends CardBase {
  type: "arrival";
  date: string;
  dateISO: string;
}

interface WifiCard extends CardBase {
  type: "wifi";
  network: string;
  password: string;
}

interface BreakfastCard extends CardBase {
  type: "breakfast";
  location: string;
}

type Card = ArrivalCard | WifiCard | BreakfastCard;

const cards: Card[] = [
  {
    id: 1,
    id_number: "01",
    icon: "/assets/images/icon-key.svg",
    type: "arrival",
    title: "ARRIVAL",
    subtitle: "Check-in from 15:00",
    date: "Sat, 25 April",
    dateISO: "2026-04-25",
    description:
      "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
  },
  {
    id: 2,
    id_number: "02",
    icon: "/assets/images/icon-wifi.svg",
    type: "wifi",
    title: "WIFI",
    subtitle: "Le Soleil · Guest",
    description: "Password below",
    network: "Le Soleil · Guest",
    password: "soleil-2026",
  },
  {
    id: 3,
    id_number: "03",
    icon: "/assets/images/icon-breakfast.svg",
    type: "breakfast",
    title: "BREAKFAST",
    subtitle: "Served 8 – 10:30",
    description:
      "Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.",
    location: "On the terrace",
  },
];

export default function CardsTwo() {
  return (
    <article className={s.container}>
      <aside className={s.asideContainer}>
        {cards.map((card) => (
          <div className={s.infoContainer} key={card.id} data-type={card.type}>
            <div className={s.headerCard}>
              <div>
                <span className={s.imgContainer}>
                  <Image
                    className={s.img}
                    src={card.icon}
                    width={20}
                    height={20}
                    alt={`icon-${card.type}`}
                  />
                </span>
                <h3 className={s.headerTitle}>{card.title}</h3>
              </div>
              <p className={s.headerNumber}>{card.id_number}</p>
            </div>

            <div className={s.checkInInfo}>
              <h2>{card.subtitle}</h2>
              {card.type === "arrival" && (
                <time dateTime={card.dateISO}>{card.date}</time>
              )}
            </div>

            {card.type === "breakfast" && (
              <p className={s.location}>{card.location}</p>
            )}
            <p className={s.HeaderDescription}>{card.description}</p>


            {card.type === "wifi" && (
              <div className={s.moreWifi}>
                <div className={s.wifiBord}>
                  <span>NETWORK</span>
                  <p>{card.network}</p>
                </div>
                <div className={s.wifiBord}>
                  <span>PASSWORD</span>
                  <p>
                    {card.password}
                    <button
                      type="button"
                      className={s.copyBtn}
                      onClick={() =>
                        navigator.clipboard.writeText(card.password)
                      }
                    >
                      COPY
                    </button>
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </aside>
    </article>
  );
}