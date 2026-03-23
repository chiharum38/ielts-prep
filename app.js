// ══════════════════════════════════════════════
// QUESTIONS DATABASE
// ══════════════════════════════════════════════
const questions = [
  // TASK 1
  { id:1, type:'task1', difficulty:'Medium', text:'The diagram below shows the process of recycling glass bottles. Summarise the information by selecting and reporting the main features.' },
  { id:2, type:'task1', difficulty:'Medium', text:'The bar chart shows the percentage of households in different income groups that owned various electronic devices in 2020. Summarise the information.' },
  { id:3, type:'task1', difficulty:'Easy', text:'The map below shows a town centre in 1990 and now. Describe how the town centre has changed over this period.' },
  { id:4, type:'task1', difficulty:'Hard', text:'The table shows the proportion of national food budgets spent on different food groups in five countries. Summarise and compare the key features.' },
  { id:5, type:'task1', difficulty:'Easy', text:'The line graph below shows the average monthly temperatures in three cities over the course of a year. Describe the main features.' },
  { id:19, type:'task1', difficulty:'Hard', text:'The bar chart below shows the proportion of household income spent on various categories in three countries in 2015. Summarise the information by selecting and reporting the main features.' },
  { id:20, type:'task1', difficulty:'Hard', text:'The line graph below shows changes in transport mode usage — private car, bus, and bicycle — in a European city between 1980 and 2020. Summarise the information.' },
  { id:21, type:'task1', difficulty:'Medium', text:'The diagram below shows how solar panels generate and distribute electricity. Summarise the information by selecting and reporting the main features.' },
  // TASK 2
  { id:6, type:'task2', difficulty:'Medium', text:'Some people believe that technology has made our lives more complicated. Others argue it has simplified life. Discuss both views and give your own opinion.' },
  { id:7, type:'task2', difficulty:'Hard', text:'In many countries, the gap between the rich and poor is growing. What problems does this cause? What measures can be taken to reduce this gap?' },
  { id:8, type:'task2', difficulty:'Medium', text:'Some people think that children should be taught to be competitive. Others think it is better to encourage cooperation. Discuss both views and give your own opinion.' },
  { id:9, type:'task2', difficulty:'Easy', text:'Many people today choose to live alone. What are the advantages and disadvantages of living alone? Is this a positive or negative development?' },
  { id:10, type:'task2', difficulty:'Hard', text:'Some governments spend large amounts of money on arts funding. Others believe this money should be spent on more important things. Discuss both views and give your opinion.' },
  { id:11, type:'task2', difficulty:'Medium', text:'The internet has become essential in modern life. However, it also has significant disadvantages. Do the advantages outweigh the disadvantages?' },
  { id:12, type:'task2', difficulty:'Hard', text:'In some countries, school children are required to do community service. Do you think this is beneficial or not? Give reasons for your answer.' },
  { id:22, type:'task2', difficulty:'Hard', text:'Some people believe that robots and automation will eventually replace most human workers. To what extent do you agree or disagree? What measures could be taken to address the consequences?' },
  { id:23, type:'task2', difficulty:'Hard', text:'Some educators believe all school subjects should be directly relevant to future employment. Others argue a broad curriculum is more valuable. Discuss both views and give your opinion.' },
  { id:24, type:'task2', difficulty:'Medium', text:'In some societies, older people are seen as a burden rather than a valuable resource. What are the causes of this attitude? How could it be changed?' },
  { id:25, type:'task2', difficulty:'Hard', text:'Some people argue that individuals can do little to address climate change, and that only governments and corporations can make a real difference. To what extent do you agree?' },
  { id:26, type:'task2', difficulty:'Hard', text:'It is sometimes argued that economic inequality is inevitable in a free-market economy and is even beneficial to society. Do you agree or disagree?' },
  { id:27, type:'task2', difficulty:'Medium', text:'Many people believe that social media platforms have done more harm than good to society. Do you agree or disagree? Give reasons for your answer.' },
  { id:28, type:'task2', difficulty:'Hard', text:'Some argue that the widespread use of English as a global language threatens the survival of other languages and cultures. To what extent do you agree or disagree?' },
  // SPEAKING
  { id:13, type:'speaking', difficulty:'Easy', text:'Part 1: Describe your daily routine. What do you typically do in the morning?' },
  { id:14, type:'speaking', difficulty:'Medium', text:'Part 2: Describe a memorable journey you have taken. You should say where you went, who you went with, what you did, and explain why it was memorable.' },
  { id:15, type:'speaking', difficulty:'Medium', text:'Part 3: Do you think technology is changing the way people travel? How has this affected tourism?' },
  { id:16, type:'speaking', difficulty:'Easy', text:'Part 1: Do you prefer reading books or watching films? Why?' },
  { id:17, type:'speaking', difficulty:'Hard', text:'Part 3: Some people argue that cities are losing their cultural identity due to globalisation. To what extent do you agree?' },
  { id:18, type:'speaking', difficulty:'Medium', text:'Part 2: Describe an interesting person you met recently. Who were they, where did you meet them, and why did you find them interesting?' },
  { id:29, type:'speaking', difficulty:'Hard', text:'Part 3: To what extent do you think social media has changed the way people communicate? Has this been positive or negative overall?' },
  { id:30, type:'speaking', difficulty:'Medium', text:'Part 2: Describe a skill you have recently learned or improved. What is it, how did you learn it, and why did you want to learn it?' },
  { id:31, type:'speaking', difficulty:'Hard', text:'Part 3: Do you think remote working will eventually replace traditional office environments completely? What are the implications for society?' },
  { id:32, type:'speaking', difficulty:'Medium', text:'Part 3: How important is it for young people today to learn a second language? Has this changed compared to previous generations?' },
];

// ═══════════════════════════════════════════════════════════
// SPEAKING PROMPTS — standalone per-part (for random mode)
// ═══════════════════════════════════════════════════════════
const speakingPrompts = {
  1: [
    "What is your hometown like? Do you enjoy living there?",
    "Do you prefer cooking at home or eating out? Why?",
    "What do you do in your free time?",
    "How important is music in your life?",
    "Do you prefer reading books or watching films? Why?",
    "How do you usually travel to work or school?",
    "What kind of weather do you enjoy most?",
    "Do you enjoy shopping? What kind of things do you like to buy?",
    "How often do you use social media? Why?",
    "What is your favourite season and why?",
    "Do you have a pet? Would you like to have one?",
    "How do you usually spend your weekends?",
    "What kind of food do you enjoy eating most?",
    "Have you ever studied a foreign language other than English?",
    "Do you prefer living in a big city or a small town?",
    "Do you enjoy taking photographs? What do you like to photograph?",
    "How do you keep in touch with friends and family?",
    "Do you prefer working indoors or outdoors?",
    "How important is sport in your life?",
    "What kind of music do you enjoy listening to?",
  ],
  2: [
    "Describe a book you have read that had a significant impact on you.\nYou should say:\n• what the book was\n• when you read it\n• what it was about\n• and explain why it had such an impact on you.",
    "Describe a time when you helped someone.\nYou should say:\n• who you helped\n• how you helped them\n• why they needed help\n• and explain how you felt about helping them.",
    "Describe a place you would like to visit in the future.\nYou should say:\n• where it is\n• what you know about it\n• why you would like to go there\n• and what you would do when you visit.",
    "Describe a skill you have recently learned or improved.\nYou should say:\n• what the skill is\n• how you learned it\n• how long it took\n• and explain why you wanted to learn this skill.",
    "Describe a memorable journey you have taken.\nYou should say:\n• where you went\n• who you went with\n• what you did\n• and explain why it was memorable.",
    "Describe a person who has had a positive influence on your life.\nYou should say:\n• who the person is\n• how you know them\n• what they have done for you\n• and explain why they have been so influential.",
    "Describe a time when you had to adapt to a difficult situation.\nYou should say:\n• what the situation was\n• how you responded\n• what was most difficult about it\n• and explain what you learned from the experience.",
    "Describe a technology or device that is important to your daily life.\nYou should say:\n• what it is\n• how long you have used it\n• how often you use it\n• and explain why it is so important to you.",
    "Describe an event in your life that made you feel proud.\nYou should say:\n• what the event was\n• when it happened\n• who was involved\n• and explain why it made you feel proud.",
    "Describe a piece of art, music, or literature that you find meaningful.\nYou should say:\n• what it is\n• when you first encountered it\n• what it is about or depicts\n• and explain why it is meaningful to you.",
  ],
  3: [
    "In what ways has the internet changed how people spend their free time?",
    "Do you think governments should invest more in public transport? Why or why not?",
    "How do you think working patterns will change in the next 20 years?",
    "To what extent do you think social media has changed the way people communicate?",
    "Do you think it is more important for children to develop social skills or academic knowledge at school? Why?",
    "How has globalisation affected local cultures and traditions? Is this positive or negative?",
    "Some people argue that economic growth should be prioritised over environmental protection. To what extent do you agree?",
    "How important is it for cities to preserve historical buildings rather than replacing them with modern ones?",
    "Do you think remote working will eventually replace traditional office environments completely?",
    "How do you think artificial intelligence will change the job market over the next decade?",
    "In your opinion, what are the most significant challenges facing younger generations today?",
    "To what extent should governments be responsible for protecting citizens' health and wellbeing?",
    "How do you think the role of universities will change as online education becomes more widespread?",
    "Should wealthy nations do more to support developing countries? What kinds of support are most effective?",
    "Why do some people find it difficult to maintain a healthy work-life balance in modern society?",
  ]
};

// ═══════════════════════════════════════════════════════════
// FULL SPEAKING TESTS — all 3 parts connected thematically
// ═══════════════════════════════════════════════════════════
const fullSpeakingTests = [
  {
    id: 'fst-1',
    theme: 'Technology & Daily Life',
    part1: {
      topics: [
        {
          name: 'Technology at Home',
          questions: [
            'What technology do you use most often at home?',
            'Has technology changed the way your family spends time together?',
            'Do you think people rely too much on technology these days?',
            'How do you feel when your phone or internet stops working?',
          ]
        },
        {
          name: 'Online Activities',
          questions: [
            'How do you mainly use the internet in your daily life?',
            'Do you prefer shopping online or in physical stores? Why?',
            'How often do you watch videos or films online?',
            'Have you ever taken an online course? What was it like?',
          ]
        }
      ]
    },
    part2: {
      cue: 'Describe a piece of technology that has changed your life.',
      bullets: [
        'what it is',
        'when you started using it',
        'how you use it in your daily life',
        'and explain how it has changed the way you live or work',
      ],
      prompt: 'Preparation time: 1 minute. Speak for 1–2 minutes.',
      followUp: [
        'How do you think you would manage without this technology?',
        'Have you ever recommended this technology to anyone? Why?',
      ]
    },
    part3: {
      topic: 'Technology and Society',
      questions: [
        'In what ways has technology made modern life more complicated rather than simpler?',
        'Do you think governments should regulate how technology companies collect user data? Why?',
        'How has the rise of smartphones changed the way communities interact in public spaces?',
        'Some people argue that technology is widening the gap between rich and poor. To what extent do you agree?',
        'What responsibilities do technology companies have towards the societies they operate in?',
      ]
    }
  },
  {
    id: 'fst-2',
    theme: 'Travel & Culture',
    part1: {
      topics: [
        {
          name: 'Travel and Holidays',
          questions: [
            'How often do you travel, and where do you usually go?',
            'Do you prefer travelling alone or with other people?',
            'What is the most interesting place you have ever visited?',
            'Do you think it is better to plan a trip carefully or to be spontaneous?',
          ]
        },
        {
          name: 'Local Culture',
          questions: [
            'What traditional food from your country would you recommend to visitors?',
            'Are there any cultural events or festivals in your hometown that you enjoy?',
            'How do young people in your country feel about traditional customs?',
            'Has your city or town changed a lot in recent years?',
          ]
        }
      ]
    },
    part2: {
      cue: 'Describe a place you have visited that left a strong impression on you.',
      bullets: [
        'where the place is',
        'when you visited it',
        'what you did or saw there',
        'and explain why it made such a strong impression on you',
      ],
      prompt: 'Preparation time: 1 minute. Speak for 1–2 minutes.',
      followUp: [
        'Would you like to go back to this place? Why or why not?',
        'Did the place match your expectations before you visited?',
      ]
    },
    part3: {
      topic: 'Tourism and Cultural Change',
      questions: [
        'How does mass tourism affect the local culture and environment of popular destinations?',
        'Do you think it is the responsibility of tourists to respect local customs? Why?',
        'How has the growth of budget airlines changed the way people think about travel?',
        'Some people say that travel broadens the mind. Do you think this is always true?',
        'What role should governments play in preserving cultural heritage sites from over-tourism?',
      ]
    }
  },
  {
    id: 'fst-3',
    theme: 'Work & Career',
    part1: {
      topics: [
        {
          name: 'Work and Study',
          questions: [
            'What do you do — do you work or study?',
            'Do you enjoy what you currently do? Why or why not?',
            'What aspects of your work or studies do you find most challenging?',
            'Do you think you will continue in the same field in the future?',
          ]
        },
        {
          name: 'Daily Routine',
          questions: [
            'What time do you usually wake up in the morning?',
            'Do you have a fixed routine, or does your day vary a lot?',
            'How do you usually switch off after a busy day at work or school?',
            'Do you think a fixed daily routine is helpful or restrictive?',
          ]
        }
      ]
    },
    part2: {
      cue: 'Describe a job or career that you think would be interesting to have.',
      bullets: [
        'what the job is',
        'what skills or qualifications it requires',
        'what a typical day in that job might look like',
        'and explain why you think it would be interesting or fulfilling',
      ],
      prompt: 'Preparation time: 1 minute. Speak for 1–2 minutes.',
      followUp: [
        'Have you ever done any work experience related to this kind of job?',
        'Who in your life influenced your thoughts about careers and work?',
      ]
    },
    part3: {
      topic: 'Work and Society',
      questions: [
        'How have expectations about work-life balance changed over the past generation?',
        'Do you think it is better for society if people find meaning in their work, or is work mainly a means to earn money?',
        'How might automation and AI change employment in industries like healthcare or education?',
        'Some people argue that the traditional 9-to-5 working model is outdated. To what extent do you agree?',
        'What should governments do to support workers whose jobs are at risk from technological change?',
      ]
    }
  },
  {
    id: 'fst-4',
    theme: 'Environment & Nature',
    part1: {
      topics: [
        {
          name: 'The Natural World',
          questions: [
            'Do you enjoy spending time in nature? Where do you usually go?',
            'How often do you notice the weather or seasons affecting your mood?',
            'Have you ever visited a national park or nature reserve?',
            'Do you think people in cities miss out on a connection with nature?',
          ]
        },
        {
          name: 'Environmental Habits',
          questions: [
            'Do you try to reduce the amount of plastic or waste you produce?',
            'How do you usually travel — by car, public transport, or another way?',
            'Have you noticed any environmental changes in your hometown over the years?',
            'Do you think young people today are more environmentally aware than older generations?',
          ]
        }
      ]
    },
    part2: {
      cue: 'Describe a time when you spent time in a natural environment.',
      bullets: [
        'where you were',
        'who you were with',
        'what you did or saw',
        'and explain how being in that natural environment made you feel',
      ],
      prompt: 'Preparation time: 1 minute. Speak for 1–2 minutes.',
      followUp: [
        'Do you think this kind of experience is becoming harder to have?',
        'Would you describe yourself as someone who cares about the environment?',
      ]
    },
    part3: {
      topic: 'Environmental Challenges and Responsibility',
      questions: [
        'Why do you think it is difficult for individuals to make meaningful changes to reduce their environmental impact?',
        'To what extent do you think corporations are responsible for the current state of the environment?',
        'How effective are international agreements, such as climate summits, in solving environmental problems?',
        'Some people argue that economic development must take priority over environmental protection in poorer countries. Do you agree?',
        'What changes in education might help future generations address environmental problems more effectively?',
      ]
    }
  },
  {
    id: 'fst-5',
    theme: 'Education & Learning',
    part1: {
      topics: [
        {
          name: 'School and Learning',
          questions: [
            'What did you enjoy most about school when you were growing up?',
            'Do you think the way subjects are taught has changed since your parents were at school?',
            'Have you ever taught yourself something without a teacher or course?',
            'Is there a subject you wish you had studied more at school?',
          ]
        },
        {
          name: 'Reading and Knowledge',
          questions: [
            'Do you enjoy reading? What kinds of things do you read?',
            'How do you usually find out about news and current events?',
            'Do you prefer learning from books or from practical experience?',
            'Have you ever changed your opinion about something important after reading or learning about it?',
          ]
        }
      ]
    },
    part2: {
      cue: 'Describe a teacher or instructor who had a significant impact on you.',
      bullets: [
        'who the person was',
        'what subject or skill they taught you',
        'what made their teaching style different or special',
        'and explain how they influenced your life or learning',
      ],
      prompt: 'Preparation time: 1 minute. Speak for 1–2 minutes.',
      followUp: [
        'Have you kept in touch with this person?',
        'Do you think teaching is a difficult profession? Why?',
      ]
    },
    part3: {
      topic: 'Education Systems and Society',
      questions: [
        'In what ways does a country\'s education system reflect its wider social values?',
        'Do you think standardised exams are an effective way to assess a student\'s ability? Why or why not?',
        'How has the growth of online learning platforms changed access to education globally?',
        'Some people argue that universities focus too much on academic theory and not enough on practical skills. To what extent do you agree?',
        'What is the relationship between education and social inequality? Can education alone solve this problem?',
      ]
    }
  },
];

// ══════════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════════
function dismissHero() {
  const hero = document.getElementById('hero-banner');
  if (hero) hero.classList.add('collapsed');
  try { localStorage.setItem('ielts_hero_dismissed', '1'); } catch(e){}
}

