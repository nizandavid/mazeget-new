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
- רקע: `#FAFAFA` (בהיר ונקי)
- טקסט: `#1A1040`
- סגול ראשי: `#7C3AED`
- סגול בהיר: `#9D5CF6`
- Teal: `#0D9488`
- ורוד: `#EC4899`
- זהב: `#D97706`
- RTL עברית
- **רקע מונפש** — כדורי צבע צפים (mesh background)
- **Hero ממורכז** עם וידאו בולט במרכז + מספרי אמון
- **כרטיסי קטגוריות** גבוהים עם גרדיאנט ייחודי
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
- ריסדיזיין מלא — עיצוב בהיר (mazeget-light.html) עם mesh background, shimmer text, scroll reveal
- וידאו בולט במרכז ה-Hero (לא בצד) — החלטה מכוונת
- Secular One לכותרות, Heebo לטקסט
