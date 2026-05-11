const APP_VERSION="v47-recovery-clean";
const strains=[{"name": "Harlequin", "emoji": "🌱", "type": "CBD-dominant Hybrid", "category": "CBD", "thc": "Low to moderate THC", "cbd": "High CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Calm", "Clear-headed", "CBD-forward"], "goals": ["Anxiety", "Stress", "Body Comfort"], "score": 94, "flavor": "Earthy, herbal, mild sweetness", "caution": ["Strong high seekers"], "insight": "Harlequin is often discussed as a calm, clear-headed, cbd-forward direction. Ask for lab-tested options and start low.", "image": "images/strains/harlequin.webp"}, {"name": "ACDC", "emoji": "🍃", "type": "CBD-forward Hybrid", "category": "CBD", "thc": "Very low THC", "cbd": "Very high CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Functional", "Calm", "Low intoxication"], "goals": ["Anxiety", "Stress"], "score": 91, "flavor": "Earthy, citrus, pine", "caution": ["Strong high seekers"], "insight": "ACDC is often discussed as a functional, calm, low intoxication direction. Ask for lab-tested options and start low.", "image": "images/strains/acdc.webp"}, {"name": "Cannatonic", "emoji": "🌿", "type": "Balanced THC/CBD Hybrid", "category": "CBD", "thc": "Low to moderate THC", "cbd": "Moderate to high CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Calm", "Body comfort"], "goals": ["Stress", "Body Comfort"], "score": 89, "flavor": "Citrus, earthy, sweet", "caution": ["Strong high seekers"], "insight": "Cannatonic is often discussed as a balanced, calm, body comfort direction. Ask for lab-tested options and start low.", "image": "images/strains/cannatonic.webp"}, {"name": "Northern Lights", "emoji": "🌙", "type": "Indica", "category": "Sleep", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Nighttime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleepy", "Relaxed", "Nighttime"], "goals": ["Sleep", "Stress"], "score": 88, "flavor": "Pine, earthy, sweet spice", "caution": ["Strong high seekers"], "insight": "Northern Lights is often discussed as a sleepy, relaxed, nighttime direction. Ask for lab-tested options and start low.", "image": "images/strains/northern-lights.webp"}, {"name": "Blue Dream", "emoji": "💙", "type": "Balanced Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Mood", "Creative", "Balanced"], "goals": ["Mood", "Stress"], "score": 86, "flavor": "Berry, sweet, herbal", "caution": ["Strong high seekers"], "insight": "Blue Dream is often discussed as a mood, creative, balanced direction. Ask for lab-tested options and start low.", "image": "images/strains/blue-dream.webp"}, {"name": "Granddaddy Purple", "emoji": "🍇", "type": "Indica", "category": "Sleep", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Nighttime", "terpenes": ["Myrcene", "Caryophyllene", "Pinene"], "tags": ["Relaxation", "Evening", "Sleep"], "goals": ["Sleep", "Stress"], "score": 92, "flavor": "Grape, berry, sweet earth", "caution": ["Strong high seekers"], "insight": "Granddaddy Purple is often discussed as a relaxation, evening, sleep direction. Ask for lab-tested options and start low.", "image": "images/strains/granddaddy-purple.webp"}, {"name": "Sour Diesel", "emoji": "⚡", "type": "Sativa", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Caryophyllene", "Myrcene"], "tags": ["Energy", "Daytime", "Focus"], "goals": ["Mood", "Focus"], "score": 80, "flavor": "Diesel, citrus, sharp herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sour Diesel is often discussed as a energy, daytime, focus direction. Ask for lab-tested options and start low.", "image": "images/strains/sour-diesel.webp"}, {"name": "Girl Scout Cookies", "emoji": "🍪", "type": "Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Mood", "Relaxation"], "goals": ["Mood", "Stress", "Appetite"], "score": 84, "flavor": "Sweet, earthy, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Girl Scout Cookies is often discussed as a balanced, mood, relaxation direction. Ask for lab-tested options and start low.", "image": "images/strains/girl-scout-cookies.webp"}, {"name": "Pineapple Express", "emoji": "🍍", "type": "Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Happy", "Creative", "Daytime"], "goals": ["Mood", "Focus"], "score": 83, "flavor": "Pineapple, citrus, tropical", "caution": ["Strong high seekers"], "insight": "Pineapple Express is often discussed as a happy, creative, daytime direction. Ask for lab-tested options and start low.", "image": "images/strains/pineapple-express.webp"}, {"name": "Jack Herer", "emoji": "🌸", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Mood"], "goals": ["Mood", "Focus"], "score": 81, "flavor": "Pine, herbal, spice", "caution": ["Strong high seekers"], "insight": "Jack Herer is often discussed as a focus, energy, mood direction. Ask for lab-tested options and start low.", "image": "images/strains/jack-herer.webp"}, {"name": "Purple Punch", "emoji": "🫐", "type": "Indica-leaning Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 87, "flavor": "Berry, grape, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Purple Punch is often discussed as a sleep, calm, evening direction. Ask for lab-tested options and start low.", "image": "images/strains/purple-punch.webp"}, {"name": "Lemon Haze", "emoji": "🍋", "type": "Sativa-leaning", "category": "Mood", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Myrcene", "Caryophyllene"], "tags": ["Creative", "Daytime", "Mood"], "goals": ["Mood", "Focus"], "score": 78, "flavor": "Lemon, citrus, sweet", "caution": ["Strong high seekers"], "insight": "Lemon Haze is often discussed as a creative, daytime, mood direction. Ask for lab-tested options and start low.", "image": "images/strains/lemon-haze.webp"}, {"name": "Ringo's Gift", "emoji": "🎁", "type": "CBD-dominant Hybrid", "category": "CBD", "thc": "Very low THC", "cbd": "Very high CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Calm", "Beginner", "Stress"], "goals": ["Anxiety", "Stress"], "score": 90, "flavor": "Mint, pine, earthy", "caution": ["Strong high seekers"], "insight": "Ringo's Gift is often discussed as a calm, beginner, stress direction. Ask for lab-tested options and start low.", "image": "images/strains/ringo-s-gift.webp"}, {"name": "Charlotte's Web", "emoji": "🕊️", "type": "CBD-forward", "category": "CBD", "thc": "Very low THC", "cbd": "Very high CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Humulene"], "tags": ["Calm", "Stress", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 88, "flavor": "Earthy, floral, pine", "caution": ["Strong high seekers"], "insight": "Charlotte's Web is often discussed as a calm, stress, low thc direction. Ask for lab-tested options and start low.", "image": "images/strains/charlotte-s-web.webp"}, {"name": "Maui Wowie", "emoji": "🏝️", "type": "Sativa", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Myrcene"], "tags": ["Energy", "Mood", "Daytime"], "goals": ["Mood", "Focus"], "score": 82, "flavor": "Tropical, citrus, sweet", "caution": ["Strong high seekers"], "insight": "Maui Wowie is often discussed as a energy, mood, daytime direction. Ask for lab-tested options and start low.", "image": "images/strains/maui-wowie.webp"}, {"name": "Durban Poison", "emoji": "☀️", "type": "Sativa", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Ocimene", "Pinene"], "tags": ["Focus", "Daytime", "Energy"], "goals": ["Mood", "Focus"], "score": 77, "flavor": "Sweet, pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Durban Poison is often discussed as a focus, daytime, energy direction. Ask for lab-tested options and start low.", "image": "images/strains/durban-poison.webp"}, {"name": "White Widow", "emoji": "🕸️", "type": "Balanced Hybrid", "category": "Mood", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Mood", "Relaxation"], "goals": ["Mood", "Stress"], "score": 79, "flavor": "Earthy, woody, pepper", "caution": ["Strong high seekers"], "insight": "White Widow is often discussed as a balanced, mood, relaxation direction. Ask for lab-tested options and start low.", "image": "images/strains/white-widow.webp"}, {"name": "Wedding Cake", "emoji": "🎂", "type": "Indica-dominant Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Myrcene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Appetite"], "score": 82, "flavor": "Vanilla, sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Wedding Cake is often discussed as a relaxation, mood, evening direction. Ask for lab-tested options and start low.", "image": "images/strains/wedding-cake.webp"}, {"name": "Gelato", "emoji": "🍨", "type": "Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Mood", "Relaxation", "Creative"], "goals": ["Mood", "Stress"], "score": 81, "flavor": "Creamy, sweet, berry", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Gelato is often discussed as a mood, relaxation, creative direction. Ask for lab-tested options and start low.", "image": "images/strains/gelato.webp"}, {"name": "OG Kush", "emoji": "🌲", "type": "Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Limonene", "Caryophyllene"], "tags": ["Relaxation", "Stress", "Mood"], "goals": ["Stress", "Body Comfort"], "score": 83, "flavor": "Fuel, pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "OG Kush is often discussed as a relaxation, stress, mood direction. Ask for lab-tested options and start low.", "image": "images/strains/og-kush.webp"}, {"name": "Bubba Kush", "emoji": "🛋️", "type": "Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 72, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Bubba Kush may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/bubba-kush.webp"}, {"name": "Zkittlez", "emoji": "🌈", "type": "Indica-dominant Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 73, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Zkittlez may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/zkittlez.webp"}, {"name": "Super Silver Haze", "emoji": "✨", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 74, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Super Silver Haze may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/super-silver-haze.webp"}, {"name": "Green Crack", "emoji": "🟢", "type": "Balanced Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 75, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Green Crack may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/green-crack.webp"}, {"name": "LA Confidential", "emoji": "🌃", "type": "Indica", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 76, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "LA Confidential may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/la-confidential.webp"}, {"name": "Remedy", "emoji": "🧘", "type": "Sativa", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 77, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Remedy may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/remedy.webp"}, {"name": "Pennywise", "emoji": "🪙", "type": "CBD-forward Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 78, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Pennywise may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/pennywise.webp"}, {"name": "Mango Kush", "emoji": "🥭", "type": "Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 79, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Mango Kush may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mango-kush.webp"}, {"name": "Strawberry Cough", "emoji": "🍓", "type": "Indica-dominant Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 80, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Strawberry Cough may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/strawberry-cough.webp"}, {"name": "Chemdawg", "emoji": "⛽", "type": "Sativa-leaning Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 81, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Chemdawg may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/chemdawg.webp"}, {"name": "Apple Fritter", "emoji": "🍎", "type": "Balanced Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 82, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Apple Fritter may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/apple-fritter.webp"}, {"name": "Do-Si-Dos", "emoji": "🍩", "type": "Indica", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 83, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Do-Si-Dos may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/do-si-dos.webp"}, {"name": "Skywalker OG", "emoji": "🚀", "type": "Sativa", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 84, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Skywalker OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/skywalker-og.webp"}, {"name": "Banana Kush", "emoji": "🍌", "type": "CBD-forward Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 85, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Banana Kush may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/banana-kush.webp"}, {"name": "Ice Cream Cake", "emoji": "🍰", "type": "Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 86, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Ice Cream Cake may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/ice-cream-cake.webp"}, {"name": "Animal Cookies", "emoji": "🐾", "type": "Indica-dominant Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 87, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Animal Cookies may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/animal-cookies.webp"}, {"name": "MAC 1", "emoji": "🧪", "type": "Sativa-leaning Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 88, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "MAC 1 may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mac-1.webp"}, {"name": "Ghost Train Haze", "emoji": "🚂", "type": "Balanced Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 89, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Ghost Train Haze may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/ghost-train-haze.webp"}, {"name": "Forbidden Fruit", "emoji": "🍑", "type": "Indica", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 90, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Forbidden Fruit may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/forbidden-fruit.webp"}, {"name": "Sunset Sherbet", "emoji": "🌅", "type": "Sativa", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 91, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sunset Sherbet may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sunset-sherbet.webp"}, {"name": "Runtz", "emoji": "🍬", "type": "CBD-forward Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 92, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Runtz may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/runtz.webp"}, {"name": "Mimosa", "emoji": "🍊", "type": "Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 93, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Mimosa may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mimosa.webp"}, {"name": "Gorilla Glue #4", "emoji": "🦍", "type": "Indica-dominant Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 94, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Gorilla Glue #4 may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gorilla-glue-4.webp"}, {"name": "Cereal Milk", "emoji": "🥛", "type": "Sativa-leaning Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 95, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cereal Milk may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cereal-milk.webp"}, {"name": "Cherry Pie", "emoji": "🥧", "type": "Balanced Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 96, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cherry Pie may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cherry-pie.webp"}, {"name": "Tahoe OG", "emoji": "🏔️", "type": "Indica", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 72, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tahoe OG may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tahoe-og.webp"}, {"name": "Bruce Banner", "emoji": "💥", "type": "Sativa", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 73, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Bruce Banner may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/bruce-banner.webp"}, {"name": "Lemon Cherry Gelato", "emoji": "🍒", "type": "CBD-forward Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 74, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lemon Cherry Gelato may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lemon-cherry-gelato.webp"}, {"name": "Gary Payton", "emoji": "🏀", "type": "Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 75, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Gary Payton may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gary-payton.webp"}, {"name": "Oreoz", "emoji": "🍫", "type": "Indica-dominant Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 76, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Oreoz may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/oreoz.webp"}, {"name": "Blackberry Kush", "emoji": "🫐", "type": "Sativa-leaning Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 77, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blackberry Kush may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blackberry-kush.webp"}, {"name": "Trainwreck", "emoji": "🚆", "type": "Balanced Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 78, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Trainwreck may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/trainwreck.webp"}, {"name": "Tangie", "emoji": "🍊", "type": "Indica", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 79, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tangie may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tangie.webp"}, {"name": "Afghan Kush", "emoji": "🏜️", "type": "Sativa", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 80, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Afghan Kush may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/afghan-kush.webp"}, {"name": "Lava Cake", "emoji": "🍫", "type": "CBD-forward Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 81, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lava Cake may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lava-cake.webp"}, {"name": "Slurricane", "emoji": "🌧️", "type": "Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 82, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Slurricane may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/slurricane.webp"}, {"name": "Papaya", "emoji": "🥭", "type": "Indica-dominant Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 83, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Papaya may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/papaya.webp"}, {"name": "Blue Cheese", "emoji": "🧀", "type": "Sativa-leaning Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 84, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Cheese may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-cheese.webp"}, {"name": "Critical Mass", "emoji": "⚖️", "type": "Balanced Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 85, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Critical Mass may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/critical-mass.webp"}, {"name": "Super Lemon Haze", "emoji": "🍋", "type": "Indica", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 86, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Super Lemon Haze may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/super-lemon-haze.webp"}, {"name": "Grape Ape", "emoji": "🛋️", "type": "Sativa", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 87, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Grape Ape may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/grape-ape.webp"}, {"name": "Tropicana Cookies", "emoji": "🌈", "type": "CBD-forward Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 88, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tropicana Cookies may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tropicana-cookies.webp"}, {"name": "Alien OG", "emoji": "✨", "type": "Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 89, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Alien OG may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/alien-og.webp"}, {"name": "Platinum Cookies", "emoji": "🟢", "type": "Indica-dominant Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 90, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Platinum Cookies may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/platinum-cookies.webp"}, {"name": "Jillybean", "emoji": "🌃", "type": "Sativa-leaning Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 91, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Jillybean may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/jillybean.webp"}, {"name": "Sweet Tooth", "emoji": "🧘", "type": "Balanced Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 92, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sweet Tooth may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sweet-tooth.webp"}, {"name": "Sundae Driver", "emoji": "🪙", "type": "Indica", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 93, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sundae Driver may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sundae-driver.webp"}, {"name": "Clementine", "emoji": "🥭", "type": "Sativa", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 94, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Clementine may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/clementine.webp"}, {"name": "Lemon Skunk", "emoji": "🍓", "type": "CBD-forward Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 95, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lemon Skunk may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lemon-skunk.webp"}, {"name": "Kosher Kush", "emoji": "⛽", "type": "Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 96, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Kosher Kush may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/kosher-kush.webp"}, {"name": "Blueberry", "emoji": "🍎", "type": "Indica-dominant Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 72, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blueberry may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blueberry.webp"}, {"name": "Sour Tsunami", "emoji": "🍩", "type": "Sativa-leaning Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 73, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sour Tsunami may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sour-tsunami.webp"}, {"name": "Lifter", "emoji": "🚀", "type": "Balanced Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 74, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Lifter may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lifter.webp"}, {"name": "Suzy Q", "emoji": "🍌", "type": "Indica", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 75, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Suzy Q may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/suzy-q.webp"}, {"name": "Elektra", "emoji": "🍰", "type": "Sativa", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 76, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Elektra may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/elektra.webp"}, {"name": "Harle-Tsu", "emoji": "🐾", "type": "CBD-forward Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 77, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Harle-Tsu may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/harle-tsu.webp"}, {"name": "CBD Critical Cure", "emoji": "🧪", "type": "Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 78, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "CBD Critical Cure may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cbd-critical-cure.webp"}, {"name": "Valentine X", "emoji": "🚂", "type": "Indica-dominant Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 79, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Valentine X may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/valentine-x.webp"}, {"name": "Quantum Kush", "emoji": "🍑", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 80, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Quantum Kush may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/quantum-kush.webp"}, {"name": "Blue Thai", "emoji": "🌅", "type": "Balanced Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 81, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Thai may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-thai.webp"}, {"name": "Platinum OG", "emoji": "🍬", "type": "Indica", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 82, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Platinum OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/platinum-og.webp"}, {"name": "Black Domina", "emoji": "🍊", "type": "Sativa", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 83, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Black Domina may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/black-domina.webp"}, {"name": "Romulan", "emoji": "🦍", "type": "CBD-forward Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 84, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Romulan may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/romulan.webp"}, {"name": "Chocolate Thai", "emoji": "🥛", "type": "Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 85, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Chocolate Thai may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/chocolate-thai.webp"}, {"name": "Acapulco Gold", "emoji": "🥧", "type": "Indica-dominant Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 86, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Acapulco Gold may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/acapulco-gold.webp"}, {"name": "Lamb's Bread", "emoji": "🏔️", "type": "Sativa-leaning Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 87, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lamb's Bread may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lamb-s-bread.webp"}, {"name": "Panama Red", "emoji": "💥", "type": "Balanced Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 88, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Panama Red may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/panama-red.webp"}, {"name": "Blue Zushi", "emoji": "🍒", "type": "Indica", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 89, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Zushi may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-zushi.webp"}, {"name": "Amnesia Haze", "emoji": "🏀", "type": "Sativa", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 90, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Amnesia Haze may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/amnesia-haze.webp"}, {"name": "Banana Cream", "emoji": "🍫", "type": "CBD-forward Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 91, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Banana Cream may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/banana-cream.webp"}, {"name": "Strawnana", "emoji": "🫐", "type": "Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 92, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Strawnana may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/strawnana.webp"}, {"name": "Member Berry", "emoji": "🚆", "type": "Indica-dominant Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 93, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Member Berry may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/member-berry.webp"}, {"name": "Space Queen", "emoji": "🍊", "type": "Sativa-leaning Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 94, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Space Queen may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/space-queen.webp"}, {"name": "Lemon Tree", "emoji": "🏜️", "type": "Balanced Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 95, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lemon Tree may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lemon-tree.webp"}, {"name": "Cactus Breath", "emoji": "🍫", "type": "Indica", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 96, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cactus Breath may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cactus-breath.webp"}, {"name": "Purple Urkle", "emoji": "🌧️", "type": "Sativa", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 72, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Purple Urkle may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/purple-urkle.webp"}, {"name": "Orange Cookies", "emoji": "🥭", "type": "CBD-forward Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 73, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Orange Cookies may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/orange-cookies.webp"}, {"name": "Sherbert", "emoji": "🧀", "type": "Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 74, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sherbert may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sherbert.webp"}, {"name": "Blueberry Muffin", "emoji": "⚖️", "type": "Indica-dominant Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 75, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blueberry Muffin may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blueberry-muffin.webp"}, {"name": "Peach Crescendo", "emoji": "🍋", "type": "Sativa-leaning Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 76, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Peach Crescendo may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/peach-crescendo.webp"}, {"name": "Chem Cookies", "emoji": "🛋️", "type": "Balanced Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 77, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Chem Cookies may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/chem-cookies.webp"}, {"name": "Dosilato", "emoji": "🌈", "type": "Indica", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 78, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Dosilato may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/dosilato.webp"}, {"name": "Jokerz", "emoji": "✨", "type": "Sativa", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 79, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Jokerz may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/jokerz.webp"}, {"name": "Red Velvet", "emoji": "🟢", "type": "CBD-forward Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 80, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Red Velvet may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/red-velvet.webp"}, {"name": "Cake Crasher", "emoji": "🌃", "type": "Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 81, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Cake Crasher may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cake-crasher.webp"}, {"name": "Honey Bun", "emoji": "🧘", "type": "Indica-dominant Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 82, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Honey Bun may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/honey-bun.webp"}, {"name": "Blue Gelato", "emoji": "🪙", "type": "Sativa-leaning Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 83, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Gelato may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-gelato.webp"}, {"name": "Blueberry Kush", "emoji": "🥭", "type": "Balanced Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 84, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blueberry Kush may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blueberry-kush.webp"}, {"name": "Watermelon Zkittlez", "emoji": "🍓", "type": "Indica", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 85, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Watermelon Zkittlez may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/watermelon-zkittlez.webp"}, {"name": "Modified Grapes", "emoji": "⛽", "type": "Sativa", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 86, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Modified Grapes may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/modified-grapes.webp"}, {"name": "Donny Burger", "emoji": "🍎", "type": "CBD-forward Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 87, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Donny Burger may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/donny-burger.webp"}, {"name": "Kosher Dawg", "emoji": "🍩", "type": "Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 88, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Kosher Dawg may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/kosher-dawg.webp"}, {"name": "LA Kush Cake", "emoji": "🚀", "type": "Indica-dominant Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 89, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "LA Kush Cake may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/la-kush-cake.webp"}, {"name": "White Runtz", "emoji": "🍌", "type": "Sativa-leaning Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 90, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "White Runtz may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/white-runtz.webp"}, {"name": "Cherry Gelato", "emoji": "🍰", "type": "Balanced Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 91, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cherry Gelato may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cherry-gelato.webp"}, {"name": "Sunshine Daydream", "emoji": "🐾", "type": "Indica", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 92, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sunshine Daydream may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sunshine-daydream.webp"}, {"name": "Mendo Breath", "emoji": "🧪", "type": "Sativa", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 93, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Mendo Breath may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mendo-breath.webp"}, {"name": "Orange Herijuana", "emoji": "🚂", "type": "CBD-forward Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 94, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Orange Herijuana may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/orange-herijuana.webp"}, {"name": "Fire OG", "emoji": "🍑", "type": "Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 95, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Fire OG may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/fire-og.webp"}, {"name": "Pink Kush", "emoji": "🌅", "type": "Indica-dominant Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 96, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Pink Kush may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/pink-kush.webp"}, {"name": "GMO Cookies", "emoji": "🍬", "type": "Sativa-leaning Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 72, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "GMO Cookies may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gmo-cookies.webp"}, {"name": "Khalifa Kush", "emoji": "🍊", "type": "Balanced Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 73, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Khalifa Kush may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/khalifa-kush.webp"}, {"name": "Motorbreath", "emoji": "🦍", "type": "Indica", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 74, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Motorbreath may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/motorbreath.webp"}, {"name": "Peanut Butter Breath", "emoji": "🥛", "type": "Sativa", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 75, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Peanut Butter Breath may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/peanut-butter-breath.webp"}, {"name": "Sherbacio", "emoji": "🥧", "type": "CBD-forward Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 76, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sherbacio may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sherbacio.webp"}, {"name": "Permanent Marker", "emoji": "🏔️", "type": "Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 77, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Permanent Marker may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/permanent-marker.webp"}, {"name": "Apples and Bananas", "emoji": "💥", "type": "Indica-dominant Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 78, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Apples and Bananas may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/apples-and-bananas.webp"}, {"name": "Jealousy", "emoji": "🍒", "type": "Sativa-leaning Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 79, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Jealousy may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/jealousy.webp"}, {"name": "Biscotti", "emoji": "🏀", "type": "Balanced Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 80, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Biscotti may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/biscotti.webp"}, {"name": "Kush Mints", "emoji": "🍫", "type": "Indica", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 81, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Kush Mints may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/kush-mints.webp"}, {"name": "Georgia Pie", "emoji": "🫐", "type": "Sativa", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 82, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Georgia Pie may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/georgia-pie.webp"}, {"name": "London Pound Cake", "emoji": "🚆", "type": "CBD-forward Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 83, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "London Pound Cake may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/london-pound-cake.webp"}, {"name": "Carbon Fiber", "emoji": "🍊", "type": "Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 84, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Carbon Fiber may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/carbon-fiber.webp"}, {"name": "Rainbow Belts", "emoji": "🏜️", "type": "Indica-dominant Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 85, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Rainbow Belts may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/rainbow-belts.webp"}, {"name": "Tropical Runtz", "emoji": "🍫", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 86, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tropical Runtz may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tropical-runtz.webp"}, {"name": "Gushers", "emoji": "🌧️", "type": "Balanced Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 87, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Gushers may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gushers.webp"}, {"name": "Marshmallow OG", "emoji": "🥭", "type": "Indica", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 88, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Marshmallow OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/marshmallow-og.webp"}, {"name": "Black Cherry Gelato", "emoji": "🧀", "type": "Sativa", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 89, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Black Cherry Gelato may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/black-cherry-gelato.webp"}, {"name": "Blue Cookies", "emoji": "⚖️", "type": "CBD-forward Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 90, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Cookies may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-cookies.webp"}, {"name": "Canna-Tsu", "emoji": "🍋", "type": "Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 91, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Canna-Tsu may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/canna-tsu.webp"}, {"name": "Stephen Hawking Kush", "emoji": "🛋️", "type": "Indica-dominant Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 92, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Stephen Hawking Kush may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/stephen-hawking-kush.webp"}, {"name": "Critical Kush", "emoji": "🌈", "type": "Sativa-leaning Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 93, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Critical Kush may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/critical-kush.webp"}, {"name": "Cherry AK", "emoji": "✨", "type": "Balanced Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 94, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cherry AK may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cherry-ak.webp"}, {"name": "White Rhino", "emoji": "🟢", "type": "Indica", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 95, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "White Rhino may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/white-rhino.webp"}, {"name": "Godfather OG", "emoji": "🌃", "type": "Sativa", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 96, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Godfather OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/godfather-og.webp"}, {"name": "Super Boof", "emoji": "🧘", "type": "CBD-forward Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 72, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Super Boof may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/super-boof.webp"}, {"name": "Cap Junky", "emoji": "🪙", "type": "Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 73, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cap Junky may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cap-junky.webp"}, {"name": "RS11", "emoji": "🥭", "type": "Indica-dominant Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 74, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "RS11 may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/rs11.webp"}, {"name": "Zoap", "emoji": "🍓", "type": "Sativa-leaning Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 75, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Zoap may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/zoap.webp"}, {"name": "Pink Runtz", "emoji": "⛽", "type": "Balanced Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 76, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Pink Runtz may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/pink-runtz.webp"}];


// === v18 Real Strain Image System ===
// Uses real cannabis-flower photo sources by default, while still supporting local files.
// For verified strain-specific photos later, add WebP files to /images/strains/ using each strain slug.
const REAL_STRAIN_PHOTO_POOL = [
  "https://source.unsplash.com/900x650/?cannabis,bud,macro",
  "https://source.unsplash.com/900x650/?marijuana,flower,macro",
  "https://source.unsplash.com/900x650/?cannabis,plant,bud",
  "https://source.unsplash.com/900x650/?hemp,flower,closeup",
  "https://source.unsplash.com/900x650/?cannabis,grow,flower",
  "https://source.unsplash.com/900x650/?cannabis,trichomes",
  "https://source.unsplash.com/900x650/?weed,bud,macro",
  "https://source.unsplash.com/900x650/?cannabis,greenhouse",
  "https://source.unsplash.com/900x650/?medical,cannabis,flower",
  "https://source.unsplash.com/900x650/?cannabis,botanical"
];
function slugifyStrainName(name){return String(name||'strain').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function strainPhotoSeed(s){
  const name=String(s?.name||'strain');
  let n=0; for(let i=0;i<name.length;i++) n=(n+name.charCodeAt(i)*(i+7))%100000;
  return n;
}
function strainImage(s){
  const slug=slugifyStrainName(s?.name||'strain');
  const local=`images/strains/${slug}.webp`;
  // Real-photo mode: use live real cannabis imagery, cache-friendly per strain via sig.
  const seed=strainPhotoSeed(s);
  const photo=REAL_STRAIN_PHOTO_POOL[seed % REAL_STRAIN_PHOTO_POOL.length] + `&sig=${seed}`;
  return photo;
}
function strainImageFallback(s){
  const slug=slugifyStrainName(s?.name||'strain');
  return `images/strains/${slug}.webp`;
}
function repairStrainImage(img, name){
  const slug=slugifyStrainName(name||'strain');
  if(!img.dataset.triedLocal){ img.dataset.triedLocal='1'; img.src=`images/strains/${slug}.webp`; return; }
  if(!img.dataset.triedFallback){ img.dataset.triedFallback='1'; img.src='images/strains/fallback.webp'; return; }
  img.style.display='none';
}
const filters=["All","CBD","Sleep","Daytime","Mood","Focus","Stress","Body Comfort","Appetite"];
function sortedStrains(){return [...strains].sort((a,b)=>String(a.name).localeCompare(String(b.name),undefined,{sensitivity:"base"}))}

function overlapCount(a,b){
  const A=(a||[]).map(x=>String(x).toLowerCase());
  const B=(b||[]).map(x=>String(x).toLowerCase());
  return A.filter(x=>B.includes(x)).length;
}
function profileWords(value){
  return String(value||"").toLowerCase().replace(/[^a-z0-9\s-]/g," ").split(/[\s-]+/).filter(Boolean);
}
function smartSimilarityScore(base,other){
  if(!base||!other||base.name===other.name)return -999;
  let score=0;
  if(base.category===other.category)score+=12;
  if(String(base.time||"").toLowerCase()===String(other.time||"").toLowerCase())score+=5;
  score+=overlapCount(base.goals,other.goals)*8;
  score+=overlapCount(base.tags,other.tags)*5;
  score+=overlapCount(base.terpenes,other.terpenes)*6;
  score+=overlapCount(profileWords(base.type),profileWords(other.type))*4;
  const thcGap=Math.abs(thcLevelValue(base.thc)-thcLevelValue(other.thc));
  const cbdGap=Math.abs(cbdLevelValue(base.cbd)-cbdLevelValue(other.cbd));
  if(thcGap<=15)score+=4; else if(thcGap<=30)score+=2;
  if(cbdGap<=15)score+=4; else if(cbdGap<=30)score+=2;
  if(String(base.flavor||"").toLowerCase().split(/,\s*/).some(f=>f&&String(other.flavor||"").toLowerCase().includes(f)))score+=2;
  return score;
}
function shuffleCopy(items){
  const copy=[...items];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}
function getSimilarDirections(base,limit=8){
  // Smart but varied: score actual similarity first, then randomly pick from a wider qualified pool.
  // Final display is alphabetized so it feels organized instead of repetitive.
  const ranked=strains
    .filter(s=>s.name!==base.name)
    .map(s=>({...s,_similarity:smartSimilarityScore(base,s)}))
    .filter(s=>s._similarity>=8)
    .sort((a,b)=>b._similarity-a._similarity || String(a.name).localeCompare(String(b.name),undefined,{sensitivity:"base"}));
  const strong=ranked.filter(s=>s._similarity>=16);
  const medium=ranked.filter(s=>s._similarity>=11 && s._similarity<16);
  const fallback=ranked.filter(s=>s._similarity<11);
  const picked=[];
  const used=new Set();
  const takeFrom=(pool,count)=>{
    shuffleCopy(pool).forEach(s=>{
      if(picked.length<count && !used.has(s.name)){picked.push(s);used.add(s.name)}
    });
  };
  takeFrom(strong,Math.min(limit,Math.ceil(limit*.7)));
  takeFrom(medium,limit);
  takeFrom(fallback,limit);
  if(picked.length<limit){
    ranked.forEach(s=>{if(picked.length<limit&&!used.has(s.name)){picked.push(s);used.add(s.name)}});
  }
  return picked.slice(0,limit).sort((a,b)=>String(a.name).localeCompare(String(b.name),undefined,{sensitivity:"base"}));
}

const education=[
{title:"Start low and go slow",body:"Use lower serving sizes first, especially if new or sensitive to THC. Wait to understand how it affects you before taking more."},
{title:"THC vs CBD",body:"THC is commonly associated with intoxication. CBD is not usually associated with the same intoxicating effect."},
{title:"What are terpenes?",body:"Terpenes are aroma compounds that help describe flavor, smell, and the general direction of a strain profile."},
{title:"Low Anxiety Mode",body:"For anxiety-prone users, lower-THC, CBD-forward, or balanced THC/CBD directions may be more comfortable to explore."},
{title:"Dispensary checklist",body:"Ask for lab-tested products, THC/CBD percentages, terpene profile, serving size, onset time, and beginner-friendly options."},
{title:"Medical disclaimer",body:"StrainRelief is educational only and does not diagnose, treat, cure, or prevent any condition."},
{title:"Privacy",body:"Favorites, recent views, and journal entries stay locally on this device. Compare picks clear when the app restarts."},
{title:"Monetization ready",body:"Ready for future ads, premium features, affiliate wellness links where legal, and sponsored educational placements."}
];
const terpenes=[["Myrcene","Often associated with body relaxation and nighttime-style directions."],["Limonene","Often associated with bright citrus aroma and uplifting citrus-style directions."],["Pinene","Often associated with pine aroma and clearer daytime directions."],["Caryophyllene","Often associated with peppery aroma and calming body comfort."],["Linalool","Often associated with floral aroma and calming relaxation."],["Terpinolene","Often associated with fresh herbal aroma and creative daytime directions."],["Humulene","Often associated with earthy aroma and balanced body comfort."]];
let currentFilter="All",deferredPrompt=null;
const $=id=>document.getElementById(id);
const store=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const read=(k,f=[])=>{try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f))}catch{return f}};
// Compare picks are temporary by design: saved favorites and journal stay, but compare clears on every fresh app load.
localStorage.removeItem("srCompare");
function safeName(n){return String(n).replace(/\\/g,"\\\\").replace(/\'/g,"\\\'")}
function showToast(m){const t=$("toast"); if(!t)return; t.textContent=m;t.style.display="block";t.classList.add("show");setTimeout(()=>{t.classList.remove("show");t.style.display="none"},1800)}
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(id)?.classList.add("active");document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));let i=["home","search","recommend","saved","learn"].indexOf(id);if(i>=0)document.querySelectorAll(".nav-btn")[i].classList.add("active");window.scrollTo({top:0,behavior:"smooth"});if(id==="saved")renderSaved();if(id==="home"){renderRecentHome();renderSmartInsights();}setTimeout(()=>{srAttachReveal();srAnimateMeters()},70)}
function jumpFilter(f){currentFilter=f;showPage("search");renderFilters();renderSearch()}

