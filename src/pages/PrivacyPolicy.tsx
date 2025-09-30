import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[rgba(244,244,244,1)] min-h-screen flex flex-col items-center py-[26px]">
      <Header />
      
      <main className="w-full max-w-[1200px] px-8 py-16">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">Pagina principală</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span>Politica de confidențialitate</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#4D4D4D] mb-8">Politica de confidențialitate</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">1. Cine suntem</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Prezenta politică se referă la Site-ul www, care funcționează la adresa www.cargoseller.pl</li>
              <li>Administratorul acordă o mare importanță respectării drepturilor utilizatorilor care folosesc serviciile și funcționalitățile oferite în cadrul Site-ului, precum și utilizatorilor care folosesc Site-ul fără a utiliza serviciile și funcționalitățile oferite în cadrul Site-ului, cu accent deosebit pe dreptul la protecția vieții private. În acest sens, colectăm doar informațiile minime care ne ajută să înțelegem mai bine nevoile utilizatorilor și să adaptăm Site-ul, funcționalitățile și ergonomia acestuia la așteptările în schimbare ale utilizatorilor. Printre altele, în acest scop colectăm și procesăm datele necesare ale utilizatorilor, inclusiv Datele cu caracter personal și alte date care nu au un astfel de caracter. Colectarea are loc, în funcție de tipul de date, din inițiativa utilizatorului sau automat.</li>
              <li>Administratorul procesează Datele cu caracter personal în conformitate cu dispozițiile Regulamentului GDPR, precum și cu alte dispoziții relevante ale legislației aplicabile, în special cu dispozițiile naționale privind protecția datelor cu caracter personal. Pentru protecția eficientă a Datelor, Administratorul aplică măsuri de securitate adecvate pentru procesarea Datelor, proporționale cu amenințările și categoriile de Date, care îndeplinesc cerințele stabilite în legislația aplicabilă (de exemplu, parole de acces, restricții privind persoanele cu drepturi de acces sau plasarea serverelor care stochează date în încăperi destinate acestui scop sau încredințarea acestora unor entități specializate).</li>
              <li>Operatorul site-ului și Administratorul datelor cu caracter personal este:
                <div className="ml-6 mt-2 font-semibold">CS SOFT Monika Janczukowicz z siedzibą Szydłowo 189, 64-930 Szydłowo<br/>NIP: 7651604754 REGON: 302309608</div>
              </li>
              <li>Adresa de contact e-mail a operatorului: kontakt@cargoseller.pl</li>
              <li>Operatorul este Administratorul datelor tale cu caracter personal în ceea ce privește datele furnizate voluntar pe Site.</li>
              <li>Site-ul utilizează datele cu caracter personal în următoarele scopuri:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Gestionarea solicitărilor prin formular</li>
                  <li>Prezentarea ofertei sau a informațiilor</li>
                </ul>
              </li>
              <li>Site-ul îndeplinește funcția de colectare a informațiilor despre utilizatori și comportamentul acestora în următorul mod:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>Prin intermediul datelor introduse voluntar în formulare, care sunt introduse în sistemele Operatorului.</li>
                  <li>Prin salvarea fișierelor cookie (așa-numitele „cookies") în dispozitivele finale.</li>
                </ul>
              </li>
              <li>Site-ul cargoseller.pl își rezervă dreptul de a introduce modificări în Politica de confidențialitate. Fiecare utilizator al site-ului este supus Politicii de confidențialitate actuale aflată pe pagina https://cargoseller.pl/polityka-prywatnosci/. Orice modificări introduse nu afectează principiul de bază: <strong>Site-ul nu vinde și nu pune la dispoziția terților date personale sau de adresă ale clienților/utilizatorilor site-urilor și revistelor sale în scopuri de marketing.</strong></li>
              <li>Dacă nu sunteți de acord cu Politica de confidențialitate, vă rugăm să nu vizitați site-ul, să nu achiziționați produsele și serviciile oferite de site.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">2. Date cu caracter personal</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>În timpul utilizării site-urilor care aparțin Site-ului, este posibil să vi se solicite să furnizați unele dintre datele dvs. personale prin completarea unui formular de contact. Datele care vă vor fi solicitate sunt Numele și Prenumele, Numărul de telefon, Adresa de e-mail, Numele companiei.</li>
              <li>Solicităm doar datele care sunt necesare pentru contact. Lipsa completării câmpurilor obligatorii ale formularului face imposibil contactul.</li>
              <li>Datele utilizatorilor vor fi procesate în următoarele scopuri:
                <ol className="ml-6 mt-2 list-decimal list-inside">
                  <li>pentru a permite utilizatorilor să folosească serviciile Site-ului (art. 6 alin. 1 lit. a) din Regulamentul GDPR – consimțământ voluntar și art. 6 alin. 1 lit. b) din Regulamentul GDPR – în măsura în care Datele sunt necesare pentru furnizarea serviciilor/executarea contractului);</li>
                  <li>pentru ca Administratorul să răspundă la întrebări, solicitări sau cereri ale utilizatorilor (art. 6 alin. 1 lit. a) din Regulamentul GDPR – consimțământ voluntar și art. 6 alin. 1 lit. b) din Regulamentul GDPR – în măsura în care Datele sunt necesare pentru furnizarea serviciilor/executarea contractului),</li>
                  <li>pentru îndeplinirea scopurilor legitime ale Administratorului sub forma marketingului produselor și serviciilor Administratorului (art. 6 alin. 1 lit. f) din Regulamentul GDPR – interes legitim al Administratorului);</li>
                </ol>
              </li>
              <li>În unele situații, Administratorul are dreptul de a transmite datele tale personale către alți destinatari, dacă acest lucru este necesar pentru executarea contractului încheiat cu tine sau pentru îndeplinirea obligațiilor care incumbă Administratorului. Acest lucru se aplică următoarelor grupuri de destinatari:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>companie de hosting pe bază de împuternicire</li>
                  <li>autorități publice</li>
                  <li>companii care furnizează servicii în numele Administratorului (Software house)</li>
                </ul>
              </li>
              <li>Datele tale cu caracter personal sunt procesate de Administrator nu mai mult timp decât este necesar pentru efectuarea activităților asociate cu acestea, specificate în reglementări separate.</li>
              <li>Ai dreptul de a solicita Administratorului:
                <ul className="ml-6 mt-2 list-disc list-inside">
                  <li>acces la datele cu caracter personal care te privesc,</li>
                  <li>rectificarea acestora,</li>
                  <li>ștergerea,</li>
                  <li>restricționarea procesării,</li>
                  <li>precum și portabilitatea datelor.</li>
                </ul>
              </li>
              <li>Ai dreptul de a te opune la procesarea indicată la punctul 3.3 c) în ceea ce privește procesarea datelor cu caracter personal în scopul îndeplinirii intereselor legitime realizate de Administrator, inclusiv profilarea, însă dreptul de opoziție nu va putea fi exercitat în cazul existenței unor temeiuri legitime importante pentru procesare, care prevalează asupra intereselor, drepturilor și libertăților tale, în special pentru stabilirea, exercitarea sau apărarea pretențiilor.</li>
              <li>Împotriva acțiunilor Administratorului se poate depune plângere la Președintele Autorității pentru Protecția Datelor cu Caracter Personal, ul. Stawki 2, 00-193 Varșovia.</li>
              <li>Furnizarea datelor cu caracter personal este voluntară, dar necesară pentru gestionarea Site-ului.</li>
              <li>În ceea ce te privește, pot fi întreprinse acțiuni constând în luarea automată a deciziilor, inclusiv profilarea în scopul furnizării de servicii în cadrul contractului încheiat și în scopul desfășurării de către Administrator a marketingului direct.</li>
              <li>Datele cu caracter personal nu sunt transferate către țări terțe în sensul dispozițiilor privind protecția datelor cu caracter personal. Acest lucru înseamnă că nu le trimitem în afara Uniunii Europene.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">3. Tehnici importante de marketing</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Operatorul folosește analiza statistică a traficului pe site prin Google Analytics (Google Inc. cu sediul în SUA). Operatorul nu transmite operatorului acestui serviciu date cu caracter personal, ci doar informații anonimizate. Serviciul se bazează pe utilizarea cookie-urilor în dispozitivul final al utilizatorului. Cu privire la informațiile despre preferințele utilizatorului colectate de rețeaua publicitară Google, utilizatorul poate vizualiza și edita informațiile rezultate din fișierele cookie folosind instrumentul: https://www.google.com/ads/preferences/</li>
              <li>Operatorul folosește tehnici de remarketing, permițând adaptarea mesajelor publicitare la comportamentul utilizatorului pe site, ceea ce poate crea iluzia că datele personale ale utilizatorului sunt folosite pentru urmărirea acestuia, dar în practică nu are loc transmiterea niciunei date personale de la Operator către operatorii de publicitate. Condiția tehnologică pentru astfel de acțiuni este activarea suportului pentru fișierele cookie.</li>
              <li>Operatorul folosește pixelul Facebook. Această tehnologie face ca site-ul Facebook (Facebook Inc. cu sediul în SUA) să știe că o anumită persoană înregistrată pe acesta folosește Site-ul. Se bazează în acest caz pe date pentru care el însuși este administrator, Operatorul nu transmite de la sine nicio dată personală suplimentară către site-ul Facebook. Serviciul se bazează pe utilizarea cookie-urilor în dispozitivul final al utilizatorului</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">4. Mesaje neanunțate</h2>
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Site-ul își rezervă dreptul de a trimite mesaje neanunțate către persoanele ale căror date de contact le deține și care au fost de acord cu Politica de confidențialitate. Prin mesaje neanunțate se înțelege informații care se referă direct la site-ul său și la produs.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">5. Cookies (Cookie-uri)</h2>
            <p className="text-gray-700">
              Unele zone ale site-urilor care aparțin Site-ului pot utiliza cookies, adică mici fișiere text trimise către computerul utilizatorului de internet, care îl identifică în modul necesar pentru simplificarea sau remiterea unei anumite operațiuni. Cookie-urile sunt inofensive atât pentru computer, cât și pentru utilizatorul său și datele sale. Condiția pentru funcționarea cookie-urilor este acceptarea lor de către browser și neștergerea lor de pe disc.
            </p>
          </section>
        </div>
      </main>
      
      <div className="w-full flex justify-center px-4">
        <ContactSection />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
