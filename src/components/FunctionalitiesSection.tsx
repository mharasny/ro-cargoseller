import React, { useState } from 'react';
import addLoadingImg from '@/assets/add-loading.png';
import getPropositionImg from '@/assets/get-proposition.jpg';
import loadingListImg from '@/assets/loading-list.png';
import refreshDeleteImg from '@/assets/refresh-delete.png';
import automailingImg from '@/assets/automailing.jpg';
import myloadingsImg from '@/assets/myloadings.png';
import integrationsImg from '@/assets/integrations.jpg';
import statisticsImg from '@/assets/new-statistics.png';

const FunctionalitiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Adăugare încărcătură",
    "Colectare propuneri de preț",
    "Lista încărcăturilor",
    "Reîmprospătare și ștergere încărcături",
    "Mailing automat listă încărcături",
    "Încărcături în compania mea",
    "Integrări",
    "Statistici"
  ];

  const tabImages = [
    addLoadingImg,
    getPropositionImg,
    loadingListImg,
    refreshDeleteImg,
    automailingImg,
    myloadingsImg,
    integrationsImg,
    statisticsImg
  ];

  const tabDescriptions = [
    "Adaugă încărcătura mai rapid datorită opțiunilor de selecție rapidă, arhivă sau șabloane, publică chiar și pe 3 burse, activează reîmprospătarea automată a ofertelor și căutarea de vehicule pe TIMOCOM, opțional trimite mailing cu lista ta de încărcături către transportatorii tăi de încredere - totul într-o singură fereastră.",
    "Sistemul preia propuneri de preț de la bursa TIMOCOM și din canalul de mailing de la transportatorii tăi de încredere, în plus preia din TIMOCOM oferte de vehicule libere într-o rază de 100km de la locul de încărcare.",
    "Fereastra principală cu lista încărcăturilor îți va economisi 50-70% din timp. De aici poți șterge, reîmprospăta, adăuga, edita oferte, vizualiza propuneri de preț și propuneri de vehicule libere, finaliza tranzacții cu efect pe 3 burse.",
    "Reîmprospătarea ciclică a încărcăturii este o practică foarte frecventă la expeditori care facilitează vânzarea. La noi procesul de reîmprospătare se realizează automat la fiecare 35 min. Opțional poți reîmprospăta manual. Similar se întâmplă cu ștergerea ofertelor - ștergi multe oferte sau oferte individuale cu efect pe burse.",
    "Practică comună, adică trimiterea de email cu lista de încărcături către transportatorii tăi de încredere. În prezent activitate separată de realizat pe lângă introducerea pe burse. Integratorul nostru face ca această activitate să o realizezi cu ocazia publicării pe burse economisind timp și făcând-o confortabil ca niciodată. Sistemul va genera automat email personalizat cu lista de încărcături.",
    "Verifică ușor ce este în compania ta (în toate sucursalele) expus în prezent pentru vânzare și prin ce canale de vânzare. Poți contacta ușor colaboratorul în legătură cu încărcătura și susține colegii expunând încărcătura ca fiind a ta fără să o rescrii.",
    "Integrarea contului tău de utilizator cu bursele îți va lua mai puțin de 3 minute și ești gata să optimizezi procesul de lucru și să obții rezultate mai bune în vânzări. Poți integra și sistemul tău TMS cu sistemul nostru - este o integrare simplă și rapidă în loc de integrări complexe, separate cu fiecare bursă. Vom deveni pentru tine HUB de integrare - o abordare modernă în lumea soluțiilor digitale, care accelerează integrările și reduce foarte mult costul acestora.",
    "Analizează statisticile care arată care a fost volumul total de încărcături care au fost adăugate pentru vânzare. Află câte încărcături nevândute sunt și optimizează acest domeniu. Compară luni, ani, vizualizează date despre marjă și venit pe sucursale, întreaga companie."
  ];

  return (
    <section id="funkcjonalnosci" className="w-full max-w-[1520px] mt-[131px] max-md:max-w-full max-md:mt-10 scroll-mt-24">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Funcționalități
      </h2>
      <div className="flex w-full flex-col items-stretch text-lg text-[#4E4D4D] font-normal mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-stretch gap-[40px_60px] flex-wrap rounded-2xl max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex w-full items-center gap-3 leading-none flex-wrap max-md:max-w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex px-6 py-2 justify-center items-center gap-2.5 rounded-3xl transition-colors hover:bg-[#5aa085] hover:text-white ${
                    activeTab === index
                      ? 'text-white bg-[#66BC98]'
                      : 'bg-white text-[#4E4D4D]'
                  }`}
                >
                  <div className="flex justify-center items-center">
                    {tab}
                  </div>
                
                </button>
              ))}
            </div>
            <div className="text-czarny font-roboto-condensed text-lg font-normal leading-6 mt-6 max-md:max-w-full">
              {tabDescriptions[activeTab]}
            </div>
          </div>
          <img
            src={tabImages[activeTab]}
            alt={`Screenshot for ${tabs[activeTab]}`}
            className="aspect-[1.8] object-contain w-[897px] shadow-[0px_0px_12px_rgba(0,0,0,0.25)] min-w-60 my-auto rounded-lg max-md:max-w-full"
          />
        </div>
        <div className="self-center flex min-h-[17px] gap-4 mt-10" />
      </div>
    </section>
  );
};

export default FunctionalitiesSection;
