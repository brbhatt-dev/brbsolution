const fs = require('fs');
const path = require('path');
const JSZip = require('jszip');

const downloadsDir = path.join(__dirname, '..', 'public', 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

function createDocxXml(title, paragraphs) {
  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`;

  const relsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

  let bodyXml = `<w:p>
    <w:pPr><w:jc w:val="center"/><w:spacing w:after="240"/></w:pPr>
    <w:r><w:rPr><w:b/><w:sz w:val="36"/><w:rFonts w:ascii="Mangal" w:hAnsi="Mangal" w:cs="Mangal"/></w:rPr><w:t>${escapeXml(title)}</w:t></w:r>
  </w:p>`;

  for (const p of paragraphs) {
    if (p.isHeading) {
      bodyXml += `<w:p>
        <w:pPr><w:spacing w:before="200" w:after="120"/></w:pPr>
        <w:r><w:rPr><w:b/><w:sz w:val="26"/><w:rFonts w:ascii="Mangal" w:hAnsi="Mangal" w:cs="Mangal"/></w:rPr><w:t>${escapeXml(p.text)}</w:t></w:r>
      </w:p>`;
    } else if (p.isCenter) {
      bodyXml += `<w:p>
        <w:pPr><w:jc w:val="center"/><w:spacing w:after="120"/></w:pPr>
        <w:r><w:rPr><w:sz w:val="22"/><w:rFonts w:ascii="Mangal" w:hAnsi="Mangal" w:cs="Mangal"/></w:rPr><w:t>${escapeXml(p.text)}</w:t></w:r>
      </w:p>`;
    } else if (p.isRight) {
      bodyXml += `<w:p>
        <w:pPr><w:jc w:val="right"/><w:spacing w:after="120"/></w:pPr>
        <w:r><w:rPr><w:sz w:val="22"/><w:rFonts w:ascii="Mangal" w:hAnsi="Mangal" w:cs="Mangal"/></w:rPr><w:t>${escapeXml(p.text)}</w:t></w:r>
      </w:p>`;
    } else {
      bodyXml += `<w:p>
        <w:pPr><w:spacing w:after="140"/><w:jc w:val="both"/></w:pPr>
        <w:r><w:rPr><w:sz w:val="24"/><w:rFonts w:ascii="Mangal" w:hAnsi="Mangal" w:cs="Mangal"/></w:rPr><w:t>${escapeXml(p.text)}</w:t></w:r>
      </w:p>`;
    }
  }

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${bodyXml}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>`;

  const zip = new JSZip();
  zip.file('[Content_Types].xml', contentTypesXml);
  zip.folder('_rels').file('.rels', relsXml);
  zip.folder('word').file('document.xml', documentXml);

  return zip;
}

function escapeXml(unsafe) {
  return (unsafe || '').replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

// 1. Bayanapatta DOCX
async function generateBayanapattaDocx() {
  const paragraphs = [
    { text: '(मुलुकी देवानी संहिता २०७४ तथा करार कानुन बमोजिमको आधिकारिक ढाँचा)', isCenter: true },
    { text: 'लिखितम् हामी प्रथम पक्ष (जग्गा बिक्रीकर्ता) ............................ ठेगाना भएको नागरिकता प्रमाणपत्र नं. ............................ (यसपछि "बिक्रीकर्ता" भनिएको) तथा दोस्रो पक्ष (जग्गा खरिदकर्ता) ............................ ठेगाना भएको नागरिकता प्रमाणपत्र नं. ............................ (यसपछि "खरिदकर्ता" भनिएको) का बीचमा तपसिलको जग्गा खरिद-बिक्री गर्ने सम्बन्धमा आपसी मञ्जुरीले यो बैनापट्टा कागज गरिदियौँ, लियौँ।' },
    { text: 'तपसिल (जग्गाको पूर्ण विवरण):', isHeading: true },
    { text: '१. जिल्ला: ............................ नगरपालिका/गाउँपालिका: ............................ वडा नं: ......' },
    { text: '२. कित्ता नम्बर: ............................ क्षेत्रफल: ............................ (रोपनी/आना वा बिघा/कट्ठा)' },
    { text: '३. चारकिल्ला विवरण: पूर्व: ...................., पश्चिम: ...................., उत्तर: ...................., दक्षिण: ....................' },
    { text: '४. कुल कबुल मूल्य: रु. ............................ /- (अक्षरेपी ....................................................)' },
    { text: '५. आज बैनाबापत बुझाएको अग्रिम रकम: रु. ............................ /- (अक्षरेपी ....................................................)' },
    { text: '६. बाँकी रकम चुक्ता गरी मालपोत कार्यालयबाट रजिष्ट्रेसन पास गर्ने अन्तिम भाका: मिति २०८..... साल .................... महिना ...... गतेभित्र।' },
    { text: 'सर्त तथा बन्देजहरू:', isHeading: true },
    { text: '१. माथि उल्लिखित म्यादभित्र खरिदकर्ताले बाँकी रकम चुक्ता गर्न आएमा बिक्रीकर्ताले मालपोत कार्यालयमा उपस्थित भई कुनै झन्झट बिना आफ्नै खर्चमा सम्बन्धित कित्ता रजिष्ट्रेसन पास गरिदिनुपर्नेछ।' },
    { text: '२. यदि बिक्रीकर्ताले तोकिएको मितिमा जग्गा पास गरिदिन आनाकानी गरेमा बुझाएको बैना रकम फिर्ता गरी प्रचलित कानुन बमोजिम शतप्रतिशत हर्जना/क्षतिपूर्ति तिर्नुपर्नेछ।' },
    { text: '३. खरिदकर्ताले तोकिएको म्यादभित्र बाँकी रकम नबुझाएमा आज बुझाएको बैना रकम स्वतः जफत हुनेछ।' },
    { text: '४. उक्त जग्गा कुनै बैंक, वित्तीय संस्था वा अदालतमा रोक्का नरहेको र तेस्रो व्यक्तिको हकदाबी नभएको व्यहोरा बिक्रीकर्ता स्वीकार गर्दछ।' },
    { text: 'माथि लेखिएको बेहोरा ठिक साँचो हो, फरक परे कानुन बमोजिम सहुँला बुझाउँला भनी हामी दुवै पक्षले साक्षीहरूको रोहबरमा सहीछाप गर्यौँ।' },
    { text: 'बिक्रीकर्ता (प्रथम पक्ष): ............................................      खरिदकर्ता (दोस्रो पक्ष): ............................................', isCenter: true },
    { text: 'साक्षीहरू: १) नाम: ....................................... ठेगाना: ....................................... सही: ............' },
    { text: '२) नाम: ....................................... ठेगाना: ....................................... सही: ............' },
    { text: 'इति संवत् २०८... साल .................... महिना ...... गते रोज ...... शुभम्।' }
  ];

  const zip = createDocxXml('जग्गा खरिद-बिक्री बैनापट्टाको लिखित कागज', paragraphs);
  const buf = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(path.join(downloadsDir, 'bayanapatta-paper-format.docx'), buf);
  console.log('✅ Generated bayanapatta-paper-format.docx');
}

// 2. Rent Agreement DOCX
async function generateRentDocx() {
  const paragraphs = [
    { text: '(मुलुकी देवानी संहिता, २०७४ को परिच्छेद ९ बमोजिम)', isCenter: true },
    { text: 'लिखितम् हामी प्रथम पक्ष (घरधनी) ............................................ बस्ने नागरिकता नं. ............................ तथा दोस्रो पक्ष (बहालमा लिने) ............................................ बस्ने नागरिकता/प्यान नं. ............................ का बीचमा तपसिलको घर/सटर/कोठा आपसी मञ्जुरीले बहालमा लिने-दिने गरी यो सम्झौता पत्र सम्पन्न गरियो।' },
    { text: 'तपसिल (बहाल सम्पत्ति तथा आर्थिक सर्तहरू):', isHeading: true },
    { text: '१. बहाल सम्पत्तिको स्थान: ................................................................................................' },
    { text: '२. बहालमा दिइएको एकाइ: (उदा: भुइँतलाको १ सटर वा २ कोठा १ भान्सा) ........................................' },
    { text: '३. मासिक बहाल (भाडा) रकम: रु. ............................ /- (अक्षरेपी ............................................)' },
    { text: '४. अग्रिम सुरक्षण धरौटी (Security Deposit): रु. ............................ /-' },
    { text: '५. सम्झौता अवधि: मिति २०८...../...../..... देखि २०८...../...../..... सम्म (१ वर्ष)।' },
    { text: '६. भाडा भुक्तानी भाका: प्रत्येक महिनाको ...... गतेभित्र।' },
    { text: 'करारका मुख्य सर्तहरू:', isHeading: true },
    { text: '१. दोस्रो पक्षले प्रत्येक महिनाको भाडा तोकिएको मितिभित्र प्रथम पक्षलाई बुझाई अनिवार्य भरपाई लिनुपर्नेछ।' },
    { text: '२. बिजुली (सब-मिटर अनुसार), खानेपानी तथा फोहोर व्यवस्थापन शुल्क दोस्रो पक्षले समयमै भुक्तानी गर्नुपर्नेछ।' },
    { text: '३. घरधनीको पूर्व लिखित अनुमति बिना उक्त सम्पत्ति तेस्रो व्यक्तिलाई उप-बहाल (Sub-lease) मा दिन पाइने छैन।' },
    { text: '४. कुनै एक पक्षले बहाल खाली गर्न वा गराउन चाहेमा कम्तीमा ३५ (पैंतीस) दिन अगावै लिखित पूर्वसूचना दिनुपर्नेछ।' },
    { text: '५. सम्झौता समाप्त भई कोठा/सटर दुरुस्त बुझाएपछि धरौटी रकम फिर्ता गरिनेछ।' },
    { text: 'प्रथम पक्ष (घरधनी): ............................................      दोस्रो पक्ष (बहालवाला): ............................................', isCenter: true },
    { text: 'साक्षीहरू: १) ....................................................     २) ....................................................' }
  ];

  const zip = createDocxXml('घर तथा सटर बहाल सम्झौता पत्र', paragraphs);
  const buf = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(path.join(downloadsDir, 'house-rent-agreement-format.docx'), buf);
  console.log('✅ Generated house-rent-agreement-format.docx');
}

// 3. Boundary Application DOCX
async function generateBoundaryDocx() {
  const paragraphs = [
    { text: 'मिति: २०८...../...../.....', isRight: true },
    { text: 'श्रीमान् प्रमुख नापी अधिकृतज्यू,' },
    { text: 'नापी कार्यालय, ............................................।' },
    { text: 'विषय: जग्गाको साँध-सिमाना छुट्याई (सीमांकन) पाऊँ।', isHeading: true },
    { text: 'महोदय,' },
    { text: 'उपरोक्त विषयमा मेरो/हाम्रो नाममा मालपोत कार्यालयमा दर्ता श्रेस्ता कायम रहेको जिल्ला ............................, स्थानीय तह ............................ वडा नं. ...... स्थित कित्ता नं. ................ क्षेत्रफल ............................ भएको जग्गाको साँध-सिमानामा छिमेकीसँग अस्पष्टता भएको हुँदा नापी अमिन खटाई साँध-सिमाना यकिन छुट्याई दिनुहुन सादर अनुरोध गर्दछु।' },
    { text: 'यसका लागि लाग्ने आवश्यक सरकारी दस्तुर बुझाउन तयार छु। साथै मेरो जग्गाधनी प्रमाणपुर्जा र चालु आर्थिक वर्षको मालपोत तिरो तिरेको रसिद यसै निवेदनसाथ संलग्न गरेको छु।' },
    { text: 'निवेदक:', isRight: true },
    { text: 'नाम: ............................................', isRight: true },
    { text: 'नागरिकता नं: ....................................', isRight: true },
    { text: 'फोन नं: ........................................', isRight: true }
  ];

  const zip = createDocxXml('नापी सीमांकन (साँध-सिमाना) निवेदन पत्र', paragraphs);
  const buf = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(path.join(downloadsDir, 'boundary-demarcation-application.docx'), buf);
  console.log('✅ Generated boundary-demarcation-application.docx');
}

// 4. Fieldbook & Trace Application DOCX
async function generateFieldbookDocx() {
  const paragraphs = [
    { text: 'मिति: २०८...../...../.....', isRight: true },
    { text: 'श्रीमान् कार्यालय प्रमुखज्यू,' },
    { text: 'नापी कार्यालय, ............................................।' },
    { text: 'विषय: नक्सा ट्रेस तथा फिल्डबुक उतार उपलब्ध गराई पाऊँ।', isHeading: true },
    { text: 'महोदय,' },
    { text: 'उपरोक्त विषयमा जिल्ला ............................, स्थानीय तह ............................ वडा नं. ...... मा अवस्थित मेरो नामको कित्ता नं. ................ को जग्गा बैंक प्रयोजन / कित्ताकाट / घर निर्माण सम्पन्नका लागि नक्सा ट्रेस (Trace Map) तथा फिल्डबुक उतार (Field Book Copy) आवश्यक परेको हुँदा नियमानुसारको सरकारी दस्तुर लिई उपलब्ध गराइदिनुहुन सादर अनुरोध गर्दछु।' },
    { text: 'संलग्न कागजातहरू:' },
    { text: '१. जग्गाधनी दर्ता प्रमाणपुर्जाको प्रतिलिपि - १ प्रति' },
    { text: '२. नागरिकता प्रमाणपत्रको प्रतिलिपि - १ प्रति' },
    { text: '३. चालु आ.व. को सम्पत्ति कर / मालपोत तिरो रसिद - १ प्रति' },
    { text: 'निवेदक:', isRight: true },
    { text: 'नाम: ............................................', isRight: true },
    { text: 'नागरिकता नं: ....................................', isRight: true }
  ];

  const zip = createDocxXml('नक्सा ट्रेस तथा फिल्डबुक उतार माग निवेदन', paragraphs);
  const buf = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(path.join(downloadsDir, 'fieldbook-trace-application.docx'), buf);
  console.log('✅ Generated fieldbook-trace-application.docx');
}

// 5. Land Calculation Excel XLSX
async function generateLandExcel() {
  const contentTypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`;

  const relsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`;

  const wbRelsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`;

  const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    <sheet name="जग्गा नापजाँच क्याल्कुलेटर" sheetId="1" r:id="rId1"/>
  </sheets>
</workbook>`;

  const sheet1Xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetData>
    <row r="1">
      <c r="A1" t="inlineStr"><is><t>नेपाल जग्गा नापजाँच तथा मूल्य क्याल्कुलेटर (BR Bhatta Tools)</t></is></c>
    </row>
    <row r="3">
      <c r="A3" t="inlineStr"><is><t>पहाडी एकाइ</t></is></c>
      <c r="B3" t="inlineStr"><is><t>संख्या</t></is></c>
      <c r="C3" t="inlineStr"><is><t>वर्गफिट (Sq.Ft)</t></is></c>
      <c r="D3" t="inlineStr"><is><t>वर्गमिटर (Sq.M)</t></is></c>
    </row>
    <row r="4">
      <c r="A4" t="inlineStr"><is><t>रोपनी (Ropani)</t></is></c>
      <c r="B4"><v>1</v></c>
      <c r="C4"><f>B4*5476</f></c>
      <c r="D4"><f>C4*0.092903</f></c>
    </row>
    <row r="5">
      <c r="A5" t="inlineStr"><is><t>आना (Aana)</t></is></c>
      <c r="B5"><v>4</v></c>
      <c r="C5"><f>B5*342.25</f></c>
      <c r="D5"><f>C5*0.092903</f></c>
    </row>
    <row r="6">
      <c r="A6" t="inlineStr"><is><t>पैसा (Paisa)</t></is></c>
      <c r="B6"><v>2</v></c>
      <c r="C6"><f>B6*85.5625</f></c>
      <c r="D6"><f>C6*0.092903</f></c>
    </row>
    <row r="7">
      <c r="A7" t="inlineStr"><is><t>दाम (Daam)</t></is></c>
      <c r="B7"><v>1</v></c>
      <c r="C7"><f>B7*21.3906</f></c>
      <c r="D7"><f>C7*0.092903</f></c>
    </row>
    <row r="8">
      <c r="A8" t="inlineStr"><is><t>जम्मा कुल क्षेत्रफल</t></is></c>
      <c r="C8"><f>SUM(C4:C7)</f></c>
      <c r="D8"><f>SUM(D4:D7)</f></c>
    </row>
    <row r="11">
      <c r="A11" t="inlineStr"><is><t>तराई एकाइ</t></is></c>
      <c r="B11" t="inlineStr"><is><t>संख्या</t></is></c>
      <c r="C11" t="inlineStr"><is><t>वर्गफिट (Sq.Ft)</t></is></c>
      <c r="D11" t="inlineStr"><is><t>वर्गमिटर (Sq.M)</t></is></c>
    </row>
    <row r="12">
      <c r="A12" t="inlineStr"><is><t>बिघा (Bigha)</t></is></c>
      <c r="B12"><v>0</v></c>
      <c r="C12"><f>B12*72900</f></c>
      <c r="D12"><f>C12*0.092903</f></c>
    </row>
    <row r="13">
      <c r="A13" t="inlineStr"><is><t>कट्ठा (Kattha)</t></is></c>
      <c r="B13"><v>10</v></c>
      <c r="C13"><f>B13*3645</f></c>
      <c r="D13"><f>C13*0.092903</f></c>
    </row>
    <row r="14">
      <c r="A14" t="inlineStr"><is><t>धुर (Dhur)</t></is></c>
      <c r="B14"><v>5</v></c>
      <c r="C14"><f>B14*182.25</f></c>
      <c r="D14"><f>C14*0.092903</f></c>
    </row>
    <row r="15">
      <c r="A15" t="inlineStr"><is><t>जम्मा तराई क्षेत्रफल</t></is></c>
      <c r="C15"><f>SUM(C12:C14)</f></c>
      <c r="D15"><f>SUM(D12:D14)</f></c>
    </row>
  </sheetData>
</worksheet>`;

  const zip = new JSZip();
  zip.file('[Content_Types].xml', contentTypesXml);
  zip.folder('_rels').file('.rels', relsXml);
  const xl = zip.folder('xl');
  xl.file('workbook.xml', workbookXml);
  xl.folder('_rels').file('workbook.xml.rels', wbRelsXml);
  xl.folder('worksheets').file('sheet1.xml', sheet1Xml);

  const buf = await zip.generateAsync({ type: 'nodebuffer' });
  fs.writeFileSync(path.join(downloadsDir, 'nepal-land-area-calculator.xlsx'), buf);
  console.log('✅ Generated nepal-land-area-calculator.xlsx');
}

async function main() {
  await generateBayanapattaDocx();
  await generateRentDocx();
  await generateBoundaryDocx();
  await generateFieldbookDocx();
  await generateLandExcel();
  console.log('🎉 All 5 download assets successfully created!');
}

main().catch(console.error);
