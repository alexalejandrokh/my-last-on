import pdf7 from "../assets/pdfs/4490349.pdf";


const Docs = [

  {
    id: 4490349,
    File: pdf7,
  }
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
