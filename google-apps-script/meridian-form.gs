// ═══════════════════════════════════════════════════════════════════════════════
// MERIDIAN AI — Google Apps Script
// Voices in Two Worlds | Code-Switching Recording Project
// ═══════════════════════════════════════════════════════════════════════════════
//
// HOW TO SET UP (follow in order):
//
//  1. Go to https://script.google.com → New Project → paste this entire file.
//  2. Run  setup()  once (click ▶ Run, select "setup").
//     This creates the Google Form + Spreadsheet + all 44 sheets automatically.
//  3. After running setup(), open the logged URLs from Execution Log.
//  4. Deploy as Web App:
//       → Click "Deploy" → "New Deployment"
//       → Type: Web App
//       → Execute as: Me
//       → Who has access: Anyone
//       → Click Deploy → Copy the Web App URL
//  5. Paste that URL into Careers.tsx as the value of  GAS_ENDPOINT.
//  6. Re-deploy whenever you change the script (Manage Deployments → Edit).
//
// ═══════════════════════════════════════════════════════════════════════════════

var WHATSAPP_LINK = 'https://chat.whatsapp.com/KKqL8fhVKZQHWdS44QNKY7?mode=hqctcla';
var SPREADSHEET_NAME = 'Meridian AI — Voices Project Responses';
var FORM_TITLE       = 'Voices in Two Worlds — Code-Switching Recording Project | Freelancer Application';

// Sheet names — uppercase LANGUAGE-COUNTRY format
var SHEET_NAMES = [
  'ARABIC-UAE',
  'ARABIC-SAUDI ARABIA',
  'ARABIC DARIJA-FRANCE',
  'CATALAN-SPAIN',
  'CHINESE SIMPLIFIED-CHINA',
  'CHINESE TRADITIONAL-HONG KONG',
  'CHINESE TRADITIONAL-TAIWAN',
  'DANISH-DENMARK',
  'DUTCH-NETHERLANDS',
  'FINNISH-FINLAND',
  'FRENCH-CANADA',
  'FRENCH-FRANCE',
  'GERMAN-GERMANY',
  'SWISS GERMAN-SWITZERLAND AUSTRIA',
  'HEBREW-ISRAEL',
  'HINDI-INDIA',
  'ITALIAN-ITALY',
  'JAPANESE-JAPAN',
  'KOREAN-SOUTH KOREA',
  'MALAY-MALAYSIA',
  'NORWEGIAN-NORWAY',
  'PORTUGUESE-BRAZIL',
  'PORTUGUESE-PORTUGAL',
  'RUSSIAN-RUSSIA',
  'SPANISH-SPAIN',
  'SPANISH-UNITED STATES',
  'SWEDISH-SWEDEN',
  'TAGALOG FILIPINO-PHILIPPINES',
  'TAMIL-INDIA',
  'THAI-THAILAND',
  'TURKISH-TURKEY',
  'VIETNAMESE-VIETNAM',
  'ARABIC DARIJA + FRENCH-FRANCE',
  'FRENCH + GERMAN-FRANCE GERMANY',
  'ITALIAN + SWISS AUSTRIAN GERMAN',
  'SPANISH + BASQUE-SPAIN',
  'SPANISH + CATALAN-SPAIN',
  'LB01 NORWEGIAN + ENGLISH',
  'LB01 DANISH + ENGLISH',
  'LB01 CHINESE SIMPLIFIED + ENGLISH',
  'LB01 CHINESE TRADITIONAL TAIWAN + ENGLISH',
  'LB01 CHINESE TRADITIONAL HONG KONG + ENGLISH',
  'LB01 KOREAN + ENGLISH',
];

