export default function Page() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Impressum</h1>
        <h2 className="text-xl mt-2 mb-8">Inhaltlich verantworlich</h2>
        <div className="space-y-8">
          <div>
            <p className="font-bold">Michaela Süßbauer</p>
            <p>Gabelsbergerstr. 54A</p>
            <p>D-80333 München</p>
            <p>Tel. 0151 / 23 00 50 78</p>
            <p>
              <a
                href="mailto:info@michaela-suessbauer.de"
                className="text-blue-600 hover:underline"
              >
                info@michaela-suessbauer.de
              </a>
            </p>
          </div>

          <div>
            <p className="font-bold">Berufshaftpflichtversicherung:</p>
            <p>Nürnberger EFM ensure GmbH</p>
            <p>Großer Burstah 31</p>
            <p>D-20457 Hamburg</p>
          </div>

          <div>
            <p className="font-bold">Konzeption und Design:</p>
            <p>Oliver Götz</p>
            <p>info@goetz-oliver.de</p>
          </div>
        </div>
      </div>
    </section>
  );
}
