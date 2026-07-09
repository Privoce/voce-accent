/* ============================================================
   Voce English Coaching — course data
   Accent neutralization course for Chinese speakers.
   ============================================================ */

const MODULES = [
  {
    id: "start",
    num: "Module 1",
    title: "Start Here",
    blurb: "Mandarin and Cantonese shape your mouth, rhythm, and melody in ways English doesn't. Map exactly where the two systems collide before you start drilling."
  },
  {
    id: "vowels",
    num: "Module 2",
    title: "Vowel Foundations",
    blurb: "Chinese has no æ, no ɪ, and no reduced vowels — the three biggest sources of a Chinese accent. Establish the relaxed Schwa as your home base, then learn the exact mouth positions that keep vowels from blurring into each other."
  },
  {
    id: "consonants",
    num: "Module 3",
    title: "Signature Consonants",
    blurb: "The American R is nothing like the Mandarin r in rì (日). Train it in initial, medial, and final positions until it feels effortless."
  },
  {
    id: "connected",
    num: "Module 4",
    title: "Connected Speech",
    blurb: "Chinese syllables stay crisp and separate; English syllables melt together. Learn the customary reductions and blends — and when it is (and isn't) appropriate to use them."
  },
  {
    id: "rhythm",
    num: "Module 5",
    title: "Rhythm & Melody",
    blurb: "Chinese uses tones on every syllable; English spreads melody across whole sentences. Stress, intonation, pitch, pace, and power carry meaning, emotion, and intent."
  }
];

