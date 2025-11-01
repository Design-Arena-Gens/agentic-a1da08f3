export default function Page() {
  return (
    <main>
      <header className="container">
        <h1>Epidemiyolojik ?zellikler (2020?2025)</h1>
        <p className="lede">
          29?90 g?n aras? bebeklerde invaziv bakteriyel infeksiyon (IBI) i?in g?ncel
          ?zet. Premat?re ve NICU?dan yeni ??kan bebekler ayr? risk grubudur.
        </p>
      </header>

      <section className="container card">
        <h2>Incidans</h2>
        <ul className="list">
          <li>
            <strong>29?90 g?n aras? bebekler</strong>: IBI oran? %1?2
          </li>
          <li>
            <strong>NICU?dan ??kan premat?re bebekler</strong>: %5?7?ye kadar artabilir
          </li>
        </ul>
      </section>

      <section className="container card">
        <h2>Mortalite</h2>
        <ul className="list">
          <li>
            <strong>Erken tan? ve uygun antibiyotik</strong>: %5?10 civar?nda
          </li>
          <li>
            <strong>Tan?da gecikme</strong>: %30?a kadar art?? g?r?lebilir
          </li>
        </ul>
      </section>

      <section className="container card">
        <h2>Mikroorganizma Da??l?m?</h2>
        <ul className="list">
          <li>
            <strong>E. coli</strong> (%30?35) ? ?zellikle premat?re bebeklerde
          </li>
          <li>
            <strong>GBS</strong> (%25?30) ? do?um sonras? erken d?nemde h?l? ?nemli etken
          </li>
          <li>
            <strong>L. monocytogenes</strong> (%5?10) ? maternal listeriozis ?yk?s?nde dikkat
          </li>
          <li>
            <strong>S. pneumoniae</strong> ve <strong>N. meningitidis</strong> (%10?15) ? a?? programlar?yla azalma e?iliminde; risk fakt?rl? bebeklerde g?r?lebilir
          </li>
        </ul>
      </section>

      <section className="container card">
        <h2>Klinik Sunum</h2>
        <div className="grid">
          <div>
            <h3>Sepsis</h3>
            <ul className="list">
              <li>Irritabilite, beslenme bozuklu?u</li>
              <li>Hipotermi/hipertermi</li>
              <li>Solunum s?k?nt?s?</li>
            </ul>
          </div>
          <div>
            <h3>Meningit</h3>
            <ul className="list">
              <li>Bebeklerde ba? a?r?s? belirtisi tipik de?ildir</li>
              <li>Bulant?-kusma</li>
              <li>Meningeal irritasyon i?aretleri (bacak b?k?lmesi vb.)</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="container footer">
        <small>
          Bu sayfa bilgilendirme ama?l?d?r; klinik kararlar i?in k?lavuzlara ve uzman
          g?r???ne ba?vurun.
        </small>
      </footer>
    </main>
  );
}
