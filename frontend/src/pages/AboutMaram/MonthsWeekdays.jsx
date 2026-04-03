import React from "react";

const months = [
  { maram: "Kopokkii", english: "January", notes: "" },
  {
    maram: "Lungaroukii",
    english: "February",
    notes:
      "During Lungaroukii, young women feel shy on account of their impending marriages which take place in this month.",
  },
  { maram: "Fiibuikii / Fiiruikii", english: "March", notes: "" },
  { maram: "Tingpuikii", english: "April", notes: "" },
  {
    maram: "Kapokmataikii",
    english: "May",
    notes:
      "This is the month for plantation, which is called 'kapok katu' in Maram.",
  },
  { maram: "Pokjingkii", english: "June", notes: "" },
  { maram: "Punghikii", english: "July", notes: "" },
  { maram: "Lamsangkii", english: "August", notes: "" },
  { maram: "Taroukii", english: "September", notes: "" },
  { maram: "Mataikii", english: "October", notes: "" },
  {
    maram: "Rakakkii",
    english: "November",
    notes:
      "This is the month when the dead are remembered; 'rakak katu' in Maram.",
  },
  {
    maram: "Kanghikii",
    english: "December",
    notes: "This is the month when 'Kanghi hangni' is celebrated.",
  },
];

const weekdays = [
  { maram: "Kamanai", english: "Sunday" },
  { maram: "Sagongkii", english: "Monday" },
  { maram: "Sadzii Mana", english: "Tuesday" },
  { maram: "Akilutii", english: "Wednesday" },
  { maram: "Takoizung", english: "Thursday" },
  { maram: "Ira", english: "Friday" },
  { maram: "Akangtii", english: "Saturday" },
];

const MonthsWeekdays = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-deep-brown py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">📅</div>
          <div className="absolute bottom-10 right-10 text-8xl">🌙</div>
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <p className="text-warm-gold font-medium text-sm tracking-[0.15em] uppercase mb-3">
            Maram Language
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Months & <span className="text-warm-gold">Weekdays</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            The traditional Maram lunar calendar and weekday names reflect the
            deep connection between the people, nature, and the agricultural
            cycle.
          </p>
        </div>
      </section>

      {/* Months */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
            Months (Lunar Calendar)
          </h2>
          <p className="text-primary/50 text-sm mb-8">
            With thanks to Monica Kanga for corrections in the names for
            February and March.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {months.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-5 hover:shadow-md transition-shadow"
              >
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  {m.english}
                </p>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {m.maram}
                </h3>
                {m.notes && (
                  <p className="text-primary/50 text-sm leading-relaxed">
                    {m.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekdays */}
      <section className="py-12 md:py-16 bg-warm-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8">
            Weekdays
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {weekdays.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border border-soft-gray/50 p-5 text-center hover:shadow-md transition-shadow"
              >
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  {d.english}
                </p>
                <h3 className="font-heading text-xl font-bold text-primary">
                  {d.maram}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-primary/60 leading-relaxed">
            The Maram calendar is lunar-based, and each month is tied to
            agricultural activities, festivals, and spiritual observances. These
            names are a living connection to the traditional way of life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default MonthsWeekdays;
