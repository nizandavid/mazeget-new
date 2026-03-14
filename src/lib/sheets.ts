const SHEET_ID = '12ApAwVrWwYhW9gqFCBOdLoPpmE_SJ1ikUGcRIHbSAM8';

export interface Video {
  vimeo_id: string;
  title: string;       // כותרת_מותאמת, ואם ריקה אז כותרת_מקורית
  description: string;
  thumbnail: string;
  duration: number;
  status: 'ראשי' | 'דוגמאות' | 'מוסתר';
  order: number;
  subcategory: string; // תת-קטגוריה (עמודה K) — לשימוש בדף שונות
}

// מיפוי: מפתח קטגוריה באתר → שם טאב בגיליון
const TAB_MAP: Record<string, string> = {
  bar_mitzva: 'בר מצווה',
  bat_mitzva: 'בת מצווה',
  birthday:   'ימי הולדת',
  trip:       'טיולים',
  wedding:    'חתונות',
  other:      'מצגות שונות',
};

async function fetchTab(tabName: string): Promise<Video[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tabName)}`;
  const res = await fetch(url);
  const text = await res.text();

  // גוגל מחזיר callback wrapper — מחלצים רק את ה-JSON
  const json = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
  const rows: any[] = json.table?.rows ?? [];

  return rows
    .map((row) => {
      const c = row.c ?? [];
      const val = (i: number) => c[i]?.v ?? '';
      return {
        vimeo_id:    String(val(0)),
        title:       String(val(2) || val(1)),  // מותאמת, ואם ריקה — מקורית
        description: String(val(3)),
        thumbnail:   String(val(5)),
        duration:    Number(val(6)) || 0,
        status:      String(val(8) || 'דוגמאות') as Video['status'],
        order:       Number(val(9)) || 999,
        subcategory: String(val(10) || ''),
      };
    })
    .filter(v => v.vimeo_id && v.status !== 'מוסתר');
}

// כל הסרטונים של קטגוריה (ללא מוסתרים), ממוינים לפי סדר
export async function getVideosForCategory(categoryKey: string): Promise<Video[]> {
  const tab = TAB_MAP[categoryKey];
  if (!tab) return [];
  const videos = await fetchTab(tab);
  return videos.sort((a, b) => a.order - b.order);
}

// רק סרטוני "ראשי" לדף הבית
export async function getHomepageVideos(categoryKey: string): Promise<Video[]> {
  const videos = await getVideosForCategory(categoryKey);
  return videos.filter(v => v.status === 'ראשי');
}

// ─── עמודי מצגות ──────────────────────────────────────────────────────────────
export interface VideoPage {
  vimeo_id:       string;
  slug:           string;   // מזהה ה-URL, למשל "bar-mitzva-yair"
  title:          string;   // כותרת הדף, למשל "מצגת בר מצווה ליאיר"
  category_key:   string;   // bar_mitzva / bat_mitzva / ...
  emoji:          string;
  category_label: string;   // בר מצווה / בת מצווה / ...
  category_he:    string;   // מצגות בר מצווה (לבראדקרמב)
  section1: string;         // "על המצגת"
  section2: string;         // "מה מיוחד במצגת הזאת"
  section3: string;         // "רעיונות"
  detail_event:    string;
  detail_style:    string;
  detail_elements: string;
  detail_duration: string;
  detail_music:    string;
  description:     string;  // תיאור מקוצר (עמודה V)
  page_status:     string;  // ראשי / דוגמאות / מוסתר (עמודה W)
  branch:          string;  // ענף: כדורגל, ריקוד, מוסיקה... (עמודה X)
  related: { id: string; title: string }[];
}

export async function getVideoPages(): Promise<VideoPage[]> {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent('עמודי מצגות')}`;
  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
  const rows: any[] = json.table?.rows ?? [];

  return rows
    .map((row) => {
      const c = row.c ?? [];
      const val = (i: number) => String(c[i]?.v ?? '');
      return {
        vimeo_id:       val(0),
        slug:           val(1),
        title:          val(2),
        category_key:   val(3),
        emoji:          val(4),
        category_label: val(5),
        category_he:    val(6),
        section1:       val(7),
        section2:       val(8),
        section3:       val(9),
        detail_event:    val(10),
        detail_style:    val(11),
        detail_elements: val(12),
        detail_duration: val(13),
        detail_music:    val(14),
        description:     val(21),
        page_status:     val(22),
        branch:          val(23),
        related: [
          { id: val(15), title: val(16) },
          { id: val(17), title: val(18) },
          { id: val(19), title: val(20) },
        ].filter(r => r.id),
      };
    })
    .filter(p => p.vimeo_id && p.slug && /^\d+$/.test(p.vimeo_id));
}
