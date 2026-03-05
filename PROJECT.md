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

## עיצוב
- רקע: `#F8F7FF`
- טקסט: `#12023C`
- סגול: `#6C22FF`
- ורוד: `#E879F9`
- ציאן: `#06B6D4`
- ענבר: `#F59E0B`
- RTL עברית

## דפים שנבנו
- [x] דף בית — Hero + גלריה + יצירת קשר
- [x] מחירון — 3 חבילות + שירותים נוספים
- [x] אודותינו — סיפור העסק + פרטי קשר
- [x] העלאת קבצים — הסבר על מערכת ההעלאה הייחודית
- [x] מאמרים — רשימה עם סינון קטגוריות + דף מאמר בודד עם URL נקי לSEO
- [x] דפי קטגוריות — `/מצגות/[category]` (בר מצווה, בת מצווה, ימי הולדת, חתונות, טיולים)
- [x] תפריט נפתח — "מצגות" עם קישורים לכל הקטגוריות

## דפים לבניה בהמשך
- [ ] Footer
- [ ] דף 404

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
2. חיבור Netlify לוורדפרס האמיתי עם env variable
3. הגדרת Webhook — עדכון אוטומטי כשמוסיפים מצגת
4. בניית דפי קטגוריות

## החלטות שהתקבלו
- שם תיקיות בעברית לדפים (מחירון, אודותינו, העלאת-קבצים, מאמרים)
- גלריה עם lightbox לוימאו
- סינון קטגוריות בגלריה בצד הלקוח (JavaScript)
- WpGraphQL מותקן אבל לא בשימוש — משתמשים ב-REST API
- "פוסטים AI" ו"מאמרים" אוחדו לדף אחד עם סינון קטגוריות (טוב יותר ל-SEO)
- דפי מאמרים בודדים עם URL נקי: `/מאמרים/[slug]`