const LESSONS = [

  /* ==========================================================
     MODULE — START HERE
     ========================================================== */

  {
    id: "sound-map",
    module: "start",
    title: "Your Sound Map",
    ipa: "拼",
    asIn: "from pinyin to IPA",
    tag: "Orientation for Chinese speakers",
    tagline: "A neutral accent isn’t about erasing who you are — it’s about removing the friction between what you say and what listeners hear. Here’s exactly where Mandarin and American English collide, and how this course fixes each collision.",
    sections: [
      { type: "text", title: "The goal: neutral, not native", paras: [
        "You don’t need to sound like you grew up in Ohio. You need listeners to process your words effortlessly — no asking you to repeat, no drifting attention on conference calls, no smiling politely while missing your point. That’s what “neutralizing” an accent means: removing the specific habits that force listeners to work.",
        "The good news is that a Chinese accent is not a thousand random errors. It’s a short, predictable list of transfers from Mandarin (or Cantonese) phonology, and each one has a dedicated fix in this course."
      ]},
      { type: "steps", title: "Where Chinese and English collide", items: [
        "Missing vowels — Mandarin has no æ (bad), no ɪ (sit), and no ɛ before most consonants, so they collapse into nearby sounds. Lessons 2–9 rebuild them.",
        "No reduced syllables — every Mandarin syllable gets a full vowel, but most English syllables reduce to Schwa. Lesson 2 makes Schwa your home base.",
        "The R problem — Mandarin r (日) curls the tongue tip; American R bunches the tongue with no contact. Lesson 12 retrains it in all three positions.",
        "Choppy syllables — Chinese keeps syllables separate; English melts them together (want to → wanna). Lessons 13–14 teach the blends.",
        "Tone transfer — Mandarin pins a tone to every syllable, which makes English sound flat or staccato. Lessons 15–21 rebuild sentence-level melody."
      ]},
      { type: "note", html: "<strong>Why “listen and repeat” hasn’t worked:</strong> your ears filter English through Mandarin categories — <em>bad</em> and <em>bed</em> literally sound the same until your mouth learns to make them differently. That’s why every lesson here starts from tongue and lip positions, not imitation." },
      { type: "words", title: "Quick self-check", intro: "Say each pair out loud. If any pair comes out identical, note the lesson number — that’s where to focus.", items: [
        { w: "bad", hint: "æ — L3" }, { w: "bed", hint: "ɛ — L5" },
        { w: "man", hint: "æ — L3" }, { w: "men", hint: "ɛ — L5" },
        { w: "sit", hint: "ɪ — L8" }, { w: "seat", hint: "long e" },
        { w: "full", hint: "ʊ" }, { w: "fool", hint: "long u" },
        { w: "about", hint: "ə — L2" }, { w: "river", hint: "R — L12" }
      ]},
      { type: "sentences", title: "Listen, then shadow", intro: "Play each sentence, then repeat it immediately, copying the melody — not just the words.", items: [
        { t: "Hannah had a bad day.", hint: "æ" },
        { t: "He got out of bed and bumped his head.", hint: "ɛ" },
        { t: "Why would I want to ruin the surprise?", hint: "aj" },
        { t: "Sarah went to Florida for a vacation.", hint: "ə" },
        { t: "Do you know what you want for dinner?", hint: "blends" }
      ]},
      { type: "convo", title: "Conversation practice", intro: "Use these prompts with your coach to record a “before” sample you can compare against later.", items: [
        "Introduce yourself and describe your typical workday.",
        "When did you start learning English, and where do you use it most now?",
        "Which situations make you most aware of your accent — meetings, presentations, phone calls?"
      ]}
    ]
  },

  /* ==========================================================
     MODULE 1 — VOWEL FOUNDATIONS
     ========================================================== */

  {
    id: "schwa",
    module: "vowels",
    title: "The Schwa",
    ipa: "ə",
    asIn: "about",
    tag: "Your American home base",
    tagline: "The most significant building block in American pronunciation — and the one Mandarin lacks entirely, since every Chinese syllable keeps a full vowel. Establish the Schwa as your starting point and every other sound gets easier.",
    sections: [
      { type: "text", title: "Why it matters", paras: [
        "The Schwa is the most common vowel in English because the vowel sounds in many words have changed over time to make speech easier. We often use a specific vowel for slow, formal speech but switch to Schwa for the same word in fast or casual speech. In other words, Schwa has been consistently adopted at every level of formality.",
        "Schwa never appears in a stressed syllable, but it does appear in unstressed one-syllable words like the, a, and an. When your coach tells you to “relax” the lips, tongue, or throat, this is the mouth position they mean."
      ]},
      { type: "note", html: "<strong>Careful:</strong> the mouth position that feels most relaxed to <em>you</em> is probably not the American relaxed position. Every accent has its own “relaxed.” Your native tongue position is likely higher and tighter than you realize — to verify, lightly touch the tip of the tongue against the back of the lower front teeth without pressing or bunching it." },
      { type: "steps", title: "How to form it", items: [
        "“Relax” the tongue forward — touching the teeth at the sides and front",
        "“Relax” the lips — don’t bring the corners in",
        "Open the jaw slightly",
        "Open the throat"
      ]},
      { type: "drill", title: "Drill with your coach", intro: "Repeat after your coach to get used to forming the sound.", rows: [
        { label: "Consonant + Schwa", chips: [
          { ipa: "pə", hint: "puh" }, { ipa: "bə", hint: "buh" }, { ipa: "mə", hint: "muh" },
          { ipa: "nə", hint: "nuh" }, { ipa: "tə", hint: "tuh" }, { ipa: "də", hint: "duh" },
          { ipa: "ʃə", hint: "shuh" }, { ipa: "tʃə", hint: "chuh" }, { ipa: "dʒə", hint: "juh" },
          { ipa: "lə", hint: "luh" }, { ipa: "kə", hint: "kuh" }, { ipa: "gə", hint: "guh" }
        ]},
        { label: "Schwa + consonant", chips: [
          { ipa: "əp", hint: "uhp" }, { ipa: "əb", hint: "uhb" }, { ipa: "əm", hint: "uhm" },
          { ipa: "ən", hint: "uhn" }, { ipa: "ət", hint: "uht" }, { ipa: "əd", hint: "uhd" },
          { ipa: "əʃ", hint: "uhsh" }, { ipa: "ətʃ", hint: "uhch" }, { ipa: "ədʒ", hint: "uhj" },
          { ipa: "əɫ", hint: "uhl" }, { ipa: "ək", hint: "uhk" }, { ipa: "əg", hint: "uhg" }
        ]}
      ]},
      { type: "words", title: "Always Schwa", items: [
        { w: "action" }, { w: "information" }, { w: "efficient" }, { w: "silent" },
        { w: "woman" }, { w: "prominent" }, { w: "delicious" }, { w: "ambitious" },
        { w: "seven" }, { w: "problem" }, { w: "along" }, { w: "about" }
      ]},
      { type: "words", title: "Sometimes Schwa", intro: "These take Schwa in fast or casual speech, but a fuller vowel in slow, formal speech.", items: [
        { w: "destroy" }, { w: "foreign" }, { w: "secret" }, { w: "July" },
        { w: "was" }, { w: "habit" }, { w: "damage" }, { w: "wallet" },
        { w: "become" }, { w: "strategy" }, { w: "the" }, { w: "a" }
      ]},
      { type: "sentences", title: "Practice sentences", items: [
        { t: "It’s July 7th." },
        { t: "Sarah went to Florida for a vacation." },
        { t: "The photographer took beautiful pictures." },
        { t: "The police saved the woman from the robber." },
        { t: "“The Silence Breaker” was Person of the Year in 2017." },
        { t: "There are sixty minutes in an hour." },
        { t: "The President was on the cover of a magazine." },
        { t: "Anna was amazed by the elephants at the zoo." }
      ]},
      { type: "convo", title: "Conversation practice", intro: "Use these prompts with your coach and try to notice every Schwa you produce.", items: [
        "Have you been at your current company for long?",
        "Do you enjoy your work?",
        "What hobbies do you enjoy?"
      ]}
    ]
  },

  {
    id: "wide-short-a",
    module: "vowels",
    title: "Wide Short A",
    ipa: "æ",
    asIn: "apple",
    tag: "The tense, wide front vowel",
    tagline: "A short, static vowel made with the tongue pressed flat and the throat tightened. It’s naturally tense — keep it brief so the tension never creeps into your pitch.",
    sections: [
      { type: "text", title: "About short vowels", paras: [
        "Short vowels are simple and static, using only one mouth position. The tongue and mouth position must be exact so the vowel isn’t mistaken for another or spoken indistinctly. “Short” refers to the simplicity of the vowel, not the duration — you can stretch the sound, but it stays in one position.",
        "There are two short A sounds to distinguish: Wide Short A (æ) and Broad A (ɑ). This lesson focuses on Wide Short A. The tongue flattens out at the bottom of the mouth; as it presses down, the back of the tongue is displaced backward, tightening the throat. The lips pull back slightly to widen the mouth, and the jaw opens a little — all simultaneously, for one static sound."
      ]},
      { type: "note", html: "<strong>Keep it brief.</strong> This sound is very tense, so chop off your voice as soon as the sound is made before continuing to the next letter. Make sure the tension doesn’t push your pitch too high." },
      { type: "steps", title: "How to form it", items: [
        "Press the tongue down flat",
        "Tighten the throat",
        "Widen the mouth slightly"
      ]},
      { type: "drill", title: "Drill with your coach", rows: [
        { label: "Consonant + æ", chips: [
          { ipa: "pæ", hint: "paa" }, { ipa: "bæ", hint: "baa" }, { ipa: "mæ", hint: "maa" },
          { ipa: "næ", hint: "naa" }, { ipa: "tæ", hint: "taa" }, { ipa: "dæ", hint: "daa" },
          { ipa: "ʃæ", hint: "shaa" }, { ipa: "tʃæ", hint: "chaa" }, { ipa: "dʒæ", hint: "jaa" },
          { ipa: "læ", hint: "laa" }, { ipa: "kæ", hint: "kaa" }, { ipa: "gæ", hint: "gaa" }
        ]},
        { label: "æ + consonant", chips: [
          { ipa: "æp", hint: "aap" }, { ipa: "æb", hint: "aab" }, { ipa: "æm", hint: "aam" },
          { ipa: "æn", hint: "aan" }, { ipa: "æt", hint: "aat" }, { ipa: "æd", hint: "aad" },
          { ipa: "æʃ", hint: "aash" }, { ipa: "ætʃ", hint: "aach" }, { ipa: "ædʒ", hint: "aaj" },
          { ipa: "æɫ", hint: "aal" }, { ipa: "æk", hint: "aak" }, { ipa: "æg", hint: "aag" }
        ]}
      ]},
      { type: "words", title: "Example words", items: [
        { w: "apple" }, { w: "tax" }, { w: "glass" }, { w: "action" }, { w: "fast" }, { w: "have" },
        { w: "application" }, { w: "pass" }, { w: "catch" }, { w: "half" }, { w: "chat" }, { w: "has" },
        { w: "man" }, { w: "answer" }, { w: "chance" }, { w: "happen" }, { w: "gas" }, { w: "actually" },
        { w: "taxi" }, { w: "map" }, { w: "bad" }, { w: "master" }, { w: "astronaut" }, { w: "balance" }
      ]},
      { type: "sentences", title: "Practice sentences", items: [
        { t: "Hannah had a bad day." },
        { t: "Actually, we haven’t seen that yet." },
        { t: "Samantha loves to dance at jazz clubs." },
        { t: "The man laughed to suppress his sad memories." },
        { t: "Relax and smile for the camera." },
        { t: "I’m from Manhattan, but I have been to California, Alabama, and Alaska." },
        { t: "Can you please hand me a sandwich and a banana?" }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "What’s a good habit you’ve had since childhood that you still have today?",
        "What smartphone apps do you find most useful?",
        "What activities make you feel relaxed and happy?"
      ]}
    ]
  },

  {
    id: "wide-short-a-practice",
    module: "vowels",
    title: "Wide Short A: Practice",
    ipa: "æ",
    asIn: "apple",
    tag: "Practice intensive",
    tagline: "Mandarin speakers usually replace æ with the a in mā (妈) or the e in gě — both too far back. Drill the sound at the start and in the middle of words until the flat-tongue position is automatic.",
    sections: [
      { type: "text", title: "How to practice", paras: [
        "Work in two passes: say the short phrase first to isolate the target sound, then the full sentence at natural speed. If a word comes out sounding like ah, your tongue has crept up and back — flatten it and add the slight throat tension from the previous lesson."
      ]},
      { type: "phrases", title: "Initial æ — phrases & sentences", intro: "The target sound starts the word.", items: [
        { p: "ask for apples", s: "Annie asked Andrew for some apples." },
        { p: "an alligator", s: "The hunters trapped an alligator." },
        { p: "aunt’s agriculture", s: "My aunt has a Bachelor’s degree in agriculture." },
        { p: "after acting", s: "I hope to receive a BAFTA after acting in this film." },
        { p: "athlete’s answer", s: "They listened closely to the athlete’s answer." },
        { p: "anthill", s: "I snapped a photo of an anthill." },
        { p: "Alexander took aspirin", s: "Alexander decided to take an aspirin for his headache." },
        { p: "African animal", s: "This animal is native to Africa." },
        { p: "actual astronaut", s: "Someday, I hope to be an actual astronaut!" },
        { p: "Adam’s action movie", s: "Adam will be a stand-in actor for an action movie." },
        { p: "annual inspection", s: "The landlord did an annual inspection to check for any damage." },
        { p: "active afternoon", s: "He planned an active afternoon hike to unwind after a busy week." },
        { p: "Android apps", s: "My company is developing a new Android app." },
        { p: "antiques", s: "She preferred to shop for secondhand antiques." },
        { p: "applicant asked", s: "Each applicant was asked to provide references and examples of their work." }
      ]},
      { type: "phrases", title: "Medial æ — phrases & sentences", intro: "The target sound sits in the middle of the word.", items: [
        { p: "Saturn has", s: "Saturn actually has 82 moons." },
        { p: "a chance chat", s: "I ran into him by chance and we stopped for a chat." },
        { p: "fat cat", s: "That’s a very fat cat!" },
        { p: "math class", s: "We learned to add and subtract in math class." },
        { p: "happy, wagged", s: "The happy dog wagged its tail." },
        { p: "clap and laugh", s: "The comic’s crowd was soon clapping and laughing." },
        { p: "bag of cash", s: "The thieves left through the back with a bag of cash." },
        { p: "slap a gnat", s: "I slapped the gnats on my friend’s back." },
        { p: "man’s map", s: "The man’s map was old and inaccurate." },
        { p: "manager’s tasks", s: "The manager assigned tasks to each team member." },
        { p: "Canada’s capital", s: "Ottawa is the capital city of Canada." },
        { p: "family gathered", s: "The family gathered to celebrate Amanda’s graduation." },
        { p: "last chance", s: "She knew it was her last chance to catch the train before it left the station." },
        { p: "grandma’s apples", s: "His grandma baked a delicious apple pie." },
        { p: "ham sandwich", s: "Daniel made a ham sandwich for lunch." },
        { p: "demand for the brand", s: "The demand for the brand of shoes was so high that they were quickly sold out." },
        { p: "academy, talented", s: "The academy awarded scholarships to talented students." }
      ]}
    ]
  },

  {
    id: "short-e",
    module: "vowels",
    title: "Short E",
    ipa: "ɛ",
    asIn: "best",
    tag: "The relaxed mid front vowel",
    tagline: "Arch the tongue slightly in the middle — without tightening it — and let the voice come out unrestricted. Too far back and it turns into a Wide Short A.",
    sections: [
      { type: "text", title: "How it works", paras: [
        "To form the mouth position, arch the tongue up slightly in the middle, but without tightening it. When the tongue arches up in the middle, it pulls the rear of the tongue forward and opens the throat so the voice comes out unrestricted. You’ll feel the vibration at the top of the mouth, above where the tongue is arched.",
        "The lips, jaw, and throat all stay relaxed. Make sure the arch is right in the middle of the mouth, where there’s the most distance to the roof. If it drifts too far back, the throat tightens and the sound can be confused with Wide Short A. To check that your tongue is far enough forward, gently touch the tip against the back of the lower front teeth."
      ]},
      { type: "steps", title: "How to form it", items: [
        "Arch the tongue slightly in the middle",
        "Relax the throat",
        "Keep lips and jaw relaxed"
      ]},
      { type: "drill", title: "Drill with your coach", rows: [
        { label: "Consonant + ɛ", chips: [
          { ipa: "pɛ", hint: "pe" }, { ipa: "bɛ", hint: "be" }, { ipa: "mɛ", hint: "me" },
          { ipa: "nɛ", hint: "ne" }, { ipa: "tɛ", hint: "te" }, { ipa: "dɛ", hint: "de" },
          { ipa: "ʃɛ", hint: "she" }, { ipa: "tʃɛ", hint: "che" }, { ipa: "dʒɛ", hint: "je" },
          { ipa: "lɛ", hint: "le" }, { ipa: "kɛ", hint: "ke" }, { ipa: "gɛ", hint: "ge" }
        ]},
        { label: "ɛ + consonant", chips: [
          { ipa: "ɛp", hint: "ep" }, { ipa: "ɛb", hint: "eb" }, { ipa: "ɛm", hint: "em" },
          { ipa: "ɛn", hint: "en" }, { ipa: "ɛt", hint: "et" }, { ipa: "ɛd", hint: "ed" },
          { ipa: "ɛʃ", hint: "esh" }, { ipa: "ɛtʃ", hint: "ech" }, { ipa: "ɛdʒ", hint: "ej" },
          { ipa: "ɛɫ", hint: "el" }, { ipa: "ɛk", hint: "ek" }, { ipa: "ɛg", hint: "eg" }
        ]}
      ]},
      { type: "words", title: "Example words", items: [
        { w: "egg" }, { w: "elephant" }, { w: "event" }, { w: "enthusiasm" },
        { w: "tear", hint: "tehr" }, { w: "excellent" }, { w: "says", hint: "sez" }, { w: "bed" },
        { w: "scare", hint: "skɛr" }, { w: "stare", hint: "stɛr" }, { w: "celery" }, { w: "care", hint: "kɛr" },
        { w: "hair", hint: "hɛr" }, { w: "scenario", hint: "senɛrio" }, { w: "Sarah", hint: "sɛra" },
        { w: "Paris", hint: "pɛris" }, { w: "bear", hint: "bɛr" }, { w: "tent" }, { w: "metropolitan" },
        { w: "again", hint: "agɛn" }, { w: "against" }, { w: "sell / cell" }, { w: "hello" }, { w: "fair" }
      ]},
      { type: "note", html: "<strong>Regional note:</strong> Short E often appears before R (tear, care, fair). Some East Coast speakers — around New York City, Boston, and Philadelphia — raise the tongue slightly closer to the roof of the mouth there, making the vowel more tense but still static. Feel free to imitate the pattern most common in your region." },
      { type: "sentences", title: "Practice sentences", items: [
        { t: "I don’t care if it’s fair; give him back his chair." },
        { t: "The men’s restroom is next to the entrance." },
        { t: "He was sent to see when the rent was due." },
        { t: "Sarah would eventually forget everything she said." },
        { t: "He got out of bed and bumped his head." },
        { t: "The wedding was on February 12th." },
        { t: "It never worked well, so I want to sell it." }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "Have you ever kept a pet that was special to you?",
        "What do you like to do when you feel stressed or upset?",
        "Can you remember a time when you helped a friend?"
      ]}
    ]
  },

  {
    id: "short-e-practice",
    module: "vowels",
    title: "Short E: Practice",
    ipa: "ɛ",
    asIn: "best",
    tag: "Practice intensive",
    tagline: "Pinyin ei (as in lèi 累) glides upward; American ɛ holds still. These sets keep the vowel static next to the consonants that most often pull it out of position — L, M, N, and R.",
    sections: [
      { type: "text", title: "How to practice", paras: [
        "Say the short phrase first to isolate the sound, then the full sentence at natural speed. Watch for two failure modes: gliding into ei (a moving vowel), and drifting back into æ territory when the following consonant is L or R."
      ]},
      { type: "phrases", title: "ɛ + L, M, N", intro: "Phrase first, then the sentence.", items: [
        { p: "element of truth", s: "There was an element of truth to what he said." },
        { p: "tennis elbow", s: "I have a bad case of tennis elbow." },
        { p: "eligible for a discount", s: "He’s not eligible for the discount." },
        { p: "eloquent speech", s: "The inventor gave an eloquent speech." },
        { p: "glass elevator", s: "Hold the elevator, please!" },
        { p: "twelve-page essay", s: "You have to write a twelve-page essay." },
        { p: "cell phone", s: "I lost my cell phone on the train." },
        { p: "foreign embassy", s: "The embassy is in the capital city." },
        { p: "embarrassing moment", s: "That was my most embarrassing moment." },
        { p: "previous employer", s: "I have letters of recommendation from my previous employer." },
        { p: "busted engine", s: "The mechanic said the engine is busted." },
        { p: "friend or enemy", s: "The enemy of my enemy is my friend." },
        { p: "high temperatures", s: "What’s the temperature going to be today?" },
        { p: "contact lens", s: "Her contact lens fell out on the way." },
        { p: "fountain pen", s: "I only use fountain pens for writing important letters." }
      ]},
      { type: "phrases", title: "ɛ + R and other consonants", items: [
        { p: "error message", s: "I got an error message that I don’t understand." },
        { p: "run an errand", s: "My boss asked me to run some errands for her." },
        { p: "leather chair", s: "I’m getting a new leather chair." },
        { p: "bearer of bad news", s: "I’m sorry to be the bearer of bad news." },
        { p: "square peg", s: "You can’t fit a square peg in a round hole." },
        { p: "beyond compare", s: "Their effort this week has been beyond compare." },
        { p: "bedroom upstairs", s: "Your bedroom is upstairs on the left." },
        { p: "cliff edge", s: "The climber pulled himself over the edge of the cliff." },
        { p: "education budget", s: "We should spend more money on education." },
        { p: "economics expert", s: "She is an expert in economics for the government." },
        { p: "echoing cheers", s: "The crowd’s cheers echoed through the stadium." },
        { p: "newspaper editor", s: "They wrote a letter to the editor about the article." },
        { p: "rough estimate", s: "Do you have a rough estimate of the price?" },
        { p: "every day", s: "I make sure to eat a good breakfast every day." },
        { p: "internet connection", s: "My internet connection is very slow today." },
        { p: "second opinion", s: "I think you should get a second opinion." },
        { p: "dead serious", s: "He was dead serious about the project deadline." },
        { p: "overhead bins", s: "Please put your bags in the overhead bins." }
      ]}
    ]
  },

  {
    id: "a-vs-e",
    module: "vowels",
    title: "Wide Short A vs. Short E",
    ipa: "æ / ɛ",
    asIn: "cat / pet",
    tag: "The contrast lesson",
    tagline: "Both are static front vowels — the difference is tongue height. ɛ is a relaxed mid vowel; æ is a low, tense one. Sixty minimal pairs will make the difference automatic.",
    sections: [
      { type: "text", title: "The difference", paras: [
        "Both vowels are front vowels — the sound is pushed forward — and they differ by tongue height. Short E (ɛ) is a mid vowel: the middle of the tongue arches slightly, pulling the rear of the tongue away from the throat and releasing tension so the sound comes out unrestricted. The vibration echoes right at the top of the mouth.",
        "Wide Short A (æ) is a low vowel: the tongue flattens to the bottom of the mouth, the rear moves slightly back toward the throat, and that causes throat tension and airflow restriction. Your jaw is slightly open, your lips may pull back a little, and you feel the vibration near the throat."
      ]},
      { type: "steps", title: "Quick check", items: [
        "ɛ — tongue lifts slightly in the middle, relaxed, vibration mid-mouth",
        "æ — tongue flat and low, jaw open, slight throat tension",
        "If your ɛ feels tense, the tongue has drifted too far back"
      ]},
      { type: "drill", title: "Alternating drill", intro: "Alternate between the two sounds after your coach — feel the tongue drop and the throat tighten on æ.", rows: [
        { label: "æ vs ɛ", chips: [
          { ipa: "pæ · pɛ" }, { ipa: "bæ · bɛ" }, { ipa: "mæ · mɛ" }, { ipa: "næ · nɛ" },
          { ipa: "tæ · tɛ" }, { ipa: "dæ · dɛ" }, { ipa: "ʃæ · ʃɛ" }, { ipa: "tʃæ · tʃɛ" },
          { ipa: "dʒæ · dʒɛ" }, { ipa: "læ · lɛ" }, { ipa: "kæ · kɛ" }, { ipa: "gæ · gɛ" }
        ]}
      ]},
      { type: "pairs", title: "Hear the difference", intro: "Five words distinguished only by these two vowels. If a pair sounds identical when you say it, your tongue height isn’t changing.", colA: "Wide Short A (æ)", colB: "Short E (ɛ)", rows: [
        ["sat","set"],["mat","met"],["bat","bet"],["mash","mesh"],["shall","shell"]
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "Have you ever had to ask for help in a place where you didn’t know anyone?",
        "Do you prefer to get ready early or head out at the last minute?"
      ]}
    ]
  },

  {
    id: "a-vs-e-pairs",
    module: "vowels",
    title: "æ vs. ɛ: Minimal Pairs",
    ipa: "æ / ɛ",
    asIn: "bad / bed",
    tag: "Practice intensive",
    tagline: "For most Chinese speakers this is the single highest-impact drill in the course: bad/bed, man/men, and sixty other pairs that Mandarin hears as the same word.",
    sections: [
      { type: "text", title: "How to practice", paras: [
        "Read each pair aloud, exaggerating the difference at first: jaw open and throat slightly tense for æ, everything relaxed with the tongue arched mid-mouth for ɛ. Then have your coach say one word from a pair at random — if you can’t tell which one they said, your ear still needs calibrating, and that’s normal at this stage."
      ]},
      { type: "pairs", title: "Minimal pairs", intro: "Words distinguished only by these two vowels. Click any word to hear it.", colA: "Wide Short A (æ)", colB: "Short E (ɛ)", rows: [
        ["slapped","slept"],["laughed","left"],["mass","mess"],["Hal","hell"],["pat","pet"],
        ["lad","led"],["sat","set"],["Dan","den"],["can","Ken"],["dad","dead"],
        ["mat","met"],["pan","pen"],["shall","shell"],["rap","rep"],["gnat","net"],
        ["band","bend"],["man","men"],["flash","flesh"],["gas","guess"],["axe","ex"],
        ["tack","tech"],["bland","blend"],["rabble","rebel"],["vat","vet"],["cattle","kettle"],
        ["brat","Brett"],["drags","dregs"],["bath","Beth"],["adapt","adept"],["had","head"],
        ["bad","bed"],["bag","beg"],["jam","gem"],["bat","bet"],["batter","better"],
        ["ban","Ben"],["fad","fed"],["ham","hem"],["flak","fleck"],["wrack","wreck"],
        ["pack","peck"],["and","end"],["tan","ten"],["sand","send"],["sad","said"],
        ["land","lend"],["spanned","spend"],["manned","mend"],["track","trek"],["frat","fret"],
        ["tamp","temp"],["gassed","guest"],["paddle","pedal"],["than","then"],["hack","heck"],
        ["mash","mesh"],["math","meth"],["access","excess"],["command","commend"]
      ]},
      { type: "words", title: "Practice words", items: [
        { w: "regret" }, { w: "ask" }, { w: "cellphone" }, { w: "laugh" }, { w: "as" },
        { w: "bend" }, { w: "at" }, { w: "any" }, { w: "lend" }, { w: "last" }
      ]},
      { type: "sentences", title: "Sentences with both sounds", items: [
        { t: "We all laughed after he left." },
        { t: "Beth slipped and fell as she got out of the bath." },
        { t: "They used a GPS to track their location during the trek." },
        { t: "The other team’s batter was better than ours." },
        { t: "She sat down next to a set of tools." },
        { t: "The general was commended for his command of the armies." },
        { t: "The beds in this hotel are bad for my back." },
        { t: "The dog begged for the snacks in my bag." },
        { t: "I hung a net over my bed to stop the gnats from biting." },
        { t: "The sales rep had packed a ham and cheese wrap for lunch." },
        { t: "The city had to spend millions to make a bridge that spanned the river." },
        { t: "She’s really fed up with all of these fad diets." },
        { t: "The lad led his friends to the park." },
        { t: "The ten of us laid in the sun to get a tan." },
        { t: "You’ll never guess how much gas used to cost." },
        { t: "He met Matt at the festival." },
        { t: "There wasn’t any food left over from the benefit." },
        { t: "Adam lost his temper when his cat scratched his face." },
        { t: "The bakery gives out free donuts every Saturday afternoon." },
        { t: "Jared had an asthma attack in the middle of the game." }
      ]}
    ]
  },

  {
    id: "short-i",
    module: "vowels",
    title: "Short I",
    ipa: "ɪ",
    asIn: "sit",
    tag: "Practice intensive",
    tagline: "Mandarin has i (衣) but nothing between it and Schwa, so ship becomes sheep and fill becomes feel. Keep it short, keep it lax, and drill it in every position of the word.",
    sections: [
      { type: "text", title: "The goal", paras: [
        "Short I is a static vowel that sits between the tense “ee” of see and the Schwa. Learners commonly replace it with a long “ee,” turning ship into sheep and fill into feel. The tongue lifts toward the front of the mouth but stays relaxed — no tension, no glide.",
        "Work through the phrases below in two passes: first the short phrase to isolate the sound, then the full sentence at natural speed."
      ]},
      { type: "phrases", title: "Initial ɪ — phrases & sentences", items: [
        { p: "initial here", s: "Please initial these lines." },
        { p: "make an igloo", s: "I learned to build an igloo this week!" },
        { p: "bad intentions", s: "I could tell she had bad intentions." },
        { p: "favorite instrument", s: "The saxophone is my favorite instrument." },
        { p: "stayed inside", s: "I spent the afternoon inside to avoid the heat." },
        { p: "long ignored", s: "My request was ignored for some time." },
        { p: "gone instantly", s: "It was gone in an instant." },
        { p: "full inquiry", s: "There will be a full inquiry into the events." },
        { p: "interrogate a suspect", s: "The police interrogated the suspect." },
        { p: "feeling ill", s: "I can’t come in today because I’m feeling ill." },
        { p: "imitate humans", s: "Parrots can imitate humans very well." },
        { p: "illustrates comics", s: "My friend illustrates comics for a living." },
        { p: "itchy bug bites", s: "I have some itchy bug bites." }
      ]},
      { type: "phrases", title: "Medial ɪ — phrases & sentences", items: [
        { p: "listen carefully", s: "Listen carefully to the instructions." },
        { p: "sit there", s: "Sit there until I’m back." },
        { p: "criminal offense", s: "Price gouging is a criminal offense." },
        { p: "beginning and middle", s: "The beginning was good, but I had to leave in the middle." },
        { p: "guitar class", s: "I have guitar class on Mondays." },
        { p: "gin and tonic", s: "He leaned back and took a sip of his gin and tonic." },
        { p: "swallow pills", s: "Children can have a hard time swallowing pills." },
        { p: "missing piece", s: "I finally found the missing piece of the puzzle." },
        { p: "traffic jam", s: "I got stuck in a traffic jam this morning." },
        { p: "live-in nanny", s: "We just hired a live-in nanny." },
        { p: "dinner this week", s: "Can I take you to dinner this week?" },
        { p: "Americans and Brits", s: "Americans and Brits speak English differently." },
        { p: "fill up", s: "Can you fill up my coffee, please?" },
        { p: "Jim slipped", s: "I laughed when my friend Jim slipped." },
        { p: "kids grinned", s: "The kids grinned when they got their picture taken." },
        { p: "in orbit", s: "The rocket blasted the astronauts into orbit." },
        { p: "incredibly bitter", s: "Some teas can be incredibly bitter." },
        { p: "big kiss", s: "Grandma always gives me a big kiss on the cheek." }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "What did you do this morning before leaving the house?",
        "Is there a skill you’re still trying to improve?"
      ]}
    ]
  },

  {
    id: "long-i",
    module: "vowels",
    title: "Long I",
    ipa: "aj",
    asIn: "why",
    tag: "A moving, two-position vowel",
    tagline: "Two short vowels in rapid succession: Broad A gliding into Y. Pause on either half and you’ll land in a regional accent instead of the standard American one.",
    sections: [
      { type: "text", title: "About long vowels", paras: [
        "Long vowels are moving and complex, with two or more mouth positions. “Long” refers to the complexity, not the duration — say it slowly or quickly, it’s still long because it moves between positions.",
        "Long I is made of two short vowel positions: Broad A (a) and Y as in “yes” (j). Start with an open mouth and the back of the tongue slightly arched — throat and lips relaxed, jaw slightly lowered. Then lift the jaw as you move forward, arching the front of the tongue and pushing it close to the bump behind the top teeth, creating a vibration on the tongue and palate. The two positions must run together in rapid succession."
      ]},
      { type: "note", html: "<strong>Regional note:</strong> in most parts of the Southern USA, you may hear people omit the second half of the vowel — “why” becomes “wah.”" },
      { type: "note", html: "<strong>Before Dark L or R:</strong> a brief Schwa can appear, so <em>while</em> sounds like “why-uhl”: tile → taj-əl, fire → faj-ər. This extra sound only appears after long vowels and is often reduced in fast speech — “I’ll help you” → “əl help you.”" },
      { type: "drill", title: "Drill with your coach", rows: [
        { label: "Consonant + aj", chips: [
          { ipa: "paj", hint: "py" }, { ipa: "baj", hint: "by" }, { ipa: "maj", hint: "my" },
          { ipa: "naj", hint: "ny" }, { ipa: "taj", hint: "ty" }, { ipa: "daj", hint: "dy" },
          { ipa: "ʃaj", hint: "shy" }, { ipa: "tʃaj", hint: "chy" }, { ipa: "dʒaj", hint: "jy" },
          { ipa: "laj", hint: "ly" }, { ipa: "kaj", hint: "ky" }, { ipa: "gaj", hint: "gy" }
        ]},
        { label: "aj + consonant", chips: [
          { ipa: "ajp", hint: "ahyp" }, { ipa: "ajb", hint: "ahyb" }, { ipa: "ajm", hint: "ahym" },
          { ipa: "ajn", hint: "ahyn" }, { ipa: "ajt", hint: "ahyt" }, { ipa: "ajd", hint: "ahyd" },
          { ipa: "ajʃ", hint: "ahysh" }, { ipa: "ajtʃ", hint: "ahych" }, { ipa: "ajdʒ", hint: "ahyj" },
          { ipa: "ajɫ", hint: "ahyl" }, { ipa: "ajk", hint: "ahyk" }, { ipa: "ajg", hint: "ahyg" }
        ]}
      ]},
      { type: "words", title: "Example words", items: [
        { w: "I" }, { w: "like" }, { w: "idea" }, { w: "time" }, { w: "mine" }, { w: "fight" },
        { w: "spike" }, { w: "right" }, { w: "my" }, { w: "cry" }, { w: "shy" }, { w: "by / buy / bye" },
        { w: "sight" }, { w: "die" }, { w: "guys" }, { w: "surprise" }, { w: "rhyme" }, { w: "fine" },
        { w: "try" }, { w: "defy" }, { w: "lie" }, { w: "kite" }, { w: "organize" }
      ]},
      { type: "sentences", title: "Practice sentences", items: [
        { t: "Why would I want to ruin the surprise?" },
        { t: "She stopped to tie her shoes as he walked by." },
        { t: "I sighed as I thought of all the times I had made them cry." },
        { t: "As hard as he tried, he couldn’t escape his demise." },
        { t: "Life is short, so use it wisely." },
        { t: "Don’t buy it if you don’t like it." },
        { t: "I like fried chicken, but I'm trying to minimize fried food in my diet." }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "What kind of music do you like and why?",
        "Does your home culture have a particular style of music and dance?"
      ]}
    ]
  },

  {
    id: "french-en",
    module: "vowels",
    title: "French EN",
    ipa: "ɒn / ɑ̃",
    asIn: "encore",
    tag: "Loan-word pronunciation",
    tagline: "Words borrowed from French keep a hint of their origin. Learn both accepted pronunciations — the casual “on” version and the formal nasal one.",
    sections: [
      { type: "text", title: "Loan words", paras: [
        "Some English words come from other languages — loan words — and their pronunciation adapts over time. Most French borrowings are fully anglicized, but in recent borrowings the E+N combination keeps something of its French sound.",
        "There are two accepted ways to say it. The first (/ɒn/) is a Short O followed by N, as in the word “on” — more common in younger generations. The second (/ɑ̃/) drops the jaw slightly, tightens the lips, arches the back of the tongue, and lowers the soft palate so airflow goes up through the nose. It’s a static nasal sound, closer to French, and mostly used in formal situations."
      ]},
      { type: "note", html: "<strong>Time changes everything:</strong> “envelope” was said with French EN until a few decades ago and now commonly takes a Short E. “Enmity,” borrowed much earlier, always takes Short E, and “endeavor” is usually said with Schwa." },
      { type: "steps", title: "The nasal version /ɑ̃/", items: [
        "Lower the soft palate",
        "Tighten or round the lips",
        "Arch the rear of the tongue",
        "Slightly drop the jaw"
      ]},
      { type: "drill", title: "Drill with your coach", intro: "Use whichever version you prefer.", rows: [
        { label: "Short O + N (/ɒn/)", chips: [
          { ipa: "pɒn", hint: "pohn" }, { ipa: "bɒn", hint: "bohn" }, { ipa: "mɒn", hint: "mohn" },
          { ipa: "tɒn", hint: "tohn" }, { ipa: "dɒn", hint: "dohn" }, { ipa: "ʃɒn", hint: "shohn" },
          { ipa: "lɒn", hint: "lohn" }, { ipa: "kɒn", hint: "kohn" }, { ipa: "gɒn", hint: "gohn" }
        ]},
        { label: "Nasal French EN (/ɑ̃/)", chips: [
          { ipa: "pɑ̃", hint: "pan" }, { ipa: "bɑ̃", hint: "ban" }, { ipa: "mɑ̃", hint: "man" },
          { ipa: "tɑ̃", hint: "tan" }, { ipa: "dɑ̃", hint: "dan" }, { ipa: "ʃɑ̃", hint: "shan" },
          { ipa: "lɑ̃", hint: "lan" }, { ipa: "kɑ̃", hint: "kan" }, { ipa: "gɑ̃", hint: "gan" }
        ]}
      ]},
      { type: "words", title: "Example words", items: [
        { w: "entrée" }, { w: "entrepreneur" }, { w: "encore" }, { w: "en suite" },
        { w: "entourage" }, { w: "en route" }, { w: "entente" }, { w: "ennui" },
        { w: "envoy" }, { w: "genre" }, { w: "double entendre" }, { w: "ensemble" }
      ]},
      { type: "sentences", title: "Practice sentences", items: [
        { t: "The opera was good, but it had a lot of double entendre." },
        { t: "He is an entrepreneur and an investor." },
        { t: "Have you seen the show called Entourage?" },
        { t: "The shipment is en route, but it may be late." },
        { t: "What is your favorite genre of music?" },
        { t: "The performers created an astonishing ensemble." },
        { t: "What would you like for your first entrée?" }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "What genre of TV and movies do you like?",
        "Have you ever thought about being an entrepreneur?"
      ]}
    ]
  },

  /* ==========================================================
     MODULE 2 — SIGNATURE CONSONANTS
     ========================================================== */

  {
    id: "american-r",
    module: "consonants",
    title: "The American R",
    ipa: "ɹ",
    asIn: "river",
    tag: "Practice intensive",
    tagline: "The most recognizable sound in the American accent — and a false friend: the Mandarin r in rì (日) curls the tongue tip, while the American R bunches the tongue with no contact at all. Train it in all three positions.",
    sections: [
      { type: "text", title: "The goal", paras: [
        "The American R is made without the tongue tip touching anything: the tongue pulls back and bunches, the sides press against the upper back teeth, and the lips round slightly. Unlike many languages, there’s no tap, trill, or contact.",
        "Its sound changes subtly depending on where it falls in a word, so this practice set covers all three positions. Say the short phrase first, then the sentence at natural speed."
      ]},
      { type: "phrases", title: "Initial R — phrases & sentences", items: [
        { p: "relief fund", s: "Citizens have donated money to the relief fund." },
        { p: "reserve a table", s: "I’d like to reserve a table for 9 pm on Sunday." },
        { p: "climate research", s: "She was asked to show her research at a conference." },
        { p: "rack of ribs", s: "This restaurant has some of the best smoked ribs." },
        { p: "ring the bell", s: "You’ll need to ring the bell so we can buzz you in." },
        { p: "Hudson river", s: "Old cities were typically built around rivers." },
        { p: "vinyl record", s: "My dad has a large collection of vinyl records." },
        { p: "rent an apartment", s: "I’m looking to rent an apartment in this area." },
        { p: "healthy recipe", s: "I’m looking for healthy recipes to have on my diet." },
        { p: "red rash", s: "He got a red rash on his skin after touching poison ivy." },
        { p: "in a rush", s: "He had to rush to the station to catch his bus." },
        { p: "a bit rusty", s: "I know Spanish, but I’m a bit rusty at the moment." },
        { p: "heard a rumor", s: "I heard a rumor that the office will be closed soon." },
        { p: "ancient ruins", s: "Ancient ruins were found on the riverside." },
        { p: "when in Rome", s: "When in Rome, do as the Romans." },
        { p: "rock climbing", s: "I just joined a rock climbing gym." }
      ]},
      { type: "phrases", title: "Medial R — phrases & sentences", items: [
        { p: "control variables", s: "Scientific experiments require controlling all variables." },
        { p: "sales target", s: "Forecasts show that we will meet our sales target." },
        { p: "ultraviolet light", s: "Ultraviolet light is what causes sunburns." },
        { p: "professional background", s: "My professional background is in administration." },
        { p: "water freezes", s: "In Fahrenheit, water freezes at thirty-two degrees." },
        { p: "product warranty", s: "Check your warranty before trying to repair it." },
        { p: "four quarters", s: "Four quarters make one dollar." },
        { p: "broken her arm", s: "She has broken her arm in three places." },
        { p: "earn money", s: "You could earn up to twenty dollars an hour." },
        { p: "take out the garbage", s: "Make sure to take out the garbage when you go." },
        { p: "narrow gap", s: "He had a hard time going through the narrow gap." },
        { p: "overheard an argument", s: "I overheard an argument among the store’s staff." },
        { p: "Arctic iceberg", s: "Icebergs come from glaciers in the Arctic." },
        { p: "salary expectations", s: "What are your salary expectations?" },
        { p: "urban city center", s: "Urban city centers are being transformed." },
        { p: "cream and sugar", s: "She wants two creams and one sugar in her coffee." }
      ]},
      { type: "phrases", title: "Final R — phrases & sentences", items: [
        { p: "at the bar", s: "We’re going to meet at the bar at ten." },
        { p: "a lot of power", s: "The President holds a lot of power." },
        { p: "roller coaster", s: "I’ve never been a fan of roller coasters." },
        { p: "ginger tea", s: "I drank ginger tea to soothe my stomach." },
        { p: "hour and a half", s: "I’ll be there in an hour and a half." },
        { p: "jar of pickles", s: "I bought a jar of pickles at the farmer's market." },
        { p: "place an order", s: "Call over the waiter so we can order." },
        { p: "popular director", s: "Stephen Spielberg is a very popular director." },
        { p: "right ear", s: "I have an earring in my right ear." },
        { p: "flower market", s: "I bought tulips from the Amsterdam flower market." },
        { p: "outdoor thermometer", s: "The outdoor thermometer says that it’s thirty degrees." },
        { p: "favorite flavor", s: "What’s your favorite ice cream flavor?" },
        { p: "at the door", s: "The delivery man is at the door." },
        { p: "near the river", s: "I live near the river just outside of the city." },
        { p: "laser pointer", s: "My professor uses a laser pointer in lectures." },
        { p: "need a favor", s: "I need a favor if you have a minute." }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "Describe your neighborhood — what’s around where you live?",
        "What’s a restaurant you’d recommend, and what should I order there?"
      ]}
    ]
  },

  /* ==========================================================
     MODULE 3 — CONNECTED SPEECH
     ========================================================== */

  {
    id: "t-long-u",
    module: "connected",
    title: "T + Long U",
    ipa: "tʃu",
    asIn: "situation",
    tag: "The “ch” blend",
    tagline: "T usually becomes “ch” before Long U — inside words like nature, and between words like “what you.” Knowing the rule is the trick to understanding fast American speech.",
    sections: [
      { type: "text", title: "How the blend works", paras: [
        "In American pronunciation — especially informal, casual speech — some sounds blend together to make pronunciation easier. The t usually becomes a “ch” sound before Long U. In some words the Long U has further blended into a Schwa + R, giving “chr,” as in nature.",
        "The blend happens within a word (situation) and between words (what you). Between words, though, it’s not always appropriate in formal contexts."
      ]},
      { type: "steps", title: "The rules", items: [
        "Within a word: T + Long U → “ch” — normal in any social context",
        "…but T must not be the first letter of the word",
        "…and the U must not be stressed",
        "Between words: T + “you” → “ch” — casual speech only, and only with “you”"
      ]},
      { type: "phrases", title: "Within one word", phonetic: true, intro: "The lower line shows how it sounds — it isn’t a separate word to say.", items: [
        { p: "mature", s: "machure" },
        { p: "nature", s: "nachure" },
        { p: "actually", s: "acchually" },
        { p: "signature", s: "signachure" }
      ]},
      { type: "phrases", title: "Between two words", phonetic: true, intro: "The lower line shows how it sounds — it isn’t a separate word to say.", items: [
        { p: "what you", s: "whachyou" },
        { p: "don’t you", s: "donchyou" },
        { p: "want you", s: "wanchyou" },
        { p: "at you", s: "achyou" }
      ]},
      { type: "words", title: "Practice words", items: [
        { w: "statue" }, { w: "future" }, { w: "dentures" }, { w: "situation" }, { w: "vulture" },
        { w: "pasture" }, { w: "fixture" }, { w: "culture" }, { w: "feature" }, { w: "obituary" }
      ]},
      { type: "sentences", title: "Practice sentences", items: [
        { t: "Macy loves action-adventure movies." },
        { t: "Do you know what you want for dinner?" },
        { t: "Gary was rushed to the hospital for a ruptured appendix." },
        { t: "We have a few mutual friends." },
        { t: "Ramone is a habitual reader; he’s very intellectual." },
        { t: "Don’t you have anything better to do with your time?" },
        { t: "They got their wedding pictures done with a professional photographer." },
        { t: "Agriculture is very popular in rural states." }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "Can you think of a situation from the past that you’d handle differently now?",
        "What’s one future plan you’re excited about — even if it’s just a small thing?",
        "What’s a small gesture someone did for you recently that made your day better?"
      ]}
    ]
  },

  {
    id: "reductions",
    module: "connected",
    title: "Reductions",
    ipa: "wənə",
    asIn: "want to → wanna",
    tag: "How phrases melt together",
    tagline: "Extremely common phrases morph into what sounds like one word. Vowels drop; consonants mostly survive; the stressed syllable is always preserved.",
    sections: [
      { type: "text", title: "What reductions are", paras: [
        "Reductions are phrases used so commonly that, in spoken form, they morph into what sounds like one word. They go beyond word linking: some sounds are omitted or abbreviated entirely. They’re like contractions (don’t = do not), except contractions are acceptable in writing and reductions live only in speech — and casual text messages.",
        "Native speakers use them constantly, even at times in formal contexts. You can express yourself without them, but you must be familiar with them to understand native speakers. Reduce only in the customary way: drop the wrong letter and your speech sounds muffled. Notice it’s usually vowels that get omitted or reduced, not consonants — and the stressed word or syllable of each phrase is always preserved. More extreme regional reductions are considered slang and are usually best avoided."
      ]},
      { type: "sentences", title: "Shadow these reductions", intro: "Words joined with dashes run together. The phonetic line shows what actually comes out — capital letters mark the preserved stress.", items: [
        { t: "If you-like, you-can have-some-more.", phon: "Ify’LIKE, y’c’n HAVEs’mor — ever heard of the snack called “s’mores”?" },
        { t: "How-do-you-do that?", phon: "had’y’DO that — not “howdy”; that’s slang" },
        { t: "I want-to-go back-to-that place I-told-you-about.", phon: "əwannəgo BACKt’that PLACE ətoljuəbout" },
        { t: "What-do-you want-to eat tonight?", phon: "Wədəyəwannə EAT t’night" },
        { t: "We’re-going-to see-what’s taking-them so-long.", phon: "w’rgənna SEEwəts TAKin’m s’LONG" },
        { t: "Why-don’t-you just-open-it already?", phon: "wadon’ch’ j’stOPENit ALREADY" },
        { t: "How-can-you keep that from-happening?", phon: "Ha’c’nyə KEEP THAT frəmHAPPENING" }
      ]},
      { type: "sentences", title: "Now reduce these yourself", items: [
        { t: "What are we going to do if it doesn’t work?" },
        { t: "How did you even think of that?" },
        { t: "I have to go take care of something." },
        { t: "I’ll be right back." },
        { t: "If you have any questions, just let me know." }
      ]},
      { type: "dialogue", title: "Reading exercise — Trip to Hawaii", intro: "Read this dialogue with your coach and reduce the common phrases the way a native speaker would.", lines: [
        { who: "Alice", text: "Hey, Bob, are you ready for our trip to Hawaii? I'm so excited to see the volcanoes and the beaches!" },
        { who: "Bob", text: "Hi, Alice, yes, I'm ready. I've packed my sunscreen and my sunglasses. I can't wait to go surfing and snorkeling!" },
        { who: "Alice", text: "Me too! Do you have your flight tickets and your passport?" },
        { who: "Bob", text: "Yes, I do. I've also downloaded some movies and games on my tablet to keep me entertained on the flight." },
        { who: "Alice", text: "Good idea. How long is the flight, by the way?" },
        { who: "Bob", text: "It's about 10 hours from London to Honolulu. But we have a layover in Los Angeles for five hours." },
        { who: "Alice", text: "Oh, that's not too bad. Maybe we can do some sightseeing in LA if we have time." },
        { who: "Bob", text: "Yeah, that would be fun. Maybe we can see the Hollywood sign or the Walk of Fame." },
        { who: "Alice", text: "Or maybe we can spot some celebrities at the airport!" },
        { who: "Bob", text: "Haha, yeah, maybe. But I doubt they would fly with us commoners." },
        { who: "Alice", text: "You never know. Maybe we'll get lucky and sit next to Dwayne Johnson or Emma Watson." },
        { who: "Bob", text: "That would be awesome! But I'd be too nervous to talk to them." },
        { who: "Alice", text: "So, what are you most excited about in Hawaii? The volcanoes, the waterfalls, the rainforests, or the culture?" },
        { who: "Bob", text: "Hmm, that's a tough question. They all sound amazing. But I think I'm most excited about the volcanoes." },
        { who: "Alice", text: "Me too! Maybe we can even take a helicopter tour over the volcano and get a bird's eye view of it." },
        { who: "Bob", text: "That would be awesome! But also scary. What if the volcano erupts while we're flying over it?" },
        { who: "Alice", text: "Well, then we'd have a very memorable experience, wouldn't we?" },
        { who: "Bob", text: "Haha, yeah, I guess so. But let's hope that doesn't happen." }
      ]},
      { type: "homework", text: "Write down other common phrases you hear in conversation, with phonetic spelling, to remember their pronunciation." }
    ]
  },

  /* ==========================================================
     MODULE 4 — RHYTHM & MELODY
     ========================================================== */

  {
    id: "sentence-stress",
    module: "rhythm",
    title: "Sentence Stress",
    ipa: "●",
    asIn: "which words to stress",
    tag: "Meaning hides in emphasis",
    tagline: "The same sentence can mean six different things depending on which word you stress. Learn to pick the word that carries your point — and to reduce everything around it.",
    sections: [
      { type: "text", title: "The idea", paras: [
        "A lot of information hides in the way something is said. The implied meaning changes depending on which words are emphasized. A quick test: which word carries the main point?",
        "Content words (nouns, verbs) carry meaning; function words show grammar and relationships. Stress usually lands on a content word — but when a function word is deliberate or contrasted, it can take the primary stress instead."
      ]},
      { type: "sentences", title: "One sentence, six meanings", intro: "Stress the highlighted word and hear the meaning shift.", items: [
        { t: "I want to go home before dark.", hint: "basic — stress the content words" },
        { t: "I want to go home before dark.", hint: "stress I — nobody asked me" },
        { t: "I want to go home before dark.", hint: "stress want — but I can’t" },
        { t: "I want to go home before dark.", hint: "stress home — not somewhere else" },
        { t: "I want to go home before dark.", hint: "stress before — not after" },
        { t: "I want to go home before dark.", hint: "stress dark — it’s urgent" }
      ]},
      { type: "note", html: "<strong>The other half of stress is reduction.</strong> Common words around the stressed word get reduced or abbreviated: “Do you want to go <em>home</em>?” → “D’y’wanna go HOME?”" },
      { type: "sentences", title: "Match the stress to the meaning", intro: "Read each sentence so it implies the meaning in the tag.", items: [
        { t: "He left early last night.", hint: "I stayed" },
        { t: "He left early last night.", hint: "suspiciously early" },
        { t: "He left early last night.", hint: "on other nights he didn’t" },
        { t: "I know how to do it.", hint: "only I do" },
        { t: "I know how to do it.", hint: "leave me alone" },
        { t: "I know how to do it.", hint: "but not when or why" },
        { t: "I know how to do it.", hint: "but I don’t want to" },
        { t: "We can see you fine.", hint: "others can’t" },
        { t: "We can see you fine.", hint: "yes, we can" },
        { t: "We can see you fine.", hint: "but not hear you" },
        { t: "We can see you fine.", hint: "don’t worry, it looks good" },
        { t: "What do you want?", hint: "think more deeply about it" },
        { t: "What do you want?", hint: "you are not welcome here" },
        { t: "What do you want?", hint: "get to the point" }
      ]},
      { type: "sentences", title: "Find the keyword yourself", items: [
        { t: "He got a new job.", hint: "by the way" },
        { t: "He got a new job.", hint: "I’m still jobless" },
        { t: "He got a new job.", hint: "but he lost it" },
        { t: "Why did he leave?", hint: "I get why others left" },
        { t: "Why did he leave?", hint: "for what reason" },
        { t: "Why did he leave?", hint: "he should have stayed" },
        { t: "She needs to move.", hint: "not you" },
        { t: "She needs to move.", hint: "it’s urgent" },
        { t: "She needs to move.", hint: "but she won’t" }
      ]},
      { type: "sentences", title: "Discuss with your coach", intro: "What might be implied by stressing different words in each of these?", items: [
        { t: "I saw that you got a promotion." },
        { t: "What would you like me to do?" },
        { t: "Can I help you?" },
        { t: "Is there anything else you need?" },
        { t: "Try not to do that." }
      ]},
      { type: "dialogue", title: "Reading exercise — The messy room", intro: "Read with your coach and mimic how sentence stress carries the tension.", lines: [
        { who: "Mother", text: "Hey, can we talk about the state of your room, sweetheart?" },
        { who: "Daughter", text: "Oh, sure. What's bothering you now?" },
        { who: "Mother", text: "Well, I've noticed that it's been quite messy lately, and I've reminded you a few times about tidying up." },
        { who: "Daughter", text: "Oh, my bad. I've been busy with school and stuff." },
        { who: "Mother", text: "I understand that, but taking a little time to clean up after yourself wouldn't hurt." },
        { who: "Daughter", text: "Yeah, I'll get to it eventually, don't worry." },
        { who: "Mother", text: "It's just that it's not fair for the rest of the family when your mess spills out into common areas." },
        { who: "Daughter", text: "I said I'll do it, Mom. You don't have to keep harping on it." },
        { who: "Mother", text: "I'm just trying to make sure we're all doing our part to keep the house in order." },
        { who: "Daughter", text: "Right, because my messy room is obviously the biggest problem in this house." },
        { who: "Mother", text: "It's not just about your room. We all have responsibilities." },
        { who: "Daughter", text: "Fine, I'll clean my room. Can we drop this now?" },
        { who: "Mother", text: "Thank you. Let's all make an effort to help each other out." }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "Why did you choose your current job?",
        "When do you usually feel the most productive during the day?",
        "What’s an app you use every single day? How does it help you?"
      ]}
    ]
  },

  {
    id: "modulation",
    module: "rhythm",
    title: "Modulation",
    ipa: "♪",
    asIn: "pitch · pace · power",
    tag: "The art of expression",
    tagline: "No one likes a boring speech. Vary your pitch, pace, and power independently, and your voice starts to carry emotion instead of just words.",
    sections: [
      { type: "text", title: "The three P’s", paras: [
        "Whether it’s a presentation or a conversation, change your voice a little each time you move from one thought to the next. To express more emotion, go up and down in your pitch, pace, and power.",
        "The key is keeping the three independent. Sometimes you go up in pitch and pace but down in volume; other times you go down in pitch and speed up without changing volume. The more you play with these variations, the more control you have — that’s when you learn the art of expression. And as with any art form, there are plenty of right ways to do it. Notice how different people highlight different points in different ways. Find your way."
      ]},
      { type: "note", html: "<strong>Rules of thumb:</strong> low tones = serious, important. High tones = excitement or doubt. Slow down for key points, speed up for the less important parts. Go up in volume for keywords — and for proper nouns like names and titles, which listeners can’t anticipate." },
      { type: "sentences", title: "Pitch — vary the level", intro: "Put each phrase on a different level from 1 (lowest) to 10 (highest). Only go very high or low for extreme emotions.", items: [
        { t: "I know what he did, but I don’t agree with it." },
        { t: "I have to disagree. Pizza from Chicago is by far the best!" },
        { t: "I’m scared. What should I do?" },
        { t: "Thank you for inviting me to the funeral. I’m really sorry for your loss." },
        { t: "Are you sure you want to tell him that? He’ll fire you!" }
      ]},
      { type: "sentences", title: "Pace — speed up, slow down", intro: "Slow down for key points; speed up for less important or auxiliary phrases.", items: [
        { t: "She runs fast like a rabbit. But he walks slowly like a turtle." },
        { t: "The deadline is tomorrow! You really need to get that done." },
        { t: "My boss is always asking me to stay late. I’m sick of it!" },
        { t: "How do you know all of that? I haven’t told anyone." },
        { t: "Have it your way. I was just making a suggestion." }
      ]},
      { type: "sentences", title: "Power — control the volume", intro: "Raise your volume for words that must stand out; lower it for what’s obvious or already mentioned.", items: [
        { t: "Ladies and gentlemen, welcome!" },
        { t: "I will be going to Amsterdam on vacation next month." },
        { t: "My friend has been reading a book called The Elegant Universe by Brian Greene. He said it’s good." },
        { t: "I said I wanted artichoke pizza, not anchovy pizza." },
        { t: "He saw a sign that said, “No reporters allowed.”" }
      ]},
      { type: "sentences", title: "Blend all three", intro: "Read with full modulation and ask your coach for feedback.", items: [
        { t: "You can try it if you like, but I wouldn’t suggest it." },
        { t: "When I was a child I loved to watch Looney Tunes." },
        { t: "Would you please stop making that noise? It’s annoying!" },
        { t: "I’m worried about all the fires in the Amazon rainforest." },
        { t: "Congratulations! I can’t believe you did it!" }
      ]},
      { type: "dialogue", title: "Reading exercise — Past curfew", intro: "Read this scene and let pitch, pace, and power carry the emotion.", lines: [
        { who: "Father", text: "(sternly) Where have you been? Do you know what time it is?" },
        { who: "Son", text: "Sorry, Dad. I lost track of time while hanging out with my friends." },
        { who: "Father", text: "It’s almost midnight! You were supposed to be home by 10. Why didn’t you call or text?" },
        { who: "Son", text: "I know, I’m really sorry. My phone died, and I didn’t think it would be such a big deal." },
        { who: "Father", text: "Not a big deal? I was worried sick! You can’t just disappear like that without letting me know." },
        { who: "Son", text: "I get it, I should have found a way to contact you. I didn’t mean to make you worry." },
        { who: "Father", text: "It’s not just about the time. It’s about respect and trust." },
        { who: "Son", text: "I know. It just got away from me this time. We were watching a movie, and I didn’t realize how late it had gotten." },
        { who: "Father", text: "That’s not an excuse. You need to manage your time better." },
        { who: "Son", text: "You’re right. I’ll make sure my phone is charged, and I’ll set a reminder for the curfew. I promise it won’t happen again." },
        { who: "Father", text: "I hope you mean it. I know you want more freedom, but first you have to show me you can handle it." },
        { who: "Son", text: "I will. I’ll make sure to keep you in the loop next time." },
        { who: "Father", text: "Alright. Just be more mindful in the future. Now, go get some sleep." }
      ]},
      { type: "homework", text: "Identify and practice the changes in pitch, pace, and power with some common expressions." },
      { type: "convo", title: "Conversation practice", items: [
        "Can you tell me about a time you received really exciting news?",
        "Tell me a story about a time you were in a rush — what happened?",
        "What’s a situation where you had to raise your voice to be heard?"
      ]}
    ]
  },

  {
    id: "modulation-practice",
    module: "rhythm",
    title: "Modulation: Practice",
    ipa: "♪",
    asIn: "pitch · pace · power",
    tag: "Practice intensive",
    tagline: "Mandarin fixes pitch to each syllable, so English can come out flat or evenly chopped. These three sets stretch each dial — pitch, pace, and power — until varying them feels natural.",
    sections: [
      { type: "sentences", title: "Pitch — the high/low aspect", intro: "Think about the emotion you want to portray and vary your pitch accordingly. Low = serious, important. High = excitement, doubt.", items: [
        { t: "Good job on your presentation!" },
        { t: "I’m not sure how I am supposed to respond to that question." },
        { t: "I just won first place in the marathon!" },
        { t: "We need to take her to the hospital. Now!" },
        { t: "I’ve never had a problem with that before." },
        { t: "Are you sure you want to go there?" },
        { t: "I could do this all day!" },
        { t: "Please don’t be rude." },
        { t: "Vanessa asked about you today." },
        { t: "I am ready to go home." },
        { t: "We had a great day!" },
        { t: "I can only do so much." },
        { t: "Only three days left before my vacation!" },
        { t: "Your little dog is adorable!" },
        { t: "I will not tolerate any more disrespect." },
        { t: "He obviously wasn’t paying attention." },
        { t: "I haven’t seen you in so long!" }
      ]},
      { type: "sentences", title: "Pace — the slow/fast aspect", intro: "Identify the key points and the less important parts. Slow down for key points; speed up for auxiliary phrases.", items: [
        { t: "My brother's best friend, Mitchell, is coming over later." },
        { t: "You are doing great, but I need you to show up on time." },
        { t: "Good thing I left when I did. I made it just in time." },
        { t: "Instead of coming to me, my dog took off running when I called his name." },
        { t: "In a matter of seconds, the entire roof collapsed around us." },
        { t: "Susie, my children’s babysitter, won’t be available next week." },
        { t: "If you remember all 50 states, you’ll pass the test." },
        { t: "I was creeping towards the exit when some lady rushed to cut in front of me." },
        { t: "If you scream loud enough, they will hear you." },
        { t: "You owe me fifty dollars. I need it today." },
        { t: "Not everything you read on the internet is true, so be careful." },
        { t: "I’ll perform a variety of jobs. As long as they are legal and ethical." },
        { t: "In our previous lesson, we covered chapter 3." },
        { t: "We’ve only been here for 10 minutes and you’re already complaining!" },
        { t: "If you’d listened to me in the first place, we wouldn’t be in this mess." },
        { t: "Now Samantha, famished after a long hike, rested on a large log." }
      ]},
      { type: "sentences", title: "Power — the loud/quiet aspect", intro: "Increase volume for words that need to stand out — especially names and titles listeners can’t anticipate. Lower it for what’s obvious or already mentioned.", items: [
        { t: "I’d like to introduce you to my friend Cynthia Collins." },
        { t: "I will be traveling on the 5th of October." },
        { t: "My request was made for the 5th, not the 7th." },
        { t: "Have you seen the trailer for that new movie called Paws of Fury?" },
        { t: "We are excited to announce our new chief executive officer: Dan Whitefield!" },
        { t: "I grew up in a small town called Magnolia Springs, Alabama." },
        { t: "I’ll order the number six cheeseburger combo with no tomatoes." },
        { t: "I’m publishing a self-help book called “How to Enjoy Life.”" },
        { t: "Are you Amanda, or Kaitlyn?" },
        { t: "Didn’t you notice the “No Trespassing” sign?" },
        { t: "I have to wake up at 3 o’clock in the morning." },
        { t: "When you arrive at the airport, look for a gentleman with a black suit on." },
        { t: "Please make sure that you are buying regular coffee grounds and not decaf." },
        { t: "It took you exactly 14.7 seconds to solve problem number 7." },
        { t: "I would like one hundred dollars in the form of five twenty dollar bills." },
        { t: "Have you read the poem, Paradise Lost, by John Milton?" }
      ]}
    ]
  },

  {
    id: "intonation-statements",
    module: "rhythm",
    title: "Intonation: Statements",
    ipa: "↘",
    asIn: "the melody of speech",
    tag: "Four pitch patterns",
    tagline: "English isn’t a tonal language, but intonation still signals meaning, emotion, and intent. Master the four patterns and you’ll start hearing them everywhere.",
    sections: [
      { type: "text", title: "The melody of speech", paras: [
        "Intonation is the rise and fall of pitch across phrases and sentences. Customary tonal patterns help the speaker communicate fluidly and let the listener follow the flow. When a word gets an unexpected tone, it distracts the listener or hinders understanding.",
        "Rather than memorizing rules for each sentence type, understand what each pitch movement does. Once you recognize the intention behind each pattern, you’ll start to hear it everywhere."
      ]},
      { type: "note", html: "<strong>Try humming first.</strong> Humming attunes your ear to voice inflection. Hum each example as if speaking with your lips closed, then say it. If it’s difficult, have your coach hum it first and imitate them." },
      { type: "patterns", title: "The four patterns", items: [
        { name: "Falling", curve: "↘", uses: ["Finality", "Confidence", "Completed thoughts"], ex: "I already took care of it." },
        { name: "Rising", curve: "↗", uses: ["Continuation", "Non-final items in a list"], ex: "I grabbed my keys, my bag…" },
        { name: "Fall-Rise", curve: "↘↗", uses: ["Contrast", "Implication", "Something left unsaid"], ex: "I could do it…" },
        { name: "Rise-Fall", curve: "↗↘", uses: ["Strong emphasis", "Surprise", "Exclamation"], ex: "That was amazing!" }
      ]},
      { type: "text", title: "What each pattern does", paras: [
        "Falling is the most common pattern in American statements: pitch peaks on the most important word, then falls to signal the thought is complete. It conveys confidence and closure — end a statement with a rise instead and you sound uncertain, like you’re asking for approval.",
        "Rising signals something is incomplete — more is coming. It appears on non-final list items and introductory clauses, keeping the listener’s attention forward-looking.",
        "Fall-rise is one of the most expressive patterns: the pitch falls then lifts back up, signaling that the statement isn’t the whole story — a contrast, reservation, or implied meaning sits beneath the surface. It’s the melody of the word “but,” and native speakers use it to soften disagreements or imply what they’re not saying outright.",
        "Rise-fall is a wide, dramatic movement — the voice climbs sharply then drops. It signals enthusiasm, surprise, sarcasm, or emphasis. Without it, even genuinely exciting news sounds flat."
      ]},
      { type: "note", html: "<strong>Don’t over-rise.</strong> If the tone rises too often, listeners can’t identify the key stressed words. Rises belong on stressed words — or the stressed syllable within a word." },
      { type: "sentences", title: "Practice the patterns", intro: "Use the customary tonal rhythm and ask your coach for feedback.", items: [
        { t: "She's been working on that project for months.", hint: "falling" },
        { t: "I like the concept, but the timing is off.", hint: "fall-rise" },
        { t: "After everything we discussed last week, I thought we had an agreement.", hint: "rising, then falling" },
        { t: "I cannot believe how quickly that came together!", hint: "rise-fall" },
        { t: "We need to update the website, redesign the logo, and rewrite the copy.", hint: "rising list" },
        { t: "I understand your point, but I'm not sure I agree.", hint: "fall-rise" },
        { t: "Once you get the hang of it, it becomes second nature.", hint: "rising, then falling" },
        { t: "He didn't say anything at the meeting.", hint: "falling" },
        { t: "That is honestly one of the most impressive things I've ever seen!", hint: "rise-fall" },
        { t: "I thought it would take longer.", hint: "fall-rise" },
        { t: "I picked up the files, made the copies, and dropped everything off at the front desk.", hint: "rising list" },
        { t: "It's not that I don't want to — it's just not the right time.", hint: "fall-rise" }
      ]},
      { type: "dialogue", title: "Reading exercise — The break room", intro: "Read with your coach and mimic the intonation. Notice the fall-rises, the lists, and the flat sarcasm.", lines: [
        { who: "Jordan", text: "Don't tell me it's broken again." },
        { who: "Sam", text: "It's not broken, it's just... doing its thing. I've been standing here for ten minutes." },
        { who: "Jordan", text: "Ten minutes? Sam, you could have walked to the coffee shop downstairs and back by now." },
        { who: "Sam", text: "I know, I know. I just kept thinking it was about to kick in. You know how it gets." },
        { who: "Jordan", text: "I do, actually. Last Thursday, I stood here for like fifteen minutes before I realized someone had forgotten to fill the water tank." },
        { who: "Sam", text: "(laughing) Was that you who left the note on the machine?" },
        { who: "Jordan", text: "I did not leave that note." },
        { who: "Sam", text: "It had three exclamation points and a drawing of a sad face." },
        { who: "Jordan", text: "I'm telling you, it wasn't me. I don't even own a marker." },
        { who: "Sam", text: "Sure. Anyway — did you hear about the Henderson account?" },
        { who: "Jordan", text: "I heard bits and pieces. What happened?" },
        { who: "Sam", text: "So, apparently, the client came in yesterday for what was supposed to be a routine check-in, and somehow it turned into a three-hour meeting where they basically rewrote the entire proposal." },
        { who: "Jordan", text: "You're kidding." },
        { who: "Sam", text: "I am not kidding. Michelle was in there the whole time. She looked completely drained when she came out." },
        { who: "Jordan", text: "So what does that mean for the timeline? Weren't they supposed to sign off by the end of the month?" },
        { who: "Sam", text: "That's the thing — nobody really knows yet. There's supposed to be a team meeting tomorrow morning, but it got moved, and then I think it got moved again." },
        { who: "Jordan", text: "That is not a good sign." },
        { who: "Sam", text: "(checking the coffee machine) Oh — it's ready. Finally." },
        { who: "Jordan", text: "Unbelievable. After all that, there's probably only enough for one cup." },
        { who: "Sam", text: "(already pouring) There is only enough for one cup." },
        { who: "Jordan", text: "Sam." },
        { who: "Sam", text: "You snooze, you lose, Jordan. You should have waited with me." },
        { who: "Jordan", text: "(heading for the door) I'm going to the coffee shop." },
        { who: "Sam", text: "Grab me something?" },
        { who: "Jordan", text: "Absolutely not." }
      ]},
      { type: "homework", text: "Identify and practice the tonal rhythm of phrases you use every day." },
      { type: "convo", title: "Conversation practice", items: [
        "Have you ever tried a food you thought you wouldn’t like but ended up enjoying?",
        "Is there a hobby you’ve always wanted to start?",
        "What’s something you find interesting or exciting but other people might find boring?"
      ]}
    ]
  },

  {
    id: "intonation-practice",
    module: "rhythm",
    title: "Intonation: Practice",
    ipa: "↘",
    asIn: "statements",
    tag: "Practice intensive",
    tagline: "Forty statements to run with your coach. Decide which pattern each one calls for — falling, rising, fall-rise, or rise-fall — then deliver it so the melody matches the meaning.",
    sections: [
      { type: "text", title: "How to practice", paras: [
        "Before saying each sentence, decide where the peak lands and how the pitch should move afterward. Statements with “but” usually want a fall-rise; lists rise until the final item; exclamations want the dramatic rise-fall. If everything comes out on one level — the most common carryover from Mandarin — hum the sentence first, then speak it."
      ]},
      { type: "sentences", title: "Statement practice", items: [
        { t: "She finally got the promotion she'd been waiting for." },
        { t: "I cannot believe she actually pulled that off on her first try!" },
        { t: "The view is absolutely stunning from up here." },
        { t: "The original version was better, but I can see why they wanted to simplify it." },
        { t: "The meeting's been pushed to Thursday afternoon." },
        { t: "I picked up the dry cleaning, stopped at the bank, and got groceries on the way home." },
        { t: "First, let me give you a little background on how this whole thing started." },
        { t: "If everything goes according to plan, we should be ready to launch by the end of the month." },
        { t: "I liked it, but I think there's still room to improve the second half." },
        { t: "Once you've filled out the form and signed the bottom section, you can hand it to the front desk." },
        { t: "I mean, I could try, but I'm not sure I have enough experience with that software." },
        { t: "The food was decent, but nothing I'd go out of my way to order again." },
        { t: "It's fine, I guess, but I was honestly expecting something a little more polished." },
        { t: "I didn't say it was wrong — I just said it wasn't what we agreed on." },
        { t: "We actually pulled it off after everyone said it couldn't be done." },
        { t: "We'll need to review the budget, revisit the timeline, and loop in the legal team before we move forward." },
        { t: "The presentation went well, and the client seemed genuinely interested." },
        { t: "She is really good at reading a room." },
        { t: "It's a good idea, but the timing might not work in our favour." },
        { t: "I did not see that coming at all — nobody did!" },
        { t: "He scored in the last ten seconds, and the whole place went completely silent!" },
        { t: "He didn't show up to the presentation after all." },
        { t: "Nobody brought it up during the meeting, which honestly surprised me." },
        { t: "I already sent the email before the meeting started." },
        { t: "It's about a three-hour drive from here, depending on traffic." },
        { t: "She said she'd think about it, but I haven't heard back from her since." },
        { t: "I've been doing this for fifteen years, and I've never seen anything quite like it." },
        { t: "That was the best concert I have ever been to in my entire life!" },
        { t: "He's technically qualified, but I'm not sure he's the right fit for the team." },
        { t: "They ended up going with a different vendor at the last minute." },
        { t: "It's not that I don't trust him — it's just a really big decision to hand off." },
        { t: "That is incredible news!" },
        { t: "She doesn't live in that neighborhood anymore — she moved last spring." },
        { t: "I get what you're saying, but I think we're looking at it from different angles." },
        { t: "We wrapped up around nine, and everyone was out the door pretty quickly." },
        { t: "He knew the whole time and never said a word about it." },
        { t: "I haven't decided yet, but once I look at the numbers, I'll have a better sense of where things stand." },
        { t: "I wanted to bring it up sooner, but with everything going on, it never felt like the right moment." },
        { t: "Before we get into the details, I just want to make sure everyone's on the same page about our goal." },
        { t: "We ran out of time before we could finish the last section." }
      ]}
    ]
  },

  {
    id: "hidden-associations",
    module: "rhythm",
    title: "Hidden Associations",
    ipa: "≈",
    asIn: "shortcuts to natural inflection",
    tag: "Borrow the melody of emotion words",
    tagline: "A shortcut to natural inflection: overlay the tonal pattern of a simple emotional word — “oops,” “aww,” “yuck” — onto the key word of your sentence.",
    sections: [
      { type: "text", title: "The trick", paras: [
        "Every emotional interjection — hate, oops, ouch, aww — has a tonal shape that native speakers know instinctively. You can borrow that shape and overlay it onto a keyword in an ordinary sentence to instantly express the same emotion.",
        "First practice with the emotion word given in the tag. Say the word in parentheses out loud, feel its melody, then transfer that melody onto the underlined idea in the sentence."
      ]},
      { type: "sentences", title: "Overlay the given word’s melody", intro: "Say the tag word first, then sing its pattern onto the sentence’s keyword.", items: [
        { t: "How can I enjoy his company when all he does is insult me?", hint: "hate" },
        { t: "I missed it!", hint: "oops" },
        { t: "I was afraid that we weren’t going to make it in time.", hint: "Oh no!" },
        { t: "That hurt!", hint: "ouch" },
        { t: "I wasn’t invited.", hint: "mad" },
        { t: "We had a great time at brunch.", hint: "happy" },
        { t: "I have thirteen years of experience as a product manager.", hint: "confident" },
        { t: "Your dog is so cute!", hint: "aww" },
        { t: "I just drank spoiled milk!", hint: "yuck!" },
        { t: "Your singing voice is promising.", hint: "doubt" },
        { t: "I am so happy that it’s over.", hint: "relieved" }
      ]},
      { type: "sentences", title: "Choose your own overlay", intro: "Pick a keyword and overlay it with an emotion word that expresses the feeling directly.", items: [
        { t: "Are you coming with me, or not?" },
        { t: "Today’s the last day of school." },
        { t: "I have a trip coming up next week." },
        { t: "The food was delicious, but it wasn’t enough." },
        { t: "I heard that Adam is sick." },
        { t: "This will be my first time riding in a hot air balloon." },
        { t: "Sure. I can get the job done." },
        { t: "We are moving away next week." },
        { t: "I will be able to handle the demands of this position." },
        { t: "I think I can do it." },
        { t: "I need to tell you something." },
        { t: "Are you happy now?" },
        { t: "I can’t believe you’re here!" },
        { t: "Are you giving these away for free?" },
        { t: "I got a great deal on a new home!" },
        { t: "You two are just perfect for each other." },
        { t: "At least it pays more than minimum wage." },
        { t: "This is the best day ever!" },
        { t: "I have interesting news to share with you." },
        { t: "You can’t win them all." },
        { t: "It’s hot outside." },
        { t: "I will never come back to this store!" },
        { t: "I never thought I would make it this far!" },
        { t: "Who’s ready for some ice cream?" },
        { t: "How did you know about that?" },
        { t: "I spent the entire day cleaning." },
        { t: "I spent the entire day crying." },
        { t: "My team won the game!" },
        { t: "Is it just me, or is it hot in here?" },
        { t: "I can’t find my glasses anywhere!" },
        { t: "Julia is a true friend." },
        { t: "Let’s get this party started!" },
        { t: "Who ate my leftovers?" },
        { t: "Things will get better soon." }
      ]},
      { type: "convo", title: "Conversation practice", items: [
        "Tell me about the best surprise you’ve ever received.",
        "What’s something that instantly puts you in a good mood?"
      ]}
    ]
  },

  {
    id: "pace",
    module: "rhythm",
    title: "Pace",
    ipa: "→",
    asIn: "tempo directs attention",
    tag: "Slow down for what matters",
    tagline: "The main thought of a sentence gets a slower pace; grammatical filler speeds up. Without these changes, listeners can’t tell what the point is.",
    sections: [
      { type: "text", title: "How pace carries meaning", paras: [
        "Pace, or tempo, is the number of words per minute. Some people naturally speak faster than others — what matters is the change of pace with changes of thought.",
        "In American English, the main thought of each sentence gets a slower pace, while less important details and purely grammatical phrases get a faster tempo. When a thought is interrupted by a phrase that adds information, the tempo speeds up for that phrase and slows back down to continue. Without these changes, the listener may not catch the point of what you’re saying — or what needs to be done about it. Pace can also mirror an idea itself, like whether an action is slow or fast."
      ]},
      { type: "sentences", title: "Imitate the pace changes", intro: "Slow down on the key phrases (shown in the tag); speed through the rest.", items: [
        { t: "Whatever you do, do not go into that room!", hint: "slow: do not go" },
        { t: "The man, who was rather impatient to get out of the situation, was tapping his foot and shooting glances at the perpetrators.", hint: "fast: the aside" },
        { t: "One thing to keep in mind is this: It’s very hard to stop once you have started.", hint: "slow: the point" },
        { t: "Try not to go too fast so that you can maintain control of the vehicle.", hint: "slow: too fast" },
        { t: "First impressions are usually wrong, but that doesn’t stop us from making them.", hint: "contrast" },
        { t: "Regardless of your particular situation, please do your best to follow the instructions.", hint: "fast: the opener" },
        { t: "Some of the less-experienced runners seemed to drag their feet as they squeezed out the last drops of energy from their fatigued bodies, while the veterans bounded forward with triumphant joy spread across their smiling faces.", hint: "pace mirrors meaning" },
        { t: "I don’t care what you’re trying to do. I said, “Get out!”", hint: "slow: get out" }
      ]},
      { type: "sentences", title: "Practice sentences", items: [
        { t: "Dr. Graham, who was a professor at my university, contacted me yesterday." },
        { t: "The truth is hard to find with all of the misinformation in the news." },
        { t: "All of a sudden it occurred to me that I needed to see it again, but this time more carefully." },
        { t: "Let me make myself clear. I don’t like this at all." },
        { t: "Joshua felt like everything was going to plan, and then the ball dropped." }
      ]},
      { type: "passage", title: "Reading exercise — Team briefing monologue", summary: "Read this project-kickoff speech aloud, slowing for the priorities and speeding through the connective tissue.", blocks: [
        { p: "Good morning, team. Thank you all for being here today. I wanted to take this time to discuss the priorities for the next few weeks as we move forward with our project." },
        { p: "Firstly, let me express my gratitude for the hard work and dedication you've all shown so far. We've made great progress, and I'm confident that we're on the right track to success. Now, let's talk about what we need to prioritize to ensure we stay on schedule and deliver exceptional results." },
        { p: "Our main focus over the next few weeks will be on three key areas: development, testing, and client communication. These priorities are interconnected and crucial for the smooth progression of the project." },
        { h: "Development", p: "Our developers have been doing a fantastic job, but we're at a point where we need to make some critical decisions. We'll be focusing on finalizing the core functionalities that align with our project objectives." },
        { h: "Testing", p: "Quality assurance is paramount to our success. We need to allocate sufficient time to thoroughly test each feature and catch any bugs before they make their way into the final product. Clear communication and meticulous documentation will be key in this phase." },
        { h: "Client communication", p: "Our clients have high expectations, and it's crucial that we keep them in the loop. Regular updates on our progress, milestones achieved, and any potential roadblocks will foster a sense of trust and transparency." },
        { p: "In conclusion, our success depends on our ability to work cohesively as a team and keep our priorities aligned. Let's channel our energy and expertise into these crucial aspects and make the upcoming weeks productive and rewarding. Thank you all for your dedication and commitment." }
      ]},
      { type: "homework", text: "Listen to a newscaster and note which details are given a slower tempo — and why." },
      { type: "convo", title: "Conversation practice", items: [
        "How important do you think it is to preserve local traditions in a globalized world?",
        "Do you prefer planning ahead or being spontaneous, and why?",
        "Can you describe a small decision that ended up changing your life trajectory?"
      ]}
    ]
  }

];
