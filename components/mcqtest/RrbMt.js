// make expo mcq app with this functionality show score, restart test option and after submit the test. show explain section and right or wrong sign with decent stylesheet and css
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const questions = [
  {
    question: "Q.6 निम्नलिखित  में से कौन सा राजनीवतक दल 2019 के लोकसभा चुनािों में भाजपा के नेत्तृि में एनडीए का सहयोगी नहीं था? ",
    options: [
  "    (a) वशरोमवण ऄकाली दल",
"      (b) ऄसम गण पररर्द",
    "  (c) AIADMK",
    "  (d) DMK"
    ],
    correctOptionIndex: 3 ,
    // explanation: "Crome is Browser not crome"
  },
  {
    question: "Q.2 टाइगर लीजन' या 'फ्री इंडिया लीजन' के संस्थापक कौन थे ? ",
    options: [ "लाला हरदयाल",
      "सुभाष चंद्र बोस",
      " सोहन सिंह भखना", "विनायक दामोदर सावरकर"],
    correctOptionIndex: 1,
    // explanation: "Linux is basically used for hacking purpose so they available as open source"
  },
  {
    question: "Q.3 सुश्री भक्ति प्रदीप कुलकर्णी को निम्नलिखित मेंसेकिस खेल मेंउत्कृष्ट योगदान के लिए अर्जुन पुरस्कार 2022 सेसम्मानित किया gaya",
    options: [" बैडमिंटन",
" कुश्ती",
" टेबल टेनिस"," शतरंज " ],
    correctOptionIndex: 3 ,
    // explanation: "ब्लू-रे डिस्क (BD या ब्लू-रे नाम से भी प्रचलित) एक प्रकाशीय (Optical) डिस्क संग्रहण माध्यम है, their capacity is very high"
  },
  {
   


question: "Q.1 निम्नलिखित में से कौन ददल्ली का पहला सैय्यद शासक था?",
options: [" मुबारक शाह", "अलम शाह", "मुहम्मद शाह", "खिजर  खान "],
correctOptionIndex: 3,
  },
    // correctOptionIndex: 3,
    // explanation: "हार्ड डिस्क ड्राइव (HDD) एक आंतरिक या बाह्य कंप्यूटर घटक है जो डेटा संग्रहीत करता है, जैसे ऑपरेटिंग सिस्टम, एप्लिकेशन और उपयोगकर्ता फ़ाइलें। HDD “गैर-वाष्पशील” भंडारण उपकरण हैं, जिसका अर्थ है कि वे बिजली की आपूर्ति न होने पर भी संग्रहीत डेटा को बनाए रखते हैं।"
   

  {
    question: "Q.वनम्नवलवखत में से कौन सा राज्य चीन के साथ सबसे लंबी सीमा साझा करता है?",
    options: [
"      (a) सिक्किम ",
"(b) ऄरुणाचल प्रदेश",
"(c) वहमाचल प्रदेश",
"(d) ईत्तराखंड"
    ],
    correctOptionIndex: 1 ,
    // explanation: "स्टोरेज, कंप्यूटर का वह हिस्सा है जिसकी मदद से डेटा को लंबे समय तक स्टोर करके उस तक पहुंचा जा सकता है. इसे कंप्यूटर डेटा भंडारण या इलेक्ट्रॉनिक डेटा भंडारण भी कहा जाता है."
  },
  {
    question: "Q.6 निम्नलिखित  में से कौन सा राजनीवतक दल 2019 के लोकसभा चुनािों में भाजपा के नेत्तृि में एनडीए का सहयोगी नहीं था? ",
    options: [
  "    (a) वशरोमवण ऄकाली दल",
"      (b) ऄसम गण पररर्द",
    "  (c) AIADMK",
    "  (d) DMK"
    ],
    correctOptionIndex: 3 ,
    // explanation: "स्कैनर एक ऐसा उपकरण है जिससे भौतिक दस्तावेज़ों, छवियों, या वस्तुओं को डिजिटल रूप में बदला जा सकता है."
  },
  {
    question: "Q.7 वनम्नवलवखत में से कौन 2019, $100,000 नाआन डॉट्स पुरथकार का विजेता है?",
    options: [
"      (a) एनी जैदी",
"(b) चेतन भगत",
"(c) शशि  थरूर",
" अरुंधती रॉय "

    ],
    correctOptionIndex: 0,
    // explanation: "सेंट्रल प्रोसेसिंग यूनिट (सीपीयू) एक हार्डवेयर घटक है जो सर्वर में मुख्य कम्प्यूटेशनल यूनिट है। सर्वर और अन्य स्मार्ट डिवाइस डेटा को डिजिटल सिग्नल में परिवर्तित करते हैं और उन पर गणितीय ऑपरेशन करते हैं। सीपीयू प्राथमिक घटक है जो सिग्नल को प्रोसेस करता है और कंप्यूटिंग को संभव बनाता है।"
  },
  {
    question: "Q. 8 कम्प्यूटर का सबसे महत्वपूर्ण आधार है",
    options: ["ट्रांजिस्टर", "बाइनरी अंकगणित", "(A) तथा (B) दोनों ", "उपरोक्त में कोई नहीं"],
    correctOptionIndex: 1,
    explanation: "बाइनरी गणित एक संख्या प्रणाली है जिसमें केवल दो अंक होते हैं: 0 और 1। इसका उपयोग कंप्यूटर द्वारा जानकारी को संग्रहीत और संसाधित करने के लिए किया जाता है, क्योंकि दशमलव प्रणाली (0-9) की तुलना में बाइनरी के साथ काम करना उनके लिए आसान होता है।"
  },
  {
    question: "Q.निम्नलिखित  में से दकसने 2018 एवशयाइ खेलों में घुडसिारी प्रवतयोवगता में रजत पदक जीता?",
    options: [
"      (a) अशीर् मवलक",
"(b) फ़ौआद  मिर्जा ",
"(c)राकेश कुमार ",
"(d) जितेंद्र सिंह "
    ],
    correctOptionIndex: 1,
    // explanation: "पिक्सेल, डिजिटल छवि या डिस्प्ले की सबसे छोटी इकाई होती है जिसे व्यक्तिगत रूप से नियंत्रित या प्रदर्शित किया जा सकता है. पिक्सेल शब्द दो शब्दों से मिलकर बना है, “चित्र” और “तत्व”. इसे छोटा करके “पिक्सेल” (पिक्स = चित्र, एल = तत्व) कर दिया गया. पिक्सेल, रंग के नमूने होते हैं जो एक डिजिटाइज़्ड छवि बनाते हैं. कंप्यूटर स्क्रीन पर एक छवि बनाने के लिए लाखों पिक्सेल का इस्तेमाल किया जाता है. जितने ज़्यादा पिक्सेल होंगे, छवि उतनी ही वास्तविक या सटीक दिखाई देगी"
  },
  {
    question: "Q. फिल्म 'पीएम नरेंर मोदी' के वनदेशक कौन हैं ?",
    options: [
  "  (a) तिग्मांशु धूलिया ",
  "    (b) ओमग कुमार ",
 "     (c) राकेश ओमप्रकाश मेहरा ",
   "   (d) हंसल मेहता"
    ],
    correctOptionIndex: 1 ,
    // explanation: "डॉट मैट्रिक्स प्रिंटर क्या है? : यह एक प्रकार का impact printer है, जिसके printing की आवाज काफी अधिक होती है।"
  },






  // {
  //   question: "Q. 11 ‘Find and Replace’ डायलॉग बाक्स को खोलने हेतु आवश्यक फंक्शन की",
  //   options: ["F2", "F5", "F7", "ctrl+H"],
  //   correctOptionIndex: 3,
  //   explanation: "ctrl+H"
  // },
  // {
  //   question: "Q. 12 निम्नलिखित में से किसके पहुँच के लिए इन्टरनेट कनेक्टीविटि. की आवश्यकता होती है?",
  //   options: ["फेसबुक", "ट्विटर", "वाट्सअप", "उपरोक्त सभी"],
  //   correctOptionIndex: 3,
  //   explanation: "उपरोक्त सभी"
  // },
  // {
  //   question: "Q. 13 कम्प्यूटर को प्रारंभ करने के लिए आवश्यक है?",
  //   options: ["उच्च स्तरीय भाषा", "निम्न स्तरीय भाषा.", "आपरेटिंग सिस्टम साफ्टवेयर", "एप्लीकेशन साफ्टवेयर"],
  //   correctOptionIndex: 2,
  //   explanation: "ऑपरेटिंग सिस्टम (OS) सॉफ़्टवेयर का एक समूह होता है जो कंप्यूटर या मोबाइल डिवाइस में चलने वाले सभी प्रोग्राम और ऐप्लिकेशन को मैनेज करता है. यह कंप्यूटर की मेमोरी, प्रोसेस, हार्डवेयर, और सॉफ़्टवेयर को भी नियंत्रित करता है. ऑपरेटिंग सिस्टम, यूज़र और कंप्यूटर के हार्डवेयर के बीच इंटरफ़ेस का काम करता है. इसकी मदद से, यूज़र कंप्यूटर से बिना उसकी भाषा सीखे भी बातचीत कर सकते हैं. ऑपरेटिंग सिस्टम, ग्राफ़िकल यूज़र इंटरफ़ेस (GUI) या कमांड-लाइन इंटरफ़ेस (CLI) जैसे यूज़र इंटरफ़ेस का इस्तेमाल करता है."
  // },
  // {
  //   question: "Q. 14 निम्नांकित में से कौन-सा सॉफ्टवेयर ओपन सोर्स आपरेटिंग सिस्टम सॉफ्टवेयर नहीं है?",
  //   options: ["उबन्तु", "फ्री बी.एस.डी", "ओपन सोलेरिस", "मेकन्टोश"],
  //   correctOptionIndex: 3,
  //   explanation: "मैकिंटोश (Macintosh) या मैक (Mac) व्यक्तिगत कम्प्यूटरों (पीसी: पर्सनल कंप्यूटर) की एक श्रेणी का नाम है"
  // },
  // {
  //   question: "Q. 15 MS Word साफ्टवेयर में कार्य करते समय F12 बटन दबाने पर?",
  //   options: ["Save As’ डायलॉग बाक्स खुलता है।", "Save’ डायलॉग बाक्स खुलता है ।", "‘Print’ डायलॉग बाक्स खुलता है", "कार्यरत डाक्यूमेंट बंद हो जाता है।"],
  //   correctOptionIndex: 0,
  //   explanation: "Save As’ डायलॉग बाक्स खुलता है।"
  // },
  // {
  //   question: "Q. 16 इंटरनेट पर एकल डाक्यूमेन्ट को कहते हैं – ",
  //   options: ["ई-मेल", "वेबसाईट", "वेबपेज", "फाईल"],
  //   correctOptionIndex: 2,
  //   explanation: "वेबपेज वर्ल्ड वाइड वेब पर एक हाइपरटेक्स्ट दस्तावेज़ है। वेबपेज वेब सर्वर से यूज़र को भेजे जाते हैं"
  // },
  // // {
  // //   question: "Q. ",
  // //   options: ["", "", "", ""],
  // //   correctOptionIndex: 2,
  // //   explanation: ""
  // // },
  // {
  //   question: "Q.17 निम्नांकित में से कौन-से प्रिंटर में सूखी स्याही का उपयोग होता है? ",
  //   options: ["लेजर प्रिंटर", "लाईन प्रिंटर", "डॉट मैट्रिक्स प्रिंटर", "थर्मल प्रिंटर"],
  //   correctOptionIndex: 0,
  //   explanation: "लेजर प्रिंटर एक प्रकार का प्रिंटर है जो कागज़ पर उच्च-गुणवत्ता वाले टेक्स्ट और ग्राफ़िक्स बनाने के लिए लेजर बीम का उपयोग करता है। यह टोनर को कागज़ पर स्थानांतरित करने के लिए इलेक्ट्रोस्टैटिकली चार्ज किए गए टोनर और गर्म फ्यूज़र के संयोजन का उपयोग करके काम करता है।"
  // },
  // {
  //   question: "Q. 18 कम्प्यूटर वास्तव में समझता है ",
  //   options: ["मशीनी भाषा", "उच्च स्तरीय भाषा", "अंग्रेजी भाषा", "एसेम्बली भाषा"],
  //   correctOptionIndex: 0,
  //   explanation: "मशीनी भाषा, प्रोग्रामिंग भाषा का सबसे निचला स्तर है. यह एक ऐसी भाषा है जिसे कंप्यूटर समझता है और हार्डवेयर स्तर पर निर्देश निष्पादित करने की अनुमति देती है. मशीनी भाषा में बाइनरी संख्याओं की एक श्रृंखला होती है जो विशिष्ट निर्देशों और डेटा का प्रतिनिधित्व करती है. इसे मशीन कोड या ऑब्जेक्ट कोड के नाम से भी जाना जाता है. मशीनी भाषा में केवल दो प्रतीक 1 और 0 होते हैं और सभी निर्देश बाइनरी संख्या 1 और 0 के रूप में लिखे जाते हैं. इसे आम तौर पर हेक्साडेसिमल फ़ॉर्म में प्रदर्शित किया जाता है ताकि इसे पढ़ना थोड़ा आसान हो"
  // },
  // {
  //   question: "Q. 19 MS Excel में. एक फलन नहीं है।",
  //   options: ["SUM", "ADD", " MAX", "SQRT"],
  //   correctOptionIndex: 1,
  //   explanation: "ADD"
  // },
  // {
  //   question: "Q. 20 साइबर रायट वायरस है? ",
  //   options: ["सर्वर वायरस", "विन्डो वाररस", "डॉस वायरस", "उपरोक्त में कोई नहीं"],
  //   correctOptionIndex: 1,
  //   explanation: "हां, साइबर रायट एक कंप्यूटर वायरस है. यह 1993 के आखिर में अमेरिका में पाया गया था. साइबर रायट, विंडोज का पहला उन्नत वायरस था. इससे पहले, विंडोज वायरस धीरे-धीरे फैलते थे और तकनीकी रूप से कम विकसित थे. हालांकि, यह विंडोज वातावरण के लिए एक खतरा है."
  // },
  // {
  //   question: "Q. 21 निम्नांकित में से कौन से extension से चित्र प्रारूप की पहचान होती है। ",
  //   options: [".gif", ".jpg", "(A) एवं (B) दोनों", "उपरोक्त में कोई नहीं"],
  //   correctOptionIndex: 2,
  //   explanation: " (A) एवं (B) दोनों"
  // },
  // {
  //   question: "Q. 22. निम्नांकित में से कौन-सी आप्टिकल डिस्क नहीं है। ",
  //   options: ["ब्लू-रे (Blu-Ray) ", "डी.वी.डी (DVD).", "सी.डी. रोम (CD ROM)", "जिप डिस्क (Zip Disk)"],
  //   correctOptionIndex: 3,
  //   explanation: "ज़िप डिस्क फ्लॉपी डिस्क के समान आकार की होती है, लेकिन इसके बजाय थोड़ी मोटी होती है। यह उसी तरह से चुंबकीय भंडारण का उपयोग करती है जैसे हार्ड ड्राइव और फ्लॉपी डिस्क करती हैं, लेकिन इसमें 100 से 750 एमबी डेटा होता है, जो फ्लॉपी डिस्क की तुलना में बहुत अधिक है।"
  // },
  // {
  //   question: "Q. 23 ई-मेल एड्रेस hostop@yahoo.com में hostop कहलाता है। ",
  //   options: ["पासवर्ड", "क्लायंट कम्प्यूटर", "यूजर नेम", "सर्वर नेम"],
  //   correctOptionIndex: 2,
  //   explanation: "प्रयोक्ता नाम."
  // },
  // {
  //   question: "Q. 24 कहते हैं? ",
  //   options: ["सर्च पोर्ट", "सर्च इंजन", "सर्च पार्टी", "सर्च स्टेशन"],
  //   correctOptionIndex: 1,
  //   explanation: "सर्च इंजन, कंप्यूटर प्रोग्रामों का एक समूह होता है, जो किसी डेटाबेस में दी गई जानकारी के मुताबिक, यूज़र द्वारा सर्च बॉक्स में दिए गए कीवर्ड से जुड़ी जानकारी को ढूंढकर दिखाता है."
  // },
  // {
  //   question: "Q. 25 इंटरेनट से सूचनाओं को ज्ञात करने हेतु प्रयुक्त दूल को निम्नलिखित में से कौन सा कथन सत्य है? ",
  //   options: ["सी.डी. की मेमोरी डी.वी.डी. से अधिक", "डी.वी.डी. की मेमोरी सी.डी. से अधिक होती है ।", "सी.डी.तथा डी.वी.डी. की समान मेमोरी होती है।", "उपरोक्त में कोई नहीं"],
  //   correctOptionIndex: 1,
  //   explanation: "i have doubt, you will find your own way"
  // },
  // {
  //   question: "Q. 26 1226 नामक कम्प्यूटर वायरस किस प्रकार के वायरस का उदाहरण है। ",
  //   options: ["मेक्रो", "मल्टीपरटाइट", "पॉलीमार्फिक", "koi nahi"],
  //   correctOptionIndex: 2,
  //   explanation: "बहुरूपी व्यवहार प्राप्त करने के लिए, एन्क्रिप्टर/डिक्रिप्टर जोड़ी को कोड की प्रत्येक प्रतिलिपि के साथ उत्परिवर्तित किया जाता है । यह कुछ कोड के विभिन्न संस्करणों की अनुमति देता है जो सभी समान कार्य करते हैं।"
  // },
  // {
  //   question: "Q. 27 निम्नलिखित में से कौन-सा “पेज प्रिंटर’ है? ",
  //   options: ["इंकजेट प्रिंटर", "लेजर प्रिंटर", "डॉट मैट्रिक्स प्रिंटर ", "उपरोक्त में कोई नहीं"],
  //   correctOptionIndex: 1,
  //   explanation: "लेजर प्रिंटर एक प्रकार का प्रिंटर है जो कागज़ पर उच्च-गुणवत्ता वाले टेक्स्ट और ग्राफ़िक्स बनाने के लिए लेजर बीम का उपयोग करता है। यह टोनर को कागज़ पर स्थानांतरित करने के लिए इलेक्ट्रोस्टैटिकली चार्ज किए गए टोनर और गर्म फ्यूज़र के संयोजन का उपयोग करके काम करता है।"
  // },
  // {
  //   question: "Q. 28 देव की भाषा कौन सी है? ",
  //   options: ["जावा", "सी हैस", "एच.टी.टी.पी", " एच.टी.एम.एल"],
  //   correctOptionIndex: 3,
  //   explanation: "एचटीएमएल यानी हाइपरटेक्स्ट मार्कअप लैंग्वेज, वेब का एक मूलभूत निर्माण खंड है. इसका इस्तेमाल वेबपेज बनाने के लिए किया जाता है. एचटीएमएल की मदद से वेबपेज पर टेक्स्ट, चित्र, वीडियो जैसी सामग्री को संरचित किया जाता है."
  // },

  // {
  //   question: "Q. 29 निम्नलिखित में से कौन-सा आपरेटिंग सिस्टम साफ्टवेयर किसी कम्प्यूटर को प्रारंभ करने के काम में लाया जाता है? ",
  //   options: ["एम.एस डॉस", "यूनिक्स", "विंडोज", "उपरोक्त सभी"],
  //   correctOptionIndex: 3,
  //   explanation: "उपरोक्त सभी"
  // },
  //   {
  //   question: "Q. 30 निम्नांकित में से कौन लिये इस्तेमाल नहीं किया जाता है? ",
  //   options: ["आइ.एस.डी.एन (ISDN) ", "डी.एस.एल (DSL)", "HISH (MODEM)", "वी.डी.यू (VDU)"],
  //   correctOptionIndex: 3,
  //   explanation: "विज़ुअल डिस्प्ले यूनिट जो कि VDU का संक्षिप्त रूप है जिसका मतलब है विज़ुअल डिस्प्ले यूनिट। VDU ऐसे उपकरण हैं जो कंप्यूटर मॉनीटर पर कंप्यूटर इमेज दिखाने में सक्षम हैं। ये इमेज आपके कंप्यूटर के अंदर प्रोसेसर या ग्राफ़िक्स कार्ड द्वारा बनाई जाती हैं। वीडीयू का इतिहास स्पष्ट नहीं है, लेकिन यह 1950 के दशक से उपयोग में है।"
  // },






  
    // {
  //   question: "Q. ",
  //   options: ["", "", "", ""],
  //   correctOptionIndex: 2,
  //   explanation: ""
  // },

  // Add more questions as needed
];

