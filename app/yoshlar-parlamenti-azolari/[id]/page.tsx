import MemberInfo from "@/components/page-components/MemberInfo";
import Sidebar from "@/components/page-components/RightSidebar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const leaders = [
  {
  id: "1",
  name: "Jienbaev Berdax Kalbay o‘g‘li",
  position: "O'zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi deputati yordamchisi, mahalliy kengashlar deputatlari va partiya guruhlari bilan ishlash bo‘yicha bosh mutaxassis",
  birthYear: "1996",
  birthPlace: "Nukus shahri",
  nationality: "qoraqalpoq",
  education: "oliy ma'lumotli",
  university: "Qoraqalpoq davlat universiteti (2020), Qoraqalpoq davlat universiteti magistraturasi (2022)",
  specialization: "huquqshunos",
  degree: "yo‘q",
  languages: "rus tili, ingliz tili",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/1. Jiyenbayev Berdakh Kalbay o‘g‘li.JPG",
  articles: []
},

  
    {
  id: "2",
  name: "Hojanova Gulbanu Jengis qizi",
  position: "Biznesni rivojlantirish banki Qoraqalpog‘iston Respublikasi boshqarmasi xodimi",
  birthYear: "2000",
  birthPlace: "Qoraqalpog‘iston Respublikasi, Kegeyli tumani",
  nationality: "qoraqalpoq",
  education: "tugallangan oliy",
  university: "Qoraqalpoq davlat universiteti (2022)",
  specialization: "biologiya",
  degree: "yo‘q",
  languages: "rus tili, ingliz tili",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/2. Khojanova Gul'banu Jenis qizi.JPG",
  articles: []
},

  
  {
  id: "3",
  name: "Bazarbayeva Shakhnoza Sultonbaevna",
  position: "O‘zbekiston davlat san’at va madaniyat instituti Nukus filiali 4-kurs talabasi (sirtqi ta’lim)",
  birthYear: "2003",
  birthPlace: "Qoraqalpog‘iston Respublikasi, Nukus shahri",
  nationality: "qoraqalpoq",
  education: "tugallanmagan oliy",
  university: "O‘zbekiston davlat san’at va madaniyat instituti, Nukus filiali",
  specialization: "dramaturg",
  degree: "yo‘q",
  languages: "rus tili, ingliz tili",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/3. Bazarbayeva Shakhnoza Sultonbayevna.JPG",
  articles: []
},

  {
  id: "4",
  name: "Radjapov Babur Gulamjanovich",
  position: "Swiss International Institute Lausanne talabasi (Shveytsariya)",
  birthYear: "1997",
  birthPlace: "Qoraqalpog‘iston Respublikasi, Nukus shahri",
  nationality: "o‘zbek",
  education: "o‘rta-maxsus va oliy tugallanmagan",
  university: "2016 y. Nukus axborot va kommunikatsiya texnologiyalari kolleji",
  specialization: "IKT-elektronika (kollej), Proekt menejmenti (oliy)",
  degree: "yo‘q",
  languages: "ingliz tili, rus tili",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/4. Radjapov Babur Gulamjanovich.jpg",
  articles: []
},

  {
  id: "5",
  name: "Rasulov Nurullo Ilhomjon o‘g‘li",
  position: "“Renessans” telekanalida “Ovoza” informatsion dasturi muxbiri",
  birthYear: "2002",
  birthPlace: "Andijon viloyati, Andijon shahri",
  nationality: "o‘zbek",
  education: "oliy",
  university: "2024 y. Toshkent shahridagi Britaniya menejment universiteti; 2024 y. Qirolicha Margaret universiteti",
  specialization: "Loyihalar boshqaruvi (BBA Project Management)",
  degree: "yo‘q",
  languages: "rus, ingliz tillari",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/5.Nurullo Rasulov Ilxomjon o‘g‘li.jpg",
  articles: []
  },

  
    {
  id: "6",
  name: "Vohidov Shohjahon Abduvosi o‘g‘li",
  position: "",
  birthYear: "2000",
  birthPlace: "Andijon viloyati",
  nationality: "o‘zbek",
  education: "oliy",
  university: "2023-y. Toshkent davlat yuridik universiteti",
  specialization: "Yurist",
  degree: "yo‘q",
  languages: "rus, ingliz tillari",
  militaryRank: "3-darajali yurist",
  email: "",
  image: "",
  articles: []
},

  {
  id: "7",
  name: "Abdullayev Jahongir Qahramonjon o‘g‘li",
  position: "Andijon tumani 'Gumbaz' MFY yoshlar yetakchisi (2022 yil 21 yanvardan)",
  birthYear: "2002",
  birthPlace: "Andijon viloyati, Andijon tumani",
  nationality: "o‘zbek",
  education: "tugallanmagan oliy",
  university: "O‘sh davlat universiteti, 5-kurs (sirtqi)",
  specialization: "Telestudiya va telejurnalistika, teleboshlovchi",
  degree: "yo‘q",
  languages: "ingliz tili",
  militaryRank: "yo‘q",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/7.Abdullayev Jaxongir Qaxramonjon.jpg",
  articles: []
},
{
  id: "8",
  name: "Maxammadaliyev Asadbek Mamarasul o‘g‘li",
  position: "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi devoni Matbuot xizmati OAV bilan ishlashni muvofiqlashtirish guruhi birinchi toifali mutaxassisi (2025 yil 16 yanvardan)",
  birthYear: "2002",
  birthPlace: "Andijon viloyati, Shahrixon tumani",
  nationality: "o‘zbek",
  education: "oliy",
  university: "Toshkentdagi xalqaro Webster universiteti (bakalavr)",
  specialization: "xalqaro munosabatlar",
  degree: "yo‘q",
  languages: "rus va ingliz (mukammal)",
  militaryRank: "yo‘q",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/8.Maxammadaliyev Asadbek Mamarasul o‘g‘li.jpg",
  articles: []
},
{
  id: "9",
  name: "Mamirjonova Safinozi Khursandbek qizi",
  position: "O‘zbekiston Sharda universiteti talabasi (2021 yildan)",
  birthYear: "2004",
  birthPlace: "Andijon viloyati",
  nationality: "o‘zbek",
  education: "tugallanmagan oliy",
  university: "O‘zbekiston Sharda universiteti",
  specialization: "Amaliy ingliz tili fakulteti, tarjimonlik",
  degree: "yo‘q",
  languages: "rus, ingliz tillari",
  militaryRank: "yo‘q",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/9.Mamirjonova Safinozi Xursandbek qizi.jpg",
  articles: []
},
{
  id: "10",
  name: "Abdurahmonov Asadbek Oybek o‘g‘li",
  position: "O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasi Devoni Korruptsiyaga qarshi kurashish va sud-huquq masalalari qo‘mitasi kotibiyatining referenti (2025 yil 17 yanvardan)",
  birthYear: "2000",
  birthPlace: "Andijon viloyati, Marhamat tumani",
  nationality: "o‘zbek",
  education: "oliy",
  university: "Toshkent davlat yuridik universiteti, 2024 (bakalavr)",
  specialization: "yurisprudentsiya",
  degree: "yo‘q",
  languages: "rus va ingliz tillari",
  militaryRank: "yo‘q",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/10. AbdurahmonovAsadbek Oybek o‘g‘li.JPG",
  articles: []
},
{
  id: "11",
  name: "Azizova Visola Behzod qizi",
  position: "O‘zbekiston Milliy universiteti talabasi (2023 yil 2 sentabrdan)",
  birthYear: "2004",
  birthPlace: "Andijon viloyati, Andijon shahri",
  nationality: "o‘zbek",
  education: "tugallanmagan oliy",
  university: "O‘zbekiston Milliy universiteti, 2021",
  specialization: "xorijiy til va adabiyot",
  degree: "yo‘q",
  languages: "rus, ingliz tillari",
  militaryRank: "yo‘q",
  awards: "2021 yil — “Kelajak bunyodkori” medali",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/11.Azizova visola.jpg",
  articles: []
},
{
  id: "12",
  name: "Karimov Behruz Baxtiyorovich",
  position: "Toshkent davlat yuridik universiteti 2-kurs talabasi (2022 yil 5 sentabrdan)",
  birthYear: "2005",
  birthPlace: "Buxoro shahri",
  nationality: "o‘zbek",
  education: "o‘rta",
  university: "2022 y., Buxoro shahri 2-maktab",
  specialization: "huquqshunos",
  degree: "yo‘q",
  languages: "rus, ingliz tillari",
  militaryRank: "yo‘q",
  awards: "yo‘q",
  email: "",
  image: "/images/yoshlar parlamenti azolari rasmi/1/12. Karimov Bexruz Baxtiyorovich.jpg",
  articles: []
},






];

const MemberDetail = ({ params }: PageProps) => {
  const member = leaders.find((leader) => leader.id === params.id);
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/yoshlar-parlamenti-azolari"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Ortga qaytish
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {member ? (
            <MemberInfo member={member} />
          ) : (
            <div className="text-lg">A'zo topilmadi.</div>
          )}
          <Sidebar />
        </div>
      </div>
    </main>
  );
};

export default MemberDetail;
