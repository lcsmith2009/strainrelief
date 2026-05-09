const strains = [
  {
    "name": "Harlequin",
    "emoji": "🌱",
    "type": "CBD-dominant Hybrid",
    "visual": "visual-cbd",
    "thc": "Low to moderate THC",
    "cbd": "High CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Calm",
      "Clear-headed",
      "CBD-forward"
    ],
    "goals": [
      "Anxiety",
      "Stress",
      "Body Comfort"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 94,
    "insight": "Harlequin is often discussed as a calm, clear-headed, cbd-forward direction. Ask for lab-tested options and start low."
  },
  {
    "name": "ACDC",
    "emoji": "🍃",
    "type": "CBD-forward Hybrid",
    "visual": "visual-cbd",
    "thc": "Very low THC",
    "cbd": "Very high CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Functional",
      "Calm",
      "Low intoxication"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong euphoria seekers"
    ],
    "score": 91,
    "insight": "ACDC is often discussed as a functional, calm, low intoxication direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Cannatonic",
    "emoji": "🌿",
    "type": "Balanced THC/CBD Hybrid",
    "visual": "visual-cbd",
    "thc": "Low to moderate THC",
    "cbd": "Moderate to high CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Balanced",
      "Calm",
      "Body comfort"
    ],
    "goals": [
      "Stress",
      "Body Comfort"
    ],
    "caution": [
      "Heavy sedation seekers"
    ],
    "score": 89,
    "insight": "Cannatonic is often discussed as a balanced, calm, body comfort direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Northern Lights",
    "emoji": "🌙",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Sleepy",
      "Relaxed",
      "Nighttime"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Daytime focus",
      "Low THC tolerance"
    ],
    "score": 88,
    "insight": "Northern Lights is often discussed as a sleepy, relaxed, nighttime direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Blue Dream",
    "emoji": "💙",
    "type": "Balanced Hybrid",
    "visual": "visual-day",
    "thc": "Moderate THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Mood",
      "Creative",
      "Balanced"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "High anxiety sensitivity"
    ],
    "score": 86,
    "insight": "Blue Dream is often discussed as a mood, creative, balanced direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Granddaddy Purple",
    "emoji": "🍇",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Pinene"
    ],
    "tags": [
      "Relaxation",
      "Evening",
      "Sleep"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Daytime tasks"
    ],
    "score": 92,
    "insight": "Granddaddy Purple is often discussed as a relaxation, evening, sleep direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Sour Diesel",
    "emoji": "⚡",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Caryophyllene",
      "Myrcene"
    ],
    "tags": [
      "Energy",
      "Daytime",
      "Focus"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Sleep time"
    ],
    "score": 80,
    "insight": "Sour Diesel is often discussed as a energy, daytime, focus direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Girl Scout Cookies",
    "emoji": "🍪",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Humulene"
    ],
    "tags": [
      "Balanced",
      "Mood",
      "Relaxation"
    ],
    "goals": [
      "Mood",
      "Stress",
      "Appetite"
    ],
    "caution": [
      "Low THC tolerance"
    ],
    "score": 84,
    "insight": "Girl Scout Cookies is often discussed as a balanced, mood, relaxation direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Pineapple Express",
    "emoji": "🍍",
    "type": "Hybrid",
    "visual": "visual-day",
    "thc": "Moderate THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Happy",
      "Creative",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Sleep time"
    ],
    "score": 83,
    "insight": "Pineapple Express is often discussed as a happy, creative, daytime direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Jack Herer",
    "emoji": "🌸",
    "type": "Sativa-leaning Hybrid",
    "visual": "visual-bright",
    "thc": "Moderate THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Focus",
      "Energy",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Night use"
    ],
    "score": 81,
    "insight": "Jack Herer is often discussed as a focus, energy, mood direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Purple Punch",
    "emoji": "🫐",
    "type": "Indica-leaning Hybrid",
    "visual": "visual-night",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Sleep",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Daytime productivity"
    ],
    "score": 87,
    "insight": "Purple Punch is often discussed as a sleep, calm, evening direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Lemon Haze",
    "emoji": "🍋",
    "type": "Sativa-leaning",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Myrcene",
      "Caryophyllene"
    ],
    "tags": [
      "Creative",
      "Daytime",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users"
    ],
    "score": 78,
    "insight": "Lemon Haze is often discussed as a creative, daytime, mood direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Ringo's Gift",
    "emoji": "🎁",
    "type": "CBD-dominant Hybrid",
    "visual": "visual-cbd",
    "thc": "Very low THC",
    "cbd": "Very high CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Calm",
      "Beginner",
      "Stress"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 90,
    "insight": "Ringo's Gift is often discussed as a calm, beginner, stress direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Charlotte's Web",
    "emoji": "🕊️",
    "type": "CBD-forward",
    "visual": "visual-cbd",
    "thc": "Very low THC",
    "cbd": "Very high CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Humulene"
    ],
    "tags": [
      "Calm",
      "Stress",
      "Low THC"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong euphoria seekers"
    ],
    "score": 88,
    "insight": "Charlotte's Web is often discussed as a calm, stress, low thc direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Maui Wowie",
    "emoji": "🏝️",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "Moderate THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Pinene",
      "Myrcene"
    ],
    "tags": [
      "Energy",
      "Mood",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Sleep time"
    ],
    "score": 82,
    "insight": "Maui Wowie is often discussed as a energy, mood, daytime direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Durban Poison",
    "emoji": "☀️",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Ocimene",
      "Pinene"
    ],
    "tags": [
      "Focus",
      "Daytime",
      "Energy"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users"
    ],
    "score": 77,
    "insight": "Durban Poison is often discussed as a focus, daytime, energy direction. Ask for lab-tested options and start low."
  },
  {
    "name": "White Widow",
    "emoji": "🕸️",
    "type": "Balanced Hybrid",
    "visual": "visual-day",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Balanced",
      "Mood",
      "Relaxation"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Low THC tolerance"
    ],
    "score": 79,
    "insight": "White Widow is often discussed as a balanced, mood, relaxation direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Wedding Cake",
    "emoji": "🎂",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-dessert",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Relaxation",
      "Mood",
      "Evening"
    ],
    "goals": [
      "Stress",
      "Appetite"
    ],
    "caution": [
      "Beginners"
    ],
    "score": 82,
    "insight": "Wedding Cake is often discussed as a relaxation, mood, evening direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Gelato",
    "emoji": "🍨",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Humulene"
    ],
    "tags": [
      "Mood",
      "Relaxation",
      "Creative"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Very low tolerance"
    ],
    "score": 81,
    "insight": "Gelato is often discussed as a mood, relaxation, creative direction. Ask for lab-tested options and start low."
  },
  {
    "name": "OG Kush",
    "emoji": "🌲",
    "type": "Hybrid",
    "visual": "visual-night",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Relaxation",
      "Stress",
      "Mood"
    ],
    "goals": [
      "Stress",
      "Body Comfort"
    ],
    "caution": [
      "Beginners"
    ],
    "score": 83,
    "insight": "OG Kush is often discussed as a relaxation, stress, mood direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Bubba Kush",
    "emoji": "🛋️",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Sleep",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Daytime focus"
    ],
    "score": 86,
    "insight": "Bubba Kush is often discussed as a sleep, calm, evening direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Zkittlez",
    "emoji": "🌈",
    "type": "Indica-leaning Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Humulene"
    ],
    "tags": [
      "Relaxation",
      "Mood",
      "Calm"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Daytime productivity"
    ],
    "score": 80,
    "insight": "Zkittlez is often discussed as a relaxation, mood, calm direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Super Silver Haze",
    "emoji": "✨",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Caryophyllene",
      "Myrcene"
    ],
    "tags": [
      "Energy",
      "Focus",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users"
    ],
    "score": 76,
    "insight": "Super Silver Haze is often discussed as a energy, focus, daytime direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Green Crack",
    "emoji": "🟢",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Pinene"
    ],
    "tags": [
      "Focus",
      "Energy",
      "Mood"
    ],
    "goals": [
      "Focus",
      "Mood"
    ],
    "caution": [
      "Anxiety-prone users"
    ],
    "score": 75,
    "insight": "Green Crack is often discussed as a focus, energy, mood direction. Ask for lab-tested options and start low."
  },
  {
    "name": "LA Confidential",
    "emoji": "🌃",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Sleep",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Body Comfort"
    ],
    "caution": [
      "Daytime focus"
    ],
    "score": 85,
    "insight": "LA Confidential is often discussed as a sleep, calm, evening direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Remedy",
    "emoji": "🧘",
    "type": "CBD-forward",
    "visual": "visual-cbd",
    "thc": "Very low THC",
    "cbd": "Very high CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Calm",
      "Stress",
      "Low THC"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 89,
    "insight": "Remedy is often discussed as a calm, stress, low thc direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Pennywise",
    "emoji": "🪙",
    "type": "Balanced THC/CBD",
    "visual": "visual-cbd",
    "thc": "Low to moderate THC",
    "cbd": "Moderate CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Calm",
      "Body comfort",
      "Stress"
    ],
    "goals": [
      "Anxiety",
      "Stress",
      "Body Comfort"
    ],
    "caution": [
      "Heavy high seekers"
    ],
    "score": 87,
    "insight": "Pennywise is often discussed as a calm, body comfort, stress direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Mango Kush",
    "emoji": "🥭",
    "type": "Indica-leaning Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Relaxation",
      "Mood",
      "Evening"
    ],
    "goals": [
      "Stress",
      "Appetite"
    ],
    "caution": [
      "High focus needs"
    ],
    "score": 82,
    "insight": "Mango Kush is often discussed as a relaxation, mood, evening direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Strawberry Cough",
    "emoji": "🍓",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "Moderate THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Mood",
      "Creative",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety sensitivity"
    ],
    "score": 79,
    "insight": "Strawberry Cough is often discussed as a mood, creative, daytime direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Chemdawg",
    "emoji": "⛽",
    "type": "Hybrid",
    "visual": "visual-bright",
    "thc": "High THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Myrcene",
      "Limonene"
    ],
    "tags": [
      "Balanced",
      "Relaxation",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Beginners",
      "Anxiety-prone users"
    ],
    "score": 74,
    "insight": "Chemdawg is often discussed as a balanced, relaxation, mood direction. Ask for lab-tested options and start low."
  },
  {
    "name": "Apple Fritter",
    "emoji": "🍎",
    "type": "Balanced Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Pinene"
    ],
    "tags": [
      "Happy",
      "Relaxed",
      "Evening"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 78,
    "insight": "Apple Fritter may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Do-Si-Dos",
    "emoji": "🍩",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Linalool",
      "Caryophyllene"
    ],
    "tags": [
      "Heavy",
      "Calm",
      "Sleep"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 79,
    "insight": "Do-Si-Dos may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Skywalker OG",
    "emoji": "🚀",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Body comfort",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Stress",
      "Body Comfort"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 80,
    "insight": "Skywalker OG may align with stress, body comfort goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Banana Kush",
    "emoji": "🍌",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Caryophyllene",
      "Myrcene"
    ],
    "tags": [
      "Mood",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 77,
    "insight": "Banana Kush may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Ice Cream Cake",
    "emoji": "🍰",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Myrcene",
      "Linalool"
    ],
    "tags": [
      "Sleepy",
      "Relaxed",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 82,
    "insight": "Ice Cream Cake may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Animal Cookies",
    "emoji": "🐾",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Stress",
      "Relaxed",
      "Mood"
    ],
    "goals": [
      "Stress",
      "Mood"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Animal Cookies may align with stress, mood goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "MAC 1",
    "emoji": "🧪",
    "type": "Balanced Hybrid",
    "visual": "visual-day",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Balanced",
      "Creative",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 75,
    "insight": "MAC 1 may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Ghost Train Haze",
    "emoji": "🚂",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Energetic",
      "Focus",
      "Daytime"
    ],
    "goals": [
      "Focus",
      "Mood"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 73,
    "insight": "Ghost Train Haze may align with focus, mood goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Forbidden Fruit",
    "emoji": "🍑",
    "type": "Indica",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Calm",
      "Evening",
      "Relaxation"
    ],
    "goals": [
      "Stress",
      "Sleep"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 80,
    "insight": "Forbidden Fruit may align with stress, sleep goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Sunset Sherbet",
    "emoji": "🌅",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Humulene"
    ],
    "tags": [
      "Mood",
      "Relaxed",
      "Balanced"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 79,
    "insight": "Sunset Sherbet may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Runtz",
    "emoji": "🍬",
    "type": "Balanced Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Caryophyllene",
      "Linalool"
    ],
    "tags": [
      "Happy",
      "Relaxed",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 80,
    "insight": "Runtz may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Mimosa",
    "emoji": "🍊",
    "type": "Sativa-dominant Hybrid",
    "visual": "visual-day",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Pinene",
      "Myrcene"
    ],
    "tags": [
      "Bright",
      "Energy",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 78,
    "insight": "Mimosa may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Gorilla Glue #4",
    "emoji": "🦍",
    "type": "Hybrid",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Myrcene",
      "Limonene"
    ],
    "tags": [
      "Relaxed",
      "Heavy",
      "Stress"
    ],
    "goals": [
      "Stress",
      "Body Comfort"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 77,
    "insight": "Gorilla Glue #4 may align with stress, body comfort goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Cereal Milk",
    "emoji": "🥛",
    "type": "Balanced Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Mood",
      "Creative",
      "Relaxed"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Cereal Milk may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Cherry Pie",
    "emoji": "🥧",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Balanced",
      "Mood",
      "Evening"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 77,
    "insight": "Cherry Pie may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Tahoe OG",
    "emoji": "🏔️",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Evening",
      "Relaxed",
      "Sleep"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 79,
    "insight": "Tahoe OG may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Bruce Banner",
    "emoji": "💥",
    "type": "Hybrid",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Mood",
      "Creative",
      "Strong"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 72,
    "insight": "Bruce Banner may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Lemon Cherry Gelato",
    "emoji": "🍒",
    "type": "Balanced Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Caryophyllene",
      "Linalool"
    ],
    "tags": [
      "Happy",
      "Relaxed",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 78,
    "insight": "Lemon Cherry Gelato may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Gary Payton",
    "emoji": "🏀",
    "type": "Hybrid",
    "visual": "visual-day",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Balanced",
      "Focus",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 75,
    "insight": "Gary Payton may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Oreoz",
    "emoji": "🍫",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Relaxed",
      "Evening",
      "Calm"
    ],
    "goals": [
      "Stress",
      "Sleep"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Oreoz may align with stress, sleep goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Blackberry Kush",
    "emoji": "🫐",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Sleep",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 83,
    "insight": "Blackberry Kush may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Trainwreck",
    "emoji": "🚆",
    "type": "Sativa-leaning Hybrid",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Myrcene",
      "Pinene"
    ],
    "tags": [
      "Energy",
      "Creative",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 73,
    "insight": "Trainwreck may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Tangie",
    "emoji": "🍊",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Pinene"
    ],
    "tags": [
      "Bright",
      "Mood",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 77,
    "insight": "Tangie may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Afghan Kush",
    "emoji": "🏜️",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Pinene"
    ],
    "tags": [
      "Sleep",
      "Heavy",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Body Comfort"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 84,
    "insight": "Afghan Kush may align with sleep, body comfort goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Lava Cake",
    "emoji": "🍫",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Myrcene",
      "Limonene"
    ],
    "tags": [
      "Relaxed",
      "Evening",
      "Mood"
    ],
    "goals": [
      "Stress",
      "Appetite"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 78,
    "insight": "Lava Cake may align with stress, appetite goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Slurricane",
    "emoji": "🌧️",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Myrcene",
      "Limonene"
    ],
    "tags": [
      "Calm",
      "Sleepy",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 80,
    "insight": "Slurricane may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Papaya",
    "emoji": "🥭",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Relaxed",
      "Appetite",
      "Evening"
    ],
    "goals": [
      "Appetite",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 79,
    "insight": "Papaya may align with appetite, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Blue Cheese",
    "emoji": "🧀",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Calm",
      "Evening",
      "Appetite"
    ],
    "goals": [
      "Appetite",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Blue Cheese may align with appetite, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Critical Mass",
    "emoji": "⚖️",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Pinene"
    ],
    "tags": [
      "Body comfort",
      "Sleep",
      "Calm"
    ],
    "goals": [
      "Body Comfort",
      "Sleep"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 81,
    "insight": "Critical Mass may align with body comfort, sleep goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Super Lemon Haze",
    "emoji": "🍋",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Energy",
      "Mood",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Super Lemon Haze may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Grape Ape",
    "emoji": "🍇",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Pinene"
    ],
    "tags": [
      "Calm",
      "Sleep",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 82,
    "insight": "Grape Ape may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Tropicana Cookies",
    "emoji": "🍊",
    "type": "Sativa-leaning Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Humulene"
    ],
    "tags": [
      "Creative",
      "Mood",
      "Daytime"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 75,
    "insight": "Tropicana Cookies may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Alien OG",
    "emoji": "👽",
    "type": "Hybrid",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Limonene",
      "Myrcene",
      "Caryophyllene"
    ],
    "tags": [
      "Relaxed",
      "Mood",
      "Evening"
    ],
    "goals": [
      "Stress",
      "Mood"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 77,
    "insight": "Alien OG may align with stress, mood goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Platinum Cookies",
    "emoji": "💎",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Humulene"
    ],
    "tags": [
      "Relaxed",
      "Mood",
      "Balanced"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 78,
    "insight": "Platinum Cookies may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Jillybean",
    "emoji": "🫘",
    "type": "Hybrid",
    "visual": "visual-day",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Myrcene",
      "Ocimene"
    ],
    "tags": [
      "Bright",
      "Mood",
      "Creative"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 74,
    "insight": "Jillybean may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Sweet Tooth",
    "emoji": "🍭",
    "type": "Indica-dominant Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Happy",
      "Relaxed",
      "Evening"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 77,
    "insight": "Sweet Tooth may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Sundae Driver",
    "emoji": "🍨",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Balanced",
      "Relaxed",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 78,
    "insight": "Sundae Driver may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Clementine",
    "emoji": "🍊",
    "type": "Sativa",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Myrcene",
      "Ocimene"
    ],
    "tags": [
      "Focus",
      "Energy",
      "Daytime"
    ],
    "goals": [
      "Focus",
      "Mood"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 75,
    "insight": "Clementine may align with focus, mood goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Lemon Skunk",
    "emoji": "🍋",
    "type": "Sativa-dominant Hybrid",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Bright",
      "Mood",
      "Creative"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Lemon Skunk may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Kosher Kush",
    "emoji": "🕯️",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Sleep",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 82,
    "insight": "Kosher Kush may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Blueberry",
    "emoji": "🫐",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Calm",
      "Sleep",
      "Mood"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 83,
    "insight": "Blueberry may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Sour Tsunami",
    "emoji": "🌊",
    "type": "CBD-forward Hybrid",
    "visual": "visual-cbd",
    "thc": "Very low to low THC",
    "cbd": "High CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "CBD-forward",
      "Calm",
      "Low THC"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 90,
    "insight": "Sour Tsunami may align with anxiety, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Lifter",
    "emoji": "🎈",
    "type": "CBD-forward",
    "visual": "visual-cbd",
    "thc": "Very low to low THC",
    "cbd": "High CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Functional",
      "Calm",
      "Daytime"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 88,
    "insight": "Lifter may align with anxiety, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Suzy Q",
    "emoji": "🧘",
    "type": "CBD-forward",
    "visual": "visual-cbd",
    "thc": "Very low to low THC",
    "cbd": "High CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Calm",
      "CBD-forward",
      "Gentle"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 87,
    "insight": "Suzy Q may align with anxiety, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Elektra",
    "emoji": "⚡",
    "type": "CBD-forward",
    "visual": "visual-cbd",
    "thc": "Very low to low THC",
    "cbd": "High CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Clear-headed",
      "Calm",
      "Daytime"
    ],
    "goals": [
      "Anxiety",
      "Stress"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 86,
    "insight": "Elektra may align with anxiety, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Blue Shark",
    "emoji": "🦈",
    "type": "Balanced THC/CBD",
    "visual": "visual-cbd",
    "thc": "Very low to low THC",
    "cbd": "High CBD",
    "terpenes": [
      "Myrcene",
      "Pinene",
      "Caryophyllene"
    ],
    "tags": [
      "Balanced",
      "Calm",
      "Body comfort"
    ],
    "goals": [
      "Body Comfort",
      "Stress"
    ],
    "caution": [
      "Strong high seekers"
    ],
    "score": 84,
    "insight": "Blue Shark may align with body comfort, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Dutch Treat",
    "emoji": "🇳🇱",
    "type": "Hybrid",
    "visual": "visual-day",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Terpinolene",
      "Myrcene",
      "Ocimene"
    ],
    "tags": [
      "Creative",
      "Mood",
      "Balanced"
    ],
    "goals": [
      "Mood",
      "Focus"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Dutch Treat may align with mood, focus goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Hindu Kush",
    "emoji": "⛰️",
    "type": "Indica",
    "visual": "visual-night",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Caryophyllene",
      "Limonene"
    ],
    "tags": [
      "Sleep",
      "Calm",
      "Evening"
    ],
    "goals": [
      "Sleep",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 82,
    "insight": "Hindu Kush may align with sleep, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Fire OG",
    "emoji": "🔥",
    "type": "Hybrid",
    "visual": "visual-bright",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Myrcene",
      "Limonene",
      "Caryophyllene"
    ],
    "tags": [
      "Strong",
      "Relaxed",
      "Mood"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 72,
    "insight": "Fire OG may align with mood, stress goals for some users. Cannabis affects everyone differently."
  },
  {
    "name": "Sherbert Queen",
    "emoji": "👑",
    "type": "Hybrid",
    "visual": "visual-dessert",
    "thc": "Moderate to high THC",
    "cbd": "Low CBD",
    "terpenes": [
      "Caryophyllene",
      "Limonene",
      "Myrcene"
    ],
    "tags": [
      "Mood",
      "Relaxed",
      "Sweet"
    ],
    "goals": [
      "Mood",
      "Stress"
    ],
    "caution": [
      "Anxiety-prone users",
      "Low THC tolerance"
    ],
    "score": 76,
    "insight": "Sherbert Queen may align with mood, stress goals for some users. Cannabis affects everyone differently."
  }
];

