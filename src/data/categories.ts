export const categories: { key: string; label: string; description: string; emoji: string; hideFromNav?: boolean }[] = [
  {
    key: 'bar_mitzva',
    label: 'בר מצווה',
    description: 'מצגות וידאו מרגשות לאירוע הבר מצווה — מרגע הלידה ועד הגדולה',
    emoji: '✡️',
  },
  {
    key: 'bat_mitzva',
    label: 'בת מצווה',
    description: 'מצגות וידאו קסומות לאירוע הבת מצווה — כל הרגעים המיוחדים',
    emoji: '🌸',
  },
  {
    key: 'birthday',
    label: 'ימי הולדת',
    description: 'מצגות וידאו לימי הולדת — 40, 50, 60 ועוד — חגיגה של חיים',
    emoji: '🎂',
  },
  {
    key: 'wedding',
    label: 'חתונות',
    description: 'מצגות וידאו לחתונות — סיפור אהבה שישמר לנצח',
    emoji: '💍',
  },
  {
    key: 'trip',
    label: 'טיולים',
    description: 'מצגות וידאו לטיולים ומסעות — זיכרונות מהדרך',
    emoji: '✈️',
  },
  {
    key: 'retirement',
    label: 'פרישה',
    description: 'מצגות וידאו לאירועי פרישה — סיכום דרך, הישגים ורגעים מיוחדים',
    emoji: '🏆',
    hideFromNav: true,
  },
  {
    key: 'memorial',
    label: 'לזכר',
    description: 'מצגות וידאו לזכרו של יקיר — הנצחה מכובדת ומרגשת',
    emoji: '🕯️',
    hideFromNav: true,
  },
  {
    key: 'sign_song',
    label: 'שיר שלטים',
    description: 'שיר שלטים ייחודי לאירוע — כל אורח מקבל שלט עם מילות השיר',
    emoji: '🎵',
    hideFromNav: true,
  },
  {
    key: 'other',
    label: 'שונות',
    description: 'מצגות וידאו לאירועים מיוחדים — יצירתיות ללא גבולות',
    emoji: '✨',
  },
];