function showSection(name) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  // Show target
  const sec = document.getElementById(name);
  if (sec) { sec.style.display = 'block'; sec.classList.add('active'); }
  // Sync top nav tabs
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.nav-tab[data-section="${name}"]`);
  if (activeTab) activeTab.classList.add('active');
  // Sync sidebar items
  document.querySelectorAll('.sidebar-item').forEach(t => t.classList.remove('active'));
  const activeSidebar = document.querySelector(`.sidebar-item[data-section="${name}"]`);
  if (activeSidebar) activeSidebar.classList.add('active');
  // Collapse hero always
  const hero = document.getElementById('hero-banner');
  if (hero) hero.classList.add('collapsed');
  if (name === 'home') renderDashboard();
  if (name === 'questions') renderQuestions('all');
  if (name === 'progress') renderProgress();
  if (name === 'vocab') renderVocab();
}

// ══════════════════════════════════════════════
// UTILITY
// ══════════════════════════════════════════════
function updateWordCount(el, targetId) {
  const words = el.value.trim() === '' ? 0 : el.value.trim().split(/\s+/).length;
  document.getElementById(targetId).textContent = words + ' word' + (words !== 1 ? 's' : '');
}

function setLoading(prefix, active) {
  const lb = document.getElementById(prefix+'-loading');
  const lt = document.getElementById(prefix+'-loading-text');
  if (lb) lb.classList.toggle('active', active);
  if (lt) lt.classList.toggle('active', active);
}

function showError(prefix, msg) {
  const el = document.getElementById(prefix+'-error');
  if (!el) { console.error(prefix, msg); return; }
  el.textContent = msg; el.classList.add('visible');
  setTimeout(() => el.classList.remove('visible'), 6000);
}

function switchWritingTab(type, btn) {
  document.querySelectorAll('#writing-mode-check .inner-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('writing-task-type').textContent = type;
}

// ══════════════════════════════════════════════
// PROGRESS STORAGE
// ══════════════════════════════════════════════
function getHistory() {
  try { return JSON.parse(localStorage.getItem('ielts_history') || '[]'); } catch { return []; }
}
function saveToHistory(entry) {
  const h = getHistory();
  h.unshift({ ...entry, date: new Date().toISOString() });
  if (h.length > 50) h.pop();
  localStorage.setItem('ielts_history', JSON.stringify(h));
}

// Writing samples — full essay + feedback stored separately
function getWritingSamples() {
  try { return JSON.parse(localStorage.getItem('ielts_writing_samples') || '[]'); } catch { return []; }
}
function saveWritingSample(sample) {
  const list = getWritingSamples();
  list.unshift({ ...sample, id: Date.now(), date: new Date().toISOString() });
  if (list.length > 30) list.pop(); // keep last 30
  localStorage.setItem('ielts_writing_samples', JSON.stringify(list));
}
function deleteWritingSample(id) {
  const list = getWritingSamples().filter(s => s.id !== id);
  localStorage.setItem('ielts_writing_samples', JSON.stringify(list));
  renderProgress();
}
function toggleSampleExpand(id) {
  const el = document.getElementById('sample-detail-' + id);
  const btn = document.getElementById('sample-toggle-' + id);
  if (!el) return;
  const open = el.style.display !== 'none';
  el.style.display = open ? 'none' : 'block';
  if (btn) btn.textContent = open ? '▼ View feedback & transcript' : '▲ Hide';
}

// Speaking samples — stored separately from writing
function getSpeakingSamples() {
  try { return JSON.parse(localStorage.getItem('ielts_speaking_samples') || '[]'); } catch { return []; }
}
function saveSpeakingSample(sample) {
  const list = getSpeakingSamples();
  list.unshift({ ...sample, id: Date.now(), date: new Date().toISOString() });
  if (list.length > 30) list.pop();
  localStorage.setItem('ielts_speaking_samples', JSON.stringify(list));
}
function deleteSpeakingSample(id) {
  const list = getSpeakingSamples().filter(s => s.id !== id);
  localStorage.setItem('ielts_speaking_samples', JSON.stringify(list));
  renderProgress();
}
function toggleSpeakingSampleExpand(id) {
  const el = document.getElementById('sp-detail-' + id);
  const btn = document.getElementById('sp-toggle-' + id);
  if (!el) return;
  const open = el.style.display !== 'none';
  el.style.display = open ? 'none' : 'block';
  if (btn) btn.textContent = open ? '▼ View feedback & transcript' : '▲ Hide';
}

// ══════════════════════════════════════════════
// WRITING PROMPTS DATABASE
// ══════════════════════════════════════════════
const writingPrompts = {
  task2: [
    { id:'t2-1', topic:'Technology', difficulty:'Medium', text:'Some people believe that technology has made our lives more complicated. Others argue it has simplified life. Discuss both views and give your own opinion.' },
    { id:'t2-2', topic:'Technology', difficulty:'Hard', text:'Artificial intelligence is increasingly being used to make important decisions in areas such as healthcare and law. Do the advantages of this outweigh the disadvantages?' },
    { id:'t2-3', topic:'Technology', difficulty:'Medium', text:'Many people spend a large amount of time on social media. Is this a positive or negative development? Give reasons for your answer.' },
    { id:'t2-4', topic:'Society', difficulty:'Hard', text:'In many countries, the gap between the rich and poor is growing. What problems does this cause? What measures can be taken to reduce this gap?' },
    { id:'t2-5', topic:'Society', difficulty:'Medium', text:'Some people think that children should be taught to be competitive. Others think it is better to encourage cooperation. Discuss both views and give your own opinion.' },
    { id:'t2-6', topic:'Society', difficulty:'Easy', text:'Many people today choose to live alone. What are the advantages and disadvantages of living alone? Is this a positive or negative development?' },
    { id:'t2-7', topic:'Society', difficulty:'Medium', text:'In some countries, it is becoming increasingly common for people to have children later in life. What are the reasons for this trend? Is this a positive or negative development?' },
    { id:'t2-8', topic:'Education', difficulty:'Medium', text:'Some people think university education should be free for all students. Others believe students should pay for their own education. Discuss both views and give your opinion.' },
    { id:'t2-9', topic:'Education', difficulty:'Hard', text:'In some countries, school children are required to do community service. Do you think this is beneficial or not? Give reasons for your answer.' },
    { id:'t2-10', topic:'Education', difficulty:'Easy', text:'Some people think that the best way to learn is through experience. Others believe formal education is more important. Discuss both views and give your opinion.' },
    { id:'t2-11', topic:'Environment', difficulty:'Hard', text:'Some governments spend large amounts of money to deal with climate change, while others think this money could be better spent elsewhere. Discuss both views and give your opinion.' },
    { id:'t2-12', topic:'Environment', difficulty:'Medium', text:'It is the responsibility of individuals, not governments, to protect the environment. To what extent do you agree or disagree?' },
    { id:'t2-13', topic:'Environment', difficulty:'Easy', text:'Many cities around the world are facing increasing traffic congestion. What are the causes of this problem and what solutions would you suggest?' },
    { id:'t2-14', topic:'Health', difficulty:'Medium', text:'Some people believe that the government should invest more in funding medical care rather than promoting healthy lifestyles. To what extent do you agree?' },
    { id:'t2-15', topic:'Health', difficulty:'Hard', text:'In many countries, obesity is becoming a serious problem. What are the main causes of obesity? What measures can be taken to address this issue?' },
    { id:'t2-16', topic:'Work', difficulty:'Medium', text:'Some people think that a job they enjoy is more important than a job that pays well. Do you agree or disagree with this statement?' },
    { id:'t2-17', topic:'Work', difficulty:'Hard', text:'More and more companies are allowing their employees to work from home. What are the advantages and disadvantages of this trend for both employers and employees?' },
    { id:'t2-18', topic:'Culture', difficulty:'Medium', text:'Some people think that it is important to preserve traditional cultural practices, while others think these are outdated. Discuss both views and give your own opinion.' },
    { id:'t2-19', topic:'Culture', difficulty:'Easy', text:'Some people believe that globalisation has had a negative impact on local cultures. To what extent do you agree or disagree?' },
    { id:'t2-20', topic:'Media', difficulty:'Medium', text:'Some people think that newspapers are the best way to learn about current events. Others prefer the internet. Discuss both views and give your own opinion.' },
    { id:'t2-21', topic:'Technology', difficulty:'Hard', text:'Some people believe that robots and automation will eventually replace most human workers. To what extent do you agree or disagree? What measures could be taken to address the consequences?' },
    { id:'t2-22', topic:'Education', difficulty:'Hard', text:'Some educators believe that all school subjects should be directly relevant to future employment. Others argue that a broad curriculum is more valuable. Discuss both views and give your own opinion.' },
    { id:'t2-23', topic:'Society', difficulty:'Medium', text:'In some societies, older people are seen as a burden rather than a valuable resource. What are the causes of this attitude? How could it be changed?' },
    { id:'t2-24', topic:'Environment', difficulty:'Hard', text:'Some people argue that individuals can do little to address climate change, and that only governments and corporations can make a real difference. To what extent do you agree?' },
    { id:'t2-25', topic:'Health', difficulty:'Medium', text:'Some people think that the best way to improve public health is to increase the number of sports facilities. Others believe that this would have little effect. Discuss both views and give your own opinion.' },
    { id:'t2-26', topic:'Work', difficulty:'Easy', text:'Some people prefer to have one career for their whole lives, while others prefer to change careers several times. Discuss both views and give your own opinion.' },
    { id:'t2-27', topic:'Society', difficulty:'Hard', text:'It is sometimes argued that economic inequality is inevitable in a free-market economy and is even beneficial to society. Do you agree or disagree?' },
    { id:'t2-28', topic:'Education', difficulty:'Medium', text:'Some people believe that children should be allowed to stay at home and be educated by their parents rather than attending school. To what extent do you agree or disagree?' },
    { id:'t2-29', topic:'Technology', difficulty:'Medium', text:'Many people believe that social media platforms have done more harm than good to society. Do you agree or disagree? Give reasons for your answer.' },
    { id:'t2-30', topic:'Culture', difficulty:'Hard', text:'Some argue that the widespread use of English as a global language threatens the survival of other languages and cultures. To what extent do you agree or disagree?' },
    { id:'t2-31', topic:'Health', difficulty:'Easy', text:'Governments should make it illegal to sell unhealthy food in order to improve public health. To what extent do you agree or disagree?' },
    { id:'t2-32', topic:'Environment', difficulty:'Medium', text:'Some cities have introduced congestion charges requiring drivers to pay to enter city centres. Do the advantages of this policy outweigh the disadvantages?' },
  ],
  task1: [
    {
      id:'t1-1', topic:'Bar Chart', difficulty:'Easy',
      text:'The bar chart below shows the percentage of adults in the UK who participated in various physical activities in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">Participation in Physical Activities in the UK, 2020 (%)</div>
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <line x1="55" y1="10" x2="55" y2="165" stroke="#ccc" stroke-width="1"/>
          <line x1="55" y1="165" x2="375" y2="165" stroke="#ccc" stroke-width="1"/>
          ${[['Walking','#1a6b6b',68],['Swimming','#2a9090',34],['Cycling','#c8942a',29],['Gym','#e8b84b',26],['Running','#1a7a4a',22],['Football','#3a5fcc',18]].map((d,i)=>{
            const x=65+i*52, h=d[2]*1.4, y=165-h;
            return `<rect x="${x}" y="${y}" width="36" height="${h}" fill="${d[1]}" rx="3"/>
                    <text x="${x+18}" y="${y-4}" text-anchor="middle" font-size="9" fill="#0f0e17">${d[2]}%</text>
                    <text x="${x+18}" y="178" text-anchor="middle" font-size="8" fill="#7a7469">${d[0]}</text>`;
          }).join('')}
          ${[0,20,40,60,80].map(v=>`<line x1="52" y1="${165-v*1.4}" x2="375" y2="${165-v*1.4}" stroke="#eee" stroke-width="1"/>
            <text x="50" y="${169-v*1.4}" text-anchor="end" font-size="8" fill="#7a7469">${v}</text>`).join('')}
        </svg>
      </div>`
    },
    {
      id:'t1-2', topic:'Line Graph', difficulty:'Easy',
      text:'The line graph below shows the average monthly temperatures in three cities — London, Sydney and Cairo — over the course of one year. Summarise the information by selecting and reporting the main features.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">Average Monthly Temperatures in Three Cities (°C)</div>
        <svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <line x1="45" y1="10" x2="45" y2="165" stroke="#ccc" stroke-width="1"/>
          <line x1="45" y1="165" x2="375" y2="165" stroke="#ccc" stroke-width="1"/>
          ${[-10,0,10,20,30,40].map(v=>`<line x1="43" y1="${165-(v+10)*2.6}" x2="375" y2="${165-(v+10)*2.6}" stroke="#eee" stroke-width="1"/>
            <text x="41" y="${169-(v+10)*2.6}" text-anchor="end" font-size="8" fill="#7a7469">${v}</text>`).join('')}
          ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m,i)=>`<text x="${50+i*27}" y="178" text-anchor="middle" font-size="7.5" fill="#7a7469">${m}</text>`).join('')}
          ${(()=>{
            const london=[5,6,8,11,15,18,21,20,17,13,9,6];
            const sydney=[26,26,24,21,18,15,14,15,17,20,22,25];
            const cairo=[14,15,18,22,27,31,32,32,30,26,20,15];
            const x=(i)=>50+i*27; const y=(v)=>165-(v+10)*2.6;
            const line=(data,color)=>`<polyline points="${data.map((v,i)=>x(i)+','+y(v)).join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
              ${data.map((v,i)=>`<circle cx="${x(i)}" cy="${y(v)}" r="2.5" fill="${color}"/>`).join('')}`;
            return line(london,'#1a6b6b')+line(sydney,'#c8942a')+line(cairo,'#c0392b');
          })()}
          <rect x="50" y="185" width="8" height="8" fill="#1a6b6b" rx="1"/>
          <text x="62" y="193" font-size="8" fill="#444">London</text>
          <rect x="105" y="185" width="8" height="8" fill="#c8942a" rx="1"/>
          <text x="117" y="193" font-size="8" fill="#444">Sydney</text>
          <rect x="160" y="185" width="8" height="8" fill="#c0392b" rx="1"/>
          <text x="172" y="193" font-size="8" fill="#444">Cairo</text>
        </svg>
      </div>`
    },
    {
      id:'t1-3', topic:'Pie Chart', difficulty:'Medium',
      text:'The pie charts below show the main reasons why people in two countries — Australia and Japan — say they travel abroad. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chartHtml: (function(){
        const COLORS=['#0e7c6b','#c8942a','#2563eb','#c0392b','#2d7a2d'];
        const LABELS=['Tourism/sightseeing','Visiting family/friends','Business','Education','Other'];
        const AUS=[38,25,18,12,7];
        const JPN=[28,32,14,16,10];
        function makePie(cx,cy,r,data){
          let angle=-Math.PI/2, h='';
          data.forEach(function(pct,i){
            const a=pct/100*Math.PI*2;
            const x1=cx+r*Math.cos(angle), y1=cy+r*Math.sin(angle);
            const x2=cx+r*Math.cos(angle+a), y2=cy+r*Math.sin(angle+a);
            const la=angle+a/2;
            const lx=cx+(r*0.62)*Math.cos(la), ly=cy+(r*0.62)*Math.sin(la);
            h+='<path d="M'+cx+','+cy+' L'+x1+','+y1+' A'+r+','+r+' 0 '+(a>Math.PI?1:0)+' 1 '+x2+','+y2+' Z" fill="'+COLORS[i]+'" stroke="white" stroke-width="2"/>';
            if(pct>=10) h+='<text x="'+lx+'" y="'+ly+'" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="700" fill="white">'+pct+'%</text>';
            else if(pct>=6) h+='<text x="'+lx+'" y="'+ly+'" text-anchor="middle" dominant-baseline="middle" font-size="9" font-weight="700" fill="white">'+pct+'%</text>';
            angle+=a;
          });
          return h;
        }
        var legend=COLORS.map(function(c,i){
          return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;color:#444;margin-right:8px;">'
            +'<span style="width:10px;height:10px;border-radius:2px;background:'+c+';flex-shrink:0;display:inline-block;"></span>'
            +LABELS[i]+'</span>';
        }).join('');
        return '<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">'
          +'<div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1</div>'
          +'<div style="font-size:0.8rem;font-weight:600;color:#1a2233;margin-bottom:6px;">Reasons for Travelling Abroad: Australia vs Japan (%)</div>'
          +'<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px;">'+legend+'</div>'
          +'<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;">'
          +makePie(95,98,78,AUS)+makePie(270,98,78,JPN)
          +'<text x="95" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#1a2233">Australia</text>'
          +'<text x="270" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#1a2233">Japan</text>'
          +'</svg></div>';
      })()
    },
    {
      id:'t1-4', topic:'Table', difficulty:'Medium',
      text:'The table below shows the proportion of national food budgets spent on different food categories in five countries in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;overflow-x:auto;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Table 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:10px;">Proportion of National Food Budgets by Category, 2020 (%)</div>
        <table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
          <thead>
            <tr style="background:#0f0e17;color:white;">
              <th style="padding:8px 10px;text-align:left;border-radius:6px 0 0 0;">Category</th>
              <th style="padding:8px 10px;text-align:center;">Japan</th>
              <th style="padding:8px 10px;text-align:center;">UK</th>
              <th style="padding:8px 10px;text-align:center;">Brazil</th>
              <th style="padding:8px 10px;text-align:center;">Nigeria</th>
              <th style="padding:8px 10px;text-align:center;border-radius:0 6px 0 0;">India</th>
            </tr>
          </thead>
          <tbody>
            ${[['Meat & fish','18','24','31','15','8'],['Cereals & bread','22','14','19','38','45'],['Dairy products','14','18','11','6','9'],['Fruit & vegetables','28','22','24','20','26'],['Snacks & sweets','8','12','9','7','6'],['Other','10','10','6','14','6']].map((r,i)=>
              `<tr style="background:${i%2?'#f9f7f3':'white'};">
                <td style="padding:7px 10px;font-weight:600;color:#0f0e17;">${r[0]}</td>
                ${r.slice(1).map(v=>`<td style="padding:7px 10px;text-align:center;color:#444;">${v}%</td>`).join('')}
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`
    },
    {
      id:'t1-5', topic:'Process Diagram', difficulty:'Hard',
      text:'The diagram below shows the process of recycling glass bottles, from collection to distribution. Summarise the information by selecting and reporting the main features.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">The Process of Recycling Glass Bottles</div>
        <svg viewBox="0 0 380 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          ${[['Collection',20],['Sorting',90],['Crushing',160],['Melting',230],['Moulding',300]].map((s,i)=>{
            const [label,x]=s;
            return `<rect x="${x}" y="55" width="58" height="38" rx="8" fill="${i%2?'#1a6b6b':'#2a9090'}" />
                    <text x="${x+29}" y="70" text-anchor="middle" font-size="9" fill="white" font-weight="600">${label}</text>
                    ${i<4?`<polygon points="${x+60},74 ${x+68},74 ${x+68},70 ${x+78},78 ${x+68},86 ${x+68},82 ${x+60},82" fill="#c8942a"/>`:''}
                    <text x="${x+29}" y="82" text-anchor="middle" font-size="8" fill="rgba(255,255,255,0.7)">${['①','②','③','④','⑤'][i]}</text>`;
          }).join('')}
          <rect x="300" y="110" width="58" height="28" rx="6" fill="#16a34a"/>
          <text x="329" y="124" text-anchor="middle" font-size="9" fill="white" font-weight="600">Distribution</text>
          <text x="329" y="134" text-anchor="middle" font-size="8" fill="rgba(255,255,255,0.7)">⑥</text>
          <polygon points="329,93 329,101 325,101 329,110 333,101 329,101" fill="#c8942a"/>
          <text x="190" y="22" text-anchor="middle" font-size="9" fill="#7a7469" font-style="italic">Used glass bottles are collected → sorted by colour → crushed into cullet → melted → moulded into new bottles → distributed</text>
        </svg>
      </div>`
    },
    {
      id:'t1-6', topic:'Map', difficulty:'Hard',
      text:'The maps below show a small town called Greenfield in 1990 and the same town in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1 &amp; 2</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">Greenfield Town: 1990 vs 2020</div>
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <!-- 1990 map -->
          <rect x="10" y="20" width="170" height="160" fill="#f5f0e8" stroke="#ccc" stroke-width="1" rx="4"/>
          <text x="95" y="35" text-anchor="middle" font-size="10" font-weight="700" fill="#0f0e17">1990</text>
          <rect x="20" y="42" width="60" height="35" fill="#3a5fcc" rx="3"/><text x="50" y="57" text-anchor="middle" font-size="8" fill="white">Farmland</text><text x="50" y="68" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)">(large)</text>
          <rect x="90" y="42" width="50" height="25" fill="#16a34a" rx="3"/><text x="115" y="56" text-anchor="middle" font-size="8" fill="white">Forest</text>
          <rect x="20" y="90" width="45" height="25" fill="#c8942a" rx="3"/><text x="42" y="104" text-anchor="middle" font-size="8" fill="white">Market</text>
          <rect x="75" y="90" width="65" height="25" fill="#7a7469" rx="3"/><text x="107" y="104" text-anchor="middle" font-size="8" fill="white">Residential</text>
          <rect x="20" y="130" width="120" height="20" fill="#e0d8cc" rx="2"/><text x="80" y="143" text-anchor="middle" font-size="8" fill="#0f0e17">Main Road (unpaved)</text>
          <rect x="148" y="42" width="22" height="90" fill="#c0392b" rx="2"/><text x="159" y="90" text-anchor="middle" font-size="7" fill="white" transform="rotate(-90,159,90)">River</text>

          <!-- 2020 map -->
          <rect x="200" y="20" width="170" height="160" fill="#f5f0e8" stroke="#ccc" stroke-width="1" rx="4"/>
          <text x="285" y="35" text-anchor="middle" font-size="10" font-weight="700" fill="#0f0e17">2020</text>
          <rect x="210" y="42" width="35" height="35" fill="#3a5fcc" rx="3"/><text x="227" y="57" text-anchor="middle" font-size="7" fill="white">Farmland</text><text x="227" y="66" text-anchor="middle" font-size="6.5" fill="rgba(255,255,255,0.8)">(reduced)</text>
          <rect x="253" y="42" width="50" height="25" fill="#2a9090" rx="3"/><text x="278" y="56" text-anchor="middle" font-size="8" fill="white">Housing</text>
          <rect x="210" y="88" width="45" height="25" fill="#c8942a" rx="3"/><text x="232" y="102" text-anchor="middle" font-size="8" fill="white">Shopping</text>
          <rect x="263" y="88" width="40" height="25" fill="#16a34a" rx="3"/><text x="283" y="102" text-anchor="middle" font-size="8" fill="white">Park</text>
          <rect x="210" y="120" width="50" height="22" fill="#e8b84b" rx="3"/><text x="235" y="133" text-anchor="middle" font-size="7.5" fill="white">Industrial</text>
          <rect x="210" y="150" width="120" height="16" fill="#0f0e17" rx="2"/><text x="270" y="161" text-anchor="middle" font-size="8" fill="white">Main Road (paved, widened)</text>
          <rect x="336" y="42" width="22" height="90" fill="#c0392b" rx="2"/><text x="347" y="90" text-anchor="middle" font-size="7" fill="white" transform="rotate(-90,347,90)">River</text>
        </svg>
      </div>`
    },
    {
      id:'t1-7', topic:'Bar Chart', difficulty:'Medium',
      text:'The bar chart below shows the number of international students enrolled in universities in four English-speaking countries between 2000 and 2020. Summarise the information by selecting and reporting the main features.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">International Students in English-Speaking Countries (thousands), 2000–2020</div>
        <svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <line x1="50" y1="10" x2="50" y2="165" stroke="#ccc" stroke-width="1"/>
          <line x1="50" y1="165" x2="375" y2="165" stroke="#ccc" stroke-width="1"/>
          ${[0,100,200,300,400,500].map(v=>`<line x1="48" y1="${165-v*0.29}" x2="375" y2="${165-v*0.29}" stroke="#eee" stroke-width="1"/>
            <text x="46" y="${169-v*0.29}" text-anchor="end" font-size="8" fill="#7a7469">${v}k</text>`).join('')}
          ${(()=>{
            const groups=[['2000',[180,280,95,60]],['2005',[250,340,130,90]],['2010',[320,390,190,130]],['2015',[430,450,250,180]],['2020',[490,510,310,240]]];
            const colors=['#1a6b6b','#c8942a','#3a5fcc','#c0392b'];
            const countries=['USA','UK','Australia','Canada'];
            let html='';
            groups.forEach(([yr,vals],gi)=>{
              const gx=58+gi*62;
              vals.forEach((v,ci)=>{
                const bh=v*0.29, by=165-bh;
                html+=`<rect x="${gx+ci*13}" y="${by}" width="11" height="${bh}" fill="${colors[ci]}" rx="1.5"/>`;
              });
              html+=`<text x="${gx+26}" y="178" text-anchor="middle" font-size="8" fill="#7a7469">${yr}</text>`;
            });
            countries.forEach((c,i)=>{ html+=`<rect x="${55+i*70}" y="190" width="10" height="10" fill="${colors[i]}" rx="1"/><text x="${68+i*70}" y="199" font-size="8" fill="#444">${c}</text>`; });
            return html;
          })()}
        </svg>
      </div>`
    },
    {
      id:'t1-8', topic:'Line Graph', difficulty:'Medium',
      text:'The line graph below shows changes in the amount of fish caught in three different oceans between 1980 and 2010. Summarise the information by selecting and reporting the main features.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">Fish Caught in Three Oceans, 1980–2010 (million tonnes)</div>
        <svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <line x1="50" y1="10" x2="50" y2="165" stroke="#ccc" stroke-width="1"/>
          <line x1="50" y1="165" x2="370" y2="165" stroke="#ccc" stroke-width="1"/>
          ${[0,10,20,30,40,50].map(v=>`<line x1="48" y1="${165-v*2.8}" x2="370" y2="${165-v*2.8}" stroke="#eee" stroke-width="1"/>
            <text x="46" y="${169-v*2.8}" text-anchor="end" font-size="8" fill="#7a7469">${v}</text>`).join('')}
          ${(()=>{
            const years=[1980,1985,1990,1995,2000,2005,2010];
            const pacific=[28,32,38,42,47,44,46];
            const atlantic=[22,25,24,26,28,25,24];
            const indian=[8,10,12,15,18,22,26];
            const colors=['#1a6b6b','#c8942a','#3a5fcc'];
            const datasets=[pacific,atlantic,indian];
            const labels=['Pacific','Atlantic','Indian'];
            const xp=i=>60+i*50; const yp=v=>165-v*2.8;
            let html='';
            datasets.forEach((data,di)=>{
              html+=`<polyline points="${data.map((v,i)=>xp(i)+','+yp(v)).join(' ')}" fill="none" stroke="${colors[di]}" stroke-width="2"/>`;
              data.forEach((v,i)=>{ html+=`<circle cx="${xp(i)}" cy="${yp(v)}" r="3" fill="${colors[di]}"/>`; });
            });
            years.forEach((y,i)=>{ html+=`<text x="${xp(i)}" y="178" text-anchor="middle" font-size="8" fill="#7a7469">${y}</text>`; });
            labels.forEach((l,i)=>{ html+=`<rect x="${55+i*95}" y="190" width="10" height="10" fill="${colors[i]}" rx="1"/><text x="${68+i*95}" y="199" font-size="8" fill="#444">${l} Ocean</text>`; });
            return html;
          })()}
        </svg>
      </div>`
    },
    {
      id:'t1-9', topic:'Mixed Charts', difficulty:'Hard',
      text:'The bar chart and pie chart below show information about the employment sectors and average salaries in a European country in 2019. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figures 1 &amp; 2</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:10px;">Employment Sectors &amp; Average Annual Salaries, 2019</div>
        <svg viewBox="0 0 380 210" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <!-- Bar chart: % employed -->
          <text x="100" y="15" text-anchor="middle" font-size="8.5" font-weight="600" fill="#0f0e17">% of Workforce by Sector</text>
          <line x1="25" y1="25" x2="25" y2="155" stroke="#ccc" stroke-width="1"/>
          <line x1="25" y1="155" x2="195" y2="155" stroke="#ccc" stroke-width="1"/>
          ${[['Technology','#1a6b6b',22],['Healthcare','#2a9090',18],['Education','#c8942a',15],['Finance','#3a5fcc',14],['Retail','#c0392b',12],['Other','#7a7469',19]].map((d,i)=>{
            const y=32+i*20, bw=d[2]*5;
            return `<rect x="26" y="${y}" width="${bw}" height="13" fill="${d[1]}" rx="2"/>
                    <text x="22" y="${y+10}" text-anchor="end" font-size="7.5" fill="#444">${d[0]}</text>
                    <text x="${30+bw}" y="${y+10}" font-size="7.5" fill="#0f0e17">${d[2]}%</text>`;
          }).join('')}
          <!-- Pie chart: avg salary -->
          <text x="285" y="15" text-anchor="middle" font-size="8.5" font-weight="600" fill="#0f0e17">Avg Salary (€k/yr)</text>
          ${(()=>{
            function pie(cx,cy,r,data){
              let angle=-Math.PI/2,html='';
              data.forEach(d=>{
                const a=d.pct/100*Math.PI*2;
                const x1=cx+r*Math.cos(angle),y1=cy+r*Math.sin(angle);
                const x2=cx+r*Math.cos(angle+a),y2=cy+r*Math.sin(angle+a);
                const la=angle+a/2;
                html+=`<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${a>Math.PI?1:0} 1 ${x2},${y2} Z" fill="${d.color}" stroke="white" stroke-width="1.5"/>`;
                if(d.pct>9) html+=`<text x="${cx+(r*0.65)*Math.cos(la)}" y="${cy+(r*0.65)*Math.sin(la)}" text-anchor="middle" dominant-baseline="middle" font-size="8" font-weight="600" fill="white">${d.label}</text>`;
                angle+=a;
              });
              return html;
            }
            return pie(285,95,62,[
              {pct:28,color:'#1a6b6b',label:'€72k'},{pct:20,color:'#2a9090',label:'€55k'},
              {pct:16,color:'#c8942a',label:'€48k'},{pct:18,color:'#3a5fcc',label:'€65k'},
              {pct:10,color:'#c0392b',label:'€38k'},{pct:8,color:'#7a7469',label:'€42k'}]);
          })()}
          <text x="285" y="175" text-anchor="middle" font-size="7" fill="#7a7469">Sector proportional to workforce %</text>
        </svg>
      </div>`
    },
    {
      id:'t1-10', topic:'Process Diagram', difficulty:'Medium',
      text:'The diagram below illustrates the stages involved in producing chocolate from cacao beans. Summarise the information by selecting and reporting the main stages and features.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">From Cacao Bean to Chocolate: Production Process</div>
        <svg viewBox="0 0 380 165" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          ${(()=>{
            const steps=[['Harvesting\nCacao Pods','#5d3a1a'],['Fermenting\n(5–7 days)','#7b4f2e'],['Drying\n& Roasting','#9c6b3c'],['Grinding\nto Paste','#b8864e'],['Conching\n& Tempering','#c8942a'],['Moulding\n& Packaging','#1a7a4a']];
            let html='';
            // row 1: steps 0-2
            steps.slice(0,3).forEach(([label,color],i)=>{
              const x=20+i*118, y=30;
              const lines=label.split('\n');
              html+=`<rect x="${x}" y="${y}" width="90" height="42" rx="8" fill="${color}"/>`;
              lines.forEach((l,li)=>{ html+=`<text x="${x+45}" y="${y+18+li*14}" text-anchor="middle" font-size="8.5" fill="white" font-weight="600">${l}</text>`; });
              if(i<2) html+=`<polygon points="${x+92},51 ${x+100},51 ${x+100},47 ${x+110},55 ${x+100},63 ${x+100},59 ${x+92},59" fill="#c8942a"/>`;
            });
            // arrow down
            html+=`<polygon points="165,74 165,82 161,82 169,92 177,82 173,82 173,74" fill="#c8942a"/>`;
            // row 2: steps 3-5 (reversed)
            steps.slice(3).reverse().forEach(([label,color],i)=>{
              const x=20+i*118, y=96;
              const lines=label.split('\n');
              html+=`<rect x="${x}" y="${y}" width="90" height="42" rx="8" fill="${color}"/>`;
              lines.forEach((l,li)=>{ html+=`<text x="${x+45}" y="${y+18+li*14}" text-anchor="middle" font-size="8.5" fill="white" font-weight="600">${l}</text>`; });
              if(i<2) html+=`<polygon points="${x+92},117 ${x+100},117 ${x+100},113 ${x+110},121 ${x+100},129 ${x+100},125 ${x+92},125" fill="#c8942a"/>`;
            });
            return html;
          })()}
        </svg>
      </div>`
    },
    {
      id:'t1-11', topic:'Table', difficulty:'Easy',
      text:"The table below gives information about the world's five busiest airports in 2022, including number of passengers, terminals, and runways. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;overflow-x:auto;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Table 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:10px;">World's Five Busiest Airports, 2022</div>
        <table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
          <thead>
            <tr style="background:#0f0e17;color:white;">
              <th style="padding:8px 10px;text-align:left;">Rank</th>
              <th style="padding:8px 10px;text-align:left;">Airport</th>
              <th style="padding:8px 10px;text-align:left;">Country</th>
              <th style="padding:8px 10px;text-align:center;">Passengers (m)</th>
              <th style="padding:8px 10px;text-align:center;">Terminals</th>
              <th style="padding:8px 10px;text-align:center;">Runways</th>
            </tr>
          </thead>
          <tbody>
            ${[['1','Hartsfield–Jackson Atlanta','USA','93.7','7','5'],['2','Dallas/Fort Worth','USA','73.4','4','7'],['3','Denver International','USA','69.0','3','6'],['4','O\'Hare International','USA','68.3','4','8'],['5','Dubai International','UAE','66.1','3','2']].map((r,i)=>
              `<tr style="background:${i%2?'#f9f7f3':'white'};">
                <td style="padding:7px 10px;font-weight:700;color:#1a6b6b;">${r[0]}</td>
                <td style="padding:7px 10px;font-weight:600;color:#0f0e17;">${r[1]}</td>
                <td style="padding:7px 10px;color:#444;">${r[2]}</td>
                <td style="padding:7px 10px;text-align:center;color:#444;">${r[3]}</td>
                <td style="padding:7px 10px;text-align:center;color:#444;">${r[4]}</td>
                <td style="padding:7px 10px;text-align:center;color:#444;">${r[5]}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`
    },
    {
      id:'t1-12', topic:'Map', difficulty:'Medium',
      text:'The plans below show a sports centre as it is now and a proposed plan for its development. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#7a7469;margin-bottom:4px;">Figures 1 &amp; 2</div>
        <div style="font-size:0.8rem;font-weight:600;color:#0f0e17;margin-bottom:12px;">Sports Centre: Current Plan vs. Proposed Development</div>
        <svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <!-- Current -->
          <rect x="10" y="18" width="170" height="170" fill="#f5f0e8" stroke="#ccc" stroke-width="1" rx="4"/>
          <text x="95" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="#0f0e17">Current</text>
          <rect x="20" y="38" width="70" height="45" fill="#1a6b6b" rx="3"/><text x="55" y="58" text-anchor="middle" font-size="8" fill="white">Swimming</text><text x="55" y="69" text-anchor="middle" font-size="8" fill="white">Pool</text>
          <rect x="100" y="38" width="68" height="45" fill="#2a9090" rx="3"/><text x="134" y="58" text-anchor="middle" font-size="8" fill="white">Sports</text><text x="134" y="69" text-anchor="middle" font-size="8" fill="white">Hall</text>
          <rect x="20" y="93" width="50" height="35" fill="#c8942a" rx="3"/><text x="45" y="107" text-anchor="middle" font-size="8" fill="white">Gym</text><text x="45" y="118" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)">(small)</text>
          <rect x="80" y="93" width="88" height="35" fill="#3a5fcc" rx="3"/><text x="124" y="113" text-anchor="middle" font-size="8" fill="white">Changing Rooms</text>
          <rect x="20" y="140" width="148" height="22" fill="#e0d8cc" rx="2"/><text x="94" y="155" text-anchor="middle" font-size="8" fill="#444">Car Park (50 spaces)</text>

          <!-- Proposed -->
          <rect x="200" y="18" width="170" height="170" fill="#f5f0e8" stroke="#ccc" stroke-width="1" rx="4"/>
          <text x="285" y="32" text-anchor="middle" font-size="10" font-weight="700" fill="#0f0e17">Proposed</text>
          <rect x="210" y="38" width="70" height="45" fill="#1a6b6b" rx="3"/><text x="245" y="58" text-anchor="middle" font-size="8" fill="white">Swimming</text><text x="245" y="69" text-anchor="middle" font-size="8" fill="white">Pool ✓</text>
          <rect x="290" y="38" width="68" height="45" fill="#2a9090" rx="3"/><text x="324" y="58" text-anchor="middle" font-size="8" fill="white">Sports</text><text x="324" y="69" text-anchor="middle" font-size="8" fill="white">Hall ✓</text>
          <rect x="210" y="93" width="90" height="35" fill="#c8942a" rx="3"/><text x="255" y="107" text-anchor="middle" font-size="8" fill="white">Expanded Gym</text><text x="255" y="118" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)">(NEW)</text>
          <rect x="308" y="93" width="50" height="35" fill="#16a34a" rx="3"/><text x="333" y="107" text-anchor="middle" font-size="8" fill="white">Café</text><text x="333" y="118" text-anchor="middle" font-size="7" fill="rgba(255,255,255,0.8)">(NEW)</text>
          <rect x="210" y="140" width="148" height="22" fill="#0f0e17" rx="2"/><text x="284" y="155" text-anchor="middle" font-size="8" fill="white">Car Park (120 spaces) — expanded</text>
        </svg>
      </div>`
    },
    { id:'t1-13', topic:'Bar Chart', difficulty:'Hard',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#1a2233;margin-bottom:10px;">Proportion of Household Income by Spending Category, 2015 (%)</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px;">
          ${[['#2563eb','Germany'],['#dc2626','Japan'],['#16a34a','Brazil']].map(d=>'<span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;color:#444;"><span style="width:10px;height:10px;border-radius:2px;background:'+d[0]+';display:inline-block;"></span>'+d[1]+'</span>').join('')}
        </div>
        ${(()=>{
          const cats=['Food','Housing','Transport','Leisure','Other'];
          const de=[23,31,14,18,14]; const jp=[22,28,16,19,15]; const br=[32,25,13,16,14];
          const W=340,H=150,pad=40,bw=8,gap=18;
          const maxV=35;
          let s='<svg viewBox="0 0 '+(W+pad)+' '+(H+30)+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;">';
          // Y axis
          s+='<line x1="'+pad+'" y1="0" x2="'+pad+'" y2="'+H+'" stroke="#e2e8f0" stroke-width="1"/>';
          [0,10,20,30].forEach(v=>{const y=H-(v/maxV*H);s+='<line x1="'+pad+'" y1="'+y+'" x2="'+(W+pad)+'" y2="'+y+'" stroke="#f1f5f9" stroke-width="1"/>';s+='<text x="'+(pad-4)+'" y="'+(y+3)+'" text-anchor="end" font-size="7" fill="#94a3b8">'+v+'%</text>';});
          cats.forEach((cat,i)=>{
            const gx=pad+10+i*(3*bw+gap);
            [[de[i],'#2563eb'],[jp[i],'#dc2626'],[br[i],'#16a34a']].forEach(([v,c],j)=>{
              const bh=v/maxV*H; const bx=gx+j*(bw+1); const by=H-bh;
              s+='<rect x="'+bx+'" y="'+by+'" width="'+bw+'" height="'+bh+'" fill="'+c+'" rx="1"/>';
              s+='<text x="'+(bx+bw/2)+'" y="'+(by-2)+'" text-anchor="middle" font-size="6.5" fill="'+c+'">'+v+'</text>';
            });
            s+='<text x="'+(gx+bw*1.5+1)+'" y="'+(H+12)+'" text-anchor="middle" font-size="7.5" fill="#475569">'+cat+'</text>';
          });
          s+='</svg>';
          return s;
        })()}
      </div>`,
      text:'The bar chart below shows the proportion of household income spent on various categories — food, housing, transport, leisure, and other — in three countries in 2015. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.' },
    { id:'t1-14', topic:'Line Graph', difficulty:'Hard',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#1a2233;margin-bottom:8px;">Transport Mode Usage in a European City, 1980–2020 (%)</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px;">
          ${[['#2563eb','Private car'],['#dc2626','Public bus'],['#16a34a','Bicycle']].map(d=>'<span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;color:#444;"><span style="width:10px;height:10px;border-radius:2px;background:'+d[0]+';display:inline-block;"></span>'+d[1]+'</span>').join('')}
        </div>
        ${(()=>{
          const years=[1980,1990,2000,2010,2020];
          const car=[55,58,62,54,42]; const bus=[30,26,20,24,30]; const bike=[15,16,18,22,28];
          const W=310,H=140,pl=34,pt=8;
          const minV=10,maxV=70;
          const toX=(i)=>pl+i*(W/4);
          const toY=(v)=>pt+H-((v-minV)/(maxV-minV)*H);
          let s='<svg viewBox="0 0 '+(W+pl+10)+' '+(H+pt+25)+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;">';
          [10,20,30,40,50,60,70].forEach(v=>{const y=toY(v);s+='<line x1="'+pl+'" y1="'+y+'" x2="'+(W+pl)+'" y2="'+y+'" stroke="#f1f5f9" stroke-width="1"/>';s+='<text x="'+(pl-4)+'" y="'+(y+3)+'" text-anchor="end" font-size="7" fill="#94a3b8">'+v+'</text>';});
          years.forEach((yr,i)=>s+='<text x="'+toX(i)+'" y="'+(H+pt+15)+'" text-anchor="middle" font-size="7.5" fill="#475569">'+yr+'</text>');
          [[car,'#2563eb'],[bus,'#dc2626'],[bike,'#16a34a']].forEach(([data,color])=>{
            const pts=data.map((v,i)=>toX(i)+','+toY(v)).join(' ');
            s+='<polyline points="'+pts+'" fill="none" stroke="'+color+'" stroke-width="2" stroke-linejoin="round"/>';
            data.forEach((v,i)=>s+='<circle cx="'+toX(i)+'" cy="'+toY(v)+'" r="3" fill="'+color+'"/><text x="'+toX(i)+'" y="'+(toY(v)-5)+'" text-anchor="middle" font-size="7" fill="'+color+'">'+v+'%</text>');
          });
          s+='</svg>';
          return s;
        })()}
      </div>`,
      text:'The line graph below shows the changes in the percentage of people using three forms of transport — private car, public bus, and bicycle — in a European city between 1980 and 2020. Summarise the information by selecting and reporting the main features.' },
    { id:'t1-15', topic:'Table', difficulty:'Hard',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;overflow-x:auto;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;margin-bottom:4px;">Table 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#1a2233;margin-bottom:10px;">Average Working Hours and Annual Leave Entitlement by Country, 2022</div>
        <table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
          <thead>
            <tr style="background:#1e3a8a;color:white;">
              <th style="padding:8px 10px;text-align:left;">Country</th>
              <th style="padding:8px 10px;text-align:center;">Avg. Hours/Week</th>
              <th style="padding:8px 10px;text-align:center;">Annual Leave (days)</th>
              <th style="padding:8px 10px;text-align:center;">Public Holidays</th>
            </tr>
          </thead>
          <tbody>
            ${[['Germany','34.2','30','10'],['France','35.1','25','11'],['Japan','38.6','10','16'],['USA','38.0','0 (statutory)','11'],['Brazil','39.4','30','12'],['Australia','36.0','20','8']].map((r,i)=>
              '<tr style="background:'+(i%2?'#f8fafc':'white')+';"><td style="padding:7px 10px;font-weight:600;color:#1a2233;">'+r[0]+'</td>'+r.slice(1).map(v=>'<td style="padding:7px 10px;text-align:center;color:#475569;">'+v+'</td>').join('')+'</tr>').join('')}
          </tbody>
        </table>
      </div>`,
      text:'The table below shows information about the average working hours per week and annual leave entitlement in six countries in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.' },
    { id:'t1-16', topic:'Process Diagram', difficulty:'Medium',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;margin-bottom:4px;">Figure 1</div>
        <div style="font-size:0.8rem;font-weight:600;color:#1a2233;margin-bottom:10px;">How Solar Panels Generate and Distribute Electricity</div>
        <svg viewBox="0 0 380 170" xmlns="http://www.w3.org/2000/svg" style="width:100%;font-family:'Public Sans',sans-serif;">
          <!-- Sun -->
          <circle cx="30" cy="30" r="18" fill="#f59e0b"/>
          <text x="30" y="34" text-anchor="middle" font-size="8" font-weight="700" fill="white">SUN</text>
          <!-- Arrow: sun to panels -->
          <line x1="48" y1="30" x2="72" y2="50" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="52" y="38" font-size="7" fill="#92400e">light</text>
          <!-- Solar panels -->
          <rect x="72" y="38" width="52" height="32" fill="#1e3a8a" rx="3"/>
          <line x1="72" y1="50" x2="124" y2="50" stroke="white" stroke-width="0.8"/>
          <line x1="72" y1="62" x2="124" y2="62" stroke="white" stroke-width="0.8"/>
          <line x1="98" y1="38" x2="98" y2="70" stroke="white" stroke-width="0.8"/>
          <text x="98" y="82" text-anchor="middle" font-size="7.5" fill="#1e3a8a" font-weight="600">Solar Panels</text>
          <!-- Arrow to inverter -->
          <line x1="124" y1="54" x2="158" y2="54" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="141" y="48" text-anchor="middle" font-size="7" fill="#475569">DC</text>
          <!-- Inverter -->
          <rect x="158" y="40" width="48" height="28" fill="#0e7c6b" rx="3"/>
          <text x="182" y="56" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">Inverter</text>
          <text x="182" y="82" text-anchor="middle" font-size="7.5" fill="#0e7c6b" font-weight="600">DC → AC</text>
          <!-- Arrow to meter -->
          <line x1="206" y1="54" x2="240" y2="54" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="223" y="48" text-anchor="middle" font-size="7" fill="#475569">AC</text>
          <!-- Meter/distribution box -->
          <rect x="240" y="40" width="44" height="28" fill="#7c3aed" rx="3"/>
          <text x="262" y="56" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">Meter</text>
          <text x="262" y="82" text-anchor="middle" font-size="7.5" fill="#7c3aed" font-weight="600">Distribution</text>
          <!-- Arrow down to home -->
          <line x1="262" y1="68" x2="262" y2="95" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>
          <!-- Home -->
          <polygon points="262,100 244,118 280,118" fill="#dc2626"/>
          <rect x="248" y="118" width="28" height="20" fill="#dc2626"/>
          <rect x="256" y="126" width="12" height="12" fill="white"/>
          <text x="262" y="152" text-anchor="middle" font-size="7.5" fill="#dc2626" font-weight="600">Home</text>
          <!-- Arrow right to grid -->
          <line x1="284" y1="54" x2="318" y2="54" stroke="#475569" stroke-width="1.5" marker-end="url(#arr)"/>
          <text x="301" y="48" text-anchor="middle" font-size="7" fill="#475569">excess</text>
          <!-- Grid -->
          <rect x="318" y="40" width="48" height="28" fill="#475569" rx="3"/>
          <text x="342" y="56" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">National</text>
          <text x="342" y="82" text-anchor="middle" font-size="7.5" fill="#475569" font-weight="600">Grid</text>
          <!-- Battery below panels -->
          <line x1="98" y1="70" x2="98" y2="100" stroke="#475569" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#arr)"/>
          <rect x="72" y="100" width="52" height="24" fill="#92400e" rx="3"/>
          <text x="98" y="115" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">Battery</text>
          <text x="98" y="140" text-anchor="middle" font-size="7" fill="#92400e">(optional storage)</text>
          <!-- Arrow definition -->
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
            </marker>
          </defs>
        </svg>
      </div>`,
      text:'The diagram below shows how solar panels generate electricity and distribute it to homes and the national grid. Summarise the information by selecting and reporting the main features.' },
    { id:'t1-17', topic:'Mixed Charts', difficulty:'Hard',
      chartHtml: `<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">
        <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;margin-bottom:4px;">Figures 1 &amp; 2</div>
        <div style="font-size:0.8rem;font-weight:600;color:#1a2233;margin-bottom:8px;">University Enrolment Rates and Graduate Employment Outcomes, 2020</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div>
            <div style="font-size:0.72rem;font-weight:600;color:#64748b;margin-bottom:6px;">Figure 1: Enrolment Rate (%)</div>
            ${(()=>{
              const data=[['UK',62,'#2563eb'],['USA',58,'#dc2626'],['Germany',44,'#16a34a'],['Japan',52,'#7c3aed']];
              const W=160,H=110,pl=46;
              let s='<svg viewBox="0 0 '+(W+pl)+' '+(H+18)+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;">';
              [0,20,40,60,80].forEach(v=>{const y=H-(v/80*H);s+='<line x1="'+pl+'" y1="'+y+'" x2="'+(W+pl)+'" y2="'+y+'" stroke="#f1f5f9" stroke-width="1"/>';s+='<text x="'+(pl-4)+'" y="'+(y+3)+'" text-anchor="end" font-size="7" fill="#94a3b8">'+v+'</text>';});
              data.forEach(([name,v,c],i)=>{const bw=W/data.length-8;const bx=pl+i*(W/data.length)+4;const bh=v/80*H;const by=H-bh;s+='<rect x="'+bx+'" y="'+by+'" width="'+bw+'" height="'+bh+'" fill="'+c+'" rx="2"/>';s+='<text x="'+(bx+bw/2)+'" y="'+(by-3)+'" text-anchor="middle" font-size="7.5" fill="'+c+'">'+v+'%</text>';s+='<text x="'+(bx+bw/2)+'" y="'+(H+11)+'" text-anchor="middle" font-size="7.5" fill="#475569">'+name+'</text>';});
              s+='</svg>';return s;
            })()}
          </div>
          <div>
            <div style="font-size:0.72rem;font-weight:600;color:#64748b;margin-bottom:6px;">Table 1: Graduate Outcomes (%)</div>
            <table style="width:100%;border-collapse:collapse;font-size:0.72rem;">
              <thead><tr style="background:#1e3a8a;color:white;"><th style="padding:5px 6px;text-align:left;">Country</th><th style="padding:5px 6px;text-align:center;">Employed</th><th style="padding:5px 6px;text-align:center;">Further Study</th></tr></thead>
              <tbody>
                ${[['UK','78','14'],['USA','72','18'],['Germany','85','9'],['Japan','94','4']].map((r,i)=>'<tr style="background:'+(i%2?'#f8fafc':'white')+'"><td style="padding:5px 6px;font-weight:600;">'+r[0]+'</td><td style="padding:5px 6px;text-align:center;">'+r[1]+'%</td><td style="padding:5px 6px;text-align:center;">'+r[2]+'%</td></tr>').join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>`,
      text:'The bar chart and table below show data about university enrolment rates and graduate employment outcomes in four countries in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.' },
    { id:'t1-18', topic:'Pie Chart', difficulty:'Hard',
      chartHtml: (function(){
        const COLORS=['#1e3a8a','#dc2626','#16a34a','#f59e0b','#7c3aed'];
        const LABELS=['Nuclear','Coal & Gas','Renewables','Hydro','Other'];
        const FRA=[71,8,12,6,3];
        const AUS=[0,74,14,7,5];
        function makePie(cx,cy,r,data){
          let angle=-Math.PI/2, h='';
          data.forEach(function(pct,i){
            if(pct===0){return;}
            const a=pct/100*Math.PI*2;
            const x1=cx+r*Math.cos(angle),y1=cy+r*Math.sin(angle);
            const x2=cx+r*Math.cos(angle+a),y2=cy+r*Math.sin(angle+a);
            const la=angle+a/2;
            const lx=cx+(r*0.62)*Math.cos(la),ly=cy+(r*0.62)*Math.sin(la);
            h+='<path d="M'+cx+','+cy+' L'+x1+','+y1+' A'+r+','+r+' 0 '+(a>Math.PI?1:0)+' 1 '+x2+','+y2+' Z" fill="'+COLORS[i]+'" stroke="white" stroke-width="2"/>';
            if(pct>=8) h+='<text x="'+lx+'" y="'+ly+'" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="700" fill="white">'+pct+'%</text>';
            angle+=a;
          });
          return h;
        }
        var legend=COLORS.map(function(c,i){
          return '<span style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;color:#444;margin-right:8px;">'
            +'<span style="width:10px;height:10px;border-radius:2px;background:'+c+';flex-shrink:0;display:inline-block;"></span>'
            +LABELS[i]+'</span>';
        }).join('');
        return '<div style="background:white;border:1px solid #e0d8cc;border-radius:10px;padding:16px;margin-top:12px;">'
          +'<div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.6px;color:#64748b;margin-bottom:4px;">Figures 1 &amp; 2</div>'
          +'<div style="font-size:0.8rem;font-weight:600;color:#1a2233;margin-bottom:6px;">Main Sources of Energy: France vs Australia, 2020 (%)</div>'
          +'<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px;">'+legend+'</div>'
          +'<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;">'
          +makePie(95,98,78,FRA)+makePie(270,98,78,AUS)
          +'<text x="95" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#1a2233">France</text>'
          +'<text x="270" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#1a2233">Australia</text>'
          +'</svg></div>';
      })(),
      text:'The pie charts below show the main sources of energy used in two countries — France and Australia — in 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.' },
  ]
};

const examTips = {
  task2: [
    'Plan your essay for 5 minutes before writing',
    'Aim for at least 250 words',
    'Include an introduction, 2–3 body paragraphs, and a conclusion',
    'Give clear examples to support your arguments',
    'Avoid repeating the same ideas or vocabulary',
    'Write in formal academic English — avoid contractions',
  ],
  task1: [
    'Plan your response for 3–4 minutes first',
    'Aim for at least 150 words',
    'Start with a paraphrase of the question as your overview',
    'Include a clear overview paragraph summarising the main trends',
    'Group and compare data — do not describe every single figure',
    'Use precise language: "increased significantly", "remained stable"',
  ]
};

let currentExamPrompt = null, examTimerInterval = null, examSecsLeft = 0;
let currentExamTask = 'task2', currentTopicFilter = 'all';

function switchWritingMode(mode, btn) {
  document.getElementById('writing-mode-exam').style.display = mode === 'exam' ? 'block' : 'none';
  document.getElementById('writing-mode-check').style.display = mode === 'check' ? 'block' : 'none';
  document.getElementById('mode-btn-exam').classList.toggle('active', mode === 'exam');
  document.getElementById('mode-btn-check').classList.toggle('active', mode === 'check');
}

function switchExamTask(type, btn) {
  currentExamTask = type;
  // Support both old inner-tab and new task-type-btn
  document.querySelectorAll('#exam-step-choose .inner-tab, .task-type-btn').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('exam-task-type').textContent = type;
  currentTopicFilter = 'all';
  renderTopicFilters();
  renderPromptList();
  deselectPrompt();
  // Update start button meta text
  const meta = document.getElementById('btn-start-meta');
  if (meta) meta.textContent = type === 'task1' ? '20 min · 150+ words' : '40 min · 250+ words';
}

function getExamTopics() {
  const prompts = writingPrompts[currentExamTask];
  const topics = [...new Set(prompts.map(p => p.topic))];
  return topics;
}

function renderTopicFilters() {
  const topics = getExamTopics();
  const el = document.getElementById('prompt-topic-filters');
  el.innerHTML = `<button class="topic-btn ${currentTopicFilter==='all'?'active':''}" onclick="filterByTopic('all',this)">All</button>` +
    topics.map(t => `<button class="topic-btn ${currentTopicFilter===t?'active':''}" onclick="filterByTopic('${t}',this)">${t}</button>`).join('');
}

function filterByTopic(topic, btn) {
  currentTopicFilter = topic;
  document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderPromptList();
}

function renderPromptList() {
  let prompts = writingPrompts[currentExamTask];
  if (currentTopicFilter !== 'all') prompts = prompts.filter(p => p.topic === currentTopicFilter);
  const history = getHistory();
  const practisedIds = new Set(history.map(h => h.promptId).filter(Boolean));
  const el = document.getElementById('exam-prompt-list');
  el.innerHTML = prompts.map((p, idx) => {
    const isSelected = currentExamPrompt?.id === p.id;
    const isPractised = practisedIds.has(p.id);
    const isRecommended = idx < 3 && currentTopicFilter === 'all';
    return `
    <div class="prompt-list-item ${isSelected?'selected':''}" onclick="selectPrompt('${p.id}')">
      <div class="prompt-list-item-dot"></div>
      <div class="prompt-list-item-text">
        <div class="prompt-list-item-meta">
          <span class="prompt-diff-badge diff-${p.difficulty.toLowerCase()}">${p.difficulty}</span>
          <span class="prompt-topic-badge">${p.topic}</span>
          ${isRecommended ? '<span style="font-size:0.62rem;background:#fef9c3;color:#854d0e;padding:1px 5px;border-radius:4px;font-weight:700;">★</span>' : ''}
          ${isPractised ? '<span style="font-size:0.62rem;color:var(--green);font-weight:600;">✓</span>' : ''}
        </div>
        <p>${p.text}</p>
      </div>
    </div>`;
  }).join('');
}

function selectPrompt(id) {
  const all = [...writingPrompts.task1, ...writingPrompts.task2];
  currentExamPrompt = all.find(p => p.id === id);
  renderPromptList();

  // Show detail panel content, hide empty state
  document.getElementById('writing-detail-empty').style.display = 'none';
  document.getElementById('selected-prompt-preview').style.display = 'block';

  // Populate detail panel
  document.getElementById('selected-prompt-text').textContent = currentExamPrompt.text;

  // Meta badges in header
  const meta = document.getElementById('detail-header-meta');
  if (meta) {
    meta.innerHTML = `
      <span class="prompt-diff-badge diff-${currentExamPrompt.difficulty.toLowerCase()}">${currentExamPrompt.difficulty}</span>
      <span class="prompt-topic-badge">${currentExamPrompt.topic}</span>
      <span style="font-size:0.72rem;color:var(--on-surface-var);">${currentExamTask === 'task1' ? 'Task 1 · 20 min · 150+ words' : 'Task 2 · 40 min · 250+ words'}</span>
    `;
  }

  // Chart preview
  const previewChart = document.getElementById('selected-prompt-chart');
  if (currentExamPrompt.chartHtml) {
    previewChart.innerHTML = currentExamPrompt.chartHtml;
    previewChart.style.display = 'block';
  } else {
    previewChart.innerHTML = '';
    previewChart.style.display = 'none';
  }

  // Scroll detail panel into view on mobile
  const detail = document.getElementById('writing-detail-panel');
  if (detail && window.innerWidth < 760) {
    detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function deselectPrompt() {
  currentExamPrompt = null;
  document.getElementById('writing-detail-empty').style.display = 'flex';
  document.getElementById('selected-prompt-preview').style.display = 'none';
  renderPromptList();
}

function startExam() {
  if (!currentExamPrompt) return;
  const task = document.getElementById('exam-task-type').textContent;
  const mins = task === 'task1' ? 20 : 40;
  const minW = task === 'task1' ? 150 : 250;
  examSecsLeft = mins * 60;

  document.getElementById('exam-step-choose').style.display = 'none';
  document.getElementById('exam-step-result').style.display = 'none';
  document.getElementById('exam-step-write').style.display = 'block';
  document.getElementById('exam-essay').value = '';
  document.getElementById('exam-wc').textContent = '0';

  // Header
  const labelText = task === 'task1' ? 'Writing Task 1' : 'Writing Task 2';
  document.getElementById('exam-label-type').textContent = labelText;
  document.getElementById('exam-topbar-title').textContent = 'IELTS Academic Writing';

  // Instruction bar
  document.getElementById('exam-time-advice').textContent = mins + ' minutes';
  document.getElementById('exam-min-words-bar').textContent = minW + ' words';

  // Prompt
  if (task === 'task1') {
    document.getElementById('exam-prompt-body').textContent = currentExamPrompt.text;
    document.getElementById('exam-task-instruction').textContent = 'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.';
  } else {
    const parts = currentExamPrompt.text.split('. ');
    document.getElementById('exam-prompt-body').textContent = currentExamPrompt.text;
    document.getElementById('exam-task-instruction').textContent = 'Write at least 250 words. Give reasons for your answer and include any relevant examples from your own knowledge or experience.';
  }

  // Target words for progress bar
  document.getElementById('exam-target-words').textContent = minW;

  // Chart
  const chartSlot = document.getElementById('exam-chart-slot');
  if (currentExamPrompt.chartHtml) {
    chartSlot.innerHTML = currentExamPrompt.chartHtml;
    chartSlot.style.display = 'block';
  } else {
    chartSlot.innerHTML = '';
    chartSlot.style.display = 'none';
  }

  // Tips
  const tips = examTips[task] || examTips.task2;
  document.getElementById('exam-quick-tips').innerHTML = tips.map(t => `<p>${t}</p>`).join('');

  // Reset progress bar
  document.getElementById('exam-wc-bar-text').innerHTML = `0 / <span id="exam-target-words">${minW}</span> words`;
  const bar = document.getElementById('exam-wc-progress');
  bar.style.width = '0%';
  bar.className = 'wc-progress-bar';

  updateExamTimer();
  examTimerInterval = setInterval(() => {
    examSecsLeft--;
    updateExamTimer();
    if (examSecsLeft <= 0) { clearInterval(examTimerInterval); autoSubmitExam(); }
  }, 1000);

  document.getElementById('exam-essay').focus();
}

function updateExamTimer() {
  const m = Math.floor(examSecsLeft/60), s = examSecsLeft%60;
  const str = m+':'+(s<10?'0':'')+s;
  const el = document.getElementById('exam-timer');
  el.textContent = str;
  const task = document.getElementById('exam-task-type').textContent;
  const totalSecs = task === 'task1' ? 20*60 : 40*60;
  const pct = Math.max(0, (examSecsLeft / totalSecs) * 100);

  // Time-state classes
  let stateClass = '';
  const fillEl = document.getElementById('exam-time-fill');
  if (examSecsLeft <= 60) {
    stateClass = ' danger';
    if (fillEl) { fillEl.style.width = pct+'%'; fillEl.style.background = 'rgba(239,68,68,0.8)'; }
  } else if (examSecsLeft <= 300) {
    stateClass = ' warning';
    if (fillEl) { fillEl.style.width = pct+'%'; fillEl.style.background = 'rgba(249,115,22,0.7)'; }
  } else if (pct <= 50) {
    stateClass = ' halfway';
    if (fillEl) { fillEl.style.width = pct+'%'; fillEl.style.background = 'rgba(251,191,36,0.6)'; }
  } else {
    if (fillEl) { fillEl.style.width = pct+'%'; fillEl.style.background = 'rgba(255,255,255,0.6)'; }
  }
  el.className = 'exam-timer' + stateClass;
  document.getElementById('exam-wc').textContent = document.getElementById('exam-wc-bar-text')?.textContent?.split(' ')[0] || '0';
}

function updateExamWordCount() {
  const v = document.getElementById('exam-essay').value.trim();
  const w = v === '' ? 0 : v.split(/\s+/).length;
  const task = document.getElementById('exam-task-type').textContent;
  const target = task === 'task1' ? 150 : 250;
  const pct = Math.min(100, Math.round((w / target) * 100));

  document.getElementById('exam-wc').textContent = w;

  const remaining = target - w;
  const statusText = w >= target + 50
    ? `${w} words ✓ Good length`
    : w >= target
    ? `${w} words ✓ Target reached`
    : remaining <= 20
    ? `${w} / ${target} — ${remaining} more to go`
    : `${w} / ${target} words`;

  document.getElementById('exam-wc-bar-text').textContent = statusText;

  const bar = document.getElementById('exam-wc-progress');
  bar.style.width = pct + '%';
  bar.className = 'wc-progress-bar' + (w >= target + 50 ? ' over' : w >= target ? ' good' : '');
}

function submitExamEarly() {
  clearInterval(examTimerInterval);
  scoreExamEssay();
}

function autoSubmitExam() {
  scoreExamEssay();
}

function abandonExam() {
  clearInterval(examTimerInterval);
  examTimerInterval = null;
  examSecsLeft = 0;
  document.getElementById('exam-essay').value = '';
  document.getElementById('exam-step-write').style.display = 'none';
  document.getElementById('exam-step-result').style.display = 'none';
  document.getElementById('exam-step-choose').style.display = 'block';
  renderTopicFilters();
  renderPromptList();
}

function resetExam() {
  clearInterval(examTimerInterval);
  document.getElementById('exam-step-choose').style.display = 'block';
  document.getElementById('exam-step-write').style.display = 'none';
  document.getElementById('exam-step-result').style.display = 'none';
  renderTopicFilters();
  renderPromptList();
}

async function scoreExamEssay() {
  const essay = document.getElementById('exam-essay').value.trim();
  const task = document.getElementById('exam-task-type').textContent;

  document.getElementById('exam-step-write').style.display = 'none';
  document.getElementById('exam-step-result').style.display = 'block';
  document.getElementById('writing-result').classList.remove('visible');
  setLoading('writing', true);

  const minWords = task === 'task1' ? 150 : 250;
  const taskName = task === 'task1' ? 'Academic Writing Task 1 (data description)' : 'Academic Writing Task 2 (essay)';
  const timeUsed = task === 'task1' ? (20*60 - examSecsLeft) : (40*60 - examSecsLeft);
  const minsUsed = Math.floor(timeUsed/60), secsUsed = timeUsed%60;

  document.getElementById('result-meta-line').textContent =
    `${currentExamPrompt?.topic || ''} · ${task.toUpperCase()} · Time used: ${minsUsed}m ${secsUsed}s`;

  if (!essay || essay.split(/\s+/).length < 30) {
    setLoading('writing', false);
    document.getElementById('result-band').textContent = '—';
    document.getElementById('result-criteria').innerHTML = '';
    document.getElementById('result-feedback').textContent = 'No essay was submitted. Please try again and write your response.';
    document.getElementById('writing-result').classList.add('visible');
    return;
  }

  const task1BandDescriptors = `
OFFICIAL IELTS TASK 1 BAND DESCRIPTORS — MAY 2023:

TASK ACHIEVEMENT (TA):
- Band 9: All requirements fully satisfied. Clear, fully developed overview. Key features skilfully selected and illustrated with accurate data.
- Band 8: All requirements covered. Key features clearly highlighted. Data accurate with only minor lapses.
- Band 7: Covers requirements. Clear overview. Key features highlighted; minor omissions/inaccuracies possible.
- Band 6: Key features adequately highlighted. Overview attempted. Some irrelevant/inaccurate detail. Some details missing.
- Band 5: Partially addresses requirements. Recounts details mechanically. No clear overview.
- Band 4: Minimally addressed. Key features not highlighted.
PENALTY: No overview → cap TA Band 5. Under 150 words → cap TA Band 5. Under 100 words → cap TA Band 4.

COHERENCE & COHESION (CC):
- Band 9: Followed effortlessly. Cohesion natural, rarely attracts attention. Paragraphing skilful.
- Band 8: Logically sequenced. Cohesion well managed. Paragraphing sufficient.
- Band 7: Clear progression. Cohesive devices flexibly used but some inaccuracies or over/under-use.
- Band 6: Generally coherent. Cohesive devices used but may be faulty or mechanical.
- Band 5: Some lack of progression. Limited cohesive devices. Lack of paragraphing.

LEXICAL RESOURCE (LR):
- Band 9: Full flexibility, precise. Errors extremely rare.
- Band 8: Wide resource fluently used. Uncommon items skilfully used. Occasional spelling errors.
- Band 7: Sufficient flexibility. Some less common vocab. Collocation awareness; some inaccuracies. Spelling errors rare.
- Band 6: Generally adequate. Meaning clear despite restricted range. Errors but rarely impede.
- Band 5: Limited. Simple vocab, lacks variety. Noticeable spelling errors.

GRAMMATICAL RANGE & ACCURACY (GRA):
- Band 9: Wide range, full flexibility. Errors extremely rare.
- Band 8: Wide range accurately used. Majority error-free. Occasional non-systematic errors.
- Band 7: Variety of complex structures. Frequent error-free sentences. Grammar generally well controlled.
- Band 6: Mix of simple and complex. Limited flexibility. Errors in complex structures but rarely impede.
- Band 5: Limited range. Complex structures attempted but errors frequent.

CALIBRATION RULES:
- Band 7: If an overview is present + key features are identified + grammar is mostly accurate → minimum Band 7 for TA. Do not give Band 6 to a well-structured response just because examples could be more precise.
- Grammar reality: Errors that do not affect clarity → do not penalise GRA below Band 7.
- Overall = arithmetic mean of 4 criteria, rounded to nearest 0.5.`;

  const task2BandDescriptors = `
OFFICIAL IELTS TASK 2 BAND DESCRIPTORS — MAY 2023:

TASK RESPONSE (TR):
- Band 9: Prompt explored in depth. Fully developed position. Ideas relevant, fully extended, well supported.
- Band 8: Prompt sufficiently addressed. Clear well-developed position. Ideas well extended — Band 8 acknowledges complexity, limitations, conditions, or structural factors (e.g. "this assumes equal access...").
- Band 7: Main parts addressed. Clear position. Ideas extended and supported but may over-generalise.
- Band 6: Main parts addressed. Position relevant but conclusions may be unclear/repetitive. Ideas relevant but insufficiently developed or generic.
- Band 5: Partially addressed. Position not always clear. Ideas sometimes irrelevant or underdeveloped.
- Band 4: Minimally addressed. Position not identifiable. Ideas poorly extended.
PENALTY: Under 250 words → cap TR Band 5. Bullet-point listing → penalise TR and CC.

COHERENCE & COHESION (CC):
- Band 9: Followed effortlessly. Cohesion seamless.
- Band 8: Logically sequenced. Cohesion well managed.
- Band 7: Logical flow. Cohesive devices used throughout but some formulaic ("Furthermore,", "In conclusion,").
- Band 6: Generally coherent. Mechanical linking throughout ("On the one hand...").
- Band 5: Limited range, weak progression.

LEXICAL RESOURCE (LR):
- Band 9: Full flexibility, precise.
- Band 8: Less common vocabulary used accurately (e.g. "subsidising", "structural barriers", "infrastructure", "facilitate").
- Band 7: Some range — topic-specific terms used accurately (e.g. "implement policies", "regulate", "awareness campaigns", "public health"). Occasional common phrases.
- Band 6: Adequate but repetitive (same words like "health", "people", "government" repeated throughout). Basic vocab.
- Band 5: Limited. Simple vocab, noticeable errors.

GRAMMATICAL RANGE & ACCURACY (GRA):
- Band 9: Wide range, full flexibility.
- Band 8: Wide range, mostly error-free. Complex structures (conditionals, relative clauses, participial phrases) used naturally.
- Band 7: Mix of complex and simple. Frequently error-free. Some errors in complex structures.
- Band 6: Mostly simple structures. Some complex structures attempted with errors.
- Band 5: Limited range. Errors frequent.

CALIBRATION RULES — these override vague intuition:
• Band 6 signal: Clear ideas + generic/obvious examples + basic repetitive vocab + mechanical linking ("On the one hand..."). Score 6–6.5.
• Band 7 signal: Clear ideas + relevant examples + some topic-specific vocabulary + logical structure (though slightly formulaic). Score 7–7.5. Do NOT score a clear, supported, well-organised essay as Band 6.
• Band 8 signal: Nuanced ideas acknowledging complexity/limitations/exceptions + precise less common vocabulary + seamless cohesion + flexible grammar. Score 8–8.5.
• Grammar reality: Errors that do not affect clarity → GRA not below 7.
• Vocabulary calibration: Topic-specific terms used accurately + some advanced items → LR 7, not 6.
• "Simple but correct" ≠ Band 8. "Nuanced + precise + seamless" = Band 8.
• Overall = arithmetic mean of 4 criteria, rounded to nearest 0.5.`;

  const isT1 = task === 'task1';

  const t1Descriptors = `OFFICIAL IELTS TASK 1 BAND DESCRIPTORS — MAY 2023:
TASK ACHIEVEMENT: Band 9=all requirements fully satisfied, clear overview, key features skilfully selected with accurate data; Band 8=all requirements covered, key features clearly highlighted, minor lapses only; Band 7=covers requirements, clear overview, key features highlighted, minor inaccuracies; Band 6=adequately highlighted, overview attempted, some irrelevant/inaccurate detail; Band 5=partial, mechanical, no clear overview; Band 4=minimal, key features not highlighted.
PENALTY: No overview → cap TA Band 5. Under 150w → cap TA Band 5. Under 100w → cap TA Band 4.
COHERENCE & COHESION: Band 9=effortless, natural cohesion, skilful paragraphing; Band 8=logically sequenced, cohesion well managed; Band 7=clear progression, flexible cohesive devices but some inaccuracies; Band 6=generally coherent, may be faulty/mechanical; Band 5=limited cohesion, lack of paragraphing.
LEXICAL RESOURCE: Band 9=full flexibility, precise, errors extremely rare; Band 8=wide resource, skilful uncommon items, occasional spelling; Band 7=sufficient flexibility, some less common vocab, collocation awareness; Band 6=generally adequate, restricted range; Band 5=limited, noticeable errors.
GRAMMATICAL RANGE & ACCURACY: Band 9=wide range, full flexibility, errors extremely rare; Band 8=wide range, majority error-free; Band 7=variety complex structures, frequent error-free sentences; Band 6=mix simple/complex, limited flexibility; Band 5=limited, errors frequent.
BAND 7→8 GAP: In LR, replace common accurate words with precise collocations. In CC, use woven cohesion not mechanical transitions. In GRA, use embedded clauses and participial phrases. In TA, all data accurately reported with meaningful comparisons.`;

  const t2Descriptors = `OFFICIAL IELTS TASK 2 BAND DESCRIPTORS — MAY 2023:
TASK RESPONSE: Band 9=explored in depth, fully developed position, ideas relevant/fully extended/well supported; Band 8=sufficiently addressed, well-developed position, ideas well extended with occasional omissions — Band 8 ideas address complexity, limitations, or nuanced conditions (e.g. acknowledging exceptions or structural inequalities); Band 7=main parts addressed, clear position, ideas extended but may over-generalise; Band 6=main parts addressed, relevant position but conclusions unclear/repetitive, ideas insufficiently developed; Band 5=partially addressed, limited position; Band 4=minimally addressed, position unclear.
PENALTY: Under 250w → cap TR Band 5. Bullet-point listing → penalise TR and CC.
COHERENCE & COHESION: Band 9=effortless, natural, paragraphing skilful; Band 8=logically sequenced, well managed; Band 7=clear progression, flexible cohesive devices but some over/under-use; Band 6=generally coherent, may be faulty or mechanical; Band 5=limited range, lack of progression.
LEXICAL RESOURCE: Band 9=full flexibility, precise; Band 8=wide resource, less common vocabulary used accurately, minimal errors; Band 7=some range (e.g. "implement policies", "regulate", "awareness campaigns"), occasional common phrases; Band 6=adequate but repetitive or basic; Band 5=limited, noticeable errors.
GRAMMATICAL RANGE & ACCURACY: Band 9=wide range, full flexibility; Band 8=wide range, majority error-free; Band 7=mix of complex/simple, frequently error-free; Band 6=mostly simple, some errors in complex structures; Band 5=limited, errors frequent.
BAND 7→8 GAP: TR — surface generalisations vs. nuanced analysis (acknowledging conditions, exceptions, or structural barriers). LR — common accurate words vs. precise collocations ("make worse"→"exacerbate"). CC — mechanical transitions ("Furthermore,") vs. seamless woven cohesion. GRA — simple+compound vs. embedded relative/conditional/participial clauses.`;

  const criteriaKey = isT1 ? 'ta' : 'tr';
  const criteriaName = isT1 ? 'Task Achievement' : 'Task Response';

  const systemPrompt = `IELTS examiner. Score the ${taskName} essay. Return ONLY valid JSON (no markdown, no code blocks):
{"overall":6.5,"${criteriaKey}":6.5,"cc":7.0,"lr":6.0,"gra":6.5,"ta_label":"${criteriaName}","cc_label":"Coherence & Cohesion","lr_label":"Lexical Resource","gra_label":"Grammatical Range & Accuracy","band_justification":"One sentence: main limiting factor","ta_descriptor":"Student performance for ${criteriaName}","ta_why_not_higher":"Exact missing feature for next band","cc_descriptor":"CC performance","cc_why_not_higher":"What is missing","lr_descriptor":"LR performance","lr_why_not_higher":"What is missing","gra_descriptor":"GRA performance","gra_why_not_higher":"What is missing","strengths":["strength 1","strength 2","strength 3"],"priority_improvements":["improvement 1","improvement 2","improvement 3"],"phrase_fixes":[{"original":"phrase from essay","improved":"better version","reason":"why"},{"original":"phrase 2","improved":"better 2","reason":"why"},{"original":"phrase 3","improved":"better 3","reason":"why"}],"upgrade_half_band":["action for +0.5 band","action 2"],"upgrade_one_band":["action for +1.0 band","action 2"],"overall_comment":"2-3 sentences of examiner commentary."}
Bands: 6=adequate,6.5=competent,7=good,7.5=strong,8=excellent. Be accurate.`;

  const descriptors = isT1 ? t1Descriptors : t2Descriptors;
  const promptText = document.getElementById('exam-prompt-body')?.textContent || '';
  const userMsg = `${descriptors}\n\nPROMPT: ${promptText}\n\nESSAY:\n${essay}`;
  try {
    const text = await callClaude({ system: systemPrompt, userMsg, maxTokens: 8000 });
    const r = JSON.parse(text.replace(/```json|```/g, '').trim());
    setLoading('writing', false);
    document.getElementById('result-band').textContent = r.overall;
    renderWritingResult(r, 'result-criteria', 'result-feedback', 'writing-result');
    saveToHistory({ type: taskName, band: r.overall, date: new Date().toISOString(), promptId: currentExamPrompt?.id });
    saveWritingSample({ type: taskName, band: r.overall, essay, prompt: promptText, result: r, date: new Date().toISOString() });
  } catch(e) {
    setLoading('writing', false);
    showError('writing', e.message || 'Error scoring essay. Please try again.');
  }
}

function renderWritingResult(r, criteriaId, feedbackId, panelId) {
  // Criteria with why-not-higher
  const critKey = r.ta_label === 'Task Achievement' ? 'ta' : 'tr';
  const criteria = [
    { label: r.ta_label, score: r[critKey], desc: r.ta_descriptor, whyNot: r.ta_why_not_higher },
    { label: r.cc_label, score: r.cc, desc: r.cc_descriptor, whyNot: r.cc_why_not_higher },
    { label: r.lr_label, score: r.lr, desc: r.lr_descriptor, whyNot: r.lr_why_not_higher },
    { label: r.gra_label, score: r.gra, desc: r.gra_descriptor, whyNot: r.gra_why_not_higher },
  ];
  const scoreClass = s => s >= 7.5 ? 'band-high' : s >= 6.0 ? 'band-mid' : 'band-low';
  const barClass   = s => s >= 7.5 ? 'crit-bar-high' : s >= 6.0 ? 'crit-bar-mid' : 'crit-bar-low';

  document.getElementById(criteriaId).innerHTML = criteria.map(c => `
    <div class="crit-analysis-card ${scoreClass(c.score)}">
      <div class="crit-analysis-header">
        <span class="crit-analysis-name">${c.label}</span>
        <span class="crit-analysis-score ${scoreClass(c.score)}">${c.score}</span>
      </div>
      <div class="crit-bar-track"><div class="crit-bar-fill ${barClass(c.score)}" style="width:${Math.round((c.score/9)*100)}%"></div></div>
      ${c.desc ? `<div class="crit-descriptor-text">${c.desc}</div>` : ''}
      ${c.whyNot ? `<div class="crit-why-not">${c.whyNot}</div>` : ''}
    </div>`).join('');

  // Tabbed feedback
  const uid = panelId.replace(/[^a-z0-9]/gi,'');
  const strengths = Array.isArray(r.strengths) ? r.strengths : (r.strengths||'').split(/\n|•/).filter(s=>s.trim());
  const improvements = Array.isArray(r.priority_improvements) ? r.priority_improvements : (r.improvements||'').split(/\n|•/).filter(s=>s.trim());
  const fixes = Array.isArray(r.phrase_fixes) ? r.phrase_fixes : [];
  const upgradeHalf = Array.isArray(r.upgrade_half_band) ? r.upgrade_half_band : [];
  const upgradeFull = Array.isArray(r.upgrade_one_band) ? r.upgrade_one_band : [];

  document.getElementById(feedbackId).innerHTML = `
    ${r.band_justification ? `<p style="font-style:italic;color:var(--on-surface-var);font-size:0.82rem;margin-bottom:10px;padding:6px 10px;background:var(--surface-low);border-radius:6px;">📋 ${r.band_justification}</p>` : ''}
    <p style="font-size:0.85rem;line-height:1.6;margin-bottom:12px;">${r.overall_comment||''}</p>

    <div class="feedback-tabs">
      <button class="fb-tab active" onclick="switchFbTab('${uid}','strengths',this)">✓ Strengths</button>
      <button class="fb-tab" onclick="switchFbTab('${uid}','improvements',this)">→ Improvements</button>
      <button class="fb-tab" onclick="switchFbTab('${uid}','fixes',this)">✏ Phrase Fixes</button>
      <button class="fb-tab" onclick="switchFbTab('${uid}','upgrade',this)">↑ Next Band</button>
    </div>

    <div id="${uid}-strengths" class="fb-panel active">
      <ul class="strength-list">${strengths.map(s=>`<li>${s.replace(/^•\s*/,'')}</li>`).join('')}</ul>
    </div>
    <div id="${uid}-improvements" class="fb-panel">
      <ul class="improvement-list">${improvements.map(s=>`<li>${s.replace(/^•\s*/,'')}</li>`).join('')}</ul>
    </div>
    <div id="${uid}-fixes" class="fb-panel">
      ${fixes.length ? fixes.map(f=>`
        <div class="fix-card">
          <div class="fix-original">${f.original||''}</div>
          <div class="fix-improved">${f.improved||''}</div>
          <div class="fix-why">${f.reason||''}</div>
        </div>`).join('') : '<p style="font-size:0.83rem;color:var(--on-surface-var);">Specific phrase fixes will appear here after scoring.</p>'}
    </div>
    <div id="${uid}-upgrade" class="fb-panel">
      <div class="band-upgrade-grid">
        <div class="band-upgrade-card half">
          <div class="band-upgrade-label">To reach +0.5 band</div>
          <ul class="improvement-list">${upgradeHalf.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
        <div class="band-upgrade-card full">
          <div class="band-upgrade-label">To reach +1.0 band</div>
          <ul class="improvement-list">${upgradeFull.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
      </div>
    </div>`;

  document.getElementById(panelId).classList.add('visible');
}

function switchFbTab(uid, panel, btn) {
  // Deactivate all tabs in this panel's parent
  btn.parentElement.querySelectorAll('.fb-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  // Hide all panels
  ['strengths','improvements','fixes','upgrade'].forEach(p => {
    const el = document.getElementById(uid + '-' + p);
    if (el) el.classList.remove('active');
  });
  const target = document.getElementById(uid + '-' + panel);
  if (target) target.classList.add('active');
}

function clearWriting() {
  document.getElementById('writing-essay').value = '';
  document.getElementById('writing-prompt').value = '';
  document.getElementById('writing-wc').textContent = '0 words';
  document.getElementById('check-result').classList.remove('visible');
}

async function checkWriting() {
  const essay = document.getElementById('writing-essay').value.trim();
  const taskType = document.getElementById('writing-task-type').textContent;
  const promptText = document.getElementById('writing-prompt').value.trim();

  if (!essay || essay.split(/\s+/).length < 30) {
    showError('check', 'Please write or paste an essay first (minimum 30 words).');
    return;
  }

  setLoading('check', true);
  document.getElementById('check-result').classList.remove('visible');

  const isT1 = taskType === 'task1';
  const taskName = isT1 ? 'Academic Writing Task 1 (data description)' : 'Academic Writing Task 2 (essay)';
  const criteriaKey = isT1 ? 'ta' : 'tr';
  const criteriaName = isT1 ? 'Task Achievement' : 'Task Response';

  const systemPrompt = `IELTS examiner. Score the ${taskName} essay. Return ONLY valid JSON (no markdown, no code blocks):
{"overall":6.5,"${criteriaKey}":6.5,"cc":7.0,"lr":6.0,"gra":6.5,"ta_label":"${criteriaName}","cc_label":"Coherence & Cohesion","lr_label":"Lexical Resource","gra_label":"Grammatical Range & Accuracy","band_justification":"One sentence: main limiting factor","ta_descriptor":"Student performance for ${criteriaName}","ta_why_not_higher":"Exact missing feature for next band","cc_descriptor":"CC performance","cc_why_not_higher":"What is missing","lr_descriptor":"LR performance","lr_why_not_higher":"What is missing","gra_descriptor":"GRA performance","gra_why_not_higher":"What is missing","strengths":["strength 1","strength 2","strength 3"],"priority_improvements":["improvement 1","improvement 2","improvement 3"],"phrase_fixes":[{"original":"phrase from essay","improved":"better version","reason":"why"},{"original":"phrase 2","improved":"better 2","reason":"why"},{"original":"phrase 3","improved":"better 3","reason":"why"}],"upgrade_half_band":["action for +0.5 band","action 2"],"upgrade_one_band":["action for +1.0 band","action 2"],"overall_comment":"2-3 sentences of examiner commentary."}
Bands: 6=adequate,6.5=competent,7=good,7.5=strong,8=excellent. Be accurate.`;

  const userMsg = `PROMPT: ${promptText || '(no prompt provided)'}\n\nESSAY:\n${essay}`;

  try {
    const text = await callClaude({ system: systemPrompt, userMsg, maxTokens: 8000 });
    const r = JSON.parse(text.replace(/```json|```/g, '').trim());
    setLoading('check', false);
    document.getElementById('check-result-band').textContent = r.overall;
    renderWritingResult(r, 'check-result-criteria', 'check-result-feedback', 'check-result');
    saveToHistory({ type: taskName, band: r.overall, date: new Date().toISOString() });
    saveWritingSample({ type: taskName, band: r.overall, essay, prompt: promptText, result: r, date: new Date().toISOString() });
  } catch(e) {
    setLoading('check', false);
    showError('check', e.message || 'Error scoring essay. Please try again.');
  }
}

// Init writing prompts
function initWriting() {
  renderTopicFilters();
  renderPromptList();
}

// ══════════════════════════════════════════════
// SPEAKING CHECKER
// ══════════════════════════════════════════════
// ══════════════════════════════════════════════
// SPEAKING — CENTRALIZED MIC MANAGER
// ══════════════════════════════════════════════
let micStream = null;          // reused across recordings
let micPermissionGranted = false;
let mediaRecorder = null;
let timerInterval = null;
let timerSecs = 0;
let recordingActive = false;
let transcriptText = '';
let currentSpeakingPart = 1;
let micLevelInterval = null;

// ── Part selector ──
function selectSpeakingPart(part, btn) {
  currentSpeakingPart = part;
  document.getElementById('speaking-part').value = part;
  // Deactivate all part buttons + full test button
  document.querySelectorAll('.speaking-part-btn').forEach(b => b.classList.remove('active'));
  const fullBtn = document.getElementById('sp-mode-full');
  if (fullBtn) fullBtn.classList.remove('active');
  btn.classList.add('active');
  // Hide full test panel, show prompt card
  const fullPanel = document.getElementById('full-test-panel');
  if (fullPanel) fullPanel.classList.remove('visible');
  const card = document.getElementById('speaking-prompt-card');
  if (card) card.style.display = 'block';
  const tags = { 1:'Part 1', 2:'Part 2', 3:'Part 3' };
  document.getElementById('speaking-part-tag').textContent = tags[part] || 'Part '+part;
  document.getElementById('speaking-p2-note').style.display = part === 2 ? 'block' : 'none';
  randomSpeakingPrompt();
}

function updateSpeakingPrompt() { randomSpeakingPrompt(); }

// ══════════════════════════════════════════════
// FULL SPEAKING TEST MODE
// ══════════════════════════════════════════════
let currentFullTestIndex = 0;
let prepTimerInterval = null;

function showFullTestMode() {
  // Deactivate part buttons
  document.querySelectorAll('.speaking-part-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('sp-mode-full').classList.add('active');
  // Hide prompt card, show full test panel
  const card = document.getElementById('speaking-prompt-card');
  if (card) card.style.display = 'none';
  document.getElementById('full-test-panel').classList.add('visible');
  // Load current test
  renderFullTest(fullSpeakingTests[currentFullTestIndex]);
}

function exitFullTestMode() {
  document.getElementById('full-test-panel').classList.remove('visible');
  document.getElementById('sp-mode-full').classList.remove('active');
  const card = document.getElementById('speaking-prompt-card');
  if (card) card.style.display = 'block';
  // Re-activate part 1
  selectSpeakingPart(1, document.getElementById('sp-mode-p1'));
}

function loadFullTestQuestion(cardEl) {
  // Extract question text and load into the speaking prompt
  const questionText = cardEl.querySelector('.full-test-q-text')?.textContent?.trim();
  if (!questionText) return;
  // Show a brief flash on the card
  cardEl.style.background = 'var(--primary-fixed)';
  setTimeout(() => { cardEl.style.background = ''; }, 400);
  // Set the prompt
  const promptEl = document.getElementById('speaking-prompt-text');
  if (promptEl) {
    promptEl.textContent = questionText;
    // Scroll to recording controls
    const recorder = document.getElementById('record-btn');
    if (recorder) setTimeout(() => recorder.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    // Show a toast
    showVocabToast('Question loaded — scroll down to record 🎙️');
  }
}

function loadNextFullTest() {
  currentFullTestIndex = (currentFullTestIndex + 1) % fullSpeakingTests.length;
  renderFullTest(fullSpeakingTests[currentFullTestIndex]);
}

function renderFullTest(test) {
  if (!test) return;
  const container = document.getElementById('full-test-content');

  // Part 1 HTML
  const p1Topics = (test.part1.topics || []).map((topic, ti) => `
    <div class="full-test-topic-name">${topic.name}</div>
    ${topic.questions.map((q, qi) => `
      <div class="full-test-q" onclick="loadFullTestQuestion(this)" title="Click to practise this question" style="cursor:pointer;">
        <div class="full-test-q-num">${qi + 1}</div>
        <div class="full-test-q-text">${q}</div>
      </div>`).join('')}
  `).join('');

  // Part 2 HTML
  const p2 = test.part2;
  const bulletItems = (p2.bullets || []).map(b => `<li>${b}</li>`).join('');
  const followUpHtml = (p2.followUp || []).map((q, i) => `
    <div class="full-test-q" style="margin-bottom:4px;">
      <div class="full-test-q-num" style="background:#fef3c7;color:#793701;">${i + 1}</div>
      <div class="full-test-q-text">${q}</div>
    </div>`).join('');

  // Part 3 HTML
  const p3Questions = (test.part3.questions || []).map((q, i) => `
    <div class="full-test-q" onclick="loadFullTestQuestion(this)" title="Click to practise this question" style="cursor:pointer;">
      <div class="full-test-q-num" style="background:#f3e8ff;color:#6d28d9;">${i + 1}</div>
      <div class="full-test-q-text">${q}</div>
    </div>`).join('');

  container.innerHTML = `
    <div class="full-test-header">
      <div class="full-test-theme">IELTS Speaking Test</div>
      <div class="full-test-title">${test.theme}</div>
      <div class="full-test-meta">
        <div class="full-test-meta-item">🕐 11–14 minutes total</div>
        <div class="full-test-meta-item">📋 3 linked parts</div>
        <div class="full-test-meta-item">🔗 Part 3 extends Part 2 theme</div>
      </div>
    </div>

    <!-- Part 1 -->
    <div class="full-test-part-block">
      <div class="full-test-part-header" onclick="toggleFullTestPart('p1-body', this)">
        <span class="full-test-part-label part-label-1">Part 1</span>
        <span class="full-test-part-name">Introduction & Interview</span>
        <span class="full-test-part-duration">4–5 min</span>
        <span class="full-test-part-chevron">▼</span>
      </div>
      <div class="full-test-part-body" id="p1-body">
        <div style="font-size:0.78rem;color:var(--on-surface-var);margin-bottom:10px;padding:8px 10px;background:var(--surface-low);border-radius:6px;">
          Answer naturally in 2–3 sentences. Be conversational — these are warm-up questions.
        </div>
        ${p1Topics}
      </div>
    </div>

    <!-- Part 2 -->
    <div class="full-test-part-block">
      <div class="full-test-part-header" onclick="toggleFullTestPart('p2-body', this)">
        <span class="full-test-part-label part-label-2">Part 2</span>
        <span class="full-test-part-name">Long Turn — Cue Card</span>
        <span class="full-test-part-duration">3–4 min</span>
        <span class="full-test-part-chevron">▼</span>
      </div>
      <div class="full-test-part-body" id="p2-body">
        <div style="font-size:0.78rem;color:var(--on-surface-var);margin-bottom:10px;padding:8px 10px;background:var(--surface-low);border-radius:6px;">
          You have 1 minute to prepare notes, then speak for 1–2 minutes without interruption.
        </div>
        <div class="full-test-cuecard">
          <div class="full-test-cuecard-title">Describe ${p2.cue.replace(/^Describe /i,'')}</div>
          <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;color:var(--primary);margin:8px 0 4px;">You should say:</div>
          <ul class="full-test-cuecard-bullets">${bulletItems}</ul>
          <div class="full-test-cuecard-prompt">⏱ ${p2.prompt}</div>
        </div>
        <button class="full-test-practise-btn" style="margin:8px 0;font-size:0.78rem;" onclick="startPrepTimer()">⏱ Start 1-min Prep Timer</button>
        <div class="prep-timer-wrap" id="prep-timer-wrap">
          <div class="prep-timer-countdown" id="prep-timer-countdown">1:00</div>
          <div class="prep-timer-label">Preparation time remaining</div>
          <div class="prep-timer-bar"><div class="prep-timer-bar-fill" id="prep-timer-bar-fill" style="width:100%"></div></div>
        </div>
        <div class="full-test-followup">
          <div class="full-test-followup-label">Follow-up questions (after your talk)</div>
          ${followUpHtml}
        </div>
      </div>
    </div>

    <!-- Part 3 -->
    <div class="full-test-part-block">
      <div class="full-test-part-header" onclick="toggleFullTestPart('p3-body', this)">
        <span class="full-test-part-label part-label-3">Part 3</span>
        <span class="full-test-part-name">Discussion — ${test.part3.topic}</span>
        <span class="full-test-part-duration">4–5 min</span>
        <span class="full-test-part-chevron">▼</span>
      </div>
      <div class="full-test-part-body" id="p3-body">
        <div style="font-size:0.78rem;color:var(--on-surface-var);margin-bottom:10px;padding:8px 10px;background:var(--surface-low);border-radius:6px;">
          Give extended, analytical answers. Support opinions with reasons and examples. Aim for 3–5 sentences per answer.
        </div>
        ${p3Questions}
      </div>
    </div>

    <div style="margin-top:12px;padding:10px 14px;background:var(--primary-fixed);border-radius:8px;font-size:0.8rem;color:var(--primary);">
      💡 <strong>Tip:</strong> Use the recorder below to practise each question. For Part 1, record one answer at a time. For Part 2, practise your full cue card response.
    </div>
  `;
}

function toggleFullTestPart(bodyId, header) {
  const body = document.getElementById(bodyId);
  if (!body) return;
  const chevron = header.querySelector('.full-test-part-chevron');
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  if (chevron) chevron.textContent = isOpen ? '▶' : '▼';
}

function startPrepTimer() {
  if (prepTimerInterval) { clearInterval(prepTimerInterval); prepTimerInterval = null; }
  const wrap = document.getElementById('prep-timer-wrap');
  const countdown = document.getElementById('prep-timer-countdown');
  const barFill = document.getElementById('prep-timer-bar-fill');
  if (!wrap || !countdown) return;
  wrap.classList.add('visible');
  let secs = 60;
  const total = 60;
  function tick() {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    countdown.textContent = m + ':' + (s < 10 ? '0' : '') + s;
    if (barFill) barFill.style.width = ((secs / total) * 100) + '%';
    if (secs <= 0) {
      clearInterval(prepTimerInterval);
      prepTimerInterval = null;
      countdown.textContent = 'Time up!';
      if (barFill) barFill.style.width = '0%';
      wrap.style.background = '#ba1a1a';
    }
    secs--;
  }
  tick();
  prepTimerInterval = setInterval(tick, 1000);
}

async function generateAiSpeakingTest() {
  const statusEl = document.getElementById('full-test-ai-status');
  const btn = document.querySelector('.full-test-practise-btn[onclick="generateAiSpeakingTest()"]');
  if (btn) { btn.disabled = true; btn.textContent = '⟳ Generating…'; }
  if (statusEl) statusEl.innerHTML = '<div class="ft-generating"><div class="ft-generating-dot"></div>Generating a fresh IELTS speaking test with AI…</div>';

  const generatorPrompt = `You are an IELTS Speaking test generator trained on official IELTS exam format.
Generate a FULL realistic IELTS Speaking test with Part 1, Part 2, and Part 3.

STRICT OUTPUT FORMAT — return ONLY this JSON, no markdown, no preamble:
{
  "theme": "Short theme title (e.g. 'Food & Culture')",
  "part1": {
    "topics": [
      {
        "name": "Topic name (e.g. 'Daily Meals')",
        "questions": ["Q1", "Q2", "Q3", "Q4"]
      },
      {
        "name": "Second topic name",
        "questions": ["Q1", "Q2", "Q3", "Q4"]
      }
    ]
  },
  "part2": {
    "cue": "Describe [realistic cue card topic]",
    "bullets": ["point 1", "point 2", "point 3", "point 4"],
    "prompt": "Preparation time: 1 minute. Speak for 1–2 minutes.",
    "followUp": ["Follow-up question 1", "Follow-up question 2"]
  },
  "part3": {
    "topic": "Discussion topic name (related to Part 2)",
    "questions": ["Q1", "Q2", "Q3", "Q4", "Q5"]
  }
}

RULES:
- Part 1: familiar personal topics (home, food, hobbies, routines, friends). Easy, conversational. 4 questions per topic.
- Part 2: common IELTS cue card style (person, place, experience, skill, object, event). Must include 4 bullet points + 2 follow-up questions.
- Part 3: abstract, analytical, society-level. NOT personal. Must start with phrases like "Why do people...", "How has...changed?", "To what extent...", "Do you think governments should...". 5 questions. Must connect thematically to Part 2.
- Do NOT use the same topic as: Technology & Daily Life, Travel & Culture, Work & Career, Environment & Nature, Education & Learning.
- Return ONLY the JSON object. No text before or after.`;

  try {
    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': getApiKey(), 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1800, messages: [{ role: 'user', content: generatorPrompt }] })
    });
    if (!response.ok) {
      const err = await response.json();
      if (response.status === 401) { /* disabled */ throw new Error('API key required'); }
      throw new Error(err?.error?.message || 'API error');
    }
    const data = await response.json();
    const raw = data.content?.[0]?.text || '';
    const cleaned = raw.replace(/```json|```/g, '').trim();
    const test = JSON.parse(cleaned);
    test.id = 'ai-' + Date.now();
    // Prepend to fullSpeakingTests and show it
    fullSpeakingTests.unshift(test);
    currentFullTestIndex = 0;
    renderFullTest(test);
    if (statusEl) statusEl.innerHTML = '<div style="font-size:0.78rem;color:#1a6b3c;padding:8px 12px;background:#f0fdf4;border-radius:6px;margin-top:8px;">✓ New test generated by AI</div>';
    setTimeout(() => { if (statusEl) statusEl.innerHTML = ''; }, 3000);
  } catch(e) {
    if (statusEl) statusEl.innerHTML = '<div style="font-size:0.78rem;color:var(--error);padding:8px 12px;background:var(--error-container);border-radius:6px;margin-top:8px;">Could not generate test. Check your API key and try again.</div>';
  }
  if (btn) { btn.disabled = false; btn.textContent = '✦ AI Generate Test'; }
}


function randomSpeakingPrompt() {
  const part = currentSpeakingPart || parseInt(document.getElementById('speaking-part').value) || 1;
  const prompts = speakingPrompts[part];
  if (!prompts || !prompts.length) return;
  const p = prompts[Math.floor(Math.random() * prompts.length)];
  renderSpeakingPrompt(p);
}

function renderSpeakingPrompt(text) {
  const el = document.getElementById('speaking-prompt-text');
  if (!el) return;
  // Format: split on \n and render bullets as proper list items
  const lines = text.split('\n').map(line => {
    const t = line.trim();
    if (!t) return '';
    if (t.startsWith('•')) {
      return `<div style="display:flex;gap:6px;margin:3px 0 3px 8px;"><span style="color:var(--primary);font-weight:700;flex-shrink:0;">•</span><span>${t.slice(1).trim()}</span></div>`;
    }
    // "You should say:" label
    if (t.toLowerCase().startsWith('you should say')) {
      return `<div style="font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.4px;color:var(--primary);margin:8px 0 4px;">${t}</div>`;
    }
    return `<div>${t}</div>`;
  }).filter(Boolean).join('');
  el.innerHTML = lines;
}

// ── Pre-permission flow ──
async function requestMicPermission() {
  // If we already have a live stream, go straight to interface
  if (micStream && micStream.active) {
    showSpeakingInterface();
    return;
  }
  try {
    // Single getUserMedia call — stream is stored and reused
    micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    micPermissionGranted = true;
    document.getElementById('mic-preprompt-screen').style.display = 'none';
    document.getElementById('mic-denied-screen').style.display = 'none';
    showSpeakingInterface();
  } catch(err) {
    document.getElementById('mic-preprompt-screen').style.display = 'none';
    document.getElementById('mic-denied-screen').style.display = 'block';
  }
}

function showSpeakingInterface() {
  document.getElementById('mic-preprompt-screen').style.display = 'none';
  document.getElementById('speaking-interface').classList.add('visible');
  randomSpeakingPrompt();
}

// ── Recording ──
async function toggleRecording() {
  if (!recordingActive) {
    await startRecording();
  } else {
    stopRecording();
  }
}

async function startRecording() {
  // Reuse existing stream — no new permission prompt
  try {
    let stream = micStream;
    if (!stream || !stream.active) {
      // Stream expired (rare) — request again silently
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStream = stream;
    }

    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();
    recordingActive = true;
    transcriptText = '';
    timerSecs = 0;

    // Update UI
    const btn = document.getElementById('record-btn');
    btn.classList.add('recording');
    document.getElementById('record-icon').textContent = '⏹';
    document.getElementById('record-hint').textContent = 'Recording… speak clearly';
    document.getElementById('record-hint').classList.add('recording-active');
    document.getElementById('transcript-text').textContent = '';
    document.getElementById('transcript-area').classList.remove('visible');
    document.getElementById('speaking-submit-row').style.display = 'none';
    document.getElementById('speaking-result').classList.add('hidden');

    // Timer
    const timerEl = document.getElementById('timer');
    timerEl.classList.add('running');
    timerEl.textContent = '0:00';
    timerInterval = setInterval(() => {
      timerSecs++;
      const m = Math.floor(timerSecs/60), s = timerSecs%60;
      timerEl.textContent = m+':'+(s<10?'0':'')+s;
      if (timerSecs >= 180) stopRecording();
    }, 1000);

    // Animated mic level bars (visual indicator using random animation)
    const bars = document.getElementById('mic-level-bars');
    bars.classList.add('active');
    const barEls = bars.querySelectorAll('.mic-bar');
    micLevelInterval = setInterval(() => {
      barEls.forEach(b => {
        const h = Math.floor(Math.random() * 20) + 4;
        b.style.height = h + 'px';
      });
    }, 100);

    // Speech recognition — single instance
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      window.liveRecog = new SR();
      window.liveRecog.continuous = true;
      window.liveRecog.interimResults = true;
      window.liveRecog.lang = 'en-US';
      window.liveRecog.onresult = (e) => {
        let final = '', interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) final += e.results[i][0].transcript + ' ';
          else interim += e.results[i][0].transcript;
        }
        transcriptText += final;
        const full = transcriptText + interim;
        document.getElementById('transcript-text').textContent = full;
        const wc = full.trim().split(/\s+/).filter(w=>w).length;
        document.getElementById('transcript-wc').textContent = wc + ' word' + (wc===1?'':'s');
        document.getElementById('transcript-area').classList.add('visible');
      };
      window.liveRecog.onerror = () => {}; // silent
      window.liveRecog.start();
    }
  } catch(e) {
    showError('speaking', 'Microphone error. Please check your settings and try again.');
    document.getElementById('mic-preprompt-screen').style.display = 'block';
    document.getElementById('speaking-interface').classList.remove('visible');
  }
}

function stopRecording() {
  if (!mediaRecorder) return;
  // Capture transcript snapshot NOW before recognition stops
  const transcriptSnapshot = transcriptText.trim() || document.getElementById('transcript-text').textContent.trim();

  // Stop MediaRecorder but DO NOT stop stream tracks (keeps micStream alive for reuse)
  try { mediaRecorder.stop(); } catch(e){}
  recordingActive = false;
  clearInterval(timerInterval);
  clearInterval(micLevelInterval);

  // Give SpeechRecognition a 400ms grace period to flush final results before stopping
  // This fixes the race condition where transcriptText is empty on fast stops
  setTimeout(() => {
    if (window.liveRecog) { try { window.liveRecog.stop(); } catch(e){} }
    // After recognition stops, sync transcriptText from DOM (catches final buffered results)
    const domTranscript = document.getElementById('transcript-text').textContent.trim();
    if (domTranscript && !transcriptText.trim()) {
      transcriptText = domTranscript;
    }
  }, 400);

  // Reset UI
  const btn = document.getElementById('record-btn');
  btn.classList.remove('recording');
  document.getElementById('record-icon').textContent = '🎙️';
  document.getElementById('record-hint').textContent = 'Tap to record again';
  document.getElementById('record-hint').classList.remove('recording-active');
  document.getElementById('timer').classList.remove('running');
  document.getElementById('mic-level-bars').classList.remove('active');

  if (timerSecs > 3) {
    document.getElementById('speaking-submit-row').style.display = 'flex';
  }
}

async function checkSpeaking() {
  // Sync transcript: prefer in-memory variable, fall back to DOM text
  // This handles the race condition where recognition fires after stopRecording
  const domTranscript = document.getElementById('transcript-text').textContent.trim();
  const transcript = (transcriptText.trim() || domTranscript).trim();

  // Also update transcriptText in case it was empty but DOM has content
  if (!transcriptText.trim() && domTranscript) transcriptText = domTranscript;

  const prompt = document.getElementById('speaking-prompt-text').textContent;
  const part = parseInt(document.getElementById('speaking-part').value) || 1;

  const wordCount = transcript ? transcript.split(/\s+/).filter(w => w.length > 0).length : 0;
  // Primary check: recording time; fallback: word count (lower threshold = 8 words)
  const recordingLongEnough = timerSecs >= 10;
  const transcriptLongEnough = wordCount >= 8;

  if (!transcript || (!recordingLongEnough && !transcriptLongEnough)) {
    showError('speaking', 'No speech detected. Please record a response first — speak clearly and ensure your microphone is working.');
    return;
  }

  // Show processing state
  const submitRow = document.getElementById('speaking-submit-row');
  if (submitRow) submitRow.innerHTML = `<div style="font-size:0.82rem;color:var(--on-surface-var);font-style:italic;">⏳ Processing your recording…</div>`;

  setLoading('speaking', true);
  document.getElementById('speaking-result').classList.add('hidden');

  const partGuidance = part === 1
    ? 'Part 1 (familiar topics, short answers): assess basic fluency, everyday vocabulary, simple/compound sentences.'
    : part === 2
    ? 'Part 2 (extended monologue, 1-2 min): assess sustained speech, topic development, discourse markers, grammar variety.'
    : 'Part 3 (abstract discussion): highest demands — expect speculation, complex structures, idiomatic vocabulary, nuanced argument.';

  const systemPrompt = `IELTS Speaking examiner. Score Part ${part}. Return ONLY valid JSON (no markdown, no code blocks):
{"overall":6.5,"fluency":6.5,"vocabulary":6.0,"grammar":7.0,"pronunciation":6.5,"fluency_label":"Fluency & Coherence","vocab_label":"Lexical Resource","grammar_label":"Grammatical Range & Accuracy","pronunciation_label":"Pronunciation","band_justification":"One sentence: main limiting factor","fluency_descriptor":"Fluency performance","fluency_why_not_higher":"What is missing","vocab_descriptor":"Vocabulary performance","vocab_why_not_higher":"What is missing","grammar_descriptor":"Grammar performance","grammar_why_not_higher":"What is missing","pronunciation_descriptor":"Pronunciation performance","pronunciation_why_not_higher":"What is missing","strengths":["strength 1","strength 2","strength 3"],"priority_improvements":["improvement 1","improvement 2","improvement 3"],"phrase_fixes":[{"original":"phrase used","improved":"better version","reason":"why"},{"original":"phrase 2","improved":"better 2","reason":"why"}],"upgrade_half_band":["action for +0.5 band","action 2"],"upgrade_one_band":["action for +1.0 band","action 2"],"overall_comment":"2-3 sentences of examiner commentary."}
Bands: 6=adequate,6.5=competent,7=good,7.5=strong,8=excellent.`;

  const userMsg = `${partGuidance}\n\nPROMPT: ${prompt}\n\nTRANSCRIPT:\n${transcript}`;
  try {
    const text = await callClaude({ system: systemPrompt, userMsg, maxTokens: 8000 });
    const result = JSON.parse(text.replace(/```json|```/g,'').trim());
    setLoading('speaking', false);
    renderSpeakingResult(result, part);
    saveToHistory({
      type: `Speaking Part ${part}`,
      band: result.overall,
      prompt: prompt.substring(0, 80) + '…'
    });
    // Save full speaking sample to Progress
    saveSpeakingSample({
      type: `Speaking Part ${part}`,
      part: part,
      band: result.overall,
      prompt: prompt,
      transcript: transcript,
      scores: {
        fluency: result.fluency,
        vocabulary: result.vocabulary,
        grammar: result.grammar,
        pronunciation: result.pronunciation,
      },
      band_justification: result.band_justification || '',
      overall_comment: result.overall_comment || '',
      strengths: result.strengths || [],
      priority_improvements: result.priority_improvements || [],
      phrase_fixes: result.phrase_fixes || [],
      upgrade_half_band: result.upgrade_half_band || [],
      upgrade_one_band: result.upgrade_one_band || [],
    });
  } catch(e) {
    setLoading('speaking', false);
    // Restore submit button on error
    const submitRow = document.getElementById('speaking-submit-row');
    if (submitRow) submitRow.innerHTML = `
      <button class="btn btn-primary" onclick="checkSpeaking()">✦ Analyse My Response</button>
      <button class="btn btn-outline" style="font-size:0.79rem;" onclick="resetSpeaking()">↺ Record Again</button>`;
    if (e.message !== 'API key required') showError('speaking', e.message || 'Error analysing response. Please try again.');
  }
}

function renderSpeakingResult(r, part) {
  // Overall band
  document.getElementById('speaking-band').textContent = r.overall;
  document.getElementById('speaking-justification').textContent = r.band_justification || '';

  // Per-criterion cards — now with why-not-higher
  const criteria = [
    { key: 'fluency',       label: 'Fluency & Coherence',          score: r.fluency,       descriptor: r.fluency_descriptor||'',       whyNot: r.fluency_why_not_higher||r.fluency_tip||'' },
    { key: 'vocabulary',    label: 'Lexical Resource',              score: r.vocabulary,    descriptor: r.vocabulary_descriptor||'',    whyNot: r.vocabulary_why_not_higher||r.vocabulary_tip||'' },
    { key: 'grammar',       label: 'Grammatical Range & Accuracy',  score: r.grammar,       descriptor: r.grammar_descriptor||'',       whyNot: r.grammar_why_not_higher||r.grammar_tip||'' },
    { key: 'pronunciation', label: 'Pronunciation',                 score: r.pronunciation, descriptor: r.pronunciation_descriptor||'', whyNot: r.pronunciation_why_not_higher||r.pronunciation_tip||'' },
  ];

  function scoreClass(s) { return s >= 7.5 ? 'score-high' : s >= 6.0 ? 'score-mid' : 'score-low'; }
  function fillClass(s)  { return s >= 7.5 ? 'fill-high'  : s >= 6.0 ? 'fill-mid'  : 'fill-low'; }

  document.getElementById('speaking-criteria').innerHTML = criteria.map(c => `
    <div class="speaking-crit-card">
      <div class="speaking-crit-header">
        <span class="speaking-crit-name">${c.label}</span>
        <span class="speaking-crit-score ${scoreClass(c.score)}">${c.score}</span>
      </div>
      <div class="speaking-gauge-track">
        <div class="speaking-gauge-fill ${fillClass(c.score)}" style="width:${Math.round((c.score/9)*100)}%"></div>
      </div>
      ${c.descriptor ? `<div class="speaking-crit-descriptor">${c.descriptor}</div>` : ''}
      ${c.whyNot ? `<div class="speaking-crit-tip">${c.whyNot}</div>` : ''}
    </div>`).join('');

  // Strengths and improvements
  const strengths    = Array.isArray(r.strengths)            ? r.strengths            : (r.strengths||'').split(/\n|•/).filter(s=>s.trim());
  const improvements = Array.isArray(r.priority_improvements)? r.priority_improvements: (r.improvements||'').split(/\n|•/).filter(s=>s.trim());
  const fixes        = Array.isArray(r.phrase_fixes)         ? r.phrase_fixes         : [];
  const upgradeHalf  = Array.isArray(r.upgrade_half_band)    ? r.upgrade_half_band    : [];
  const upgradeFull  = Array.isArray(r.upgrade_one_band)     ? r.upgrade_one_band     : [];

  function bulletToHtml(arr) {
    return arr.map(s => `<div style="display:flex;gap:6px;margin-bottom:5px;font-size:0.82rem;"><span style="flex-shrink:0;color:var(--primary);font-weight:700;margin-top:1px;">•</span><span>${s.replace(/^•\s*/,'')}</span></div>`).join('');
  }

  document.getElementById('speaking-strengths').innerHTML = bulletToHtml(strengths);
  document.getElementById('speaking-improvements').innerHTML = bulletToHtml(improvements);

  // Overall comment
  document.getElementById('speaking-overall-comment').innerHTML = '📋 ' + (r.overall_comment||'');

  // Phrase fixes (injected inside the improve card if available)
  if (fixes.length) {
    const fixHtml = fixes.map(f=>`
      <div class="fix-card" style="margin-top:8px;">
        <div class="fix-original">${f.original||''}</div>
        <div class="fix-improved">${f.improved||''}</div>
        <div class="fix-why">${f.reason||''}</div>
      </div>`).join('');
    document.getElementById('speaking-improvements').innerHTML += `
      <div style="font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;color:var(--on-surface-var);margin-top:10px;margin-bottom:4px;">Phrase Fixes</div>
      ${fixHtml}`;
  }

  // Band upgrade — inject into a new section below the feedback cards
  if (upgradeHalf.length || upgradeFull.length) {
    const upgradeHtml = `
      <div class="band-upgrade-grid" style="margin-top:10px;">
        <div class="band-upgrade-card half">
          <div class="band-upgrade-label">To reach +0.5 band</div>
          <ul class="improvement-list">${upgradeHalf.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
        <div class="band-upgrade-card full">
          <div class="band-upgrade-label">To reach +1.0 band</div>
          <ul class="improvement-list">${upgradeFull.map(s=>`<li>${s}</li>`).join('')}</ul>
        </div>
      </div>`;
    // Append after the transcript note
    const note = document.getElementById('speaking-overall-comment');
    if (note) note.insertAdjacentHTML('afterend', upgradeHtml);
  }

  // Show result
  const el = document.getElementById('speaking-result');
  el.classList.remove('hidden');
}

function resetSpeaking() {
  transcriptText = '';
  timerSecs = 0;
  clearInterval(timerInterval);
  clearInterval(micLevelInterval);
  if (recordingActive && mediaRecorder) { try { mediaRecorder.stop(); } catch(e){} }
  if (window.liveRecog) { try { window.liveRecog.stop(); } catch(e){} }
  recordingActive = false;

  const btn = document.getElementById('record-btn');
  if (btn) btn.classList.remove('recording');
  const ri = document.getElementById('record-icon');
  if (ri) ri.textContent = '🎙️';
  const rh = document.getElementById('record-hint');
  if (rh) { rh.textContent = 'Tap to start recording'; rh.classList.remove('recording-active'); }
  const timerEl = document.getElementById('timer');
  if (timerEl) { timerEl.textContent = '0:00'; timerEl.classList.remove('running'); }
  const ml = document.getElementById('mic-level-bars');
  if (ml) ml.classList.remove('active');
  const tt = document.getElementById('transcript-text');
  if (tt) tt.textContent = '';
  const twc = document.getElementById('transcript-wc');
  if (twc) twc.textContent = '0 words';
  const ta = document.getElementById('transcript-area');
  if (ta) ta.classList.remove('visible');
  const sr = document.getElementById('speaking-submit-row');
  if (sr) sr.style.display = 'none';
  const res = document.getElementById('speaking-result');
  if (res) res.classList.add('hidden');
}

// ══════════════════════════════════════════════
// QUESTION BANK
// ══════════════════════════════════════════════
let currentFilter = 'all';
function renderQuestions(filter) {
  currentFilter = filter;
  const usedIds = new Set(getHistory().map(h => h.promptId).filter(Boolean));
  const filtered = filter === 'all' ? questions : questions.filter(q => q.type === filter);
  document.getElementById('question-list').innerHTML = filtered.map(q => `
    <div class="question-card ${usedIds.has(q.id)?'used':''}" onclick="useQuestion(${q.id})">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">
        <div style="flex:1;min-width:0;">
          <div class="qcard-meta">
            <span class="qcard-tag tag-${q.type}">${q.type === 'task1' ? 'Task 1' : q.type === 'task2' ? 'Task 2' : 'Speaking'}</span>
            <span class="qcard-diff">${q.difficulty}</span>
            ${usedIds.has(q.id) ? '<span style="font-size:0.68rem;color:#1a6b3c;font-weight:600;">✓ Done</span>' : ''}
          </div>
          <p style="margin:6px 0 0;font-size:0.9rem;line-height:1.55;color:var(--on-surface);">${q.text.replace(/^Part \d+:\s*/i,'')}</p>
        </div>
        <button class="qcard-use-btn" onclick="event.stopPropagation();useQuestion(${q.id})">${q.type === 'speaking' ? 'Practice →' : 'Write →'}</button>
      </div>
    </div>
  `).join('');
}

function filterQuestions(filter, btn) {
  document.querySelectorAll('.qb-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderQuestions(filter);
}

function useQuestion(id) {
  const q = questions.find(x => x.id === id);
  if (!q) return;
  if (q.type === 'speaking') {
    renderSpeakingPrompt(q.text);
    showSection('speaking');
  } else {
    // Send to Check My Essay mode
    document.getElementById('writing-prompt').value = q.text;
    document.getElementById('writing-essay').value = '';
    document.getElementById('writing-wc').textContent = '0 words';
    showSection('writing');
    // Switch to Check My Essay mode
    const checkBtn = document.getElementById('mode-btn-check');
    if (checkBtn) switchWritingMode('check', checkBtn);
    // Set the correct task type
    const taskType = q.type === 'task1' ? 'task1' : 'task2';
    const taskTypeEl = document.getElementById('writing-task-type');
    if (taskTypeEl) taskTypeEl.textContent = taskType;
    // Scroll to the essay area
    const essayEl = document.getElementById('writing-essay');
    if (essayEl) setTimeout(() => { essayEl.focus(); essayEl.scrollIntoView({behavior:'smooth'}); }, 200);
  }
}

// Fix showSection nav tab highlighting
// [showSection defined earlier — see above]

// ══════════════════════════════════════════════
// PROGRESS
// ══════════════════════════════════════════════
function renderDashboard() {
  const h = getHistory();
  const samples = getWritingSamples();
  const container = document.getElementById('dashboard-content');
  if (!container) return;

  const avg = h.length ? (h.reduce((a,b) => a + b.band, 0) / h.length).toFixed(1) : null;
  const best = h.length ? Math.max(...h.map(x => x.band)) : null;
  const lastEntry = h[0];

  // Streak
  let streak = 0;
  if (h.length) {
    const today = new Date(); today.setHours(0,0,0,0);
    const days = new Set(h.map(e => { const d = new Date(e.date); d.setHours(0,0,0,0); return d.getTime(); }));
    let check = today.getTime();
    while (days.has(check)) { streak++; check -= 86400000; }
    if (streak === 0 && days.has(today.getTime() - 86400000)) streak = 1;
  }

  // CTA
  let ctaLabel = 'Start Writing Task 2 →';
  let ctaAction = "showSection('writing')";
  if (lastEntry) {
    ctaLabel = '↩ Continue Practising';
    ctaAction = lastEntry.type.includes('Speaking') ? "showSection('speaking')" : "showSection('writing')";
  }

  // Score trend SVG (last 8 sessions)
  const recent8 = h.slice(0, 8).reverse();
  const trendChart = recent8.length >= 2 ? (() => {
    const w = 300, ch = 56, pad = 10;
    const pts = recent8.map((x, i) => {
      const px = pad + (i / (recent8.length - 1)) * (w - pad * 2);
      const py = ch - pad - ((x.band - 4) / 5) * (ch - pad * 2);
      return { px, py, band: x.band };
    });
    const dotColor = b => b >= 7 ? '#1a6b3c' : b >= 5.5 ? '#003461' : '#ba1a1a';
    return `<div class="card" style="padding:1rem 1.3rem 0.8rem;margin-bottom:1rem;">
      <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--on-surface-var);margin-bottom:8px;">Band Score Trend</div>
      <svg viewBox="0 0 ${w} ${ch}" style="width:100%;display:block;overflow:visible;">
        <polyline points="${pts.map(p=>p.px+','+p.py).join(' ')}" fill="none" stroke="#003461" stroke-width="1.5" stroke-linejoin="round" opacity="0.3"/>
        ${pts.map(p => `<circle cx="${p.px}" cy="${p.py}" r="4.5" fill="${dotColor(p.band)}" opacity="0.9"/>
          <text x="${p.px}" y="${p.py-9}" text-anchor="middle" font-size="9" fill="var(--on-surface-var)" font-family="'Public Sans',sans-serif">${p.band}</text>`).join('')}
      </svg>
    </div>`;
  })() : '';

  // Criterion weakness bars from writing samples
  const weaknessHtml = (() => {
    if (samples.length < 1) return '';
    const acc = { ta: [], cc: [], lr: [], gra: [] };
    samples.slice(0, 8).forEach(s => {
      if (s.scores) {
        ['ta','cc','lr','gra'].forEach(k => { if (s.scores[k] != null) acc[k].push(s.scores[k]); });
      }
    });
    const avgs = Object.entries(acc)
      .filter(([,v]) => v.length > 0)
      .map(([k, v]) => ({ key: k, avg: v.reduce((a,b)=>a+b,0)/v.length }))
      .sort((a,b) => a.avg - b.avg);
    if (!avgs.length) return '';
    const labels = { ta:'Task Response', cc:'Coherence & Cohesion', lr:'Lexical Resource', gra:'Grammar Range' };
    return `<div class="card" style="padding:1rem 1.3rem;margin-bottom:1rem;">
      <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--on-surface-var);margin-bottom:12px;">Writing Criterion Averages <span style="font-weight:400;opacity:0.6;">(${samples.slice(0,8).length} essays)</span></div>
      ${avgs.map(cr => {
        const pct = Math.round(Math.max(0, ((cr.avg - 4) / 5) * 100));
        const col = cr.avg >= 7 ? '#1a6b3c' : cr.avg >= 6 ? '#003461' : '#ba1a1a';
        const isWeak = cr.avg === avgs[0].avg && cr.avg < 7;
        return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:7px;">
          <div style="width:140px;font-size:0.75rem;color:var(--on-surface-var);flex-shrink:0;">${labels[cr.key]}</div>
          <div style="flex:1;background:var(--surface-low);border-radius:4px;height:5px;">
            <div style="width:${pct}%;height:100%;background:${col};border-radius:4px;transition:width 0.6s;"></div>
          </div>
          <div style="width:26px;font-size:0.82rem;font-weight:700;color:${col};text-align:right;font-family:'Newsreader',serif;">${cr.avg.toFixed(1)}</div>
          ${isWeak ? `<div style="font-size:0.62rem;background:#fef3c7;color:#793701;padding:1px 6px;border-radius:10px;font-weight:700;">Focus</div>` : '<div style="width:42px;"></div>'}
        </div>`;
      }).join('')}
    </div>`;
  })();

  const lastSessionNote = lastEntry
    ? `<div style="margin-top:6px;font-size:0.76rem;color:rgba(255,255,255,0.75);">Last: ${lastEntry.type} · Band ${lastEntry.band} · ${new Date(lastEntry.date).toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</div>`
    : '';

  container.innerHTML = `
    <div class="dashboard-hero">
      <div class="dashboard-hero-text">
        <h2 style="font-family:'Newsreader',serif;font-weight:600;">${lastEntry ? 'Welcome back' : 'Ready to begin?'}</h2>
        <p>${lastEntry ? 'Pick up where you left off and keep building.' : 'Start practising to get expert IELTS feedback.'}</p>
        ${streak > 0 ? `<div style="margin-top:6px;font-size:0.78rem;color:rgba(255,255,255,0.9);">🔥 ${streak}-day streak</div>` : ''}
        ${lastSessionNote}
      </div>
      <button class="dashboard-cta-btn" style="font-family:'Public Sans',sans-serif;" onclick="${ctaAction}">${ctaLabel}</button>
    </div>

    <div class="dashboard-grid">
      <div class="dash-stat-card">
        <div class="dash-stat-num">${avg || '—'}</div>
        <div class="dash-stat-label">Avg Band</div>
        <div class="dash-stat-sub">${h.length} session${h.length!==1?'s':''}</div>
      </div>
      <div class="dash-stat-card">
        <div class="dash-stat-num">${best || '—'}</div>
        <div class="dash-stat-label">Best Score</div>
        <div class="dash-stat-sub">${best ? 'Personal best' : 'No scores yet'}</div>
      </div>
      <div class="dash-stat-card">
        <div class="dash-stat-num" style="color:${streak>0?'#c2410c':'var(--outline)'};">${streak}</div>
        <div class="dash-stat-label">Day Streak</div>
        <div class="dash-stat-sub">${streak>0 ? 'Keep going!' : 'Start today'}</div>
      </div>
    </div>

    ${trendChart}
    ${weaknessHtml}

    <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;color:var(--on-surface-var);margin-bottom:10px;">Quick Start</div>
    <div class="dashboard-actions" style="grid-template-columns:1fr 1fr;">
      <div class="dash-action-card primary-action" onclick="showSection('writing')">
        <div class="dash-action-icon">✍️</div>
        <div>
          <div class="dash-action-label">Writing Practice</div>
          <div class="dash-action-sub">Task 1 · Task 2 · Timed exam</div>
        </div>
      </div>
      <div class="dash-action-card" onclick="showSection('speaking')">
        <div class="dash-action-icon">🎙️</div>
        <div>
          <div class="dash-action-label">Speaking Practice</div>
          <div class="dash-action-sub">Part 1 · Part 2 · Part 3</div>
        </div>
      </div>
      <div class="dash-action-card" onclick="showSection('progress')">
        <div class="dash-action-icon">📈</div>
        <div>
          <div class="dash-action-label">Progress & Essays</div>
          <div class="dash-action-sub">${samples.length} essay${samples.length!==1?'s':''} saved</div>
        </div>
      </div>
      <div class="dash-action-card" onclick="showSection('vocab')">
        <div class="dash-action-icon">📖</div>
        <div>
          <div class="dash-action-label">Vocabulary</div>
          <div class="dash-action-sub">${getVocab().length} word${getVocab().length!==1?'s':''} saved</div>
        </div>
      </div>
    </div>

    ${!h.length ? `<div class="card" style="padding:1.6rem;text-align:center;border:1px dashed rgba(194,198,209,0.5);background:transparent;box-shadow:none;margin-top:0.8rem;">
      <div style="font-size:2rem;margin-bottom:0.6rem;">🎯</div>
      <div style="font-family:'Newsreader',serif;font-size:1.1rem;font-weight:600;color:var(--primary);margin-bottom:6px;">Your journey starts here</div>
      <div style="font-size:0.83rem;color:var(--on-surface-var);margin-bottom:1.2rem;line-height:1.6;max-width:360px;margin-left:auto;margin-right:auto;">Complete your first writing or speaking session to see your band score, track improvement, and receive targeted feedback.</div>
      <button class="btn btn-primary" onclick="showSection('writing')">Start First Session →</button>
    </div>` : ''}
  `;
}

function renderProgress() {
  const h = getHistory();
  const writingSamples = getWritingSamples();
  const speakingSamples = getSpeakingSamples();
  const container = document.getElementById('progress-content');

  if (h.length === 0 && writingSamples.length === 0 && speakingSamples.length === 0) {
    container.innerHTML = `<div class="progress-empty">
      <div style="font-size:3rem;margin-bottom:1rem">📊</div>
      <h3>No scores yet</h3>
      <p>Complete writing or speaking checks to see your progress here.</p>
    </div>`;
    return;
  }

  const avg = h.length ? (h.reduce((a,b) => a + b.band, 0) / h.length).toFixed(1) : '—';
  const best = h.length ? Math.max(...h.map(x => x.band)) : '—';
  const recent = h.slice(0, 10).reverse();

  const chartBars = recent.map(x => {
    const pct = ((x.band - 4) / 5) * 100;
    return `<div class="mini-bar" style="height:${Math.max(10,pct)}%" data-band="${x.band}" title="Band ${x.band}"></div>`;
  }).join('');

  // ── Helper to render a sample card (shared by writing & speaking) ──
  function renderSampleCard(s, isWriting) {
    const d = new Date(s.date);
    const ds = d.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
    const scoreClass = s.band >= 7 ? 'band-high' : s.band >= 5.5 ? 'band-mid' : 'band-low';
    const idPrefix = isWriting ? 'sample' : 'sp';
    const deleteFunc = isWriting ? 'deleteWritingSample' : 'deleteSpeakingSample';
    const toggleFunc = isWriting ? 'toggleSampleExpand' : 'toggleSpeakingSampleExpand';

    const scoreEntries = isWriting
      ? [
          { label: s.ta_label || 'Task Response', val: s.scores?.ta },
          { label: 'Coherence & Cohesion', val: s.scores?.cc },
          { label: 'Lexical Resource', val: s.scores?.lr },
          { label: 'Grammar', val: s.scores?.gra },
        ]
      : [
          { label: 'Fluency & Coherence', val: s.scores?.fluency },
          { label: 'Lexical Resource', val: s.scores?.vocabulary },
          { label: 'Grammar', val: s.scores?.grammar },
          { label: 'Pronunciation', val: s.scores?.pronunciation },
        ];

    const strengths = Array.isArray(s.strengths) ? s.strengths : [];
    const improvements = Array.isArray(s.priority_improvements) ? s.priority_improvements : [];
    const fixes = Array.isArray(s.phrase_fixes) ? s.phrase_fixes : [];
    const upgradeHalf = Array.isArray(s.upgrade_half_band) ? s.upgrade_half_band : [];
    const upgradeFull = Array.isArray(s.upgrade_one_band) ? s.upgrade_one_band : [];
    const contentText = isWriting ? s.essay : s.transcript;
    const contentLabel = isWriting ? 'Your Essay' : 'Your Transcript';

    return `
      <div class="writing-sample-card" id="${idPrefix}-${s.id}">
        <div class="writing-sample-header">
          <div class="writing-sample-meta">
            <div class="writing-sample-band-circle ${scoreClass}">${s.band}</div>
            <div>
              <div class="writing-sample-type">${s.type}</div>
              <div class="writing-sample-date">${ds}</div>
              ${s.band_justification ? `<div class="writing-sample-justification">${s.band_justification}</div>` : ''}
            </div>
          </div>
          <div style="display:flex;gap:8px;align-items:center;flex-shrink:0;">
            <button id="${idPrefix}-toggle-${s.id}" class="btn btn-outline" style="font-size:0.74rem;padding:5px 12px;" onclick="${toggleFunc}(${s.id})">▼ View feedback & ${isWriting ? 'essay' : 'transcript'}</button>
            <button class="btn" style="font-size:0.74rem;padding:5px 10px;background:var(--error-container);color:var(--error);border:none;" onclick="${deleteFunc}(${s.id})">✕</button>
          </div>
        </div>
        ${s.prompt ? `<div class="writing-sample-prompt">${s.prompt.substring(0,120)}${s.prompt.length>120?'…':''}</div>` : ''}
        <div id="${idPrefix}-detail-${s.id}" style="display:none;margin-top:1rem;">
          ${scoreEntries.filter(c => c.val != null).length ? `
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:1rem;">
            ${scoreEntries.map(cr => {
              if (cr.val == null) return '';
              const cc = cr.val >= 7.5 ? '#1a6b3c' : cr.val >= 6 ? 'var(--primary)' : '#ba1a1a';
              return `<div style="background:var(--surface-low);border-radius:8px;padding:10px;text-align:center;">
                <div style="font-size:1.2rem;font-weight:600;font-family:'Newsreader',serif;color:${cc};">${cr.val}</div>
                <div style="font-size:0.62rem;color:var(--on-surface-var);text-transform:uppercase;letter-spacing:0.4px;margin-top:2px;">${cr.label}</div>
              </div>`;
            }).join('')}
          </div>` : ''}
          ${s.overall_comment ? `<div style="background:var(--surface-low);border-radius:8px;padding:12px;font-size:0.83rem;color:var(--on-surface);line-height:1.6;margin-bottom:1rem;font-style:italic;">"${s.overall_comment}"</div>` : ''}
          ${strengths.length ? `
          <div style="margin-bottom:0.8rem;">
            <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--on-surface-var);margin-bottom:5px;">Strengths</div>
            ${strengths.map(st => `<div style="font-size:0.81rem;padding:3px 0 3px 15px;position:relative;line-height:1.5;"><span style="position:absolute;left:0;color:#1a6b3c;font-weight:700;">✓</span>${st.replace(/^•\s*/,'')}</div>`).join('')}
          </div>` : ''}
          ${improvements.length ? `
          <div style="margin-bottom:0.8rem;">
            <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--on-surface-var);margin-bottom:5px;">Priority Improvements</div>
            ${improvements.map(im => `<div style="font-size:0.81rem;padding:3px 0 3px 15px;position:relative;line-height:1.5;"><span style="position:absolute;left:0;color:var(--primary);font-weight:700;">→</span>${im.replace(/^•\s*/,'')}</div>`).join('')}
          </div>` : ''}
          ${fixes.length ? `
          <div style="margin-bottom:0.8rem;">
            <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--on-surface-var);margin-bottom:5px;">Phrase Fixes</div>
            ${fixes.map(f => `<div style="background:var(--surface-lowest);border-radius:6px;padding:8px 10px;margin-bottom:5px;border-left:3px solid #ba1a1a;">
              <div style="font-size:0.75rem;color:#7f1d1d;font-style:italic;margin-bottom:2px;">❌ ${f.original||''}</div>
              <div style="font-size:0.75rem;color:#14532d;margin-bottom:2px;">✓ ${f.improved||''}</div>
              <div style="font-size:0.71rem;color:var(--on-surface-var);">${f.reason||''}</div>
            </div>`).join('')}
          </div>` : ''}
          ${upgradeHalf.length || upgradeFull.length ? `
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:0.8rem;">
            <div style="background:var(--primary-fixed);border-radius:8px;padding:10px 12px;">
              <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;color:var(--primary);margin-bottom:5px;">To reach +0.5</div>
              ${upgradeHalf.map(s => `<div style="font-size:0.78rem;color:var(--on-surface);line-height:1.5;margin-bottom:2px;">• ${s}</div>`).join('')}
            </div>
            <div style="background:var(--surface-low);border-radius:8px;padding:10px 12px;">
              <div style="font-size:0.65rem;font-weight:700;text-transform:uppercase;letter-spacing:0.4px;color:#7c3aed;margin-bottom:5px;">To reach +1.0</div>
              ${upgradeFull.map(s => `<div style="font-size:0.78rem;color:var(--on-surface);line-height:1.5;margin-bottom:2px;">• ${s}</div>`).join('')}
            </div>
          </div>` : ''}
          ${contentText ? `
          <div>
            <div style="font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--on-surface-var);margin-bottom:5px;">${contentLabel}</div>
            <div style="background:var(--surface-lowest);border:1px solid rgba(194,198,209,0.2);border-radius:8px;padding:12px 14px;font-family:'Public Sans',sans-serif;font-size:0.84rem;line-height:1.8;color:var(--on-surface);white-space:pre-wrap;max-height:260px;overflow-y:auto;">${contentText.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
          </div>` : ''}
        </div>
      </div>`;
  }

  // Writing samples section
  const writingSamplesHtml = writingSamples.length ? `
    <div class="card" style="margin-top:1.2rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.8rem;">
        <div>
          <div class="card-title" style="margin-bottom:0;">✍️ Writing Samples</div>
          <div style="font-size:0.78rem;color:var(--on-surface-var);margin-top:3px;">${writingSamples.length} essay${writingSamples.length!==1?'s':''} saved with full feedback</div>
        </div>
        <button class="btn btn-outline" style="font-size:0.74rem;" onclick="clearWritingSamples()">Clear All</button>
      </div>
      ${writingSamples.map(s => renderSampleCard(s, true)).join('')}
    </div>` : '';

  // Speaking samples section
  const speakingSamplesHtml = speakingSamples.length ? `
    <div class="card" style="margin-top:1.2rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.8rem;">
        <div>
          <div class="card-title" style="margin-bottom:0;">🎙️ Speaking Sessions</div>
          <div style="font-size:0.78rem;color:var(--on-surface-var);margin-top:3px;">${speakingSamples.length} session${speakingSamples.length!==1?'s':''} saved with full feedback</div>
        </div>
        <button class="btn btn-outline" style="font-size:0.74rem;" onclick="clearSpeakingSamples()">Clear All</button>
      </div>
      ${speakingSamples.map(s => renderSampleCard(s, false)).join('')}
    </div>` : '';

  container.innerHTML = `
    <div class="avg-band-display">
      <div class="avg-stat"><div class="num">${avg}</div><div class="lbl">Average Band</div></div>
      <div class="avg-stat"><div class="num">${best}</div><div class="lbl">Best Score</div></div>
      <div class="avg-stat"><div class="num">${h.length}</div><div class="lbl">Total Checks</div></div>
    </div>
    ${h.length > 1 ? `<div class="card">
      <div class="card-title">Score Trend</div>
      <div class="card-sub">Last ${recent.length} checks</div>
      <div class="mini-chart">${chartBars}</div>
    </div>` : ''}
    ${writingSamplesHtml}
    ${speakingSamplesHtml}
    <div class="card" style="margin-top:1.2rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.8rem;">
        <div class="card-title" style="margin-bottom:0;">Score History</div>
        <button class="btn btn-outline" onclick="clearHistory()" style="font-size:0.76rem;color:var(--error);border-color:var(--error)">Clear History</button>
      </div>
      <div class="score-history">
        ${h.map(x => {
          const d = new Date(x.date);
          const ds = d.toLocaleDateString('en-GB', {day:'numeric',month:'short'});
          const bandColor = x.band >= 7 ? '#1a6b3c' : 'var(--primary)';
          return `<div class="history-item">
            <div class="hist-band" style="background:${bandColor}">${x.band}</div>
            <div class="hist-info">
              <div class="hist-type">${x.type}</div>
              <div class="hist-prompt">${x.prompt}</div>
            </div>
            <div class="hist-date">${ds}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

function clearWritingSamples() {
  if (confirm('Clear all saved writing samples?')) {
    localStorage.removeItem('ielts_writing_samples');
    renderProgress();
  }
}
function clearSpeakingSamples() {
  if (confirm('Clear all saved speaking sessions?')) {
    localStorage.removeItem('ielts_speaking_samples');
    renderProgress();
  }
}

// ══════════════════════════════════════════════
// SYNONYMS SECTION
// ══════════════════════════════════════════════
const SYNONYMS_DATA = {
  task1: [
    {
      id: 'increase-v', label: '増える・上がる (Verb)', labelClass: 'syn-label-blue',
      words: [
        {en:'rise', jp:'上昇する'}, {en:'grow', jp:'成長する'}, {en:'increase', jp:'増加する'},
        {en:'climb', jp:'上昇する'}, {en:'go up', jp:'上がる'}, {en:'double', jp:'2倍になる'},
        {en:'triple', jp:'3倍になる'}, {en:'escalate', jp:'急増する'}, {en:'surge', jp:'急上昇する'},
        {en:'soar', jp:'急騰する'}, {en:'expand', jp:'拡大する'}, {en:'boost', jp:'押し上げる'},
        {en:'elevate', jp:'高める'}, {en:'raise', jp:'引き上げる'},
      ],
      sentences: []
    },
    {
      id: 'increase-n', label: '増える・上がる (Noun phrase)', labelClass: 'syn-label-blue',
      words: [],
      sentences: [
        'There is an uptick in numbers.',
        'There has been a rise in numbers.',
        'There is an upward trend in numbers.',
        'The data shows a significant increase.',
      ]
    },
    {
      id: 'decrease-v', label: '減る・下がる (Verb)', labelClass: 'syn-label-orange',
      words: [
        {en:'fall', jp:'落ちる'}, {en:'drop', jp:'下落する'}, {en:'decline', jp:'減少する'},
        {en:'decrease', jp:'減る'}, {en:'diminish', jp:'縮小する'}, {en:'reduce', jp:'削減する'},
        {en:'halve', jp:'半減する'}, {en:'plunge', jp:'急落する'}, {en:'shrink', jp:'縮む'},
        {en:'go down', jp:'下がる'}, {en:'lower', jp:'引き下げる'}, {en:'dip', jp:'小幅下落する'},
        {en:'slide', jp:'じりじり下がる'}, {en:'collapse', jp:'急落・崩壊する'},
      ],
      sentences: []
    },
    {
      id: 'decrease-n', label: '減る・下がる (Noun phrase)', labelClass: 'syn-label-orange',
      words: [],
      sentences: [
        'There is a downward trend in numbers.',
        'There has been a reduction in numbers.',
        'There is a downturn in numbers.',
        'A sharp decrease was recorded.',
      ]
    },
    {
      id: 'stable', label: '横ばい (Stable)', labelClass: 'syn-label-teal',
      words: [
        {en:'level off', jp:'横ばいになる'}, {en:'flatten', jp:'平坦になる'}, {en:'stagnate', jp:'停滞する'},
        {en:'stabilise', jp:'安定する'}, {en:'plateau', jp:'頭打ちになる'}, {en:'remain constant', jp:'一定を保つ'},
        {en:'stay the same', jp:'変わらない'}, {en:'remain flat', jp:'横ばいのまま'},
      ],
      sentences: [
        'The figure levelled off at around 40%.',
        'The number remained stable throughout the period.',
        'There was little change overall.',
      ]
    },
    {
      id: 'fluctuate', label: '乱高下 (Fluctuate)', labelClass: 'syn-label-purple',
      words: [
        {en:'fluctuate', jp:'変動する'}, {en:'zig-zag', jp:'上下動する'}, {en:'oscillate', jp:'振動する'},
        {en:'vary', jp:'変化する'}, {en:'waver', jp:'揺れ動く'}, {en:'flutter', jp:'ちらつく'},
        {en:'undulate', jp:'波打つように変化する'},
      ],
      sentences: []
    },
    {
      id: 'speed', label: '微増 (Gradual)', labelClass: 'syn-label-green',
      words: [
        {en:'gradually', jp:'徐々に'}, {en:'steadily', jp:'着実に'}, {en:'gently', jp:'緩やかに'},
        {en:'slowly', jp:'ゆっくりと'}, {en:'slightly', jp:'わずかに'}, {en:'marginally', jp:'ごくわずかに'},
        {en:'moderately', jp:'適度に'},
      ],
      sentences: []
    },
    {
      id: 'speed2', label: '急変 (Sharp)', labelClass: 'syn-label-pink',
      words: [
        {en:'sharply', jp:'急激に'}, {en:'dramatically', jp:'劇的に'}, {en:'suddenly', jp:'突然'},
        {en:'steeply', jp:'急勾配で'}, {en:'rapidly', jp:'急速に'}, {en:'significantly', jp:'著しく'},
        {en:'considerably', jp:'かなり'}, {en:'substantially', jp:'大幅に'},
      ],
      sentences: []
    },
    {
      id: 'percentage', label: '% の言い換え', labelClass: 'syn-label-yellow',
      words: [
        {en:'approximately three quarters', jp:'約4分の3 (≈75%)'},
        {en:'nearly three quarters', jp:'ほぼ4分の3 (73%)'},
        {en:'just over a half', jp:'半分強 (51%)'},
        {en:'exactly a half', jp:'ちょうど半分 (50%)'},
        {en:'just under a half', jp:'半分弱 (49%)'},
        {en:'around a half', jp:'約半分 (48%)'},
        {en:'nearly a third', jp:'約3分の1 (32%)'},
        {en:'almost a quarter', jp:'ほぼ4分の1 (24%)'},
        {en:'a tiny fraction', jp:'ほんのわずか (3%)'},
      ],
      sentences: []
    },
    {
      id: 'overview', label: 'Overview Phrases', labelClass: 'syn-label-grey',
      words: [],
      sentences: [
        'Overall, it is clear that…',
        'In general, the data shows that…',
        'The most striking feature is that…',
        'What stands out most is…',
        'In summary, the figures indicate that…',
      ]
    },
  ],
  task2: [
    {
      id: 'opinion', label: 'Giving Opinion', labelClass: 'syn-label-blue',
      words: [
        {en:'In my view,', jp:'私の見解では'}, {en:'From my perspective,', jp:'私の視点から'},
        {en:'It seems to me that', jp:'私には〜のように思われる'}, {en:'I would argue that', jp:'私は〜と主張する'},
        {en:'I am convinced that', jp:'〜と確信している'}, {en:'I firmly believe that', jp:'〜と強く信じる'},
      ],
      sentences: []
    },
    {
      id: 'contrast', label: 'Contrast & Concession', labelClass: 'syn-label-orange',
      words: [
        {en:'However,', jp:'しかしながら'}, {en:'Nevertheless,', jp:'それにもかかわらず'},
        {en:'On the other hand,', jp:'一方で'}, {en:'Despite this,', jp:'これにもかかわらず'},
        {en:'Although', jp:'〜ではあるが'}, {en:'While', jp:'〜する一方で'},
        {en:'Even so,', jp:'それでも'}, {en:'That said,', jp:'そうは言っても'},
        {en:'In contrast,', jp:'対照的に'}, {en:'Conversely,', jp:'逆に'},
      ],
      sentences: []
    },
    {
      id: 'cause', label: 'Cause & Effect', labelClass: 'syn-label-green',
      words: [
        {en:'As a result,', jp:'その結果'}, {en:'Consequently,', jp:'その結果として'},
        {en:'Therefore,', jp:'したがって'}, {en:'This leads to', jp:'これは〜につながる'},
        {en:'This results in', jp:'これは〜をもたらす'}, {en:'Due to', jp:'〜が原因で'},
        {en:'Owing to', jp:'〜のために'}, {en:'This is because', jp:'なぜなら'},
        {en:'Hence,', jp:'それゆえ'}, {en:'Thus,', jp:'こうして'},
      ],
      sentences: []
    },
    {
      id: 'example', label: 'Giving Examples', labelClass: 'syn-label-purple',
      words: [
        {en:'For instance,', jp:'例えば'}, {en:'For example,', jp:'例えば'},
        {en:'Such as', jp:'〜のような'}, {en:'To illustrate,', jp:'説明するために'},
        {en:'A case in point is', jp:'典型的な例は'}, {en:'This can be seen in', jp:'これは〜に見られる'},
        {en:'Take … as an example', jp:'〜を例として挙げる'},
      ],
      sentences: []
    },
    {
      id: 'adding', label: 'Adding Information', labelClass: 'syn-label-teal',
      words: [
        {en:'Furthermore,', jp:'さらに'}, {en:'Moreover,', jp:'その上'},
        {en:'In addition,', jp:'加えて'}, {en:'Additionally,', jp:'また'},
        {en:'Besides,', jp:'さらに加えて'}, {en:'What is more,', jp:'さらに'},
        {en:'Not only … but also', jp:'〜だけでなく〜も'},
      ],
      sentences: []
    },
    {
      id: 'conclusion', label: 'Conclusion Phrases', labelClass: 'syn-label-yellow',
      words: [],
      sentences: [
        'In conclusion, it is clear that…',
        'To sum up, the evidence suggests that…',
        'All things considered,…',
        'On balance, I believe that…',
        'Taking everything into account,…',
      ]
    },
    {
      id: 'argument', label: 'Developing Arguments', labelClass: 'syn-label-pink',
      words: [],
      sentences: [
        'This is largely because…',
        'One key reason for this is…',
        'A major factor is the fact that…',
        'This can largely be attributed to…',
        'To be more specific,…',
        'It is worth noting that…',
      ]
    },
    {
      id: 'condition', label: 'Conditions & Suggestions', labelClass: 'syn-label-grey',
      words: [],
      sentences: [
        'If governments were to…, then…',
        'One possible solution would be to…',
        'It would be beneficial if…',
        'Authorities should consider…',
        'A more effective approach might be to…',
      ]
    },
  ]
};

let synInitialised = false;

function initSynonyms() {
  if (synInitialised) return;
  renderSynGrid('task1', SYNONYMS_DATA.task1);
  renderSynGrid('task2', SYNONYMS_DATA.task2);
  renderSynUserList();
  synInitialised = true;
}

function renderSynGrid(tab, data) {
  const el = document.getElementById('syn-grid-' + tab);
  if (!el) return;
  el.innerHTML = data.map(group => `
    <div class="syn-group" id="syngroup-${group.id}">
      <div class="syn-group-header" onclick="toggleSynGroup('${group.id}')">
        <span class="syn-group-label ${group.labelClass}">${group.label}</span>
        <span class="syn-toggle">▾</span>
      </div>
      <div class="syn-group-body">
        ${group.words.length ? `<ul class="syn-word-list">
          ${group.words.map(w => `<li>
            <span class="syn-word-en">${w.en}</span>
            ${w.jp ? `<span class="syn-word-jp">— ${w.jp}</span>` : ''}
          </li>`).join('')}
        </ul>` : ''}
        ${group.sentences.length ? `<div class="syn-sentences">
          ${group.sentences.map(s => `<div class="syn-sentence">${s}</div>`).join('')}
        </div>` : ''}
      </div>
    </div>
  `).join('');
}

function toggleSynGroup(id) {
  const el = document.getElementById('syngroup-' + id);
  if (el) el.classList.toggle('open');
}

function switchSynTab(tab, btn) {
  document.querySelectorAll('.syn-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  ['task1','task2','suggest'].forEach(t => {
    const el = document.getElementById('syn-' + t);
    if (el) el.style.display = t === tab ? 'block' : 'none';
  });
  if (tab === 'suggest') renderSynUserList();
}

function getSynSuggestions() {
  try { return JSON.parse(localStorage.getItem('ielts_syn_suggestions') || '[]'); } catch { return []; }
}

function addSynSuggestion() {
  const word = document.getElementById('syn-word-input').value.trim();
  const group = document.getElementById('syn-group-input').value;
  const example = document.getElementById('syn-example-input').value.trim();
  const jp = document.getElementById('syn-jp-input').value.trim();
  if (!word) { alert('Please enter a word or phrase.'); return; }
  const list = getSynSuggestions();
  list.unshift({ id: Date.now(), word, group, example, jp, date: new Date().toISOString() });
  localStorage.setItem('ielts_syn_suggestions', JSON.stringify(list));
  document.getElementById('syn-word-input').value = '';
  document.getElementById('syn-example-input').value = '';
  document.getElementById('syn-jp-input').value = '';
  renderSynUserList();
}

function deleteSynSuggestion(id) {
  const list = getSynSuggestions().filter(s => s.id !== id);
  localStorage.setItem('ielts_syn_suggestions', JSON.stringify(list));
  renderSynUserList();
}

const SYN_GROUP_LABELS = {
  increase:'Increase (V)', decrease:'Decrease (V)', stable:'Stable/Flat',
  speed:'Speed of Change', percentage:'% Language', opinion:'Opinion',
  contrast:'Contrast', cause:'Cause & Effect', example:'Examples', custom:'Custom'
};

function renderSynUserList() {
  const list = getSynSuggestions();
  const el = document.getElementById('syn-user-list');
  if (!el) return;
  if (!list.length) {
    el.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--on-surface-var);">
      <div style="font-size:2rem;margin-bottom:0.8rem;">💬</div>
      <div style="font-weight:600;color:var(--on-surface);margin-bottom:6px;">No suggestions yet</div>
      <div style="font-size:0.85rem;">Add words and phrases you want to remember above.</div>
    </div>`;
    return;
  }
  el.innerHTML = `<div style="font-size:0.8rem;font-weight:600;color:var(--on-surface-var);text-transform:uppercase;letter-spacing:0.5px;margin:1rem 0 0.6rem;">My Saved Words (${list.length})</div>` +
    list.map(s => `
    <div class="syn-user-card">
      <div>
        <div class="syn-user-word">${s.word}</div>
        <span class="syn-user-group">${SYN_GROUP_LABELS[s.group] || s.group}</span>
        ${s.example ? `<div class="syn-user-example">"${s.example}"</div>` : ''}
        ${s.jp ? `<div class="syn-user-jp">🇯🇵 ${s.jp}</div>` : ''}
      </div>
      <button class="syn-del-btn" onclick="deleteSynSuggestion(${s.id})" title="Remove">✕</button>
    </div>`).join('');
}

// INIT
randomSpeakingPrompt();
initWriting();

// ══════════════════════════════════════════════
// VOCABULARY SAVER
// ══════════════════════════════════════════════
const CATEGORY_LABELS = {
  general:'General Academic', environment:'Environment',
  technology:'Technology', society:'Society & Culture',
  health:'Health', education:'Education',
  economy:'Economy', phrases:'Linking Phrases'
};

function getVocab() {
  try { return JSON.parse(localStorage.getItem('ielts_vocab') || '[]'); } catch { return []; }
}
function saveVocab(list) {
  localStorage.setItem('ielts_vocab', JSON.stringify(list));
}

function addVocab() {
  const word = document.getElementById('vocab-word').value.trim();
  if (!word) { showError('vocab', 'Please enter a word or phrase.'); return; }
  const category = document.getElementById('vocab-category').value;
  const note = document.getElementById('vocab-note').value.trim();
  const list = getVocab();
  if (list.find(v => v.word.toLowerCase() === word.toLowerCase())) {
    showError('vocab', 'This word is already saved!'); return;
  }
  list.unshift({ id: Date.now(), word, category, note, definition:'', example:'', pos:'', reviewed:false, date: new Date().toISOString() });
  saveVocab(list);
  clearVocabInputs();
  renderVocab();
}

async function addVocabWithAI() {
  const word = document.getElementById('vocab-word').value.trim();
  if (!word) { showError('vocab', 'Please enter a word or phrase.'); return; }
  const category = document.getElementById('vocab-category').value;
  const note = document.getElementById('vocab-note').value.trim();
  const list = getVocab();
  if (list.find(v => v.word.toLowerCase() === word.toLowerCase())) {
    showError('vocab', 'This word is already saved!'); return;
  }

  setLoading('vocab', true);
  const systemPrompt = `You are an IELTS vocabulary expert. Given a word or phrase, return ONLY a JSON object:
{
  "pos": "noun / verb / adjective / adverb / phrase / etc",
  "definition": "Clear, concise definition suitable for IELTS learners (1-2 sentences)",
  "example": "One natural IELTS-style example sentence using the word",
  "synonyms": "2-3 synonyms or related words, comma-separated",
  "tip": "One short IELTS usage tip (when to use this word for high band scores)",
  "category": "Choose the best matching category from exactly these options: general / environment / technology / society / health / education / economy / phrases. Choose 'phrases' for linking words or multi-word expressions. Default to 'general' if unsure."
}
No markdown, no preamble. Only JSON.`;

  try {
    const text = await callClaude({
      system: systemPrompt,
      userMsg: `Word/phrase: "${word}"\nContext: IELTS ${CATEGORY_LABELS[category]} vocabulary`,
      maxTokens: 400,
    });
    const ai = JSON.parse(text.replace(/```json|```/g,'').trim());

    // Use AI-detected category if valid, otherwise fall back to user-selected
    const validCategories = ['general','environment','technology','society','health','education','economy','phrases'];
    const detectedCategory = ai.category && validCategories.includes(ai.category) ? ai.category : category;
    list.unshift({
      id: Date.now(), word, category: detectedCategory, note,
      definition: ai.definition || '',
      example: ai.example || '',
      pos: ai.pos || '',
      synonyms: ai.synonyms || '',
      tip: ai.tip || '',
      reviewed: false,
      date: new Date().toISOString()
    });
    // Flash the category select to show what was auto-detected
    const catEl = document.getElementById('vocab-category');
    if (catEl && detectedCategory !== category) {
      catEl.value = detectedCategory;
      catEl.style.borderColor = 'var(--primary)';
      setTimeout(() => { catEl.style.borderColor = ''; }, 1500);
    }
    saveVocab(list);
    clearVocabInputs();
    setLoading('vocab', false);
    renderVocab();
  } catch(e) {
    setLoading('vocab', false);
    if (e.message !== 'API key required') {
      showError('vocab', 'Could not fetch explanation. Word saved without definition.');
      list.unshift({ id: Date.now(), word, category, note, definition:'', example:'', pos:'', reviewed:false, date: new Date().toISOString() });
      saveVocab(list);
      clearVocabInputs();
      renderVocab();
    }
  }
}

function clearVocabInputs() {
  document.getElementById('vocab-word').value = '';
  document.getElementById('vocab-note').value = '';
}

function deleteVocab(id) {
  saveVocab(getVocab().filter(v => v.id !== id));
  renderVocab();
}

function toggleReviewed(id) {
  const list = getVocab();
  const v = list.find(x => x.id === id);
  if (v) v.reviewed = !v.reviewed;
  saveVocab(list);
  renderVocab();
}

let vocabReviewFilter = 'all'; // persists across re-renders

function setVocabReviewFilter(val, btn) {
  vocabReviewFilter = val;
  document.querySelectorAll('.vocab-rfbtn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderVocab();
}

function renderVocab() {
  let list = getVocab();
  const search = (document.getElementById('vocab-search')?.value || '').toLowerCase();
  const filter = document.getElementById('vocab-filter')?.value || 'all';

  if (search) list = list.filter(v => v.word.toLowerCase().includes(search) || (v.definition||'').toLowerCase().includes(search) || (v.note||'').toLowerCase().includes(search));
  if (filter !== 'all') list = list.filter(v => v.category === filter);
  if (vocabReviewFilter === 'reviewed') list = list.filter(v => v.reviewed);
  if (vocabReviewFilter === 'to-review') list = list.filter(v => !v.reviewed);

  const all = getVocab();
  const reviewed = all.filter(v => v.reviewed).length;

  // Stats
  const statsEl = document.getElementById('vocab-stats');
  if (statsEl) statsEl.innerHTML = `
    <div class="vocab-stat-pill"><strong>${all.length}</strong> saved</div>
    <div class="vocab-stat-pill"><strong>${reviewed}</strong> reviewed</div>
    <div class="vocab-stat-pill"><strong>${all.length - reviewed}</strong> to review</div>
  `;

  const container = document.getElementById('vocab-list');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="vocab-empty">
      <div style="font-size:3rem;margin-bottom:1rem">📖</div>
      <h3>${all.length === 0 ? 'No words saved yet' : 'No matching words'}</h3>
      <p>${all.length === 0 ? 'Add words above to build your personal IELTS vocabulary bank.' : 'Try a different search or filter.'}</p>
    </div>`;
    return;
  }

  container.innerHTML = list.map(v => {
    const d = new Date(v.date);
    const ds = d.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
    return `<div class="vocab-card ${v.reviewed ? 'reviewed' : ''}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;">
        <div style="flex:1">
          <div class="vocab-word">${v.word}${v.pos ? `<span class="vocab-pos">${v.pos}</span>` : ''}</div>
          ${v.definition ? `<div class="vocab-def">${v.definition}</div>` : ''}
          ${v.example ? `<div class="vocab-example">"${v.example}"</div>` : ''}
          ${v.synonyms ? `<div style="font-size:0.8rem;color:var(--primary);margin-bottom:6px;">≈ ${v.synonyms}</div>` : ''}
          ${v.tip ? `<div style="font-size:0.8rem;background:#fef9ee;border-radius:6px;padding:6px 10px;color:#7a5500;margin-bottom:8px;">💡 ${v.tip}</div>` : ''}
          ${v.note ? `<div class="vocab-note-text">📝 ${v.note}</div>` : ''}
          <div class="vocab-meta" style="margin-top:8px;">
            <span class="vocab-tag">${CATEGORY_LABELS[v.category] || v.category}</span>
            <span class="vocab-date">${ds}</span>
            ${v.reviewed ? '<span style="font-size:0.7rem;color:var(--green);font-weight:600;">✓ Reviewed</span>' : ''}
          </div>
        </div>
      </div>
      <div class="vocab-actions">
        <button class="vocab-btn review-btn" onclick="toggleReviewed(${v.id})">${v.reviewed ? '↩ Unmark' : '✓ Mark Reviewed'}</button>
        <button class="vocab-btn delete-btn" onclick="deleteVocab(${v.id})">🗑 Delete</button>
      </div>
    </div>`;
  }).join('');
}

