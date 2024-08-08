export async function generateMetadata({ params, searchParams }, parent) {
  return { title: "events | suppose earth" };
}
const Layout = ({ children, monthEvent }) => {
  // const facts = [
  //   {
  //     name: "Perseid Meteor Shower",
  //     facts:
  //       "The Perseids are one of the most popular meteor showers, known for their bright meteors and high frequency. They originate from the debris of the comet Swift-Tuttle.",
  //     whenItHappens: "Annually, typically peaking around August 11-13.",
  //     nextOccurrence: "August 2024",
  //   },
  //   {
  //     name: "Solar Eclipse",
  //     facts:
  //       "A solar eclipse occurs when the Moon passes between the Earth and the Sun, blocking the Sun's light. There are different types: total, partial, and annular.",
  //     whenItHappens: "Several times a year at various locations.",
  //     nextOccurrence: "April 8, 2024 (visible in parts of North America)",
  //   },
  //   {
  //     name: "Solar Eclipse in June",
  //     facts:
  //       "This refers to a solar eclipse occurring specifically in June. The nature (total, partial, or annular) depends on the specific event.",
  //     nextOccurrence:
  //       "June 1, 2030 (partial, visible in parts of the Arctic and northern Russia)",
  //   },
  //   {
  //     name: "Geminids Meteor Shower",
  //     facts:
  //       "Known for producing bright, multicolored meteors, the Geminids are considered one of the best meteor showers, originating from the asteroid 3200 Phaethon.",
  //     whenItHappens: "Annually, peaking around December 13-14.",
  //     nextOccurrence: "December 2024",
  //   },
  //   {
  //     name: "Penumbral Lunar Eclipse",
  //     facts:
  //       "This type of lunar eclipse occurs when the Moon passes through Earth's penumbral shadow, causing a subtle shading on the Moon's surface.",
  //     whenItHappens: "Several times a year.",
  //     nextOccurrence: "March 25, 2024",
  //   },
  //   {
  //     name: "Blue Moon",
  //     facts:
  //       "A Blue Moon is the second full moon in a calendar month. It is a rare event, hence the phrase 'once in a blue moon.'",
  //     whenItHappens: "Approximately once every 2-3 years.",
  //     nextOccurrence: "August 30, 2023",
  //   },
  //   {
  //     name: "Lyrid Meteor Shower",
  //     facts:
  //       "The Lyrids are known for their bright meteors and occasional fireballs. They originate from the comet C/1861 G1 Thatcher.",
  //     whenItHappens: "Annually, peaking around April 22-23.",
  //     nextOccurrence: "April 2024",
  //   },
  //   {
  //     name: "Quadrantids Meteor Shower",
  //     facts:
  //       "The Quadrantids are known for their short, intense peak and originate from the asteroid 2003 EH1.",
  //     whenItHappens: "Annually, peaking around January 3-4.",
  //     nextOccurrence: "January 2024",
  //   },
  //   {
  //     name: "Comet Hyakutake",
  //     facts:
  //       "Comet Hyakutake was a bright comet that made a close approach to Earth in 1996. It was notable for its long, bright tail.",
  //     whenItHappens:
  //       "Comet Hyakutake's orbital period is about 70,000 years, so it won't be visible again for many millennia.",
  //     nextOccurrence: "Expected return in ~70,000 years",
  //   },
  // ];
  // console.log("monthEvent :", monthEvent);

  // name: "Perseid Meteor Shower",
  // facts:
  //    "The Perseids are one of the most popular meteor showers, known for their bright meteors and high frequency. They originate from the debris of the comet Swift-Tuttle.",
  // whenItHappens: "Annually, typically peaking around August 11-13.",
  // nextOccurrence: "August 2024",

  return (
    <div className="">
      {/* {monthEvent} */}
      {children}
      {/* <section>
        <h1>some extra events and facts-------</h1>
        <div className="p-10">
          <h2>
            These events offer great opportunities for astrophotography and
            skywatching, each providing unique and awe-inspiring sights.
          </h2>
          {facts.map((fact) => (
            <div className="mt-4">
              <h1 className="text-2xl font-bold">{fact.name}</h1>
              <p>{fact.facts}</p>
              <span>{fact.whenItHappens} </span>
              <span>{fact.nextOccurrence} </span>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Layout;