const RrbMt = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionPress = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmitPress = () => {
    let newScore = 0;
    selectedOptions.forEach((option, index) => {
      if (option === questions[index].correctOptionIndex) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowExplanation(true);
  };

  const handleRestartPress = () => {
    setSelectedOptions(Array(questions.length).fill(null));
    setScore(0);
    setShowScore(false);
    setShowExplanation(false);
  };

  if (showScore) {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>Your Score: {score}/{questions.length}</Text>
        <TouchableOpacity style={styles.button} onPress={handleRestartPress}>
          <Text style={styles.buttonText}>Restart Test</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((question, questionIndex) => (
        <View key={questionIndex} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question.question}</Text>
          {question.options.map((option, optionIndex) => (
            <TouchableOpacity
              key={optionIndex}
              style={[
                styles.optionButton,
                selectedOptions[questionIndex] === optionIndex && styles.selectedOption,
                showExplanation && optionIndex === question.correctOptionIndex && styles.correctOption,
                showExplanation && selectedOptions[questionIndex] === optionIndex && selectedOptions[questionIndex] !== question.correctOptionIndex && styles.wrongOption
              ]}
              onPress={() => handleOptionPress(questionIndex, optionIndex)}
              disabled={showExplanation}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
          {showExplanation && (
            <Text style={styles.explanationText}>{question.explanation}</Text>
          )}
        </View>
      ))}
      {showExplanation ? (
        <View>
          <TouchableOpacity style={styles.button} onPress={() => setShowScore(true)}>
            <Text style={styles.buttonText}>Show Score</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSubmitPress}>
          <Text style={styles.buttonText}>Submit Test</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  questionContainer: {
    marginBottom: 20,
    width: '100%'
  },
  questionText: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'left'
  },
  optionButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ddd',
    // backgroundColor: '#4a2b29',

    borderRadius: 5,
    width: '100%'
  },
  selectedOption: {
    // backgroundColor: '#ccc'
    backgroundColor: '#3b48d4'
  },
  correctOption: {
    backgroundColor: 'green'
  },
  wrongOption: {
    backgroundColor: 'red'
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center'
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  explanationText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center'
  }
});

export default RrbMt;




/////////