// Map: form dropdown value  →  sheet name
var LANGUAGE_SHEET_MAP = {
  'Arabic (UAE)'                          : 'ARABIC-UAE',
  'Arabic (Saudi Arabia)'                 : 'ARABIC-SAUDI ARABIA',
  'Arabic spoken in France (Darija)'      : 'ARABIC DARIJA-FRANCE',
  'Catalan (Spain)'                       : 'CATALAN-SPAIN',
  'Chinese Simplified (China)'            : 'CHINESE SIMPLIFIED-CHINA',
  'Chinese Traditional (Hong Kong)'       : 'CHINESE TRADITIONAL-HONG KONG',
  'Chinese Traditional (Taiwan)'          : 'CHINESE TRADITIONAL-TAIWAN',
  'Danish (Denmark)'                      : 'DANISH-DENMARK',
  'Dutch (Netherlands)'                   : 'DUTCH-NETHERLANDS',
  'Finnish (Finland)'                     : 'FINNISH-FINLAND',
  'French (Canada)'                       : 'FRENCH-CANADA',
  'French (France)'                       : 'FRENCH-FRANCE',
  'German (Germany)'                      : 'GERMAN-GERMANY',
  'Swiss German (Switzerland / Austria)'  : 'SWISS GERMAN-SWITZERLAND AUSTRIA',
  'Hebrew (Israel)'                       : 'HEBREW-ISRAEL',
  'Hindi (India)'                         : 'HINDI-INDIA',
  'Italian (Italy)'                       : 'ITALIAN-ITALY',
  'Japanese (Japan)'                      : 'JAPANESE-JAPAN',
  'Korean (South Korea)'                  : 'KOREAN-SOUTH KOREA',
  'Malay (Malaysia)'                      : 'MALAY-MALAYSIA',
  'Norwegian (Norway)'                    : 'NORWEGIAN-NORWAY',
  'Portuguese (Brazil)'                   : 'PORTUGUESE-BRAZIL',
  'Portuguese (Portugal)'                 : 'PORTUGUESE-PORTUGAL',
  'Russian (Russia)'                      : 'RUSSIAN-RUSSIA',
  'Spanish (Spain)'                       : 'SPANISH-SPAIN',
  'Spanish (United States)'               : 'SPANISH-UNITED STATES',
  'Swedish (Sweden)'                      : 'SWEDISH-SWEDEN',
  'Tagalog / Filipino (Philippines)'      : 'TAGALOG FILIPINO-PHILIPPINES',
  'Tamil (India)'                         : 'TAMIL-INDIA',
  'Thai (Thailand)'                       : 'THAI-THAILAND',
  'Turkish (Turkey)'                      : 'TURKISH-TURKEY',
  'Vietnamese (Vietnam)'                  : 'VIETNAMESE-VIETNAM',
};

var HEADERS = [
  'Timestamp', 'Full Name', 'Email Address', 'WhatsApp / Phone',
  'Country of Residence', 'Native Language', 'Secondary Language',
  'Code-Switching Comfort', 'Language Proficiency', 'Recording Partner',
  'Recording Setup', 'Previous Recording Experience', 'Additional Comments',
  'Source', 'Sheet Matched',
];

// ═══════════════════════════════════════════════════════════════════════════════
// STEP 1 — Run this once to create everything
// ═══════════════════════════════════════════════════════════════════════════════
function setup() {
  var ss = createSpreadsheet_();
  var form = createForm_(ss);
  Logger.log('✅ Spreadsheet: ' + ss.getUrl());
  Logger.log('✅ Form: ' + form.getPublishedUrl());
  Logger.log('✅ Setup complete. Now deploy this script as a Web App (see instructions at top of file).');
}

// ─── Create Spreadsheet ────────────────────────────────────────────────────────
function createSpreadsheet_() {
  var ss = SpreadsheetApp.create(SPREADSHEET_NAME);

  // Rename default sheet to "All Responses"
  var master = ss.getSheets()[0];
  master.setName('All Responses');
  applyHeaders_(master);

  // Create all 43 language sheets
  SHEET_NAMES.forEach(function(name) {
    var sh = ss.insertSheet(name);
    applyHeaders_(sh);
  });

  return ss;
}