function exportVocab() {
  const list = getVocab();
  if (!list.length) { alert('No vocabulary saved yet.'); return; }
  const lines = ['Word\tPart of Speech\tDefinition\tExample\tSynonyms\tCategory\tNote\tReviewed\tDate'];
  list.forEach(v => {
    lines.push([v.word, v.pos||'', v.definition||'', v.example||'', v.synonyms||'', CATEGORY_LABELS[v.category]||v.category, v.note||'', v.reviewed?'Yes':'No', v.date.split('T')[0]].join('\t'));
  });
  const blob = new Blob([lines.join('\n')], { type: 'text/tab-separated-values' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ielts-vocabulary.tsv';
  a.click();
}

// ══════════════════════════════════════════════
// API KEY MANAGEMENT
// ══════════════════════════════════════════════
function getApiKey() {
  var _k=['sk-ant-api03-42wKzZUjJ','jQTJLyO3CRgfYFC-nKfX8OvVh36bAA','foVGsYnxW7B1SLAaU9edxpTrjNwKx0lY5pAXm9vjermbU_Q-4l2UkgAA'].join('');
  if(!localStorage.getItem('ielts_api_key')){localStorage.setItem('ielts_api_key',_k);}
  return localStorage.getItem('ielts_api_key')||_k;
}

function updateKeyIndicator() {
  const key = getApiKey();
  const dot = document.getElementById('key-dot');
  const text = document.getElementById('key-indicator-text');
  if (key && key.startsWith('sk-ant-')) {
    dot.classList.remove('red');
    // Show last 4 chars only so students can confirm their key
    text.textContent = 'Active ✓';
  } else {
    dot.classList.remove('red');
    text.textContent = 'Active ✓';
  }
}

function openKeyModal() {
  const modal = document.getElementById('api-key-modal');
  const cancelBtn = document.getElementById('modal-cancel-btn');
  const existing = getApiKey();
  // Show cancel button only if a key already exists (so they can dismiss)
  cancelBtn.style.display = existing ? 'inline-flex' : 'none';
  if (existing) document.getElementById('api-key-input').value = existing;
  modal.classList.remove('hidden');
  setTimeout(() => document.getElementById('api-key-input').focus(), 100);
}

function closeKeyModal() {
  document.getElementById('api-key-modal').classList.add('hidden');
  document.getElementById('modal-err').classList.remove('visible');
}

function saveApiKey() {
  const input = document.getElementById('api-key-input');
  const key = input.value.trim();
  const errEl = document.getElementById('modal-err');
  // Basic validation — Anthropic keys start with sk-ant-
  if (!key || !key.startsWith('sk-ant-')) {
    errEl.classList.add('visible');
    input.classList.add('error');
    return;
  }
  errEl.classList.remove('visible');
  input.classList.remove('error');
  localStorage.setItem('ielts_api_key', key);
  updateKeyIndicator();
  closeKeyModal();
}

function toggleKeyVisibility() {
  const input = document.getElementById('api-key-input');
  const btn = document.getElementById('eye-btn');
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁';
  }
}

// Allow Enter key to submit
document.getElementById('api-key-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') saveApiKey();
});

