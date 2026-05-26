const R2 = 'https://pub-0fce3727bd4b426f910073f9e5070a72.r2.dev/ai%20elements';

export interface AIShowcase {
  slug: string;
  title: string;
  badge: string;
  description: string;
  thumbnail: string;
  thumbnailIsVideo: boolean;
  featured?: boolean;
  hasSound?: boolean;
  type: 'image-video' | 'portrait-scenes' | 'grid-video' | 'selfie' | 'single-video';
  // image-video
  original?: { src: string; alt: string; label: string };
  aiResult?: { src: string; isVideo?: boolean; label: string; alt?: string };
  // portrait-scenes (Alex)
  portrait?: { src: string; alt: string; label?: string };
  openingVideo?: string;
  scenarios?: { src: string; alt: string; caption: string }[];
  // grid-video
  gridImages?: { src: string; alt: string; caption: string }[];
  mainVideo?: string;
  videoCaption?: string;
  videoStyle?: 'landscape' | 'portrait';
  containImage?: boolean;
  hideFromGrid?: boolean;
  realPresentation?: { slug: string; label: string; timeCode?: string };
  categoryLink?: { href: string; label: string };
  tags?: string[];
  bodyContent?: string;
}

export const showcases: AIShowcase[] = [
  {
    slug: 'thailand',
    title: 'תמונה שהפכה לסרטון חי',
    badge: 'וידאו AI',
    description: 'הנוף מתחיל לזוז, הגלים חיים — זה מה שנוצר מתמונה אחת שהלקוח שלח. <strong>יש לכם תמונה מטיול? אנחנו יכולים לעשות בדיוק כזה.</strong>',
    thumbnail: `${R2}/thailand.mp4`,
    thumbnailIsVideo: true,
    featured: true,
    type: 'image-video',
    original: { src: `${R2}/thailand.png`, alt: 'תמונה מקורית מהלקוח — תמונת תאילנד', label: 'תמונה מקורית מהלקוח' },
    aiResult: { src: `${R2}/thailand.mp4`, isVideo: true, label: 'סרטון שנוצר בעזרת AI' },
    realPresentation: { slug: 'video-1141048032', label: 'המצגת המלאה' },
    tags: ['תמונה חיה', 'טיולים'],
    bodyContent: `כשמישהו שולח לנו תמונה מטיול ואומר "אפשר להזיז את זה?" — זו אחת השאלות האהובות עלינו. AI לא רק מוסיף אנימציה לתמונה — הוא מנתח את הסצנה, מבין אילו אלמנטים יכולים לנוע, ויוצר תנועה שנראית טבעית לחלוטין. גלים שזזים, עצים שמתנדנדים, אוויר שזורם.

התוצאה אינה סרטון מזויף — היא סרטון שנראה כאילו צולם ברגע ההוא. מצגות וידאו שמשלבות "תמונות חיות" הן מהרגעים הכי מרגשים שאנחנו יוצרים. לא צריך לצלם מחדש, לא צריך ציוד מיוחד — רק תמונה טובה ורעיון.

כל אירוע יכול לכלול רגע כזה: מצגת בר מצווה עם תמונה שחיה, מצגת יום הולדת עם זיכרון שזזה, מצגת פרישה עם רגע ישן שחוזר לחיות. שלחו לנו תמונה — נראה לכם מה אפשר לעשות איתה.`,
  },
  {
    slug: 'nadav-soccer',
    title: 'מילדות למגרש הגדול',
    badge: 'וידאו גדילה AI',
    description: 'לא עוד מצגת תמונות רגילה. אנחנו יוצרים מסע חיים קולנועי שבו הילד באמת גדל מול העיניים — <strong>מתינוק קטן ועד שחקן כדורגל מלא ביטחון.</strong>',
    thumbnail: 'https://pub-0fce3727bd4b426f910073f9e5070a72.r2.dev/ai%20soccer%20titled%20compressed.mp4',
    thumbnailIsVideo: true,
    featured: false,
    hasSound: true,
    containImage: true,
    hideFromGrid: true,
    type: 'image-video',
    original: {
      src: `${R2}/nadav-grow-4-web.jpg`,
      alt: 'תמונות מקוריות של נדב בגילאים שונים — מתינוק ועד שחקן כדורגל',
      label: 'תמונות מקוריות מהמשפחה',
    },
    aiResult: {
      src: 'https://pub-0fce3727bd4b426f910073f9e5070a72.r2.dev/ai%20soccer%20titled%20compressed.mp4',
      isVideo: true,
      label: 'סרטון גדילה שנוצר בעזרת AI',
    },
    tags: ['וידאו גדילה', 'בר מצווה', 'ספורט', 'כדורגל'],
    bodyContent: `באמצעות טכנולוגיות AI מתקדמות, אנחנו מייצרים מעברים חלקים, טבעיים וריאליסטיים בין גיל לגיל — כך שכל תנועה, מבט והבעה ממשיכים בצורה זורמת ואמינה. בלי "קפיצות", בלי עיוותים, ובלי תחושת מלאכותיות. זה בדיוק המקום שבו רואים את ההבדל בין AI מקצועי לבין אפקטים גימיקיים.

למה זה נראה אחרת? ✔️ תנועת פנים וגוף טבעית ורציפה ✔️ שמירה מדויקת על זהות הפנים לאורך כל השנים ✔️ מעברי גיל קולנועיים שמרגישים כמו סצנה מסרט ✔️ שילוב אנימציה ותנועה חכמה בין תמונות סטטיות ✔️ עריכה רגשית עם קצב, מוזיקה וסיפור אישי.

האתגר האמיתי הוא לא רק "להנפיש תמונה". הקסם קורה כשהמעבר בין הגילאים מרגיש אמיתי, זורם וטבעי — כאילו המצלמה פשוט המשיכה לצלם לאורך השנים. זה דורש התאמת זוויות מדויקת, המשכיות בתנועה ובהבעות, ובניית מעבר חכם בין תקופות. את זה לא רואים בכל מקום.

רוצים שגם הילד שלכם יעבור מסע קולנועי מרגש מילדות ועד הרגע הגדול? אנחנו נהפוך את התמונות שלכם לסיפור חי, מרגש ובלתי נשכח.`,
  },
  {
    slug: 'noia',
    title: 'טרנספורמציה — מתינוקת לנערה',
    badge: 'וידאו AI',
    description: '6 תמונות מגילאים שונים — ו-AI שיצר סרטון מעבר קסום שגרם לכולם לבכות. <strong>מושלם לפתיחת מצגת בת מצווה.</strong>',
    thumbnail: `${R2}/noia-stage.mp4`,
    thumbnailIsVideo: true,
    featured: true,
    type: 'image-video',
    videoStyle: 'portrait',
    original: { src: `${R2}/Noia-overlay.png`, alt: '6 תמונות של נויה בגילאים שונים', label: '6 תמונות מקוריות מהמשפחה' },
    aiResult: { src: `${R2}/noia-stage.mp4`, isVideo: true, label: 'סרטון טרנספורמציה שנוצר בעזרת AI' },
    realPresentation: { slug: 'video-1155967673', label: 'מצגת הבת מצווה של נויה' },
    tags: ['תמונה חיה', 'טרנספורמציה', 'בת מצווה'],
    bodyContent: `שדרוג ה-AI הזה הוא אחד הפופולריים ביותר למצגות בת מצווה ובר מצווה. מכניסים 4–6 תמונות של הילד או הילדה בגילאים שונים — ו-AI יוצר סרטון מעבר קולנועי שמראה את המסע מגיל תינוקות ועד היום.

הסרטון מתחבר ישירות לרגש הליבה של האירוע: "הנה כמה גדלת." כשהוא מוקרן, האולם שותק. הורים בוכים. זו לא גימיק — זה סיפור שמופיע בדיוק ברגע הנכון.

לא צריך תמונות מקצועיות — תמונות רגילות מהנייד, מהאלבום הישן, אפילו מסריקה של תמונה מודפסת. אנחנו מטפלים בהכל. רק תביאו את הגילאים — אנחנו נבנה את הסיפור.`,
  },
  {
    slug: 'alex',
    title: 'אלכס — מה יקרה אחרי הפרישה?',
    badge: 'תמונות AI',
    description: 'מתמונה אחת — שלושה עולמות דמיוניים שגרמו לכל האולם לצחוק. <strong>יודעים כבר מה עושה הגיבור שלכם אחרי הפרישה?</strong>',
    thumbnail: `${R2}/alex-opening.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'portrait-scenes',
    portrait: { src: `${R2}/alex.png`, alt: 'תמונה מקורית של אלכס', label: 'תמונה מקורית מהמשפחה' },
    openingVideo: `${R2}/alex-opening.mp4`,
    scenarios: [
      { src: `${R2}/alex-3.jpg`, alt: 'אלכס בשדות האורז — תמונת AI', caption: '🌾 לעבוד בשדות האורז' },
      { src: `${R2}/alex-1.jpg`, alt: 'אלכס במדיטציה — תמונת AI', caption: '🧘 לעשות מדיטציה' },
      { src: `${R2}/alex-2.jpg`, alt: 'אלכס בקזינו — תמונת AI', caption: '🎰 להמר בקזינו' },
    ],
    realPresentation: { slug: 'video-1156459544', label: 'מצגת הפרישה של אלכס' },
    tags: ['תמונות AI', 'פרישה'],
    bodyContent: `אחד האתגרים הכיפיים שיש לנו הוא "מה יעשה X אחרי הפרישה?" — כשמשפחה יודעת שהגיבור שנא את העבודה ורצה תמיד לטייל, אנחנו שמים אותו שם. בכל מקום שחלמת. בשדות האורז של תאילנד. מדיטציה ביפן. אפילו בקזינו.

AI בונה את הסצנות האלה מתמונה אחת, ואנחנו משלבים אותן במצגת הפרישה כמקשה אחת שגורמת לכל האולם לצחוק — ולגיבור לבכות. מצגות פרישה עם שדרוגי AI של סצנות דמיוניות הן מהמבוקשות ביותר שאנחנו מייצרים.

לא צריך תמונות מיוחדות — תמונה ישנה עובדת נפלא. רק ספרו לנו על האיש, ואנחנו נמצא לו את ההרפתקה המתאימה.`,
  },
  {
    slug: 'football',
    title: 'סלפי עם כוכבי כדורגל',
    badge: 'תמונות + וידאו AI',
    description: 'מ-6 תמונות נפרדות — AI יצר סלפי קבוצתי שהפך לסרטון חי. <strong>הכוכב שלכם מעריץ מישהו? אנחנו יכולים לשים אותו לידו.</strong>',
    thumbnail: `${R2}/football.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'grid-video',
    gridImages: [
      { src: `${R2}/football%20players.png`, alt: '6 תמונות מקוריות של שחקני כדורגל', caption: '📸 6 תמונות מקוריות' },
      { src: `${R2}/football-photo.png`, alt: 'סלפי קבוצתי עם כוכבי כדורגל', caption: '🤳 סלפי קבוצתי עם AI' },
    ],
    mainVideo: `${R2}/football.mp4`,
    videoCaption: '🎬 וידאו סלפי חי — שנוצר בעזרת AI',
    videoStyle: 'landscape',
    tags: ['סלפי', 'תמונות AI', 'בר מצווה', 'ספורט'],
    bodyContent: `מצגות בר מצווה שמשלבות "סלפי עם כוכב" הן אחד הדברים שהכי מבקשים ממנו בשנים האחרונות. הילד מעריץ מישהו? לא משנה מי — רונאלדו, מסי, מבאפה, שחקנים מהליגה הישראלית — AI מאחד תמונות נפרדות לסלפי אמין ומשכנע.

אחר כך הופכים את הסלפי לסרטון חי — התמונה מתחילה לזוז, הפנים מחייכות, האוויר זורם. כשזה מוקרן באולם, התגובה אחידה: צרחות. הסלפי הזה מרגיש אמיתי כי AI בנה אותו נכון — האור תואם, הפרופורציות תואמות, לא נראה כמו קולאז'.

שלחו לנו תמונה של הילד ואת שם הכוכב שהוא הכי אוהב — אנחנו נראה לכם מה אפשר לעשות.`,
  },
  {
    slug: 'wicked',
    title: 'ביקור בסט Wicked ו-Harry Potter',
    badge: 'תמונות AI',
    description: 'מתמונה אחת — AI שילב את הילדה בסטים של הסרטים האהובים עליה. <strong>איזה סרט או עולם הילד שלכם הכי אוהב?</strong>',
    thumbnail: `${R2}/meet%20your%20favorite%20actor.png`,
    thumbnailIsVideo: false,
    featured: false,
    type: 'selfie',
    portrait: { src: `${R2}/shai.png`, alt: 'תמונה מקורית של שי', label: 'תמונה מקורית' },
    aiResult: { src: `${R2}/meet%20your%20favorite%20actor.mp4`, isVideo: true, alt: 'שי בסט הצילומים של Wicked ו-Harry Potter', label: '✨ AI הביא אותה לסט' },
    tags: ['תמונות AI', 'סלפי', 'בת מצווה', 'קולנוע'],
    bodyContent: `כשילדה אוהבת סרט מסוים עד כדי כך שהיא מכירה כל שיר ומשפט — אנחנו מכניסים אותה פנימה. לסט של Wicked, לאולם הגדול של Hogwarts, לכל עולם שהיא חולמת עליו.

מתמונה אחת, AI בונה תמונה שנראית כאילו היא ממש שם. זה לא מונטאז' פשוט — זו קומפוזיציה שמשלבת את האור, הצל, והפרופורציות נכון כדי שהתוצאה תיראה אמיתית. כשזה מוקרן, כולם שואלים: "איפה צילמתם את זה?"

שדרוג כזה מתאים במיוחד למצגות בת מצווה ובר מצווה — רגע שגורם לגיבור האירוע להרגיש שהוא חי את החלום שלו, ממש על המסך. ספרו לנו איזה עולם הילד שלכם הכי אוהב.`,
  },
  {
    slug: 'paris',
    title: 'מתל אביב לפריז — בשנייה אחת',
    badge: 'וידאו AI',
    description: 'נער יושב על ספסל בתל אביב — AI הפך אותו לסיטואציה מפתיעה בפריז. <strong>שלחו לנו תמונה — נשלח אתכם לכל מקום בעולם.</strong>',
    thumbnail: `${R2}/paris.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'image-video',
    original: { src: `${R2}/paris.jpeg`, alt: 'נער יושב על ספסל בתל אביב', label: '📍 ספסל בתל אביב' },
    aiResult: { src: `${R2}/paris.mp4`, isVideo: true, label: '🗼 פריז — שנוצר בעזרת AI' },
    realPresentation: { slug: 'video-1135018876', label: 'המצגת המלאה' },
    tags: ['תמונה חיה', 'בר מצווה'],
    bodyContent: `"שלחו לנו תמונה ונשלח אתכם לכל מקום בעולם" — זה לא סיסמה, זה מה שאנחנו עושים. מתמונה רגילה שצולמה על הספסל הכי שגרתי, AI יכול להציב את הילד שלכם בכיכר האייפל בפריז, ברחובות טוקיו, על גדות הנילוס, ובעשרות מקומות אחרים בעולם.

הטכניקה עובדת כל כך טוב כי AI לא פשוט "מדביק" — הוא בונה את כל הסצנה מחדש עם האור הנכון, הצל הנכון, והפרופורציות הנכונות. התוצאה נראית אמיתית לגמרי.

מושלם למצגות בר מצווה עם נושא טיולים, למצגות פרישה, ולכל מי שתמיד חלם לבקר במקום מסוים. שלחו תמונה ואמרו לנו לאן — אנחנו נגיע שם.`,
  },
  {
    slug: 'singers',
    title: 'סלפי עם הזמרות האהובות',
    badge: 'תמונות + וידאו AI',
    description: 'מ-3 תמונות נפרדות — AI יצר סלפי שגרם לכולם לצרוח מרוב התרגשות. <strong>מי הזמר או הזמרת שהילדה שלכם הכי מעריצה?</strong>',
    thumbnail: `${R2}/singer%20video.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'grid-video',
    gridImages: [
      { src: `${R2}/singer%20photos.png`, alt: 'נערה עם 3 זמרות מפורסמות', caption: '📸 תמונות מקוריות' },
      { src: `${R2}/singer-post.png`, alt: 'סלפי משותף עם זמרות', caption: '🤳 סלפי משותף עם AI' },
    ],
    mainVideo: `${R2}/singer%20video.mp4`,
    videoCaption: '🎬 וידאו סלפי חי — שנוצר בעזרת AI',
    videoStyle: 'portrait',
    tags: ['סלפי', 'תמונות AI', 'בת מצווה', 'מוסיקה'],
    bodyContent: `לא כל ילדה מעריצה כדורגלנים — חלקן מעריצות זמרות. ויש לנו גם פתרון לזה. AI לוקח תמונה של הילדה ותמונות של הזמרת או הזמר האהוב, ובונה סלפי משותף שנראה כאילו צולם ביחד — ואז הופך אותו לסרטון חי.

כשזה עולה במצגת בת מצווה, התגובה היא בדרך כלל צרחה אחת ארוכה מכל הנערות באולם. ואז מחיאות כפיים. ואז כולן רוצות לדעת "מה זה ואיך עושים את זה?"

אנחנו עובדים עם זמרים מכל הסוגים — ישראלים, בינלאומיים, יוטיוברים, אינפלואנסרים. כל עוד יש תמונות טובות, AI יכול לבנות את הרגע הזה. ספרו לנו מי הכוכבת האהובה.`,
  },
  {
    slug: 'ronaldo',
    title: 'רונלדו מברך את שגיא',
    badge: 'וידאו AI',
    hasSound: true,
    description: 'רונלדו אומר "מזל טוב לשגיא" — האולם פוצץ. <strong>רוצים ברכה מהכוכב האהוב? שלחו לנו שם.</strong>',
    thumbnail: `${R2}/ronaldo%20blessing.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'single-video',
    mainVideo: `${R2}/ronaldo%20blessing.mp4`,
    videoCaption: '⚽ ברכה מרונלדו — שנוצרה בעזרת AI',
    videoStyle: 'portrait',
    realPresentation: { slug: 'video-1119001336', label: 'מצגת הבר מצווה של שגיא', timeCode: '9:20' },
    tags: ['ברכה מכוכב', 'בר מצווה', 'ספורט'],
    bodyContent: `ברכות AI מכוכבי ספורט הן אחד הדברים שהכי עושים רעש באולמות. הסיבה פשוטה: זה נשמע אמיתי. הילד שמע את הכוכב האהוב אומר את שמו — ועצר להקשיב.

AI מייצר קול שמשלב את הסגנון, ההגייה, ואפילו המבטא של הכוכב — ביחד עם שמו האישי של הילד. התוצאה היא שניות בודדות שבהן האולם עוצר נשימה. אנשים מביטים בעיניים גדולות ושואלים "האם זה אמיתי?"

שדרוג הברכה מתאים במיוחד למצגות בר מצווה ואולמות גדולים. מתאים לכל כוכב ספורט, זמר, או דמות שהילד מעריץ. שלחו לנו שם — אנחנו נביא את הברכה.`,
  },
  {
    slug: 'golden-wedding',
    title: 'חתונת הזהב של מירי ויוסי',
    badge: 'וידאו AI',
    description: 'תמונה ישנה מהחתונה — ו-AI החיה אותה לסרטון קסום. <strong>גם אתם יכולים לשחזר את רגעי הקסם מהחתונה שלכם, כל מה שאנחנו צריכים זה תמונה ישנה.</strong>',
    thumbnail: `${R2}/wedding-movie.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'image-video',
    original: { src: `${R2}/wedding-photo.jpg`, alt: 'תמונה מקורית מחתונת מירי ויוסי', label: 'תמונה מקורית מהחתונה' },
    aiResult: { src: `${R2}/wedding-movie.mp4`, isVideo: true, label: 'סרטון שנוצר בעזרת AI' },
    categoryLink: { href: '/מצגות/wedding', label: 'גלריית מצגות חתונות' },
    tags: ['תמונה חיה', 'חתונה'],
    bodyContent: `תמונה ישנה — 50 שנה ויותר — יש בה קסם שאף תמונה חדשה לא יכולה להחזיר. כשאנחנו מקבלים תמונה כזו ומפיחים בה חיים, לא רק שהיא זזה — היא חוזרת לחיות.

AI משחזר את הרגש: מוסיף תנועה עדינה לבגדים, לשיער, לאוויר — ומייצר רגע שגרם לזוגות שחגגו חתונת כסף, זהב, ויובל לבכות ולצחוק בו זמנית. מצגות חתונה שמשלבות תמונות חיות ישנות הן מהיפות והמרגשות ביותר שאנחנו יוצרים.

לא צריך תמונה באיכות גבוהה — אפילו תמונה סרוקה מאלבום ישן עובדת. שלחו לנו מה שיש, ואנחנו נחיה אותה.`,
  },
  {
    slug: 'alon-astronaut',
    title: 'אלון — סלפי עם צוות ארטמיס 2 וברכה מהחלל',
    badge: 'תמונות + וידאו AI',
    hasSound: true,
    description: 'שתי סצנות AI שעצרו את הנשימה: תמונה עם האסטרונאוטים של ארטמיס 2 — וברכת מזל טוב ישירות מהחלל. <strong>הילד שלכם חולם על משהו? אנחנו נשים אותו שם.</strong>',
    thumbnail: `${R2}/alon%20astronaut.png`,
    thumbnailIsVideo: false,
    featured: false,
    type: 'grid-video',
    gridImages: [
      { src: `${R2}/alon%20astronaut.png`, alt: 'אלון עם צוות ארטמיס 2 — תמונת AI', caption: '🚀 אלון עם צוות ארטמיס 2' },
    ],
    mainVideo: `${R2}/alon-blessing-compressed.mp4`,
    videoCaption: '👨‍🚀 ברכה מהאסטרונאוטים — שנוצרה בעזרת AI',
    videoStyle: 'portrait',
    realPresentation: { slug: '1183711457', label: 'מצגת הבר מצווה של אלון' },
    tags: ['תמונות AI', 'ברכה מכוכב', 'בר מצווה', 'חלל'],
  },
  {
    slug: 'mbappe-alon',
    title: 'מבאפה מברך את אלון — VAMOS ריאל מדריד',
    badge: 'וידאו AI',
    hasSound: true,
    description: 'אלון אוהד ריאל מדריד, ומבאפה אמר לו ישירות "VAMOS אלון". האולם התפוצץ. <strong>מי הכוכב שהבן שלכם הכי מעריץ?</strong>',
    thumbnail: `${R2}/vamos-alon-compressed.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'single-video',
    mainVideo: `${R2}/vamos-alon-compressed.mp4`,
    videoCaption: '⚽ ברכה ממבאפה — שנוצרה בעזרת AI',
    videoStyle: 'portrait',
    realPresentation: { slug: '1183711457', label: 'מצגת הבר מצווה של אלון' },
    tags: ['ברכה מכוכב', 'בר מצווה', 'ספורט', 'כדורגל'],
  },
  {
    slug: 'army-friends',
    title: 'שמוליק חוגג 70 — הרגע עם חברי הצבא',
    badge: 'וידאו AI',
    description: 'המשפחה בחרה להנפיש את הרגע עם החברים שאיתו עד עצם היום הזה. <strong>יש לכם תמונה ישנה שמספרת סיפור? אנחנו נחיה אותה.</strong>',
    thumbnail: `${R2}/army-movie.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'image-video',
    original: { src: `${R2}/army-photo.jpg`, alt: 'תמונה מקורית של שמוליק עם חברי הצבא', label: 'תמונה מקורית מהצבא' },
    aiResult: { src: `${R2}/army-movie.mp4`, isVideo: true, label: 'סרטון שנוצר בעזרת AI' },
    categoryLink: { href: '/מצגות/birthday', label: 'גלריית מצגות ימי הולדת' },
    tags: ['תמונה חיה', 'יום הולדת'],
    bodyContent: `לפעמים התמונה הכי חשובה באלבום היא הישנה ביותר. תמונה מהצבא, מה"חבורה" של פעם — שמוצאת את דרכה לשנות ה-40, 50, 60. AI מחיה אותה: מוסיף תנועה עדינה לפנים, לרקע, לפרטים הקטנים.

מה שהיה תמונת זיכרון הופך לרגע שחי שוב. כשמשפחה מביאה לנו תמונה כזו ואומרת "הכי חשוב לנו שהוא יזכור את החברים שלו" — אנחנו יודעים בדיוק מה לעשות.

שדרוג "תמונה חיה" מתמונה ישנה מתאים במיוחד למצגות יום הולדת עגול — 50, 60, 70 — ולמצגות פרישה. לא צריך תמונה חדה: גם תמונה ישנה ומעט מטושטשת, AI יכול להחיות.`,
  },
  {
    slug: 'world-travel',
    title: 'יצאת לפנסיה — הגיע הזמן לטייל בעולם',
    badge: 'וידאו AI',
    description: 'מגדל פיזה, החומה הסינית, לונדון, ניו יורק — מתמונה אחת. <strong>לאיפה הפורש שלכם תמיד חלם לנסוע?</strong>',
    thumbnail: `${R2}/world-places.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'single-video',
    mainVideo: `${R2}/world-places.mp4`,
    videoCaption: '🌍 כל העולם — מתמונה אחת שהמשפחה שלחה',
    videoStyle: 'portrait',
    tags: ['תמונות AI', 'פרישה'],
    bodyContent: `כשמישהו יוצא לפרישה ומשפחתו שואלת "מה הוא הכי אוהב?" — התשובה שאנחנו שומעים הכי הרבה היא "לטייל". אז לוקחים תמונה אחת שלו, ומניחים אותו בכמה המקומות שתמיד רצה לבקר בהם. מגדל פיזה, החומה הסינית, רובעי פריז, ניו יורק.

כל "ביקור" הופך לסרטון חי קצר, ואנחנו מחברים אותם למצגת פרישה שמראה: עכשיו הזמן שלך. מצגות AI לפרישה מהסגנון הזה הן מהמרגשות ביותר שאנחנו מייצרים — הן לא רק מצחיקות, הן גורמות לפורש להרגיש שמישהו באמת הקשיב לו.

שלחו לנו תמונה של הפורש וספרו לנו לאיפה הוא תמיד רצה לנסוע — אנחנו נבנה לו את הטיול.`,
  },
];
