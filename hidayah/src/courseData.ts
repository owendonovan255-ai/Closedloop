export type Lesson = {
  id: string;
  title: string;
  cat: string;
  time: string;
  desc: string;
};

export type LessonStudy = {
  why: string;
  sections: Array<{ title: string; body: string }>;
  practice: string;
  commonQuestions: Array<{ q: string; a: string }>;
  commonMistakes: string[];
  reflection: string;
  sources: string[];
  plus: string[];
};

export const lessons: Lesson[] = [
  { id: 'start', title: 'Starting your journey: what to learn first', cat: 'Foundations', time: '25 min', desc: 'A real beginner roadmap: belief, worship, character, community, and how to avoid overload.' },
  { id: 'shahada', title: 'The Shahada: what the testimony of faith means', cat: 'Foundations', time: '30 min', desc: 'Understand the two declarations, what they affirm, and how they shape a Muslim life.' },
  { id: 'tawhid', title: 'Who is Allah? Understanding Tawhid', cat: 'Foundations', time: '35 min', desc: 'Learn what Muslims mean by Allah, His oneness, worship, and the difference between Creator and creation.' },
  { id: 'belief', title: 'The six articles of faith', cat: 'Foundations', time: '35 min', desc: 'A detailed map of belief in Allah, angels, books, messengers, the Last Day, and divine decree.' },
  { id: 'islam-iman-ihsan', title: 'Islam, Iman and Ihsan', cat: 'Foundations', time: '30 min', desc: 'See how outward practice, inner faith, and spiritual excellence fit together.' },
  { id: 'five-pillars', title: 'The five pillars of Islam', cat: 'Foundations', time: '30 min', desc: 'Understand the purpose and place of the Shahada, salah, zakah, fasting, and Hajj.' },
  { id: 'prophets', title: 'The prophets and messengers', cat: 'Foundations', time: '35 min', desc: 'Learn the Islamic view of revelation, prophets, and the message they brought.' },
  { id: 'quran', title: 'The Quran: how Muslims understand their scripture', cat: 'Quran', time: '40 min', desc: 'Learn what the Quran is, how to read it responsibly, and why context and translation matter.' },
  { id: 'reading-quran', title: 'Building a Quran study habit', cat: 'Quran', time: '25 min', desc: 'Create a sustainable reading routine with translation, listening, reflection, and questions.' },
  { id: 'fatiha', title: 'Al-Fatihah: the chapter you meet in prayer', cat: 'Quran', time: '35 min', desc: 'Understand its themes, learn it gradually, and connect recitation with meaning.' },
  { id: 'sunnah', title: 'Sunnah and Hadith: learning from the Prophet', cat: 'Foundations', time: '35 min', desc: 'Understand what Sunnah and Hadith mean and how Muslims assess reports.' },
  { id: 'questions', title: 'How to check Islamic information and sources', cat: 'Foundations', time: '30 min', desc: 'Build source literacy so algorithms and confident voices do not become your teacher.' },
  { id: 'wudu', title: 'Wudu: ritual purification before prayer', cat: 'Prayer', time: '35 min', desc: 'Learn the general sequence, what it is for, and how recognised schools differ.' },
  { id: 'ghusl', title: 'Purity, ghusl, and keeping things simple', cat: 'Prayer', time: '30 min', desc: 'Learn the bigger picture of ritual purity without turning normal learning into anxiety.' },
  { id: 'prayer-prep', title: 'Preparing for salah', cat: 'Prayer', time: '25 min', desc: 'Purity, clothing, place, qiblah, intention, and a calm pre-prayer routine.' },
  { id: 'prayer-times', title: 'The five daily prayer times', cat: 'Prayer', time: '25 min', desc: 'Understand Fajr, Dhuhr, Asr, Maghrib, and Isha as prayer windows, not fixed clock times.' },
  { id: 'qiblah', title: 'The qiblah: facing the Kaaba', cat: 'Prayer', time: '20 min', desc: 'Learn what qiblah means and how to establish a reliable direction at home.' },
  { id: 'salah', title: 'Salah from beginning to end', cat: 'Prayer', time: '45 min', desc: 'A beginner’s full map of formal prayer, from preparation through the final sitting.' },
  { id: 'first-prayer', title: 'One rakah: learn the prayer movement by movement', cat: 'Prayer', time: '35 min', desc: 'Break a rakah into manageable pieces so movement and recitation stop feeling like one giant task.' },
  { id: 'prayer-words', title: 'The words of prayer: what you are actually saying', cat: 'Prayer', time: '40 min', desc: 'Learn the purpose and meaning of the most important phrases used in salah.' },
  { id: 'mosque', title: 'Your first mosque visit', cat: 'Community', time: '25 min', desc: 'Know what to expect, what to ask, and how to find a welcoming learning environment.' },
  { id: 'jumuah', title: 'Jumu’ah and congregational prayer', cat: 'Prayer', time: '30 min', desc: 'Understand Friday prayer and what beginners should expect at a congregation.' },
  { id: 'duas-dhikr', title: 'Dua and dhikr: speaking to Allah and remembering Him', cat: 'Worship', time: '35 min', desc: 'Learn the difference between personal supplication and structured remembrance.' },
  { id: 'ramadan', title: 'Ramadan: the month of fasting and growth', cat: 'Worship', time: '40 min', desc: 'Understand the rhythm, purpose, worship, generosity, and community life of Ramadan.' },
  { id: 'fasting', title: 'Fasting in practice: the basics and personal questions', cat: 'Worship', time: '35 min', desc: 'Learn the general framework while recognising that personal exemptions require qualified guidance.' },
  { id: 'charity', title: 'Zakah and sadaqah: giving with understanding', cat: 'Worship', time: '35 min', desc: 'Learn the difference between obligatory zakah and voluntary charity before touching personal calculations.' },
  { id: 'hajj', title: 'Hajj and Umrah: an introduction', cat: 'Worship', time: '35 min', desc: 'Learn why pilgrimage matters and how to understand it before studying detailed rites.' },
  { id: 'halal', title: 'Halal and haram: how to think about everyday choices', cat: 'Everyday Islam', time: '35 min', desc: 'Move beyond internet lists and learn the principles, categories, and role of scholarship.' },
  { id: 'character', title: 'Character: how faith shows up in daily life', cat: 'Everyday Islam', time: '30 min', desc: 'Truthfulness, patience, mercy, boundaries, promises, neighbours, and repairing harm.' },
  { id: 'family', title: 'Family, relationships, and becoming Muslim', cat: 'Life as a Muslim', time: '35 min', desc: 'Handle family conversations with respect, honesty, boundaries, and safety.' },
  { id: 'work-money', title: 'Work, money, and living Islam in ordinary life', cat: 'Life as a Muslim', time: '35 min', desc: 'Think about integrity, earning, spending, contracts, and religious questions at work.' },
  { id: 'community', title: 'Finding healthy Muslim community', cat: 'Life as a Muslim', time: '30 min', desc: 'How to find teachers and communities that are welcoming, trustworthy, and non-coercive.' },
  { id: 'hard-days', title: 'When faith feels difficult or learning feels overwhelming', cat: 'Life as a Muslim', time: '30 min', desc: 'Build a sustainable practice without shame, panic, comparison, or information overload.' },
  { id: 'eid', title: 'Eid: understanding the Muslim celebrations', cat: 'Everyday Islam', time: '25 min', desc: 'Learn Eid al-Fitr and Eid al-Adha, prayer, generosity, and the role of culture.' }
];

const baseSources = [
  'Quran: use a reputable translation and consult qualified tafsir for detailed interpretation.',
  'Sunnah.com: hadith texts and references can help you trace a narration to a collection.',
  'A trusted local imam, teacher, or scholar remains important for personal rulings.'
];