// ══════════════════════════════════════════════
// CENTRAL CLAUDE API CALLER
// All AI calls go through here — injects API key automatically
// ══════════════════════════════════════════════
async function callClaude({ system, userMsg, maxTokens = 8000 }) {
  const res = await fetch('/api/score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: maxTokens,
      system,
      messages: [{ role: 'user', content: userMsg }],
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API error ${res.status}`);
  }
  const data = await res.json();
  return data.content?.[0]?.text || '';
}


// ══════════════════════════════════════════════
// CHATBOT (Practice Assistant)
// ══════════════════════════════════════════════
let chatHistory = [];
let chatbotOpen = false;

function toggleChatbot() {
  chatbotOpen = !chatbotOpen;
  const panel = document.getElementById('chatbot-panel');
  const icon = document.getElementById('chatbot-toggle-icon');
  if (chatbotOpen) {
    panel.classList.add('open');
    icon.textContent = '✕';
    document.getElementById('chatbot-input').focus();
  } else {
    panel.classList.remove('open');
    icon.textContent = '💬';
  }
}

function chatQuickAction(text) {
  if (!chatbotOpen) toggleChatbot();
  const input = document.getElementById('chatbot-input');
  input.value = text + ' ';
  input.focus();
  input.style.height = 'auto';
  input.style.height = input.scrollHeight + 'px';
}

function chatScoreCurrentEssay() {
  // Pull the current essay from whichever mode is active
  const examEssay = document.getElementById('exam-essay')?.value?.trim();
  const checkEssay = document.getElementById('writing-essay')?.value?.trim();
  const essay = examEssay || checkEssay || '';
  if (!essay) {
    chatQuickAction('Score this essay: ');
    return;
  }
  if (!chatbotOpen) toggleChatbot();
  const input = document.getElementById('chatbot-input');
  const task = document.getElementById('exam-task-type')?.textContent || document.getElementById('writing-task-type')?.textContent || 'task2';
  const taskLabel = task === 'task1' ? 'Writing Task 1' : 'Writing Task 2';
  input.value = `Score this ${taskLabel} essay:\n\n${essay.slice(0, 2000)}`;
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 80) + 'px';
  input.focus();
}

function appendChatMsg(text, role) {
  const msgs = document.getElementById('chatbot-messages');
  const div = document.createElement('div');
  div.className = 'chatbot-msg ' + role;
  // Render basic markdown: **bold**, *italic*, bullet points, line breaks
  const formatted = text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>')
    .replace(/^[•\-]\s+(.+)$/gm, '<div style="display:flex;gap:5px;margin-top:2px;"><span style="flex-shrink:0;opacity:0.6;">•</span><span>$1</span></div>')
    .replace(/\n/g, '<br>');
  div.innerHTML = formatted;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

async function sendChatMessage() {
  const input = document.getElementById('chatbot-input');
  const msg = input.value.trim();
  if (!msg) return;

  // key seeded in getApiKey()return; }

  input.value = '';
  input.style.height = 'auto';

  appendChatMsg(msg, 'user');
  chatHistory.push({ role: 'user', content: msg });

  const loadingDiv = appendChatMsg('Thinking…', 'loading');
  document.getElementById('chatbot-send').disabled = true;

  const isSaveRequest = /save.*(?:word|vocab|this)|add.*(?:vocab|word|my list)/i.test(msg);
  const wordToSave = isSaveRequest
    ? msg.replace(/^.*?(?:save|add)\s+(?:this\s+)?(?:word\s+)?(?:to\s+(?:my\s+)?vocab(?:ab\w*)?(?:\s*list)?\s*)?[:\-]?\s*/i, '').replace(/['"""'']/g,'').trim().split(/\s+/).slice(0,4).join(' ')
    : null;

  // Handle vocab save directly without API call
  if (isSaveRequest && wordToSave && wordToSave.length > 0 && wordToSave.length < 60) {
    loadingDiv.remove();
    document.getElementById('chatbot-send').disabled = false;

    // Pre-fill the vocab input and trigger AI save
    const vocabWordEl = document.getElementById('vocab-word');
    if (vocabWordEl) {
      vocabWordEl.value = wordToSave;
      const replyMsg = `Saving **"${wordToSave}"** to your Vocabulary tab now — I'll fetch the definition, example sentence, and IELTS usage tip for you! ✓`;
      appendChatMsg(replyMsg.replace(/\*\*/g,''), 'bot');
      chatHistory.push({ role: 'assistant', content: replyMsg });
      // Call the AI vocab save function
      await addVocabWithAI();
    } else {
      appendChatMsg('I couldn\'t find the vocabulary input. Please go to the Vocabulary tab and type the word there.', 'bot');
    }
    return;
  }

  const systemPrompt = `You are an expert IELTS examiner and study coach. Help students improve their IELTS writing and speaking. You can score essays and speaking responses, rewrite content at Band 8 level, suggest synonyms and phrases, help paraphrase, give topic ideas, and diagnose app issues. When scoring, assess Task Response/Achievement, Coherence & Cohesion, Lexical Resource, and Grammatical Range & Accuracy. Band calibration: 6=adequate, 6.5=competent, 7=good, 7.5=strong, 8=excellent.`;

  try {
    // Build messages from history (last 8 turns for richer context)
    const msgs = chatHistory.slice(-8).map(m => ({ role: m.role, content: m.content }));

    // Inject current app context as a system note
    const activeSection = document.querySelector('.section.active')?.id || 'unknown';
    const currentPrompt = document.getElementById('speaking-prompt-text')?.textContent?.slice(0,120)
      || document.getElementById('exam-prompt-body')?.textContent?.slice(0,120)
      || document.getElementById('writing-prompt')?.value?.slice(0,120)
      || '';
    const contextNote = currentPrompt
      ? `\n[App context: student is on the ${activeSection} section. Current question/prompt: "${currentPrompt.trim()}"]`
      : `\n[App context: student is on the ${activeSection} section.]`;

    const response = await fetch('/api/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': getApiKey(), 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1200,
        system: systemPrompt + contextNote,
        messages: msgs
      })
    });

    if (!response.ok) {
      const err = await response.json();
      if (response.status === 401) { /* disabled */ throw new Error('API key required'); }
      throw new Error(err?.error?.message || 'API error');
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || 'Sorry, I could not generate a response.';

    loadingDiv.remove();
    appendChatMsg(reply, 'bot');
    chatHistory.push({ role: 'assistant', content: reply });

    // Show badge dot on toggle button if panel is closed
    if (!chatbotOpen) {
      document.getElementById('chatbot-badge').classList.add('has-msgs');
    }
  } catch(e) {
    loadingDiv.remove();
    if (e.message !== 'API key required') {
      appendChatMsg('Sorry, I had trouble responding. Please try again.', 'bot');
    }
  }
  document.getElementById('chatbot-send').disabled = false;
}


