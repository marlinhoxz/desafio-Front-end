import Image from "next/image";
import s from "./cards.module.css";

const reservations = [
  {
    receipt: {
      receiptNumber: "MS-2026",
      subNumber: "0421-AH",
      title: "Your stay",
      checkIn: {
        date: "25 Apr",
        day: "Saturday",
        time: "15:00",
        isoDate: "2026-04-25T15:00",
      },
      checkOut: {
        date: "29 Apr",
        day: "Wednesday",
        time: "11:00",
        isoDate: "2026-04-29T11:00",
      },
      items: [
        { description: "Room · La Garrigue × 4 nights", price: "€ 620.00" },
        { description: "Breakfast × 2 guests", price: "€ 96.00" },
        { description: "Tourist tax", price: "€ 14.40" },
      ],
      totalPaid: "€ 730.40",
      paymentInfo: "PAID · WISE · GBP",
    },
    welcomeCard: {
      host: "Margaux",
      room: "La Garrigue",
      message:
        "We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you.",
    },
  },
];

export default function Cards() {
  return (
    <section className={s.containerCards} aria-label="Reservations">
      {reservations.map((res) => (
        <article key={res.receipt.receiptNumber} className={s.cardWrapper}>
          <section className={s.card1} aria-label="Receipt">
            <header className={s.info}>
              <div className={s.info1}>
                <p>RECEIPT</p>
                <p>Nº {res.receipt.receiptNumber}</p>
              </div>
              <div className={s.info1Sub}>
                <h2>{res.receipt.title}</h2>
                <p>{res.receipt.subNumber}</p>
              </div>
            </header>

            <dl className={s.info2}>
              <div className={s.infoCheking}>
                <dt>CHECK IN</dt>
                <dd>
                  <time className={s.dd} dateTime={res.receipt.checkIn.isoDate}>
                    {res.receipt.checkIn.date}
                  </time>
                </dd>
                <dd>
                  {res.receipt.checkIn.day} · {res.receipt.checkIn.time}
                </dd>
              </div>
              <div className={s.chekingSub}>
                <dt>CHECK OUT</dt>
                <dd>
                  <time
                    className={s.dd}
                    dateTime={res.receipt.checkOut.isoDate}
                  >
                    {res.receipt.checkOut.date}
                  </time>
                </dd>
                <dd>
                  {res.receipt.checkOut.day} · {res.receipt.checkOut.time}
                </dd>
              </div>
            </dl>

            <ul className={s.gastos}>
              {res.receipt.items.map((item) => (
                <li key={item.description} className={s.gastoItem}>
                  <span>{item.description}</span>
                  <span className={s.preco}>{item.price}</span>
                </li>
              ))}
            </ul>

            <footer className={s.totalPaid}>
              <div className={s.total}>
                <p>TOTAL PAID</p>
                <span>{res.receipt.totalPaid}</span>
              </div>
              <div className={s.paymentMeta}>
                <p>{res.receipt.paymentInfo}</p>
                <Image
                  src="/assets/images/icon-barcode.svg"
                  alt="Payment barcode"
                  width={100}
                  height={30}
                />
              </div>
            </footer>
          </section>

          <aside className={s.card2} aria-label="Welcome card">
            <header className={s.card2Info}>
              <Image
                className={s.img}
                src="/assets/images/icon-sun.svg"
                alt="Sun"
                width={50}
                height={50}
              />
              <p>WELCOME CARD</p>

              <div className={s.textPrincipal}>
                <p>A note from your host,</p>
                <h2>{res.welcomeCard.host}.</h2>
              </div>

              <p>{res.welcomeCard.message}</p>

              <div className={s.subText}>
                <p>ROOM</p>
                <h3>{res.welcomeCard.room}</h3>
              </div>
            </header>
          </aside>
        </article>
      ))}
    </section>
  );
}