function strainAccentColor(s){
  const text=[s?.name,s?.category,s?.flavor,(s?.tags||[]).join(" "),(s?.goals||[]).join(" "),(s?.terpenes||[]).join(" ")].join(" ").toLowerCase();
  if(text.includes("blue") || text.includes("berry") || text.includes("blueberry")) return "#6f9dff";
  if(text.includes("purple") || text.includes("grape") || text.includes("granddaddy")) return "#b56cff";
  if(text.includes("lemon") || text.includes("citrus") || text.includes("orange") || text.includes("tangie")) return "#ffd35c";
  if(text.includes("cherry") || text.includes("strawberry") || text.includes("red") || text.includes("watermelon")) return "#ff6f9f";
  if(text.includes("pineapple") || text.includes("mango") || text.includes("papaya") || text.includes("tropical")) return "#ffb84d";
  if(String(s?.time||"").toLowerCase().includes("night") || String(s?.time||"").toLowerCase().includes("evening") || String(s?.category||"").toLowerCase().includes("sleep")) return "#8d7cff";
  if(String(s?.category||"").toLowerCase().includes("focus") || String(s?.time||"").toLowerCase().includes("day")) return "#5de8ff";
  if(text.includes("cbd") || text.includes("calm") || text.includes("low thc")) return "#74ffad";
  return "#63ff9c";
}
function strainThemeStyle(s){
  const accent=strainAccentColor(s);
  return `--strain-accent:${accent};--strain-accent-soft:${accent}22;--strain-accent-mid:${accent}55;`;
}
function shortInsight(s){
  const tags=(s?.tags||[]).slice(0,2).join(", ").toLowerCase();
  const terp=(s?.terpenes||[])[0]||"terpene";
  const time=String(s?.time||"flexible timing").toLowerCase();
  return `${s.name} leans ${tags||"balanced"} with a ${terp}-forward profile for ${time} exploration.`;
}

function cardHTML(s){return `<article class="strain-card sr-2026-card" data-strain="${s.name}" style="${strainThemeStyle(s)}" onclick="openModal('${safeName(s.name)}')"><div class="card-hero sr-image-shell"><img src="${strainImage(s)}" alt="${s.name} real cannabis flower image" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"></div><div class="strain-card-topline"><span class="eyebrow">${s.type}</span><span class="sr-orb"></span></div><h3>${s.name}</h3><p>${shortInsight(s)}</p><div class="tags">${s.tags.slice(0,4).map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`}
function getDailySeed(date=new Date()){
  const start=new Date(date.getFullYear(),0,0);
  const diff=date-start;
  const oneDay=1000*60*60*24;
  return Math.floor(diff/oneDay);
}
function seededHash(str){
  let h=2166136261;
  for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}
  return h>>>0;
}
function dailyShuffle(list, salt=""){
  const seed=getDailySeed()+"-"+salt;
  return [...list].sort((a,b)=>seededHash(seed+"-"+a.name)-seededHash(seed+"-"+b.name));
}
function renderFeatured(){
  const seed=getDailySeed();
  const categories=["CBD","Sleep","Mood","Stress","Body Comfort","Focus","Daytime","Appetite"];
  const todaysCategory=categories[seed%categories.length];
  let pool=strains.filter(s=>searchableText(s).toLowerCase().includes(todaysCategory.toLowerCase()));
  if(pool.length<8) pool=[...strains];
  const mixed=dailyShuffle(pool,"trending-today").slice(0,12).sort((a,b)=>a.name.localeCompare(b.name));
  $("trendingGrid").innerHTML=mixed.map(cardHTML).join("");
}
function renderFilters(){$("filterRow").innerHTML=filters.map(f=>`<button class="filter-chip ${f===currentFilter?'active':''}" onclick="setFilter('${f}')">${f}</button>`).join("")}
function setFilter(f){currentFilter=f;renderFilters();renderSearch()}
function searchableText(s){return [s.name,s.type,s.category,(s.tags||[]).join(" "),(s.goals||[]).join(" "),(s.terpenes||[]).join(" "),s.thc,s.cbd,s.time,s.flavor,s.insight].join(" ").toLowerCase()}
function renderSearch(){const q=$("searchInput").value.toLowerCase().trim();const filtered=sortedStrains().filter(s=>{const text=searchableText(s);return(!q||text.includes(q))&&(currentFilter==="All"||text.includes(currentFilter.toLowerCase()))});$("strainGrid").innerHTML=filtered.length?filtered.map(cardHTML).join(""):`<div class="panel"><h3>No matches yet</h3><p>Try another strain, goal, terpene, or feeling.</p></div>`;srAttachReveal()}
function clearSearch(){$("searchInput").value="";currentFilter="All";renderFilters();renderSearch()}
function addRecent(name){let r=read("srRecent",[]).filter(x=>x!==name);r.unshift(name);store("srRecent",r.slice(0,8));renderRecentHome();updateStats()}
function renderRecentHome(){const r=read("srRecent",[]);$("recentHome").innerHTML=r.length?r.map(n=>`<div class="mini-item" onclick="openModal('${safeName(n)}')">${n}</div>`).join(""):`<div class="empty-state">No recently viewed strains yet. Open a strain profile to start.</div>`}
function getStrain(name){return strains.find(x=>x.name===name)}