export const studyContent: Record<string, LessonStudy> = {
  start: {
    why: 'A new Muslim does not need to swallow the whole religion in a week. The most useful first step is to understand the map. Islam has a core of belief and worship, but it also shapes character, family life, money, community, and the way a person thinks about God. The purpose of a beginner course is therefore not to turn you into an expert. It is to give you enough structure that your next question makes sense and your next act of worship becomes possible.',
    sections: [
      { title: '1. Learn the foundations before the details', body: 'Begin with what Muslims mean by Islam, who Allah is, what the Shahada says, the six articles of faith, and the five pillars. These ideas are connected. The Shahada points you toward worship of Allah and acceptance of His Messenger. The pillars show what worship looks like in public life. Faith explains the unseen beliefs beneath those actions. Once those pieces are clear, later questions about prayer, fasting, charity, food, relationships, and community have somewhere to fit.' },
      { title: '2. Separate essentials from advanced disagreements', body: 'The internet often places a beginner and a specialist in the same conversation. You may see a ten-minute video discussing a highly technical legal disagreement before you have even learned how wudu works. That order is backwards for most beginners. First learn the common foundation. Then learn the practical method you are going to follow. Only after that should you compare recognised scholarly differences, and even then you do not need to memorise every opinion.' },
      { title: '3. Build real-world support', body: 'Online material is useful, but Islam is also something you learn with people. A patient Muslim can watch you practise wudu, correct your prayer posture, explain what happens in a mosque, and tell you which local timetable the community actually uses. Look for teachers who welcome questions, explain evidence, respect boundaries, and do not make you financially dependent on them. Healthy community should make you more capable, not more frightened of being wrong.' },
      { title: '4. Give yourself permission to be new', body: 'New Muslims often compare their first month with another person’s tenth year. That creates unnecessary shame. You are allowed to need transliteration, to forget Arabic words, to ask what seems obvious, and to learn one prayer at a time. The aim is steady growth. A mistake becomes useful when it tells you what you need to practise next. Faith is not measured by how polished you look to other people.' },
      { title: '5. A simple first month', body: 'A strong first month can include learning the Shahada and basic belief, learning wudu, understanding the five daily prayers, learning Al-Fatihah gradually, reading short Quran passages with translation, learning a handful of everyday duas, and visiting a mosque or speaking with a trusted teacher. That is already a serious amount of learning. You do not need to add every optional practice at the same time.' }
    ],
    practice: 'Make a personal starter plan with three columns: “I understand”, “I am learning”, and “I need help with”. Put each question into one column. Do not turn the exercise into a test of worth; it is only a map for what to study next.',
    commonQuestions: [
      { q: 'Do I have to know everything before I practise?', a: 'No. Learn the essential knowledge needed for each act and continue learning as you practise.' },
      { q: 'What if different Muslims tell me different things?', a: 'Ask what is agreed, what differs, and which recognised school or source they are using. Do not assume disagreement means Islam is impossible to understand.' },
      { q: 'What if I am embarrassed to ask basic questions?', a: 'Basic questions are normal. A good teacher should make them easier to ask, not make you feel ashamed for asking.' }
    ],
    commonMistakes: ['Trying to learn dozens of subjects simultaneously.', 'Treating social-media confidence as proof of scholarship.', 'Comparing your beginning with another person’s long experience.', 'Assuming every recommended act is equally urgent for a beginner.'],
    reflection: 'What one topic would make your next week of practice noticeably easier?',
    sources: [...baseSources],
    plus: [
      'Build a personalised 30-day study sequence from your current knowledge rather than following a one-size-fits-all order.',
      'Use review checkpoints to revisit belief, purification, prayer, Quran, and everyday practice until the knowledge becomes usable rather than merely familiar.',
      'Scenario coaching: what to do when a friend challenges your beliefs, a mosque overwhelms you, or you find two apparently conflicting answers.'
    ]
  },
  shahada: {
    why: 'The Shahada is the testimony of faith and the doorway into understanding what a Muslim is affirming. Beginners are often taught the Arabic words first, but the meaning is the foundation. The two statements connect two things: worship belongs to Allah alone, and Muhammad is the Messenger of Allah whose message Muslims accept.',
    sections: [
      { title: '1. “La ilaha illa Allah”', body: 'This statement is commonly explained as affirming that there is no deity worthy of worship except Allah. The point is not merely that one God exists. It is that worship, ultimate devotion, and the deepest form of reliance belong to Him. That affects prayer, dua, gratitude, fear, hope, and the way a Muslim understands success. The statement also rejects the idea that created things deserve the worship due to the Creator.' },
      { title: '2. “Muhammadur Rasulullah”', body: 'The second statement affirms Muhammad as the Messenger of Allah. Muslims believe that he conveyed revelation faithfully and taught people how to worship and live. This is why the Quran and the Prophetic Sunnah are studied together. Accepting the Messenger does not mean believing that he is divine; Islam keeps a clear distinction between the Creator and His messenger.' },
      { title: '3. Belief has consequences', body: 'A testimony is not meant to be a sentence repeated without understanding. If Allah is the one you worship, prayer becomes more than exercise. If Muhammad is accepted as the Messenger, his teaching becomes relevant to how prayer is performed, how character is built, and how religious questions are answered. The practical meaning grows over time as the learner studies more.' },
      { title: '4. Pronunciation versus perfection', body: 'Arabic pronunciation deserves care because the Shahada is important, but beginners should not become paralysed by fear of a foreign language. Listen to a qualified teacher, repeat slowly, and ask for correction. Learn the meaning alongside the Arabic. A teacher can also help you understand which pronunciation differences are harmless learner mistakes and which sounds need focused correction.' },
      { title: '5. What comes after the Shahada?', body: 'After learning the testimony, the next task is not to collect a hundred advanced facts. It is to understand the basic beliefs and start learning worship. You can think of the Shahada as an orientation point: Who do I worship? Whose message am I learning? What does that mean for the way I spend my day?' }
    ],
    practice: 'Say the Shahada slowly and then explain its meaning in your own language without looking at the screen. If you cannot explain it yet, read the lesson again and try later.',
    commonQuestions: [
      { q: 'Do I need perfect Arabic?', a: 'Keep improving pronunciation with help, but do not treat beginner mistakes as a reason to stop learning.' },
      { q: 'Can I keep asking questions after becoming Muslim?', a: 'Absolutely. Learning continues, and sincere questions are part of learning.' },
      { q: 'Why is the Prophet mentioned in the Shahada?', a: 'Because accepting the Messenger is part of accepting the revealed message and the way it was taught.' }
    ],
    commonMistakes: ['Memorising the words without learning what they mean.', 'Assuming the Prophet should be worshipped rather than followed as a messenger.', 'Letting pronunciation anxiety stop the rest of the learning journey.'],
    reflection: 'When you say the Shahada, which part feels clearer to you: worshipping Allah alone or following the message of His Messenger?',
    sources: ['Sahih Muslim 8e — the Jibril hadith describes Islam, Iman, and Ihsan. urlRead sourcehttps://sunnah.com/muslim/1/5', ...baseSources]
    ,
    plus: [
      'Study the relationship between tawhid, worship, and the Prophetic model.',
      'Review common misunderstandings about what Muslims mean by worship, intercession, and following the Messenger.',
      'Scenario practice: answering respectful questions about why the Shahada contains two statements.'
    ]
  },
  tawhid: {
    why: 'Tawhid is the idea of Allah’s oneness. For a new Muslim it helps answer a huge question: what does Islam actually mean by believing in one God? Tawhid is not a slogan. It shapes who is worshipped, where ultimate dependence is directed, and how a Muslim understands the difference between the Creator and creation.',
    sections: [
      { title: '1. Allah is the Creator, not part of creation', body: 'Islam teaches a fundamental distinction between Allah and everything He created. People, angels, animals, nature, and the universe are created. Allah is the Creator. This distinction matters because worship is reserved for Him. The learner can therefore admire creation, benefit from it, study it, and be grateful for it without treating created things as divine.' },
      { title: '2. Worship is more than ritual movements', body: 'Prayer is worship, but the idea of worship is wider. Supplication, sacrifice, ultimate reliance, fear and hope directed in a religious sense, vows, and acts done specifically as devotion are discussed within Islamic theology and law. Beginners should learn the broad principle first: worship belongs to Allah. Detailed questions about what counts as an act of worship should be learned from qualified scholarship rather than internet arguments.' },
      { title: '3. Why this changes daily life', body: 'If Allah is the one ultimately relied upon, a Muslim can ask Him for help, thank Him for good, seek forgiveness from Him, and turn back to Him after mistakes. This can create both humility and freedom: humility because the human being is not the ultimate authority, and freedom because status, wealth, popularity, and other created things do not become gods in practice.' },
      { title: '4. Learning Allah’s names and attributes responsibly', body: 'Muslims learn about Allah through revelation. Beginners can start with names and attributes frequently encountered in Quran and Sunnah, such as the Most Merciful, the All-Knowing, and the Creator. When studying theology, avoid turning divine language into a crude picture of Allah. A qualified teacher can explain how classical Muslim scholarship understands these texts and where interpretive methods differ.' },
      { title: '5. Avoiding superstition and internet shortcuts', body: 'A new Muslim may encounter claims that certain objects, numbers, rituals, or personalities automatically control a person’s destiny. Islamic belief rejects the idea that created things independently control what belongs to Allah. Questions about amulets, omens, fortune-telling, and spiritual claims deserve careful scholarship. Do not let viral spiritual content become your creed.' }
    ],
    practice: 'Write five ordinary things you depend on during a normal day—money, people, technology, food, health, transport, or something else. Beside them write one sentence explaining how Islam can teach gratitude for means while keeping ultimate dependence on Allah.',
    commonQuestions: [
      { q: 'Does worshipping Allah mean I cannot love other people?', a: 'No. Love, family, friendship, and gratitude are fully compatible with worshipping Allah alone. The issue is what receives worship.' },
      { q: 'Can I ask another person for help?', a: 'Yes, people help one another. Religious questions about asking others in unseen or supernatural ways are more specific and should be studied with qualified guidance.' },
      { q: 'Why are Muslims so focused on tawhid?', a: 'Because the oneness and worship of Allah is a central foundation of Islamic belief.' }
    ],
    commonMistakes: ['Reducing tawhid to “God is one” without considering worship.', 'Treating every cultural practice as a religious belief.', 'Getting pulled into advanced theological debates before the foundation is clear.'],
    reflection: 'Where in your life do you most notice the difference between trusting people as means and relying on Allah as your Creator?',
    sources: ['Quran 112 is a central short chapter about Allah’s oneness.', 'Use reputable tafsir for context and interpretation.', ...baseSources],
    plus: [
      'Compare the practical implications of tawhid for prayer, dua, gratitude, fear, hope, and repentance.',
      'Work through common questions about intercession, means, superstition, and spiritual practices with source-aware explanations.',
      'Scenario practice: respond when someone says Islam is simply “believing in one God.”'
    ]
  },
  belief: {
    why: 'The six articles of faith provide the classic beginner map of Islamic creed: belief in Allah, His angels, His revealed books, His messengers, the Last Day, and divine decree. The list is simple to memorise, but each article contains ideas that can take a lifetime to understand. A good beginner course teaches the core without pretending every theological detail is equally simple.',
    sections: [
      { title: '1. Belief in Allah', body: 'This includes affirming Allah’s existence, oneness, and unique right to worship. It also means learning about Him through revelation rather than inventing a personal idea of God based only on feelings. Study His names and attributes gradually, and keep the distinction between Creator and creation clear.' },
      { title: '2. Belief in angels and the unseen', body: 'Islam teaches that angels are part of the unseen creation. They obey Allah and have functions described in revelation. For beginners, the important lesson is not to turn angels into fantasy characters. Learn what revelation says and stop where reliable sources stop. The unseen is an area where guessing can easily become superstition.' },
      { title: '3. Belief in revealed books and messengers', body: 'Muslims believe Allah sent revelation and messengers. The Quran is understood as the final revealed scripture, while the prophets are part of a longer story of divine guidance. This gives Islam a strong connection to the prophetic traditions of earlier communities while also maintaining that the Quran is the final revelation.' },
      { title: '4. Belief in the Last Day', body: 'The Last Day gives moral life an ultimate horizon. Islam teaches resurrection, judgement, accountability, reward, and punishment. For a new Muslim this should not be reduced to fear alone. It also creates hope that injustice will not have the final word and that human actions have lasting meaning.' },
      { title: '5. Belief in divine decree', body: 'Qadar is often one of the hardest subjects for beginners. A simple starting point is that Allah knows and encompasses creation while human beings still act, choose, and carry responsibility. Avoid simplistic statements such as “nothing matters because everything is written” or “humans have total independent power.” The topic deserves careful study because classical scholarship discusses its limits and meanings in detail.' }
    ],
    practice: 'Try to explain all six articles of faith in one minute. Then choose the one you understand least and write three specific questions about it.',
    commonQuestions: [
      { q: 'Does belief in qadar remove responsibility?', a: 'No. Islamic teaching combines divine decree with human responsibility and action.' },
      { q: 'Why believe in the unseen?', a: 'Because Muslims accept what revelation teaches about realities that human senses do not directly observe.' },
      { q: 'Do Muslims believe in previous prophets?', a: 'Yes. Belief in messengers is part of Islamic faith, while Muhammad is understood as the final prophet.' }
    ],
    commonMistakes: ['Trying to solve advanced qadar philosophy immediately.', 'Confusing cultural stories with revelation.', 'Memorising the six articles without learning what each changes in real life.'],
    reflection: 'Which article of faith gives you the strongest sense of hope or stability right now?',
    sources: ['Sahih Muslim 8e describes faith in Allah, angels, books, messengers, the Last Day, and divine decree. urlRead sourcehttps://sunnah.com/muslim/1/5', ...baseSources],
    plus: [
      'Build a deeper creed notebook with definitions, evidence, questions, and teacher feedback.',
      'Compare what is widely agreed with recognised areas of theological disagreement.',
      'Scenario practice for questions about suffering, divine decree, judgement, and the unseen.'
    ]
  },
  'islam-iman-ihsan': {
    why: 'A beginner can think Islam is only a list of visible rituals. The famous Jibril narration gives a wider picture: Islam describes core outward submission, Iman describes faith, and Ihsan describes worship with spiritual excellence and awareness of Allah.',
    sections: [
      { title: 'Islam: what you do', body: 'The Jibril hadith explains Islam through practices such as worshipping Allah without associating partners with Him, establishing the obligatory prayer, paying zakah, and fasting Ramadan. These actions make faith visible. A beginner therefore needs both understanding and practice. Knowing the prayer is important, but knowing why Muslims pray is important too.' },
      { title: 'Iman: what you believe', body: 'Iman covers the articles of faith and the unseen beliefs that support Muslim life. A Muslim does not separate belief from worship. Belief changes the meaning of practice, while repeated practice can strengthen awareness and character. The two are not rivals.' },
      { title: 'Ihsan: how you worship', body: 'Ihsan is often translated as excellence or spiritual excellence. The hadith describes worshipping Allah as though you see Him, and if you do not see Him, knowing that He sees you. That gives prayer a different feel. The learner is not simply completing a physical sequence but trying to be conscious of the One being worshipped.' },
      { title: 'Why beginners need all three', body: 'A person can become stuck in one dimension: lots of information with little practice, lots of ritual with little understanding, or a strong emotional feeling with no stable learning. Islam, Iman, and Ihsan together give a more balanced direction. Learn the belief, practise the obligation, and gradually cultivate sincerity and attentiveness.' },
      { title: 'Progress without perfectionism', body: 'Ihsan does not mean instant spiritual perfection. It is a direction. You become more attentive by practising attention. You become more sincere by noticing when you are doing things for other people’s approval and returning your intention to Allah. This is gradual work.' }
    ],
    practice: 'Take your next prayer or study session and name one goal for each: Islam—what action will I do? Iman—what belief does it connect to? Ihsan—how can I do it with more awareness?',
    commonQuestions: [
      { q: 'Is Ihsan another set of compulsory rituals?', a: 'It is better understood as a quality and level of excellence in worship and conduct.' },
      { q: 'Can someone practise without understanding everything?', a: 'Yes. Learning and practice develop together.' },
      { q: 'Why does the hadith matter to beginners?', a: 'It provides a compact map of religious life rather than treating Islam as disconnected subjects.' }
    ],
    commonMistakes: ['Thinking outward practice is the whole religion.', 'Thinking spirituality means rules no longer matter.', 'Using “I am not good enough yet” as a reason to stop practising.'],
    reflection: 'Which side needs the most attention in your life right now: learning, practice, or spiritual attentiveness?',
    sources: ['Sahih Muslim 8e — the Jibril hadith. urlRead sourcehttps://sunnah.com/muslim/1/5', ...baseSources],
    plus: [
      'Study a longer explanation of the Jibril hadith and the relationship between Islam, Iman, and Ihsan.',
      'Use daily reflection prompts that connect belief, worship, and character.',
      'Build weekly review sessions so knowledge turns into repeatable habits.'
    ]
  },
  'five-pillars': {
    why: 'The five pillars are a practical map of Muslim life. They are not the whole of Islam, but they show how core belief becomes repeated worship and responsibility. For a beginner, understanding what each pillar is for is more useful than memorising a list with no context.',
    sections: [
      { title: 'The Shahada', body: 'The testimony of faith gives the foundation: worship Allah alone and accept Muhammad as His Messenger. It is the statement that gives the other pillars their Islamic meaning.' },
      { title: 'Salah', body: 'The five daily prayers structure the day around remembrance and worship. Learning salah is one of the biggest practical projects for a new Muslim, which is why this course gives it multiple lessons rather than expecting one page to be enough.' },
      { title: 'Zakah', body: 'Zakah is obligatory charitable giving for people who meet its conditions. It has rules about wealth, eligibility, thresholds, recipients, and timing. Beginners should understand the concept before trying to calculate what they personally owe.' },
      { title: 'Fasting in Ramadan', body: 'Ramadan fasting involves abstaining from food, drink, and other specified acts from dawn to sunset while pursuing worship, self-control, gratitude, Quran, and generosity. Personal exemptions and details require qualified guidance.' },
      { title: 'Hajj', body: 'Hajj is the pilgrimage to Makkah required once in a lifetime for Muslims who are able to undertake it. It combines physical movement, ritual, sacrifice, remembrance, and the story of Ibrahim. It is not necessary to master Hajj details when you are still learning the basics of prayer.' }
    ],
    practice: 'Write the five pillars from memory and beside each one write its main purpose in your own words. Then choose the pillar you need to study next.',
    commonQuestions: [
      { q: 'Are the pillars the whole religion?', a: 'No. They are foundational practices within a much wider religious life.' },
      { q: 'Do all pillars apply identically to everyone?', a: 'No. Personal circumstances affect some obligations, especially zakah, fasting exemptions, and ability for Hajj.' },
      { q: 'What should a beginner prioritise?', a: 'Faith foundations and learning the prayer are usually more immediate than advanced pilgrimage or financial calculations.' }
    ],
    commonMistakes: ['Treating the pillars as isolated checkboxes.', 'Trying to calculate detailed obligations before learning the principles.', 'Thinking optional cultural practices are additional “pillars”.'],
    reflection: 'Which pillar feels most familiar to you, and which feels most distant?',
    sources: ['Sahih Muslim 8e includes core practices associated with Islam. urlRead sourcehttps://sunnah.com/muslim/1/5', ...baseSources],
    plus: [
      'Receive a pillar-by-pillar mastery checklist with review prompts.',
      'Connect each pillar to character, community, and spiritual purpose.',
      'Scenario practice for how to explain the five pillars to a non-Muslim friend.'
    ]
  },
  prophets: {
    why: 'Islam places the prophets inside a single story of divine guidance. Learning this prevents the beginner from treating Muhammad’s mission as an isolated historical event and helps explain the Islamic relationship to earlier revelation.',
    sections: [
      { title: 'One message, different communities', body: 'The Quran presents prophets as callers to worship Allah. Their communities and laws could differ, but the call to God is part of a continuous story. The learner should therefore recognise names such as Adam, Nuh, Ibrahim, Musa, Isa, and Muhammad without assuming every later religious tradition describes them in exactly the same way Islam does.' },
      { title: 'The role of a messenger', body: 'A messenger communicates divine guidance and becomes an example for his people. Muslims do not worship prophets. Honour for prophets is expressed by believing their message, respecting them, and following the final messenger within the framework of Islam.' },
      { title: 'Jesus in Islam', body: 'Muslims believe in Jesus (Isa) as a mighty messenger and Messiah, while rejecting the idea that he is divine. New Muslims coming from Christian backgrounds may need time with this subject. Learn the Islamic position from the Quran and qualified teachers rather than from internet debates designed to provoke anger.' },
      { title: 'Muhammad as the final prophet', body: 'Muslims believe Muhammad is the final prophet and that the Quran is the final revelation. His life therefore becomes central to learning how the message was embodied in practice. This is one reason the Sunnah and hadith matter.' },
      { title: 'Studying prophetic stories well', body: 'Read biography with chronology and source awareness. Short viral stories often remove context or blend weak reports with strong ones. Learn which parts are directly from the Quran, which are established in hadith, and which are later storytelling.' }
    ],
    practice: 'Choose one prophet mentioned in the Quran and write: what you know, what you want to know, and which source you will use to learn more.',
    commonQuestions: [
      { q: 'Do Muslims believe in previous prophets?', a: 'Yes. Belief in messengers is part of Islamic faith.' },
      { q: 'Why do Muslims say peace be upon him?', a: 'It is a respectful supplication commonly said after mentioning prophets.' },
      { q: 'Are all stories online about prophets authentic?', a: 'No. Trace claims back to reliable sources.' }
    ],
    commonMistakes: ['Treating cultural stories as revelation.', 'Debating comparative religion before understanding the Islamic position.', 'Quoting hadith without checking the narration.'],
    reflection: 'What does the idea of a continuous prophetic message change about how you see revelation?',
    sources: [...baseSources],
    plus: [
      'Prophetic timeline study with key events and major themes.',
      'Source-aware reading of selected prophetic stories from Quran and hadith.',
      'Comparative questions for learners coming from Christian or Jewish backgrounds.'
    ]
  },
  quran: {
    why: 'The Quran is central to Muslim worship and learning. Beginners often hear that they need to read Arabic, understand translation, memorise passages, and know tafsir all at once. Those are different skills. A healthy course teaches them separately and then connects them.',
    sections: [
      { title: 'What Muslims mean by the Quran', body: 'Muslims understand the Quran as Allah’s revelation in Arabic, recited and transmitted through the Muslim community. Translation helps people understand meaning, but a translation is not identical to the Arabic text. That distinction matters whenever a learner compares wording between translations.' },
      { title: 'Start with meaning', body: 'A beginner can read a reliable translation even without Arabic fluency. Learn the broad message of a passage before worrying about every lexical detail. Keep a notebook of new words and questions. This creates active learning instead of passive reading.' },
      { title: 'Why context matters', body: 'Verses are part of chapters, themes, historical contexts, and a larger body of revelation. A single sentence can be misunderstood when detached from the verses around it or presented without scholarly interpretation. This is why tafsir exists and why good teachers explain evidence.' },
      { title: 'Arabic gradually', body: 'Arabic can be learned as a long-term skill. Start with pronunciation, the alphabet if needed, and repeated Quranic vocabulary. Do not turn the absence of Arabic fluency into a barrier against understanding the Quran’s guidance today.' },
      { title: 'Listening, recitation, reflection', body: 'Quran study can include reading, listening to a qualified reciter, reciting aloud, translation, and reflection. You do not need to use all five methods every day. Choose a routine you can sustain and expand later.' }
    ],
    practice: 'Read a short Quran passage in Arabic or translation. Write one idea you understood, one word you want to remember, and one question that you want answered later.',
    commonQuestions: [
      { q: 'Can I read the Quran in English?', a: 'Yes. A translation helps you understand the meaning, while the Arabic remains the revealed text.' },
      { q: 'Why are translations different?', a: 'Translation requires interpretation because languages do not match perfectly word-for-word.' },
      { q: 'Do I need tafsir for every verse?', a: 'No. Use context and reliable tafsir especially when a passage is difficult or the meaning is disputed.' }
    ],
    commonMistakes: ['Reading huge amounts with no reflection.', 'Treating one English translation as if it were the Arabic text itself.', 'Using isolated social-media quotations as context for major claims.'],
    reflection: 'What kind of Quran routine would still be realistic on your busiest week?',
    sources: ['Quran 20:114 is a well-known supplication for increase in knowledge. urlRead sourcehttps://quran.com/20/114', ...baseSources],
    plus: [
      'Guided Quran study worksheets: context, vocabulary, theme, question, and reflection.',
      'A structured seven-day and thirty-day reading habit.',
      'Deeper explanations of tafsir, translation choices, and source checking.'
    ]
  },
  'reading-quran': {
    why: 'A reading habit only helps if you can actually keep it. New Muslims often set an ambitious target, miss a few days, and conclude that they have failed. A better approach is to build a small routine that survives ordinary life and then grow it.',
    sections: [
      { title: 'Choose a cue', body: 'Attach Quran reading to something you already do, such as after breakfast, after one prayer, or before bed. A regular cue reduces the number of decisions you need to make.' },
      { title: 'Use a small starting target', body: 'Five to ten focused minutes can be enough to build the habit. The goal is not to create an impressive streak for other people. The goal is to become the kind of person who returns to the Quran regularly.' },
      { title: 'Read actively', body: 'A useful beginner pattern is read → understand → question → return. First read for the big picture. Then identify one point you do not understand. Record it and come back later using reliable tafsir or a teacher.' },
      { title: 'Listen and repeat', body: 'Listening to a qualified reciter can help you become familiar with pronunciation and rhythm even before you can read Arabic confidently. Repeat small passages instead of turning listening into background noise.' },
      { title: 'Recover after missed days', body: 'Missing a day is normal. Do not repay one missed day with an unrealistic marathon. Resume the next day. Sustainable habits are built by returning, not by never slipping.' }
    ],
    practice: 'Create a seven-day plan with a five-minute minimum. Put a check beside each day you complete, and at the end write what helped you return on the hardest day.',
    commonQuestions: [
      { q: 'Do I have to read a full page every day?', a: 'No universal beginner target is necessary. Build a sustainable routine and grow it.' },
      { q: 'What if I do not know Arabic?', a: 'Use a reliable translation and begin Arabic gradually.' },
      { q: 'What if a passage confuses me?', a: 'Record the question, check context and reliable tafsir, and ask a qualified teacher when needed.' }
    ],
    commonMistakes: ['Turning the reading habit into a competition.', 'Researching every tiny question immediately and never finishing the reading.', 'Giving up after a missed day.'],
    reflection: 'What is the smallest Quran habit you could realistically keep for a month?',
    sources: [...baseSources],
    plus: [
      'A guided 30-day Quran routine with review checkpoints.',
      'Study prompts that turn each reading into active learning.',
      'Progress notes for vocabulary, questions, and themes.'
    ]
  },
  fatiha: {
    why: 'Al-Fatihah is short enough for a beginner to approach closely and important enough that you will meet it repeatedly in prayer. Learning it well involves three separate tasks: pronunciation, memorisation, and understanding. Do not treat them as one task.',
    sections: [
      { title: 'The overall movement of the surah', body: 'Al-Fatihah begins with praise and recognition of Allah, continues with His mercy and authority, then moves to worship and dependence, and ends with a request for guidance. That movement gives the learner a structure for understanding rather than a list of disconnected lines.' },
      { title: 'Memorise in small phrases', body: 'Break the surah into short phrases. Listen, repeat, and connect each phrase to its meaning. A short daily repetition is normally more useful than trying to force the whole surah into memory in one sitting.' },
      { title: 'Pronunciation matters, but do not panic', body: 'Arabic sounds can be new. A qualified reciter can identify which errors change words and which simply reflect normal beginner accent. Keep practising. The purpose is to improve accuracy while continuing worship and learning.' },
      { title: 'Understand the request for guidance', body: 'The closing request for the straight path is especially important for a new Muslim because it turns learning into dependence on Allah. The learner is not only collecting information; they are asking for guidance in living by it.' },
      { title: 'Use meaning during prayer', body: 'As memory improves, knowing the meaning can help attention. Instead of racing through recitation, pause mentally on what the phrases are saying. This is a practical way to begin developing focus in salah.' }
    ],
    practice: 'Choose one short phrase from Al-Fatihah, learn its meaning, listen to a qualified reciter, repeat it slowly, then explain the phrase in your own words.',
    commonQuestions: [
      { q: 'What if I cannot memorise it yet?', a: 'Keep learning with patient guidance and follow the beginner instruction appropriate to your situation.' },
      { q: 'Why are English translations different?', a: 'Because translation involves interpretation and Arabic meanings can be wider than one English word.' },
      { q: 'Why is Al-Fatihah so important?', a: 'It has a central role in salah and is therefore encountered repeatedly in daily worship.' }
    ],
    commonMistakes: ['Using transliteration as the only long-term pronunciation method.', 'Memorising sounds without understanding any meaning.', 'Expecting perfect recitation immediately.'],
    reflection: 'Which idea in Al-Fatihah do you most want to carry into your next prayer?',
    sources: ['Use a reputable Quran translation and reciter; consult a teacher for pronunciation.', ...baseSources],
    plus: [
      'Phrase-by-phrase review plan with meaning prompts.',
      'Pronunciation checkpoints and memory exercises.',
      'A deeper breakdown of the surah’s themes and how they shape prayer.'
    ]
  },
  sunnah: {
    why: 'Sunnah and Hadith are essential to understanding how Islam was taught and practised, but the terms are often used loosely online. A new Muslim needs to know the basic definitions and one crucial skill: not every quote attributed to the Prophet is automatically authentic.',
    sections: [
      { title: 'What is Sunnah?', body: 'Sunnah refers broadly to the teachings, example, practices, and guidance associated with Prophet Muhammad as transmitted through the Islamic tradition. It is not simply a list of motivational quotes. It is part of how Muslims understand the lived example of revelation.' },
      { title: 'What is Hadith?', body: 'Hadith are reports transmitted about the Prophet’s words, actions, approvals, and related matters. Hadith scholarship developed methods for examining chains of transmission and reports. Different collections contain material of different strengths and purposes, so source awareness matters.' },
      { title: 'Why grading matters', body: 'A narration can be classified with terms such as sahih or hasan, and scholars discuss authenticity in technical ways. Beginners do not need to become hadith critics immediately, but they should learn the habit of checking where a quote comes from before treating it as certain.' },
      { title: 'Use hadith with Quran and context', body: 'A single hadith sentence can be misunderstood when stripped of its chapter, companion narrator, surrounding reports, or jurisprudential interpretation. Read more than the screenshot. Ask what the narration actually says, who transmitted it, and how scholars understand it.' },
      { title: 'Healthy humility', body: 'It is better to say “I do not know whether this quote is authentic” than to confidently spread something false. Source literacy is part of religious responsibility.' }
    ],
    practice: 'Take one hadith quote you have seen online. Before sharing or believing it, record its source collection, reference number if available, and whether a reliable source explains its grading.',
    commonQuestions: [
      { q: 'Is every hadith equally reliable?', a: 'No. Hadith scholarship includes different grades and methods of evaluation.' },
      { q: 'Can a hadith help explain practice?', a: 'Yes. Hadith are a major source for understanding the Prophet’s teachings and example.' },
      { q: 'Can AI or social media verify a hadith?', a: 'They can help you search, but verification should be traced to reliable primary or scholarly sources.' }
    ],
    commonMistakes: ['Sharing unattributed quote graphics.', 'Treating every “hadith says” claim as verified.', 'Ignoring context and scholarly interpretation.'],
    reflection: 'Would you rather have ten quotes memorised or five authentic teachings you understand well? Why?',
    sources: ['Sunnah.com can help you trace hadith to collections. Use qualified scholarship for deeper authentication questions.', ...baseSources],
    plus: [
      'Source-checking practice sets using real hadith references.',
      'A beginner explanation of isnad, narrator reliability, grading, and context.',
      'Study paths for selected collections without requiring advanced Arabic.'
    ]
  },
  questions: {
    why: 'Learning Islam also means learning how not to be manipulated by information. A new Muslim can receive contradictory answers from short videos, group chats, search results, AI, and well-meaning friends. The solution is not to trust one voice blindly. It is to develop a repeatable method for checking claims.',
    sections: [
      { title: 'Start with the exact question', body: '“Is this halal?” can hide several different questions: what is the general ruling, does an ingredient count as a certain substance, is there a difference between schools, does my personal situation change the answer, and what evidence is being used? Write the real question first.' },
      { title: 'Identify the source', body: 'Ask who is speaking and what qualification or source they are using. A scholar, imam, author, content creator, and friend do not all have the same role. Confidence, follower count, and production quality are not scholarly credentials.' },
      { title: 'Look for evidence and context', body: 'A trustworthy explanation normally identifies where the claim comes from and gives enough context to understand it. When a source presents a complex issue as a one-line universal rule, pause before accepting it.' },
      { title: 'Know when the question is personal', body: 'Marriage, divorce, inheritance, zakah calculations, health-related fasting, and other high-stakes matters often depend on facts about your situation. These are not good areas for a generic internet answer to become your final personal ruling.' },
      { title: 'AI has a role, but not the final role', body: 'An AI companion can explain vocabulary, compare general concepts, organise questions, and help a learner study. It can also make mistakes. Hidayah should therefore point you toward qualified scholarship whenever a question becomes personal, disputed, or high stakes.' }
    ],
    practice: 'Take a religious claim you saw online and score it against four checks: source, evidence, context, and whether the speaker is stating a broad principle or a specific scholarly position.',
    commonQuestions: [
      { q: 'Why do sincere scholars disagree?', a: 'They can differ in interpretation, evidence assessment, legal methodology, or context while still sharing major foundations.' },
      { q: 'Should I follow the loudest online speaker?', a: 'No. Use source quality and trustworthy scholarship, not volume or outrage.' },
      { q: 'Can I use Hidayah for personal rulings?', a: 'Use it for learning and preparing questions, but seek qualified guidance for personal rulings.' }
    ],
    commonMistakes: ['Searching until you find the answer you already wanted.', 'Treating a screenshot as a primary source.', 'Assuming every difference is a contradiction.'],
    reflection: 'What kind of online content makes you most likely to believe something quickly?',
    sources: [...baseSources],
    plus: [
      'Source-audit exercises with step-by-step answer checking.',
      'A framework for distinguishing consensus, majority views, minority views, and personal opinions.',
      'Scenario training for common misinformation patterns.'
    ]
  },
  wudu: {
    why: 'Wudu is ritual purification commonly performed before salah. For a new Muslim, it is both a practical skill and a chance to learn an important Islamic idea: preparing yourself for worship. The sequence can be learned physically, but details can vary among recognised legal schools, so the goal here is to build a coherent beginner foundation rather than declare every small difference wrong.',
    sections: [
      { title: 'Why wudu exists', body: 'Wudu prepares the body for formal prayer and creates a deliberate transition from ordinary activity to worship. The repeated act of washing can also become a mental reset. Instead of treating it as a pointless obstacle before prayer, learn to see it as part of arriving at prayer intentionally.' },
      { title: 'The general sequence', body: 'A common teaching sequence includes washing the hands, rinsing the mouth and nose, washing the face, washing the arms, wiping the head, and washing the feet. Some details—such as order, repetition, and specific practices—are taught differently by recognised schools. Learn one sound method from one teacher first.' },
      { title: 'Learn the difference between essential and recommended', body: 'Beginners can become overwhelmed because they see a ten-step video and assume every detail carries the same legal weight. Ask your teacher which actions are essential, which are recommended, and which are simply part of that teacher’s preferred practice.' },
      { title: 'Avoid obsessive repetition', body: 'Wudu can become difficult when uncertainty takes over. If you repeatedly wash because you are never satisfied that a limb was clean enough, the practice can become exhausting. A qualified teacher can help you set reasonable boundaries around doubt and repetition.' },
      { title: 'Make it automatic', body: 'Once you have a consistent sequence, practise it until you no longer have to think about every hand movement. The aim is for wudu to become a calm bridge into prayer rather than the main event.' }
    ],
    practice: 'Without water, say the order out loud from memory. Then perform it once with a teacher or trusted demonstration and write down only the one or two corrections that matter most.',
    commonQuestions: [
      { q: 'Does every mosque teach wudu exactly the same way?', a: 'No. Some details vary between recognised schools.' },
      { q: 'What if I forget part of the sequence?', a: 'Ask the teacher or school of learning you are following; do not assume every mistake has the same consequence.' },
      { q: 'How do I avoid waswas?', a: 'Use a simple consistent method and seek qualified guidance rather than repeatedly restarting from doubt.' }
    ],
    commonMistakes: ['Mixing several school methods before learning one coherent sequence.', 'Repeating washes excessively.', 'Treating optional details as if they were all mandatory.'],
    reflection: 'What would make wudu feel calmer and more purposeful for you?',
    sources: [...baseSources],
    plus: [
      'School-aware comparison of common wudu differences.',
      'Printable step review and mistake correction practice.',
      'Scenario training for travel, limited water, uncertainty, and common beginner questions.'
    ]
  },
  ghusl: {
    why: 'Ghusl is a full ritual bath used in situations specified by Islamic law. Beginners often hear lists of rules without understanding the purpose. The important first step is to learn the concept and then ask a qualified teacher about personal circumstances rather than relying on generic internet checklists.',
    sections: [
      { title: 'Ghusl versus wudu', body: 'Wudu is a smaller ritual purification used frequently before salah. Ghusl is a full ritual bath required or prescribed in particular circumstances. Learning the distinction prevents unnecessary repetition and helps the learner understand that Islamic purification has different levels and situations.' },
      { title: 'Keep the beginner method simple', body: 'A general understanding includes intending the purification and ensuring water reaches the body according to the legal method being followed. Detailed sequences and requirements differ in explanation, so a local teacher can show you the practice.' },
      { title: 'Why personal questions need care', body: 'Some ghusl questions relate to sexual activity, menstruation, postpartum bleeding, or other private matters. These are not areas where a generic public lesson should pretend to replace individual guidance. Hidayah can give background; a trusted scholar can apply details to your situation.' },
      { title: 'Purity should not become fear', body: 'The purpose of purification is worship and cleanliness, not constant suspicion about whether a person is spiritually “dirty”. If you find yourself checking, repeating, or doubting excessively, seek a teacher who understands these issues and can help you practise with confidence.' },
      { title: 'Build a practical routine', body: 'Know which circumstances require ghusl, learn one recognised method, and keep the process normal. You do not need a complicated ritual routine for every ordinary day.' }
    ],
    practice: 'Write two sentences: “Wudu is for…” and “Ghusl is for…”. Then list one personal question you would take to a trusted scholar rather than answer from a generic article.',
    commonQuestions: [
      { q: 'Can I use the same shower for ghusl?', a: 'The physical space can be an ordinary shower; what matters is fulfilling the required purification method.' },
      { q: 'Do I need to know every detailed ruling?', a: 'No. Learn the basics first and ask for help with personal cases.' },
      { q: 'What if purity worries become constant?', a: 'Seek qualified guidance and avoid turning normal doubt into endless repetition.' }
    ],
    commonMistakes: ['Trying to memorise advanced purity law before basic prayer.', 'Treating every private scenario as a public internet question.', 'Repeating washing because of intrusive doubt.'],
    reflection: 'How could learning a simple purification routine make prayer easier rather than more stressful?',
    sources: [...baseSources],
    plus: [
      'School-aware purity reference tables.',
      'Scenario practice for common private questions with privacy-respecting prompts.',
      'A “when to ask a scholar” decision guide.'
    ]
  },
  'prayer-prep': {
    why: 'A calm pre-prayer routine removes many of the small uncertainties that make salah feel intimidating. Think of preparation as a checklist rather than a second prayer: purity, clothing, place, qiblah, knowing the prayer, and then beginning with intention.',
    sections: [
      { title: 'Purity', body: 'Check whether you need wudu or another recognised purification. Use the method you have learned consistently. Avoid repeated checking unless you have a real reason to believe your purity changed.' },
      { title: 'Clothing and place', body: 'Prayer requires appropriate cleanliness and covering according to the rules of the tradition you follow. A beginner should establish one reliable prayer outfit or area rather than spending every prayer deciding what counts.' },
      { title: 'Qiblah', body: 'Use the direction you have established at home or the guidance of the mosque. You do not need to keep rechecking a stable setup every time.' },
      { title: 'Know which prayer you are doing', body: 'A little mental clarity goes a long way. Know whether you are praying Fajr, Dhuhr, Asr, Maghrib, or Isha and whether you are praying alone or in congregation. Detailed intention wording is a separate subject; the basic idea is to know what you are undertaking.' },
      { title: 'Start without panic', body: 'Once preparation is complete, stop analysing. Beginning prayer is the point. A new Muslim can easily spend more time fearing mistakes than actually practising. Use your teacher’s corrections between prayers rather than running an internal courtroom during every rakah.' }
    ],
    practice: 'Create a four-line pre-prayer checklist and keep it near your prayer space: purity, clothes/place, qiblah, prayer. Use it until the process becomes automatic.',
    commonQuestions: [
      { q: 'Do I have to say a long intention sentence?', a: 'The important beginner idea is knowing inwardly which prayer you intend to perform; detailed rulings vary.' },
      { q: 'What if my clothing or prayer space is imperfect?', a: 'Learn the actual requirements from your teacher rather than assuming every imperfection invalidates prayer.' },
      { q: 'Can preparation become obsessive?', a: 'Yes. Keep your routine simple and get qualified help if doubt is taking over.' }
    ],
    commonMistakes: ['Checking the same thing repeatedly.', 'Confusing recommended etiquette with validity conditions.', 'Trying to perfect every detail before learning the basic prayer.'],
    reflection: 'Which preparation step could you standardise so your prayer begins with less friction?',
    sources: [...baseSources],
    plus: [
      'Personal preparation checklist templates.',
      'Detailed school-aware notes on common preparation differences.',
      'Scenario practice for work, travel, shared homes, and public spaces.'
    ]
  },
  'prayer-times': {
    why: 'The five daily prayers are performed within defined windows that move through the day. Beginners often make the mistake of memorising clock times from one screenshot. Prayer times change with place and season, so the real skill is learning the prayer names and using a reliable local timetable.',
    sections: [
      { title: 'Fajr', body: 'Fajr is the dawn prayer. It begins within a dawn window and ends before sunrise. Because the window can be early and seasonal changes can be large, a local timetable and an alarm are especially helpful for new Muslims building the habit.' },
      { title: 'Dhuhr and Asr', body: 'Dhuhr occurs after midday and Asr later in the day. Their exact windows and some details differ by jurisprudential calculation. Beginners should use the schedule supplied by a reputable local mosque or a transparent trusted service rather than trying to reproduce the astronomy themselves.' },
      { title: 'Maghrib and Isha', body: 'Maghrib begins after sunset, while Isha is the night prayer. These windows can vary substantially by latitude and season, so the habit of checking a reliable local timetable is more important than memorising one universal clock time.' },
      { title: 'Why disagreements happen', body: 'Prayer calculations involve astronomical observations and jurisprudential definitions, especially for dawn and night. Two apps can therefore show different times without one necessarily being fraudulent. The beginner task is to choose a reliable local standard and use it consistently.' },
      { title: 'Fit prayer into ordinary life', body: 'Work, school, commuting, and family responsibilities matter. Put the prayers into the rhythm of your real day. Plan where you can pray, when you have breaks, and what you will do if travel changes your routine.' }
    ],
    practice: 'Find tomorrow’s timetable from a reliable local mosque or trusted source. Say each prayer name aloud and identify approximately where it falls in your day.',
    commonQuestions: [
      { q: 'Do prayer times stay the same every day?', a: 'No. They change with the sun, season, and location.' },
      { q: 'Why do apps disagree?', a: 'Calculation methods and settings can differ.' },
      { q: 'What source should I use?', a: 'A reputable local mosque timetable is often the simplest practical reference for a beginner.' }
    ],
    commonMistakes: ['Memorising fixed clock times.', 'Switching between multiple apps without understanding the settings.', 'Waiting until the last minute to plan a prayer around work.'],
    reflection: 'Which prayer will require the most scheduling work in your current routine?',
    sources: [...baseSources],
    plus: [
      'A timetable-reading guide and routine planner.',
      'Deeper explanation of why prayer calculations can differ.',
      'Scenario planning for travel, work shifts, school, and unusual locations.'
    ]
  },
  qiblah: {
    why: 'The qiblah is the direction of the Kaaba in Makkah toward which Muslims face for formal prayer. It gives a shared direction to a global community. For a beginner, the main goal is not mathematical perfection. It is establishing a reasonable, reliable direction and then praying without constant doubt.',
    sections: [
      { title: 'The meaning of qiblah', body: 'Facing the qiblah is a physical act of orientation toward a sacred centre. It does not mean Allah is physically contained in one direction or place. The qiblah unifies the outward direction of Muslim prayer.' },
      { title: 'At home', body: 'A local mosque, a trusted direction tool, or a reliable compass can help you establish the direction. Once you have a stable setup, mark your prayer space mentally or physically so you do not need to calculate again every time.' },
      { title: 'Uncertainty', body: 'People can become trapped in repeated compass checking because they want perfect certainty. A reasonable best effort is usually more useful than endless adjustment. Ask your teacher how your school handles uncertainty, travel, and changing circumstances.' },
      { title: 'Travel and unfamiliar places', body: 'Hotels, workplaces, airports, and outdoor spaces can make the qiblah less obvious. A practical learner knows how to ask for help and how to use a trusted direction tool instead of becoming paralysed.' },
      { title: 'Belonging and direction', body: 'The qiblah is both practical and communal. Billions of Muslims can face a common direction even though they live in different countries, speak different languages, and come from different cultures.' }
    ],
    practice: 'Establish your home qiblah once using a reliable source. Then practise turning toward it without opening the app again.',
    commonQuestions: [
      { q: 'Do I need exact degree-level precision?', a: 'Beginners should aim for a reasonable reliable direction and follow qualified guidance for difficult cases.' },
      { q: 'What if I later discover I was slightly off?', a: 'Ask a qualified teacher how the circumstances should be handled; do not assume your whole learning journey was wasted.' },
      { q: 'Is Allah in the direction of the qiblah?', a: 'No. The qiblah is the direction Muslims face for prayer, not a statement that Allah is confined to a direction.' }
    ],
    commonMistakes: ['Obsessively rechecking the compass.', 'Confusing the sacred direction with a physical location containing Allah.', 'Letting uncertainty stop prayer entirely.'],
    reflection: 'How would a stable prayer direction change your experience at home?',
    sources: [...baseSources],
    plus: [
      'Practical qiblah setup guide for home, work, travel, and public spaces.',
      'Scenario practice for uncertainty and unusual locations.',
      'School-aware notes on detailed qiblah rulings.'
    ]
  },
  salah: {
    why: 'Salah is one of the largest practical learning tasks for a new Muslim because it combines time, purification, direction, movement, recitation, and intention. The answer is not to memorise everything in one day. Break the prayer into layers and add one layer at a time.',
    sections: [
      { title: 'The shape of a prayer', body: 'Formal prayer includes standing, recitation, bowing, rising, prostration, sitting, and repeated cycles. The exact number of rakahs differs between the five obligatory prayers. A beginner should first understand the sequence before trying to memorise every additional phrase.' },
      { title: 'Movement first, then words', body: 'Many people learn better if they first recognise what the body is doing. Then attach the required recitations to each movement. A teacher can demonstrate pace, posture, and transitions in a way text cannot fully reproduce.' },
      { title: 'The five prayers', body: 'Fajr has two obligatory rakahs, Dhuhr four, Asr four, Maghrib three, and Isha four in commonly followed Sunni practice. Detailed jurisprudential questions can vary, especially around voluntary prayers and some recitation rules, so this course focuses on the shared beginner map.' },
      { title: 'Prayer is not a performance', body: 'New Muslims sometimes imagine everyone around them is watching. In reality, most people are focused on their own worship. The goal is not to look experienced. It is to learn to pray sincerely and correctly according to the method you are being taught.' },
      { title: 'Grow through repetition', body: 'A prayer becomes easier because the brain and body learn the sequence through repeated practice. Use short sessions outside the prayer itself to rehearse one part. Ask a teacher to identify the biggest correction rather than giving you ten new corrections at once.' },
      { title: 'Understand why you pray', body: 'Salah is not merely a schedule imposed on a believer. It is a repeated return to Allah throughout the day. Its rhythm interrupts distraction and makes worship part of ordinary life. The more the meaning becomes familiar, the more the movements stop feeling like choreography.' }
    ],
    practice: 'Take one prayer and write its broad sequence from beginning to end in plain language. Then practise only the movements until the order feels familiar.',
    commonQuestions: [
      { q: 'What if I cannot memorise everything?', a: 'Continue learning with a teacher and use the beginner guidance appropriate to your situation.' },
      { q: 'Why do some Muslims pray slightly differently?', a: 'Recognised legal schools differ on some details while sharing the core structure.' },
      { q: 'What if I make a mistake?', a: 'Learn what happened, ask a teacher, and continue. Do not let one error become a reason to abandon prayer.' }
    ],
    commonMistakes: ['Trying to memorise the whole prayer in a single sitting.', 'Copying several different videos at once.', 'Focusing on appearance instead of learning the sequence and meaning.'],
    reflection: 'Which part of salah do you most want a teacher to demonstrate for you?',
    sources: [...baseSources],
    plus: [
      'Prayer mastery path with movement, recitation, meaning, and review checkpoints.',
      'School-aware comparisons of common differences without turning them into a debate.',
      'Scenario practice for prayer at work, travel, congregation, illness, and uncertainty.'
    ]
  },
  'first-prayer': {
    why: 'One rakah is easier to learn than “the whole prayer.” Once you can recognise the pieces of a rakah, repeated cycles become less intimidating. Learn the movement sequence first, then the required recitations, then the transitions between rakahs.',
    sections: [
      { title: 'Standing', body: 'The standing position is where much of the main recitation occurs. Beginners should learn how to stand comfortably and where to place their hands according to the method they are being taught.' },
      { title: 'Bowing', body: 'Ruku is the bowing position. Learn the posture from a teacher so that your back and joints are positioned comfortably. Attach the appropriate remembrance after you know the physical movement.' },
      { title: 'Rising', body: 'The transition out of bowing is part of the prayer sequence, not a rushed gap between positions. Learning the transition clearly helps the rakah feel like one coherent pattern.' },
      { title: 'Prostration', body: 'Sujud is a major physical expression of humility. Learn how the forehead and other required body parts are positioned according to your school, and use a safe posture that does not cause injury.' },
      { title: 'Sitting', body: 'Sitting occurs in the appropriate places within the prayer. Beginners can first learn the difference between the sitting after two rakahs and the final sitting in the prayers they are studying, with a teacher demonstrating the details.' },
      { title: 'Repeat without rushing', body: 'Once one rakah is familiar, repetition becomes the path to confidence. The body learns through repetition, while meaning and pronunciation improve alongside it.' }
    ],
    practice: 'Rehearse a single rakah slowly and name each movement out loud before doing it. Repeat until you no longer have to guess what comes next.',
    commonQuestions: [
      { q: 'Do I need to move quickly?', a: 'No. Beginners need a calm pace that allows them to learn the positions correctly.' },
      { q: 'What if I cannot remember the next movement?', a: 'Stop the practice, review the sequence, and ask for a demonstration.' },
      { q: 'Is every posture identical across all Muslims?', a: 'No. Some posture details differ among recognised schools.' }
    ],
    commonMistakes: ['Learning words without learning the movement order.', 'Rushing because you think you need to look experienced.', 'Trying to solve small differences before the sequence is secure.'],
    reflection: 'Which movement feels most natural already, and which needs deliberate practice?',
    sources: [...baseSources],
    plus: [
      'Movement-by-movement review cards.',
      'Practice sessions that isolate one transition at a time.',
      'Detailed notes on common school differences.'
    ]
  },
  'prayer-words': {
    why: 'Knowing what you are saying can transform salah from unfamiliar Arabic into a meaningful conversation of praise, glorification, submission, and supplication. Beginners should learn the core phrases gradually and attach meaning to each one instead of trying to memorise a giant script with no understanding.',
    sections: [
      { title: 'Allahu akbar', body: 'This phrase is commonly used to move between major parts of the prayer. Its meaning points to Allah being greater. Remembering the meaning can help the movement feel like an act of worship rather than a mechanical signal.' },
      { title: 'Al-Fatihah', body: 'The opening chapter is the central recitation lesson for a new Muslim. Learn its meaning, then its pronunciation, then its confidence inside the prayer.' },
      { title: 'Words in bowing and prostration', body: 'The remembrances used in ruku and sujud teach the heart what the body is expressing: glorification, humility, and surrender. Learn the common wording from a trusted teacher and understand the broad meaning.' },
      { title: 'The final sitting', body: 'The final sitting includes established words of testimony and blessings. It can feel long at first. Break it into phrases, learn the meaning, and practise it outside prayer.' },
      { title: 'Dua after learning the basics', body: 'The prayer also contains opportunities for supplication. Beginners should first become stable in the required or central parts and then learn additional duas gradually.' }
    ],
    practice: 'Choose one prayer phrase today. Learn the Arabic, a reliable transliteration as a temporary support, and the meaning. Repeat it five times slowly.',
    commonQuestions: [
      { q: 'Can I rely on transliteration forever?', a: 'It is useful for beginners, but learning Arabic pronunciation with a teacher is a better long-term goal.' },
      { q: 'Do all wordings look identical in every mosque?', a: 'There are recognised differences in some details and supplications.' },
      { q: 'Why memorise meaning too?', a: 'Meaning helps attention and turns recitation into understanding.' }
    ],
    commonMistakes: ['Memorising sound without meaning.', 'Using low-quality transliteration with no teacher check.', 'Trying to learn every optional dua before the core prayer is stable.'],
    reflection: 'Which phrase would change your experience of prayer the most if you truly understood it?',
    sources: [...baseSources],
    plus: [
      'Phrase-by-phrase memorisation system.',
      'Meaning prompts for every major section of salah.',
      'Review quizzes and pronunciation checkpoints.'
    ]
  },
  mosque: {
    why: 'A first mosque visit can feel more intimidating than the religious material itself. New Muslims may worry about where to stand, what to wear, what people will ask, or whether they will be judged. A healthy community should reduce that fear, not increase it.',
    sections: [
      { title: 'Before you go', body: 'Check prayer times, dress modestly and comfortably, and contact the mosque if you would like someone to welcome you. You can simply say that you are new and would like help learning.' },
      { title: 'What to expect', body: 'Mosques vary. Some are large and busy, some are small and family-oriented, and some have strong language or cultural traditions. You may see separate arrangements for men and women. Ask rather than guessing.' },
      { title: 'What makes a healthy community', body: 'Look for people who answer questions calmly, respect privacy, do not pressure you for money, and help you learn without demanding instant conformity to every cultural habit. A healthy community makes you more confident and independent.' },
      { title: 'Boundaries are allowed', body: 'You do not need to tell strangers your conversion story, family details, finances, or private relationships. A new Muslim can say “I am still learning and I would rather keep that private.”' },
      { title: 'Finding a teacher', body: 'Ask who teaches beginners, whether they have women or men mentors where appropriate, whether they can explain differences among schools, and whether you can ask private questions. A teacher who says “I do not know” when appropriate is usually safer than one who claims certainty about everything.' }
    ],
    practice: 'Write a short message to a mosque asking who can welcome a new Muslim and help with prayer. Keep the message simple and reveal only what you want to share.',
    commonQuestions: [
      { q: 'Do I need to know how to pray before attending?', a: 'No. You can attend specifically because you are learning.' },
      { q: 'What if people speak a language I do not understand?', a: 'Ask whether someone can help in a language you understand.' },
      { q: 'What if I feel uncomfortable?', a: 'You can leave, reflect, and seek a different community. Safety and healthy boundaries matter.' }
    ],
    commonMistakes: ['Assuming one mosque represents every Muslim culture.', 'Sharing private information too quickly.', 'Thinking you must look experienced before you can attend.'],
    reflection: 'What would make your first mosque visit feel safe and useful?',
    sources: [...baseSources],
    plus: [
      'Community-evaluation checklist.',
      'First-visit scenario practice.',
      'Question bank for finding a teacher and evaluating religious advice.'
    ]
  },
  jumuah: {
    why: 'Jumu’ah is the Friday congregational prayer and a major weekly gathering in Muslim communities. A new Muslim may hear different language for what happens before, during, and after the prayer. Start with the basic picture, then learn the details from your local mosque and school of practice.',
    sections: [
      { title: 'Friday as a weekly gathering', body: 'Jumu’ah combines worship and community. The gathering often includes a sermon (khutbah) followed by congregational prayer. The exact organisation of the mosque can vary.' },
      { title: 'Arriving', body: 'Arrive with enough time to find your place and settle. If you are unsure where newcomers or visitors should sit, ask. A friendly mosque should be able to answer without embarrassment.' },
      { title: 'Listening to the khutbah', body: 'The sermon is part of the Friday experience and can be delivered in Arabic, the local language, or both depending on the community. Beginners may not understand every word. Focus on the main message and ask for an explanation later if needed.' },
      { title: 'Congregational prayer', body: 'Follow the imam and the people around you while staying calm. You are learning the physical rhythm of congregation at the same time as the religious meaning.' },
      { title: 'Community after prayer', body: 'Friday can be an opportunity to introduce yourself and ask for help, but you are not required to become socially available to everyone. Choose the conversations that help you learn and feel safe.' }
    ],
    practice: 'Before your next Friday visit, prepare three questions about the local mosque: where to enter, where newcomers can ask for help, and when the khutbah begins.',
    commonQuestions: [
      { q: 'Is the Friday sermon always in Arabic?', a: 'No. Mosque language and sermon format vary by community.' },
      { q: 'What if I do not know the congregation’s movements?', a: 'Follow a calm person nearby and ask a teacher to explain afterward.' },
      { q: 'Do I need to know every Friday etiquette rule first?', a: 'No. Learn the basics and improve with experience.' }
    ],
    commonMistakes: ['Trying to copy every cultural custom immediately.', 'Skipping Friday because you are worried about being judged.', 'Treating one mosque’s arrangement as the only possible arrangement.'],
    reflection: 'What kind of weekly community connection would help your learning most?',
    sources: [...baseSources],
    plus: [
      'Friday preparation checklist.',
      'Mosque scenario drills.',
      'Guided notes on common congregational differences.'
    ]
  },
  'duas-dhikr': {
    why: 'Dua means supplication—asking Allah and turning to Him. Dhikr means remembrance and can include established phrases of praise and remembrance. Beginners can easily confuse the two because both involve words directed to Allah. Learning the distinction makes everyday worship easier to understand.',
    sections: [
      { title: 'Dua', body: 'Dua is personal supplication. You can ask Allah for help, forgiveness, guidance, gratitude, strength, or ordinary needs. A beginner does not need elaborate Arabic to understand the idea of turning toward Allah in prayer.' },
      { title: 'Dhikr', body: 'Dhikr includes remembrance such as phrases of praise and glorification. Some forms are established in transmitted sources and used in particular contexts, while others are general remembrance. A teacher can help you distinguish established formulas from personal wording.' },
      { title: 'Learn a few phrases well', body: 'Start with short, common phrases such as Bismillah, Alhamdulillah, SubhanAllah, Allahu Akbar, and Astaghfirullah. Learn their meanings and contexts rather than collecting dozens of phrases without understanding.' },
      { title: 'Use worship in ordinary moments', body: 'Dhikr can be connected to ordinary life: beginning a task, thanking Allah, seeking forgiveness after a mistake, or remembering Him while walking or travelling. These small practices help religion become part of the day instead of a separate compartment.' },
      { title: 'Do not turn remembrance into magic words', body: 'A phrase is not a spell that guarantees an outcome independent of Allah. Learn what the words mean, why they are used, and what intention sits behind them.' }
    ],
    practice: 'Choose three short phrases and write their meanings. Use each appropriately during the day rather than repeating everything at random.',
    commonQuestions: [
      { q: 'Can I make dua in my own language?', a: 'Outside formal prayer, personal supplication can be made in a language you understand. Prayer-specific wording has more detailed rulings.' },
      { q: 'Do I have to memorise many duas?', a: 'No. A few meaningful, well-understood duas are a better start.' },
      { q: 'What if I forget a phrase?', a: 'Return to it later. Forgetting does not mean you are failing.' }
    ],
    commonMistakes: ['Treating phrases as superstition.', 'Memorising words without meaning.', 'Trying to learn too many supplications at once.'],
    reflection: 'Which short phrase feels most natural for you to use during an ordinary day?',
    sources: ['Quran 20:114: “My Lord, increase me in knowledge.” urlRead sourcehttps://quran.com/20/114', ...baseSources],
    plus: [
      'Context-based dua and dhikr library.',
      'Memorisation review system.',
      'Scenarios for gratitude, fear, mistakes, study, travel, and daily routines.'
    ]
  },
  ramadan: {
    why: 'Ramadan is the month of fasting, but a beginner who only thinks about hunger misses much of the month’s purpose. Ramadan brings together worship, Quran, charity, self-control, gratitude, community, and a deliberate change of routine.',
    sections: [
      { title: 'The basic fast', body: 'The daily Ramadan fast is observed from dawn to sunset in the normal circumstances described by Islamic law. The practical rules include more than simply avoiding food; they involve intention, the fasting window, and recognised actions that affect the fast.' },
      { title: 'The spiritual purpose', body: 'The Quran connects fasting with taqwa, often explained as God-consciousness or mindful awareness of Allah. That means Ramadan is not a weight-loss challenge. It is an opportunity to practise restraint, gratitude, worship, and care for other people.' },
      { title: 'The Ramadan rhythm', body: 'A beginner may need to plan sleep, work, hydration outside the fasting window, suhur, breaking the fast, prayer, Quran, and family commitments. Start with a realistic structure rather than promising yourself ten new worship goals.' },
      { title: 'Community and generosity', body: 'Ramadan often increases charitable giving, communal meals, Quran recitation, and mosque activity. New Muslims can take part at a level that fits their circumstances. You do not need to reproduce someone else’s family culture to have a meaningful Ramadan.' },
      { title: 'Personal exemptions matter', body: 'Illness, travel, pregnancy, breastfeeding, menstruation, age, and other circumstances can affect fasting rulings. Because health and individual facts matter, learn the general framework here and seek qualified guidance for personal cases.' }
    ],
    practice: 'Design a realistic Ramadan day containing one prayer goal, one Quran goal, one character goal, and one act of generosity. Keep all four achievable.',
    commonQuestions: [
      { q: 'Is Ramadan only about food and drink?', a: 'No. Worship, character, Quran, charity, community, and self-control are central parts of the month.' },
      { q: 'What if I am unsure whether I can fast safely?', a: 'Ask a qualified religious teacher and, where health is involved, an appropriate healthcare professional.' },
      { q: 'Do I need to copy other Muslims’ Ramadan routines?', a: 'No. Build a sustainable routine that suits your actual circumstances.' }
    ],
    commonMistakes: ['Setting unrealistic worship targets.', 'Ignoring sleep and work planning.', 'Guessing at personal health-related rulings.'],
    reflection: 'Which part of Ramadan do you want to understand most: fasting, Quran, prayer, generosity, or community?',
    sources: ['Quran 2:183 introduces the purpose of fasting for believers. urlRead sourcehttps://quran.com/2/183', ...baseSources],
    plus: [
      'A complete 30-day Ramadan plan.',
      'Daily reflection and worship trackers.',
      'Scenario guidance for travel, work, health questions, family expectations, and social events.'
    ]
  },
  fasting: {
    why: 'Fasting becomes easier to understand when you separate the general rule from the personal exceptions. A new Muslim should know the framework without trying to solve every health, travel, or jurisprudential edge case alone.',
    sections: [
      { title: 'The general framework', body: 'Ramadan fasting has a defined daily window. It involves deliberately abstaining from specified things while pursuing worship and restraint. The details of what breaks the fast can be studied gradually from a trusted school or teacher.' },
      { title: 'Health and safety', body: 'Some people have legitimate exemptions or concessions. If you have a health condition, medication schedule, pregnancy-related concern, or another medical issue, do not turn a generic article into a personal medical or religious ruling. Seek appropriate professional advice and qualified religious guidance.' },
      { title: 'Travel', body: 'Travel can affect fasting rulings and timing. The exact definition of travel and the legal consequences should be learned from a scholar or school rather than guessed from one social-media post.' },
      { title: 'Menstruation and postpartum bleeding', body: 'Islamic law contains specific rulings around menstruation and postpartum bleeding. These topics are normal parts of religious learning, but because they involve private individual details, a trusted teacher can provide better guidance than a public comment section.' },
      { title: 'What if I make a mistake?', body: 'Do not automatically assume every accidental act has the same consequence. Record what happened and ask a qualified teacher. This is an area where calm, accurate guidance is more useful than panic.' }
    ],
    practice: 'Write a personal “ask a scholar” list for fasting. Put every question involving your own health, travel, medication, or private circumstances on that list instead of trying to solve it from generic material.',
    commonQuestions: [
      { q: 'Can I take personal medical advice from an app?', a: 'No. Health decisions require appropriate healthcare advice, and the religious side may require qualified scholarship as well.' },
      { q: 'What if I accidentally eat or drink?', a: 'The ruling depends on the circumstances and school of law; ask qualified guidance rather than assuming the worst.' },
      { q: 'What if my work is physically demanding?', a: 'Plan ahead and ask qualified religious guidance, especially if safety or health is involved.' }
    ],
    commonMistakes: ['Treating internet comments as personal fatwas.', 'Ignoring medical safety.', 'Assuming every mistake has the same ruling.'],
    reflection: 'How could you prepare for a future Ramadan in a way that protects both worship and your responsibilities?',
    sources: ['Quran 2:183 and recognised fiqh resources for detailed rulings.', ...baseSources],
    plus: [
      'Personal scenario drills for fasting questions.',
      'A decision tree for when to seek scholar or healthcare guidance.',
      'Daily Ramadan review and problem-solving exercises.'
    ]
  },
  charity: {
    why: 'Islam teaches generosity, but new Muslims often hear the words zakah and sadaqah used as though they mean the same thing. They do not. Understanding the difference prevents confusion and stops beginners from trying to calculate an obligation they may not yet understand.',
    sections: [
      { title: 'Sadaqah', body: 'Sadaqah is voluntary charity and generosity. It can include money, practical help, kindness, and other forms of benefit. It teaches the learner to think beyond “what do I have to do?” and toward “how can I benefit someone else?”' },
      { title: 'Zakah', body: 'Zakah is a specific obligatory form of giving with legal conditions. The amount is not a universal percentage of every possession, and eligibility depends on the type of wealth and other conditions. Learn the framework before touching personal calculations.' },
      { title: 'Who receives charity', body: 'Islamic teaching contains categories and rules around eligible recipients for zakah. Voluntary charity can be broader. A mosque, reputable charity, or scholar can help a new Muslim understand local practice and appropriate channels.' },
      { title: 'Dignity matters', body: 'Giving is not an excuse to humiliate recipients. A healthy charitable mindset protects dignity, avoids performative generosity, and thinks about long-term benefit rather than only public visibility.' },
      { title: 'Start small', body: 'A learner with little money can still practise generosity. Time, practical support, food, knowledge, and kindness all matter. The goal is to make generosity a habit before wealth makes the decision for you.' }
    ],
    practice: 'Do one act of sadaqah today that costs you effort rather than money. Notice how it changes your attention toward another person.',
    commonQuestions: [
      { q: 'Is every kind act zakah?', a: 'No. Zakah is a specific obligatory form of giving with conditions.' },
      { q: 'Can a new Muslim give sadaqah?', a: 'Yes. Voluntary charity is part of generosity and community life.' },
      { q: 'How do I calculate personal zakah?', a: 'Use qualified local guidance because the calculation depends on your actual assets and circumstances.' }
    ],
    commonMistakes: ['Thinking zakah is simply “give 2.5% of everything.”', 'Treating public giving as superior to private giving.', 'Giving without checking whether a cause is trustworthy.'],
    reflection: 'What kind of generosity is easiest for you: money, time, practical help, or encouragement?',
    sources: [...baseSources],
    plus: [
      'Zakah concept lessons before personal calculation.',
      'Scenario practice around income, savings, assets, and questions to ask a scholar.',
      'Charity planning tools that prioritise dignity and trust.'
    ]
  },
  hajj: {
    why: 'Hajj is a major pillar of Islam, but a new Muslim does not need to master its detailed rites immediately. The first step is to understand what Hajj represents, why it is required for those able to undertake it, and how it connects to Ibrahim, pilgrimage, sacrifice, and the worldwide Muslim community.',
    sections: [
      { title: 'What Hajj is', body: 'Hajj is the pilgrimage to Makkah performed at a specific time of the Islamic year. It includes a series of rites and movements. It is an obligation once in a lifetime for Muslims who are able to undertake it under the relevant conditions.' },
      { title: 'The story of Ibrahim', body: 'Hajj is deeply connected to the story and legacy of Ibrahim and his family. The rites remind Muslims of obedience, trust, sacrifice, and the call to worship Allah. Beginners can study the story before learning the legal details.' },
      { title: 'Equality and community', body: 'Pilgrims come from different languages, nations, and economic backgrounds. The pilgrimage makes the worldwide community visible and places all pilgrims within a shared framework of worship.' },
      { title: 'Umrah', body: 'Umrah is a pilgrimage to Makkah that can be performed outside the main Hajj period. It has its own rites. A beginner should treat it as a separate study topic rather than assuming the two pilgrimages are identical.' },
      { title: 'Do not rush into travel decisions', body: 'Detailed pilgrimage is expensive, logistically complex, and religiously specific. When the time comes, use qualified guidance and reputable travel providers. Hidayah gives the foundation, not a substitute for a pilgrimage teacher.' }
    ],
    practice: 'Explain in three paragraphs: what Hajj is, why Ibrahim matters, and why Hajj is connected to the idea of the worldwide Muslim community.',
    commonQuestions: [
      { q: 'Do all Muslims have to perform Hajj immediately?', a: 'Hajj is required once in a lifetime for those who are able under its conditions.' },
      { q: 'Is Umrah the same as Hajj?', a: 'No. They are related but distinct acts of pilgrimage with different timing and rites.' },
      { q: 'Should I worry about Hajj now as a brand-new Muslim?', a: 'Learn the concept, then focus on your immediate foundations such as belief and prayer.' }
    ],
    commonMistakes: ['Trying to memorise Hajj rites before basic worship is stable.', 'Assuming every travel package provides religious guidance.', 'Confusing cultural pilgrimage customs with the rites themselves.'],
    reflection: 'Which theme of Hajj speaks most strongly to you: obedience, sacrifice, equality, or community?',
    sources: [...baseSources],
    plus: [
      'A visual Hajj journey from preparation to completion.',
      'Ibrahim and pilgrimage study sequence.',
      'Scenario planning for first-time pilgrims and questions to ask qualified guides.'
    ]
  },
  halal: {
    why: 'Halal and haram are often treated online as a giant list of forbidden products. A better beginner approach is to learn the categories, understand that legal rulings can have levels, and know when a question needs a scholar who can examine the evidence and your circumstances.',
    sections: [
      { title: 'Basic meanings', body: 'Halal means permissible and haram means prohibited. Islamic law also discusses categories such as obligatory, recommended, and disliked. That means not every decision is a two-option emergency.' },
      { title: 'Food as a beginner topic', body: 'Food questions often involve ingredients, processing, slaughter, alcohol, contamination, and certification. The correct answer can depend on facts that a social-media post does not know. When a product matters to you, learn how your school and trusted local authority assess it.' },
      { title: 'Beyond food', body: 'Halal and haram also appear in finance, contracts, relationships, clothing, speech, business, and personal conduct. The learner should therefore avoid thinking of “halal” as only a food label.' },
      { title: 'Difference of opinion', body: 'Recognised schools can differ on detailed issues. The existence of disagreement does not mean the religion has no rules. It means legal reasoning can produce more than one accepted position in some areas.' },
      { title: 'Do not live in fear of hidden sin', body: 'A healthy course teaches boundaries clearly but does not make the learner suspicious of every ordinary action. Learn the actual rule, follow a coherent method, and ask for help where the issue is genuinely complex.' }
    ],
    practice: 'Choose one everyday halal question. Write the exact product or action, what you already know, what fact is missing, and which trustworthy source you would ask.',
    commonQuestions: [
      { q: 'Is halal only about food?', a: 'No. It can apply to many areas of life.' },
      { q: 'Can scholars disagree?', a: 'Yes, especially on detailed legal questions.' },
      { q: 'What should I do if two trusted people disagree?', a: 'Ask what evidence and legal method each is using, and seek coherent guidance instead of collecting endless opinions.' }
    ],
    commonMistakes: ['Treating every internet list as complete law.', 'Assuming disputed issues have one universal answer.', 'Letting fear make ordinary life impossible.'],
    reflection: 'How can you learn Islamic boundaries without becoming afraid that every ordinary action is a trap?',
    sources: [...baseSources],
    plus: [
      'A source-aware method for food, finance, and everyday questions.',
      'Scenario practice for disagreement between scholars.',
      'A “clear ruling versus disputed detail” learning framework.'
    ]
  },
  character: {
    why: 'A new Muslim can learn a hundred definitions and still miss a major part of Islam if the learning never changes behaviour. Character is where belief becomes visible in ordinary relationships: honesty when lying would be easier, patience when irritated, justice when nobody is watching, and mercy without becoming weak or boundaryless.',
    sections: [
      { title: 'Truthfulness', body: 'Truthfulness is more than avoiding obvious lies. It includes accurate speech, honest promises, and refusing to create a false impression for personal advantage. Beginners can practise by catching small exaggerations and correcting them.' },
      { title: 'Patience and self-control', body: 'Sabr is often translated as patience, but the concept includes perseverance and steadfastness. It can look like staying calm in a difficult conversation, continuing a good habit after the excitement disappears, or refusing to react with cruelty when you are angry.' },
      { title: 'Mercy and boundaries', body: 'Good character does not mean accepting abuse. Islam teaches mercy and justice together. A healthy learner can be compassionate while saying no, protecting privacy, ending harmful conversations, or leaving unsafe environments.' },
      { title: 'Repairing harm', body: 'A mature religious life includes apology and repair. When you hurt someone, do not hide behind religious language. Admit the wrong, correct what you can, and learn what triggered the behaviour.' },
      { title: 'Character in ordinary places', body: 'Work, traffic, queues, family chats, online comments, and money decisions are all places to practise character. The point is not to perform piety only in a mosque. It is to let worship reshape ordinary habits.' }
    ],
    practice: 'Choose one behaviour for seven days: tell the truth when exaggeration would be easier, apologise more quickly, keep one promise carefully, or pause before speaking in anger.',
    commonQuestions: [
      { q: 'Can good character replace worship?', a: 'No. Islam joins worship with character and responsibility.' },
      { q: 'What if someone treats me badly?', a: 'Good character does not require accepting abuse. Boundaries and safety still matter.' },
      { q: 'How do I build patience?', a: 'Practise small moments of restraint repeatedly instead of waiting to become a different person overnight.' }
    ],
    commonMistakes: ['Confusing gentleness with no boundaries.', 'Using religion to excuse bad treatment of others.', 'Focusing on public religious appearance while ignoring ordinary conduct.'],
    reflection: 'Which character habit would most improve the way you treat the people around you?',
    sources: ['Sahih Muslim 41 teaches a broad ethic of keeping others safe from one’s tongue and hand. urlRead sourcehttps://sunnah.com/muslim/1/69', ...baseSources],
    plus: [
      'Weekly character training with triggers, replacement behaviours, and review.',
      'Real-life scenario coaching for conflict, anger, gossip, money, and boundaries.',
      'A private reflection journal structure.'
    ]
  },
  family: {
    why: 'Becoming Muslim can affect family relationships in very different ways. Some families are supportive, some are confused, some are hostile, and some are simply worried because they do not understand what is happening. A useful course helps you think carefully instead of telling every new Muslim to make one dramatic announcement immediately.',
    sections: [
      { title: 'You can move at a safe pace', body: 'Not every learner is equally safe. Some people rely on family for housing, money, transportation, or physical safety. That reality matters. A religious learning plan should not force a person into unnecessary danger. You can learn while you plan.' },
      { title: 'Explain simply', body: 'When a family member asks questions, you do not need a theological lecture. A simple explanation of what you believe and why you are learning can be easier to hear. Focus on your values, your respect for them, and the fact that you are still learning.' },
      { title: 'Boundaries', body: 'A person can say “I am happy to talk, but I do not want insults” or “I am not ready to discuss that private part yet.” Boundaries are not disrespect. They are a way of keeping relationships possible without surrendering dignity.' },
      { title: 'Do not turn every disagreement into a debate', body: 'Some conversations are not actually requests for information. They are emotional reactions. Listening can sometimes do more than trying to win every point. Choose the conversation you are capable of having.' },
      { title: 'Safety', body: 'If disclosure could lead to violence, homelessness, financial control, or serious threats, prioritise safety. Seek appropriate local support and trusted people. Religious guidance should be sensitive to real-world risk rather than giving simplistic instructions.' }
    ],
    practice: 'Write two boundary sentences you could use in a difficult conversation and two sentences explaining your beliefs without attacking anyone else’s religion.',
    commonQuestions: [
      { q: 'Do I have to announce my conversion publicly?', a: 'There is no need to ignore real safety concerns. Personal circumstances matter.' },
      { q: 'What if family members mock me?', a: 'Use calm boundaries where safe and seek support.' },
      { q: 'Should I argue every point?', a: 'No. A respectful relationship often requires choosing what to discuss and when.' }
    ],
    commonMistakes: ['Sharing private information before trust exists.', 'Assuming family reactions are predictable.', 'Turning every conversation into a debate.'],
    reflection: 'What kind of support would make your family situation easier while you learn?',
    sources: [...baseSources],
    plus: [
      'Conversation scripts for different family reactions.',
      'Scenario practice for pressure, questions, and boundaries.',
      'A private safety-and-support planning worksheet.'
    ]
  },
  'work-money': {
    why: 'Most of Muslim life happens outside the mosque. Work, study, buying things, paying bills, earning money, managing debt, and dealing with colleagues are not separate from faith. They are places where honesty, fairness, responsibility, and lawful earning become real.',
    sections: [
      { title: 'Integrity at work', body: 'Being Muslim at work does not mean turning every conversation into a religious conversation. It can mean keeping promises, being truthful in reports, handling money carefully, respecting colleagues, and refusing to take advantage of people.' },
      { title: 'Earning and spending', body: 'Islamic teachings on money include lawful earning, avoidance of certain prohibited transactions, charity, debt responsibility, and stewardship. The broad principle is easier to learn first; detailed financial contracts need qualified expertise.' },
      { title: 'Contracts and finance', body: 'Online discussions can make Islamic finance sound like one universal rule. In practice, questions about loans, interest, investments, insurance, contracts, and business models can depend on the exact structure. For a real financial decision, give a qualified scholar the actual facts rather than asking a generic chatbot.' },
      { title: 'Identity and workplace boundaries', body: 'You can explain your religious needs without turning your entire identity into a work project. Requests around prayer breaks, food, dress, or scheduling can often be handled professionally and respectfully.' },
      { title: 'Avoid pressure', body: 'A healthy religious teacher should not use your new faith to pressure you into financial commitments you do not understand. Keep control of your money and ask questions before signing anything.' }
    ],
    practice: 'List three situations at work or school where your faith might affect your routine. Write a respectful sentence you could use in each situation.',
    commonQuestions: [
      { q: 'Should I ask AI whether a specific investment is halal?', a: 'Use AI for general learning, then seek qualified guidance for a real financial decision.' },
      { q: 'Can Muslim practice fit normal professional life?', a: 'Yes. Muslims work, study, and participate in ordinary society while observing their religious commitments.' },
      { q: 'What if someone pressures me to donate or buy something because I am new?', a: 'Slow down. Religious belonging should not require financial pressure.' }
    ],
    commonMistakes: ['Treating generic financial articles as personal rulings.', 'Letting religion become a reason to neglect work responsibilities.', 'Giving money under pressure because you want acceptance.'],
    reflection: 'What would it look like to practise Islam with integrity in an ordinary workday?',
    sources: [...baseSources],
    plus: [
      'Scenario training for workplace prayer, food, scheduling, contracts, and financial pressure.',
      'A checklist for bringing a real contract or financial question to a qualified scholar.',
      'Practical habit planning for faith alongside work and study.'
    ]
  },
  community: {
    why: 'A new Muslim needs people, but not every religious environment is equally healthy. The right community helps you learn, ask questions, and become independent. The wrong environment can make you dependent, frightened, financially pressured, or ashamed to ask questions.',
    sections: [
      { title: 'What healthy support looks like', body: 'Healthy community welcomes sincere questions, protects privacy, respects family realities, and encourages learning. It does not need constant access to your personal life to support your faith.' },
      { title: 'Find more than one source of support', body: 'A mosque, a teacher, a peer group, a trusted friend, and a good book can all play different roles. No single person needs to become the unquestioned authority over every aspect of your life.' },
      { title: 'Red flags', body: 'Be cautious when someone demands money, isolates you from family and other Muslims, says only their group is authentic, claims special access to God, or tells you to obey them without questions. Strong religious confidence is not the same as healthy authority.' },
      { title: 'Different cultures', body: 'Muslim communities are culturally diverse. Food, clothing, language, social customs, and mosque styles can differ while the core religion remains recognisable. You do not need to adopt every local custom to be a “real” Muslim.' },
      { title: 'Build independence', body: 'A good teacher should help you learn how to read sources, ask questions, and make sensible decisions. Over time you should become more capable of learning without constant reassurance.' }
    ],
    practice: 'Evaluate one community or teacher with five questions: Do they welcome questions? Respect privacy? Explain sources? Avoid pressure? Help me become more independent?',
    commonQuestions: [
      { q: 'Do I need to join one specific group?', a: 'Focus on learning Islam responsibly and finding healthy community rather than chasing labels.' },
      { q: 'What if I do not fit the local culture?', a: 'You are not required to become culturally identical to everyone around you.' },
      { q: 'What if a teacher pressures me?', a: 'You can step back and seek another source.' }
    ],
    commonMistakes: ['Confusing culture with creed.', 'Giving one person total control over religious decisions.', 'Staying in an unhealthy environment because you fear leaving means leaving Islam.'],
    reflection: 'What would make a Muslim community feel genuinely safe and welcoming to you?',
    sources: [...baseSources],
    plus: [
      'Community red-flag and green-flag guide.',
      'Teacher evaluation checklist.',
      'Scenario practice for group pressure, disagreement, money requests, and privacy.'
    ]
  },
  'hard-days': {
    why: 'Not every day of faith feels inspiring. Sometimes work is exhausting, family life is difficult, questions pile up, or worship feels heavy. A new Muslim needs a model of Islam that can survive ordinary human limits without turning every hard week into a crisis.',
    sections: [
      { title: 'Do less, not nothing', body: 'On difficult days, reduce the target instead of declaring the entire routine a failure. One short lesson, one prayer you focus on learning, one dua, or one honest question can keep the connection alive.' },
      { title: 'Separate guilt from responsibility', body: 'Healthy accountability says “I need to improve this.” Unhealthy shame says “I am a terrible person, so there is no point.” Those are not the same. Learn to correct behaviour without attacking your own worth.' },
      { title: 'Avoid comparison', body: 'Social media shows polished snapshots of other people’s worship. You do not know what their private life is like. Compare today with your own previous habits rather than someone else’s highlight reel.' },
      { title: 'Rest matters', body: 'Sleep, work, family responsibilities, and ordinary life are not evidence that you are failing Islam. A sustainable routine includes rest. Do not create a religious schedule that can only survive ideal conditions.' },
      { title: 'Ask for human support', body: 'A real conversation with a trusted person can sometimes solve what another article cannot. If distress becomes severe or involves immediate safety concerns, use appropriate professional or emergency support in your area as well as spiritual guidance.' }
    ],
    practice: 'Create a “minimum day” plan with one two-minute learning or worship action that you can do when energy is low.',
    commonQuestions: [
      { q: 'Does missing a routine mean I failed?', a: 'No. Return and continue.' },
      { q: 'Should I force myself to do everything?', a: 'Sustainable practice is generally better than harsh routines that collapse.' },
      { q: 'What if I feel spiritually lost?', a: 'Reduce overload, reconnect with basics, talk to a trusted person, and seek appropriate support.' }
    ],
    commonMistakes: ['Treating one bad day as a permanent failure.', 'Using shame as motivation.', 'Adding more content when the real problem is overload.'],
    reflection: 'What would gentle consistency look like in your real life, not your ideal life?',
    sources: ['Sahih Muslim 38 contains a concise teaching about believing in Allah and remaining steadfast. urlRead sourcehttps://sunnah.com/muslim/1/66', ...baseSources],
    plus: [
      '30-day resilience and consistency plan.',
      'Reflection journal prompts and habit review.',
      'Scenario coaching for doubt, comparison, burnout, family conflict, and information overload.'
    ]
  },
  eid: {
    why: 'Eid is a celebration within Muslim life, not a test of whether you have mastered every cultural tradition. Eid al-Fitr follows Ramadan, while Eid al-Adha occurs during the Hajj season. The religious core is shared even though the food, clothing, language, and family customs around it can vary widely.',
    sections: [
      { title: 'Eid al-Fitr', body: 'Eid al-Fitr follows the month of Ramadan and is associated with prayer, gratitude, celebration, generosity, and community. Local practice can differ, so ask your mosque about prayer time and arrangements.' },
      { title: 'Eid al-Adha', body: 'Eid al-Adha occurs during the Hajj season and is connected to the story of Ibrahim and the broader themes of sacrifice, obedience, gratitude, and generosity.' },
      { title: 'Prayer and community', body: 'Many communities begin Eid with a congregational prayer and sermon. A new Muslim does not need to memorise every etiquette detail before attending. Ask someone to explain what happens locally.' },
      { title: 'Culture versus religion', body: 'Traditional foods, clothes, greetings, and family celebrations can be beautiful without being universal religious requirements. Learn to distinguish what is a core act from what is a local custom.' },
      { title: 'Your first Eid', body: 'You may not have a large Muslim family yet. That does not mean Eid cannot be meaningful. Attend community prayer, accept invitations that feel safe, call a supportive person, share food, give charity, and celebrate your progress.' }
    ],
    practice: 'Make your first-Eid plan with three things: one worship action, one community action, and one act of generosity.',
    commonQuestions: [
      { q: 'Do I need new clothes?', a: 'Cultural practice varies; do not assume every custom is a universal requirement.' },
      { q: 'What if I have no Muslim family nearby?', a: 'Mosques and community events can provide connection.' },
      { q: 'What if I feel awkward at my first Eid?', a: 'Tell someone you are new and ask them to help you navigate the day.' }
    ],
    commonMistakes: ['Treating culture as law.', 'Comparing your first Eid with another family’s tradition.', 'Spending beyond your means because of social pressure.'],
    reflection: 'What would make Eid meaningful for you rather than stressful?',
    sources: [...baseSources],
    plus: [
      'First-Eid preparation guide.',
      'Scenario practice for invitations, mosque etiquette, finances, and family expectations.',
      'A cultural-versus-religious learning guide.'
    ]
  }
};
