import React from 'react';
import statsImage from '@/assets/loading.png';
import searchVehicleImage from '@/assets/find-free.png';
import statisticsImage from '@/assets/ai.png';
import aiFeatureImage from '@/assets/stats.png';
import dotIcon from '@/assets/dot.svg';
interface FeatureItemProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  reversed?: boolean;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  features,
  imageSrc,
  reversed = false
}) => {
  return <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 mb-0`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className="flex items-center justify-center px-8 lg:px-20 py-16 lg:py-[66px] h-full min-h-[300px] lg:min-h-[400px]">
          <img src={imageSrc} alt={title} className="w-[400px] h-[400px] object-contain rounded-lg" />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className={`flex flex-col justify-center h-full min-h-[300px] lg:min-h-[400px] px-6 lg:px-12 xl:px-20 py-16 lg:py-[110px] ${reversed ? 'lg:pr-6 xl:pr-12' : 'lg:pl-6 xl:pl-12'}`}>
          <h3 className="text-czarny text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-6 leading-normal">
            {title}
          </h3>
          <p className="text-czarny text-lg font-roboto-condensed font-normal leading-6 mb-6">
            {description}
          </p>
          <div className="space-y-4 mb-6">
            {features.map((feature, index) => <div key={index} className="flex items-start gap-3 text-czarny text-lg font-roboto-condensed font-normal leading-6">
                <img src={dotIcon} alt="" className="w-[19px] h-[21px] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>)}
          </div>
          
        </div>
      </div>
    </div>;
};
const FeaturesContainer = () => {
  const features = [{
    title: "Publicarea încărcăturilor spot pentru vânzare",
    description: "În CARGOseller adaugi încărcătura o singură dată și indici ce unelte și canale de vânzare activezi.",
    features: ["trimitere pe până la 3 burse de transport - publici încărcături pe bursele unde ai cont", "Mailing 4.0 - generare automată de email cu lista de încărcături către grupuri selectate de subcontractanți de încredere"],
    imageSrc: statsImage
  }, {
    title: "Căutare automată de vehicul liber",
    description: "Integrarea CARGOseller cu TIMOCOM permite căutarea automată a vehiculelor libere într-o rază de 100km de la locul de încărcare al încărcăturii adăugate în CARGOseller.",
    features: ["de acum nu mai cauți vehicule libere manual, algoritmul face asta pentru tine", "rezultatele găsite sunt afișate în coloana „Propuneri\" împreună cu propuneri de preț din alte sisteme"],
    imageSrc: searchVehicleImage
  }, {
    title: "AI - mai rapid, mai mult, mai eficient",
    description: "Lipește TEXT-ul cererii, iar sistemul folosind AI va crea oferte gata. Adaugă IMAGINE pe care sunt oferte, iar sistemul va crea de asemenea oferte gata mai rapid decât omul.",
    features: ["Lucrul cu AI este o modalitate de îmbunătățire a eficienței și rezultatelor financiare pentru că câștigi timp", "Confort în muncă - nu mai transcrii ofertele manual"],
    imageSrc: statisticsImage
  }, {
    title: "Statistici",
    description: "Dispersarea volumului de încărcături spot pentru vânzare pe emailurile multor angajați face imposibilă efectuarea analizelor. Agregarea tuturor încărcăturilor spot pentru vânzare în sistemul CARGOseller permite furnizarea de statistici complete.",
    features: ["statistici în perspective temporale", "numărul de încărcături introduse, vândute"],
    imageSrc: aiFeatureImage
  }];
  return <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-16">
      

      <div className="space-y-0">
        {features.map((feature, index) => <FeatureItem key={index} title={feature.title} description={feature.description} features={feature.features} imageSrc={feature.imageSrc} reversed={index % 2 !== 0} />)}
      </div>
    </section>;
};
export default FeaturesContainer;