const filters = ["All","CBD","Sleep","Daytime","Mood","Focus","Stress","Body Comfort","Appetite"];

const education = [
  {title:"Start low and go slow", body:"Use lower serving sizes first, especially if new or sensitive to THC. Wait to understand how it affects you."},
  {title:"THC vs CBD", body:"THC is commonly associated with intoxication. CBD is not usually associated with the same intoxicating effect."},
  {title:"What are terpenes?", body:"Terpenes are aroma compounds that help describe flavor, smell, and the general direction of a strain profile."},
  {title:"Low Anxiety Mode", body:"For anxiety-prone users, lower-THC, CBD-forward, or balanced THC/CBD directions may be more comfortable to explore."},
  {title:"Dispensary checklist", body:"Ask for lab-tested products, THC/CBD percentages, terpene profile, serving size, onset time, and beginner-friendly options."},
  {title:"Legal reminder", body:"Follow local laws. Do not drive or operate machinery while impaired."},
  {title:"Medical disclaimer", body:"StrainRelief is educational only and does not diagnose, treat, cure, or prevent any condition."}
];

const terpenes = [
  ["Myrcene","Often associated with body relaxation and nighttime-style directions."],
  ["Limonene","Often associated with bright citrus aroma and uplifted directions."],
  ["Pinene","Often associated with pine aroma and clearer daytime directions."],
  ["Caryophyllene","Often associated with peppery aroma and calming body comfort."],
  ["Linalool","Often associated with floral aroma and calming relaxation."],
  ["Terpinolene","Often associated with fresh herbal aroma and creative daytime directions."]
];

