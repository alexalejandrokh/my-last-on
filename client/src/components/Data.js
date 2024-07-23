import pdf1 from "../assets/pdfs/4490343.pdf";
import pdf2 from "../assets/pdfs/4490344.pdf";
import pdf3 from "../assets/pdfs/4490345.pdf";
import pdf4 from "../assets/pdfs/4490346.pdf";
import pdf5 from "../assets/pdfs/4490347.pdf";
import pdf6 from "../assets/pdfs/4490348.pdf";
import pdf7 from "../assets/pdfs/4490349.pdf";
import pdf8 from "../assets/pdfs/4490310.pdf";
import pdf9 from "../assets/pdfs/4490311.pdf";
import pdf10 from "../assets/pdfs/4490312.pdf";
import pdf11 from "../assets/pdfs/4490313.pdf";
import pdf12 from "../assets/pdfs/4490314.pdf";
import pdf13 from "../assets/pdfs/4490315.pdf";
import pdf14 from "../assets/pdfs/4490316.pdf";
import pdf15 from "../assets/pdfs/4490317.pdf";
import pdf16 from "../assets/pdfs/4490318.pdf";
import pdf319 from "../assets/pdfs/4490319.pdf";
import pdf320 from "../assets/pdfs/4490320.pdf";
import pdf321 from "../assets/pdfs/4490321.pdf";
import pdf322 from "../assets/pdfs/4490322.pdf";
import pdf323 from "../assets/pdfs/4490323.pdf";
import pdf324 from "../assets/pdfs/4490324.pdf";
import pdf325 from "../assets/pdfs/4490325.pdf";
import pdf326 from "../assets/pdfs/4490326.pdf";
import pdf327 from "../assets/pdfs/4490327.pdf";
import pdf328 from "../assets/pdfs/4490328.pdf";
import pdf329 from "../assets/pdfs/4490329.pdf";
import pdf330 from "../assets/pdfs/4490330.pdf";

const Docs = [

  {
    id: 4490343,
    File: pdf1,
  },
  {
    id: 4490344,
    File: pdf2,
  },
  {
    id: 4490345,
    File: pdf3,
  },
  {
    id: 4490346,
    File: pdf4,
  },
  {
    id: 4490347,
    File: pdf5,
  },
  {
    id: 4490348,
    File: pdf6,
  },
  {
    id: 4490349,
    File: pdf7,
  },
  {
    id: 4490310,
    File: pdf8,
  },
  {
    id: 4490311,
    File: pdf9,
  },
  {
    id: 4490312,
    File: pdf10,
  },
  {
    id: 4490313,
    File: pdf11,
  },
  {
    id: 4490314,
    File: pdf12,
  },
  {
    id: 4490315,
    File: pdf13,
  },
  {
    id: 4490316,
    File: pdf14,
  },
  {
    id: 4490317,
    File: pdf15,
  },
  {
    id: 4490318,
    File: pdf16,
  },
  {
    id: 4490319,
    File: pdf319,
  },
  {
    id: 4490320,
    File: pdf320,
  },
  {
    id: 4490321,
    File: pdf321,
  },
  {
    id: 4490322,
    File: pdf322,
  },
  {
    id: 4490323,
    File: pdf323,
  },
  {
    id: 4490324,
    File: pdf324,
  },
  {
    id: 4490325,
    File: pdf325,
  },
  {
    id: 4490326,
    File: pdf326,
  },
  {
    id: 4490327,
    File: pdf327,
  },
  {
    id: 4490328,
    File: pdf328,
  },
  {
    id: 4490329,
    File: pdf329,
  },
  {
    id: 4490330,
    File: pdf330,
  },
];

const Data = [
  {
    title: "الرئيسية",
    link: "Home",
  },
  {
    title: "عن المنصة",
    link: "AboutUs",
  },
  {
    title: "أدلة الإستخدام",
    link: "whyUs",
  },
  {
    title: "الأسئلة الشائعة",
    link: "whyUs",
  },
  {
    title: "اتصل بنا",
    link: "whyUs",
  },
];

const Footer_Data = [
  {
    title: "عن المنصة",
  },
  {
    title: "الأسئلة الشائعة",
  },
  {
    title: "أدلة الإستخدام",
  },
  {
    title: "تواصل معنا",
  },
];

export { Data, Footer_Data };

export function getDocs() {
  return Docs;
}

export function getDoc(id) {
  return Docs.find((doc) => doc.id === id);
}