function applyHeaders_(sheet) {
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setFontWeight('bold')
             .setBackground('#112D4E')
             .setFontColor('#F9F7F7')
             .setFontFamily('Roboto Mono')
             .setFontSize(9);
  sheet.setFrozenRows(1);
  sheet.setColumnWidths(1, HEADERS.length, 160);
}

// ═══════════════════════════════════════════════════════════════════════════════
// STEP 2 — Create the Google Form
// ═══════════════════════════════════════════════════════════════════════════════
function createForm_(ss) {
  var form = FormApp.create(FORM_TITLE);
  form.setDescription(
    'We are collecting authentic, natural conversations where participants switch between two languages. ' +
    'This is a part-time, fully remote opportunity with flexible working hours. ' +
    'Please complete this short form so we can match you with the right project. ' +
    'We will reach out if your profile is a strong fit.'
  );
  form.setConfirmationMessage(
    'Your application has been received. We will review your profile and contact you directly if there is a match. ' +
    'Thank you for your time — have a great day!'
  );
  form.setLimitOneResponsePerUser(false);

  // ── SECTION 1: Personal Information ───────────────────────────────────────
  form.addSectionHeaderItem()
      .setTitle('Section 1 — Personal Information');

  form.addTextItem()
      .setTitle('Full Name')
      .setRequired(true);

  form.addTextItem()
      .setTitle('Primary Email Address')
      .setRequired(true);

  form.addTextItem()
      .setTitle('WhatsApp or Mobile Number')
      .setHelpText('Include country code, e.g. +91XXXXXXXXXX')
      .setRequired(true);

  // Country dropdown
  var countryItem = form.addListItem();
  countryItem.setTitle('Current Country of Residence').setRequired(true);
  var countries = getCountries_();
  countryItem.setChoiceValues(countries);

  // ── SECTION 2: Language & Project Eligibility ──────────────────────────────
  form.addPageBreakItem()
      .setTitle('Section 2 — Language & Project Eligibility');

  form.addSectionHeaderItem()
      .setTitle('About This Project')
      .setHelpText(
        'This project involves recording natural conversations where two people switch between a main language ' +
        'and a secondary language. Each session is approximately 10 minutes, conducted remotely in pairs, with ' +
        'clean audio and no background noise. Conversations will cover topics in Banking, Healthcare, and Travel.'
      );

  // Native language
  var nativeLang = form.addListItem();
  nativeLang.setTitle('Select Your Native / Main Language').setRequired(true);
  nativeLang.setChoiceValues([
    'Arabic (UAE)', 'Arabic (Saudi Arabia)', 'Arabic spoken in France (Darija)',
    'Catalan (Spain)', 'Chinese Simplified (China)', 'Chinese Traditional (Hong Kong)',
    'Chinese Traditional (Taiwan)', 'Danish (Denmark)', 'Dutch (Netherlands)',
    'Finnish (Finland)', 'French (Canada)', 'French (France)', 'German (Germany)',
    'Swiss German (Switzerland / Austria)', 'Hebrew (Israel)', 'Hindi (India)',
    'Italian (Italy)', 'Japanese (Japan)', 'Korean (South Korea)', 'Malay (Malaysia)',
    'Norwegian (Norway)', 'Portuguese (Brazil)', 'Portuguese (Portugal)', 'Russian (Russia)',
    'Spanish (Spain)', 'Spanish (United States)', 'Swedish (Sweden)',
    'Tagalog / Filipino (Philippines)', 'Tamil (India)', 'Thai (Thailand)',
    'Turkish (Turkey)', 'Vietnamese (Vietnam)',
  ]);

  // Secondary language
  var secLang = form.addListItem();
  secLang.setTitle('Select Your Secondary / Fluent Language')
         .setHelpText('Select English unless you are applying for a cross-language pair.')
         .setRequired(true);
  secLang.setChoiceValues([
    'English', 'French (European)', 'German (Standard)',
    'Swiss-Austrian German', 'Catalan', 'Basque',
  ]);

  // Code-switching comfort
  form.addMultipleChoiceItem()
      .setTitle('Do you naturally switch between your two languages in daily conversations?')
      .setRequired(true)
      .setChoiceValues(['Yes, regularly', 'Sometimes', 'Rarely']);

  // Proficiency
  form.addMultipleChoiceItem()
      .setTitle('Which best describes your English or secondary language proficiency?')
      .setRequired(true)
      .setChoiceValues(['Fluent / Near-Native', 'Advanced', 'Intermediate or below']);

  // Recording partner
  form.addMultipleChoiceItem()
      .setTitle('Do you already have a recording partner who meets the same language criteria?')
      .setRequired(true)
      .setChoiceValues(['Yes, I have a partner', 'No, I need to be paired']);

  // Previous recording experience
  form.addMultipleChoiceItem()
      .setTitle('Have you previously worked on any recording or voice data collection project?')
      .setRequired(true)
      .setChoiceValues(['Yes, professionally', 'Yes, as a freelancer', 'No, this is my first time']);

  // Recording setup — checkbox grid
  var setupGrid = form.addCheckboxItem();
  setupGrid.setTitle('Recording Setup — Please confirm what you have access to')
           .setRequired(true)
           .setChoiceValues([
             'A dedicated microphone (USB, external, or headset)',
             'A quiet and noise-free recording environment',
             'A stable internet connection',
           ]);

  // ── SECTION 3: Final Step & Community ─────────────────────────────────────
  form.addPageBreakItem()
      .setTitle('Section 3 — Final Step & Community');

  form.addSectionHeaderItem()
      .setTitle('Confirmation')
      .setHelpText(
        'Thank you for completing this form. By submitting, you confirm that all information provided is accurate, ' +
        'that you are a native speaker of your selected main language, and that you understand payment details will ' +
        'be shared once the project commences. Non-native speakers and recordings with background noise will not be accepted.'
      );

  // Confirmation checkbox
  form.addCheckboxItem()
      .setTitle('I confirm all information above is accurate and I meet the language requirements')
      .setRequired(true)
      .setChoiceValues(['Yes, I confirm']);

  // Optional open text
  form.addTextItem()
      .setTitle('Anything else you\'d like to share?')
      .setHelpText('Optional')
      .setRequired(false);

  // Community note
  form.addSectionHeaderItem()
      .setTitle('Join Our Freelancer Community')
      .setHelpText(
        '📲 Join our Freelancer Community on WhatsApp to stay updated on project launches, rates, and guidelines: ' +
        WHATSAPP_LINK + '\n\nWe look forward to working with you.'
      );

  // Link form to spreadsheet
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // Add onFormSubmit trigger
  ScriptApp.newTrigger('onGoogleFormSubmit')
           .forForm(form)
           .onFormSubmit()
           .create();

  return form;
}

