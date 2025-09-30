import React from 'react';
import carIcon from '@/assets/car-icon.svg';
import carIconNew from '@/assets/car-icon-new.svg';
import timeIconNew from '@/assets/time-icon-new.svg';
import costIcon from '@/assets/cost-icon.svg';
import clickIcon from '@/assets/click-icon.svg';
import implementationIcon from '@/assets/implementation-icon.svg';
import publishIcon from '@/assets/publish-icon.svg';
import findIcon from '@/assets/find-icon.svg';
import priceIcon from '@/assets/price-icon.svg';

interface StatCardProps {
  icon: string | any;
  title: string;
  description: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`flex p-8 flex-col items-center gap-4 flex-1 self-stretch rounded-2xl bg-white ${className}`}>
      <div className="bg-white self-center flex min-h-[88px] w-20 items-center gap-2.5 px-[22px] py-[26px] max-md:px-5 relative">
        <img
          src={icon}
          alt=""
          className="w-20 h-[87.66px] absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="text-zielony text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mt-4">
        {title}
      </div>
      <div className="text-czarny text-center text-lg font-roboto-condensed font-normal leading-6 mt-4">
        {description}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: carIconNew,
      title: "3 burse",
      description: "Adaugă oferta o singură dată, iar noi o vom publica pe bursele Trans, TIMOCOM, Teleroute"
    },
    {
      icon: timeIconNew,
      title: "70%",
      description: "Cu atât vom reduce timpul dedicat gestionării ofertelor pe burse"
    },
    {
      icon: costIcon,
      title: "12k EUR",
      description: "Acesta este costul de muncă pentru introducerea a 67 000 de oferte pe mai multe burse, vom reduce acest cost cu min. 50%"
    },
    {
      icon: clickIcon,
      title: "1 x",
      description: "Click o dată pentru a reîmprospăta sau șterge multe oferte pe 3 burse deodată"
    },
    {
      icon: implementationIcon,
      title: "30 min.",
      description: "Doar atât va dura implementarea noii unelte în companie/echipă."
    },
    {
      icon: publishIcon,
      title: "< 1 min.",
      description: "Vei publica oferta pe 3 burse + vei trimite mailing cu lista de încărcături"
    },
    {
      icon: findIcon,
      title: "0 min.",
      description: "Nu vei dedica niciun minut pentru căutarea de vehicule libere, iar vei vedea rezultatele din 2 burse"
    },
    {
      icon: priceIcon,
      title: "~ 7 EUR",
      description: "Aceasta este taxa lunară medie pentru contul de utilizator în CARGOseller"
    }
  ];

  return (
    <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#4D4D4D] text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] uppercase max-md:max-w-full">
        <span style={{fontSize: '38px', lineHeight: '46px', letterSpacing: '1.14px', textTransform: 'uppercase', fontWeight: '600'}}>
          cargo
        </span>
        <span style={{color: '#66BC98', fontSize: '42px', fontWeight: '600', letterSpacing: '1.26px', textTransform: 'lowercase'}}>seller</span>
        <span style={{color: '#4D4D4D', fontSize: '42px', fontWeight: '600', letterSpacing: '1.26px', textTransform: 'lowercase'}}> în cifre</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-md:mt-10">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