let currentFilter = "All";
let deferredPrompt = null;

function $(id){ return document.getElementById(id); }

function showToast(msg){
  const toast = $("toast");
  toast.textContent = msg;
  toast.style.display = "block";
  setTimeout(()=> toast.style.display = "none", 1700);
}

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  $(id).classList.add("active");
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
  const index = ["home","search","recommend","saved","learn"].indexOf(id);
  if(index >= 0) document.querySelectorAll(".nav-btn")[index].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(id === "saved") renderSaved();
}

function cardHTML(s){
  return `
    <article class="strain-card" onclick="openModal('${s.name.replace(/'/g,"\\'")}')">
      <div class="card-hero ${s.visual}">
        <div class="card-emoji">${s.emoji}</div>
      </div>
      <span class="eyebrow">${s.type}</span>
      <h3>${s.name}</h3>
      <p>${s.insight}</p>
      <div class="tags">
        ${s.tags.map(t=>`<span class="tag">${t}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderFeatured(){
  $("featuredGrid").innerHTML = strains.slice(0,10).map(cardHTML).join("");
  $("dailyText").textContent += ` · ${strains.length} strain directions available.`;
}

function renderFilters(){
  $("filterRow").innerHTML = filters.map(f=>`<button class="filter-chip ${f===currentFilter?'active':''}" onclick="setFilter('${f}')">${f}</button>`).join("");
}

function setFilter(f){
  currentFilter = f;
  renderFilters();
  renderSearch();
}

function renderSearch(){
  const q = $("searchInput").value.toLowerCase();
  const filtered = strains.filter(s=>{
    const text = [s.name,s.type,s.tags.join(" "),s.goals.join(" "),s.terpenes.join(" "),s.thc,s.cbd].join(" ").toLowerCase();
    const passSearch = text.includes(q);
    const passFilter = currentFilter === "All" || text.includes(currentFilter.toLowerCase());
    return passSearch && passFilter;
  });
  $("strainGrid").innerHTML = filtered.length ? filtered.map(cardHTML).join("") : `<div class="panel"><h3>No matches yet</h3><p>Try another strain, goal, terpene, or feeling.</p></div>`;
}

function openModal(name){
  const s = strains.find(x=>x.name===name);
  if(!s) return;
  const similar = strains.filter(x=>x.name!==s.name && (x.visual===s.visual || x.goals.some(g=>s.goals.includes(g)))).slice(0,4);
  $("modalBody").innerHTML = `
    <div class="modal-head">
      <div class="modal-emoji">${s.emoji}</div>
      <div>
        <span class="eyebrow">Strain Profile</span>
        <h2>${s.name}</h2>
        <p>${s.type}</p>
      </div>
    </div>
    <div class="tags">${s.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    <div class="panel">
      <h3>Match Score: ${s.score}%</h3>
      <div class="score-bar"><div class="score-fill" style="width:${s.score}%"></div></div>
      <p>${s.insight}</p>
    </div>
    <div class="panel">
      <h3>THC / CBD Direction</h3>
      <p><strong>THC:</strong> ${s.thc}</p>
      <p><strong>CBD:</strong> ${s.cbd}</p>
    </div>
    <div class="panel">
      <h3>Terpene Direction</h3>
      <div class="tags">${s.terpenes.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="panel">
      <h3>May align with</h3>
      <div class="tags">${s.goals.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="panel">
      <h3>Use caution if</h3>
      <div class="tags">${s.caution.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
    </div>
    <div class="panel">
      <h3>Similar directions</h3>
      <div class="tags">${similar.map(t=>`<span class="tag" onclick="openModal('${t.name.replace(/'/g,"\\'")}')">${t.name}</span>`).join("")}</div>
    </div>
    <button onclick="saveFavorite('${s.name.replace(/'/g,"\\'")}')">Save ${s.name}</button>
    <button class="ghost" onclick="shareStrain('${s.name.replace(/'/g,"\\'")}')">Share Direction</button>
  `;
  $("strainModal").classList.remove("hidden");
}

function closeModal(){
  $("strainModal").classList.add("hidden");
}

function saveFavorite(name){
  let saved = JSON.parse(localStorage.getItem("srSaved") || "[]");
  if(!saved.includes(name)) saved.unshift(name);
  saved = saved.slice(0,30);
  localStorage.setItem("srSaved", JSON.stringify(saved));
  renderSaved();
  showToast("Saved " + name);
}

function renderSaved(){
  const saved = JSON.parse(localStorage.getItem("srSaved") || "[]");
  $("savedList").innerHTML = saved.length ? saved.map(n=>`<div class="mini-item" onclick="openModal('${n.replace(/'/g,"\\'")}')">${n}</div>`).join("") : `<div class="empty-state"><strong>No favorites yet.</strong><br>Search or match a strain, then tap save.</div>`;
  renderJournal();
}

