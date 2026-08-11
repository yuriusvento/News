"use client";

import { useMemo, useState } from "react";

const sections = ["Все", "Мир", "Общество", "Наука", "Технологии", "Культура"];

const desk = [
  { section: "Мир", title: "Главные события дня", text: "Коротко о событиях, которые влияют на международную повестку." },
  { section: "Общество", title: "Люди и общество", text: "Социальные изменения, исследования и решения, касающиеся повседневной жизни." },
  { section: "Наука", title: "Наука и открытия", text: "Новые исследования и открытия — ясно, точно и со ссылками на первоисточники." },
  { section: "Технологии", title: "Технологии", text: "Развитие искусственного интеллекта, энергетики, связи и цифровой среды." },
  { section: "Культура", title: "Культура", text: "Кино, литература, искусство и идеи, формирующие современность." },
];

export default function Home() {
  const [active, setActive] = useState("Все");
  const visible = useMemo(
    () => (active === "Все" ? desk : desk.filter((item) => item.section === active)),
    [active],
  );

  return (
    <main>
      <header className="masthead">
        <a className="brand" href="#top" aria-label="Daily Priority — на главную">Daily Priority<span>.</span></a>
        <div className="header-meta"><span>Независимый новостной обзор</span><span>11 августа 2026</span></div>
      </header>

      <nav className="section-nav" aria-label="Разделы новостей">
        {sections.map((section) => (
          <button key={section} className={active === section ? "active" : ""} onClick={() => setActive(section)}>{section}</button>
        ))}
      </nav>

      <section id="top" className="lead">
        <div className="issue-label"><span>Выпуск 01</span><span>Готовится к публикации</span></div>
        <h1>Новости, которые<br />определяют день.</h1>
        <p>Ежедневный отбор значимых событий без информационного шума. Факты, контекст и прямые ссылки на источники.</p>
        <a className="lead-link" href="#briefing">Перейти к обзору <span>↘</span></a>
      </section>

      <section id="briefing" className="briefing-head">
        <p>Сегодня в обзоре</p>
        <div><span>{String(visible.length).padStart(2, "0")}</span><span>тематических<br />направлений</span></div>
      </section>

      <section className="news-grid" aria-live="polite">
        {visible.map((item, index) => (
          <article key={item.section} className="news-card">
            <div className="card-top"><span>{item.section}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <div className="pending">Материалы появятся в первом выпуске</div>
          </article>
        ))}
      </section>

      <section className="principles">
        <p className="eyebrow">Редакционный принцип</p>
        <blockquote>Не больше новостей.<br />Больше ясности.</blockquote>
        <div className="principle-grid">
          <p><b>Отбор</b><span>Только события, имеющие последствия и долгосрочное значение.</span></p>
          <p><b>Контекст</b><span>Почему это произошло и что может измениться дальше.</span></p>
          <p><b>Источники</b><span>Ссылки на документы, исследования и надёжные публикации.</span></p>
        </div>
      </section>

      <section className="archive">
        <div><p className="eyebrow">Архив</p><h2>Все выпуски<br />в одном месте.</h2></div>
        <p>Архив будет пополняться по мере выхода новых ежедневных обзоров. Каждый выпуск сохранит собственную дату и постоянную ссылку.</p>
      </section>

      <footer><a className="brand footer-brand" href="#top">Daily Priority<span>.</span></a><p>Ежедневный новостной обзор<br />На русском языке</p><p>© 2026 Daily Priority</p></footer>
    </main>
  );
}