function thcLevelValue(text){
  text=String(text||"").toLowerCase();
  if(text.includes("very low")) return 12;
  if(text.includes("low to moderate")) return 34;
  if(text.includes("low")) return 22;
  if(text.includes("moderate to high")) return 74;
  if(text.includes("high")) return 88;
  if(text.includes("moderate")) return 55;
  return 45;
}
function cbdLevelValue(text){
  text=String(text||"").toLowerCase();
  if(text.includes("very high")) return 92;
  if(text.includes("moderate to high")) return 72;
  if(text.includes("high")) return 82;
  if(text.includes("low")) return 16;
  if(text.includes("moderate")) return 52;
  return 35;
}
function potencyLabel(s){
  const thc=thcLevelValue(s.thc);
  const cbd=cbdLevelValue(s.cbd);
  if(cbd>=70 && thc<=40) return "Beginner-friendly direction";
  if(thc>=75) return "High THC direction";
  if((s.time||"").toLowerCase().includes("night")) return "Nighttime direction";
  if((s.time||"").toLowerCase().includes("day")) return "Daytime direction";
  return "Balanced direction";
}
function strainBadges(s){
  const arr=[potencyLabel(s), s.category, s.time].filter(Boolean);
  if((s.tags||[]).some(t=>String(t).toLowerCase().includes("cbd"))) arr.unshift("CBD-forward");
  if((s.caution||[]).join(" ").toLowerCase().includes("anxiety")) arr.push("Use extra caution");
  return [...new Set(arr)].slice(0,5);
}
function terpeneInfo(name){
  const map={
    Myrcene:"Often associated with earthy aroma and body-relaxation style directions.",
    Limonene:"Often associated with citrus aroma and brighter mood-style directions.",
    Pinene:"Often associated with pine aroma and clearer daytime-style directions.",
    Caryophyllene:"Often associated with peppery aroma and body-comfort style directions.",
    Linalool:"Often associated with floral aroma and calmer evening-style directions.",
    Terpinolene:"Often associated with fresh herbal aroma and creative daytime-style directions.",
    Humulene:"Often associated with earthy aroma and balanced body-comfort directions.",
    Ocimene:"Often associated with sweet herbal aroma and daytime-style directions."
  };
  return map[name] || "Aroma compound used to describe flavor, smell, and general strain direction.";
}
function meterHTML(label,value,caption){
  return `<div class="meter-block"><div class="meter-label"><strong>${label}</strong><span>${value}%</span></div><div class="premium-meter"><div class="premium-meter-fill" style="width:${value}%"></div></div><p>${caption}</p></div>`;
}
function accordionHTML(title,body,open=false){
  return `<details class="sr-accordion" ${open?'open':''}><summary>${title}</summary><div class="accordion-body">${body}</div></details>`;
}
function personalizedLine(s){
  const recent=read("srRecent",[]).filter(n=>n!==s.name);
  const saved=savedRecords().filter(x=>x.name!==s.name);
  let reason=[];
  if(saved.length) reason.push(`you have ${saved.length} other saved direction${saved.length===1?"":"s"}`);
  if(recent.length) reason.push(`you recently viewed ${recent[0]}`);
  if((s.tags||[]).some(t=>String(t).toLowerCase().includes("calm"))) reason.push("this profile leans calm/grounded");
  if((s.cbd||"").toLowerCase().includes("high")) reason.push("it has a CBD-forward profile");
  if(!reason.length) reason.push("it matches common educational wellness exploration patterns");
  return `Because ${reason.slice(0,2).join(" and ")}, ${s.name} may be worth comparing with nearby directions before choosing anything.`;
}
function cautionText(s){
  let items=[...(s.caution||[])];
  const text=[s.thc,s.cbd,s.type,s.tags?.join(" ")].join(" ").toLowerCase();
  if(text.includes("high thc")) items.push("THC-sensitive or newer users");
  if(!items.some(x=>String(x).toLowerCase().includes("drive"))) items.push("Driving or operating machinery");
  items.push("Mixing with alcohol or other substances");
  items.push("Using without checking local laws");
  return [...new Set(items)].slice(0,6);
}
function saveMatchedHistory(names){
  let h=read("srMatched",[]);
  h.unshift({date:new Date().toLocaleDateString(), names:names.slice(0,5)});
  store("srMatched",h.slice(0,10));
}
function renderMatchedHistory(){
  const h=read("srMatched",[]);
  const box=$("matchedHistory");
  if(!box)return;
  box.innerHTML=h.length?`<div class="panel card-glow"><h3>Recent Match History</h3><div class="mini-list">${h.slice(0,4).map(x=>`<div class="mini-item"><strong>${x.date}</strong><br>${x.names.join(", ")}</div>`).join("")}</div></div>`:"";
}
function launchOnboarding(){
  if(localStorage.getItem("srOnboardingDone")==="yes") return;
  const wrap=document.createElement("div");
  wrap.id="onboardingModal";
  wrap.className="onboarding-modal";
  wrap.innerHTML=`<div class="onboarding-card"><span class="eyebrow">Welcome to StrainRelief</span><h2>Explore smarter. Stay safer.</h2><div class="onboarding-steps"><div><strong>1</strong><span>Search 150+ educational strain directions.</span></div><div><strong>2</strong><span>Match by goal, THC sensitivity, and time of day.</span></div><div><strong>3</strong><span>Save, compare, and journal what you learn.</span></div></div><p>Educational only. Not medical advice. Follow local laws and do not drive while impaired.</p><button onclick="finishOnboarding()">Start Exploring</button></div>`;
  document.body.appendChild(wrap);
}
function finishOnboarding(){
  localStorage.setItem("srOnboardingDone","yes");
  document.getElementById("onboardingModal")?.remove();
}

function isModalOpen(){return !$("strainModal")?.classList.contains("hidden")}
function isCompared(name){return read("srCompare",[]).includes(name)}
function setCompareButtonState(name){
  document.querySelectorAll(".compare-action").forEach(btn=>{
    const target=btn.dataset.name;
    if(name && target!==name) return;
    const added=isCompared(target);
    btn.textContent=added?"Added ✓":"Compare";
    btn.classList.toggle("compare-added",added);
  });
}

function openModal(name){
  const s=getStrain(name);if(!s)return;document.documentElement.style.setProperty("--active-strain-accent", strainAccentColor(s));addRecent(name);
  const sim=getSimilarDirections(s,8);
  const thcVal=thcLevelValue(s.thc), cbdVal=cbdLevelValue(s.cbd);
  const terpeneBody=`<div class="terpene-grid">${(s.terpenes||[]).map(t=>`<div class="terpene-card"><strong>${t}</strong><p>${terpeneInfo(t)}</p></div>`).join("")}</div>`;
  const overview=`<p>${s.insight}</p><div class="badge-row">${strainBadges(s).map(b=>`<span class="badge ${b.includes("High")?'warning':''}">${b}</span>`).join("")}</div>`;
  const meters=`${meterHTML("THC direction",thcVal,s.thc)}${meterHTML("CBD direction",cbdVal,s.cbd)}<div class="detail-grid"><div><strong>Best time</strong><span>${s.time}</span></div><div><strong>Category</strong><span>${s.category}</span></div><div><strong>Flavor / aroma</strong><span>${s.flavor}</span></div><div><strong>Profile</strong><span>${s.type}</span></div></div>`;
  const cautions=`<div class="tags caution-tags">${cautionText(s).map(t=>`<span class="tag">${t}</span>`).join("")}</div><p class="fine-print">Start low, wait to understand effects, ask for lab-tested products, and talk to a licensed professional for medical questions.</p>`;
  $("modalBody").innerHTML=`
    <div class="modal-art premium-art"><img src="${strainImage(s)}" alt="${s.name} real cannabis flower image" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"></div>
    <div class="modal-head premium-modal-head"><div class="modal-emoji">${s.emoji||'🌿'}</div><div><span class="eyebrow">Premium Strain Profile</span><h2>${s.name}</h2><p>${s.type}</p></div></div>
    <div class="premium-score-card panel"><div class="score-ring" style="--score:${s.score||75}%"><span>${s.score||75}%</span></div><div><h3>${potencyLabel(s)}</h3><p>${personalizedLine(s)}</p></div></div>
    ${accordionHTML("Overview",overview,true)}
    ${accordionHTML("THC / CBD + Timing",meters,true)}
    ${accordionHTML("Terpene Breakdown",terpeneBody,false)}
    ${accordionHTML("Wellness Direction",`<p><strong>May align with:</strong> ${(s.goals||[]).join(", ")}</p><p><strong>Commonly described as:</strong> ${(s.tags||[]).join(", ")}</p><p>This is an educational direction, not a treatment recommendation.</p>`,false)}
    ${accordionHTML("Use Caution If",cautions,false)}
    ${accordionHTML("Similar Directions",`<div class="similar-scroll">${sim.map(t=>`<button class="similar-pill" onclick="openModal('${safeName(t.name)}')">${t.name}<small>${t.category}</small></button>`).join("")}</div>`,false)}
    <div class="sticky-modal-actions"><button onclick="saveFavorite('${safeName(s.name)}')">Save</button><button data-name="${s.name}" class="ghost compare-action ${isCompared(s.name)?'compare-added':''}" onclick="addCompare('${safeName(s.name)}')">${isCompared(s.name)?'Added ✓':'Compare'}</button><button class="ghost" onclick="prefillJournal('${safeName(s.name)}')">Journal</button><button class="ghost" onclick="shareStrain('${safeName(s.name)}')">Share</button></div>`;
  $("strainModal").classList.remove("hidden");
  document.documentElement.classList.add("sr-modal-open");document.body.classList.add("sr-modal-open");
  renderCompareTray();
  setTimeout(()=>{document.querySelector(".modal-card")?.scrollTo(0,0);srAttachReveal();srAnimateMeters();animatePremiumMeters()},40)
}

function closeModal(){
  $("strainModal").classList.add("hidden");
  document.documentElement.classList.remove("sr-modal-open");
  document.body.classList.remove("sr-modal-open");
  renderCompareTray();
}

