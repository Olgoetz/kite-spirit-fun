import Image from "next/image";
import katja_yoga from "@/public/katja_yoga.jpeg";

const Aboutme = () => {
  return (
    <div className="mt-20 px-4 bg-black text-white">
      <h2
        id="ueberuns"
        className="py-20 text-center font-bold text-xl md:text-5xl uppercase border-b pb-2 text-pink-500"
      >
        Über uns
      </h2>

      <div className="container max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-12 items-center justify-between">
        <div>
          <h3 className="font-bold text-2xl">Michaela</h3>
          <p className="text-left text-pink-500">
            Motivation, Power, Temperament, Lebensfreude und ein strahlendes
            Lächeln…
          </p>
          <p className="leading-8 mt-4">
            das sind die Worte mit denen mich meine Kunden und Teilnehmer
            beschreiben. Vor über 20 Jahren hing ich meinen Job als
            Industriekauffrau an den Nagel, um meine Passion Sport & Tanz zum
            Beruf zu machen. Mein Leitsatz: Meinen Teilnehmern den Spaß an der
            Bewegung zu vermitteln und somit Ihr Leben zu verbessern. Zudem habe
            ich es mir zum Ziel gesetzt, Menschen zu Sportarten oder Aktivitäten
            zu motivieren, die sie sich selbst vielleicht nie zugetraut hätten.
            Genau aus diesem Grund liebe ich es diese Camps zu organisieren
            &quot;we are better in a Team&quot; gemeinsam macht es einfach mehr
            Freude und alle geben sich gegenseitig die Motivation und den Spaß
            in so einer Woche. Viele meiner Teilnehmer beschreiben es auch als
            &quot;life-changing&quot; Camps. Ich selbst bin seit Jahren
            leidenschaftliche Kiterin und freue mich, wenn ich das mit vielen
            teilen kann. Anfänger und Fortgeschrittene sind herzlich willkommen.
            Ich und auch das Breakers freuen sich auf DICH.
          </p>
        </div>
        <div className="h-100 md:h-full relative">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src="/kitesurfen.jpg"
            alt="Kitesurfen"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="container max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-12 items-center justify-between">
        <div className="h-100 md:h-full relative">
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={katja_yoga}
            alt="Katja Frank - Yoga"
            className="rounded-lg"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl">Katja</h3>
          <p className="text-left text-pink-500">
            Co-Trainerin & Wassersport-Enthusiast
          </p>
          <p className="leading-8 mt-4">
            Seit über zehn Jahren praktiziere ich Vinyasa-Yoga – eine dynamische
            Form, die kraftvolle Bewegungen mit tiefer Atmung verbindet. Für
            mich war Yoga stets der ideale Ausgleich zu einem intensiven
            Büroalltag und hat mir geholfen, Balance und Energie zu bewahren.
            Seit 2014 bin ich passionierter Wassersportler, vom Tauchen bis
            KiteSurfen. Über viele Jahre habe ich Michaela bei ihren Events als
            Teilnehmerin begleitet und wurde durch ihre Leidenschaft und
            Inspiration schließlich selbst Trainerin. Heute bin ich regelmäßig
            im The Breakers für mehrere Monate als Yoga-Trainerin tätig und
            unterstütze Gäste dabei, ihren Urlaub optimal zu genießen. Meine
            Stunden sind auf Mobilität und Kraft ausgerichtet – mit besonderem
            Fokus auf die Bedürfnisse von Wassersportlern. Ob zur
            Unfallprävention oder für eine schnelle Recovery nach intensiven
            Sessions: Ich helfe Teilnehmern aller Fitness-Level,
            Körperbewusstsein zu entwickeln, Verletzungen vorzubeugen und neue
            Energie zu tanken. Als Co-Trainerin im Kite Spirit Fun Event bringe
            ich meine Erfahrung und Begeisterung ein, um die perfekte Balance
            zwischen sportlicher Herausforderung und wohltuender Regeneration zu
            schaffen."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
