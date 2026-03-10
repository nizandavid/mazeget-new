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