function nowStamp(){return new Date().toISOString()}
function niceDate(iso){try{return new Date(iso).toLocaleString([], {month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return "Saved"}}
function savedRecords(){
  const raw=read("srSaved",[]);
  return raw.map(x=>typeof x==="string"?{name:x,date:nowStamp()}:x).filter(x=>x&&x.name);
}
function writeSavedRecords(items){store("srSaved",items.slice(0,120))}
function miniMeter(label,val){return `<div class="mini-meter"><span>${label}</span><b>${val}%</b><i style="width:${val}%"></i></div>`}
function savedCardHTML(name,date){
  const s=getStrain(name); if(!s) return "";
  return `<article class="saved-card sr-2026-card" data-strain="${s.name}" style="${strainThemeStyle(s)}"><button class="saved-open" onclick="openModal('${safeName(s.name)}')"><img src="${strainImage(s)}" alt="${s.name}" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"><div><span class="saved-emoji">${s.emoji||'🌿'}</span><h4>${s.name}</h4><p>${s.type}</p><small>Saved ${niceDate(date)}</small></div></button><div class="saved-mini-info">${miniMeter('THC',thcLevelValue(s.thc))}${miniMeter('CBD',cbdLevelValue(s.cbd))}</div><div class="saved-actions"><button class="small-btn" onclick="openModal('${safeName(s.name)}')">Open</button><button class="small-btn ghost" onclick="removeFavorite('${safeName(s.name)}')">Remove</button></div></article>`;
}
function renderMoodChips(){
  const wrap=$("journalMoodChips"); if(!wrap)return;
  const moods=["Calm","Relaxed","Sleepy","Focused","Creative","Hungry","Clear-headed","Too intense","Not noticeable"];
  const selected=$("journalMood")?.value||"";
  wrap.innerHTML=moods.map(m=>`<button type="button" class="mood-chip ${m===selected?'active':''}" onclick="setJournalMood('${safeName(m)}')">${m}</button>`).join("");
}
function setJournalMood(mood){$("journalMood").value=mood;renderMoodChips()}
function savedSearchChanged(){renderSaved()}

function saveFavorite(name){
  let list=savedRecords().filter(x=>x.name!==name);
  list.unshift({name,date:nowStamp()});
  writeSavedRecords(list);
  renderSaved();updateStats();showToast("Saved "+name)
}
function removeFavorite(name){writeSavedRecords(savedRecords().filter(x=>x.name!==name));renderSaved();updateStats()}
function clearSaved(){localStorage.removeItem("srSaved");renderSaved();updateStats();showToast("Saved cleared")}
function renderSaved(){
  const q=($("savedSearch")?.value||"").toLowerCase().trim();
  const list=savedRecords().filter(x=>!q||searchableText(getStrain(x.name)||{}).includes(q)||String(x.name).toLowerCase().includes(q));
  const all=savedRecords();
  const box=$("savedList"); if(!box)return;
  box.innerHTML=list.length?`<div class="saved-grid">${list.map(x=>savedCardHTML(x.name,x.date)).join("")}</div>`:(all.length?`<div class="empty-state"><strong>No saved strains match that search.</strong><br>Try another name, terpene, or category.</div>`:`<div class="empty-state upgraded-empty"><span>♡</span><strong>No favorites yet.</strong><br>Search or match a strain, then tap save. Your saved directions will show here as visual cards.</div>`);
  renderJournal();renderMoodChips();updateStats()
}
function loadJournalSelect(){$("journalStrain").innerHTML=`<option value="">Select strain</option>`+sortedStrains().map(s=>`<option>${s.name}</option>`).join("")}
function prefillJournal(name){closeModal();showPage("saved");$("journalStrain").value=name;$("journalNote").focus()}
function saveJournal(){
  const strain=$("journalStrain").value,mood=$("journalMood").value,note=$("journalNote").value.trim();
  if(!strain){showToast("Select a strain first");return}
  let j=read("srJournal",[]);
  j.unshift({strain,mood,note,date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString([], {hour:"numeric",minute:"2-digit"}),stamp:nowStamp()});
  store("srJournal",j.slice(0,150));
  $("journalMood").value="";$("journalNote").value="";renderMoodChips();renderJournal();updateStats();showToast("Journal saved")
}
function deleteJournal(i){let j=read("srJournal",[]);j.splice(i,1);store("srJournal",j);renderJournal();updateStats()}
function clearJournal(){localStorage.removeItem("srJournal");renderJournal();updateStats();showToast("Journal cleared")}
function renderJournal(){
  const j=read("srJournal",[]); const box=$("journalList"); if(!box)return;
  box.innerHTML=j.length?`<div class="journal-grid">${j.map((x,i)=>{const s=getStrain(x.strain)||{};return `<article class="journal-card"><div class="journal-card-head"><span>${s.emoji||'📝'}</span><div><h4>${x.strain}</h4><small>${x.date||niceDate(x.stamp)} ${x.time?`• ${x.time}`:""}</small></div></div>${x.mood?`<b class="journal-mood">${x.mood}</b>`:""}<p>${x.note||"No notes added."}</p><div class="journal-actions"><button class="small-btn" onclick="openModal('${safeName(x.strain)}')">Open strain</button><button class="small-btn ghost" onclick="deleteJournal(${i})">Delete</button></div></article>`}).join("")}</div>`:`<div class="empty-state upgraded-empty"><span>✎</span><strong>No journal entries yet.</strong><br>Save how a strain direction felt, what time you explored it, and notes you may want later.</div>`;
  renderJournalChart(j)
}
function renderJournalChart(j){if(!j.length){$("journalChart").innerHTML="";return}const c={};j.forEach(x=>{if(x.mood)c[x.mood]=(c[x.mood]||0)+1});const max=Math.max(...Object.values(c),1);$("journalChart").innerHTML=`<h3>Mood Tracker</h3>`+Object.keys(c).map(k=>`<div class="chart-line"><div class="chart-label"><span>${k}</span><span>${c[k]}</span></div><div class="chart-bar"><div class="chart-fill" style="width:${(c[k]/max)*100}%"></div></div></div>`).join("")}
function runMatcher(){
  const goal=$("goalSelect").value,sens=$("sensitivitySelect").value,time=$("timeSelect").value,low=$("lowAnxietyToggle").checked;
  let r=strains.map(s=>{
    let pts=s.score||70;const text=searchableText(s);
    if(goal&&text.includes(goal.toLowerCase()))pts+=24;
    if(time&&text.includes(time.toLowerCase()))pts+=10;
    if((sens==="low"||low)&&(text.includes("low thc")||text.includes("very low")||text.includes("high cbd")||text.includes("cbd-forward")))pts+=28;
    if((sens==="low"||low)&&(text.includes("high thc")))pts-=30;
    if(sens==="high"&&text.includes("high thc"))pts+=8;
    return {...s,_match:Math.max(1,Math.min(99,pts))}
  }).sort((a,b)=>b._match-a._match).slice(0,12);
  saveMatchedHistory(r.map(x=>x.name));
  $("matchExplain").classList.remove("hidden");
  $("matchExplain").innerHTML=`<h3>Your personalized direction map</h3><p>Sorted by your goal, THC sensitivity, preferred time, Low Anxiety Mode, and safer-use weighting. These are educational directions only. Ask for lab-tested products and avoid driving while impaired.</p><div class="match-summary">${r.slice(0,3).map(x=>`<button onclick="openModal('${safeName(x.name)}')"><strong>${x._match}%</strong><span>${x.name}</span></button>`).join("")}</div>`;
  $("matchResults").innerHTML=r.map(cardHTML).join("");
  renderMatchedHistory();
  showToast("Directions matched");srAttachReveal()
}
function shareStrain(name){const text=`StrainRelief wellness direction: ${name}. Educational only. Follow local laws.`;if(navigator.share)navigator.share({title:"StrainRelief",text,url:location.href}).catch(()=>{});else navigator.clipboard.writeText(text+" "+location.href).then(()=>showToast("Copied share text"))}
function renderEducation(){
  $("onboardingSlides").innerHTML=`<h3>Quick Start</h3><div class="mini-list"><div class="mini-item"><strong>1. Search</strong><br>Find strain directions by name, effect, or terpene.</div><div class="mini-item"><strong>2. Match</strong><br>Use your goal and sensitivity.</div><div class="mini-item"><strong>3. Save + Journal</strong><br>Track what you explored and how it felt.</div></div>`;
  $("terpeneExplorer").innerHTML=`<h3>Terpene Explorer</h3><div class="mini-list">${terpenes.map(t=>`<div class="mini-item"><strong>${t[0]}</strong><br>${t[1]}</div>`).join("")}</div>`;
  $("locatorBox").innerHTML=`<h3>Dispensary Prep</h3><p>Use this checklist when shopping legally. Ask questions before buying and compare products by lab results, serving size, and onset time.</p><div class="checklist"><div>✅ Lab-tested product / COA</div><div>✅ THC percentage and CBD percentage</div><div>✅ Terpene profile</div><div>✅ Serving size or dose guidance</div><div>✅ Expected onset time and duration</div><div>✅ Beginner-friendly or lower-THC options</div><div>✅ Avoid driving while impaired</div><div>✅ Follow local laws</div></div><button onclick="copyChecklist()">Copy Checklist</button>`;
  $("termsBox").innerHTML=`<h3>Privacy + Terms</h3><p>This version stores favorites, recent views, compare picks, and journal entries locally on your device. No account system is active yet. StrainRelief is educational only and does not provide medical advice.</p>`;
  $("learnGrid").innerHTML=education.map(e=>`<div class="education-card"><h3>${e.title}</h3><p>${e.body}</p></div>`).join("")
}
function copyChecklist(){navigator.clipboard.writeText("Ask for lab-tested products, THC/CBD percentages, terpene profile, serving size, onset time, and lower-risk beginner-friendly options. Follow local laws. Do not drive while impaired.").then(()=>showToast("Checklist copied"))}
function dailyTip(){
  const seed=getDailySeed();
  const dailyThemes=[
    {label:'Low-THC lane',match:s=>cbdLevelValue(s.cbd)>=70&&thcLevelValue(s.thc)<=40,text:'Lower-THC and CBD-forward education for a slower, safer comparison.'},
    {label:'Evening wind-down',match:s=>String(s.time).toLowerCase().includes('evening')||String(s.time).toLowerCase().includes('night'),text:'A calmer evening-style direction to compare before saving or journaling.'},
    {label:'Daytime clarity',match:s=>String(s.time).toLowerCase().includes('day'),text:'A daytime-style direction for focus, mood, and terpene comparison.'},
    {label:'Body comfort',match:s=>searchableText(s).includes('body comfort'),text:'A body-comfort direction with terpene notes worth checking.'},
    {label:'Stress support',match:s=>searchableText(s).includes('stress'),text:'A stress-style direction with lower-risk shopping questions in mind.'},
    {label:'Mood check',match:s=>searchableText(s).includes('mood'),text:'A mood-style direction to compare by timing, THC, and terpenes.'},
    {label:'Terpene spotlight',match:s=>(s.terpenes||[]).length,text:'A terpene-led direction for today’s quick exploration.'}
  ];
  const theme=dailyThemes[seed%dailyThemes.length];
  let pool=strains.filter(theme.match); if(!pool.length) pool=[...strains];
  const pick=dailyShuffle(pool,`daily-wellness-${new Date().toDateString()}`)[0];
  const terp=(pick.terpenes||[])[seed%Math.max(1,(pick.terpenes||[]).length)]||'terpene profile';
  const title=$('dailyTitle');
  const text=$('dailyText');
  if(title) title.textContent=`${theme.label}: ${pick.name}`;
  if(text) text.innerHTML=`${theme.text} <strong>Spotlight:</strong> ${terp}. <button class="inline-link" onclick="openModal('${safeName(pick.name)}')">Open profile</button>`;
}
function updateStats(){
  const strainCountEl=$("strainCount");
  if(strainCountEl) strainCountEl.textContent=String(strains.length);
  const savedCountEl=$("savedCount");
  if(savedCountEl) savedCountEl.textContent=String(savedRecords().length);
  const journalCountEl=$("journalCount");
  if(journalCountEl) journalCountEl.textContent=String(read("srJournal",[]).length);
  renderCompareTray();
}
function surpriseMe(){const p=strains[Math.floor(Math.random()*strains.length)];openModal(p.name)}
function addCompare(name){
  let c=read("srCompare",[]).filter(x=>x!==name);
  c.unshift(name);
  store("srCompare",c.slice(0,2));
  setCompareButtonState(name);
  renderCompareTray();
  showToast(isModalOpen() ? "Added to compare — close profile to compare" : "Added to compare");
}
function clearCompare(){
  localStorage.removeItem("srCompare");
  setCompareButtonState();
  renderCompareTray();
  showToast("Compare cleared");
}
function renderCompareTray(){
  const c=read("srCompare",[]);
  const tray=$("compareTray");
  if(!tray)return;
  if(!c.length || isModalOpen()){
    tray.classList.add("hidden");
    return;
  }
  tray.classList.remove("hidden");
  tray.classList.toggle("ready",c.length>=2);
  $("compareText").innerHTML=c.length===1
    ? `<strong>1 selected</strong><span>Add one more strain to compare.</span>`
    : `<strong>${c[0]} vs ${c[1]}</strong><span>Ready to compare directions.</span>`;
}
function compareMeter(label,value,caption){
  return `<div class="compare-meter-row"><div><strong>${label}</strong><small>${caption}</small></div><b>${value}%</b><i><em style="width:${value}%"></em></i></div>`;
}
function compareHighlightLabel(a,b,metric){
  if(!a||!b) return "";
  if(metric==="lowerThc"){
    const av=thcLevelValue(a.thc), bv=thcLevelValue(b.thc);
    if(av===bv) return "Even";
    return av<bv ? "Lower THC" : "Higher THC";
  }
  if(metric==="higherCbd"){
    const av=cbdLevelValue(a.cbd), bv=cbdLevelValue(b.cbd);
    if(av===bv) return "Even";
    return av>bv ? "Higher CBD" : "Lower CBD";
  }
  return "";
}


function compareFitScore(s,other){
  if(!s)return 0;
  let score=62;
  const thc=thcLevelValue(s.thc), cbd=cbdLevelValue(s.cbd);
  score += Math.round((100-thc)*0.13);
  score += Math.round(cbd*0.12);
  if(other){
    if(thc < thcLevelValue(other.thc)) score += 7;
    if(cbd > cbdLevelValue(other.cbd)) score += 7;
    const shared=(s.terpenes||[]).filter(t=>(other.terpenes||[]).includes(t));
    score += Math.min(shared.length*3,9);
  }
  if(String(s.time||'').toLowerCase().includes('day')) score += 2;
  if(String(s.thc||'').toLowerCase().includes('high')) score -= 5;
  return Math.max(48,Math.min(96,score));
}
function comparePairScore(a,b,shared){
  if(!a||!b)return 0;
  let score=44;
  const thcGap=Math.abs(thcLevelValue(a.thc)-thcLevelValue(b.thc));
  const cbdGap=Math.abs(cbdLevelValue(a.cbd)-cbdLevelValue(b.cbd));
  score += Math.max(0,24-Math.round(thcGap*.35));
  score += Math.max(0,20-Math.round(cbdGap*.25));
  if(String(a.time||'').toLowerCase()===String(b.time||'').toLowerCase()) score+=10;
  if(String(a.category||'').toLowerCase()===String(b.category||'').toLowerCase()) score+=8;
  score += Math.min((shared||[]).length*6,18);
  return Math.max(35,Math.min(98,score));
}
function strongerDirectionWinner(a,b,key){
  if(!a||!b)return '';
  if(key==='lowerThc'){
    const av=thcLevelValue(a.thc), bv=thcLevelValue(b.thc);
    return av===bv?'Even':(av<bv?a.name:b.name);
  }
  if(key==='higherCbd'){
    const av=cbdLevelValue(a.cbd), bv=cbdLevelValue(b.cbd);
    return av===bv?'Even':(av>bv?a.name:b.name);
  }
  if(key==='timing'){
    return String(a.time||'').toLowerCase()===String(b.time||'').toLowerCase()?`Both ${a.time}`:`${a.name}: ${a.time} • ${b.name}: ${b.time}`;
  }
  if(key==='category'){
    return String(a.category||'').toLowerCase()===String(b.category||'').toLowerCase()?`Both ${a.category}`:`${a.name}: ${a.category} • ${b.name}: ${b.category}`;
  }
  return '';
}
function compareWhyMatters(a,b,shared){
  if(!b)return 'Add one more strain to compare THC/CBD direction, timing, terpene overlap, and caution notes.';
  const aThc=thcLevelValue(a.thc), bThc=thcLevelValue(b.thc);
  const aCbd=cbdLevelValue(a.cbd), bCbd=cbdLevelValue(b.cbd);
  const thcLine=aThc===bThc
    ? `Both show a similar THC direction`
    : `${aThc<bThc?a.name:b.name} leans lower THC`;
  const cbdLine=aCbd===bCbd
    ? `both show a similar CBD direction`
    : `${aCbd>bCbd?a.name:b.name} leans higher CBD`;
  const timeLine=String(a.time||'').toLowerCase()===String(b.time||'').toLowerCase()
    ? `both lean ${String(a.time||'similar timing').toLowerCase()}`
    : `${a.name} leans ${String(a.time||'one timing').toLowerCase()}, while ${b.name} leans ${String(b.time||'another timing').toLowerCase()}`;
  const overlap=shared.length?`Shared terpene: ${shared.slice(0,3).join(', ')}.`:'Different terpene directions.';
  return `${thcLine}; ${cbdLine}; ${timeLine}. ${overlap} Educational only — cannabis affects everyone differently.`;
}
function compareBadgeFor(s,other){
  if(!other) return "Selected";
  const thc=thcLevelValue(s.thc), othThc=thcLevelValue(other.thc);
  const cbd=cbdLevelValue(s.cbd), othCbd=cbdLevelValue(other.cbd);
  if(cbd>=othCbd+20 && thc<=othThc) return "Lower-risk lean";
  if(thc<=othThc-20) return "Lower THC";
  if(cbd>=othCbd+20) return "Higher CBD";
  if((s.time||"")!== (other.time||"")) return s.time||"Different timing";
  return "Compare fit";
}
function compareCellClass(key,s,all){
  if(all.length<2) return "";
  const other=all.find(x=>x.name!==s.name);
  if(!other) return "";
  if(key==="thc" && thcLevelValue(s.thc)<thcLevelValue(other.thc)) return " win";
  if(key==="cbd" && cbdLevelValue(s.cbd)>cbdLevelValue(other.cbd)) return " win";
  if(key==="time" && String(s.time).toLowerCase()===String(other.time).toLowerCase()) return " note";
  return "";
}
function openCompare(){
  const c=read("srCompare",[]).map(getStrain).filter(Boolean);
  if(!c.length){showToast("Add a strain to compare first");return;}
  const [a,b]=c;
  const shared=c.length>1?[...new Set((a.terpenes||[]).filter(t=>(b.terpenes||[]).includes(t)))]:[...new Set(c.flatMap(s=>s.terpenes||[]))];
  const allTerps=[...new Set(c.flatMap(s=>s.terpenes||[]))];
  const pairScore=c.length>1?comparePairScore(a,b,shared):compareFitScore(a,null);
  const cards=c.map((s,idx)=>{const other=c[idx===0?1:0];return `<article class="compare-card compact premium-mini ${other?'has-opponent':''}">
    <div class="compare-card-img"><img src="${strainImage(s)}" onerror="repairStrainImage(this, '${safeName(s.name)}')" alt="${s.name}"></div>
    <div class="compare-card-title"><span class="eyebrow">${s.category}</span><h3>${s.name}</h3><p>${s.type}</p><em>${compareBadgeFor(s,other)}</em></div>
    <div class="mini-meter-pair">${compareMeter("THC",thcLevelValue(s.thc),s.thc)}${compareMeter("CBD",cbdLevelValue(s.cbd),s.cbd)}</div>
    <button class="compare-open-profile" onclick="openModal('${safeName(s.name)}')">Open ${s.name}</button>
  </article>`}).join("");
  const rows=[
    ["type","Type"],["thc","THC"],["cbd","CBD"],["time","Best time"],["category","Category"],["flavor","Flavor"]
  ].map(([key,label])=>`<div class="compare-row polished compact-row"><strong>${label}</strong>${c.map(s=>`<span class="${compareCellClass(key,s,c)}">${s[key]||""}</span>`).join("")}</div>`).join("");
  const winnerNote=c.length>1?`<div class="compare-winner-grid premium-winners">
    <div><strong>Lower THC</strong><span>${strongerDirectionWinner(a,b,'lowerThc')}</span></div>
    <div><strong>Higher CBD</strong><span>${strongerDirectionWinner(a,b,'higherCbd')}</span></div>
    <div><strong>Timing</strong><span>${strongerDirectionWinner(a,b,'timing')}</span></div>
    <div><strong>Direction</strong><span>${strongerDirectionWinner(a,b,'category')}</span></div>
  </div>`:"";
  const guidance=c.length<2
    ? `<div class="empty-state compare-hint"><strong>Add one more strain.</strong><br>Open another strain profile and tap Compare to unlock the full side-by-side view.</div>`
    : `<div class="panel compare-insight polished premium-top-read"><div class="compare-match-score"><strong>${pairScore}%</strong><span>similar direction match</span></div><h3>Quick Read</h3><p>${compareWhyMatters(a,b,shared)}</p>${winnerNote}</div>`;
  document.getElementById("modalBody").innerHTML=`<div class="compare-premium compare-full polished compact-premium">
    <div class="compare-sticky-title premium-vs"><span class="compare-name-stack">${c.length>1?`<b>${a.name}</b><i>vs</i><b>${b.name}</b>`:`<b>${a.name}</b>`}</span><button class="small-btn ghost" onclick="clearCompare();closeModal()">Clear</button></div>
    <span class="eyebrow">Side-by-side</span>
    <h2>Compare Directions</h2>
    <p>Compare educational strain profiles before saving or journaling.</p>
    ${guidance}
    <div class="compare-card-grid polished compact-cards">${cards}</div>
    <div class="compare-table polished compact-table">${rows}</div>
    <div class="panel terpene-overlap-card compact-terps"><h3>Terpene overlap</h3><p>${shared.length?'Shared terpene directions between these picks.':'Each pick leans on different terpene directions.'}</p><div class="tags">${(shared.length?shared:allTerps).map(t=>`<span class="tag ${shared.includes(t)?'hot':''}">${t}</span>`).join("")}</div></div>
    <div class="sticky-modal-actions compare-bottom-actions"><button onclick="clearCompare();closeModal()">Clear Compare</button>${c.map(s=>`<button class="ghost" onclick="openModal('${safeName(s.name)}')">Open ${s.name}</button>`).join("")}</div>
  </div>`;
  document.getElementById("strainModal").classList.remove("hidden");
  document.documentElement.classList.add("sr-modal-open");
  document.body.classList.add("sr-modal-open");
  renderCompareTray();
  setTimeout(()=>document.querySelector(".modal-card")?.scrollTo(0,0),40);
}
function srRevealVisible(){document.querySelectorAll(".reveal-on-scroll").forEach(el=>{const r=el.getBoundingClientRect();if(r.top<innerHeight*.92)el.classList.add("revealed")})}
function srAttachReveal(){document.querySelectorAll(".panel,.strain-card,.daily-card,.pro-card,.section-title,.education-card").forEach((el,i)=>{el.classList.add("reveal-on-scroll");el.style.setProperty("--reveal-delay",Math.min(i*20,180)+"ms")});srRevealVisible()}
function srTapFeedback(){document.addEventListener("pointerdown",e=>{const btn=e.target.closest("button,.strain-card,.tag,.mini-item,.filter-chip");if(!btn)return;btn.classList.add("tap-pop");setTimeout(()=>btn.classList.remove("tap-pop"),220)},{passive:true})}
function srMoveGlow(){
  const glowTargets=".hero,.panel,.strain-card,.daily-card,.pro-card,.section-title";
  const clearGlow=()=>document.querySelectorAll(glowTargets).forEach(card=>{
    card.style.removeProperty("--mx");
    card.style.removeProperty("--my");
  });

  document.addEventListener("pointermove",e=>{
    const card=e.target.closest(glowTargets);
    if(!card)return;
    const b=card.getBoundingClientRect();
    card.style.setProperty("--mx",((e.clientX-b.left)/b.width*100).toFixed(1)+"%");
    card.style.setProperty("--my",((e.clientY-b.top)/b.height*100).toFixed(1)+"%");
  },{passive:true});

  // Mobile polish: remove the glow/cursor spot the moment the finger lifts,
  // cancels, leaves the screen, or the page scroll settles.
  ["pointerup","pointercancel","pointerleave","touchend","touchcancel","scroll"].forEach(evt=>{
    document.addEventListener(evt,()=>setTimeout(clearGlow,evt==="scroll"?120:0),{passive:true});
  });
}
function srAnimateMeters(){document.querySelectorAll(".chart-fill").forEach(el=>{const w=el.style.width||"0%";el.style.width="0%";requestAnimationFrame(()=>setTimeout(()=>el.style.width=w,80))})}
function dismissInstall(){localStorage.setItem("srInstallDismissed","yes");$("installBanner").classList.add("hidden")}
window.addEventListener("load",()=>{setTimeout(()=>{const s=$("splash");if(s){s.style.opacity="0";setTimeout(()=>s.remove(),450)}},450); if(localStorage.getItem("srSafetyAccepted")!=="yes")$("safetyGate").classList.remove("hidden");srTapFeedback();srMoveGlow();srAttachReveal();srAnimateMeters()});
$("acceptSafetyBtn")?.addEventListener("click",()=>{localStorage.setItem("srSafetyAccepted","yes");$("safetyGate").classList.add("hidden")});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;if(localStorage.getItem("srInstallDismissed")!=="yes")$("installBanner").classList.remove("hidden")});
$("installBtn")?.addEventListener("click",async()=>{if(!deferredPrompt){showToast("Use browser menu to install");return}deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("installBanner").classList.add("hidden")});
$("strainModal")?.addEventListener("click",e=>{if(e.target.id==="strainModal")closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});window.addEventListener("scroll",srRevealVisible,{passive:true});
if("serviceWorker" in navigator){navigator.serviceWorker.register("service-worker.js").catch(()=>{})}
$("searchInput")?.addEventListener("input",renderSearch);$("savedSearch")?.addEventListener("input",savedSearchChanged);$("journalMood")?.addEventListener("change",renderMoodChips);
dailyTip();renderFeatured();renderFilters();renderSearch();loadJournalSelect();renderMoodChips();renderSaved();renderRecentHome();renderEducation();updateStats();renderMatchedHistory();setTimeout(launchOnboarding,900);


function animatePremiumMeters(){
  document.querySelectorAll(".premium-meter-fill").forEach(el=>{
    const w=el.style.width||"0%";
    el.style.width="0%";
    requestAnimationFrame(()=>setTimeout(()=>el.style.width=w,120));
  });
}


