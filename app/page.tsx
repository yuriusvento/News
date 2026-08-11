"use client";

import { useMemo, useState } from "react";

const sections = ["Все", "Мир", "Общество", "Наука", "Технологии", "Культура"];

const desk = [
  { section: "Культура", title: "AI-кино получает собственную фестивальную инфраструктуру", text: "Astana AI Film Festival объявил призовой фонд $1 млн и продлил приём работ до 31 августа." },
  { section: "Общество", title: "Разнообразию знаний нужна связанная сеть", text: "Исследование показывает, как структура сотрудничества определяет коллективный интеллект." },
  { section: "Технологии", title: "AI-контент выходит в непрерывный эфир", text: "Fairground запускает отдельный FAST-канал для произведений, созданных с помощью AI." },
  { section: "Мир", title: "Парапланерный старт в Андрадасе", text: "В Минас-Жерайс готовится второй этап Campeonato Paranaense de Parapente 2026." },
  { section: "Наука", title: "Августовское небо: затмения, Персеиды и Венера", text: "NASA собрала главные астрономические события месяца в одном календаре." },
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
        <div className="header-meta"><span>Независимый новостной обзор</span><span>10 августа 2026</span></div>
      </header>

      <nav className="section-nav" aria-label="Разделы новостей">
        {sections.map((section) => (
          <button key={section} className={active === section ? "active" : ""} onClick={() => setActive(section)}>{section}</button>
        ))}
      </nav>

      <section id="top" className="lead">
        <div className="issue-label"><span>Выпуск 01</span><span>Опубликован</span></div>
        <h1>Новости, которые<br />определяют день.</h1>
        <p>Ежедневный отбор значимых событий без информационного шума. Факты, контекст и прямые ссылки на источники.</p>
        <a className="lead-link" href="/issues/2026-08-10">Читать выпуск <span>↗</span></a>
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
            <a className="pending" href="/issues/2026-08-10">Читать в выпуске →</a>
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
        <p><a href="/issues/2026-08-10"><b>Выпуск 01</b><br />10 августа 2026 →</a></p>
      </section>

      <footer><a className="brand footer-brand" href="#top">Daily Priority<span>.</span></a><p>Ежедневный новостной обзор<br />На русском языке</p><p>© 2026 Daily Priority</p></footer>
    </main>
  );
}
