const APP_VERSION="strainrelief-v16-8-daily-rotation";
const strains=[{"name": "Harlequin", "emoji": "🌱", "type": "CBD-dominant Hybrid", "category": "CBD", "thc": "Low to moderate THC", "cbd": "High CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Calm", "Clear-headed", "CBD-forward"], "goals": ["Anxiety", "Stress", "Body Comfort"], "score": 94, "flavor": "Earthy, herbal, mild sweetness", "caution": ["Strong high seekers"], "insight": "Harlequin is often discussed as a calm, clear-headed, cbd-forward direction. Ask for lab-tested options and start low.", "image": "images/strains/harlequin.webp"}, {"name": "ACDC", "emoji": "🍃", "type": "CBD-forward Hybrid", "category": "CBD", "thc": "Very low THC", "cbd": "Very high CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Functional", "Calm", "Low intoxication"], "goals": ["Anxiety", "Stress"], "score": 91, "flavor": "Earthy, citrus, pine", "caution": ["Strong high seekers"], "insight": "ACDC is often discussed as a functional, calm, low intoxication direction. Ask for lab-tested options and start low.", "image": "images/strains/acdc.webp"}, {"name": "Cannatonic", "emoji": "🌿", "type": "Balanced THC/CBD Hybrid", "category": "CBD", "thc": "Low to moderate THC", "cbd": "Moderate to high CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Calm", "Body comfort"], "goals": ["Stress", "Body Comfort"], "score": 89, "flavor": "Citrus, earthy, sweet", "caution": ["Strong high seekers"], "insight": "Cannatonic is often discussed as a balanced, calm, body comfort direction. Ask for lab-tested options and start low.", "image": "images/strains/cannatonic.webp"}, {"name": "Northern Lights", "emoji": "🌙", "type": "Indica", "category": "Sleep", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Nighttime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleepy", "Relaxed", "Nighttime"], "goals": ["Sleep", "Stress"], "score": 88, "flavor": "Pine, earthy, sweet spice", "caution": ["Strong high seekers"], "insight": "Northern Lights is often discussed as a sleepy, relaxed, nighttime direction. Ask for lab-tested options and start low.", "image": "images/strains/northern-lights.webp"}, {"name": "Blue Dream", "emoji": "💙", "type": "Balanced Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Mood", "Creative", "Balanced"], "goals": ["Mood", "Stress"], "score": 86, "flavor": "Berry, sweet, herbal", "caution": ["Strong high seekers"], "insight": "Blue Dream is often discussed as a mood, creative, balanced direction. Ask for lab-tested options and start low.", "image": "images/strains/blue-dream.webp"}, {"name": "Granddaddy Purple", "emoji": "🍇", "type": "Indica", "category": "Sleep", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Nighttime", "terpenes": ["Myrcene", "Caryophyllene", "Pinene"], "tags": ["Relaxation", "Evening", "Sleep"], "goals": ["Sleep", "Stress"], "score": 92, "flavor": "Grape, berry, sweet earth", "caution": ["Strong high seekers"], "insight": "Granddaddy Purple is often discussed as a relaxation, evening, sleep direction. Ask for lab-tested options and start low.", "image": "images/strains/granddaddy-purple.webp"}, {"name": "Sour Diesel", "emoji": "⚡", "type": "Sativa", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Caryophyllene", "Myrcene"], "tags": ["Energy", "Daytime", "Focus"], "goals": ["Mood", "Focus"], "score": 80, "flavor": "Diesel, citrus, sharp herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sour Diesel is often discussed as a energy, daytime, focus direction. Ask for lab-tested options and start low.", "image": "images/strains/sour-diesel.webp"}, {"name": "Girl Scout Cookies", "emoji": "🍪", "type": "Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Mood", "Relaxation"], "goals": ["Mood", "Stress", "Appetite"], "score": 84, "flavor": "Sweet, earthy, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Girl Scout Cookies is often discussed as a balanced, mood, relaxation direction. Ask for lab-tested options and start low.", "image": "images/strains/girl-scout-cookies.webp"}, {"name": "Pineapple Express", "emoji": "🍍", "type": "Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Happy", "Creative", "Daytime"], "goals": ["Mood", "Focus"], "score": 83, "flavor": "Pineapple, citrus, tropical", "caution": ["Strong high seekers"], "insight": "Pineapple Express is often discussed as a happy, creative, daytime direction. Ask for lab-tested options and start low.", "image": "images/strains/pineapple-express.webp"}, {"name": "Jack Herer", "emoji": "🌸", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Mood"], "goals": ["Mood", "Focus"], "score": 81, "flavor": "Pine, herbal, spice", "caution": ["Strong high seekers"], "insight": "Jack Herer is often discussed as a focus, energy, mood direction. Ask for lab-tested options and start low.", "image": "images/strains/jack-herer.webp"}, {"name": "Purple Punch", "emoji": "🫐", "type": "Indica-leaning Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 87, "flavor": "Berry, grape, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Purple Punch is often discussed as a sleep, calm, evening direction. Ask for lab-tested options and start low.", "image": "images/strains/purple-punch.webp"}, {"name": "Lemon Haze", "emoji": "🍋", "type": "Sativa-leaning", "category": "Mood", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Myrcene", "Caryophyllene"], "tags": ["Creative", "Daytime", "Mood"], "goals": ["Mood", "Focus"], "score": 78, "flavor": "Lemon, citrus, sweet", "caution": ["Strong high seekers"], "insight": "Lemon Haze is often discussed as a creative, daytime, mood direction. Ask for lab-tested options and start low.", "image": "images/strains/lemon-haze.webp"}, {"name": "Ringo's Gift", "emoji": "🎁", "type": "CBD-dominant Hybrid", "category": "CBD", "thc": "Very low THC", "cbd": "Very high CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Calm", "Beginner", "Stress"], "goals": ["Anxiety", "Stress"], "score": 90, "flavor": "Mint, pine, earthy", "caution": ["Strong high seekers"], "insight": "Ringo's Gift is often discussed as a calm, beginner, stress direction. Ask for lab-tested options and start low.", "image": "images/strains/ringo-s-gift.webp"}, {"name": "Charlotte's Web", "emoji": "🕊️", "type": "CBD-forward", "category": "CBD", "thc": "Very low THC", "cbd": "Very high CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Humulene"], "tags": ["Calm", "Stress", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 88, "flavor": "Earthy, floral, pine", "caution": ["Strong high seekers"], "insight": "Charlotte's Web is often discussed as a calm, stress, low thc direction. Ask for lab-tested options and start low.", "image": "images/strains/charlotte-s-web.webp"}, {"name": "Maui Wowie", "emoji": "🏝️", "type": "Sativa", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Myrcene"], "tags": ["Energy", "Mood", "Daytime"], "goals": ["Mood", "Focus"], "score": 82, "flavor": "Tropical, citrus, sweet", "caution": ["Strong high seekers"], "insight": "Maui Wowie is often discussed as a energy, mood, daytime direction. Ask for lab-tested options and start low.", "image": "images/strains/maui-wowie.webp"}, {"name": "Durban Poison", "emoji": "☀️", "type": "Sativa", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Ocimene", "Pinene"], "tags": ["Focus", "Daytime", "Energy"], "goals": ["Mood", "Focus"], "score": 77, "flavor": "Sweet, pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Durban Poison is often discussed as a focus, daytime, energy direction. Ask for lab-tested options and start low.", "image": "images/strains/durban-poison.webp"}, {"name": "White Widow", "emoji": "🕸️", "type": "Balanced Hybrid", "category": "Mood", "thc": "Moderate to high THC", "cbd": "Low CBD", "time": "Day or evening", "terpenes": ["Myrcene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Mood", "Relaxation"], "goals": ["Mood", "Stress"], "score": 79, "flavor": "Earthy, woody, pepper", "caution": ["Strong high seekers"], "insight": "White Widow is often discussed as a balanced, mood, relaxation direction. Ask for lab-tested options and start low.", "image": "images/strains/white-widow.webp"}, {"name": "Wedding Cake", "emoji": "🎂", "type": "Indica-dominant Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Myrcene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Appetite"], "score": 82, "flavor": "Vanilla, sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Wedding Cake is often discussed as a relaxation, mood, evening direction. Ask for lab-tested options and start low.", "image": "images/strains/wedding-cake.webp"}, {"name": "Gelato", "emoji": "🍨", "type": "Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Mood", "Relaxation", "Creative"], "goals": ["Mood", "Stress"], "score": 81, "flavor": "Creamy, sweet, berry", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Gelato is often discussed as a mood, relaxation, creative direction. Ask for lab-tested options and start low.", "image": "images/strains/gelato.webp"}, {"name": "OG Kush", "emoji": "🌲", "type": "Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Limonene", "Caryophyllene"], "tags": ["Relaxation", "Stress", "Mood"], "goals": ["Stress", "Body Comfort"], "score": 83, "flavor": "Fuel, pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "OG Kush is often discussed as a relaxation, stress, mood direction. Ask for lab-tested options and start low.", "image": "images/strains/og-kush.webp"}, {"name": "Bubba Kush", "emoji": "🛋️", "type": "Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 72, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Bubba Kush may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/bubba-kush.webp"}, {"name": "Zkittlez", "emoji": "🌈", "type": "Indica-dominant Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 73, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Zkittlez may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/zkittlez.webp"}, {"name": "Super Silver Haze", "emoji": "✨", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 74, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Super Silver Haze may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/super-silver-haze.webp"}, {"name": "Green Crack", "emoji": "🟢", "type": "Balanced Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 75, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Green Crack may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/green-crack.webp"}, {"name": "LA Confidential", "emoji": "🌃", "type": "Indica", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 76, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "LA Confidential may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/la-confidential.webp"}, {"name": "Remedy", "emoji": "🧘", "type": "Sativa", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 77, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Remedy may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/remedy.webp"}, {"name": "Pennywise", "emoji": "🪙", "type": "CBD-forward Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 78, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Pennywise may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/pennywise.webp"}, {"name": "Mango Kush", "emoji": "🥭", "type": "Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 79, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Mango Kush may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mango-kush.webp"}, {"name": "Strawberry Cough", "emoji": "🍓", "type": "Indica-dominant Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 80, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Strawberry Cough may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/strawberry-cough.webp"}, {"name": "Chemdawg", "emoji": "⛽", "type": "Sativa-leaning Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 81, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Chemdawg may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/chemdawg.webp"}, {"name": "Apple Fritter", "emoji": "🍎", "type": "Balanced Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 82, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Apple Fritter may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/apple-fritter.webp"}, {"name": "Do-Si-Dos", "emoji": "🍩", "type": "Indica", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 83, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Do-Si-Dos may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/do-si-dos.webp"}, {"name": "Skywalker OG", "emoji": "🚀", "type": "Sativa", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 84, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Skywalker OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/skywalker-og.webp"}, {"name": "Banana Kush", "emoji": "🍌", "type": "CBD-forward Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 85, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Banana Kush may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/banana-kush.webp"}, {"name": "Ice Cream Cake", "emoji": "🍰", "type": "Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 86, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Ice Cream Cake may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/ice-cream-cake.webp"}, {"name": "Animal Cookies", "emoji": "🐾", "type": "Indica-dominant Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 87, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Animal Cookies may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/animal-cookies.webp"}, {"name": "MAC 1", "emoji": "🧪", "type": "Sativa-leaning Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 88, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "MAC 1 may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mac-1.webp"}, {"name": "Ghost Train Haze", "emoji": "🚂", "type": "Balanced Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 89, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Ghost Train Haze may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/ghost-train-haze.webp"}, {"name": "Forbidden Fruit", "emoji": "🍑", "type": "Indica", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 90, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Forbidden Fruit may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/forbidden-fruit.webp"}, {"name": "Sunset Sherbet", "emoji": "🌅", "type": "Sativa", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 91, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sunset Sherbet may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sunset-sherbet.webp"}, {"name": "Runtz", "emoji": "🍬", "type": "CBD-forward Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 92, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Runtz may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/runtz.webp"}, {"name": "Mimosa", "emoji": "🍊", "type": "Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 93, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Mimosa may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mimosa.webp"}, {"name": "Gorilla Glue #4", "emoji": "🦍", "type": "Indica-dominant Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 94, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Gorilla Glue #4 may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gorilla-glue-4.webp"}, {"name": "Cereal Milk", "emoji": "🥛", "type": "Sativa-leaning Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 95, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cereal Milk may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cereal-milk.webp"}, {"name": "Cherry Pie", "emoji": "🥧", "type": "Balanced Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 96, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cherry Pie may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cherry-pie.webp"}, {"name": "Tahoe OG", "emoji": "🏔️", "type": "Indica", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 72, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tahoe OG may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tahoe-og.webp"}, {"name": "Bruce Banner", "emoji": "💥", "type": "Sativa", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 73, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Bruce Banner may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/bruce-banner.webp"}, {"name": "Lemon Cherry Gelato", "emoji": "🍒", "type": "CBD-forward Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 74, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lemon Cherry Gelato may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lemon-cherry-gelato.webp"}, {"name": "Gary Payton", "emoji": "🏀", "type": "Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 75, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Gary Payton may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gary-payton.webp"}, {"name": "Oreoz", "emoji": "🍫", "type": "Indica-dominant Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 76, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Oreoz may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/oreoz.webp"}, {"name": "Blackberry Kush", "emoji": "🫐", "type": "Sativa-leaning Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 77, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blackberry Kush may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blackberry-kush.webp"}, {"name": "Trainwreck", "emoji": "🚆", "type": "Balanced Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 78, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Trainwreck may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/trainwreck.webp"}, {"name": "Tangie", "emoji": "🍊", "type": "Indica", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 79, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tangie may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tangie.webp"}, {"name": "Afghan Kush", "emoji": "🏜️", "type": "Sativa", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 80, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Afghan Kush may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/afghan-kush.webp"}, {"name": "Lava Cake", "emoji": "🍫", "type": "CBD-forward Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 81, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lava Cake may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lava-cake.webp"}, {"name": "Slurricane", "emoji": "🌧️", "type": "Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 82, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Slurricane may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/slurricane.webp"}, {"name": "Papaya", "emoji": "🥭", "type": "Indica-dominant Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 83, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Papaya may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/papaya.webp"}, {"name": "Blue Cheese", "emoji": "🧀", "type": "Sativa-leaning Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 84, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Cheese may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-cheese.webp"}, {"name": "Critical Mass", "emoji": "⚖️", "type": "Balanced Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 85, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Critical Mass may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/critical-mass.webp"}, {"name": "Super Lemon Haze", "emoji": "🍋", "type": "Indica", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 86, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Super Lemon Haze may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/super-lemon-haze.webp"}, {"name": "Grape Ape", "emoji": "🛋️", "type": "Sativa", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 87, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Grape Ape may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/grape-ape.webp"}, {"name": "Tropicana Cookies", "emoji": "🌈", "type": "CBD-forward Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 88, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tropicana Cookies may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tropicana-cookies.webp"}, {"name": "Alien OG", "emoji": "✨", "type": "Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 89, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Alien OG may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/alien-og.webp"}, {"name": "Platinum Cookies", "emoji": "🟢", "type": "Indica-dominant Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 90, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Platinum Cookies may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/platinum-cookies.webp"}, {"name": "Jillybean", "emoji": "🌃", "type": "Sativa-leaning Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 91, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Jillybean may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/jillybean.webp"}, {"name": "Sweet Tooth", "emoji": "🧘", "type": "Balanced Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 92, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sweet Tooth may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sweet-tooth.webp"}, {"name": "Sundae Driver", "emoji": "🪙", "type": "Indica", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 93, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sundae Driver may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sundae-driver.webp"}, {"name": "Clementine", "emoji": "🥭", "type": "Sativa", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 94, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Clementine may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/clementine.webp"}, {"name": "Lemon Skunk", "emoji": "🍓", "type": "CBD-forward Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 95, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lemon Skunk may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lemon-skunk.webp"}, {"name": "Kosher Kush", "emoji": "⛽", "type": "Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 96, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Kosher Kush may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/kosher-kush.webp"}, {"name": "Blueberry", "emoji": "🍎", "type": "Indica-dominant Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 72, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blueberry may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blueberry.webp"}, {"name": "Sour Tsunami", "emoji": "🍩", "type": "Sativa-leaning Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 73, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sour Tsunami may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sour-tsunami.webp"}, {"name": "Lifter", "emoji": "🚀", "type": "Balanced Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 74, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Lifter may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lifter.webp"}, {"name": "Suzy Q", "emoji": "🍌", "type": "Indica", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 75, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Suzy Q may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/suzy-q.webp"}, {"name": "Elektra", "emoji": "🍰", "type": "Sativa", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 76, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Elektra may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/elektra.webp"}, {"name": "Harle-Tsu", "emoji": "🐾", "type": "CBD-forward Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 77, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Harle-Tsu may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/harle-tsu.webp"}, {"name": "CBD Critical Cure", "emoji": "🧪", "type": "Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 78, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "CBD Critical Cure may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cbd-critical-cure.webp"}, {"name": "Valentine X", "emoji": "🚂", "type": "Indica-dominant Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 79, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Valentine X may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/valentine-x.webp"}, {"name": "Quantum Kush", "emoji": "🍑", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 80, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Quantum Kush may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/quantum-kush.webp"}, {"name": "Blue Thai", "emoji": "🌅", "type": "Balanced Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 81, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Thai may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-thai.webp"}, {"name": "Platinum OG", "emoji": "🍬", "type": "Indica", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 82, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Platinum OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/platinum-og.webp"}, {"name": "Black Domina", "emoji": "🍊", "type": "Sativa", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 83, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Black Domina may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/black-domina.webp"}, {"name": "Romulan", "emoji": "🦍", "type": "CBD-forward Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 84, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Romulan may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/romulan.webp"}, {"name": "Chocolate Thai", "emoji": "🥛", "type": "Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 85, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Chocolate Thai may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/chocolate-thai.webp"}, {"name": "Acapulco Gold", "emoji": "🥧", "type": "Indica-dominant Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 86, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Acapulco Gold may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/acapulco-gold.webp"}, {"name": "Lamb's Bread", "emoji": "🏔️", "type": "Sativa-leaning Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 87, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lamb's Bread may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lamb-s-bread.webp"}, {"name": "Panama Red", "emoji": "💥", "type": "Balanced Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 88, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Panama Red may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/panama-red.webp"}, {"name": "Blue Zushi", "emoji": "🍒", "type": "Indica", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 89, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Zushi may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-zushi.webp"}, {"name": "Amnesia Haze", "emoji": "🏀", "type": "Sativa", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 90, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Amnesia Haze may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/amnesia-haze.webp"}, {"name": "Banana Cream", "emoji": "🍫", "type": "CBD-forward Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 91, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Banana Cream may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/banana-cream.webp"}, {"name": "Strawnana", "emoji": "🫐", "type": "Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 92, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Strawnana may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/strawnana.webp"}, {"name": "Member Berry", "emoji": "🚆", "type": "Indica-dominant Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 93, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Member Berry may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/member-berry.webp"}, {"name": "Space Queen", "emoji": "🍊", "type": "Sativa-leaning Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 94, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Space Queen may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/space-queen.webp"}, {"name": "Lemon Tree", "emoji": "🏜️", "type": "Balanced Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 95, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Lemon Tree may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/lemon-tree.webp"}, {"name": "Cactus Breath", "emoji": "🍫", "type": "Indica", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 96, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cactus Breath may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cactus-breath.webp"}, {"name": "Purple Urkle", "emoji": "🌧️", "type": "Sativa", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 72, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Purple Urkle may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/purple-urkle.webp"}, {"name": "Orange Cookies", "emoji": "🥭", "type": "CBD-forward Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 73, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Orange Cookies may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/orange-cookies.webp"}, {"name": "Sherbert", "emoji": "🧀", "type": "Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 74, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sherbert may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sherbert.webp"}, {"name": "Blueberry Muffin", "emoji": "⚖️", "type": "Indica-dominant Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 75, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blueberry Muffin may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blueberry-muffin.webp"}, {"name": "Peach Crescendo", "emoji": "🍋", "type": "Sativa-leaning Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 76, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Peach Crescendo may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/peach-crescendo.webp"}, {"name": "Chem Cookies", "emoji": "🛋️", "type": "Balanced Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 77, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Chem Cookies may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/chem-cookies.webp"}, {"name": "Dosilato", "emoji": "🌈", "type": "Indica", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 78, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Dosilato may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/dosilato.webp"}, {"name": "Jokerz", "emoji": "✨", "type": "Sativa", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 79, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Jokerz may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/jokerz.webp"}, {"name": "Red Velvet", "emoji": "🟢", "type": "CBD-forward Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 80, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Red Velvet may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/red-velvet.webp"}, {"name": "Cake Crasher", "emoji": "🌃", "type": "Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 81, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Cake Crasher may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cake-crasher.webp"}, {"name": "Honey Bun", "emoji": "🧘", "type": "Indica-dominant Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 82, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Honey Bun may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/honey-bun.webp"}, {"name": "Blue Gelato", "emoji": "🪙", "type": "Sativa-leaning Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 83, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Gelato may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-gelato.webp"}, {"name": "Blueberry Kush", "emoji": "🥭", "type": "Balanced Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 84, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blueberry Kush may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blueberry-kush.webp"}, {"name": "Watermelon Zkittlez", "emoji": "🍓", "type": "Indica", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 85, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Watermelon Zkittlez may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/watermelon-zkittlez.webp"}, {"name": "Modified Grapes", "emoji": "⛽", "type": "Sativa", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 86, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Modified Grapes may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/modified-grapes.webp"}, {"name": "Donny Burger", "emoji": "🍎", "type": "CBD-forward Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 87, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Donny Burger may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/donny-burger.webp"}, {"name": "Kosher Dawg", "emoji": "🍩", "type": "Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 88, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Kosher Dawg may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/kosher-dawg.webp"}, {"name": "LA Kush Cake", "emoji": "🚀", "type": "Indica-dominant Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 89, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "LA Kush Cake may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/la-kush-cake.webp"}, {"name": "White Runtz", "emoji": "🍌", "type": "Sativa-leaning Hybrid", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 90, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "White Runtz may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/white-runtz.webp"}, {"name": "Cherry Gelato", "emoji": "🍰", "type": "Balanced Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 91, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cherry Gelato may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cherry-gelato.webp"}, {"name": "Sunshine Daydream", "emoji": "🐾", "type": "Indica", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 92, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sunshine Daydream may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sunshine-daydream.webp"}, {"name": "Mendo Breath", "emoji": "🧪", "type": "Sativa", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 93, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Mendo Breath may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/mendo-breath.webp"}, {"name": "Orange Herijuana", "emoji": "🚂", "type": "CBD-forward Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 94, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Orange Herijuana may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/orange-herijuana.webp"}, {"name": "Fire OG", "emoji": "🍑", "type": "Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 95, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Fire OG may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/fire-og.webp"}, {"name": "Pink Kush", "emoji": "🌅", "type": "Indica-dominant Hybrid", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 96, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Pink Kush may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/pink-kush.webp"}, {"name": "GMO Cookies", "emoji": "🍬", "type": "Sativa-leaning Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 72, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "GMO Cookies may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gmo-cookies.webp"}, {"name": "Khalifa Kush", "emoji": "🍊", "type": "Balanced Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 73, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Khalifa Kush may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/khalifa-kush.webp"}, {"name": "Motorbreath", "emoji": "🦍", "type": "Indica", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 74, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Motorbreath may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/motorbreath.webp"}, {"name": "Peanut Butter Breath", "emoji": "🥛", "type": "Sativa", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 75, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Peanut Butter Breath may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/peanut-butter-breath.webp"}, {"name": "Sherbacio", "emoji": "🥧", "type": "CBD-forward Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 76, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Sherbacio may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/sherbacio.webp"}, {"name": "Permanent Marker", "emoji": "🏔️", "type": "Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 77, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Permanent Marker may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/permanent-marker.webp"}, {"name": "Apples and Bananas", "emoji": "💥", "type": "Indica-dominant Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 78, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Apples and Bananas may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/apples-and-bananas.webp"}, {"name": "Jealousy", "emoji": "🍒", "type": "Sativa-leaning Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 79, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Jealousy may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/jealousy.webp"}, {"name": "Biscotti", "emoji": "🏀", "type": "Balanced Hybrid", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 80, "flavor": "Sweet, earthy", "caution": ["Strong high seekers"], "insight": "Biscotti may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/biscotti.webp"}, {"name": "Kush Mints", "emoji": "🍫", "type": "Indica", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 81, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Kush Mints may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/kush-mints.webp"}, {"name": "Georgia Pie", "emoji": "🫐", "type": "Sativa", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 82, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Georgia Pie may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/georgia-pie.webp"}, {"name": "London Pound Cake", "emoji": "🚆", "type": "CBD-forward Hybrid", "category": "Stress", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 83, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "London Pound Cake may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/london-pound-cake.webp"}, {"name": "Carbon Fiber", "emoji": "🍊", "type": "Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 84, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Carbon Fiber may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/carbon-fiber.webp"}, {"name": "Rainbow Belts", "emoji": "🏜️", "type": "Indica-dominant Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 85, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Rainbow Belts may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/rainbow-belts.webp"}, {"name": "Tropical Runtz", "emoji": "🍫", "type": "Sativa-leaning Hybrid", "category": "Focus", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 86, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Tropical Runtz may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/tropical-runtz.webp"}, {"name": "Gushers", "emoji": "🌧️", "type": "Balanced Hybrid", "category": "Body Comfort", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 87, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Gushers may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/gushers.webp"}, {"name": "Marshmallow OG", "emoji": "🥭", "type": "Indica", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 88, "flavor": "Berry, dessert", "caution": ["Strong high seekers"], "insight": "Marshmallow OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/marshmallow-og.webp"}, {"name": "Black Cherry Gelato", "emoji": "🧀", "type": "Sativa", "category": "Appetite", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 89, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Black Cherry Gelato may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/black-cherry-gelato.webp"}, {"name": "Blue Cookies", "emoji": "⚖️", "type": "CBD-forward Hybrid", "category": "Daytime", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 90, "flavor": "Tropical, fruit", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Blue Cookies may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/blue-cookies.webp"}, {"name": "Canna-Tsu", "emoji": "🍋", "type": "Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 91, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Canna-Tsu may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/canna-tsu.webp"}, {"name": "Stephen Hawking Kush", "emoji": "🛋️", "type": "Indica-dominant Hybrid", "category": "Mood", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 92, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Stephen Hawking Kush may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/stephen-hawking-kush.webp"}, {"name": "Critical Kush", "emoji": "🌈", "type": "Sativa-leaning Hybrid", "category": "Sleep", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 93, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Critical Kush may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/critical-kush.webp"}, {"name": "Cherry AK", "emoji": "✨", "type": "Balanced Hybrid", "category": "Focus", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Sleep", "Calm", "Evening"], "goals": ["Sleep", "Stress"], "score": 94, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cherry AK may align with sleep, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cherry-ak.webp"}, {"name": "White Rhino", "emoji": "🟢", "type": "Indica", "category": "Body Comfort", "thc": "High THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Balanced", "Creative", "Mood"], "goals": ["Body Comfort", "Stress"], "score": 95, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "White Rhino may align with body comfort, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/white-rhino.webp"}, {"name": "Godfather OG", "emoji": "🌃", "type": "Sativa", "category": "CBD", "thc": "Very low to low THC", "cbd": "High CBD", "time": "Evening", "terpenes": ["Myrcene", "Pinene", "Linalool"], "tags": ["CBD-forward", "Calm", "Low THC"], "goals": ["Anxiety", "Stress"], "score": 96, "flavor": "Tropical, fruit", "caution": ["Strong high seekers"], "insight": "Godfather OG may align with anxiety, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/godfather-og.webp"}, {"name": "Super Boof", "emoji": "🧘", "type": "CBD-forward Hybrid", "category": "Appetite", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Pinene", "Limonene", "Terpinolene"], "tags": ["Appetite", "Relaxed", "Evening"], "goals": ["Appetite", "Stress"], "score": 72, "flavor": "Gas, pepper, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Super Boof may align with appetite, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/super-boof.webp"}, {"name": "Cap Junky", "emoji": "🪙", "type": "Hybrid", "category": "Daytime", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Myrcene", "Caryophyllene", "Limonene"], "tags": ["Stress", "Calm", "Body comfort"], "goals": ["Daytime", "Focus"], "score": 73, "flavor": "Sweet, earthy", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Cap Junky may align with daytime, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/cap-junky.webp"}, {"name": "RS11", "emoji": "🥭", "type": "Indica-dominant Hybrid", "category": "Stress", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Limonene", "Pinene", "Caryophyllene"], "tags": ["Clear-headed", "Functional", "Daytime"], "goals": ["Focus", "Stress"], "score": 74, "flavor": "Citrus, herbal", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "RS11 may align with focus, stress goals for some users. Cannabis affects everyone differently.", "image": "images/strains/rs11.webp"}, {"name": "Zoap", "emoji": "🍓", "type": "Sativa-leaning Hybrid", "category": "Mood", "thc": "Moderate THC", "cbd": "Low CBD", "time": "Evening", "terpenes": ["Terpinolene", "Myrcene", "Ocimene"], "tags": ["Relaxation", "Mood", "Evening"], "goals": ["Stress", "Mood"], "score": 75, "flavor": "Berry, dessert", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Zoap may align with stress, mood goals for some users. Cannabis affects everyone differently.", "image": "images/strains/zoap.webp"}, {"name": "Pink Runtz", "emoji": "⛽", "type": "Balanced Hybrid", "category": "Sleep", "thc": "High THC", "cbd": "Low CBD", "time": "Daytime", "terpenes": ["Caryophyllene", "Limonene", "Humulene"], "tags": ["Focus", "Energy", "Daytime"], "goals": ["Mood", "Focus"], "score": 76, "flavor": "Pine, spice", "caution": ["Anxiety-prone users", "Low THC tolerance"], "insight": "Pink Runtz may align with mood, focus goals for some users. Cannabis affects everyone differently.", "image": "images/strains/pink-runtz.webp"}];
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
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(id)?.classList.add("active");document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));let i=["home","search","recommend","saved","learn"].indexOf(id);if(i>=0)document.querySelectorAll(".nav-btn")[i].classList.add("active");window.scrollTo({top:0,behavior:"smooth"});if(id==="saved")renderSaved();if(id==="home")renderRecentHome();setTimeout(()=>{srAttachReveal();srAnimateMeters()},70)}
function jumpFilter(f){currentFilter=f;showPage("search");renderFilters();renderSearch()}
function cardHTML(s){return `<article class="strain-card" onclick="openModal('${safeName(s.name)}')"><div class="card-hero"><img src="${s.image}" alt="${s.name} strain direction artwork" loading="lazy" onerror="this.src='images/strains/fallback.webp'"></div><span class="eyebrow">${s.type}</span><h3>${s.name}</h3><p>${s.insight}</p><div class="tags">${s.tags.slice(0,4).map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`}
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
  const s=getStrain(name);if(!s)return;addRecent(name);
  const sim=getSimilarDirections(s,8);
  const thcVal=thcLevelValue(s.thc), cbdVal=cbdLevelValue(s.cbd);
  const terpeneBody=`<div class="terpene-grid">${(s.terpenes||[]).map(t=>`<div class="terpene-card"><strong>${t}</strong><p>${terpeneInfo(t)}</p></div>`).join("")}</div>`;
  const overview=`<p>${s.insight}</p><div class="badge-row">${strainBadges(s).map(b=>`<span class="badge ${b.includes("High")?'warning':''}">${b}</span>`).join("")}</div>`;
  const meters=`${meterHTML("THC direction",thcVal,s.thc)}${meterHTML("CBD direction",cbdVal,s.cbd)}<div class="detail-grid"><div><strong>Best time</strong><span>${s.time}</span></div><div><strong>Category</strong><span>${s.category}</span></div><div><strong>Flavor / aroma</strong><span>${s.flavor}</span></div><div><strong>Profile</strong><span>${s.type}</span></div></div>`;
  const cautions=`<div class="tags caution-tags">${cautionText(s).map(t=>`<span class="tag">${t}</span>`).join("")}</div><p class="fine-print">Start low, wait to understand effects, ask for lab-tested products, and talk to a licensed professional for medical questions.</p>`;
  $("modalBody").innerHTML=`
    <div class="modal-art premium-art"><img src="${s.image}" alt="${s.name} strain direction artwork" loading="lazy" onerror="this.src='images/strains/fallback.webp'"></div>
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
  return `<article class="saved-card"><button class="saved-open" onclick="openModal('${safeName(s.name)}')"><img src="${s.image}" alt="${s.name}" loading="lazy" onerror="this.src='images/strains/fallback.webp'"><div><span class="saved-emoji">${s.emoji||'🌿'}</span><h4>${s.name}</h4><p>${s.type}</p><small>Saved ${niceDate(date)}</small></div></button><div class="saved-mini-info">${miniMeter('THC',thcLevelValue(s.thc))}${miniMeter('CBD',cbdLevelValue(s.cbd))}</div><div class="saved-actions"><button class="small-btn" onclick="openModal('${safeName(s.name)}')">Open</button><button class="small-btn ghost" onclick="removeFavorite('${safeName(s.name)}')">Remove</button></div></article>`;
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
    {label:"Lower-risk lean",match:s=>cbdLevelValue(s.cbd)>=70&&thcLevelValue(s.thc)<=40,text:"Today’s direction leans toward lower THC and higher CBD education. Compare lab-tested options, start low, and follow local laws."},
    {label:"Evening wind-down",match:s=>String(s.time).toLowerCase().includes("evening")||String(s.time).toLowerCase().includes("night"),text:"Today’s direction highlights evening-style options. Avoid driving while impaired and give effects time before deciding anything."},
    {label:"Daytime clarity",match:s=>String(s.time).toLowerCase().includes("day"),text:"Today’s direction highlights daytime-style options. Look for terpene notes, THC level, and lower-risk choices before saving."},
    {label:"Body comfort",match:s=>searchableText(s).toLowerCase().includes("body comfort"),text:"Today’s direction focuses on body-comfort education. Cannabis affects everyone differently, so compare nearby directions carefully."},
    {label:"Stress support",match:s=>searchableText(s).toLowerCase().includes("stress"),text:"Today’s direction focuses on stress-style exploration. This is educational only, not treatment advice."},
    {label:"Mood check",match:s=>searchableText(s).toLowerCase().includes("mood"),text:"Today’s direction focuses on mood-style exploration. Review THC sensitivity and caution notes before choosing anything."},
    {label:"Terpene spotlight",match:s=>(s.terpenes||[]).length,text:"Today’s direction is terpene-led. Compare aroma, timing, THC/CBD direction, and caution notes before saving or journaling."}
  ];
  const theme=dailyThemes[seed%dailyThemes.length];
  let pool=strains.filter(theme.match);
  if(!pool.length) pool=[...strains];
  const pick=dailyShuffle(pool,"daily-wellness")[0];
  const terp=(pick.terpenes||[])[seed%(pick.terpenes||[""]).length]||"terpene profile";
  $("dailyTitle").textContent=`${theme.label}: ${pick.name}`;
  $("dailyText").textContent=`${theme.text} Today’s terpene spotlight: ${terp}. Educational only — start low, use lab-tested products, and follow local laws.`;
}
function updateStats(){$("strainCount").textContent=strains.length;$("savedCount").textContent=savedRecords().length;$("journalCount").textContent=read("srJournal",[]).length;renderCompareTray()}
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
    <div class="compare-card-img"><img src="${s.image}" onerror="this.src='images/strains/fallback.webp'" alt="${s.name}"></div>
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
function srMoveGlow(){document.addEventListener("pointermove",e=>{const card=e.target.closest(".hero,.panel,.strain-card,.daily-card,.pro-card,.section-title");if(!card)return;const b=card.getBoundingClientRect();card.style.setProperty("--mx",((e.clientX-b.left)/b.width*100).toFixed(1)+"%");card.style.setProperty("--my",((e.clientY-b.top)/b.height*100).toFixed(1)+"%")},{passive:true})}
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
  return `<article class="strain-card upgraded-card" onclick="openModal('${safeName(s.name)}')"><div class="card-hero"><img src="${s.image}" alt="${s.name} strain direction artwork" loading="lazy" onerror="this.src='images/strains/fallback.webp'"></div><div class="card-topline"><span class="eyebrow">${s.type}</span><b>${fit}% fit</b></div><h3>${s.name}</h3><p>${aiDirectionSummary(s)}</p><div class="tags">${s.tags.slice(0,4).map(t=>`<span class="tag">${t}</span>`).join("")}</div></article>`
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
    {label:'Lower-risk lean',match:s=>cbdLevelValue(s.cbd)>=70&&thcLevelValue(s.thc)<=40,text:'Today’s direction leans toward lower THC and higher CBD education.'},
    {label:'Evening wind-down',match:s=>String(s.time).toLowerCase().includes('evening')||String(s.time).toLowerCase().includes('night'),text:'Today’s direction highlights evening-style options.'},
    {label:'Daytime clarity',match:s=>String(s.time).toLowerCase().includes('day'),text:'Today’s direction highlights daytime-style options.'},
    {label:'Body comfort',match:s=>searchableText(s).includes('body comfort'),text:'Today’s direction focuses on body-comfort education.'},
    {label:'Stress support',match:s=>searchableText(s).includes('stress'),text:'Today’s direction focuses on stress-style exploration.'},
    {label:'Mood check',match:s=>searchableText(s).includes('mood'),text:'Today’s direction focuses on mood-style exploration.'},
    {label:'Terpene spotlight',match:s=>(s.terpenes||[]).length,text:'Today’s direction is terpene-led.'}
  ];
  const theme=dailyThemes[seed%dailyThemes.length];
  let pool=strains.filter(theme.match); if(!pool.length) pool=[...strains];
  const pick=dailyShuffle(pool,`daily-wellness-${new Date().toDateString()}`)[0];
  const terp=(pick.terpenes||[])[seed%Math.max(1,(pick.terpenes||[]).length)]||'terpene profile';
  $('dailyTitle').textContent=`${theme.label}: ${pick.name}`;
  $('dailyText').textContent=`${theme.text} Spotlight terpene: ${terp}. ${aiDirectionSummary(pick)}`;
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
    <div class="compare-card-img"><img src="${s.image}" onerror="this.src='images/strains/fallback.webp'" alt="${s.name}"></div>
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