/* === v17 Growth Upgrade: motion, personalization, onboarding, AI-style summaries, sharing, PWA polish === */
function srPreferenceSnapshot(){
  const goal=$('goalSelect')?.value||'';
  const sens=$('sensitivitySelect')?.value||'';
  const time=$('timeSelect')?.value||'';
  const saved=savedRecords().map(x=>getStrain(x.name)).filter(Boolean);
  const journal=read('srJournal',[]).map(x=>getStrain(x.strain)).filter(Boolean);
  const picked=[...saved,...journal];
  const goals=[goal,...picked.flatMap(s=>s.goals||[])].filter(Boolean);
  const terps=picked.flatMap(s=>s.terpenes||[]);
  return {goal,sens,time,goals,terps,hasHistory:picked.length>0||!!goal||!!sens||!!time};
}
function personalizedFitScore(s){
  const pref=srPreferenceSnapshot();
  let pts=s.score||72;
  const text=searchableText(s);
  if(pref.goal && text.includes(pref.goal.toLowerCase())) pts+=18;
  if(pref.time && text.includes(pref.time.toLowerCase())) pts+=10;
  if(pref.sens==='low' && (text.includes('very low')||text.includes('low thc')||text.includes('high cbd')||text.includes('cbd-forward'))) pts+=18;
  if(pref.sens==='low' && text.includes('high thc')) pts-=28;
  if(pref.sens==='high' && text.includes('high thc')) pts+=8;
  pref.goals.forEach(g=>{ if(g && text.includes(String(g).toLowerCase())) pts+=3; });
  (s.terpenes||[]).forEach(t=>{ if(pref.terps.includes(t)) pts+=4; });
  return Math.max(32,Math.min(99,Math.round(pts)));
}
function aiDirectionSummary(s){
  const thc=thcLevelValue(s.thc), cbd=cbdLevelValue(s.cbd);
  const lowRisk=(cbd>=70&&thc<=40)||String(s.type).toLowerCase().includes('cbd');
  const timing=s.time||'flexible timing';
  const terp=(s.terpenes||[])[0]||'terpene profile';
  const caution=thc>=70?'Use extra caution if THC-sensitive or anxiety-prone.':(lowRisk?'This leans lower-intoxication, but effects can still vary.':'Compare THC level, timing, and terpene notes before choosing.');
  return `${s.name} may be worth exploring for ${((s.goals||[]).slice(0,2).join(' and ')||s.category).toLowerCase()} directions. It leans ${timing.toLowerCase()}, with ${terp} as a key terpene note. ${caution} Educational only — ask for lab-tested products and follow local laws.`;
}
function cardHTML(s){
  const fit=personalizedFitScore(s);
  return `<article class="strain-card upgraded-card" onclick="openModal('${safeName(s.name)}')"><div class="card-hero"><img src="${strainImage(s)}" alt="${s.name} real cannabis flower image" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"></div><div class="card-topline"><span class="eyebrow">${s.type}</span><b>${fit}% fit</b></div><h3>${s.name}</h3><p>${aiDirectionSummary(s)}</p><div class="tags">${s.tags.slice(0,4).map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`
}
function renderFeatured(){
  const seed=getDailySeed();
  const categories=['CBD','Sleep','Mood','Stress','Body Comfort','Focus','Daytime','Appetite'];
  const todaysCategory=categories[seed%categories.length];
  let pool=strains.filter(s=>searchableText(s).includes(todaysCategory.toLowerCase()));
  if(pool.length<8) pool=[...strains];
  const mixed=dailyShuffle(pool,`trending-${new Date().toDateString()}`).slice(0,12).sort((a,b)=>a.name.localeCompare(b.name));
  $('trendingGrid').innerHTML=mixed.map(cardHTML).join('');
  srAttachReveal(); srAnimateMeters();
}
function renderSearch(){
  const input=$('searchInput'); const q=(input?.value||'').toLowerCase().trim();
  const filtered=sortedStrains().filter(s=>{const text=searchableText(s);return(!q||text.includes(q))&&(currentFilter==='All'||text.includes(currentFilter.toLowerCase()))});
  $('strainGrid').innerHTML=filtered.length?filtered.map(cardHTML).join(''):`<div class="empty-state upgraded-empty search-empty"><span>⌕</span><strong>No matching direction yet.</strong><br>Try a strain name, terpene like limonene, a goal like sleep, or clear filters.</div>`;
  srAttachReveal();
}
function dailyTip(){
  const seed=getDailySeed();
  const dailyThemes=[
    {label:'Low-THC lane',match:s=>cbdLevelValue(s.cbd)>=70&&thcLevelValue(s.thc)<=40,text:'Lower-THC and CBD-forward education for a slower, safer comparison.'},
    {label:'Evening wind-down',match:s=>String(s.time).toLowerCase().includes('evening')||String(s.time).toLowerCase().includes('night'),text:'A calmer evening-style direction to compare before saving or journaling.'},
    {label:'Daytime clarity',match:s=>String(s.time).toLowerCase().includes('day'),text:'A daytime-style direction for focus, mood, and terpene comparison.'},
    {label:'Body comfort',match:s=>searchableText(s).includes('body comfort'),text:'A body-comfort direction with terpene notes worth checking.'},
    {label:'Stress support',match:s=>searchableText(s).includes('stress'),text:'A stress-style direction with lower-risk shopping questions in mind.'},
    {label:'Mood check',match:s=>searchableText(s).includes('mood'),text:'A mood-style direction to compare by timing, THC, and terpenes.'},
    {label:'Terpene spotlight',match:s=>(s.terpenes||[]).length,text:'A terpene-led direction for today’s quick exploration.'}
  ];
  const theme=dailyThemes[seed%dailyThemes.length];
  let pool=strains.filter(theme.match); if(!pool.length) pool=[...strains];
  const pick=dailyShuffle(pool,`daily-wellness-${new Date().toDateString()}`)[0];
  const terp=(pick.terpenes||[])[seed%Math.max(1,(pick.terpenes||[]).length)]||'terpene profile';
  const title=$('dailyTitle');
  const text=$('dailyText');
  if(title) title.textContent=`${theme.label}: ${pick.name}`;
  if(text) text.innerHTML=`${theme.text} <strong>Spotlight:</strong> ${terp}. <button class="inline-link" onclick="openModal('${safeName(pick.name)}')">Open profile</button>`;
}
function launchOnboarding(){
  if(localStorage.getItem('srOnboardingDone')==='yes')return;
  if(document.getElementById('onboardingModal'))return;
  const wrap=document.createElement('div');
  wrap.id='onboardingModal';wrap.className='onboarding-modal';
  wrap.innerHTML=`<div class="onboarding-card pro-onboard"><button class="close-onboard" onclick="finishOnboarding()">×</button><span class="eyebrow">Welcome to StrainRelief</span><h2>Explore smarter. Stay safer.</h2><div class="onboarding-steps"><div><strong>1</strong><span>Match by goal, THC sensitivity, and time of day.</span></div><div><strong>2</strong><span>Compare two strain directions side-by-side.</span></div><div><strong>3</strong><span>Save favorites and journal what you learn.</span></div></div><p>Educational only. Not medical advice. Follow local laws, ask for lab-tested products, and do not drive while impaired.</p><button onclick="finishOnboarding()">Start Exploring</button></div>`;
  document.body.appendChild(wrap);
}
function compareWhyMatters(a,b,shared){
  if(!b)return 'Add one more strain to compare THC/CBD direction, timing, terpene overlap, and caution notes.';
  const aThc=thcLevelValue(a.thc), bThc=thcLevelValue(b.thc), aCbd=cbdLevelValue(a.cbd), bCbd=cbdLevelValue(b.cbd);
  const parts=[];
  if(aThc===bThc) parts.push(`${a.name} and ${b.name} show a similar THC direction`); else parts.push(`${aThc<bThc?a.name:b.name} leans lower THC`);
  if(aCbd===bCbd) parts.push(`both show a similar CBD direction`); else parts.push(`${aCbd>bCbd?a.name:b.name} leans higher CBD`);
  if(String(a.time||'').toLowerCase()===String(b.time||'').toLowerCase()) parts.push(`both lean ${String(a.time||'similar timing').toLowerCase()}`); else parts.push(`${a.name} leans ${String(a.time||'one timing').toLowerCase()}, while ${b.name} leans ${String(b.time||'another timing').toLowerCase()}`);
  parts.push(shared.length?`Shared terpene direction: ${shared.slice(0,3).join(', ')}.`:'They do not share a main terpene direction in this profile.');
  return `${parts.join('; ')} Educational only — cannabis affects everyone differently.`;
}
function shareCompare(){
  const c=read('srCompare',[]).map(getStrain).filter(Boolean);
  if(c.length<2){showToast('Add two strains to share a comparison');return;}
  const [a,b]=c; const shared=[...new Set((a.terpenes||[]).filter(t=>(b.terpenes||[]).includes(t)))];
  const text=`StrainRelief comparison: ${a.name} vs ${b.name}. ${compareWhyMatters(a,b,shared)} Follow local laws.`;
  if(navigator.share) navigator.share({title:`${a.name} vs ${b.name}`,text,url:location.href}).catch(()=>{});
  else navigator.clipboard.writeText(text+' '+location.href).then(()=>showToast('Comparison copied'));
}
function shareStrain(name){
  const s=getStrain(name); const text=s?`StrainRelief direction: ${s.name}. ${aiDirectionSummary(s)}`:`StrainRelief wellness direction: ${name}. Educational only. Follow local laws.`;
  if(navigator.share)navigator.share({title:'StrainRelief',text,url:location.href}).catch(()=>{});else navigator.clipboard.writeText(text+' '+location.href).then(()=>showToast('Copied share text'));
}
function openCompare(){
  const c=read('srCompare',[]).map(getStrain).filter(Boolean);
  if(!c.length){showToast('Add a strain to compare first');return;}
  const [a,b]=c;
  const shared=c.length>1?[...new Set((a.terpenes||[]).filter(t=>(b.terpenes||[]).includes(t)))]:[...new Set(c.flatMap(s=>s.terpenes||[]))];
  const allTerps=[...new Set(c.flatMap(s=>s.terpenes||[]))];
  const pairScore=c.length>1?comparePairScore(a,b,shared):compareFitScore(a,null);
  const cards=c.map((s,idx)=>{const other=c[idx===0?1:0];return `<article class="compare-card compact premium-mini ${other?'has-opponent':''}">
    <div class="compare-card-img"><img src="${strainImage(s)}" onerror="repairStrainImage(this, '${safeName(s.name)}')" alt="${s.name}"></div>
    <div class="compare-card-title"><span class="eyebrow">${s.category}</span><h3>${s.name}</h3><p>${s.type}</p><em>${compareBadgeFor(s,other)}</em></div>
    <div class="mini-meter-pair">${compareMeter('THC',thcLevelValue(s.thc),s.thc)}${compareMeter('CBD',cbdLevelValue(s.cbd),s.cbd)}</div>
    <button class="compare-open-profile" onclick="openModal('${safeName(s.name)}')">Open ${s.name}</button>
  </article>`}).join('');
  const rows=[['type','Type'],['thc','THC'],['cbd','CBD'],['time','Best time'],['category','Category'],['flavor','Flavor']].map(([key,label])=>`<div class="compare-row polished compact-row"><strong>${label}</strong>${c.map(s=>`<span class="${compareCellClass(key,s,c)}">${s[key]||''}</span>`).join('')}</div>`).join('');
  const winnerNote=c.length>1?`<div class="compare-winner-grid premium-winners"><div><strong>Lower THC</strong><span>${strongerDirectionWinner(a,b,'lowerThc')}</span></div><div><strong>Higher CBD</strong><span>${strongerDirectionWinner(a,b,'higherCbd')}</span></div><div><strong>Timing</strong><span>${strongerDirectionWinner(a,b,'timing')}</span></div><div><strong>Direction</strong><span>${strongerDirectionWinner(a,b,'category')}</span></div></div>`:'';
  const guidance=c.length<2?`<div class="empty-state compare-hint"><strong>Add one more strain.</strong><br>Open another strain profile and tap Compare to unlock the full side-by-side view.</div>`:`<div class="panel compare-insight polished premium-top-read"><div class="compare-match-score"><strong>${pairScore}%</strong><span>similar direction match</span></div><h3>Quick Read</h3><p>${compareWhyMatters(a,b,shared)}</p>${winnerNote}</div>`;
  document.getElementById('modalBody').innerHTML=`<div class="compare-premium compare-full polished compact-premium">
    <div class="compare-sticky-title premium-vs"><span class="compare-name-stack">${c.length>1?`<b>${a.name}</b><i>vs</i><b>${b.name}</b>`:`<b>${a.name}</b>`}</span><button class="small-btn ghost" onclick="clearCompare();closeModal()">Clear</button></div>
    <span class="eyebrow">Side-by-side</span><h2>Compare Directions</h2><p>Compare educational strain profiles before saving or journaling.</p>${guidance}
    <div class="compare-card-grid polished compact-cards">${cards}</div><div class="compare-table polished compact-table">${rows}</div>
    <div class="panel terpene-overlap-card compact-terps"><h3>Terpene overlap</h3><p>${shared.length?'Shared terpene directions between these picks.':'Each pick leans on different terpene directions.'}</p><div class="tags">${(shared.length?shared:allTerps).map(t=>`<span class="tag ${shared.includes(t)?'hot':''}">${t}</span>`).join('')}</div></div>
    <div class="sticky-modal-actions compare-bottom-actions"><button onclick="clearCompare();closeModal()">Clear Compare</button>${c.length>1?`<button class="ghost" onclick="shareCompare()">Share Compare</button>`:''}${c.map(s=>`<button class="ghost" onclick="openModal('${safeName(s.name)}')">Open ${s.name}</button>`).join('')}</div>
  </div>`;
  document.getElementById('strainModal').classList.remove('hidden');document.documentElement.classList.add('sr-modal-open');document.body.classList.add('sr-modal-open');renderCompareTray();setTimeout(()=>document.querySelector('.modal-card')?.scrollTo(0,0),40);
}
function srMaybeInstallNudge(){
  const standalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone;
  if(standalone||localStorage.getItem('srInstallDismissed')==='yes')return;
  setTimeout(()=>{ if(!$('installBanner'))return; $('installBanner').classList.remove('hidden'); },3500);
}
function srRefreshV17(){dailyTip();renderFeatured();renderSearch();renderSaved();renderRecentHome();updateStats();srAttachReveal();srAnimateMeters();srMaybeInstallNudge();setTimeout(launchOnboarding,1200)}
setTimeout(srRefreshV17,120);