function loadJournalSelect(){
  $("journalStrain").innerHTML = `<option value="">Select strain</option>` + strains.map(s=>`<option>${s.name}</option>`).join("");
}

function saveJournal(){
  const strain = $("journalStrain").value;
  const mood = $("journalMood").value;
  const note = $("journalNote").value.trim();
  if(!strain){ showToast("Select a strain first"); return; }
  let journal = JSON.parse(localStorage.getItem("srJournal") || "[]");
  journal.unshift({strain,mood,note,date:new Date().toLocaleDateString()});
  journal = journal.slice(0,40);
  localStorage.setItem("srJournal", JSON.stringify(journal));
  $("journalMood").value = "";
  $("journalNote").value = "";
  renderJournal();
  showToast("Journal saved");
}

function renderJournal(){
  const journal = JSON.parse(localStorage.getItem("srJournal") || "[]");
  $("journalList").innerHTML = journal.length ? journal.map(j=>`
    <div class="mini-item"><strong>${j.strain}</strong><br>${j.date} · ${j.mood || "No mood selected"}<br>${j.note || "No notes added."}</div>
  `).join("") : `<div class="empty-state">No journal entries yet.</div>`;
}

function runMatcher(){
  const goal = $("goalSelect").value;
  const sensitivity = $("sensitivitySelect").value;
  const time = $("timeSelect").value;
  const lowAnxiety = $("lowAnxietyToggle").checked;
  let results = strains.filter(s=> !goal || s.goals.includes(goal) || s.tags.includes(goal) || s.insight.includes(goal));
  if(sensitivity === "low" || lowAnxiety) results = results.filter(s=> s.thc.toLowerCase().includes("low") || s.cbd.toLowerCase().includes("high") || s.tags.includes("CBD-forward"));
  if(time) results = results.filter(s=>s.tags.includes(time) || s.insight.includes(time) || s.type.includes(time));
  if(!results.length) results = strains.filter(s=>s.visual==="visual-cbd").slice(0,6);
  results = results.sort((a,b)=>b.score-a.score).slice(0,8);
  $("matchResults").innerHTML = results.map(cardHTML).join("");
  showToast("Directions matched");
}