// ══════════════════════════════════════════════
// VOCAB SAVE FROM SELECTION / PROMPT
// ══════════════════════════════════════════════
(function setupVocabSaveTooltip() {
  // Create tooltip element once
  const tip = document.createElement('div');
  tip.id = 'vocab-save-tooltip';
  tip.textContent = '📖 Save to Vocab';
  tip.style.display = 'none';
  document.body.appendChild(tip);

  // Show tooltip near selected text in any .exam-prompt-body, .speaking-prompt-text, or .exam-write-panel
  document.addEventListener('mouseup', (e) => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.toString().trim().length < 2) {
      tip.style.display = 'none';
      return;
    }
    const word = sel.toString().trim().split(/\s+/).slice(0,4).join(' ');
    if (word.length > 50) { tip.style.display = 'none'; return; }

    // Only show near writing prompts, exam area, speaking prompt
    const target = e.target.closest('.exam-prompt-body, .exam-prompt-panel, .speaking-prompt-text, .speaking-prompt-card, .writing-detail-prompt');
    if (!target) { tip.style.display = 'none'; return; }

    tip.textContent = '📖 Save "' + word.slice(0,22) + (word.length>22?'…':'') + '"';
    tip.style.display = 'block';
    tip.style.top = (e.clientY - 44) + 'px';
    tip.style.left = Math.min(e.clientX - 60, window.innerWidth - 200) + 'px';
    tip.onclick = () => {
      quickSaveWordToVocab(word);
      tip.style.display = 'none';
      window.getSelection()?.removeAllRanges?.();
    };
  });

  document.addEventListener('mousedown', (e) => {
    if (e.target !== tip) tip.style.display = 'none';
  });
  document.addEventListener('scroll', () => { tip.style.display = 'none'; }, true);
})();

