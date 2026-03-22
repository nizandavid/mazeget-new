const R2 = 'https://pub-0fce3727bd4b426f910073f9e5070a72.r2.dev/ai%20elements';

export interface AIShowcase {
  slug: string;
  title: string;
  badge: string;
  description: string;
  thumbnail: string;
  thumbnailIsVideo: boolean;
  featured?: boolean;
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
}

export const showcases: AIShowcase[] = [
  {
    slug: 'thailand',
    title: 'תמונה שהפכה לסרטון חי',
    badge: 'וידאו AI',
    description: 'הנוף מתחיל לזוז, הגלים חיים — זה מה שנוצר מתמונה אחת שהלקוח שלח',
    thumbnail: `${R2}/thailand.mp4`,
    thumbnailIsVideo: true,
    featured: true,
    type: 'image-video',
    original: { src: `${R2}/thailand.png`, alt: 'תמונה מקורית מהלקוח — תמונת תאילנד', label: 'תמונה מקורית מהלקוח' },
    aiResult: { src: `${R2}/thailand.mp4`, isVideo: true, label: 'סרטון שנוצר בעזרת AI' },
  },
  {
    slug: 'noia',
    title: 'טרנספורמציה — מתינוקת לנערה',
    badge: 'וידאו AI',
    description: '6 תמונות מגילאים שונים — ו-AI שיצר מהן סרטון מעבר קסום שמראה את הצמיחה',
    thumbnail: `${R2}/noia-stage.mp4`,
    thumbnailIsVideo: true,
    featured: true,
    type: 'image-video',
    original: { src: `${R2}/Noia-overlay.png`, alt: '6 תמונות של נויה בגילאים שונים', label: '6 תמונות מקוריות מהמשפחה' },
    aiResult: { src: `${R2}/noia-stage.mp4`, isVideo: true, label: 'סרטון טרנספורמציה שנוצר בעזרת AI' },
  },
  {
    slug: 'alex',
    title: 'אלכס — מה יקרה אחרי הפרישה?',
    badge: 'תמונות AI',
    description: 'מתמונה אחת שהמשפחה שלחה — בנינו פתיח קולנועי ושלושה עולמות דמיוניים שגרמו לכולם לצחוק',
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
  },
  {
    slug: 'football',
    title: 'סלפי עם כוכבי כדורגל',
    badge: 'תמונות + וידאו AI',
    description: 'מ-6 תמונות נפרדות — AI יצר סלפי קבוצתי שהפך לסרטון חי',
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
  },
  {
    slug: 'wicked',
    title: 'ביקור בסט הצילומים של Wicked ו-Harry Potter',
    badge: 'תמונות AI',
    description: 'מתמונה אחת — AI שילב את הילדה בסטים של הסרטים האהובים עליה',
    thumbnail: `${R2}/meet%20your%20favorite%20actor.png`,
    thumbnailIsVideo: false,
    featured: false,
    type: 'selfie',
    portrait: { src: `${R2}/shai.png`, alt: 'תמונה מקורית של שי', label: 'תמונה מקורית' },
    aiResult: { src: `${R2}/meet%20your%20favorite%20actor.png`, alt: 'שי בסט הצילומים של Wicked ו-Harry Potter', label: '✨ AI הביא אותה לסט' },
  },
  {
    slug: 'paris',
    title: 'מתל אביב לפריז — בשנייה אחת',
    badge: 'וידאו AI',
    description: 'נער יושב על ספסל בתל אביב — AI הפך אותו לסיטואציה מפתיעה בפריז',
    thumbnail: `${R2}/paris.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'image-video',
    original: { src: `${R2}/paris.jpeg`, alt: 'נער יושב על ספסל בתל אביב', label: '📍 ספסל בתל אביב' },
    aiResult: { src: `${R2}/paris.mp4`, isVideo: true, label: '🗼 פריז — שנוצר בעזרת AI' },
  },
  {
    slug: 'singers',
    title: 'סלפי עם הזמרות האהובות',
    badge: 'תמונות + וידאו AI',
    description: 'מ-3 תמונות נפרדות — AI יצר סלפי משותף שהפך לסרטון חי',
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
  },
  {
    slug: 'world-travel',
    title: 'יצאת לפנסיה — הגיע הזמן לטייל בעולם',
    badge: 'וידאו AI',
    description: 'מגדל פיזה, החומה הסינית, לונדון או ניו יורק — AI שולח אתכם לכל מקום בעולם',
    thumbnail: `${R2}/world-places.mp4`,
    thumbnailIsVideo: true,
    featured: false,
    type: 'single-video',
    mainVideo: `${R2}/world-places.mp4`,
    videoCaption: '🌍 כל העולם — מתמונה אחת שהמשפחה שלחה',
    videoStyle: 'portrait',
  },
];