function shareStrain(name){
  const text = `StrainRelief wellness direction: ${name}. Educational only. Follow local laws.`;
  if(navigator.share) navigator.share({title:"StrainRelief",text,url:location.href});
  else {
    navigator.clipboard.writeText(text + " " + location.href);
    showToast("Copied share text");
  }
}

function renderEducation(){
  $("terpeneExplorer").innerHTML = `<h3>Terpene Explorer</h3><div class="mini-list">${terpenes.map(t=>`<div class="mini-item"><strong>${t[0]}</strong><br>${t[1]}</div>`).join("")}</div>`;
  $("learnGrid").innerHTML = education.map(e=>`
    <div class="education-card">
      <h3>${e.title}</h3>
      <p>${e.body}</p>
    </div>
  `).join("");
}

function dailyTip(){
  const pick = strains[new Date().getDate() % strains.length];
  $("dailyTitle").textContent = pick.name;
  $("dailyText").textContent = pick.insight + " Educational only — start low and follow local laws.";
}

window.addEventListener("load",()=>{
  setTimeout(()=>{
    const splash = $("splash");
    if(splash){
      splash.style.opacity = "0";
      setTimeout(()=>splash.remove(),450);
    }
  },900);
});

window.addEventListener("beforeinstallprompt", (e)=>{
  e.preventDefault();
  deferredPrompt = e;
  $("installBanner").classList.remove("hidden");
});

$("installBtn").addEventListener("click", async()=>{
  if(!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  $("installBanner").classList.add("hidden");
});

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("service-worker.js").catch(()=>{});
}

$("searchInput").addEventListener("input", renderSearch);

dailyTip();
renderFeatured();
renderFilters();
renderSearch();
loadJournalSelect();
renderSaved();
renderEducation();