// ═══════════════════════════════════════════════════════════════════════════════
// TRIGGER — Fires on every Google Form submission
// ═══════════════════════════════════════════════════════════════════════════════
function onGoogleFormSubmit(e) {
  var response   = e.response;
  var timestamp  = response.getTimestamp();
  var answers    = response.getItemResponses();

  // Extract answers by question title
  var data = {};
  answers.forEach(function(ir) {
    data[ir.getItem().getTitle()] = ir.getResponse();
  });

  var nativeLang = data['Select Your Native / Main Language'] || '';
  var targetSheet = LANGUAGE_SHEET_MAP[nativeLang] || null;

  var row = [
    timestamp,
    data['Full Name']                               || '',
    data['Primary Email Address']                   || '',
    data['WhatsApp or Mobile Number']               || '',
    data['Current Country of Residence']            || '',
    nativeLang,
    data['Select Your Secondary / Fluent Language'] || '',
    data['Do you naturally switch between your two languages in daily conversations?'] || '',
    data['Which best describes your English or secondary language proficiency?']       || '',
    data['Do you already have a recording partner who meets the same language criteria?'] || '',
    (Array.isArray(data['Recording Setup — Please confirm what you have access to'])
      ? data['Recording Setup — Please confirm what you have access to'].join(', ')
      : data['Recording Setup — Please confirm what you have access to']) || '',
    data['Have you previously worked on any recording or voice data collection project?'] || '',
    data["Anything else you'd like to share?"] || '',
    'Google Form',
    targetSheet ? targetSheet : 'No Match — Review Required',
  ];

  var ss     = getSpreadsheet_();
  var master = ss.getSheetByName('All Responses');
  master.appendRow(row);

  if (targetSheet) {
    var langSheet = ss.getSheetByName(targetSheet);
    if (langSheet) { langSheet.appendRow(row); }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// WEB APP — Receives POST from the Meridian AI website form
// ═══════════════════════════════════════════════════════════════════════════════
function doPost(e) {
  try {
    var p  = e.parameter;
    var ts = p.submittedAt ? new Date(p.submittedAt) : new Date();

    var nativeLang  = p.nativeLanguage || '';
    var targetSheet = LANGUAGE_SHEET_MAP[nativeLang] || null;

    var row = [
      ts,
      p.fullName            || '',
      p.email               || '',
      p.phone               || '',
      p.country             || '',
      nativeLang,
      p.secondaryLanguage   || '',
      '',   // code-switching comfort — not collected on website form
      '',   // proficiency
      '',   // recording partner
      '',   // recording setup
      p.previousExperience  || '',
      '',   // additional comments
      p.source              || 'Website Form',
      targetSheet ? targetSheet : 'No Match — Review Required',
    ];

    var ss     = getSpreadsheet_();
    var master = ss.getSheetByName('All Responses');
    master.appendRow(row);

    if (targetSheet) {
      var langSheet = ss.getSheetByName(targetSheet);
      if (langSheet) { langSheet.appendRow(row); }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Meridian AI — Submission endpoint is active.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// ─── Helper — find the spreadsheet by script properties ───────────────────────
function getSpreadsheet_() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (id) return SpreadsheetApp.openById(id);

  // Fallback: search by name (slower, use only if properties not set)
  var files = DriveApp.getFilesByName(SPREADSHEET_NAME);
  if (files.hasNext()) return SpreadsheetApp.open(files.next());
  throw new Error('Spreadsheet not found. Run setup() first.');
}

// ─── Helper — save spreadsheet ID to script properties ────────────────────────
// Called automatically inside createForm_() via the existing ss reference.
// If you need to re-link manually, run this function once.
function saveSpreadsheetId() {
  var files = DriveApp.getFilesByName(SPREADSHEET_NAME);
  if (files.hasNext()) {
    var id = files.next().getId();
    PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', id);
    Logger.log('Saved SPREADSHEET_ID: ' + id);
  }
}

// ─── Full country list ─────────────────────────────────────────────────────────
function getCountries_() {
  return [
    'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda',
    'Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain',
    'Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia',
    'Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso',
    'Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic',
    'Chad','Chile','China','Colombia','Comoros','Congo (Brazzaville)','Congo (DRC)',
    'Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti',
    'Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea',
    'Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon',
    'Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea',
    'Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia',
    'Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan',
    'Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho',
    'Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi',
    'Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius',
    'Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco',
    'Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand',
    'Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman',
    'Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru',
    'Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda',
    'Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines',
    'Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia',
    'Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands',
    'Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan',
    'Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania',
    'Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey',
    'Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom',
    'United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela',
    'Vietnam','Yemen','Zambia','Zimbabwe',
  ];
}
