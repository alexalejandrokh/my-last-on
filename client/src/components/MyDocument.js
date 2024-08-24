import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  Note,
} from "@react-pdf/renderer";
import leftItem from "../assets/images/logo.png";
import rightItem from "../assets/images/jcciNavbarLogo.png";
import stamp from "../assets/images/stamp.png";
import myFont from "../assets/images/NotoKufiArabic.ttf";
import { Data_For_Test } from "./TempraryData";

Font.register({
  family: "Noto Kufi Arabic",
  format: "truetype",
  src: myFont,
});

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingBottom: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  },

  grayDIV_Top: {
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F6F7FA",
    height: 100,
    width: "100%",
  },
  grayDIV_Bottow: {
    position: "absolute",
    bottom: 10,
    padding: 10,
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F6F7FA",
    height: 50,
    width: "100%",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },

  headerBOXar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    fontFamily: "Noto Kufi Arabic",
    textAlign: "left",
    fontSize: 8,
    gap: 4,
  },
  headerBOXen: {
    display: "flex",
    flexDirection: "row",
    fontSize: 8,
    gap: 4,
  },

  leftItem: {
    height: 80,
    width: 80,
  },
  rightItem: {
    height: 25.3,
    width: 82.6,
    marginTop: 15,
  },
});
// Create Document Component
const MyDocument = () => (
  <Document title={"" + Data_For_Test[0].id}>
    <Page wrap="false" size="A4" style={styles.body}>
      {/* Header Place */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          height: 100,
          width: "100%",
        }}
      >
        <Image style={styles.leftItem} src={leftItem} />
        <Image style={styles.rightItem} src={rightItem} />
      </View>
      {/* Title Place */}
      <View style={styles.grayDIV_Top}>
        {/* left side */}
        <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <View style={styles.headerBOXen}>
            <Text>Subscriber ID:</Text>
            <Text>{Data_For_Test[0].SubscriberNumber}</Text>
          </View>
          <View style={styles.headerBOXen}>
            <Text>Subscriber Name:</Text>
            <Text>{Data_For_Test[0].companyNameEN}</Text>
          </View>
          <View style={styles.headerBOXen}>
            <Text>C.R:</Text>
            <Text>{Data_For_Test[0].CR}</Text>
          </View>
          <View style={styles.headerBOXen}>
            <Text>Tel :</Text>
            <Text>{Data_For_Test[0].telephone}</Text>
            <Text>FAX :</Text>
            <Text>0</Text>
          </View>
          <View style={styles.headerBOXen}>
            <Text>Date:</Text>
            <Text>{Data_For_Test[0].opertionDate}</Text>
          </View>
        </View>

        {/* right side */}

        <View style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <View style={styles.headerBOXar}>
            <Text style={styles.textAR}>
              {Data_For_Test[0].SubscriberNumber}
            </Text>
            <Text style={styles.textAR}>:رقم الإشتراك</Text>
          </View>
          <View style={styles.headerBOXar}>
            <Text style={styles.textAR}>{Data_For_Test[0].companyNameAr}</Text>
            <Text style={styles.textAR}>:اسم المشترك</Text>
          </View>
          <View style={styles.headerBOXar}>
            <Text style={styles.textAR}>{Data_For_Test[0].CR}</Text>
            <Text style={styles.textAR}>:السجل التجاري</Text>
          </View>
          <View style={styles.headerBOXar}>
            <Text style={styles.textAR}>0</Text>
            <Text style={styles.textAR}> :فاكس</Text>
            <Text style={styles.textAR}>{Data_For_Test[0].telephone}</Text>
            <Text style={styles.textAR}>:هاتف</Text>
          </View>
          <View style={styles.headerBOXar}>
            <Text style={styles.textAR}>{Data_For_Test[0].opertionDate}</Text>
            <Text style={styles.textAR}>:التاريخ</Text>
          </View>
        </View>
      </View>
      {/* Content & Body Place */}


      {/* 4490334 */}

      <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>

        <Text>Subject: Tourist Visa</Text>
        <Text>To The Embassy of Turkey</Text>
        <Text>Greetings,</Text>

        <Text style={{ marginTop: 15 }}>This letter certifies that the employee ABDULAZIZ is employed with us at JEDDAH, SAUDI Arabia since 29 Jan 2022 and he is on top of the job and his contract is renewable automatically with mutual consent.</Text>
        <Text style={{ marginTop: 15 }}>Here are the details of the employee:</Text>
        <Text>Name: ABDULAZIZ MOHAMMED RAGEH HESANI</Text>
        <Text>Passport No: 09360128</Text>
        <Text>Nationality: YEMEN</Text>
        <Text>Saudi ID (Iqama) No: 2503826840</Text>
        <Text>Employment Start Date: 29 Jan 2022</Text>
        <Text>Actual Profession: SALES MANAGEMENT </Text>
        <Text>Monthly Total Salary: 8350 SR </Text>
        <Text style={{ marginTop: 15 }}>The above certificate is being issued to Mr. ABDULAZIZ HESANI for the submittal to Embassy of TURKEY for obtaining a Tourist visa for him. We guarantee his return to Saudi Arabia immediately after the visit to resume his job with us.</Text>
        <Text style={{ marginTop: 15 }}>Thanks and Regards</Text>
        <Text style={{ marginTop: 15 }}>Sincerely</Text>
        <Text style={{ marginTop: 15 }}>GOMAEAN MANZIL RASHIYDY CORPORAITION.</Text>

      </View>


      {/* 4490333 */}
      {/*      
      <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


        <Text>Subject: Tourist Visa</Text>
        <Text>To The Embassy of Turkey</Text>
        <Text>Greetings,</Text>

        <Text style={{ marginTop: 15 }}>This letter certifies that the employee MUSTAFA employed with us at JEDDAH, SAUDI Arabia since 17 JUNE 2022 and he is on top of the job and his contract is renewable automatically with mutual consent.</Text>
        <Text style={{ marginTop: 15 }}>Here are the details of the employee:</Text>
        <Text>Name: MUSTAFA DAWOD AHMED ALI BASHA</Text>
        <Text>Passport No: 12510134</Text>
        <Text>Nationality: YEMEN</Text>
        <Text>Saudi ID (Iqama) No: 2556132039</Text>
        <Text>Employment Start Date:17 JUNE 2022</Text>
        <Text>Actual Profession: MARKETING SPECIALIST </Text>
        <Text>Monthly Total Salary: 5800 </Text>
        <Text style={{ marginTop: 15 }}>The above certificate is being issued to Mr. MUSTAFA BASHA for submission to the Embassy of TURKEY to obtain a tourist visa for him. We guarantee his return to Saudi Arabia immediately after the visit so that he can resume his job with us.</Text>
        <Text style={{ marginTop: 15 }}>Thanks and Regards</Text>
        <Text style={{ marginTop: 15 }}>Sincerely</Text>
        <Text style={{ marginTop: 15 }}>ABEER AHMED SHOUY KAABY CO. LTD</Text>


      </View> */}



      {/* 4490332 */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


        <Text>The Honorable Consul General</Text>
        <Text>Canadian Consulate </Text>
        <Text>Jeddah- Kingdom of Saudi Arabia </Text>

        <Text style={{ marginTop: 15 }}>Greetings your Excellency,</Text>
        <Text style={{ marginTop: 15 }}>We hereby confirm that /Mr. MOHAMMED AHMED IBRAHIM - an Ethiopian Nationality, residing in Jeddah City, Kingdom of Saudi Arabia under Residence Permit No.:2146010091 - works with us at Abdul Latif Jameel Motors as an accountant – and receives a salary of (16,600) sixteen thousand six hundred riyals Per month. Since his son/Mr. JEMIL MOHAMMED AHMED - an Ethiopian Nationality, who holds Passport No. EP71903406 wishes to travel to Canada for tourism purposes - We hereby declare that His Father will bear all travel, accommodation and return expenses to the Kingdom of Saudi Arabia, and I kindly request that you grant him the necessary visa to enter Canada under our personal responsibility.</Text>
        <Text>Thank you, with best regards </Text>
        <Text style={{ marginTop: 30 }}>Sincerely,</Text>

      </View> */}

      {/* 4490331 */}

      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


        <Text>The Honorable Consul General</Text>
        <Text>Canadian Consulate </Text>
        <Text>Jeddah- Kingdom of Saudi Arabia </Text>

        <Text style={{ marginTop: 15 }}>Greetings your Excellency,</Text>
        <Text style={{ marginTop: 15 }}>We hereby confirm that /Mr. JEMEL MOHAMMED AHMED IBRAHIM - an Ethiopian Nationality, residing in Jeddah City, Kingdom of Saudi Arabia under Residence Permit No.:2196132860 AND PASSPORT NO. EP71903406 - works with us at FREQUENCY LTD. As a MARKETING SPECIALIST – And receive a salary of (5,350) FIVE THOUSAND THREE HUNDRED ANF FIFTY riyals Per month. - We hereby declare that His Father will bear all travel, accommodation, and return expenses to the Kingdom of Saudi Arabia. And kindly request that you grant him the necessary visa to enter Canada under our responsibility.</Text>
        <Text>Thank you, with best regards </Text>
        <Text style={{ marginTop: 30 }}>Sincerely,</Text>

        <Text >General Manager</Text>
        <Text >Nada Gazi Hussien  </Text>
      </View> */}

      {/* 4490329 */}
      {/* <View
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          fontSize: 9,
          lineHeight: 1.5,
          gap: 5,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          TO,
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          U.S Consulate General</Text>
        <Text>Jeddah, K.S.A.</Text>
        <Text style={{ marginTop: 15 }}>Your Excellency,</Text>
        <Text style={{ marginTop: 15 }}>
          This confirms that Mr. MOHAMMED HASSAN HASSAN ALABIDI, who holds Saudi residency permit No. 2053944969, And Yemeni passport No. 08722400 would like to let you know that He has been employed with us since 1986, His current position as Financial Assistant Manager. He makes SAR 14000/- (Fourteen thousand Saudi riyals) (SR) a month.
        </Text>

        <Text style={{ marginTop: 15 }}>
          This certificate was given upon his request for the purpose student visa for his son Mr. ABDULRAHMAN MOHAMMED HASSAN ALABIDI. We have no objections to him traveling to your country, USA, for study-related purposes. He is in charge of covering all costs associated with his son's studies and stays in the USA. Therefore, we would like to ask that the required Student visa be granted to him under our complete responsibility and guarantee. Giving him permission to travel to the USA, and we promise your Excellency.
        </Text>
        <Text style={{ marginTop: 15 }}>
          Please feel free to contact us, if you require any further information. Yours Sincerely
          GERMANY INTERNATIONAL SCHOOL
          SPONSORED BY THE GERMAN EMBASSY

        </Text>

        <Text style={{ marginTop: 15 }}>
          _____________________
        </Text>
        <Text>GERMAN INTERNATIONAL SCHOOL, NADA VILLAGE, JEDDAH</Text>
      </View> */}

      {/* 4490328 */}
      {/* <View
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          fontSize: 9,
          lineHeight: 1.5,
          gap: 5,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          TO,
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          U.S Consulate General</Text>
        <Text>Jeddah, K.S.A.</Text>

        <Text style={{ marginTop: 15 }}>
          Your Excellency,
          This verifies that Mr. ADEM EBRAHIM AHMED, who is engaged with us since 2012 as a Sales and Purchasing Manager and who possesses the Ethiopian passport number EP6195845, as well as the Saudi residency permit number 2296547025, would like to inform you of this. His Fixed monthly income is SAR 2,300 (two thousand and three hundred) (SR), (Saudi riyals + 35% interest) The 35% interest is estimated at least 5000
          (Five Thousand Saudi) Riyals
          which is derived from selling all of the institutional programs he sells

        </Text>

        <Text style={{ marginTop: 15 }}>
          This letter was provided in response to his request for Mr. Adem Ibrahim Ahmed's business visa. We don't object if he travels to the United States to attend a business meeting with another educational institution. He is responsible for paying for all expenses related to his travel and time spent in the United States. Consequently, we would like to request that the necessary business visa be issued to him entirely on our account and with our full assurance. granting him permission to visit the United States, and we assure your Excellency.
        </Text>
        <Text style={{ marginTop: 15 }}>
          Please feel free contact us, if you require any further information. Your Sincerely
          GENERAL MANAGER
          MOHAMMED ISAK
          PHONE NO. 0563111708
        </Text>

        <Text style={{ marginTop: 15 }}>
          _____________________
        </Text>
        <Text>ALKOUN INTRNATIONAL SCHOOL JEDDAH</Text>
      </View> */}

      {/* 4490327 */}
      {/* <View
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          fontSize: 9,
          lineHeight: 1.5,
          gap: 5,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          TO,
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          Consulate of Italy</Text>
        <Text>Jeddah, K.S.A.</Text>
        <Text style={{ marginTop: 15 }}>Your Excellency,</Text>
        <Text style={{ marginTop: 15 }}>
          This letter serves to confirm that Miss. ELHAM KHALED SULTAN MOHAMMED QAID Yemen nationality Holding of Passport No. 13425178, Residence Permit no.: 2067377669 with date of birth 29/12/1988. Employee of Waheed Company for Import and Export since December 2015 to the present, in the capacity of a Administrative assistance.
        </Text>

        <Text style={{ marginTop: 15 }}>
          Her Monthly income is SR6,500/- (Six Thousand Five Hundred Saudi Riyals) with other fringe benefits according to company policy and is on the employment contract of renewable with mutual consent.
        </Text>
        <Text>The above certificate is being issued to Miss. ELHAM KHALED SULTAN MOHAMMED QAID, upon her request for the submittal to the Consulate of Italy for obtaining a Tourist visa for her.  We guarantee her return to Saudi Arabia immediately after the visit to resume her job with us.</Text>
        <Text>Thanking for your usual assistance and cooperation.</Text>
        <Text>Very truly yours,</Text>
        <Text style={{ marginTop: 15 }}>
          _____________________
        </Text>
        <Text>Waheed Abdullah</Text>
      </View> */}

      {/* 4490326 */}
      {/* <View
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          fontSize: 9,
          lineHeight: 1.5,
          gap: 5,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          TO WHOM IT MAY CONCERN,
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}></Text>

        <Text style={{ marginTop: 15 }}>DEAR SIR,</Text>
        <Text style={{ marginTop: 15 }}>
          WE OWAD HASSAN IBRAHIM DEGRIRI CORPORATIONWOULD LIKE TO INFORM THAT
          OUR PURCHASING MANAGER MR. ABDULMAJEED MOHAMMED OMER DROUPI – YEMENI
          NATIONALITY PASSPORT NO (13423050) IQAMA NO (2472174594) WHO IS
          DRAWING A BASIC SALARY (17,000 SR) SINCE MAY.2018
        </Text>

        <Text style={{ marginTop: 15 }}>
          THANKING YOU FOR YOUR COOPERATION, WE STILL REMAIN,
        </Text>
        <Text>SINCERELY YOURS,</Text>
        <Text>GENERAL MANAGER</Text>
      </View> */}
      {/* 4490325 */}
      {/* <View
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          fontSize: 9,
          lineHeight: 1.5,
          gap: 5,
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>
          TO WHOM IT MAY CONCERN,
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}></Text>

        <Text style={{ marginTop: 15 }}>DEAR SIR,</Text>
        <Text style={{ marginTop: 15 }}>
          WE WOULD LIKE TO INFORM THAT OUR HUMAN RESOURCE MANAGER MR. HESHAM
          ABDULJALIL MOHAMMED – YEMENI NATIONALITY PASSPORT NO (13036114) IQAMA
          NO (2498902515) WHO IS DRAWING A BASIC SALARY (13,000 SR) SINCE
          MAY.2018
        </Text>

        <Text style={{ marginTop: 15 }}>
          THANKING YOU FOR YOUR COOPERATION, WE STILL REMAIN,
        </Text>
        <Text>SINCERELY YOURS,</Text>
        <Text>GENERAL MANAGER</Text>
      </View> */}
      {/* 4490324 */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 9, lineHeight: 1.5, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>The Embassy of  USA,</Text>
                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>Jeddah, Saudi Arabia</Text>

                <Text style={{ marginTop: 15 }}>Dear Sir/Madam</Text>
                <Text style={{ marginTop: 15 }}>This is to inform your Excellency that Mr. TOYAHA MIAH, Bangladeshi national, holding Passport no.: EK0098145 and residence permit no.: 2107806065 is one of our staff members since May 2018.</Text>

                <Text style={{ marginTop: 15 }}>Job Title                                ​:Plants and Flowers Sales Representative</Text>
                <Text>Salary 			                                : SR 19,000</Text>
                <Text>Housing Allowance	              	: Provided</Text>
                <Text>Transport Allowance	              : Provided</Text>
                <Text>Health Insurance	                   : Provided</Text>
                <Text>Contract starting date            	: 12 May. 2008</Text>
                <Text>Contract Period		                    : Unspecified</Text>

                <Text style={{ marginTop: 15 }}>Sincerely Yours,</Text>
                <Text>Managing Director,</Text>
                <Text style={{ fontSize: 10, fontFamily: 'Noto Kufi Arabic' }}>شركة ملكة الزهور والنباتات للتجارة</Text>
                <Text>QUEEN FLOWERS AND PLANTS CO.LTD</Text>
            </View> */}
      {/* 4490323 */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 9, lineHeight: 1.5, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


                <Text>To:</Text>
                <Text style={{ fontSize: 10 }}>U.S Consulate General</Text>
                <Text>Jeddah, K.S.A.</Text>

                <Text style={{ marginTop: 15 }}>Your Excellency,</Text>
                <Text style={{ marginTop: 15 }}>This confirms that Mr. MUKTAR HASSEN HUSSIN, who holds the Saudi
                    residency permit No. 2135017990 and the Ethiopian passport No.
                    EP6069075, would like to let you know that he has been employed with us
                    since 2008 as a Financial Assistant Manager. He makes SAR 18500/-
                    (eighteen thousand Saudi riyals) (SR) a month.</Text>

                <Text style={{ marginTop: 15 }}>This certificate was given upon his request for a student visa for his son. We
                    have no objections to him travelling to your country, the USA, for study-related
                    purposes. He is in charge of covering all costs associated with his son's
                    studies and stay in the USA. Therefore, we would like to ask that the required
                    student visa be granted to him under our complete responsibility and
                    guarantee. We are giving him permission to travel to the USA, and we
                    promise your Excellency.</Text>

                <Text>Please feel free to contact us if you require any further information. Your Sincerely</Text>
                <Text>______________________________________________________</Text>
                <Text style={{ fontSize: 10 }}>PRINCE BANDAR KHALED ABDULLAH AL SAUD</Text>
                <Text style={{ fontSize: 10, fontFamily: 'Noto Kufi Arabic' }}>الأمير بندر بن خالد بن عبدالله آل سعود</Text>
            </View> */}
      {/* 4490322 */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


                <Text>To: Honorary Consulate of the Republic of Japan </Text>
                <Text>Riyadh, Saudi Arabia</Text>

                <Text style={{ marginTop: 15 }}>Subject: NO OBJECTION CERTIFICATE</Text>
                <Text style={{ marginTop: 15 }}>We, Faisal EidMaadi Al-Otaibi Est, Certifies that Mr. Md Jafor Iqbal Bangladeshi Nationality, Iqama Number 2554778627 and passport number EL0040364. He is one of our teamwork staff in position Financial Manager as since August 2021.</Text>
                <Text style={{ marginTop: 15 }}>His Basic Salary                 5500 SAR</Text>
                <Text>Housing Allowance            1300 SAR</Text>
                <Text>Transfer Allowance            1200 SAR</Text>
                <Text>And Total Salary                7500 SAR</Text>
                <Text style={{ marginTop: 15 }}>Mr. Md Jafor Iqbal Desires to visit Japan. So, we will give him an annual leave for 10 days in February 2024. The company will bear all travel expenses from airline tickets and hotel reservations.</Text>

                <Text style={{ marginTop: 15 }}>This letter was given at his request to be submitted to the honorary Consulate of the Japan.</Text>

                <Text style={{ marginTop: 15 }}>We are requesting to grant him Relevant Visa.</Text>
                <Text style={{ marginTop: 15 }}>Best Regards.</Text>
                <Text>Faisal EidMaadi Al-Otaibi Est.</Text>
            </View> */}
      {/* 4490321 */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


                <Text>Subject: Tourist Visa</Text>
                <Text>To The Embassy of the Netherland in Saudi Arabia,</Text>
                <Text>Greetings,</Text>

                <Text style={{ marginTop: 15 }}>This letter certifies that the employee  ASIF ANJUM employed by Haya Abdullah Ayed Al-Qahtani Contracting, Saudi Arabia since 01 Jan 2013 and he is on top of the job and his contract is renewable automatically with mutual consent.</Text>
                <Text style={{ marginTop: 15 }}>Here under are the details of the employee:</Text>
                <Text>Name: ASIF ANJUM</Text>
                <Text>Passport No: DJ9992252</Text>
                <Text>Nationality: PAKISTAN</Text>
                <Text>Saudi ID (Iqama) No:2222637627</Text>
                <Text>Employment Start Date:01 Jan 2013</Text>
                <Text>Actual Profession: Auto mechanic</Text>
                <Text>Monthly Total Salary: 6720</Text>
                <Text style={{ marginTop: 15 }}>The above certificate is being issued to Mr. ASIF ANJUM for the submittal to Embassy of Netherland for obtaining a Tourist visa for him . We guarantee his return to Saudi Arabia immediately after the visit to resume his job with us.</Text>

                <Text style={{ marginTop: 15 }}>Thanks and Regards</Text>

                <Text style={{ marginTop: 15 }}>Sincerely</Text>
                <Text>     Haya Abdullah Ayed Al-Qahtani Contracting</Text>
            </View> */}
      {/* 4490320 */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


                <Text style={{ marginTop: 10 }}>To,</Text>
                <Text style={{ marginTop: 10 }}>U.S Consulate General</Text>
                <Text style={{ marginTop: 10 }}>Jeddah, K.S.A.</Text>

                <Text style={{ marginTop: 25 }}>Your Excellency,</Text>
                <Text style={{ marginTop: 15 }}>We would like to inform you that our esteemed employee, Mr. HESHAM ABDULJALIL MOHAMMED, a
                    Yemeni national holding passport No. 13036114 and Saudi residency permit (Iqama) No. 2498902515,
                    has been working with us as the Human Resource Manager since May 2020. He receives a monthly basic
                    salary of 13,000 Saudi riyals (SR).</Text>
                <Text style={{ marginTop: 15 }}>This certificate is being provided at his request for the purpose of obtaining a transit visa to the United
                    States. We kindly request your instructions for granting the necessary transit visa for his intended trip to
                    the USA. We assure you that Mr. HESHAM ABDULJALIL MOHAMMED will promptly return to his
                    employment in Saudi Arabia after completing the aforementioned trip.
                </Text>
                <Text style={{ marginTop: 15 }}>We appreciate your cooperation on this matter. Please do not hesitate to contact us if you require any
                    further information</Text>

                <Text style={{ marginTop: 10 }}>Contact Information:</Text>

                <Text style={{ marginTop: 10 }}>Email: ooo775429721@gmail.com</Text>

                <Text style={{ marginTop: 10 }}>Phone: +966554192241, +966503066135</Text>

                <Text style={{ marginTop: 10 }}>Email: ooo775429721@gmail.com</Text>

                <Text style={{ marginTop: 25 }}>Yours sincerely,</Text>

                <Text style={{ marginTop: 10 }}>ALIYA ABU TALIB SUROOR AL-HAWQI</Text>

            </View> */}
      {/* 4490319 */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 8, gap: 5, marginTop: 20, marginLeft: 10, marginRight: 10 }}>


                <Text>Consulate General of  USA</Text>
                <Text>Jeddah, Kingdom of Saudi Arabia</Text>
                <Text style={{ marginTop: 25 }}>Dear Sir/Madam</Text>

                <Text style={{ marginTop: 15 }}>This is to inform your Excellency that Mr. ABED MOHAMMED NASSER ABDULLAH, Yemini national holding passport no. 10808460 and residence permit no. 2183929427, is the Purchasing and Representative and Manager of ABDULLAH HAMED AL SIHLIY CORPORATION. Since February 2008, and his work contract is automatically renewable with mutual consent. He would like to visit the USA to attend a business conference and for pleasure purposes during the coming vacation.</Text>
                <Text style={{ marginTop: 15 }}>Kindly request your Excellency to grant him a multiple entry visa under our responsibility, and we guarantee that he will return to Saudi Arabia after the completion of his visit.</Text>
                <Text style={{ marginTop: 15 }}>Contract details are as follows:</Text>
                <Text style={{ marginTop: 15 }}>Job Title                                ​:XB4122252</Text>
                <Text>Salary 			                                : SR 20,750</Text>
                <Text>Housing Allowance	              	: Provided</Text>
                <Text>Transport Allowance	              : Provided</Text>
                <Text>Health Insurance	                   : Provided</Text>
                <Text>Contract starting date            	: February 2, 2016</Text>
                <Text>Contract Period		                    : Unspecified</Text>
                <Text style={{ marginTop: 15 }}>Sincerely Yours,</Text>

                <Text style={{ marginTop: 15 }}>Abdullah Hamad Hamad Alsihily</Text>

            </View> */}
      {/* Fixed & Dyinamic One */}
      {/* <View style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', fontSize: 12, gap: 5, marginTop: 30, marginLeft: 10, marginRight: 10 }}>

                <Text>{Data_For_Test[0].bodyTO}</Text>
                <Text>{Data_For_Test[0].bodyEmbassy}</Text>
                <Text>{Data_For_Test[0].bodyLocation}</Text>

                <Text>{Data_For_Test[0].bodySubject}</Text>
                <Text style={{ marginTop: 20, marginBottom: 10, }}>{Data_For_Test[0].bodyGreatings}</Text>
                <Text>{Data_For_Test[0].bodysirORmadam}</Text>
                <Text>{Data_For_Test[0].bodyContent01}</Text>
                <Text style={{ marginTop: 10, marginBottom: 10 }}>{Data_For_Test[0].bodyContent02}</Text>
                <Text>{Data_For_Test[0].bodyContent03}</Text>
                <Text style={{ marginTop: 25, marginBottom: 25 }}>{Data_For_Test[0].bodyThankingMSG}</Text>
                <Text>{Data_For_Test[0].bodyPosition}</Text>
                <Text>{Data_For_Test[0].applicantNameEN}</Text>
                <Text style={{ fontFamily: 'Noto Kufi Arabic' }}>{Data_For_Test[0].applicantNameAR}</Text>
                <Text style={{ fontFamily: 'Noto Kufi Arabic' }}>{Data_For_Test[0].companyNameAr}</Text>
                <Text>{Data_For_Test[0].companyNameEN}</Text>
            </View> */}
      {/* Stamp Place  */}
      <View
        style={{
          alignItems: "baseline",
          position: "absolute",
          bottom: 65,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          borderWidth: 1.5,
          borderColor: "#F6F7FA",
          borderRadius: 4,
          height: 80,
          width: "100%",
          padding: 4,
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <View style={styles.headerBOXar}>
            <Text style={styles.textAR}>{Data_For_Test[0].autorizedPIN}</Text>
            <Text style={styles.textAR}>:رمز المفوض</Text>
          </View>
          <View style={styles.headerBOXar}>
            <Text style={styles.textAR}>
              {Data_For_Test[0].applicantNameAR}
            </Text>
            <Text style={styles.textAR}>:الإسم</Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 25,
            }}
          >
            <View style={styles.headerBOXar}>
              <Text style={styles.textAR}>
                {Data_For_Test[0].companyNameAr}
              </Text>
              <Text style={styles.textAR}>:اسم الجهة</Text>
            </View>
            <View style={styles.headerBOXar}>
              <Text style={styles.textAR}>
                {Data_For_Test[0].operationNumber}
              </Text>
              <Text style={styles.textAR}>:رقم العملية</Text>
            </View>
            <View style={styles.headerBOXar}>
              <Text style={styles.textAR}>
                {Data_For_Test[0].SubscriberNumber}
              </Text>
              <Text style={styles.textAR}>:رقم الإشتراك</Text>
            </View>
          </View>
          <Image
            style={{ height: 60, width: 60, marginRight: 10 }}
            src={Data_For_Test[0].qrCodeImage}
          />
          <Image style={{ height: 70 }} src={stamp} />
        </View>
      </View>
      Footer Place
      <View style={styles.grayDIV_Bottow}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
            width: "100%",
            fontFamily: "Noto Kufi Arabic",
            fontSize: 9,
          }}
        >
          <Text>
            هذه الوثيقة قد تم إصدارها دون أدنى مسؤولية على الغرفة من خلال نظام
            الخدمات الإلكترونية لاتحاد الغرف السعودية و أي إضافة أو كشط أو
          </Text>
          <Text>
            https://user.saudichambers.sa/Home تعديل على الوثيقة تعتبر لاغية
            وللتحقق من محتواها يرجى زيارة الموق الالكتروني
          </Text>
          {/* <Text style={styles.headerBOXar}></Text> */}
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
