import Image from "next/image";
import Link from "next/link";

export default function YoshlarParlamentiAzolari() {
  const members = [
    {
      id: 1,
      name: "Jiyenbayev Berdakh Kalbay o‘g‘li",
      region: "1-Qoraqalpog‘iston Respublikasi saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/1. Jiyenbayev Berdakh Kalbay o‘g‘li.JPG",
      fraction: "O'zlidep",
    
    },
    {
       id: 2,
      name: "Khojanova Gul'banu Jenis qizi",
      region: "2-Qoraqalpog‘iston Respublikasi saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/2. Khojanova Gul'banu Jenis qizi.JPG",
      fraction: "O'zlidep",
    },
    {
      id: 3,
      name: "Bazarbayeva Shakhnoza Sultonbayevna",
      region: "3-Qoraqalpog‘iston Respublikasi saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/3. Bazarbayeva Shakhnoza Sultonbayevna.JPG",
      fraction: "O'zlidep",
    },
    {
      id: 4,
      name: "Radjapov Babur Gulamjanovich",
      region: "4-Qoraqalpog‘iston Respublikasi saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/4. Radjapov Babur Gulamjanovich.jpg",
      fraction: "O'zlidep",
    },
    {
      id: 5,
      name: "Nurullo Rasulov Ilxomjon o‘g‘li",
      region: "5-Andijon viloyati saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/5.Nurullo Rasulov Ilxomjon o‘g‘li.jpg",
      fraction: "O'zlidep",
    },
    {
      id: 6,
      name: "Vohidov Shohjahon Abduvosi o‘g‘li",
      region: "6-Andijon viloyati saylov okrugi",
      fraction: "O'zlidep",
    },
    {
      id: 7,
      name: "Abdullayev Jaxongir Qaxramonjon",
      region: "7-Andijon viloyati saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/7.Abdullayev Jaxongir Qaxramonjon.jpg",
      fraction: "O'zlidep",
    },
    {
      id: 8,
      name: "Maxammadaliyev Asadbek Mamarasul o‘g‘li",
      region: "8-Andijon viloyati saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/8.Maxammadaliyev Asadbek Mamarasul o‘g‘li.jpg",
      fraction: "O'zlidep",
    },
    {
      id: 9,
      name: "Mamirjonova Safinozi Xursandbek qizi",
      region: "9-Andijon viloyati saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/9.Mamirjonova Safinozi Xursandbek qizi.jpg",
      fraction: "O'zlidep",
    },
    {
      id: 10,
      name: "Abdurahmonov Asadbek Oybek o‘g‘li",
      region: "10-Andijon viloyati saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/10. AbdurahmonovAsadbek Oybek o‘g‘li.JPG",
      fraction: "O'zlidep",
    },
    {
      id: 11,
      name: "Azizova Visola Behzod qizi",
      region: "11-Andijon viloyati saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/11.Azizova visola.jpg",
      fraction: "O'zlidep",
    },
    {
      id: 12,
      name: "Karimov Bexruz Baxtiyorovich",
      region: "12-Buxoro viloyati saylov okrugi",
      image: "/images/yoshlar parlamenti azolari rasmi/1/12. Karimov Bexruz Baxtiyorovich.jpg",
      fraction: "O'zlidep",
    },
    {
  id: 13,
  name: "Bobojonov Sayidjon",
  region: "13-Buxoro viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/13.Bobojonov Sayidjon.jpg",
  fraction: "Eco"
},
{
  id: 14,
  name: "Fayziyeva Fotima Toxir qizi",
  region: "14-Buxoro viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/14.Fayziyeva Fotima Toxir qizi.JPG",
  fraction: "Eco"
},
{
  id: 15,
  name: "Zarifova Sagina Siddik qizi",
  region: "15-Buxoro viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/15.Zarifova Sagina Siddik qizi.jpg",
  fraction: "Eco"
},
{
  id: 16,
  name: "Orzikulova Sevinch Jaloliddin qizi",
  region: "16-Jizzax viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/16.Orzikulova Sevinch Jaloliddin qizi.JPG",
  fraction: "Eco"
},
{
  id: 17,
  name: "Xakimova Sarvinoz Nodir qizi",
  region: "17-Jizzax viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/17.Xakimova Sarvinoz Nodir qizi.jpg",
  fraction: "Eco"
},
{
  id: 18,
  name: "Turg‘unova Dilfuza G‘ulom qizi",
  region: "18-Jizzax viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/18.Turg‘unova Dilfuza G‘ulom qizi.jpg",
  fraction: "Eco"
},
{
  id: 19,
  name: "Sanakulov O‘ktoy Muzrob o‘g‘li",
  region: "19-Navoiy viloyati",
  image: "/images/yoshlar parlamenti azolari rasmi/1/19. Sanakulov O‘ktoy Muzrob o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 20,
  name: "Bozorov Jasur Adizqulovich",
  region: "20-Navoiy viloyati",
  image: "",
  fraction: "Eco"
},
{
  id: 21,
  name: "Erejepbayev Kuanishbek Tursunovich",
  region: "21-Navoiy viloyati",
  image: "/images/yoshlar parlamenti azolari rasmi/1/21. Erejepbayev Kuanishbek Tursunovich.JPG",
  fraction: "Eco"
},
{
  id: 22,
  name: "Solijonov Uchqunbek Sadriddinovich",
  region: "22-Namangan viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/22. Solijonov Uchqunbek Sadriddinovich.JPG",
  fraction: "Eco"
},
{
  id: 23,
  name: "Ashuraliev Ikromjon Sadirddin o‘g‘li",
  region: "23-Namangan viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/23. Ashuraliev Ikromjon Sadirddin o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 24,
  name: "Sobitov Mirshod Isoqjon o‘g‘li",
  region: "24-Namangan viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/24. Sobitov Mirshod Isoqjon o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 25,
  name: "No‘monjonov Bunyod Baxtiyor o‘g‘li",
  region: "25-Namangan viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/25. No‘monjonov Bunyod Baxtiyor o‘g‘li.jpeg",
  fraction: "Eco"
},
{
  id: 26,
  name: "Urunov Asadbek Davlatali o‘g‘li",
  region: "26-Namangan viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/26. Urunov Asadbek Davlatali o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 27,
  name: "Xolmirzayeva Odina Sherzod qizi",
  region: "27-Namangan viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/27. Xolmirzayeva Odina Sherzod qizi.jpg",
  fraction: "Eco"
},
{
  id: 28,
  name: "Amrullayev Azizbek Oybekovich",
  region: "28-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/28. Amrullayev Azizbek Oybekovich.JPEG",
  fraction: "Eco"
},
{
  id: 29,
  name: "Jumayeva Sevara Samandar qizi",
  region: "29-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/29. Jumayeva Sevara Samandar qizi.JPG",
  fraction: "Eco"
},
{
  id: 30,
  name: "Ochilov Islombek Bahriddin o‘g‘li",
  region: "30-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/30. Ochilov Islombek Bahriddin o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 31,
  name: "Hasanov Khurshedjon Zafarjonovich",
  region: "31-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/31. Hasanov Khurshedjon Zafarjonovich.jpg",
  fraction: "Eco"
},
{
  id: 32,
  name: "Orifjonov Dalerjon Rustamovich",
  region: "32-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/32. Orifjonov Dalerjon Rustamovich.JPG",
  fraction: "Eco"
},
{
  id: 33,
  name: "Mardonov Muhammad Sanjar o‘g‘li",
  region: "33-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/33. Mardonov Muhammad Sanjar o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 34,
  name: "Suyarov Komiljon Sattarovich",
  region: "34-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/34. Komiljon Suyarov.JPG",
  fraction: "Eco"
},
{
  id: 35,
  name: "Muradillaeva Sevinch Sohibjon qizi",
  region: "35-Samarqand viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/35. Muradillaeva Sevinch Sohibjon qizi.JPG",
  fraction: "Eco"
},
{
  id: 36,
  name: "Irisqulova Kamola Normat qizi",
  region: "36-Sirdaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/36. Irisqulova Kamola Normat qizi.JPG",
  fraction: "Eco"
},
{
  id: 37,
  name: "Asatullayev Otabek Khayrulla o‘g‘li",
  region: "37-Sirdaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/37. Asatulayev Otabek.JPG",
  fraction: "Eco"
},
{
  id: 38,
  name: "Shavkat Abdug‘afforov Komilovich",
  region: "38-Surxondaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/38. Shavkat Abdug‘afforov Komilovich.JPG",
  fraction: "Eco"
},
{
  id: 39,
  name: "Abdurazzoqova Ruxshona Ilhomjon qizi",
  region: "39-Surxondaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/39. Abdurazzoqova Ruxshona Ilhomjon qizi.png",
  fraction: "Eco"
},
{
  id: 40,
  name: "Ashurova Maftuna Ortik qizi",
  region: "40-Surxondaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/40. Ashurova Maftuna Ortik qizi.jpg",
  fraction: "Eco"
},
{
  id: 41,
  name: "Zulqaynarov Sarvar Alisherovich",
  region: "41-Surxondaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/41. Zulqaynarov Sarvar Alisherovich.jpg",
  fraction: "Eco"
},
{
  id: 42,
  name: "Mamadiyev Islom Mamatmusa o‘g‘li",
  region: "42-Surxondaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/42. Mamadiyev Islom Mamatmusa o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 43,
  name: "Nurullaeva Laylo Khayrullo qizi",
  region: "43-Surxondaryo viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/43. Nurullaeva Laylo Khayrullo qizi.JPG",
  fraction: "Eco"
},
{
  id: 44,
  name: "Asrorov Zafar Husniddin o‘g‘li",
  region: "44-Toshkent viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/44. Asrorov Zafar Husniddin o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 45,
  name: "Maxambatqulova Sabrina Abulqosim qizi",
  region: "45-Toshkent viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/45. Maxambatqulova Sabrina Abulqosim qizi.jpg",
  fraction: "Eco"
},
{
  id: 46,
  name: "Abduqahhorov Bekzod O‘tkir o‘g‘li",
  region: "46-Toshkent viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/46. Abduqahhorov Bekzod O‘tkir o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 47,
  name: "Abdumajitov Muslim Mirmaqsud o‘g‘li",
  region: "47-Toshkent viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/47. Abdumajitov Muslim Mirmaqsud o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 48,
  name: "Sobirov Umarjon Umid o‘g‘li",
  region: "48-Toshkent viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/48. Sobirov Umarjon Umid o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 49,
  name: "Abdulhaev Javohir Tahirovich.jpg",
  region: "49-Toshkent viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/49. Abdulhaev Javohir Tahirovich.jpg",
  fraction: "Eco"
},
{
  id: 50,
  name: "Arabxonova Munisaxon Hojiakbarxon qizi",
  region: "50-Toshkent viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/50. Arabxonova Munisaxon Hojiakbarxon qizi.JPG",
  fraction: "Eco"
},
{
  id: 51,
  name: "Rahimov Islomjon Shavkatjon o‘g‘li",
  region: "51-Farg‘ona viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/51. Rahimov Islomjon Shavkatjon o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 52,
  name: "Toshmatov Dilmurod Fazliddin o‘g‘li",
  region: "52-Farg‘ona viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/52. Toshmatov Dilmurod Fazliddin o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 53,
  name: "Qodirova Sevaraxon Zoyirjon qizi",
  region: "53-Farg‘ona viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/53. Qodirova Sevaraxon Zoyirjon qizi.JPG",
  fraction: "Eco"
},
{
  id: 54,
  name: "O‘ktamov Shohruh Ulug‘bek o‘g‘li",
  region: "54-Farg‘ona viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/54. O‘ktamov Shohruh Ulug‘bek o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 55,
  name: "Dilmurodov Dilmurod Dilshodjon o‘g‘li",
  region: "55-Farg‘ona viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/55. Dilmurodov Dilmurod.JPG",
  fraction: "Eco"
},
{
  id: 56,
  name: "Sirojiddinov Ayubxon Akmaljon o‘g‘li",
  region: "56-Farg‘ona viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/56. Sirojiddinov Ayubxon Akmaljon o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 57,
  name: "Abdulaziz Abdurazzoqov Akbarjon o‘g‘li",
  region: "57-Farg‘ona viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/57. Abdulaziz Abdurazzoqov Akbarjon o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 58,
  name: "Butahonov Ziyodulla Zoyirjon o‘g‘li",
  region: "58-Farg‘ona viloyati saylov okrugi",
  image: "",
  fraction: "Eco"
},
{
  id: 59,
  name: "Yarasheva Aziza Alisher qizi",
  region: "59-Xorazm viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/59. Yarasheva Aziza Alisher qizi.JPG",
  fraction: "Eco"
},
{
  id: 60,
  name: "Bazarbayev Sardor Urinboevich",
  region: "60-Xorazm viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/60. Sardor Bazarbayev.jpg",
  fraction: "Eco"
},
{
  id: 61,
  name: "Sharifboev Bunyod Azamat o‘g‘li",
  region: "61-Xorazm viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/61. Erkinboyev Muhammadaziz Xurramovich.jpg",
  fraction: "Eco"
},
{
  id: 62,
  name: "Nurullayev Nuriddin Farhod o‘g‘li",
  region: "62-Xorazm viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/62. Atajanov Izzatilla Baxronovich.jpg",
  fraction: "Eco"
},
{
  id: 63,
  name: "Jo‘raqulova Marjona Sadriddin qizi",
  region: "63-Xorazm viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/63. Qodirov Ziyodulla Turob o‘g‘li.JPG",
  fraction: "Eco"
},
{
  id: 64,
  name: "Ahmadov Alisher Toshmurod o‘g‘li",
  region: "64-Toshkent shahar saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/64. Jo‘rayev Sherzod Murodovich.jpg",
  fraction: "Eco"
},
{
  id: 65,
  name: "Oqmatov Serobbek Olimovich",
  region: "65-Toshkent shahar saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/65. Xudoyberganov Muhammadaziz Xusniddin o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 66,
  name: "Ismoilov Bobur Ikromxon o‘g‘li",
  region: "66-Toshkent shahar saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/66. Asadullayev Abdulaziz Oybek o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 67,
  name: "Shomurodov Shohjahon Shuxrat o‘g‘li",
  region: "67-Toshkent shahar saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/67. Yoqubov Behzodbek Bekzod o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 68,
  name: "Mirzayorova Asila Ubaydulla qizi",
  region: "68-Toshkent shahar saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/68. Norboyeva Mushtariy Muzaffar qizi.jpg",
  fraction: "Eco"
},
{
  id: 69,
  name: "Nasimova Yulduzxon Baxriddin qizi",
  region: "69-Toshkent shahar saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/69. G‘aybullayev Shaxbozbek Baxtiyor o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 70,
  name: "Ubaydullaeva Ismigul Shavkatillaevna",
  region: "70-Toshkent shahar saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/70. Komilova Muhlisa Ulug‘bek qizi.jpg",
  fraction: "Eco"
},
{
  id: 71,
  name: "Kim Ernest Vitalevich",
  region: "71-Qoraqalpog‘iston Respublikasi saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/71. Qutlimuratov Biloliddin Botir o‘g‘li.jpg",
  fraction: "Eco"
},
{
  id: 72,
  name: "Tog‘aymurodova Fotimaxon Shuxrat qizi",
  region: "72-Qoraqalpog‘iston Respublikasi saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/72. Imamova Iroda Ikromovna.jpg",
  fraction: "Eco"
},
{
  id: 73,
  name: "Solijonov Sarvar Akmaljon o‘g‘li",
  region: "73-Qoraqalpog‘iston Respublikasi saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/73. Qo‘shqarova Surayyo Baxadirovna.jpg",
  fraction: "Eco"
},
{
  id: 74,
  name: "Mahmudjonov Elyorjon Azizjon o‘g‘li",
  region: "74-Xorazm viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/74. Bazarbayev Sardor Urinboevich.jpg",
  fraction: "Eco"
},
{
  id: 75,
  name: "Shoumarov Imronbek Dilshod o‘g‘li",
  region: "75-Xorazm viloyati saylov okrugi",
  image: "/images/yoshlar parlamenti azolari rasmi/1/75. Xo‘janov Sarvarbek Abrorbek o‘g‘li.jpg",
  fraction: "Eco"
},





  ];

  const regions = [
    "Barcha hududlar",
    "Toshkent shahri",
    "Toshkent viloyati",
    "Samarqand viloyati",
    "Andijon viloyati",
    "Buxoro viloyati",
    "Farg'ona viloyati",
    "Namangan viloyati",
    "Xorazm viloyati",
    "Qashqadaryo viloyati",
    "Surxondaryo viloyati",
    "Navoiy viloyati",
    "Jizzax viloyati",
    "Sirdaryo viloyati",
    "Qoraqalpog'iston Respublikasi",
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Page Header */}
      <section className="bg-[#0047AB] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">
            Yoshlar parlamenti a'zolari
          </h1>
          <p className="text-lg max-w-3xl">
            O'zbekiston Respublikasi Yoshlar parlamenti a'zolari haqida ma'lumot
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">A'zolar ro'yxati</h2>
            <div className="relative">
              <select className="bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Link
                key={member.id}
                href={`/yoshlar-parlamenti-azolari/${member.id}`}
                className="bg-white flex rounded-lg shadow-sm overflow-hidden h-48 hover:shadow-md transition"
              >
                <div className="relative w-40">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <div className="flex flex-col text-sm">
                    <p className="font-semibold">Saylov okrugi</p>
                    <p className="text-blue-600">{member.region}</p>
                  </div>
                  <div className="flex flex-col text-sm">
                    <p className="font-semibold">Fraksiyaga a'zoligi</p>
                    <p className="text-blue-600">{member.fraction}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