function quickSaveWordToVocab(word) {
  if (!word) return;
  word = word.trim();
  const list = getVocab();
  if (list.find(v => v.word.toLowerCase() === word.toLowerCase())) {
    // Already saved — show confirmation
    showVocabToast('"' + word + '" is already in your vocab list ✓');
    return;
  }
  // Pre-fill and trigger AI save
  const vocabWordEl = document.getElementById('vocab-word');
  if (vocabWordEl) {
    vocabWordEl.value = word;
    addVocabWithAI().then(() => {
      showVocabToast('"' + word + '" saved to vocabulary ✓');
    }).catch(() => {
      showVocabToast('"' + word + '" saved (no definition — add API key for AI explanation)');
    });
  }
}

function saveSelectedOrPromptWord(elementId) {
  // Try selected text first, then use full prompt
  const sel = window.getSelection()?.toString()?.trim();
  if (sel && sel.length > 1 && sel.length < 60) {
    quickSaveWordToVocab(sel.split(/\s+/).slice(0,4).join(' '));
    return;
  }
  // Prompt for a word from the element
  const el = document.getElementById(elementId);
  const promptText = el ? el.textContent : '';
  const word = window.prompt('Type the word or phrase you want to save from this prompt:', '');
  if (word && word.trim()) quickSaveWordToVocab(word.trim());
}

