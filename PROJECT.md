# PROJECT.md — Mazeget New Site

## מה בונים
אתר חדש ומודרני שיחליף את mazeget.com — מצגות וידאו לאירועים משפחתיים.

## סטטוס נוכחי — עובד ב-Netlify
🌐 https://aesthetic-treacle-775323.netlify.app/

## Stack
- **Frontend:** Astro + Tailwind CSS v4
- **CMS:** WordPress Headless (מקומי עם Local by Flywheel)
- **Deploy:** GitHub → Netlify (אוטומטי)
- **פונט:** Heebo (טקסט) + Secular One (כותרות)

## עיצוב (גרסה נוכחית)
- RTL עברית
- **פונטים:** Heebo (טקסט) + Secular One (כותרות)
- **לוגו:** `public/logo-matzget.png`
- **רקע גלובלי מונפש** — כדורי צבע צפים (mesh background) בכל הדף
- **Hero** — גרדיאנט סגול בהיר, וידאו בולט במרכז + מספרי אמון
- **קטגוריות** — סגול (`#d4cbf5`) עם 2 כדורים מונפשים
- **גלריה** — אפור-סגול (`#cdc8ec`)
- **תהליך** — ירוק-מינט (`#b8f0e6` → `#d8faf3`)
- **Contact** — סגול כהה (`#3b0764` → `#1e0a4a`), טקסט לבן, טופס glassmorphism, כדורים מונפשים
- **כרטיסי קטגוריות** — גרדיאנט ייחודי לכל קטגוריה (3/4 aspect ratio)
- **WhatsApp** כפתור צף בפינה

## דפים שנבנו
- [x] דף בית — Hero + גלריה + יצירת קשר
- [x] מחירון — 3 חבילות + שירותים נוספים
- [x] אודותינו — סיפור העסק + פרטי קשר
- [x] העלאת קבצים — הסבר על מערכת ההעלאה הייחודית
- [x] מאמרים — רשימה עם סינון קטגוריות + דף מאמר בודד עם URL נקי לSEO
- [x] דפי קטגוריות — `/מצגות/[category]` (בר מצווה, בת מצווה, ימי הולדת, חתונות, טיולים)
- [x] תפריט נפתח — "מצגות" עם קישורים לכל הקטגוריות
- [x] Footer — לוגו, קטגוריות, קישורים, פרטי קשר, כפתור וואטסאפ
- [x] דף 404 — עם כפתורים לדף הבית ולגלריה

## WordPress (מקומי)
- URL: http://mazeget-local.local
- Post Type: `works` (מצגות)
- שדות ACF: `vimeo_url`, `category`
- REST API: `/wp-json/wp/v2/presentations`
- ACF חשוף ב-REST דרך functions.php של תמת twentytwentyfive

## GitHub
- Repo: https://github.com/nizandavid/mazeget-new

## צעדים הבאים
1. העלאת WordPress לשרת אמיתי (סאבדומיין)
2. חיבור Netlify לוורדפרס האמיתי עם env variable (`WP_URL`)
3. הגדרת Webhook — עדכון אוטומטי כשמוסיפים מצגת

## החלטות שהתקבלו
- שם תיקיות בעברית לדפים (מחירון, אודותינו, העלאת-קבצים, מאמרים)
- גלריה עם lightbox לוימאו
- סינון קטגוריות בגלריה בצד הלקוח (JavaScript)
- WpGraphQL מותקן אבל לא בשימוש — משתמשים ב-REST API
- "פוסטים AI" ו"מאמרים" אוחדו לדף אחד עם סינון קטגוריות (טוב יותר ל-SEO)
- דפי מאמרים בודדים עם URL נקי: `/מאמרים/[slug]`
- ריסדיזיין מלא — עיצוב בהיר עם mesh background, shimmer text, scroll reveal
- וידאו בולט במרכז ה-Hero (לא בצד) — החלטה מכוונת
- Secular One לכותרות, Heebo לטקסט
- כל section עם רקע שונה + אנימציות עדינות בחלק מהם
- Contact section כהה עם טקסט לבן — בולט ושונה משאר הדף
- לוגו החלפה מ-logo.png ל-logo-matzget.png (ללא כתב יד)