/* === StrainRelief v19 Safe Polish Pass: match engine, quick start, save feedback, learn interactions === */
function srTextHas(s, value){return searchableText(s).includes(String(value||'').toLowerCase())}
function srStableVariance(s, salt='match'){
  const raw=seededHash(`${salt}-${s.name}-${getDailySeed()}`)%9;
  return raw-4;
}
function srMatchReasons(s, prefs){
  const reasons=[];
  const text=searchableText(s);
  const thc=thcLevelValue(s.thc), cbd=cbdLevelValue(s.cbd);
  if(prefs.goal && text.includes(prefs.goal.toLowerCase())) reasons.push(`Matches your ${prefs.goal.toLowerCase()} goal`);
  if(prefs.time && text.includes(prefs.time.toLowerCase())) reasons.push(`${prefs.time} timing alignment`);
  if((prefs.sens==='low'||prefs.low) && (cbd>=70 || thc<=35 || text.includes('cbd-forward'))) reasons.push('Lower-intensity / CBD-forward lean');
  if(prefs.sens==='high' && thc>=70) reasons.push('Stronger THC direction for experienced users');
  if((s.terpenes||[]).length) reasons.push(`${(s.terpenes||[]).slice(0,2).join(' + ')} terpene profile`);
  if((s.tags||[]).length) reasons.push(`${(s.tags||[]).slice(0,2).join(' / ')} direction`);
  return [...new Set(reasons)].slice(0,4);
}
function srWeightedMatchScore(s,prefs){
  let pts=46;
  const text=searchableText(s);
  const thc=thcLevelValue(s.thc), cbd=cbdLevelValue(s.cbd);
  if(prefs.goal){ pts += text.includes(prefs.goal.toLowerCase()) ? 24 : -3; }
  if(prefs.time){ pts += text.includes(prefs.time.toLowerCase()) ? 16 : -4; }
  if(prefs.sens==='low'){
    if(thc<=35) pts+=16; else if(thc<=60) pts+=6; else pts-=18;
    if(cbd>=70) pts+=12;
    if(text.includes('cbd-forward')) pts+=8;
  }else if(prefs.sens==='medium'){
    if(thc>=35 && thc<=70) pts+=12;
    if(thc>85) pts-=6;
  }else if(prefs.sens==='high'){
    if(thc>=65) pts+=13;
    if(thc<25) pts-=4;
  }
  if(prefs.low){
    if(thc<=40) pts+=14; else if(thc>=75) pts-=24;
    if(cbd>=70 || text.includes('cbd-forward')) pts+=12;
    if((s.caution||[]).join(' ').toLowerCase().includes('anxiety')) pts-=8;
  }
  if((s.terpenes||[]).some(t=>['Myrcene','Linalool','Caryophyllene'].includes(t)) && (prefs.goal==='Stress'||prefs.goal==='Sleep'||prefs.goal==='Anxiety')) pts+=5;
  pts += Math.min(8, (s.score||70)-72)/2;
  pts += srStableVariance(s,'weighted-match');
  return Math.max(48,Math.min(97,Math.round(pts)));
}
function srCompactSummary(s){
  const terp=(s.terpenes||[])[0]||'terpene';
  const goals=(s.goals||[]).slice(0,2).join(' + ') || s.category;
  const thc=thcLevelValue(s.thc), cbd=cbdLevelValue(s.cbd);
  const lean=cbd>=70&&thc<=40?'CBD-forward, lower-intensity':thc>=75?'stronger THC':String(s.time||'flexible').toLowerCase();
  return `${lean} direction often explored for ${goals.toLowerCase()}. ${terp}-led profile. Tap for full educational profile.`;
}
function personalizedFitScore(s){
  const prefs={goal:$('goalSelect')?.value||'',sens:$('sensitivitySelect')?.value||'',time:$('timeSelect')?.value||'',low:!!$('lowAnxietyToggle')?.checked};
  return srWeightedMatchScore(s,prefs);
}
function cardHTML(s){
  const fit=personalizedFitScore(s);
  return `<article class="strain-card upgraded-card compact-strain-card" onclick="openModal('${safeName(s.name)}')"><div class="card-hero"><img src="${strainImage(s)}" alt="${s.name} real cannabis flower image" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"></div><div class="card-topline"><span class="eyebrow">${s.type}</span><b>${fit}% fit</b></div><h3>${s.name}</h3><p>${srCompactSummary(s)}</p><div class="tags">${s.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`;
}
function renderRecentHome(){
  const r=read('srRecent',[]).slice(0,6);
  const box=$('recentHome'); if(!box)return;
  box.innerHTML=r.length?`<div class="recent-mini-grid">${r.map(n=>{const s=getStrain(n);return s?`<button class="recent-mini-card" onclick="openModal('${safeName(s.name)}')"><img src="${strainImage(s)}" alt="${s.name}" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"><span>${s.name}</span><small>${s.category}</small></button>`:''}).join('')}</div>`:`<div class="empty-state upgraded-empty"><span>↺</span><strong>No recently viewed strains yet.</strong><br>Open a strain profile to start your trail.</div>`;
}
function saveFavorite(name){
  let list=savedRecords().filter(x=>x.name!==name);
  list.unshift({name,date:nowStamp()});
  writeSavedRecords(list);
  renderSaved();updateStats();
  document.querySelectorAll(`button[onclick*="saveFavorite('${safeName(name)}')"]`).forEach(btn=>{btn.textContent='✓ Saved';btn.classList.add('saved-now')});
  if(navigator.vibrate) navigator.vibrate(18);
  showToast(`Saved to Favorites`);
}
function removeFavorite(name){
  writeSavedRecords(savedRecords().filter(x=>x.name!==name));
  renderSaved();updateStats();
  if(navigator.vibrate) navigator.vibrate(12);
  showToast('Removed from Favorites');
}
function clearSaved(){localStorage.removeItem('srSaved');renderSaved();updateStats();showToast('Saved cleared')}
function saveJournal(){
  const strain=$('journalStrain').value,mood=$('journalMood').value,note=$('journalNote').value.trim();
  if(!strain){showToast('Select a strain first');return}
  let j=read('srJournal',[]);
  j.unshift({strain,mood,note,date:new Date().toLocaleDateString(),time:new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'}),stamp:nowStamp()});
  store('srJournal',j.slice(0,150));
  $('journalMood').value='';$('journalNote').value='';renderMoodChips();renderJournal();updateStats();
  if(navigator.vibrate) navigator.vibrate(18);
  showToast('Journal Entry Saved');
}
function srMatchCardHTML(s){
  const reasons=(s._reasons||[]).map(r=>`<li>${r}</li>`).join('');
  return `<article class="strain-card match-result-card" onclick="openModal('${safeName(s.name)}')"><div class="card-hero"><img src="${strainImage(s)}" alt="${s.name}" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"></div><div class="card-topline"><span class="eyebrow">${s.type}</span><b>${s._match}% match</b></div><h3>${s.name}</h3><p>${srCompactSummary(s)}</p><div class="why-match"><strong>Why this matched</strong><ul>${reasons}</ul></div><div class="tags">${s.tags.slice(0,3).map(t=>`<span class="tag">${t}</span>`).join('')}</div></article>`;
}
function runMatcher(){
  const prefs={goal:$('goalSelect').value,sens:$('sensitivitySelect').value,time:$('timeSelect').value,low:$('lowAnxietyToggle').checked};
  let r=strains.map(s=>({...s,_match:srWeightedMatchScore(s,prefs),_reasons:srMatchReasons(s,prefs)}))
    .sort((a,b)=>b._match-a._match || String(a.name).localeCompare(String(b.name),undefined,{sensitivity:'base'}));
  const top=r.slice(0,3);
  const rest=dailyShuffle(r.slice(3,24),'match-variety').slice(0,9).sort((a,b)=>b._match-a._match || a.name.localeCompare(b.name));
  r=[...top,...rest];
  saveMatchedHistory(r.map(x=>x.name));
  $('matchExplain').classList.remove('hidden');
  $('matchExplain').innerHTML=`<h3>Your personalized direction map</h3><p>Scores are weighted by your goal, THC sensitivity, time preference, Low Anxiety Mode, terpene profile, and caution notes. Educational only — compare lab-tested products and follow local laws.</p><div class="match-summary">${top.map(x=>`<button onclick="openModal('${safeName(x.name)}')"><strong>${x._match}%</strong><span>${x.name}</span></button>`).join('')}</div>`;
  $('matchResults').innerHTML=`<div class="match-tier-title"><span>Top Matches</span></div>`+r.map(srMatchCardHTML).join('');
  renderMatchedHistory();
  showToast('Directions matched');
  srAttachReveal();
}
function srOpenQuickStart(target){
  showPage(target);
  showToast(target==='search'?'Opening Search':target==='recommend'?'Opening Match':'Opening Saved + Journal');
}
function srTerpeneDetails(name,body){
  const example=sortedStrains().filter(s=>(s.terpenes||[]).includes(name)).slice(0,4).map(s=>`<button onclick="openModal('${safeName(s.name)}')">${s.name}</button>`).join('');
  return `<details class="learn-detail"><summary><strong>${name}</strong><span>${body}</span></summary><div><p>${terpeneInfo(name)}</p><div class="learn-example-row">${example||'<em>No examples loaded yet.</em>'}</div></div></details>`;
}
function renderEducation(){
  $('onboardingSlides').innerHTML=`<h3>Quick Start</h3><div class="quick-start-grid"><button class="quick-start-action" onclick="srOpenQuickStart('search')"><strong>1. Search</strong><span>Find strain directions by name, effect, or terpene.</span><small>Tap to explore →</small></button><button class="quick-start-action" onclick="srOpenQuickStart('recommend')"><strong>2. Match</strong><span>Use your goal, timing, and THC sensitivity.</span><small>Start matching →</small></button><button class="quick-start-action" onclick="srOpenQuickStart('saved')"><strong>3. Save + Journal</strong><span>Track favorites and wellness notes locally.</span><small>Open tracker →</small></button></div>`;
  $('terpeneExplorer').innerHTML=`<h3>Terpene Explorer</h3><p>Tap a terpene to expand beginner notes and example strain directions.</p><div class="learn-detail-list">${terpenes.map(t=>srTerpeneDetails(t[0],t[1])).join('')}</div>`;
  $('locatorBox').innerHTML=`<h3>Dispensary Prep</h3><p>Use this checklist when shopping legally. Ask questions before buying and compare products by lab results, serving size, and onset time.</p><div class="checklist"><div>✅ Lab-tested product / COA</div><div>✅ THC percentage and CBD percentage</div><div>✅ Terpene profile</div><div>✅ Serving size or dose guidance</div><div>✅ Expected onset time and duration</div><div>✅ Beginner-friendly or lower-THC options</div><div>✅ Avoid driving while impaired</div><div>✅ Follow local laws</div></div><button onclick="copyChecklist()">Copy Checklist</button>`;
  $('termsBox').innerHTML=`<h3>Privacy + Terms</h3><p>Favorites, recent views, and journal entries stay locally on this device. Compare picks clear when the app restarts. StrainRelief is educational only and does not provide medical advice.</p>`;
  $('learnGrid').innerHTML=education.map(e=>`<div class="education-card"><h3>${e.title}</h3><p>${e.body}</p></div>`).join('');
}
function srRefreshV19(){dailyTip();renderFeatured();renderSearch();renderSaved();renderRecentHome();renderEducation();updateStats();srAttachReveal();srAnimateMeters();}
setTimeout(srRefreshV19,220);


function renderSmartInsights(){
 const box=$("smartInsights"); if(!box) return;
 const saved=savedRecords();
 const journal=journalRecords();
 let insights=[];
 if(saved.length){
   const latest=getStrain(saved[0].name)||{};
   insights.push(`<div class="smart-card"><span>🧠 Personalized Insight</span><h3>Because you saved ${latest.name||"recent directions"}</h3><p>You seem to prefer ${latest.type||"balanced"} directions with ${(latest.goals||['calming']).slice(0,2).join(' + ')} style exploration.</p></div>`);
 }
 if(journal.length){
   const moods={}; journal.forEach(j=>moods[j.mood]=(moods[j.mood]||0)+1);
   const top=Object.entries(moods).sort((a,b)=>b[1]-a[1])[0];
   if(top) insights.push(`<div class="smart-card"><span>📈 Mood Trend</span><h3>Your top journal mood: ${top[0]}</h3><p>StrainRelief is noticing more ${top[0].toLowerCase()}-style experiences in your saved wellness journal.</p></div>`)
 }
 const hour=new Date().getHours();
 const tod=hour<12?'daytime clarity':hour<18?'balanced daytime':'evening wind-down';
 insights.push(`<div class="smart-card"><span>⏰ Time-Based Direction</span><h3>Recommended for right now</h3><p>Your current exploration window leans toward ${tod} educational directions.</p></div>`);
 if(!saved.length&&!journal.length){
   insights=[`<div class="smart-card"><span>✨ Smart Recommendations</span><h3>Your app will learn your preferences</h3><p>Save strains and journal experiences to unlock personalized wellness direction insights.</p></div>`]
 }
 box.innerHTML=`<div class="panel-head"><h3>Smart Recommendations</h3></div><div class="smart-grid">${insights.join('')}</div>`;
}


/* === StrainRelief v21 AI Wellness Insights + Habit Tracking === */
function journalRecords(){ return read('srJournal',[]); }
function srCountBy(items, getter){
  const map={};
  items.forEach(item=>{
    const value=getter(item);
    if(Array.isArray(value)) value.forEach(v=>{ if(v) map[v]=(map[v]||0)+1; });
    else if(value) map[value]=(map[value]||0)+1;
  });
  return map;
}
function srTopEntry(map, fallback='Not enough data yet'){
  const entries=Object.entries(map||{}).sort((a,b)=>b[1]-a[1] || String(a[0]).localeCompare(String(b[0])));
  return entries[0] ? entries[0] : [fallback,0];
}
function srSavedStrains(){ return savedRecords().map(x=>getStrain(x.name)).filter(Boolean); }
function srJournalStrains(){ return journalRecords().map(x=>getStrain(x.strain)).filter(Boolean); }
function srTimeBucket(s){
  const t=String(s?.time||'').toLowerCase();
  if(t.includes('night')) return 'Nighttime';
  if(t.includes('evening')) return 'Evening';
  if(t.includes('day')) return 'Daytime';
  return 'Flexible';
}
function srInsightSentence(){
  const saved=srSavedStrains();
  const journals=journalRecords();
  const recent=read('srRecent',[]).map(getStrain).filter(Boolean);
  const pool=[...saved,...srJournalStrains(),...recent];
  if(!pool.length) return 'Save strains, compare directions, and journal moods to unlock personalized wellness insights.';
  const topCat=srTopEntry(srCountBy(pool,s=>s.category),'balanced directions')[0];
  const topTerp=srTopEntry(srCountBy(pool,s=>s.terpenes||[]),'terpene profile')[0];
  const topTime=srTopEntry(srCountBy(pool,s=>srTimeBucket(s)),'Flexible')[0];
  const topMood=srTopEntry(srCountBy(journals,j=>j.mood),'No mood yet')[0];
  if(journals.length) return `You are trending toward ${topCat} directions, often around ${topTime.toLowerCase()} profiles, with ${topTerp} showing up most. Your most logged mood is ${topMood}.`;
  if(saved.length) return `Your saved list leans toward ${topCat} directions with ${topTerp} appearing most often. Keep journaling to build stronger habit insights.`;
  return `Your recent browsing leans toward ${topCat} directions with ${topTerp} appearing most often.`;
}
function srStreakDays(){
  const days=[...new Set(journalRecords().map(j=>{
    const d=j.stamp?new Date(j.stamp):new Date(j.date||Date.now());
    return isNaN(d)?null:d.toISOString().slice(0,10);
  }).filter(Boolean))].sort().reverse();
  if(!days.length) return 0;
  let streak=0;
  const today=new Date();
  for(let i=0;i<30;i++){
    const d=new Date(today); d.setDate(today.getDate()-i);
    const key=d.toISOString().slice(0,10);
    if(days.includes(key)) streak++; else if(i===0) continue; else break;
  }
  return streak;
}
function srPercent(part,total){ return total?Math.round((part/total)*100):0; }
function srWellnessData(){
  const saved=srSavedStrains();
  const journals=journalRecords();
  const journalStrains=srJournalStrains();
  const recent=read('srRecent',[]).map(getStrain).filter(Boolean);
  const pool=[...saved,...journalStrains,...recent];
  const cat=srTopEntry(srCountBy(pool,s=>s.category),'Start exploring')[0];
  const terp=srTopEntry(srCountBy(pool,s=>s.terpenes||[]),'Not enough data')[0];
  const type=srTopEntry(srCountBy(pool,s=>s.type),'Not enough data')[0];
  const time=srTopEntry(srCountBy(pool,s=>srTimeBucket(s)),'Flexible')[0];
  const mood=srTopEntry(srCountBy(journals,j=>j.mood),'No mood logged')[0];
  const lowThc=pool.filter(s=>thcLevelValue(s.thc)<=40).length;
  const highCbd=pool.filter(s=>cbdLevelValue(s.cbd)>=70).length;
  return {saved,journals,recent,pool,cat,terp,type,time,mood,lowThc,highCbd,streak:srStreakDays()};
}
function srWellnessMetric(label,value,caption){
  return `<div class="wellness-metric"><strong>${value}</strong><span>${label}</span><small>${caption}</small></div>`;
}
function srWellnessBar(label,value){
  return `<div class="wellness-bar"><div><span>${label}</span><b>${value}%</b></div><i><em style="width:${value}%"></em></i></div>`;
}
function renderWellnessDashboard(){
  const home=$('home'); if(!home) return;
  let box=$('wellnessDashboard');
  if(!box){
    box=document.createElement('div'); box.id='wellnessDashboard'; box.className='panel card-glow wellness-dashboard';
    const smart=$('smartInsights'); smart?smart.insertAdjacentElement('afterend',box):home.appendChild(box);
  }
  const d=srWellnessData();
  const activity=d.pool.length;
  const lowPct=srPercent(d.lowThc,activity);
  const cbdPct=srPercent(d.highCbd,activity);
  box.innerHTML=`
    <div class="panel-head"><div><span class="eyebrow">AI Wellness Insights</span><h3>Your Wellness Dashboard</h3></div><button class="small-btn ghost" onclick="showPage('saved')">Open Journal</button></div>
    <p class="wellness-summary">${srInsightSentence()}</p>
    <div class="wellness-metric-grid">
      ${srWellnessMetric('Top direction',d.cat,'Based on saved, journal, and recent views')}
      ${srWellnessMetric('Top terpene',d.terp,'Most common terpene signal')}
      ${srWellnessMetric('Journal streak',`${d.streak} day${d.streak===1?'':'s'}`,'Logged wellness notes')}
      ${srWellnessMetric('Preferred timing',d.time,'Most common time profile')}
    </div>
    <div class="wellness-bars">
      ${srWellnessBar('Lower-THC lean',lowPct)}
      ${srWellnessBar('CBD-forward lean',cbdPct)}
    </div>
    <div class="wellness-nudge"><strong>Next best action:</strong> ${d.journals.length?'Compare one saved direction with a new recommendation.':'Add one journal entry after saving a strain to unlock stronger habit trends.'}</div>`;
}
function renderHabitTracker(){
  const savedPage=$('saved'); if(!savedPage) return;
  let box=$('habitTracker');
  if(!box){
    box=document.createElement('div'); box.id='habitTracker'; box.className='panel card-glow habit-tracker';
    const journalPanel=savedPage.querySelector('.panel:nth-of-type(2)');
    journalPanel?savedPage.insertBefore(box,journalPanel):savedPage.appendChild(box);
  }
  const d=srWellnessData();
  const moodMap=srCountBy(d.journals,j=>j.mood||'No mood');
  const topMoods=Object.entries(moodMap).sort((a,b)=>b[1]-a[1]).slice(0,4);
  const catMap=srCountBy([...d.saved,...srJournalStrains()],s=>s.category);
  const topCats=Object.entries(catMap).sort((a,b)=>b[1]-a[1]).slice(0,4);
  box.innerHTML=`
    <div class="panel-head"><div><span class="eyebrow">Habit Tracking</span><h3>Your Wellness Trends</h3></div><button class="small-btn ghost" onclick="clearJournal()">Clear Journal</button></div>
    <p class="wellness-summary">Track what you save and how directions feel over time. Everything stays on this device.</p>
    <div class="habit-grid">
      <div class="habit-card"><strong>${d.mood}</strong><span>Most logged mood</span></div>
      <div class="habit-card"><strong>${d.terp}</strong><span>Top terpene signal</span></div>
      <div class="habit-card"><strong>${d.time}</strong><span>Preferred timing</span></div>
      <div class="habit-card"><strong>${d.saved.length}</strong><span>Saved favorites</span></div>
    </div>
    <div class="habit-list-wrap">
      <div><h4>Mood pattern</h4>${topMoods.length?topMoods.map(([m,c])=>`<div class="habit-line"><span>${m}</span><b>${c}</b></div>`).join(''):'<div class="empty-state">No moods logged yet.</div>'}</div>
      <div><h4>Category pattern</h4>${topCats.length?topCats.map(([m,c])=>`<div class="habit-line"><span>${m}</span><b>${c}</b></div>`).join(''):'<div class="empty-state">Save strains to see category trends.</div>'}</div>
    </div>`;
}
function renderSmartInsights(){
 const box=$('smartInsights'); if(!box) return;
 const d=srWellnessData();
 let insights=[];
 if(d.saved.length){
   const latest=d.saved[0];
   insights.push(`<div class="smart-card"><span>🧠 Saved Pattern</span><h3>You recently saved ${latest.name}</h3><p>Your saved list is leaning toward ${d.cat} directions with ${d.terp} showing up often.</p></div>`);
 }
 if(d.journals.length){
   insights.push(`<div class="smart-card"><span>📈 Mood Trend</span><h3>${d.mood} is your top logged mood</h3><p>Your journal is starting to build a personal wellness pattern. Keep logging timing, comfort level, and notes.</p></div>`);
 }
 if(d.recent.length){
   insights.push(`<div class="smart-card"><span>↺ Recent Behavior</span><h3>You keep exploring ${d.recent[0].category}</h3><p>Recent views suggest ${d.time.toLowerCase()}-style profiles may be worth comparing next.</p></div>`);
 }
 const hour=new Date().getHours();
 const tod=hour<12?'daytime clarity':hour<18?'balanced daytime':'evening wind-down';
 insights.push(`<div class="smart-card"><span>⏰ Time-Based Direction</span><h3>Right now: ${tod}</h3><p>Use timing, THC sensitivity, and terpene notes before saving or journaling a direction.</p></div>`);
 if(!d.pool.length){
   insights=[`<div class="smart-card"><span>✨ Smart Recommendations</span><h3>Your app will learn your preferences</h3><p>Save strains, compare profiles, and journal experiences to unlock personalized wellness direction insights.</p></div>`]
 }
 box.innerHTML=`<div class="panel-head"><h3>Smart Recommendations</h3><button class="small-btn ghost" onclick="showPage('recommend')">Refresh Match</button></div><div class="smart-grid">${insights.join('')}</div>`;
 renderWellnessDashboard();
}
(function srV21Boot(){
  const oldShowPage=showPage;
  showPage=function(id){ oldShowPage(id); setTimeout(()=>{renderSmartInsights();renderWellnessDashboard();renderHabitTracker();},90); };
  const oldRenderSaved=renderSaved;
  renderSaved=function(){ oldRenderSaved(); setTimeout(()=>{renderHabitTracker();renderSmartInsights();renderWellnessDashboard();},40); };
  const oldAddRecent=addRecent;
  addRecent=function(name){ oldAddRecent(name); setTimeout(()=>{renderSmartInsights();renderWellnessDashboard();},40); };
  setTimeout(()=>{renderSmartInsights();renderWellnessDashboard();renderHabitTracker();},500);
})();


/* === StrainRelief v22 2026 Motion + Visual System === */
function sr2026ApplyThemes(){
  document.querySelectorAll("[data-strain]").forEach(card=>{
    const name=card.getAttribute("data-strain");
    const s=getStrain(name);
    if(!s)return;
    card.style.cssText += ";" + strainThemeStyle(s);
  });
}
function sr2026AnimateCounters(){
  const strainEl=document.getElementById("strainCount");
  if(strainEl) strainEl.textContent=String(strains.length);
  document.querySelectorAll("#savedCount,#journalCount").forEach(el=>{
    const target=parseInt(el.textContent||"0",10);
    if(!Number.isFinite(target))return;
    const previous=parseInt(el.dataset.lastValue||"0",10);
    el.dataset.lastValue=String(target);
    const duration=520;
    const t0=performance.now();
    function step(now){
      const p=Math.min(1,(now-t0)/duration);
      const eased=1-Math.pow(1-p,3);
      el.textContent=Math.round(previous+(target-previous)*eased);
      if(p<1)requestAnimationFrame(step);
      else el.textContent=String(target);
    }
    requestAnimationFrame(step);
  });
}
function sr2026MagneticButtons(){
  document.querySelectorAll("button").forEach(btn=>{
    if(btn.dataset.sr2026Magnet==="yes")return;
    btn.dataset.sr2026Magnet="yes";
    btn.addEventListener("pointerdown",()=>btn.classList.add("sr-pressing"),{passive:true});
    ["pointerup","pointercancel","pointerleave","touchend","touchcancel","blur"].forEach(evt=>{
      btn.addEventListener(evt,()=>btn.classList.remove("sr-pressing"),{passive:true});
    });
  });
}
function sr2026ClearStuckGlow(){
  const targets=".hero,.panel,.strain-card,.daily-card,.pro-card,.section-title,.saved-card,.journal-card,.education-card";
  document.querySelectorAll(targets).forEach(card=>{
    card.style.removeProperty("--mx");
    card.style.removeProperty("--my");
    card.classList.remove("sr-touching");
  });
}
["pointerup","pointercancel","pointerleave","touchend","touchcancel","scroll","visibilitychange"].forEach(evt=>{
  document.addEventListener(evt,()=>setTimeout(sr2026ClearStuckGlow,80),{passive:true});
});
document.addEventListener("pointerdown",e=>{
  const card=e.target.closest(".hero,.panel,.strain-card,.daily-card,.pro-card,.section-title,.saved-card,.journal-card,.education-card");
  if(card)card.classList.add("sr-touching");
},{passive:true});
function sr2026Refresh(){
  sr2026ApplyThemes();
  sr2026MagneticButtons();
  sr2026AnimateCounters();
}
const sr2026OldShowPage=window.showPage || showPage;
showPage=function(id){
  sr2026OldShowPage(id);
  setTimeout(sr2026Refresh,90);
}
const sr2026OldRenderSearch=window.renderSearch || renderSearch;
renderSearch=function(){
  sr2026OldRenderSearch();
  setTimeout(sr2026Refresh,40);
}
const sr2026OldRenderFeatured=window.renderFeatured || renderFeatured;
renderFeatured=function(){
  sr2026OldRenderFeatured();
  setTimeout(sr2026Refresh,40);
}
const sr2026OldRenderSaved=window.renderSaved || renderSaved;
renderSaved=function(){
  sr2026OldRenderSaved();
  setTimeout(sr2026Refresh,40);
}
const sr2026OldOpenModal=window.openModal || openModal;
openModal=function(name){
  sr2026OldOpenModal(name);
  setTimeout(sr2026Refresh,40);
}
window.addEventListener("load",()=>setTimeout(sr2026Refresh,700));


/* === StrainRelief v24 Count Stability + Clean Motion Guard === */
function srV24LockStrainCount(){
  const el=document.getElementById("strainCount");
  if(el) el.textContent=String(strains.length);
}
document.addEventListener("DOMContentLoaded",()=>{
  srV24LockStrainCount();
  setTimeout(srV24LockStrainCount,150);
  setTimeout(srV24LockStrainCount,800);
});
window.addEventListener("pageshow",()=>setTimeout(srV24LockStrainCount,80));


/* === StrainRelief v25 Lively App Upgrade: interactive dashboard, rewards, carousels === */
function srV25StrainCount(){
  return Array.isArray(strains) ? strains.length : 0;
}
function srV25LockProgress(){
  const strainEl=document.getElementById('strainCount');
  if(strainEl){
    strainEl.dataset.fixed='true';
    strainEl.textContent=String(srV25StrainCount());
  }
  const savedEl=document.getElementById('savedCount');
  if(savedEl) savedEl.textContent=String(savedRecords().length);
  const journalEl=document.getElementById('journalCount');
  if(journalEl) journalEl.textContent=String(read('srJournal',[]).length);
}
const srV25OldUpdateStats = window.updateStats || updateStats;
updateStats=function(){
  try{srV25OldUpdateStats();}catch(e){}
  srV25LockProgress();
};

function srV25CategoryColor(cat){
  const c=String(cat||'').toLowerCase();
  if(c.includes('sleep')) return '#8b7cff';
  if(c.includes('focus')) return '#4fc3ff';
  if(c.includes('mood')) return '#ff7ac8';
  if(c.includes('cbd')) return '#5dffb3';
  if(c.includes('stress')) return '#44e6c8';
  if(c.includes('appetite')) return '#ffd166';
  if(c.includes('body')) return '#ff9f6e';
  if(c.includes('day')) return '#7ee8ff';
  return '#74ffad';
}
function srV25GlowStyle(s){
  const accent=srV25CategoryColor(s?.category);
  return `--strain-accent:${accent};--accent-rgb:${hexToRgb(accent)};`;
}
function hexToRgb(hex){
  const m=String(hex).replace('#','');
  const n=parseInt(m,16);
  return `${(n>>16)&255},${(n>>8)&255},${n&255}`;
}
function srV25ShortInsight(s){
  const tags=(s.tags||[]).slice(0,2).join(' + ');
  const terp=(s.terpenes||[])[0] || 'terpene';
  return `${s.category} direction • ${tags || s.type} • ${terp} led.`;
}
cardHTML=function(s){
  const accent=srV25CategoryColor(s.category);
  return `<article class="strain-card lively-strain-card" data-strain="${safeName(s.name)}" data-category="${safeName(s.category)}" style="${srV25GlowStyle(s)}" onclick="openModal('${safeName(s.name)}')">
    <div class="card-hero"><img src="${strainImage(s)}" alt="${s.name} cannabis flower image" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"><span class="live-chip" style="background:${accent}">${s.category}</span></div>
    <span class="eyebrow">${s.type}</span>
    <h3>${s.name}</h3>
    <p>${srV25ShortInsight(s)}</p>
    <div class="tags">${s.tags.slice(0,4).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
  </article>`;
};
function srV25PickByCategory(cat, salt){
  const pool=strains.filter(s=>String(s.category).toLowerCase().includes(String(cat).toLowerCase()));
  return dailyShuffle(pool.length?pool:strains, salt)[0];
}
function srV25Streak(){
  const today=new Date().toISOString().slice(0,10);
  let data=read('srVisitStreak',{last:'',count:0});
  if(Array.isArray(data) || !data || typeof data!=='object') data={last:'',count:0};
  if(data.last!==today){
    const y=new Date(Date.now()-86400000).toISOString().slice(0,10);
    data={last:today,count:data.last===y ? (Number(data.count)||0)+1 : 1};
    store('srVisitStreak',data);
  }
  return data.count||1;
}
function srV25AchievementData(){
  const saved=savedRecords().length;
  const journal=read('srJournal',[]).length;
  const recent=read('srRecent',[]).length;
  const matched=read('srMatched',[]).length;
  const streak=srV25Streak();
  return [
    {icon:'🌿',title:'Explorer',desc:`${recent}/5 strains viewed`,done:recent>=5,progress:Math.min(100,recent/5*100)},
    {icon:'♡',title:'Collector',desc:`${saved}/3 saved directions`,done:saved>=3,progress:Math.min(100,saved/3*100)},
    {icon:'✎',title:'Journaler',desc:`${journal}/3 journal entries`,done:journal>=3,progress:Math.min(100,journal/3*100)},
    {icon:'🔥',title:'Check-in streak',desc:`${streak} day${streak===1?'':'s'} active`,done:streak>=3,progress:Math.min(100,streak/3*100)},
    {icon:'⚖',title:'Matcher',desc:`${matched}/2 match sessions`,done:matched>=2,progress:Math.min(100,matched/2*100)}
  ];
}
function srV25RenderLivelyDashboard(){
  const home=document.getElementById('home'); if(!home) return;
  let board=document.getElementById('livelyDashboard');
  const sleep=srV25PickByCategory('Sleep','v25-sleep');
  const calm=srV25PickByCategory('CBD','v25-calm');
  const focus=srV25PickByCategory('Focus','v25-focus');
  const hour=new Date().getHours();
  const activePick=hour>=18 ? sleep : hour>=12 ? focus : calm;
  const achievements=srV25AchievementData();
  const completed=achievements.filter(a=>a.done).length;
  const next=achievements.find(a=>!a.done) || achievements[0];
  const quests=achievements.map(a=>`<div class="quest-card ${a.done?'done':''}"><span>${a.icon}</span><strong>${a.title}</strong><small>${a.done?'Unlocked ✓':a.desc}</small><i><em style="width:${a.progress}%"></em></i></div>`).join('');
  const html=`
    <div class="panel-head"><div><span class="eyebrow">Live Wellness Dashboard</span><h3>Your app is learning your pattern</h3></div><button class="small-btn ghost" onclick="showPage('recommend')">Match Now</button></div>
    <div class="live-hero-strip" style="${srV25GlowStyle(activePick)}" onclick="openModal('${safeName(activePick.name)}')">
      <img src="${strainImage(activePick)}" alt="${activePick.name}" loading="lazy" onerror="repairStrainImage(this, '${safeName(activePick.name)}')">
      <div><span class="live-pill">${hour>=18?'Tonight’s Direction':hour>=12?'Afternoon Direction':'Morning Direction'}</span><h2>${activePick.name}</h2><p>${srV25ShortInsight(activePick)}</p></div>
    </div>
    <div class="lively-stat-row">
      <div><strong>${srV25StrainCount()}</strong><span>Total directions</span></div>
      <div><strong>${srV25Streak()}</strong><span>Day streak</span></div>
      <div><strong>${completed}/${achievements.length}</strong><span>Badges</span></div>
    </div>
    <div class="section-micro-head"><strong>Today’s mini quests</strong><span>Next: ${next.title}</span></div>
    <div class="quest-carousel">${quests}</div>`;
  if(!board){
    board=document.createElement('div');
    board.id='livelyDashboard';
    board.className='panel card-glow lively-dashboard';
    const progress=document.querySelector('#home .pro-card');
    if(progress && progress.parentNode) progress.insertAdjacentElement('afterend', board);
    else home.insertBefore(board, home.children[2] || null);
  }
  board.innerHTML=html;
}
function srV25RenderCategoryRibbons(){
  const home=document.getElementById('home'); if(!home) return;
  let rib=document.getElementById('categoryRibbons');
  const cats=['CBD','Sleep','Focus','Mood','Stress','Body Comfort','Appetite'];
  const html=`<div class="section-title lively-section-title"><h2>Explore by vibe</h2><p>Swipe through colorful wellness lanes.</p></div><div class="vibe-ribbon">${cats.map(c=>{
    const s=srV25PickByCategory(c,'vibe-'+c);
    return `<button class="vibe-chip" style="--strain-accent:${srV25CategoryColor(c)}" onclick="jumpFilter('${safeName(c)}')"><span>${s?.emoji||'🌿'}</span><strong>${c}</strong><small>${s?.name||'Explore'}</small></button>`
  }).join('')}</div>`;
  if(!rib){ rib=document.createElement('div'); rib.id='categoryRibbons'; const smart=document.getElementById('smartInsights'); (smart||document.querySelector('#home .daily-card'))?.insertAdjacentElement('afterend', rib); }
  rib.innerHTML=html;
}
renderRecentHome=function(){
  const r=read('srRecent',[]);
  const box=document.getElementById('recentHome'); if(!box) return;
  box.innerHTML=r.length?`<div class="recent-carousel">${r.map(n=>{const s=getStrain(n);return s?`<button class="recent-card" style="${srV25GlowStyle(s)}" onclick="openModal('${safeName(n)}')"><img src="${strainImage(s)}" alt="${s.name}" loading="lazy" onerror="repairStrainImage(this, '${safeName(s.name)}')"><strong>${s.name}</strong><small>${s.category}</small></button>`:''}).join('')}</div>`:`<div class="empty-state">No recently viewed strains yet. Open a strain profile to start.</div>`;
};
function srV25RewardBurst(message='Unlocked'){
  const burst=document.createElement('div');
  burst.className='reward-burst';
  burst.innerHTML=`<span>✨</span><strong>${message}</strong>`;
  document.body.appendChild(burst);
  setTimeout(()=>burst.remove(),1600);
}
const srV25OldSaveFavorite=window.saveFavorite || saveFavorite;
saveFavorite=function(name){
  const before=savedRecords().length;
  srV25OldSaveFavorite(name);
  srV25RenderLivelyDashboard();
  if(savedRecords().length>before) srV25RewardBurst('Saved to Favorites');
};
const srV25OldSaveJournal=window.saveJournal || saveJournal;
saveJournal=function(){
  const before=read('srJournal',[]).length;
  srV25OldSaveJournal();
  srV25RenderLivelyDashboard();
  if(read('srJournal',[]).length>before) srV25RewardBurst('Journal Streak +1');
};
const srV25OldRunMatcher=window.runMatcher || runMatcher;
runMatcher=function(){
  srV25OldRunMatcher();
  setTimeout(()=>{
    document.querySelectorAll('#matchResults .strain-card').forEach((c,i)=>{c.style.animationDelay=`${i*55}ms`;c.classList.add('match-pop-in')});
    srV25RenderLivelyDashboard();
    srV25RewardBurst('Match Map Ready');
  },80);
};
function srV25Refresh(){
  srV25LockProgress();
  srV25RenderLivelyDashboard();
  srV25RenderCategoryRibbons();
  renderRecentHome();
  document.querySelectorAll('.strain-card').forEach((card,i)=>{card.style.setProperty('--delay',`${Math.min(i,10)*45}ms`);});
}
const srV25OldRenderFeatured=window.renderFeatured || renderFeatured;
renderFeatured=function(){
  srV25OldRenderFeatured();
  setTimeout(srV25Refresh,50);
};
const srV25OldShowPage=window.showPage || showPage;
showPage=function(id){
  srV25OldShowPage(id);
  setTimeout(srV25Refresh,80);
};
window.addEventListener('load',()=>{
  srV25Streak();
  setTimeout(srV25Refresh,250);
  setInterval(srV25LockProgress,1200);
});
document.addEventListener('visibilitychange',()=>setTimeout(srV25LockProgress,120));


/* === StrainRelief v27 Premium App Experience === */
(function(){
  const SR_V27_VERSION = 'strainrelief-v27-premium-app-experience';
  const SR_V27_COLORS = {
    'Sleep':'#8b7cff','Focus':'#55c7ff','Mood':'#ff7ab6','CBD':'#63ffb0','Stress':'#35e0c2','Body Comfort':'#c084fc','Appetite':'#ffd166','Daytime':'#ffcf6b','default':'#74ffad'
  };
  function v27ColorFor(s){ return SR_V27_COLORS?.[s?.category] || SR_V27_COLORS.default; }
  function v27SetTheme(s){
    const color = v27ColorFor(s);
    document.documentElement.style.setProperty('--v27-accent', color);
    document.body?.setAttribute('data-vibe', String(s?.category||'wellness').toLowerCase().replace(/\s+/g,'-'));
  }
  function v27LockStrainCount(){
    const el=document.getElementById('strainCount');
    if(el && Array.isArray(window.strains || strains)) el.textContent=String((window.strains||strains).length);
  }
  function v27Toast(message, icon='✨'){
    const existing=document.querySelector('.v27-reward-toast');
    if(existing) existing.remove();
    const toast=document.createElement('div');
    toast.className='v27-reward-toast';
    toast.innerHTML=`<span>${icon}</span><strong>${message}</strong>`;
    document.body.appendChild(toast);
    setTimeout(()=>toast.classList.add('show'),20);
    setTimeout(()=>toast.remove(),1900);
  }
  function v27Haptic(){ try{ navigator.vibrate && navigator.vibrate(12); }catch(e){} }
  function v27TapPulse(target){
    const el=target.closest?.('button,.strain-card,.saved-card,.journal-card,.mini-item,.vibe-chip,.recent-card,.quest-card');
    if(!el) return;
    el.classList.remove('v27-tap'); void el.offsetWidth; el.classList.add('v27-tap');
    setTimeout(()=>el.classList.remove('v27-tap'),420);
  }
  document.addEventListener('pointerup', e=>{v27TapPulse(e.target); v27Haptic();}, {passive:true});

  function v27EnhanceHero(){
    const hero=document.querySelector('#home .hero'); if(!hero || hero.querySelector('.v27-hero-orbits')) return;
    const orb=document.createElement('div');
    orb.className='v27-hero-orbits';
    orb.innerHTML='<i></i><i></i><i></i>';
    hero.prepend(orb);
    const micro=document.createElement('div');
    micro.className='v27-live-pill';
    micro.innerHTML='<span></span><b>Live daily wellness map</b>';
    const actions=hero.querySelector('.hero-actions');
    if(actions) hero.insertBefore(micro, actions);
  }
  function v27RenderSpotlight(){
    const home=document.getElementById('home'); if(!home) return;
    let box=document.getElementById('v27Spotlight');
    const pool = Array.isArray(strains)?strains:[];
    if(!pool.length) return;
    const pick = dailyShuffle ? dailyShuffle(pool,'v27-spotlight')[0] : pool[new Date().getDate()%pool.length];
    const color=v27ColorFor(pick);
    const html=`<div class="v27-spotlight-inner" style="--v27-card:${color}">
      <div class="v27-spotlight-copy"><span class="eyebrow">Today's Spotlight</span><h2>${pick.name}</h2><p>${shortInsight ? shortInsight(pick) : pick.insight}</p><button onclick="openModal('${safeName(pick.name)}')">Open profile</button></div>
      <button class="v27-spotlight-art" onclick="openModal('${safeName(pick.name)}')"><img src="${strainImage(pick)}" alt="${pick.name}" loading="lazy" onerror="repairStrainImage(this, '${safeName(pick.name)}')"><span>${pick.category}</span></button>
    </div>`;
    if(!box){
      box=document.createElement('section'); box.id='v27Spotlight'; box.className='panel card-glow v27-spotlight';
      const daily=document.querySelector('#home .daily-card');
      daily?.insertAdjacentElement('afterend', box);
    }
    box.innerHTML=html;
  }
  function v27RenderOnboarding(){
    if(localStorage.getItem('srV27OnboardingDone')==='yes') return;
    if(document.getElementById('v27Onboarding')) return;
    const overlay=document.createElement('div');
    overlay.id='v27Onboarding';
    overlay.className='v27-onboarding';
    overlay.innerHTML=`<div class="v27-onboard-card">
      <button class="v27-onboard-close" aria-label="Close" onclick="document.getElementById('v27Onboarding')?.remove();localStorage.setItem('srV27OnboardingDone','yes')">×</button>
      <div class="v27-onboard-glow"></div>
      <span class="eyebrow">StrainRelief Experience</span>
      <h2>Your wellness lane starts here.</h2>
      <p>Pick a vibe, match a direction, save what feels useful, and let your dashboard learn your exploration pattern.</p>
      <div class="v27-onboard-actions">
        <button onclick="localStorage.setItem('srV27OnboardingDone','yes');document.getElementById('v27Onboarding')?.remove();showPage('recommend')">Start Match</button>
        <button class="ghost" onclick="localStorage.setItem('srV27OnboardingDone','yes');document.getElementById('v27Onboarding')?.remove();showPage('search')">Browse Strains</button>
      </div>
      <div class="v27-onboard-steps"><span>✨ Personalized</span><span>🌙 Vibe-based</span><span>📝 Journal-ready</span></div>
    </div>`;
    document.body.appendChild(overlay);
  }
  function v27ImproveCarousels(){
    document.querySelectorAll('.quest-carousel,.vibe-ribbon,.recent-carousel,#trendingGrid,.lively-carousel').forEach(el=>el.classList.add('v27-carousel'));
  }
  function v27PremiumRefresh(){
    v27LockStrainCount();
    v27EnhanceHero();
    v27RenderSpotlight();
    v27ImproveCarousels();
    document.querySelectorAll('.strain-card,.panel,.daily-card,.pro-card,.section-title').forEach((el,i)=>{
      el.classList.add('v27-rise');
      el.style.setProperty('--v27-delay', `${Math.min(i,18)*28}ms`);
    });
  }
  const oldOpenModal = window.openModal || openModal;
  window.openModal = openModal = function(name){
    const s = typeof getStrain==='function' ? getStrain(name) : null;
    if(s) v27SetTheme(s);
    oldOpenModal(name);
    setTimeout(()=>{
      const modal=document.querySelector('.modal-card');
      if(modal && s){
        modal.classList.add('v27-modal-experience');
        modal.style.setProperty('--v27-card', v27ColorFor(s));
        const head=modal.querySelector('.modal-head');
        if(head && !modal.querySelector('.v27-modal-vibe')){
          const vibe=document.createElement('div');
          vibe.className='v27-modal-vibe';
          vibe.innerHTML=`<span>${s.category}</span><b>${potencyLabel ? potencyLabel(s) : 'Wellness direction'}</b>`;
          head.insertAdjacentElement('afterend', vibe);
        }
      }
    },60);
  };
  const oldSaveFavorite = window.saveFavorite || saveFavorite;
  window.saveFavorite = saveFavorite = function(name){ oldSaveFavorite(name); v27Toast('Saved to your wellness map','💚'); setTimeout(v27PremiumRefresh,80); };
  const oldAddCompare = window.addCompare || addCompare;
  window.addCompare = addCompare = function(name){ oldAddCompare(name); v27Toast('Compare insight added','⚖️'); };
  const oldSaveJournal = window.saveJournal || saveJournal;
  window.saveJournal = saveJournal = function(){ oldSaveJournal(); v27Toast('Journal insight saved','📝'); setTimeout(v27PremiumRefresh,80); };
  const oldRunMatcher = window.runMatcher || runMatcher;
  window.runMatcher = runMatcher = function(){ oldRunMatcher(); v27Toast('Personal match map ready','✅'); setTimeout(()=>{document.querySelectorAll('#matchResults .strain-card').forEach((el,i)=>{el.classList.add('v27-match-card');el.style.setProperty('--v27-delay',`${i*45}ms`);});},120); };
  const oldShowPage = window.showPage || showPage;
  window.showPage = showPage = function(id){ oldShowPage(id); setTimeout(v27PremiumRefresh,110); };

  window.addEventListener('load',()=>{
    setTimeout(()=>{v27PremiumRefresh(); v27RenderOnboarding();},700);
    setInterval(v27LockStrainCount,1000);
  });
  window.addEventListener('pageshow',()=>setTimeout(v27PremiumRefresh,180));
})();



/* ===== V29 STRUCTURAL POLISH LOGIC ===== */
(function(){
  function lockV29Stats(){
    try{
      var strainCount = document.getElementById("strainCount");
      if(strainCount && Array.isArray(window.strains)){
        strainCount.textContent = window.strains.length;
      } else if(strainCount && typeof strains !== "undefined" && Array.isArray(strains)){
        strainCount.textContent = strains.length;
      } else if(strainCount){
        strainCount.textContent = "150";
      }
    }catch(e){}
  }

  function addV29Classes(){
    document.body.classList.add("v29-structural-polish", "v30-mobile-layout-cleanup");
    document.querySelectorAll("#home .strain-card").forEach(function(card){
      card.classList.add("v29-home-card");
    });
  }

  document.addEventListener("DOMContentLoaded", function(){
    addV29Classes();
    lockV29Stats();
    setTimeout(lockV29Stats, 150);
    setTimeout(lockV29Stats, 600);
    setTimeout(lockV29Stats, 1500);
  });

  var oldUpdateStats = window.updateStats;
  if(typeof oldUpdateStats === "function"){
    window.updateStats = function(){
      oldUpdateStats.apply(this, arguments);
      lockV29Stats();
    };
  }
})();

/* ===== V36 APP STORE POLISH LOGIC ===== */
(function(){
  function $(id){return document.getElementById(id)}
  function applyV36(){
    document.body.classList.add('v36-app-store-polish');
    const sc=$('strainCount');
    if(sc){
      try{ sc.textContent = Array.isArray(window.strains) ? window.strains.length : (typeof strains!=='undefined' && Array.isArray(strains) ? strains.length : 150); }
      catch(e){ sc.textContent='150'; }
    }
    compactDailyCard();
    addAccentLines();
  }
  function compactDailyCard(){
    const card=document.querySelector('#home .daily-card');
    if(!card || card.dataset.v36Compact==='yes') return;
    card.dataset.v36Compact='yes';
    const title=card.querySelector('h2')?.textContent || 'Daily wellness direction';
    const strain=(title.split(':').pop()||'').trim();
    const btn=document.createElement('button');
    btn.className='small-btn v36-daily-open';
    btn.textContent='Open profile';
    btn.onclick=function(){ if(strain) openModal(strain); };
    const p=card.querySelector('p');
    if(p && !p.querySelector('button')) p.append(' ', btn);
  }
  function addAccentLines(){
    document.querySelectorAll('#home .section-title').forEach(function(s){
      if(!s.querySelector('.v36-accent-line')){
        const line=document.createElement('span'); line.className='v36-accent-line'; s.appendChild(line);
      }
    });
  }
  function showV36Onboarding(){
    if(localStorage.getItem('srV36OnboardingDone')==='yes' || document.getElementById('v36Onboarding')) return;
    const overlay=document.createElement('div');
    overlay.id='v36Onboarding'; overlay.className='v36-onboarding';
    overlay.innerHTML=`<div class="v36-onboard-card">
      <button class="v36-onboard-close" aria-label="Close">×</button>
      <span class="eyebrow">StrainRelief 2026</span>
      <h2>Your smart wellness map is live.</h2>
      <p>Search, match, save, and journal directions. Your dashboard learns from favorites and recent views while keeping everything educational and local to your device.</p>
      <div class="v36-onboard-actions"><button data-action="match">Start Matching</button><button class="ghost" data-action="search">Browse Strains</button></div>
      <div class="v36-onboard-pills"><span>✨ Personalized</span><span>🌙 Vibe lanes</span><span>📝 Habit tracking</span></div>
    </div>`;
    document.body.appendChild(overlay);
    const close=function(page){ localStorage.setItem('srV36OnboardingDone','yes'); overlay.remove(); if(page) showPage(page); };
    overlay.querySelector('.v36-onboard-close').onclick=function(){close();};
    overlay.querySelector('[data-action="match"]').onclick=function(){close('recommend');};
    overlay.querySelector('[data-action="search"]').onclick=function(){close('search');};
  }
  const oldShow=window.showPage;
  if(typeof oldShow==='function'){
    window.showPage=function(id){ oldShow.apply(this,arguments); setTimeout(applyV36,80); };
  }
  window.addEventListener('DOMContentLoaded',function(){applyV36(); setTimeout(applyV36,250);});
  window.addEventListener('load',function(){applyV36(); setTimeout(applyV36,700); setTimeout(showV36Onboarding,900);});
  window.addEventListener('pageshow',function(){setTimeout(applyV36,120);});
  setInterval(function(){ const sc=$('strainCount'); if(sc && sc.textContent!=='150') sc.textContent='150'; },1200);
})();


/* ===== V38 IMMERSION POLISH LOGIC ===== */
(function(){
  function hashText(str){let h=0;str=String(str||'strain');for(let i=0;i<str.length;i++){h=(h*31+str.charCodeAt(i))>>>0}return h;}
  function pickPalette(s){
    const cat=String(s?.category||'').toLowerCase(), name=String(s?.name||'').toLowerCase(), terp=(s?.terpenes||[])[0]||'';
    if(cat.includes('sleep')||name.includes('purple')) return ['#101837','#6d5dfc','#111f13','#d9c7ff'];
    if(cat.includes('focus')||String(s?.time||'').toLowerCase().includes('day')) return ['#062633','#58dfff','#0c2717','#d9fbff'];
    if(cat.includes('mood')||name.includes('gelato')||name.includes('cookies')) return ['#291333','#ff68c8','#0c2717','#fff0fb'];
    if(cat.includes('appetite')) return ['#30230a','#ffd45f','#0b2115','#fff6d5'];
    if(cat.includes('body')) return ['#142033','#b78cff','#0b2115','#eee3ff'];
    if(cat.includes('cbd')||name.includes('harlequin')) return ['#062a19','#74ffad','#08261c','#e9fff1'];
    return ['#082114','#5cff96','#10324a','#effff4'];
  }
  function svgArt(s){
    s=s||{}; const name=String(s.name||'Strain'); const cat=String(s.category||'Direction'); const h=hashText(name); const [bg,a,b,text]=pickPalette(s);
    const x1=18+(h%22), x2=58+((h>>3)%20), y1=22+((h>>5)%18), y2=60+((h>>7)%18);
    const leafA=`M ${x1} 86 C 38 48, 65 45, 88 18 C 84 57, 64 78, ${x1} 86 Z`;
    const leafB=`M ${x2} 88 C 78 44, 111 39, 136 14 C 130 61, 103 82, ${x2} 88 Z`;
    const leafC=`M 84 112 C 54 78, 70 52, 92 26 C 111 61, 111 92, 84 112 Z`;
    const display=name.length>22?name.slice(0,21)+'…':name;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 300" role="img" aria-label="${display}">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${bg}"/><stop offset=".55" stop-color="${b}"/><stop offset="1" stop-color="${a}" stop-opacity=".85"/></linearGradient>
        <radialGradient id="r" cx="30%" cy="18%" r="75%"><stop stop-color="${a}" stop-opacity=".55"/><stop offset=".52" stop-color="${bg}" stop-opacity=".18"/><stop offset="1" stop-color="#020d07"/></radialGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="420" height="300" rx="34" fill="url(#g)"/>
      <rect x="18" y="18" width="384" height="264" rx="32" fill="url(#r)" stroke="${a}" stroke-opacity=".35"/>
      <circle cx="332" cy="58" r="72" fill="${a}" opacity=".10"/>
      <circle cx="74" cy="234" r="96" fill="${a}" opacity=".10"/>
      <g transform="translate(116,48) scale(1.35)" filter="url(#glow)">
        <path d="${leafA}" fill="${a}" opacity=".95"/>
        <path d="${leafB}" fill="${a}" opacity=".9"/>
        <path d="${leafC}" fill="${a}" opacity=".82"/>
        <path d="M92 28 C88 70,90 103,82 133" stroke="${text}" stroke-width="4" opacity=".55" fill="none"/>
      </g>
      <g opacity=".85"><path d="M36 252 C110 220,160 226,212 244 S334 265,388 220" stroke="${a}" stroke-width="2" fill="none" opacity=".32"/><path d="M28 38 C84 72,152 64,218 40 S324 24,394 54" stroke="${text}" stroke-width="1.4" fill="none" opacity=".18"/></g>
      <rect x="26" y="218" width="150" height="42" rx="21" fill="#03130b" opacity=".72"/>
      <text x="46" y="245" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="900" fill="${text}">${cat}</text>
      <text x="236" y="252" font-family="Inter,Arial,sans-serif" font-size="26" font-weight="950" text-anchor="middle" fill="${text}" opacity=".96">${display}</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  }
  try{
    window.strainImage = strainImage = function(s){ return svgArt(s); };
    window.repairStrainImage = repairStrainImage = function(img,name){ const s=(typeof getStrain==='function'&&getStrain(name))||{name:name,category:'Direction'}; img.src=svgArt(s); img.style.display='block'; };
  }catch(e){}
  function applyV38(){
    document.body.classList.add('v38-immersion');
    try{ document.getElementById('strainCount').textContent='150'; }catch(e){}
    document.querySelectorAll('#home .strain-card,.panel,.daily-card,.pro-card,.section-title').forEach((el,i)=>{el.classList.add('v27-rise');el.style.setProperty('--v27-delay',`${Math.min(i,16)*22}ms`);});
  }
  function rerenderV38(){
    applyV38();
    try{ renderFeatured(); renderRecentHome(); renderSmartInsights&&renderSmartInsights(); renderWellnessDashboard&&renderWellnessDashboard(); }catch(e){}
    setTimeout(applyV38,60);
  }
  const oldShow=window.showPage||showPage;
  if(typeof oldShow==='function') window.showPage=showPage=function(id){ oldShow.apply(this,arguments); setTimeout(rerenderV38,90); };
  window.addEventListener('DOMContentLoaded',()=>setTimeout(rerenderV38,100));
  window.addEventListener('load',()=>{setTimeout(rerenderV38,250);setTimeout(rerenderV38,900);});
  window.addEventListener('pageshow',()=>setTimeout(rerenderV38,180));
})();


/* ===== V38.1 SCROLL SAFEGUARD ===== */
(function(){
  function unlockScroll(){
    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.height = "auto";
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto";
    document.body.style.position = "static";
    document.body.style.touchAction = "pan-y";
  }
  document.addEventListener("DOMContentLoaded", unlockScroll);
  window.addEventListener("load", unlockScroll);
  window.addEventListener("pageshow", unlockScroll);
  setTimeout(unlockScroll, 300);
  setTimeout(unlockScroll, 1200);
})();



/* ===== V39 LIGHT MOTION HELPERS ===== */
(function(){
  function addV39Polish(){
    document.body.classList.add("v39-polish");

    // Animate visible cards in small stagger without changing layout.
    const cards = document.querySelectorAll(".daily-card,.pro-card,.panel,.strain-card,.smart-card,.wellness-metric,.habit-card");
    cards.forEach((card, index) => {
      if(index < 24){
        card.style.animationDelay = `${Math.min(index * 35, 420)}ms`;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", addV39Polish);
  window.addEventListener("pageshow", addV39Polish);
})();


/* ===== V40 TERPENE RANDOMIZER ===== */
(function(){
function shuffle(arr){
 return [...arr].sort(()=>Math.random()-.5);
}

function rotateTerpeneExplorer(){
 try{
   const explorer=document.querySelector('#terpeneExplorer, .terpene-explorer, .terpene-grid');
   if(!explorer) return;

   const cards=[...explorer.children];
   if(cards.length<2) return;

   const todayKey='sr-terpene-order-v40';
   const today=new Date().toDateString();

   let saved=localStorage.getItem(todayKey);
   if(saved===today) return;

   const shuffled=shuffle(cards);

   shuffled.forEach(card=>explorer.appendChild(card));

   localStorage.setItem(todayKey,today);
 }catch(e){}
}

document.addEventListener('DOMContentLoaded', rotateTerpeneExplorer);
window.addEventListener('pageshow', rotateTerpeneExplorer);
})();



/* ===== V41 TRUE TERPENE ROTATION ===== */
(function(){
  function seededDailyShuffle(items, salt){
    const d = new Date();
    const seedBase = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${salt}`;
    function hash(str){
      let h = 2166136261;
      for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
      return h >>> 0;
    }
    return [...items].sort((a,b)=>{
      const at = (a.textContent || a.innerText || "") + seedBase;
      const bt = (b.textContent || b.innerText || "") + seedBase;
      return hash(at) - hash(bt);
    });
  }

  function rotateTerpeneDom(){
    const explorer = document.getElementById("terpeneExplorer") || document.querySelector(".terpene-explorer");
    if(!explorer) return;

    const candidates = Array.from(explorer.children).filter(el=>{
      const txt = (el.textContent || "").trim();
      return txt.length > 8;
    });

    if(candidates.length > 1){
      seededDailyShuffle(candidates, "terpene-dom-v41").forEach(el=>explorer.appendChild(el));
    }

    // Also rotate example strain buttons/pills inside each terpene block, if present.
    explorer.querySelectorAll(".learn-example-row,.similar-scroll,.tags").forEach(row=>{
      const kids = Array.from(row.children);
      if(kids.length > 2){
        seededDailyShuffle(kids, row.textContent.slice(0,20)).forEach(el=>row.appendChild(el));
      }
    });
  }

  const oldShowPage = window.showPage;
  if(typeof oldShowPage === "function"){
    window.showPage = function(id){
      const result = oldShowPage.apply(this, arguments);
      if(id === "learn"){
        setTimeout(rotateTerpeneDom, 80);
        setTimeout(rotateTerpeneDom, 400);
      }
      return result;
    };
  }

  document.addEventListener("DOMContentLoaded", ()=>{
    document.body.classList.add("v41-force-visible");
    setTimeout(rotateTerpeneDom, 200);
    setTimeout(rotateTerpeneDom, 900);
  });
  window.addEventListener("pageshow", ()=>setTimeout(rotateTerpeneDom, 200));
})();



/* ===== V42 HERO TEXT + RANDOM TERPENE EXPLORER + SEARCH VISIBILITY ===== */
(function(){
  function titleCaseHero(){
    const candidates = Array.from(document.querySelectorAll("#home h1, #home .hero-title, #home .hero h1, h1"));
    const hero = candidates.find(el => /find\s+your\s+wellness\s+direction/i.test(el.textContent || ""));
    if(hero){
      hero.innerHTML = '<span class="hero-line">Find Your Wellness</span><span class="hero-line">Direction.</span>';
      hero.style.textAlign = "center";
    }
  }

  function randomShuffle(nodes){
    const arr = Array.from(nodes);
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function randomizeTerpeneExplorer(){
    const containers = [
      document.getElementById("terpeneExplorer"),
      document.querySelector(".terpene-explorer"),
      document.querySelector("[data-terpene-explorer]"),
      document.querySelector("#learn .terpene-grid"),
      document.querySelector("#learn .learn-grid")
    ].filter(Boolean);

    containers.forEach(container => {
      const children = Array.from(container.children).filter(child => {
        const text = (child.textContent || "").trim();
        return text.length > 5;
      });
      if(children.length > 2){
        randomShuffle(children).forEach(child => container.appendChild(child));
      }
    });

    // Also randomize strain examples inside terpene cards so strains do not stay alphabetized.
    document.querySelectorAll("#terpeneExplorer .tags, #terpeneExplorer .similar-scroll, #terpeneExplorer .learn-example-row, .terpene-explorer .tags, .terpene-explorer .similar-scroll").forEach(row => {
      const kids = Array.from(row.children);
      if(kids.length > 2){
        randomShuffle(kids).forEach(kid => row.appendChild(kid));
      }
    });
  }

  function searchPageVisibility(){
    const searchPage = document.getElementById("search");
    if(!searchPage) return;

    const inputs = searchPage.querySelectorAll("input, .search-input, .searchbar");
    inputs.forEach(el => {
      el.style.marginTop = "10px";
      el.style.position = "relative";
      el.style.zIndex = "2";
    });
  }

  function runV42(){
    titleCaseHero();
    randomizeTerpeneExplorer();
    searchPageVisibility();
  }

  document.addEventListener("DOMContentLoaded", () => {
    runV42();
    setTimeout(runV42, 150);
    setTimeout(runV42, 700);
  });

  window.addEventListener("pageshow", () => setTimeout(runV42, 120));

  const oldShowPage = window.showPage;
  if(typeof oldShowPage === "function"){
    window.showPage = function(){
      const result = oldShowPage.apply(this, arguments);
      setTimeout(runV42, 120);
      return result;
    };
  }
})();












/* ======================================================
   V48 REAL DOM PATCH
   ====================================================== */
(function(){
  const VERSION = "v48-real-layout-fix";

  const RANDOM_POOL = [
    "Blue Dream","Granddaddy Purple","Harlequin","Wedding Cake","Gelato","Pineapple Express",
    "Jack Herer","Purple Punch","Runtz","Apple Fritter","Ghost Train Haze","Jillybean",
    "Permanent Marker","Banana OG","Animal Cookies","Maui Wowie","Do-Si-Dos","Ice Cream Cake",
    "Cherry Pie","Tangie","White Widow","Papaya","Bruce Banner","MAC","Oreoz","Sunset Sherbet",
    "Slurricane","Bubba Kush","Green Crack","Sour Diesel","Northern Lights","Cannatonic",
    "Zkittlez","Rainbow Belts","Forbidden Fruit","Trainwreck","Skywalker OG","Blueberry",
    "Lemon Tree","Blue Cheese","Platinum Cookies","Georgia Pie","Pennywise","Purple Urkle",
    "Mimosa","GMO Cookies","Kush Mints","Tropicana Cookies","LA Confidential","Headband",
    "Strawberry Cough","Lemon Haze","Super Silver Haze","Durban Poison","OG Kush",
    "Cereal Milk","Gary Payton","London Pound Cake","Grape Ape","Black Cherry Gelato",
    "Motorbreath","Khalifa Kush","Lemon Cherry Gelato","Jealousy","Apples and Bananas"
  ];

  function shuffle(arr){
    const a = [...arr];
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }

  function makeChip(name){
    const b=document.createElement("button");
    b.type="button";
    b.className="tag strain-pill v48-terpene-chip";
    b.textContent=name;
    return b;
  }

  function fixHomeHero(){
    document.querySelectorAll("#home h1,.hero h1,.home-hero h1,#home [class*='hero'] h1").forEach(h=>{
      if(/find\s+your\s+wellness/i.test(h.textContent || "")){
        h.innerHTML = "Find Your Wellness<br>Direction.";
        h.style.textTransform = "none";
        h.style.textAlign = "center";
      }
    });

    document.querySelectorAll("#home p,#home [class*='hero'] p").forEach(p=>{
      if(/Explore cannabis strain directions/i.test(p.textContent || "")){
        p.textContent = "Explore cannabis strain directions by mood, sleep, stress, body comfort, THC sensitivity, and terpene profile.";
        p.style.whiteSpace="normal";
        p.style.overflow="visible";
        p.style.textOverflow="clip";
        p.style.webkitLineClamp="unset";
        p.style.maxHeight="none";
        p.style.textAlign="center";
      }
    });
  }

  function removeJournalMoodPills(){
    const saved=document.querySelector("#saved");
    if(!saved) return;
    const moodWords=/calm|relaxed|sleepy|focused|creative|hungry|clear-headed|too intense|not noticeable/i;
    saved.querySelectorAll(".journal-feelings,.feelings-row,.quick-feelings,.mood-pills,.journal-mood-pills,.feeling-pill-row,.quick-mood-row,[data-feeling-pills],[data-journal-pills]").forEach(el=>el.remove());

    saved.querySelectorAll("div,section").forEach(el=>{
      const directButtons=[...el.children].filter(c=>c.tagName==="BUTTON");
      const txt=el.textContent||"";
      const nav=/home|search|match|saved|learn/i.test(txt);
      if(directButtons.length>=3 && moodWords.test(txt) && !nav && !el.querySelector("select,textarea,input")){
        el.remove();
      }
    });
  }

  function fixTerpeneHeadingOrder(){
    const learn=document.querySelector("#learn");
    if(!learn) return;

    const terpTitle=[...learn.querySelectorAll("h1,h2,h3")].find(h => /^Terpene Explorer$/i.test((h.textContent||"").trim()));
    if(!terpTitle) return;

    let heading=terpTitle.closest(".v48-terpene-heading");
    if(!heading){
      const desc = [...learn.querySelectorAll("p")].find(p => /Tap a terpene to expand/i.test(p.textContent||""));
      heading=document.createElement("div");
      heading.className="v48-terpene-heading";
      terpTitle.parentNode.insertBefore(heading, terpTitle);
      heading.appendChild(terpTitle);
      if(desc) heading.appendChild(desc);
    }

    const firstCard=[...learn.querySelectorAll(".terpene-card, .card, article, div")].find(el=>{
      const t=el.textContent||"";
      return /Myrcene|Limonene|Pinene/i.test(t) && el !== heading && !heading.contains(el);
    });

    if(firstCard && firstCard.parentNode && firstCard.parentNode !== heading.parentNode){
      firstCard.parentNode.insertBefore(heading, firstCard);
    } else if(firstCard && heading.nextElementSibling !== firstCard){
      firstCard.parentNode.insertBefore(heading, firstCard);
    }
  }

  function randomizeTerpeneExamples(){
    const learn=document.querySelector("#learn");
    if(!learn) return;

    const terpNames=/Myrcene|Limonene|Pinene|Caryophyllene|Linalool|Terpinolene|Humulene/i;

    const cards=[...learn.querySelectorAll(".terpene-card,.card,article")].filter(card=>{
      const text=card.textContent||"";
      return terpNames.test(text) && text.length > 40;
    });

    // fallback: use the immediate boxes that have terpene names
    const fallback=[...learn.querySelectorAll("div")].filter(card=>{
      const text=card.textContent||"";
      const rect=card.getBoundingClientRect();
      return terpNames.test(text) && text.length > 40 && rect.height > 80 && rect.height < 700 && card.querySelector("h3,h4,strong");
    });

    const targetCards=(cards.length ? cards : fallback).slice(0,7);

    targetCards.forEach((card,idx)=>{
      let row=card.querySelector("[data-terpene-examples],.tags,.strain-tags,.example-strains");
      if(!row){
        row=document.createElement("div");
        row.className="tags";
        row.setAttribute("data-terpene-examples","true");
        card.appendChild(row);
      }

      // Always replace if row has alphabet-looking early strains OR our v48 hasn't set it this page load.
      if(row.dataset.v48Done === "true") return;

      const chosen=shuffle(RANDOM_POOL).slice(0,4);
      row.innerHTML="";
      chosen.forEach(name=>row.appendChild(makeChip(name)));
      row.dataset.v48Done="true";
    });
  }

  function run(){
    fixHomeHero();
    removeJournalMoodPills();
    fixTerpeneHeadingOrder();
    randomizeTerpeneExamples();
  }

  document.addEventListener("DOMContentLoaded",()=>{
    run();
    setTimeout(run,250);
    setTimeout(run,900);
    setTimeout(run,1800);
  });
  window.addEventListener("pageshow",()=>setTimeout(run,250));
  window.addEventListener("hashchange",()=>setTimeout(run,250));
  document.addEventListener("click",()=>setTimeout(run,250),true);

  window.StrainReliefPatchVersion = VERSION;
})();


/* ======================================================
   V49 HERO TEXT + COMPACT FORCE
   ====================================================== */
(function(){
  function runV49(){
    const home = document.querySelector('#home');
    if(!home) return;
    const hero = home.querySelector('.hero,.hero-card,.home-hero,[class*="hero"]') || home.querySelector('section');
    if(hero){
      hero.style.minHeight='auto'; hero.style.height='auto'; hero.style.maxHeight='58vh';
      hero.style.padding='14px 14px 12px'; hero.style.marginBottom='10px';
    }
    home.querySelectorAll('h1').forEach(h=>{
      if(/find\s+your\s+wellness/i.test(h.textContent || '')){
        h.innerHTML='Find Your Wellness<br>Direction.';
        h.style.fontSize='clamp(1.95rem, 7.4vw, 2.55rem)'; h.style.lineHeight='.96';
        h.style.margin='4px 0 6px'; h.style.textAlign='center'; h.style.textTransform='none';
      }
    });
    home.querySelectorAll('p').forEach(p=>{
      if(/Explore cannabis strain directions/i.test(p.textContent || '')){
        p.textContent='Explore directions by mood, sleep, stress, body comfort, THC sensitivity, and terpenes.';
        p.style.display='block'; p.style.overflow='visible'; p.style.textOverflow='clip'; p.style.whiteSpace='normal';
        p.style.webkitLineClamp='unset'; p.style.maxHeight='none'; p.style.fontSize='.98rem'; p.style.lineHeight='1.24'; p.style.textAlign='center';
      }
    });
  }
  document.addEventListener('DOMContentLoaded',()=>{runV49(); setTimeout(runV49,300); setTimeout(runV49,1200);});
  window.addEventListener('pageshow',()=>setTimeout(runV49,250));
  window.addEventListener('hashchange',()=>setTimeout(runV49,250));
})();


/* ======================================================
   V50 FIRST SCREEN HOME COMPRESSION
   ====================================================== */
(function(){
  function applyV50(){
    const home = document.querySelector("#home");
    if(!home) return;

    const hero = home.querySelector(".hero,.hero-card,.home-hero,.heroPanel,[class*='hero']") || home.querySelector("section");
    if(hero){
      Object.assign(hero.style, {
        minHeight:"0",
        height:"auto",
        maxHeight:"52vh",
        padding:"8px 12px 9px",
        margin:"4px 8px 8px",
        borderRadius:"24px",
        gap:"6px"
      });
    }

    home.querySelectorAll("h1").forEach(h=>{
      if(/find\s+your\s+wellness/i.test(h.textContent || "")){
        h.innerHTML = "Find Your Wellness<br>Direction.";
        Object.assign(h.style, {
          fontSize:"clamp(1.48rem, 5.8vw, 1.95rem)",
          lineHeight:".93",
          margin:"2px auto 4px",
          textAlign:"center",
          letterSpacing:"-0.065em"
        });
      }
    });

    home.querySelectorAll("p").forEach(p=>{
      if(/Explore directions by mood|Explore cannabis strain directions/i.test(p.textContent || "")){
        p.textContent = "Explore directions by mood, sleep, stress, body comfort, THC sensitivity, and terpenes.";
        Object.assign(p.style, {
          display:"block",
          overflow:"visible",
          textOverflow:"clip",
          whiteSpace:"normal",
          webkitLineClamp:"unset",
          maxHeight:"none",
          fontSize:".78rem",
          lineHeight:"1.08",
          textAlign:"center",
          margin:"2px auto 5px",
          maxWidth:"92%"
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{applyV50(); setTimeout(applyV50,250); setTimeout(applyV50,1000);});
  window.addEventListener("pageshow",()=>setTimeout(applyV50,200));
  window.addEventListener("hashchange",()=>setTimeout(applyV50,200));
})();


/* ======================================================
   V51 REAL HERO FIX — remove mobile hero stat tiles
   ====================================================== */
(function(){
  function applyV51(){
    const home = document.querySelector("#home");
    if(!home) return;

    const hero = home.querySelector(".hero,.hero-card,.home-hero,.heroPanel,[class*='hero']") || home.querySelector("section");
    if(!hero) return;

    Object.assign(hero.style, {
      minHeight:"0",
      height:"auto",
      maxHeight:(window.innerHeight <= 850 ? "405px" : "430px"),
      padding:"12px 14px 14px",
      margin:"4px 10px 8px",
      overflow:"hidden",
      display:"block"
    });

    hero.querySelectorAll("*").forEach(el=>{
      const txt = (el.textContent || "").trim().toLowerCase();
      const cls = (el.className || "").toString().toLowerCase();

      if (
        cls.includes("stats") || cls.includes("metric") ||
        txt === "150 strains" || txt === "daily picks" || txt === "smart match"
      ) {
        el.style.display = "none";
      }
    });

    home.querySelectorAll("h1").forEach(h=>{
      if(/find\s+your\s+wellness/i.test(h.textContent || "")){
        h.innerHTML = "Find Your Wellness<br>Direction.";
        Object.assign(h.style, {
          fontSize:"clamp(1.55rem, 5.8vw, 1.92rem)",
          lineHeight:".96",
          margin:"0 auto 7px",
          textAlign:"center",
          letterSpacing:"-0.06em"
        });
      }
    });

    hero.querySelectorAll("p").forEach(p=>{
      if(/Explore directions by mood|Explore cannabis strain directions/i.test(p.textContent || "")){
        p.textContent = "Explore directions by mood, sleep, stress, body comfort, THC sensitivity, and terpenes.";
        Object.assign(p.style, {
          display:"block",
          overflow:"visible",
          textOverflow:"clip",
          whiteSpace:"normal",
          webkitLineClamp:"unset",
          maxHeight:"none",
          fontSize:".78rem",
          lineHeight:"1.15",
          textAlign:"center",
          margin:"0 auto 10px",
          maxWidth:"92%"
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{applyV51(); setTimeout(applyV51,300); setTimeout(applyV51,1200);});
  window.addEventListener("pageshow",()=>setTimeout(applyV51,200));
  window.addEventListener("resize",()=>setTimeout(applyV51,100));
})();