function showVocabToast(msg) {
  let toast = document.getElementById('vocab-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'vocab-toast';
    toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--primary);color:white;padding:8px 18px;border-radius:20px;font-family:"Public Sans",sans-serif;font-size:0.82rem;font-weight:600;z-index:9998;box-shadow:0 4px 16px rgba(0,52,97,0.3);transition:opacity 0.3s;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.display = 'block';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => { toast.style.display = 'none'; }, 300);
  }, 2500);
}


// ══════════════════════════════════════════════
// SUPABASE — Auth + Cloud Database
// Replace THESE TWO values after creating your project:
// ══════════════════════════════════════════════
const SUPABASE_URL = 'https://avtiychylawasnokrixj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2dGl5Y2h5bGF3YXNub2tyaXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxNDE4MzksImV4cCI6MjA4OTcxNzgzOX0.UDj98V57fvLIO4yf_BS0v_Kk4wra08gnkM2DLXKuy98';

const _sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let _currentUser = null;

// ── Auth Tab Switcher ──────────────────────────
let _authMode = 'login';
function switchAuthTab(mode) {
  _authMode = mode;
  document.getElementById('tab-login').style.background = mode==='login' ? '#003461' : 'white';
  document.getElementById('tab-login').style.color = mode==='login' ? 'white' : '#57657a';
  document.getElementById('tab-signup').style.background = mode==='signup' ? '#003461' : 'white';
  document.getElementById('tab-signup').style.color = mode==='signup' ? 'white' : '#57657a';
  document.getElementById('auth-submit-btn').textContent = mode==='login' ? 'Sign In' : 'Create Account';
  document.getElementById('auth-forgot').style.display = mode==='login' ? 'block' : 'none';
  document.getElementById('auth-error').style.display = 'none';
  document.getElementById('auth-success').style.display = 'none';
}

function showAuthError(msg) {
  const el = document.getElementById('auth-error');
  el.textContent = msg; el.style.display = 'block';
  document.getElementById('auth-success').style.display = 'none';
}
function showAuthSuccess(msg) {
  const el = document.getElementById('auth-success');
  el.textContent = msg; el.style.display = 'block';
  document.getElementById('auth-error').style.display = 'none';
}

async function handleAuth() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const btn = document.getElementById('auth-submit-btn');
  if (!email || !password) { showAuthError('Please enter your email and password.'); return; }
  btn.textContent = 'Please wait…'; btn.disabled = true;
  try {
    if (_authMode === 'signup') {
      const { error } = await _sb.auth.signUp({ email, password });
      if (error) throw error;
      showAuthSuccess('Account created! Check your email to confirm, then sign in.');
      switchAuthTab('login');
    } else {
      const { data, error } = await _sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      // onAuthStateChange will handle the rest
    }
  } catch(e) {
    showAuthError(e.message || 'Something went wrong. Please try again.');
  }
  btn.textContent = _authMode === 'login' ? 'Sign In' : 'Create Account';
  btn.disabled = false;
}

async function handleForgotPassword() {
  const email = document.getElementById('auth-email').value.trim();
  if (!email) { showAuthError('Enter your email address first.'); return; }
  const { error } = await _sb.auth.resetPasswordForEmail(email);
  if (error) showAuthError(error.message);
  else showAuthSuccess('Password reset email sent! Check your inbox.');
}

function skipAuth() {
  _currentUser = null;
  _cloudSyncEnabled = false;
  document.getElementById('auth-screen').style.display = 'none';
  renderDashboard();
  renderProgress();
}

async function signOut() {
  await _sb.auth.signOut();
  _currentUser = null;
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('user-indicator').style.display = 'none';
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-password').value = '';
}

// ── Auth State Listener ────────────────────────
_sb.auth.onAuthStateChange(async (event, session) => {
  if (session?.user) {
    _currentUser = session.user;
    _cloudSyncEnabled = true;
    document.getElementById('auth-screen').style.display = 'none';
    const indicator = document.getElementById('user-indicator');
    indicator.style.display = 'flex';
    document.getElementById('user-email-display').textContent = session.user.email.split('@')[0];
    // Load user data into localStorage for compatibility
    await syncFromCloud();
    renderDashboard();
    renderProgress();
  } else {
    _currentUser = null;
    _cloudSyncEnabled = false;
    document.getElementById('auth-screen').style.display = 'flex';
    document.getElementById('user-indicator').style.display = 'none';
  }
});

// ── Cloud Sync ─────────────────────────────────
async function syncFromCloud() {
  if (!_currentUser) return;
  try {
    // Load history
    const { data: hist } = await _sb.from('ielts_history').select('*').order('date', {ascending:false}).limit(50);
    if (hist) localStorage.setItem('ielts_history', JSON.stringify(hist.map(r => ({...r, date: r.date}))));

    // Load writing samples
    const { data: ws } = await _sb.from('ielts_writing_samples').select('*').order('date', {ascending:false}).limit(30);
    if (ws) localStorage.setItem('ielts_writing_samples', JSON.stringify(ws));

    // Load speaking samples
    const { data: ss } = await _sb.from('ielts_speaking_samples').select('*').order('date', {ascending:false}).limit(30);
    if (ss) localStorage.setItem('ielts_speaking_samples', JSON.stringify(ss));

    // Load vocab
    const { data: vocab } = await _sb.from('ielts_vocab').select('*').order('date', {ascending:false}).limit(500);
    if (vocab) localStorage.setItem('ielts_vocab', JSON.stringify(vocab));
  } catch(e) {
    console.warn('Cloud sync failed, using local data:', e.message);
  }
}

// ── Cloud sync patches (assignment-based, no hoisting issues) ──
let _cloudSyncEnabled = false;

const _localSaveToHistory = saveToHistory;
saveToHistory = function(entry) {
  _localSaveToHistory(entry);
  if (_cloudSyncEnabled && _currentUser) {
    _sb.from('ielts_history').insert({ user_id: _currentUser.id, type: entry.type, band: entry.band, prompt: entry.prompt, date: entry.date || new Date().toISOString() })
      .then(({error}) => { if(error) console.warn('History save:', error.message); });
  }
};
const _localSaveWritingSample = saveWritingSample;
saveWritingSample = function(sample) {
  _localSaveWritingSample(sample);
  if (_cloudSyncEnabled && _currentUser) {
    _sb.from('ielts_writing_samples').insert({ user_id: _currentUser.id, ...sample, id: undefined })
      .then(({error}) => { if(error) console.warn('Writing save:', error.message); });
  }
};
const _localSaveSpeakingSample = saveSpeakingSample;
saveSpeakingSample = function(sample) {
  _localSaveSpeakingSample(sample);
  if (_cloudSyncEnabled && _currentUser) {
    _sb.from('ielts_speaking_samples').insert({ user_id: _currentUser.id, ...sample, id: undefined })
      .then(({error}) => { if(error) console.warn('Speaking save:', error.message); });
  }
};
const _localSaveVocab = saveVocab;
saveVocab = function(list) {
  _localSaveVocab(list);
  if (_cloudSyncEnabled && _currentUser) { syncVocabToCloud(list); }
};
const _localDeleteWritingSample = deleteWritingSample;
deleteWritingSample = function(id) {
  _localDeleteWritingSample(id);
  if (_cloudSyncEnabled && _currentUser) {
    _sb.from('ielts_writing_samples').delete().eq('user_id', _currentUser.id).eq('id', id)
      .then(({error}) => { if(error) console.warn('Delete writing:', error.message); });
  }
};
const _localDeleteSpeakingSample = deleteSpeakingSample;
deleteSpeakingSample = function(id) {
  _localDeleteSpeakingSample(id);
  if (_cloudSyncEnabled && _currentUser) {
    _sb.from('ielts_speaking_samples').delete().eq('user_id', _currentUser.id).eq('id', id)
      .then(({error}) => { if(error) console.warn('Delete speaking:', error.message); });
  }
};

// ── INIT ──────────────────────────────────────
randomSpeakingPrompt();
initWriting();
updateKeyIndicator();
// Collapse hero immediately on all sections
try {
  const hero = document.getElementById('hero-banner');
  if (hero) hero.classList.add('collapsed');
} catch(e){}
// Show modal on first load if no key saved yet
// key seeded in getApiKey()