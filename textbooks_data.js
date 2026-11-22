'use strict';

/**
 * BonjourLex 课本扩展词库（按教材与课次严格排序）
 * 1. 《你好！法语》1 (A1 · 外研社 Le Nouveau Taxi!) — 全书 9 单元 36 课完整词汇（由 nihao_a1_data.js 提供）
 * 2. 《北外法语》1 (马晓宏《法语》修订本) — 第1课 ~ 第10课（共 80 词）
 */
window.BONJOURLEX_EXTRA_BOOKS = [
  {
    id: 'book_nihao_1',
    name: '《你好！法语》1 (A1)',
    description: '对应外研社《你好！法语》第一册 A1 完整讲义（Unité 1–9，第1课至第36课全书官方课后词汇），严格按课次顺序编排，含例句与动词现在时变位。',
    isBuiltIn: true,
    createdAt: 1700000002000
  },
  {
    id: 'book_beiwai_1',
    name: '《北外法语》1（马晓宏修订本）',
    description: '对应北京外国语大学马晓宏《法语》第一册修订本（第1课至第10课，共80个核心课本词），按教材进度一课一课编排，适合系统打牢法语语法与词汇基础。',
    isBuiltIn: true,
    createdAt: 1700000003000
  }
];

window.BONJOURLEX_EXTRA_WORDS = [
  /* =========================================================================
   * 词书 B：《北外法语》1（马晓宏修订本）— 第1课 ~ 第10课 (80 词)
   * ========================================================================= */

  // ---------- 第1课：Qui est-ce ?（基础人称与身份识别）----------
  {
    id: 'bw1_01_01', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'camarade', article: 'un', gender: 'm', pos: 'n.', ipa: '/ka.ma.ʁad/', meaning: '同学，伙伴，同志（阴阳同形）',
    examples: [
      { fr: 'Pascal est un camarade de classe.', zh: '帕斯卡尔是我的同班同学。' },
      { fr: 'C’est une camarade très sérieuse et gentille.', zh: '她是一位非常认真且友善的女同学。' },
      { fr: 'Je révise souvent avec mes camarades.', zh: '我经常和同学们一起复习。' }
    ],
    antonyms: [],
    etymology: '源自西班牙语 camarada（同住一室者），法语中阴阳同形（un / une camarade）。',
    commonMistake: { tag: '冠词区分性别', wrong: '把女同学写成 une camaradee', right: 'un camarade（男）/ une camarade（女）', tip: 'camarade 本身以 e 结尾，阴阳性拼写完全一致，通过前面冠词判断性别。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_01_02', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'homme', article: 'un', gender: 'm', pos: 'n.', ipa: '/ɔm/', meaning: '男人，男子；人类',
    examples: [
      { fr: 'Qui est cet homme devant la porte ?', zh: '门前的那位男士是谁？' },
      { fr: 'C’est un jeune homme très poli.', zh: '这是一位非常有礼貌的年轻人。' },
      { fr: 'L’homme a toujours rêvé de voler.', zh: '人类一直梦想着飞翔。' }
    ],
    antonyms: [{ word: 'une femme', meaning: '女人，妻子' }],
    etymology: '源自拉丁语 homo（人、男子），词首 h 为哑音 h。',
    commonMistake: { tag: '哑音 h 省音与指示词', wrong: 'ce homme / le homme', right: 'cet homme / l’homme', tip: '因 h 为哑音，阳性指示形容词必须用 cet（cet homme），定冠词省音为 l’homme。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_01_03', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'femme', article: 'une', gender: 'f', pos: 'n.', ipa: '/fam/', meaning: '女人，女性；妻子',
    examples: [
      { fr: 'Cette femme est professeur d’université.', zh: '这位女士是大学教授。' },
      { fr: 'Voici sa femme, elle s’appelle Claire.', zh: '这位是他的妻子，她叫克莱尔。' },
      { fr: 'Les femmes jouent un rôle essentiel dans la société.', zh: '女性在社会中扮演着重要角色。' }
    ],
    antonyms: [
      { word: 'un homme', meaning: '男人' },
      { word: 'un mari', meaning: '丈夫' }
    ],
    etymology: '源自拉丁语 femina（女性），是法语中最著名的特殊读音词之一。',
    commonMistake: { tag: '特殊元音读音', wrong: '把 femme 读作 /fɛm/', right: '读作 /fam/（e 在双写 mm 前读 /a/）', tip: 'femme 中的 e 发清晰的 /a/ 音（/fam/），类似副词后缀 -emment 也读 /-amɑ̃/。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_01_04', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'garçon', article: 'un', gender: 'm', pos: 'n.', ipa: '/ɡaʁ.sɔ̃/', meaning: '男孩，男青年',
    examples: [
      { fr: 'Ce petit garçon apprend déjà à lire.', zh: '这个小男孩已经在学认字了。' },
      { fr: 'C’est un garçon très intelligent.', zh: '这是一个非常聪明的男孩。' },
      { fr: 'Les garçons jouent au football dans la cour.', zh: '男孩们在院子里踢足球。' }
    ],
    antonyms: [{ word: 'une fille', meaning: '女孩，女儿' }],
    etymology: '源自古日耳曼语词根，字母 ç 带软音符以使 c 在 o 前发清音 /s/。',
    commonMistake: { tag: '软音符 ç 遗漏', wrong: 'un garcon', right: 'un garçon（缺了软音符会读成 /k/）', tip: '字母 c 在 a, o, u 前默认读 /k/，必须加软音符 ç 才读 /s/（如 français, garçon, leçon）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_01_05', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'fille', article: 'une', gender: 'f', pos: 'n.', ipa: '/fij/', meaning: '女孩；女儿',
    examples: [
      { fr: 'Cette jeune fille étudie le français à Pékin.', zh: '这位年轻姑娘在北京学法语。' },
      { fr: 'Ils ont une fille de huit ans.', zh: '他们有一个八岁的女儿。' },
      { fr: 'Les deux filles sont de très bonnes amies.', zh: '这两个女孩是非常好的朋友。' }
    ],
    antonyms: [
      { word: 'un garçon', meaning: '男孩' },
      { word: 'un fils', meaning: '儿子' }
    ],
    etymology: '源自拉丁语 filia（女儿），组合 -ille 在此处读 /ij/。',
    commonMistake: { tag: '与 ville 读音对比', wrong: '把 fille 读作 /fil/', right: 'fille 读 /fij/（半元音 /j/）；ville 读 /vil/', tip: 'fille、famille 读 /j/ 音；只有 ville、mille、tranquille 几个例外词读 /l/。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_01_06', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'ingénieur', article: 'un', gender: 'm', pos: 'n.', ipa: '/ɛ̃.ʒe.njœʁ/', meaning: '工程师',
    examples: [
      { fr: 'Mon frère est ingénieur en informatique.', zh: '我哥哥是一名计算机工程师。' },
      { fr: 'Elle travaille comme ingénieur dans une grande entreprise.', zh: '她在一家大公司担任工程师。' },
      { fr: 'Les ingénieurs conçoivent un nouveau pont.', zh: '工程师们正在设计一座新桥。' }
    ],
    antonyms: [],
    etymology: '源自古法语 engignier（构思机械者），与拉丁语 ingenium（才智）同源。',
    commonMistake: { tag: '鼻化元音与省音', wrong: 'un ingenieur（漏写 é）', right: 'un ingénieur / l’ingénieur（带闭口重音 é）', tip: '词首 in 发鼻化元音 /ɛ̃/，g 后带闭口重音 é，定冠词需省音为 l’ingénieur。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_01_07', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'ouvrier', article: 'un', gender: 'm', pos: 'n.', ipa: '/u.vʁi.je/', meaning: '工人（女工：une ouvrière）',
    examples: [
      { fr: 'Son père était ouvrier dans une usine automobile.', zh: '他父亲曾在一家汽车厂当工人。' },
      { fr: 'Les ouvriers commencent leur journée très tôt.', zh: '工人们很早就开始一天的工作。' },
      { fr: 'Cette ouvrière qualifiée travaille avec précision.', zh: '这位技术女工干活非常精准。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 operarius（劳动者），与 œuvre（作品）同源。',
    commonMistake: { tag: '阴性形式变化', wrong: 'une ouvrier', right: 'une ouvrière（-ier 结尾职业名词阴性变为 -ière）', tip: '类似的还有 infirmier → infirmière（护士）、boulanger → boulangère（面包师）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_01_08', bookId: 'book_beiwai_1', lesson: '第1课：Qui est-ce ?', word: 'chinois', article: 'le', gender: 'm', pos: 'n.', ipa: '/ʃi.nwa/', meaning: '中文，汉语；中国的（阴性：chinoise）',
    examples: [
      { fr: 'Je suis chinois et j’apprends le français.', zh: '我是中国人，我正在学法语。' },
      { fr: 'Elle parle couramment le chinois et l’anglais.', zh: '她能流利地说中文和英语。' },
      { fr: 'La cuisine chinoise est très variée.', zh: '中国菜非常丰富多样。' }
    ],
    antonyms: [],
    etymology: '由 Chine（中国）+ 后缀 -ois 构成。',
    commonMistake: { tag: '阴阳读音差异', wrong: '把阴性 chinoise 的 s 读成清音 /s/', right: '阳性 /ʃi.nwa/（s 静音），阴性 /ʃi.nwaz/（s 发浊音 /z/）', tip: '作国籍形容词时首字母小写（Elle est chinoise），作名词指代中国人时大写（une Chinoise）。' },
    conjugationPresent: null
  },

  // ---------- 第2课：Qu'est-ce que c'est ?（学习用品与基础问答）----------
  {
    id: 'bw1_02_01', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'carte', article: 'une', gender: 'f', pos: 'n.', ipa: '/kaʁt/', meaning: '地图；卡片；菜单',
    examples: [
      { fr: 'Voici une carte de France sur le mur.', zh: '墙上挂着一张法国地图。' },
      { fr: 'Tu as ta carte d’étudiant sur toi ?', zh: '你身上带着学生证吗？' },
      { fr: 'Peut-on voir la carte des desserts ?', zh: '能看一下甜点菜单吗？' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 charta（纸张、图表），一词多义，覆盖地图、证件卡、银行卡与点菜单。',
    commonMistake: { tag: '地图 vs 城市平面图', wrong: '把城市街区图说成 une carte de Paris', right: '国家/世界地图用 une carte；城市街区平面图常用 un plan（un plan de Paris）', tip: '大范围地理图用 carte，城市交通街道图地道用法是 un plan。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_02_02', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'journal', article: 'un', gender: 'm', pos: 'n.', ipa: '/ʒuʁ.nal/', meaning: '报纸；日记',
    examples: [
      { fr: 'Mon grand-père lit le journal tous les matins.', zh: '我爷爷每天早上看报纸。' },
      { fr: 'J’achète deux journaux français au kiosque.', zh: '我在报亭买了两份法语报纸。' },
      { fr: 'Elle tient un journal intime en français.', zh: '她用法语写日记。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 diurnalis（每日的），与 jour（天）同源。',
    commonMistake: { tag: '不规则复数 -aux', wrong: 'des journals', right: 'des journaux', tip: '绝大多数以 -al 结尾的名词复数变为 -aux（un journal → des journaux，un hôpital → des hôpitaux）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_02_03', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'texte', article: 'un', gender: 'm', pos: 'n.', ipa: '/tɛkst/', meaning: '课文，正文，文本',
    examples: [
      { fr: 'Nous lisons le texte de la deuxième leçon.', zh: '我们朗读第二课的课文。' },
      { fr: 'Soulignez les mots nouveaux dans ce texte.', zh: '请在这篇课文中划出生词。' },
      { fr: 'Ce texte est court mais riche en vocabulaire.', zh: '这篇课文很短，但词汇量很丰富。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 textus（织物、文章结构），阳性名词。',
    commonMistake: { tag: '阴阳性误判', wrong: 'une texte（因以 e 结尾误判为阴性）', right: 'un texte / le texte（阳性！）', tip: '不要单凭词尾有 e 就判断阴性，un texte、un livre、un lycée 都是经典阳性词。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_02_04', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'leçon', article: 'une', gender: 'f', pos: 'n.', ipa: '/lə.sɔ̃/', meaning: '课，功课；教训',
    examples: [
      { fr: 'Aujourd’hui, nous étudions la leçon deux.', zh: '今天我们学习第二课。' },
      { fr: 'As-tu bien révisé ta leçon de grammaire ?', zh: '你好好复习你的语法课了吗？' },
      { fr: 'Cette erreur m’a servi de leçon.', zh: '这次错误给了我一个教训。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 lectio（朗读、授课），字母 ç 必须带软音符。',
    commonMistake: { tag: '软音符 ç', wrong: 'une lecon', right: 'une leçon（阴性，带软音符 ç）', tip: 'leçon 既是阴性名词，又必须写软音符 ç 才能发 /s/ 音。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_02_05', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'mot', article: 'un', gender: 'm', pos: 'n.', ipa: '/mo/', meaning: '单词，词；话语',
    examples: [
      { fr: 'Comment dit-on ce mot en français ?', zh: '这个词用法语怎么说？' },
      { fr: 'J’apprends vingt nouveaux mots chaque jour.', zh: '我每天背二十个新单词。' },
      { fr: 'Écris-moi un petit mot quand tu arrives.', zh: '你到了给我发条简短的消息。' }
    ],
    antonyms: [],
    etymology: '源自晚期拉丁语 muttum（低声发出的音节、词），词尾 t 不发音。',
    commonMistake: { tag: '词尾 t 静音', wrong: '把 mot 读作 /mɔt/', right: '读作 /mo/（闭口 /o/，t 不发音）', tip: 'mot 读作 /mo/，与复数 mots 读音完全相同。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_02_06', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'phrase', article: 'une', gender: 'f', pos: 'n.', ipa: '/fʁaz/', meaning: '句子，语句',
    examples: [
      { fr: 'Faites une phrase simple avec ce verbe.', zh: '用这个动词造一个简单的句子。' },
      { fr: 'Répétez cette phrase lentement.', zh: '请慢速重复这个句子。' },
      { fr: 'Une phrase française commence toujours par une majuscule.', zh: '法语句子总是以大写字母开头。' }
    ],
    antonyms: [],
    etymology: '源自希腊语 phrasis（表达方式），ph 读 /f/，元音间 s 读 /z/。',
    commonMistake: { tag: '英法词义差异', wrong: '把 phrase 当成英语里的“短语”', right: '法语 une phrase 是“完整的句子”；“短语”是 une expression', tip: '受英语影响很容易搞混，法语里造句就是 faire une phrase。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_02_07', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'lire', article: null, gender: null, pos: 'v.', ipa: '/liʁ/', meaning: '读，朗读，阅读',
    examples: [
      { fr: 'Je lis le dialogue à haute voix.', zh: '我大声朗读这段对话。' },
      { fr: 'Qu’est-ce que vous lisez en ce moment ?', zh: '您最近在读什么书？' },
      { fr: 'Ils lisent les nouvelles sur Internet.', zh: '他们在网上看新闻。' }
    ],
    antonyms: [{ word: 'écrire', meaning: '写，书写' }],
    etymology: '源自拉丁语 legere（挑选、阅读），不规则第三组动词。',
    commonMistake: { tag: '复数词干加 s', wrong: 'Nous lirons（这是将来时）/ Ils lirent.', right: '现在时复数：nous lisons, vous lisez, ils lisent', tip: 'lire 的现在时复数词干要变为 lis-，注意 s 夹在元音间发浊音 /z/。' },
    conjugationPresent: ['je lis', 'tu lis', 'il / elle lit', 'nous lisons', 'vous lisez', 'ils / elles lisent']
  },
  {
    id: 'bw1_02_08', bookId: 'book_beiwai_1', lesson: '第2课：Qu\'est-ce que c\'est ?', word: 'écrire', article: null, gender: null, pos: 'v.', ipa: '/e.kʁiʁ/', meaning: '写，书写，写信',
    examples: [
      { fr: 'J’écris les nouveaux mots dans mon carnet.', zh: '我把生词写进我的小本子里。' },
      { fr: 'Comment s’écrit votre nom de famille ?', zh: '您的姓氏怎么拼写？' },
      { fr: 'Nous écrivons un courriel à notre professeur.', zh: '我们正在给老师写一封电子邮件。' }
    ],
    antonyms: [{ word: 'lire', meaning: '读，阅读' }],
    etymology: '源自拉丁语 scribere（刻写、书写），复数变位词干变为 écriv-。',
    commonMistake: { tag: '复数词干加 v', wrong: 'Nous écrisons / Ils écrient.', right: 'Nous écrivons / Vous écrivez / Ils écrivent.', tip: 'écrire 的复数变位全部带字母 v（écriv-），切勿与 lire 混淆。' },
    conjugationPresent: ["j'écris", 'tu écris', 'il / elle écrit', 'nous écrivons', 'vous écrivez', 'ils / elles écrivent']
  },

  // ---------- 第3课：Où allez-vous ?（去向、场所与校园）----------
  {
    id: 'bw1_03_01', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'université', article: "l'", gender: 'f', pos: 'n.', ipa: '/y.ni.vɛʁ.si.te/', meaning: '大学（口语常简称 la fac）',
    examples: [
      { fr: 'Je vais à l’université tous les matins.', zh: '我每天早上去大学。' },
      { fr: 'Mon université possède une grande bibliothèque.', zh: '我的大学有一座很大的图书馆。' },
      { fr: 'Il étudie le droit à l’université de Pékin.', zh: '他在北京大学学习法律。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 universitas（整体、行会），以 -té 结尾的阴性名词。',
    commonMistake: { tag: '主有形容词特例', wrong: 'ma université', right: 'mon université（阴性但元音开头借用 mon）', tip: '凡是以元音或哑音 h 开头的阴性单数名词，主有形容词一律用 mon / ton / son。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_03_02', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'bibliothèque', article: 'une', gender: 'f', pos: 'n.', ipa: '/bi.bli.jɔ.tɛk/', meaning: '图书馆；书架',
    examples: [
      { fr: 'Je travaille souvent à la bibliothèque universitaire.', zh: '我经常在大学图书馆学习。' },
      { fr: 'On peut emprunter cinq livres à la bibliothèque.', zh: '在图书馆一次可以借五本书。' },
      { fr: 'Chut, il faut rester silencieux dans la bibliothèque.', zh: '嘘，在图书馆里必须保持安静。' }
    ],
    antonyms: [],
    etymology: '源自希腊语 biblion（书）+ theke（存放箱），注意与 librairie（书店）严格区分！',
    commonMistake: { tag: '经典英法假朋友', wrong: '把“图书馆”说成 une librairie', right: '图书馆 = une bibliothèque；书店 = une librairie', tip: '这是法语初学者最易踩坑的假朋友：借书去 bibliothèque，买书去 librairie！' },
    conjugationPresent: null
  },
  {
    id: 'bw1_03_03', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'cinéma', article: 'le', gender: 'm', pos: 'n.', ipa: '/si.ne.ma/', meaning: '电影院；电影艺术',
    examples: [
      { fr: 'Tu veux aller au cinéma ce week-end ?', zh: '这个周末你想去电影院吗？' },
      { fr: 'J’aime beaucoup le cinéma français classique.', zh: '我非常喜欢经典法国电影。' },
      { fr: 'Le nouveau cinéma du quartier a six salles.', zh: '街区的新电影院有六个放映厅。' }
    ],
    antonyms: [],
    etymology: '源自法国卢米埃尔兄弟发明的 cinématographe（活动影像机）的简称。',
    commonMistake: { tag: '缩合冠词', wrong: 'Je vais à le cinéma.', right: 'Je vais au cinéma.（à + le 必须缩合为 au）', tip: '阳性单数辅音开头名词前，à + le 永远强制缩合为 au。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_03_04', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'usine', article: 'une', gender: 'f', pos: 'n.', ipa: '/y.zin/', meaning: '工厂',
    examples: [
      { fr: 'Cette usine fabrique des voitures électriques.', zh: '这家工厂生产电动汽车。' },
      { fr: 'Son oncle travaille dans une usine près de Lyon.', zh: '他叔叔在里昂附近的一家工厂上班。' },
      { fr: 'L’usine emploie plus de trois cents personnes.', zh: '这家工厂雇佣了三百多名员工。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 officina（作坊、工场），阴性名词，元音 u 开头定冠词省音为 l’usine。',
    commonMistake: { tag: '元音间 s 发音', wrong: '把 usine 读成 /y.sin/', right: '读作 /y.zin/（s 发浊音 /z/）', tip: '字母 u 读撮口音 /y/，s 在 u 和 i 之间读 /z/。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_03_05', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'hôpital', article: 'un', gender: 'm', pos: 'n.', ipa: '/o.pi.tal/', meaning: '医院',
    examples: [
      { fr: 'Il va à l’hôpital rendre visite à un ami.', zh: '他去医院看望一位朋友。' },
      { fr: 'L’hôpital se trouve au bout de l’avenue.', zh: '医院就在这条林荫大道的尽头。' },
      { fr: 'Il y a deux grands hôpitaux dans cette ville.', zh: '这座城市有两家大医院。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 hospitale，与 hôtel 同源，复数不规则为 des hôpitaux。',
    commonMistake: { tag: '复数与长音符', wrong: 'des hôpitals', right: 'des hôpitaux（保留 ô，词尾变 -aux）', tip: 'hôpital 既要保留长音符 ô，又要记住复数变为 hôpitaux。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_03_06', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'étudier', article: null, gender: null, pos: 'v.', ipa: '/e.ty.dje/', meaning: '学习，攻读，研究',
    examples: [
      { fr: 'J’étudie les langues étrangères à l’université.', zh: '我在大学攻读外语专业。' },
      { fr: 'Nous étudions la grammaire française ensemble.', zh: '我们一起学习法语语法。' },
      { fr: 'Elle étudie sérieusement chaque soir.', zh: '她每晚都认真学习。' }
    ],
    antonyms: [{ word: 'enseigner', meaning: '教，讲授' }],
    etymology: '源自古法语 estudier（专心致志），规则第一组动词。',
    commonMistake: { tag: 'nous 变位', wrong: 'Nous étudons.', right: 'Nous étudions / Vous étudiez（保留词干中的 i）', tip: '以 -ier 结尾的第一组动词，变位时不要把词干自带的 i 弄丢。' },
    conjugationPresent: ["j'étudie", 'tu étudies', 'il / elle étudie', 'nous étudions', 'vous étudiez', 'ils / elles étudient']
  },
  {
    id: 'bw1_03_07', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'venir', article: null, gender: null, pos: 'v.', ipa: '/və.niʁ/', meaning: '来，来到；刚做完（venir de + 动词）',
    examples: [
      { fr: 'D’où venez-vous ? — Je viens de Chine.', zh: '您来自哪里？——我来自中国。' },
      { fr: 'Tu viens avec nous au restaurant ce soir ?', zh: '今晚你和我们一起去餐馆吗？' },
      { fr: 'Je viens de finir mes devoirs.', zh: '我刚刚做完作业。' }
    ],
    antonyms: [{ word: 'aller', meaning: '去' }],
    etymology: '源自拉丁语 venire（到来），复合过去时用助动词 être，构成最近过去时 venir de + 动词原形。',
    commonMistake: { tag: '复数变位词干', wrong: 'Nous vienons / Ils venent.', right: 'Nous venons / Vous venez / Ils viennent.', tip: 'venir 单数用 vien-，nous/vous 用 ven-，ils/elles 双写 n 用 vienn-。' },
    conjugationPresent: ['je viens', 'tu viens', 'il / elle vient', 'nous venons', 'vous venez', 'ils / elles viennent']
  },
  {
    id: 'bw1_03_08', bookId: 'book_beiwai_1', lesson: '第3课：Où allez-vous ?', word: 'ensemble', article: null, gender: null, pos: 'adv.', ipa: '/ɑ̃.sɑ̃bl/', meaning: '一起，共同',
    examples: [
      { fr: 'Nous allons au cinéma ensemble ce soir.', zh: '我们今晚一起去看电影。' },
      { fr: 'Les étudiants travaillent ensemble sur ce projet.', zh: '学生们一起合作完成这个项目。' },
      { fr: 'On déjeune ensemble à midi ?', zh: '我们中午一起吃午饭吧？' }
    ],
    antonyms: [{ word: 'seul', meaning: '独自地，单独的' }],
    etymology: '源自拉丁语 in simul（同时、一同），词中有两个鼻化元音 /ɑ̃/。',
    commonMistake: { tag: '词义区分', wrong: '把 ensemble 后面多加 avec', right: '直接用 Nous allons ensemble.（不要说 ensemble avec...）', tip: '表示“和某人一起”说 avec quelqu’un，不要把 ensemble 和 avec 叠用在一起。' },
    conjugationPresent: null
  },

  // ---------- 第4课：Dans la famille（家庭成员与亲属）----------
  {
    id: 'bw1_04_01', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'famille', article: 'une', gender: 'f', pos: 'n.', ipa: '/fa.mij/', meaning: '家庭，家人',
    examples: [
      { fr: 'Il y a quatre personnes dans ma famille.', zh: '我家有四口人。' },
      { fr: 'Nous passons les fêtes en famille.', zh: '我们和家人一起过节。' },
      { fr: 'C’est une grande famille très unie.', zh: '这是一个非常团结的大家庭。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 familia（家眷、家庭），-ille 读 /ij/。',
    commonMistake: { tag: '短语搭配', wrong: 'avec la famille（表示“全家一起”）', right: 'en famille（固定无冠词短语）', tip: '表达“和家人一起、全家团聚”最地道简洁的说法是 en famille。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_04_02', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'père', article: 'un', gender: 'm', pos: 'n.', ipa: '/pɛʁ/', meaning: '父亲，爸爸（口语：papa）',
    examples: [
      { fr: 'Mon père aime beaucoup lire des romans policiers.', zh: '我爸爸非常喜欢读侦探小说。' },
      { fr: 'Le père de Paul est architecte.', zh: '保罗的父亲是一位建筑师。' },
      { fr: 'Mon père et ma mère habitent à Chengdu.', zh: '我父母住在成都。' }
    ],
    antonyms: [{ word: 'une mère', meaning: '母亲，妈妈' }],
    etymology: '源自拉丁语 pater（父亲），带有开口重音 è。',
    commonMistake: { tag: '重音方向写反', wrong: 'mon pére', right: 'mon père（开口重音 è，向左上方倾斜）', tip: 'père、mère、frère 这三个家庭核心词全都是开口重音 è！' },
    conjugationPresent: null
  },
  {
    id: 'bw1_04_03', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'mère', article: 'une', gender: 'f', pos: 'n.', ipa: '/mɛʁ/', meaning: '母亲，妈妈（口语：maman）',
    examples: [
      { fr: 'Ma mère cuisine merveilleusement bien.', zh: '我妈妈做菜手艺特别棒。' },
      { fr: 'Je téléphone à ma mère chaque dimanche.', zh: '我每个周日都给妈妈打电话。' },
      { fr: 'Sa mère est médecin dans un hôpital public.', zh: '她妈妈在一家公立医院当医生。' }
    ],
    antonyms: [{ word: 'un père', meaning: '父亲，爸爸' }],
    etymology: '源自拉丁语 mater（母亲），与 mer（大海）、maire（市长）同音不同形。',
    commonMistake: { tag: '同音词混淆', wrong: '拼错 mère（母亲）与 mer（大海）', right: 'la mère（母亲，带 è 和词尾 e）；la mer（大海）', tip: '记住“妈妈戴帽子（è）穿裙子（词尾 e）”，就能永远区分 la mère 和 la mer。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_04_04', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'frère', article: 'un', gender: 'm', pos: 'n.', ipa: '/fʁɛʁ/', meaning: '兄弟（哥哥或弟弟）',
    examples: [
      { fr: 'J’ai un grand frère et une petite sœur.', zh: '我有一个哥哥和一个妹妹。' },
      { fr: 'Mon frère cadet étudie encore au lycée.', zh: '我弟弟还在读高中。' },
      { fr: 'Les deux frères se ressemblent beaucoup.', zh: '这两兄弟长得很像。' }
    ],
    antonyms: [{ word: 'une sœur', meaning: '姐妹（姐姐或妹妹）' }],
    etymology: '源自拉丁语 frater（兄弟），法语不单设“哥/弟”两词，用 grand / aîné 表哥哥，petit / cadet 表弟弟。',
    commonMistake: { tag: '区分长幼', wrong: '只说 mon frère 却想强调“哥哥”', right: 'mon grand frère / mon frère aîné（哥哥）；mon petit frère（弟弟）', tip: '日常口语最常用 grand frère / petit frère 区分哥弟。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_04_05', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'sœur', article: 'une', gender: 'f', pos: 'n.', ipa: '/sœʁ/', meaning: '姐妹（姐姐或妹妹）',
    examples: [
      { fr: 'Ma sœur aînée habite à Bordeaux.', zh: '我姐姐住在波尔多。' },
      { fr: 'Je vais au concert avec ma petite sœur.', zh: '我和我妹妹一起去听音乐会。' },
      { fr: 'Tu as des frères et sœurs ?', zh: '你有兄弟姐妹吗？' }
    ],
    antonyms: [{ word: 'un frère', meaning: '兄弟' }],
    etymology: '源自拉丁语 soror（姐妹），包含法语特色合字 œ。',
    commonMistake: { tag: '合字 œ 拼写', wrong: 'une seur / une soeur（不规范）', right: 'une sœur（标准合字 œ）', tip: '拼写测验中可直接点击重音栏的 œ 键输入 sœur 和 cœur（心）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_04_06', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'enfant', article: 'un', gender: 'm', pos: 'n.', ipa: '/ɑ̃.fɑ̃/', meaning: '孩子，儿童（可作阴阳两性）',
    examples: [
      { fr: 'Ils ont deux enfants : un garçon et une fille.', zh: '他们有两个孩子：一个男孩和一个女孩。' },
      { fr: 'Les enfants jouent joyeusement dans le parc.', zh: '孩子们在公园里开心地玩耍。' },
      { fr: 'Quand j’étais enfant, j’adorais dessiner.', zh: '我小时候特别喜欢画画。' }
    ],
    antonyms: [{ word: 'un adulte', meaning: '成年人' }],
    etymology: '源自拉丁语 infans（尚不会说话的幼童），词中 en 与 an 均发鼻化元音 /ɑ̃/。',
    commonMistake: { tag: '词尾 t 不发音', wrong: '读出词尾 t', right: '读作 /ɑ̃.fɑ̃/（词尾 t 静音，单复数读音相同）', tip: '指具体小女孩时也可用 une enfant，泛指孩子时默认阳性 un enfant。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_04_07', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'parents', article: 'les', gender: 'm', pos: 'n.', ipa: '/pa.ʁɑ̃/', meaning: '父母，双亲（复数）；亲戚（单数）',
    examples: [
      { fr: 'Mes parents viennent me voir la semaine prochaine.', zh: '我父母下周来看我。' },
      { fr: 'Il habite encore chez ses parents.', zh: '他目前还和父母住在一起。' },
      { fr: 'Nous dînons souvent chez nos parents le dimanche.', zh: '我们周日经常去父母家吃晚饭。' }
    ],
    antonyms: [{ word: 'les enfants', meaning: '孩子们，子女' }],
    etymology: '源自拉丁语 parens（生养者、亲属）。',
    commonMistake: { tag: '单复数词义差别', wrong: '用 un parent 表示“父亲或母亲一方”', right: 'les parents = 父母；un parent 常指“一位亲戚”', tip: '复数 mes parents 明确指父母，而 un parent de ma mère 意思是“我妈妈的一位亲戚”。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_04_08', bookId: 'book_beiwai_1', lesson: '第4课：Dans la famille', word: 'aimer', article: null, gender: null, pos: 'v.', ipa: '/ɛ.me/', meaning: '爱；喜欢，喜爱',
    examples: [
      { fr: 'J’aime beaucoup la musique classique.', zh: '我非常喜欢古典音乐。' },
      { fr: 'Nous aimons voyager en train.', zh: '我们喜欢坐火车旅行。' },
      { fr: 'Elle aime profondément sa famille.', zh: '她深爱着自己的家人。' }
    ],
    antonyms: [{ word: 'détester', meaning: '讨厌，厌恶' }],
    etymology: '源自拉丁语 amare（爱），是法语表达情感与喜好的第一核心动词。',
    commonMistake: { tag: '对人说 aimer 的程度差异', wrong: '对普通朋友说 Je t’aime.（这是恋爱表白！）', right: '对朋友表达喜欢加副词：Je t’aime bien.', tip: '非常关键！对人单说 Je t’aime 是“我爱你”，加上 bien（Je t’aime bien）反而是降级为“我挺喜欢你这个朋友”。' },
    conjugationPresent: ["j'aime", 'tu aimes', 'il / elle aime', 'nous aimons', 'vous aimez', 'ils / elles aiment']
  },

  // ---------- 第5课：Les quatre saisons（四季与天气）----------
  {
    id: 'bw1_05_01', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'saison', article: 'une', gender: 'f', pos: 'n.', ipa: '/sɛ.zɔ̃/', meaning: '季节，时节',
    examples: [
      { fr: 'Quelle est ta saison préférée ?', zh: '你最喜欢哪个季节？' },
      { fr: 'Il y a quatre saisons bien marquées ici.', zh: '这里四季非常分明。' },
      { fr: 'Les fraises sont meilleures en pleine saison.', zh: '当季的草莓最好吃。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 satio（播种的时节），与英语 season 同源，阴性名词。',
    commonMistake: { tag: '四季均为阳性', wrong: '因为 saison 是阴性，误以为春夏秋冬也是阴性', right: 'le printemps, l’été, l’automne, l’hiver 四个季节全是阳性！', tip: '记住：saison 本身是阴性，但四个具体季节名字全都是阳性。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_05_02', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'printemps', article: 'le', gender: 'm', pos: 'n.', ipa: '/pʁɛ̃.tɑ̃/', meaning: '春天，春季',
    examples: [
      { fr: 'Au printemps, les fleurs s’ouvrent dans les parcs.', zh: '春天公园里的花都开了。' },
      { fr: 'J’adore la douceur du printemps.', zh: '我非常喜欢春天的温和气候。' },
      { fr: 'Nous partons souvent en randonnée au printemps.', zh: '我们春天经常去徒步旅行。' }
    ],
    antonyms: [{ word: "l'automne", meaning: '秋天，秋季' }],
    etymology: '源自拉丁语 primum tempus（第一个时节），词尾 ps 不发音。',
    commonMistake: { tag: '季节介词特例', wrong: 'en printemps', right: 'au printemps（其他三个季节用 en：en été, en automne, en hiver）', tip: '必考语法点！因为 printemps 以辅音开头，用 au printemps；其余三个元音/哑音 h 开头，用 en！' },
    conjugationPresent: null
  },
  {
    id: 'bw1_05_03', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'été', article: "l'", gender: 'm', pos: 'n.', ipa: '/e.te/', meaning: '夏天，夏季',
    examples: [
      { fr: 'En été, il fait souvent très chaud dans le sud.', zh: '夏天南方经常非常热。' },
      { fr: 'Cet été, je vais apprendre à nager.', zh: '今年夏天我要学游泳。' },
      { fr: 'Les journées d’été sont longues et ensoleillées.', zh: '夏天的白昼又长又晴朗。' }
    ],
    antonyms: [{ word: "l'hiver", meaning: '冬天，冬季' }],
    etymology: '源自拉丁语 aestas（盛夏），阳性名词，注意与 être 的过去分词 été 同形。',
    commonMistake: { tag: '指示形容词配合', wrong: 'cette été', right: 'cet été（阳性元音开头用 cet）', tip: 'été 是阳性名词，因此“今年夏天”是 cet été，“美好夏天”是 un bel été。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_05_04', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'automne', article: "l'", gender: 'm', pos: 'n.', ipa: '/o.tɔn/', meaning: '秋天，秋季',
    examples: [
      { fr: 'En automne, les feuilles deviennent rouges et dorées.', zh: '秋天树叶变成红色和金黄色。' },
      { fr: 'L’automne est une saison très agréable à Pékin.', zh: '北京的秋天是一个非常宜人的季节。' },
      { fr: 'Il pleut souvent en automne dans cette région.', zh: '这个地区秋天经常下雨。' }
    ],
    antonyms: [{ word: 'le printemps', meaning: '春天' }],
    etymology: '源自拉丁语 autumnus（秋收之季），字母 m 在此不发音。',
    commonMistake: { tag: '特殊静音字母 m', wrong: '把 automne 读作 /o.tɔm.nə/', right: '读作 /o.tɔn/（字母 m 完全不发音）', tip: 'automne 中的 m 是静音字母，直接发 /o.tɔn/ 即可！' },
    conjugationPresent: null
  },
  {
    id: 'bw1_05_05', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'hiver', article: "l'", gender: 'm', pos: 'n.', ipa: '/i.vɛʁ/', meaning: '冬天，冬季',
    examples: [
      { fr: 'En hiver, il neige beaucoup dans le nord.', zh: '冬天北方经常下大雪。' },
      { fr: 'Je porte un gros manteau pendant tout l’hiver.', zh: '我整个冬天都穿着厚大衣。' },
      { fr: 'Cet hiver est particulièrement froid.', zh: '今年冬天格外冷。' }
    ],
    antonyms: [{ word: "l'été", meaning: '夏天' }],
    etymology: '源自拉丁语 hibernum（冬季的），词首 h 为哑音 h，词尾 r 清晰发音。',
    commonMistake: { tag: '词尾 r 发音', wrong: '把 hiver 读成 /i.ve/', right: '读作 /i.vɛʁ/（词尾 r 必须发音）', tip: '类似 mer、fer、hier，单音节或特殊词 hiver 的词尾 r 要清晰读出。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_05_06', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'pluie', article: 'la', gender: 'f', pos: 'n.', ipa: '/plɥi/', meaning: '雨，雨水',
    examples: [
      { fr: 'Prends ton parapluie, la pluie arrive !', zh: '带上雨伞，要下雨了！' },
      { fr: 'J’aime écouter le bruit de la pluie le soir.', zh: '我喜欢晚上听雨声。' },
      { fr: 'Après la pluie, le beau temps.', zh: '雨过天晴。（法语谚语）' }
    ],
    antonyms: [{ word: 'le soleil', meaning: '太阳，晴天' }],
    etymology: '源自拉丁语 pluvia（雨），对应无人称动词 pleuvoir（下雨：il pleut）。',
    commonMistake: { tag: '半元音 /ɥ/ 发音', wrong: '把 ui 读成 /wi/', right: '读作 /plɥi/（先撮口发 /y/ 快速滑向 /i/）', tip: '字母组合 ui（pluie, nuit, huit, cuisine）必须发撮口半元音 /ɥi/。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_05_07', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'vent', article: 'le', gender: 'm', pos: 'n.', ipa: '/vɑ̃/', meaning: '风',
    examples: [
      { fr: 'Il y a beaucoup de vent aujourd’hui.', zh: '今天风很大。' },
      { fr: 'Le vent souffle fort sur la côte.', zh: '海边风刮得很猛。' },
      { fr: 'Ferme la porte, il fait un vent glacial.', zh: '关上门吧，刮着刺骨的冷风。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 ventus（风），词尾 t 不发音，en 发鼻化元音 /ɑ̃/。',
    commonMistake: { tag: '与 vingt 区分', wrong: '把 vent /vɑ̃/ 和 vingt /vɛ̃/ 读混', right: 'vent（风）读开口鼻音 /vɑ̃/；vingt（二十）读 /vɛ̃/', tip: '发音时注意 en 的口型比 in 更开阔。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_05_08', bookId: 'book_beiwai_1', lesson: '第5课：Les quatre saisons', word: 'chaud', article: null, gender: null, pos: 'adj.', ipa: '/ʃo/', meaning: '热的，暖和的（阴性：chaude）',
    examples: [
      { fr: 'Il fait très chaud cet après-midi.', zh: '今天下午天气非常热。' },
      { fr: 'Je bois un chocolat chaud après le ski.', zh: '滑完雪我喝一杯热巧克力。' },
      { fr: 'Tu as chaud ? Je peux ouvrir la fenêtre.', zh: '你觉得热吗？我可以开窗。' }
    ],
    antonyms: [{ word: 'froid', meaning: '冷的，寒冷的' }],
    etymology: '源自拉丁语 calidus（热的），人感到热用 avoir chaud，天气热用 il fait chaud。',
    commonMistake: { tag: '主语与动词区分', wrong: 'Je suis chaud.（在法语口语中有歧义，千万别这么说！）', right: 'J’ai chaud.（我觉得热）/ Il fait chaud.（天热）', tip: '人感觉冷/热一律用 avoir（j’ai chaud / j’ai froid），千万不要用 être！' },
    conjugationPresent: null
  },

  // ---------- 第6课：Quelle heure est-il ?（时间与作息）----------
  {
    id: 'bw1_06_01', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'minute', article: 'une', gender: 'f', pos: 'n.', ipa: '/mi.nyt/', meaning: '分钟；片刻',
    examples: [
      { fr: 'Attends-moi cinq minutes, j’arrive tout de suite.', zh: '等我五分钟，我马上就到。' },
      { fr: 'Le métro passe toutes les trois minutes.', zh: '地铁每三分钟一班。' },
      { fr: 'Il est dix heures moins dix minutes.', zh: '现在是九点五十（十点差十分）。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 minuta（极小的一份），阴性名词。',
    commonMistake: { tag: '口语报时省略', wrong: '报时时每次都啰嗦地说 dix heures vingt minutes', right: '日常报时通常省略 minutes，直接说 Il est dix heures vingt.', tip: '说钟点时刻时（8h15, 10h20）通常省去 minutes；说持续时长（10 minutes）时才保留。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_06_02', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'rendez-vous', article: 'un', gender: 'm', pos: 'n.', ipa: '/ʁɑ̃.de.vu/', meaning: '约会，预约，会面',
    examples: [
      { fr: 'J’ai un rendez-vous chez le dentiste à quinze heures.', zh: '我下午三点预约了牙医。' },
      { fr: 'Nous nous donnons rendez-vous devant le musée.', zh: '我们约在博物馆门前见面。' },
      { fr: 'Il ne faut pas être en retard à un rendez-vous.', zh: '赴约可不能迟到。' }
    ],
    antonyms: [],
    etymology: '源自命令式短语 rendez-vous（请您前往赴约），单复数同形（des rendez-vous）。',
    commonMistake: { tag: '动词搭配', wrong: 'faire un rendez-vous', right: 'prendre rendez-vous（预约）/ avoir un rendez-vous（有约）', tip: '看医生、办业务说“预约”固定用 prendre rendez-vous。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_06_03', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'retard', article: 'le', gender: 'm', pos: 'n.', ipa: '/ʁə.taʁ/', meaning: '迟到，延误',
    examples: [
      { fr: 'Excusez-moi, je suis un peu en retard.', zh: '抱歉，我稍微迟到了一点。' },
      { fr: 'Le train a dix minutes de retard.', zh: '火车晚点了十分钟。' },
      { fr: 'Dépêche-toi, sinon on va être en retard !', zh: '快点，不然我们要迟到了！' }
    ],
    antonyms: [{ word: "l'avance", meaning: '提前' }],
    etymology: '由前缀 re- + tard（晚）构成，词尾 d 不发音。',
    commonMistake: { tag: '人迟到 vs 车晚点', wrong: 'Je suis retard. / Le train est 10 minutes retard.', right: 'Je suis en retard.（人迟到）；Le train a 10 minutes de retard.（车晚点）', tip: '人迟到用 être en retard，交通工具晚点多少时间用 avoir ... de retard。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_06_04', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'après-midi', article: 'un', gender: 'm', pos: 'n.', ipa: '/a.pʁɛ.mi.di/', meaning: '下午',
    examples: [
      { fr: 'Cet après-midi, nous avons un cours de phonétique.', zh: '今天下午我们有一节语音课。' },
      { fr: 'Je passe tout l’après-midi à la bibliothèque.', zh: '我整个下午都在图书馆度过。' },
      { fr: 'Bon après-midi et à demain !', zh: '祝下午愉快，明天见！' }
    ],
    antonyms: [{ word: 'le matin', meaning: '上午，早晨' }],
    etymology: '由 après（在……之后）+ midi（中午）用连字符组成，标准用法偏阳性（复数不变）。',
    commonMistake: { tag: '复数拼写', wrong: 'des après-midis', right: 'des après-midi（传统规范复数不变）', tip: '下午祝福语常用 Bon après-midi !，连字符不要漏写。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_06_05', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'nuit', article: 'une', gender: 'f', pos: 'n.', ipa: '/nɥi/', meaning: '夜，夜晚',
    examples: [
      { fr: 'Bonne nuit, fais de beaux rêves !', zh: '晚安，祝你好梦！' },
      { fr: 'La nuit, les rues du village sont très calmes.', zh: '夜里村里的街道非常安静。' },
      { fr: 'Il a travaillé presque toute la nuit.', zh: '他几乎工作了整整一夜。' }
    ],
    antonyms: [{ word: 'le jour', meaning: '白天，白昼' }],
    etymology: '源自拉丁语 nox / noctem（夜），词尾 t 不发音。',
    commonMistake: { tag: '时间表达', wrong: 'dans la nuit（泛指夜间习惯）', right: 'la nuit（泛指夜里）/ cette nuit（昨晚或今晚）', tip: '睡前道别用 Bonne nuit !，而“今晚见”用 À ce soir !。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_06_06', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'commencer', article: null, gender: null, pos: 'v.', ipa: '/kɔ.mɑ̃.se/', meaning: '开始，着手',
    examples: [
      { fr: 'Le cours commence à huit heures et demie.', zh: '课程八点半开始。' },
      { fr: 'Nous commençons à comprendre les dialogues rapides.', zh: '我们开始能听懂语速较快的对话了。' },
      { fr: 'Par quoi allons-nous commencer ?', zh: '我们从哪里开始呢？' }
    ],
    antonyms: [{ word: 'finir', meaning: '结束，完成' }],
    etymology: '源自通俗拉丁语 *cominitiare（开启），属于 -cer 正字法第一组动词。',
    commonMistake: { tag: 'nous 变位加 ç', wrong: 'Nous commencons.', right: 'Nous commençons.（在 o 前必须加软音符 ç）', tip: '以 -cer 结尾的动词在 nous 变位 -ons 前都要把 c 改为 ç，以保持发 /s/ 音！' },
    conjugationPresent: ['je commence', 'tu commences', 'il / elle commence', 'nous commençons', 'vous commencez', 'ils / elles commencent']
  },
  {
    id: 'bw1_06_07', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'finir', article: null, gender: null, pos: 'v.', ipa: '/fi.niʁ/', meaning: '结束，完成',
    examples: [
      { fr: 'À quelle heure finissez-vous votre travail ?', zh: '您几点下班？' },
      { fr: 'Je finis mes exercices avant le dîner.', zh: '我在晚饭前完成练习题。' },
      { fr: 'Le film finit très bien.', zh: '这部电影结局非常圆满。' }
    ],
    antonyms: [{ word: 'commencer', meaning: '开始' }],
    etymology: '源自拉丁语 finire（划定界限、结束），最典型的规则第二组 -ir 动词代表。',
    commonMistake: { tag: '第二组复数加 -iss-', wrong: 'Nous finons / Ils finent.', right: 'Nous finissons / Vous finissez / Ils finissent.', tip: '规则第二组动词（finir, choisir, réussir）复数变位中一律带有中缀 -iss-！' },
    conjugationPresent: ['je finis', 'tu finis', 'il / elle finit', 'nous finissons', 'vous finissez', 'ils / elles finissent']
  },
  {
    id: 'bw1_06_08', bookId: 'book_beiwai_1', lesson: '第6课：Quelle heure est-il ?', word: 'se dépêcher', article: null, gender: null, pos: 'v.', ipa: '/sə de.pe.ʃe/', meaning: '赶紧，抓紧时间',
    examples: [
      { fr: 'Dépêche-toi, le bus va partir !', zh: '快点，公交车要开了！' },
      { fr: 'Nous nous dépêchons pour ne pas rater le train.', zh: '我们赶紧走以免错过火车。' },
      { fr: 'Elle se dépêche de finir sa lettre.', zh: '她赶紧把信写完。' }
    ],
    antonyms: [{ word: 'prendre son temps', meaning: '慢慢来' }],
    etymology: '源自古法语 despeechier（解开束缚、加速办理），常用于提醒快一点。',
    commonMistake: { tag: '肯定命令式代词位置', wrong: 'Te dépêche !', right: 'Dépêche-toi ! / Dépêchez-vous !', tip: '代动词肯定命令式中，反身代词移至动词后用连字符连接，te 变为重读形式 toi。' },
    conjugationPresent: ['je me dépêche', 'tu te dépêches', 'il / elle se dépêche', 'nous nous dépêchons', 'vous vous dépêchez', 'ils / elles se dépêchent']
  },

  // ---------- 第7课：Un repas français（法式餐饮与食物）----------
  {
    id: 'bw1_07_01', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'repas', article: 'un', gender: 'm', pos: 'n.', ipa: '/ʁə.pa/', meaning: '一餐，一顿饭',
    examples: [
      { fr: 'En France, le repas est un moment de partage.', zh: '在法国，用餐是大家共享交流的时光。' },
      { fr: 'Nous prenons trois repas par jour.', zh: '我们每天吃三顿饭。' },
      { fr: 'Merci pour ce délicieux repas !', zh: '谢谢这顿美味的饭菜！' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 repascere（重新进食），单复数同形，词尾 s 静音。',
    commonMistake: { tag: '动词搭配', wrong: 'manger un repas', right: 'prendre un repas（用餐）/ préparer un repas（做饭）', tip: '表达“吃一顿饭”习惯用 prendre un repas，而不是 manger un repas。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_07_02', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'déjeuner', article: 'le', gender: 'm', pos: 'n.', ipa: '/de.ʒœ.ne/', meaning: '午餐；吃午饭（作动词）',
    examples: [
      { fr: 'Qu’est-ce qu’on mange pour le déjeuner ?', zh: '我们午饭吃什么？' },
      { fr: 'Je déjeune souvent à la cantine avec mes collègues.', zh: '我经常和同事在食堂吃午饭。' },
      { fr: 'Le petit déjeuner est mon repas préféré.', zh: '早餐是我最喜欢的一顿饭。' }
    ],
    antonyms: [],
    etymology: '字面意为“打破禁食（dé- + jeûner）”，现代法国指午饭，早餐称 le petit déjeuner。',
    commonMistake: { tag: '早午饭区分', wrong: '在法国把早餐只说成 le déjeuner', right: '法国标准：早餐 = le petit déjeuner；午饭 = le déjeuner', tip: '注意地区差异：在法国本土，déjeuner 专指午饭（魁北克和比利时除外）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_07_03', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'dîner', article: 'le', gender: 'm', pos: 'n.', ipa: '/di.ne/', meaning: '晚餐；吃晚饭（作动词）',
    examples: [
      { fr: 'En France, on dîne généralement vers vingt heures.', zh: '在法国，人们通常晚上八点左右吃晚饭。' },
      { fr: 'Je vous invite à dîner chez moi samedi soir.', zh: '我邀请您周六晚上来我家吃晚饭。' },
      { fr: 'Le dîner est prêt, à table !', zh: '晚饭准备好了，开饭啦！' }
    ],
    antonyms: [],
    etymology: '与 déjeuner 同源，î 上带长音符，兼作阳性名词与第一组动词。',
    commonMistake: { tag: '长音符 î', wrong: 'le diner（漏写 î）', right: 'le dîner（传统标准拼写带 î）', tip: 'dîner 作动词变位为规则第一组：je dîne, nous dînons。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_07_04', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'viande', article: 'la', gender: 'f', pos: 'n.', ipa: '/vjɑ̃d/', meaning: '肉，肉类',
    examples: [
      { fr: 'Je mange rarement de la viande rouge.', zh: '我很少吃红肉。' },
      { fr: 'Il préfère le poisson à la viande.', zh: '比起肉类，他更喜欢吃鱼。' },
      { fr: 'Cette viande grillée est très tendre.', zh: '这块烤肉非常鲜嫩。' }
    ],
    antonyms: [{ word: 'les légumes', meaning: '蔬菜' }],
    etymology: '源自拉丁语 vivenda（赖以生存的食物），后词义缩小专指肉类。',
    commonMistake: { tag: '否定句去部分冠词', wrong: 'Je ne mange pas de la viande.', right: 'Je ne mange pas de viande.', tip: '肯定句用部分冠词 de la viande，但在否定句中（ne...pas）部分冠词一律降格为 de！' },
    conjugationPresent: null
  },
  {
    id: 'bw1_07_05', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'légume', article: 'un', gender: 'm', pos: 'n.', ipa: '/le.ɡym/', meaning: '蔬菜（常用复数 les légumes）',
    examples: [
      { fr: 'Il est important de manger des légumes verts.', zh: '吃绿色蔬菜很重要。' },
      { fr: 'J’achète mes fruits et légumes au marché bio.', zh: '我在有机集市买水果和蔬菜。' },
      { fr: 'Cette soupe de légumes est très savoureuse.', zh: '这道蔬菜汤非常鲜美。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 legumen（豆类、蔬菜），阳性名词。',
    commonMistake: { tag: '阴阳性误判', wrong: 'une légume fraîche', right: 'un légume frais（阳性！）', tip: 'légume 虽以 e 结尾，但它是阳性名词，修饰它要用阳性形容词（des légumes frais）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_07_06', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'fruit', article: 'un', gender: 'm', pos: 'n.', ipa: '/fʁɥi/', meaning: '水果；成果',
    examples: [
      { fr: 'Je prends toujours un fruit en dessert.', zh: '我甜点总是吃一个水果。' },
      { fr: 'En été, il y a plein de fruits sucrés.', zh: '夏天有很多甜甜的水果。' },
      { fr: 'Ce succès est le fruit de ton travail.', zh: '这份成功是你努力的成果。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 fructus（果实、收益），ui 发撮口半元音 /ɥi/，词尾 t 不发音。',
    commonMistake: { tag: '读音注意', wrong: '受英语影响读作 /fʁut/', right: '读作 /fʁɥi/（t 不发音）', tip: '法语 fruit 是可数名词，常以复数 des fruits 出现。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_07_07', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'boire', article: null, gender: null, pos: 'v.', ipa: '/bwaʁ/', meaning: '喝，饮用',
    examples: [
      { fr: 'Qu’est-ce que vous voulez boire ?', zh: '您想喝点什么？' },
      { fr: 'Nous buvons beaucoup d’eau pendant le sport.', zh: '我们在运动期间喝很多水。' },
      { fr: 'Il ne boit jamais de café le soir.', zh: '他晚上从不喝咖啡。' }
    ],
    antonyms: [{ word: 'manger', meaning: '吃，进餐' }],
    etymology: '源自拉丁语 bibere（饮用），不规则第三组动词。',
    commonMistake: { tag: 'nous / vous 词干变化', wrong: 'Nous boivons / Vous boivez.', right: 'Nous buvons / Vous buvez（ils boivent）', tip: 'boire 有三套词干：单数 boi-，nous/vous buv-，ils/elles boiv-，务必要单独记牢！' },
    conjugationPresent: ['je bois', 'tu bois', 'il / elle boit', 'nous buvons', 'vous buvez', 'ils / elles boivent']
  },
  {
    id: 'bw1_07_08', bookId: 'book_beiwai_1', lesson: '第7课：Un repas français', word: 'délicieux', article: null, gender: null, pos: 'adj.', ipa: '/de.li.sjø/', meaning: '美味的，可口的（阴性：délicieuse）',
    examples: [
      { fr: 'Ce gâteau au chocolat est vraiment délicieux !', zh: '这个巧克力蛋糕真的太美味了！' },
      { fr: 'Ta soupe aux champignons est délicieuse.', zh: '你做的蘑菇汤真好喝。' },
      { fr: 'Nous avons passé une soirée délicieuse.', zh: '我们度过了一个美妙愉快的夜晚。' }
    ],
    antonyms: [{ word: 'mauvais', meaning: '难吃的，糟糕的' }],
    etymology: '源自拉丁语 deliciosus（令人愉悦的），以 -eux 结尾的形容词阴性变为 -euse。',
    commonMistake: { tag: '阳性复数不变', wrong: 'des plats délicieuxs', right: 'des plats délicieux（词尾已是 x，阳性复数不再加 s）', tip: '阳性单复数均为 délicieux，阴性单数 délicieuse，阴性复数 délicieuses。' },
    conjugationPresent: null
  },

  // ---------- 第8课：Une visite à Paris（巴黎名胜与观光）----------
  {
    id: 'bw1_08_01', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'monument', article: 'un', gender: 'm', pos: 'n.', ipa: '/mɔ.ny.mɑ̃/', meaning: '纪念碑，名胜古迹',
    examples: [
      { fr: 'Paris possède de nombreux monuments historiques.', zh: '巴黎拥有众多历史名胜古迹。' },
      { fr: 'L’Arc de Triomphe est un monument emblématique.', zh: '凯旋门是一座标志性建筑。' },
      { fr: 'Les touristes photographient ce célèbre monument.', zh: '游客们正在拍摄这座著名古迹。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 monumentum（提醒回忆之物），阳性名词。',
    commonMistake: { tag: '词义广度', wrong: '以为 monument 仅指“墓碑/纪念碑”', right: '在法语旅游中，埃菲尔铁塔、凯旋门、古堡等著名地标统称 un monument', tip: '游览名胜古迹最地道的说法就是 visiter les monuments。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_08_02', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'pont', article: 'un', gender: 'm', pos: 'n.', ipa: '/pɔ̃/', meaning: '桥，桥梁；小长假连休',
    examples: [
      { fr: 'Le Pont-Neuf est en fait le plus vieux pont de Paris.', zh: '新桥实际上是巴黎最古老的桥。' },
      { fr: 'Nous traversons le pont pour rejoindre la rive gauche.', zh: '我们过桥前往左岸。' },
      { fr: 'En mai, beaucoup de Français font le pont.', zh: '五月很多法国人会拼假连休。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 pons / pontem（桥），词尾 t 不发音。',
    commonMistake: { tag: '文化习语', wrong: '直译 faire le pont 为“造桥”', right: 'faire le pont 意为“夹在节假日与周末之间请一天假连休（搭桥休假）”', tip: '这是法国职场超级高频的文化表达！' },
    conjugationPresent: null
  },
  {
    id: 'bw1_08_03', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'jardin', article: 'un', gender: 'm', pos: 'n.', ipa: '/ʒaʁ.dɛ̃/', meaning: '花园，公园',
    examples: [
      { fr: 'Le jardin du Luxembourg est très populaire auprès des étudiants.', zh: '卢森堡公园深受大学生喜爱。' },
      { fr: 'Nous nous promenons dans le jardin public.', zh: '我们在公共花园里散步。' },
      { fr: 'Mes grands-parents cultivent des roses dans leur jardin.', zh: '我祖父母在花园里种玫瑰。' }
    ],
    antonyms: [],
    etymology: '源自法兰克语 *gardo（围起来的园子），与英语 garden 同源。',
    commonMistake: { tag: 'jardin 与 parc', wrong: '混用两个词的冠词', right: 'un jardin / un parc 均为阳性名词', tip: '法式规整园林常称 jardin（如 Jardin des Tuileries），大型林地公园称 parc。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_08_04', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'tour', article: 'une', gender: 'f', pos: 'n.', ipa: '/tuʁ/', meaning: '塔，高楼（阴性）；周游，圈（阳性 un tour）',
    examples: [
      { fr: 'La tour Eiffel mesure plus de trois cents mètres.', zh: '埃菲尔铁塔高三百多米。' },
      { fr: 'Le soir, la tour scintille toutes les heures.', zh: '晚上铁塔每整点都会闪烁灯光。' },
      { fr: 'On fait un petit tour dans le quartier ?', zh: '我们在街区里转一圈吧？' }
    ],
    antonyms: [],
    etymology: '阴性 une tour 源自拉丁语 turris（塔）；阳性 un tour 源自 tornus（旋转、一圈）。',
    commonMistake: { tag: '阴阳性改变词义', wrong: 'le tour Eiffel', right: 'la tour Eiffel（塔是阴性！）；faire un tour（逛一圈是阳性！）', tip: '法语经典双性词：la tour = 塔，le tour = 一圈/旅游/环法赛（le Tour de France）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_08_05', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'photo', article: 'une', gender: 'f', pos: 'n.', ipa: '/fɔ.to/', meaning: '照片（photographie 的简称）',
    examples: [
      { fr: 'Pouvez-vous nous prendre en photo devant le Louvre ?', zh: '请问您能帮我们在卢浮宫前拍张照吗？' },
      { fr: 'J’ai pris beaucoup de belles photos pendant mon voyage.', zh: '我旅行期间拍了很多漂亮照片。' },
      { fr: 'Regarde cette vieille photo de notre classe !', zh: '看这张我们班的老照片！' }
    ],
    antonyms: [],
    etymology: '源自希腊语 phos（光）+ graphein（画），简称 photo 依然保持阴性。',
    commonMistake: { tag: '动词搭配', wrong: 'faire / tirer une photo（不如 prendre 地道）', right: 'prendre une photo（拍照）/ prendre quelqu’un en photo', tip: '虽然以 o 结尾看似阳性，但 photo 是阴性（une belle photo）！' },
    conjugationPresent: null
  },
  {
    id: 'bw1_08_06', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'voir', article: null, gender: null, pos: 'v.', ipa: '/vwaʁ/', meaning: '看见，见到；明白',
    examples: [
      { fr: 'Depuis ce balcon, on voit toute la ville.', zh: '从这个阳台可以看到整座城市。' },
      { fr: 'Je vais voir mes amis lyonnais ce samedi.', zh: '这周六我去看望我的里昂朋友。' },
      { fr: 'Ah, je vois ce que tu veux dire !', zh: '啊，我明白你的意思了！' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 videre（看），高频不规则第三组动词。',
    commonMistake: { tag: 'voir 与 regarder 区分', wrong: 'Je vois la télévision.', right: 'Je regarde la télévision.（主动观看用 regarder，无意看见用 voir）', tip: 'voir 侧重“看到/见到”的结果，regarder 侧重“注视/看电视”的主动动作。' },
    conjugationPresent: ['je vois', 'tu vois', 'il / elle voit', 'nous voyons', 'vous voyez', 'ils / elles voient']
  },
  {
    id: 'bw1_08_07', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'connaître', article: null, gender: null, pos: 'v.', ipa: '/kɔ.nɛtʁ/', meaning: '认识（某人）；熟悉，了解（某地/作品）',
    examples: [
      { fr: 'Vous connaissez bien Paris ?', zh: '您对巴黎很熟悉吗？' },
      { fr: 'Je connais un excellent restaurant près d’ici.', zh: '我知道这附近有一家很棒的餐馆。' },
      { fr: 'Nous connaissons cette chanson par cœur.', zh: '这首歌我们熟得都能背下来了。' }
    ],
    antonyms: [{ word: 'ignorer', meaning: '不知道，不了解' }],
    etymology: '源自拉丁语 cognoscere（认识、熟悉），后必须直接接名词宾语（不接从句或动词）。',
    commonMistake: { tag: 'connaître 与 savoir 混淆', wrong: 'Je connais parler français. / Je sais Paris.', right: 'Je sais parler français. / Je connais Paris.', tip: '核心区别：connaître 后只接“人/地点/作品”等名词；savoir 后接“动词原形”或“que/si 从句”！' },
    conjugationPresent: ['je connais', 'tu connais', 'il / elle connaît', 'nous connaissons', 'vous connaissez', 'ils / elles connaissent']
  },
  {
    id: 'bw1_08_08', bookId: 'book_beiwai_1', lesson: '第8课：Une visite à Paris', word: 'magnifique', article: null, gender: null, pos: 'adj.', ipa: '/ma.ɲi.fik/', meaning: '壮丽的，宏伟的，极美的',
    examples: [
      { fr: 'Quelle vue magnifique sur la Seine !', zh: '塞纳河的景色多么壮丽啊！' },
      { fr: 'Nous avons visité une cathédrale magnifique.', zh: '我们参观了一座宏伟的大教堂。' },
      { fr: 'Tu as fait un travail magnifique, bravo !', zh: '你干得太漂亮了，真棒！' }
    ],
    antonyms: [{ word: 'horrible', meaning: '可怕的，糟糕透顶的' }],
    etymology: '源自拉丁语 magnificus（宏大的、崇高的），阴阳同形。',
    commonMistake: { tag: 'gn 读音', wrong: '把 gn 读成 /ɡn/', right: '读作 /ma.ɲi.fik/（gn 发柔和腭音 /ɲ/）', tip: 'magnifique 本身已含极高赞美程度，一般不再前面叠加 très（不说 très magnifique）。' },
    conjugationPresent: null
  },

  // ---------- 第9课：Les loisirs et le sport（业余爱好与体育运动）----------
  {
    id: 'bw1_09_01', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'loisir', article: 'un', gender: 'm', pos: 'n.', ipa: '/lwa.ziʁ/', meaning: '业余爱好，休闲活动（常用复数 les loisirs）',
    examples: [
      { fr: 'Quels sont vos loisirs préférés ?', zh: '您最喜欢的业余爱好是什么？' },
      { fr: 'La lecture et la natation sont mes principaux loisirs.', zh: '阅读和游泳是我的主要休闲活动。' },
      { fr: 'Il manque de temps pour ses loisirs cette année.', zh: '他今年没什么时间进行业余消遣。' }
    ],
    antonyms: [{ word: 'le travail', meaning: '工作' }],
    etymology: '源自拉丁语 licere（被允许、空闲），与英语 leisure 同源。',
    commonMistake: { tag: '词尾 r 发音', wrong: '省略词尾 r', right: '读作 /lwa.ziʁ/（清晰发 /ʁ/）', tip: '以 -ir 结尾的名词（loisir, plaisir, souvenir）词尾 r 全部清晰发音。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_09_02', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'sport', article: 'le', gender: 'm', pos: 'n.', ipa: '/spɔʁ/', meaning: '体育，运动',
    examples: [
      { fr: 'Je fais du sport trois fois par semaine.', zh: '我每周做三次运动。' },
      { fr: 'Quel sport pratiques-tu au lycée ?', zh: '你在高中参加什么体育运动？' },
      { fr: 'Le sport est excellent pour la santé.', zh: '运动对健康大有裨益。' }
    ],
    antonyms: [],
    etymology: '由古法语 desport（娱乐消遣）传入英语变为 sport，19 世纪又回流法语，词尾 t 静音。',
    commonMistake: { tag: '动词搭配', wrong: 'jouer du sport', right: 'faire du sport / pratiquer un sport', tip: '“做运动”固定用 faire du sport（部分冠词 du），不能用 jouer。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_09_03', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'musique', article: 'la', gender: 'f', pos: 'n.', ipa: '/my.zik/', meaning: '音乐，乐曲',
    examples: [
      { fr: 'J’écoute de la musique douce pour me concentrer.', zh: '我听轻音乐来集中注意力。' },
      { fr: 'Elle fait de la musique depuis l’âge de six ans.', zh: '她从六岁起就学音乐。' },
      { fr: 'La Fête de la musique a lieu le 21 juin en France.', zh: '法国音乐节在每年 6 月 21 日举行。' }
    ],
    antonyms: [],
    etymology: '源自希腊语 mousike（缪斯女神的艺术），阴性名词。',
    commonMistake: { tag: '部分冠词', wrong: 'J’écoute musique.', right: 'J’écoute de la musique.（或 J’aime la musique.）', tip: '泛指喜欢用定冠词（aimer la musique），表示听一些音乐用部分冠词（écouter de la musique）。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_09_04', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'natation', article: 'la', gender: 'f', pos: 'n.', ipa: '/na.ta.sjɔ̃/', meaning: '游泳（运动项目）',
    examples: [
      { fr: 'Je fais de la natation chaque mercredi soir.', zh: '我每周三晚上去游泳。' },
      { fr: 'La natation est un sport très complet.', zh: '游泳是一项非常全面的运动。' },
      { fr: 'Il participe à une compétition de natation.', zh: '他参加了一场游泳比赛。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 natatio（游泳），对应动词 nager（游泳）。',
    commonMistake: { tag: '运动表达', wrong: 'Je joue à la natation.', right: 'Je fais de la natation. / Je nage.', tip: '非球类/棋类个人运动（游泳、跑步、滑雪）一律用 faire de + 定冠词，不用 jouer à。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_09_05', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'promenade', article: 'une', gender: 'f', pos: 'n.', ipa: '/pʁɔm.nad/', meaning: '散步，漫步，郊游',
    examples: [
      { fr: 'On va faire une promenade au bord du lac ?', zh: '我们去湖边散散步吧？' },
      { fr: 'Cette longue promenade en forêt nous a fait du bien.', zh: '这次林中长途漫步让我们感觉很舒畅。' },
      { fr: 'La Promenade des Anglais est célèbre à Nice.', zh: '尼斯的英国人漫步大道非常有名。' }
    ],
    antonyms: [],
    etymology: '由动词 se promener（散步）派生而来的阴性名词。',
    commonMistake: { tag: '动词搭配', wrong: 'prendre une promenade（受英语 take a walk 影响）', right: 'faire une promenade / se promener', tip: '法语中“去散步”是 faire une promenade，不要直译成 prendre une promenade。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_09_06', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'jouer', article: null, gender: null, pos: 'v.', ipa: '/ʒwe/', meaning: '玩；打（球）；演奏（乐器）',
    examples: [
      { fr: 'Il joue au tennis avec son frère le dimanche.', zh: '他周日和哥哥一起打网球。' },
      { fr: 'Ma sœur joue très bien du piano.', zh: '我妹妹钢琴弹得非常好。' },
      { fr: 'Les enfants jouent ensemble dans le jardin.', zh: '孩子们在花园里一起玩耍。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 jocare（嬉戏），规则第一组动词。',
    commonMistake: { tag: '球类用 à，乐器用 de', wrong: 'Je joue le piano. / Il joue du football.', right: 'jouer du piano（乐器用 de）；jouer au football（球类/棋类用 à）', tip: '必考铁律：jouer à + 球类/游戏（au tennis, aux échecs），jouer de + 乐器（du violon, de la guitare）！' },
    conjugationPresent: ['je joue', 'tu joues', 'il / elle joue', 'nous jouons', 'vous jouez', 'ils / elles jouent']
  },
  {
    id: 'bw1_09_07', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'préférer', article: null, gender: null, pos: 'v.', ipa: '/pʁe.fe.ʁe/', meaning: '更喜欢，宁愿',
    examples: [
      { fr: 'Je préfère le thé au café.', zh: '比起咖啡，我更喜欢茶。' },
      { fr: 'Nous préférons rester à la maison ce soir.', zh: '我们今晚更愿意待在家里。' },
      { fr: 'Quelle couleur préférez-vous ?', zh: '您更喜欢哪种颜色？' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 praeferre（置于前面、偏爱），结构为 préférer A à B。',
    commonMistake: { tag: '变位重音与比较介词', wrong: 'Je préfére le thé que le café.', right: 'Je préfère le thé au café.（第二个 é 变 è；比较用 à）', tip: '“比起 B 更喜欢 A”用 préférer A à B，且单数及第三人称复数第二个 é 变为 è。' },
    conjugationPresent: ['je préfère', 'tu préfères', 'il / elle préfère', 'nous préférons', 'vous préférez', 'ils / elles préfèrent']
  },
  {
    id: 'bw1_09_08', bookId: 'book_beiwai_1', lesson: '第9课：Les loisirs et le sport', word: 'souvent', article: null, gender: null, pos: 'adv.', ipa: '/su.vɑ̃/', meaning: '经常，常常',
    examples: [
      { fr: 'Je vais souvent à la piscine après les cours.', zh: '我下课后经常去游泳池。' },
      { fr: 'Nous nous voyons très souvent le week-end.', zh: '我们周末非常经常见面。' },
      { fr: 'Il oublie souvent où il a posé ses lunettes.', zh: '他经常忘记眼镜放在哪儿了。' }
    ],
    antonyms: [
      { word: 'rarement', meaning: '很少，罕见地' },
      { word: 'jamais', meaning: '从不' }
    ],
    etymology: '源自拉丁语 subinde（紧接着、屡次），副词通常紧跟在变位动词之后。',
    commonMistake: { tag: '副词位置', wrong: 'Je souvent vais au cinéma.（受英语 I often go 影响）', right: 'Je vais souvent au cinéma.', tip: '法语频率副词（souvent, toujours, jamais）放在变位动词之后，绝不放在主语和动词之间！' },
    conjugationPresent: null
  },

  // ---------- 第10课：À la poste et à la banque（邮局、银行与生活办事）----------
  {
    id: 'bw1_10_01', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'poste', article: 'la', gender: 'f', pos: 'n.', ipa: '/pɔst/', meaning: '邮局，邮政（阴性）；岗位，职位（阳性 un poste）',
    examples: [
      { fr: 'Je vais à la poste envoyer un colis.', zh: '我去邮局寄一个包裹。' },
      { fr: 'La poste ferme à dix-huit heures en semaine.', zh: '邮局工作日晚上六点关门。' },
      { fr: 'Il a obtenu un nouveau poste à Strasbourg.', zh: '他在斯特拉斯堡获得了一个新职位。' }
    ],
    antonyms: [],
    etymology: '源自意大利语 posta（驿站），阴阳性不同对应不同词义。',
    commonMistake: { tag: '阴阳性辨义', wrong: 'Je vais au poste.（想表达“我去邮局”）', right: 'Je vais à la poste.（邮局是阴性！）；un poste = 职位/岗位', tip: '记住经典对比：la poste = 邮局，le poste = 工作岗位 / 电视机。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_10_02', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'lettre', article: 'une', gender: 'f', pos: 'n.', ipa: '/lɛtʁ/', meaning: '信件，书信；字母',
    examples: [
      { fr: 'J’envoie une lettre recommandée en France.', zh: '我往法国寄一封挂号信。' },
      { fr: 'Combien de lettres y a-t-il dans l’alphabet français ?', zh: '法语字母表里有多少个字母？' },
      { fr: 'Elle a reçu une longue lettre de son amie.', zh: '她收到了一封朋友寄来的长信。' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 littera（字母、书信），阴性名词。',
    commonMistake: { tag: '复数词义拓展', wrong: '不认识 les lettres 指“文科/文学”', right: 'faire des études de lettres = 攻读文学/文科专业', tip: '大学里的 Faculté des lettres 就是文学院。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_10_03', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'timbre', article: 'un', gender: 'm', pos: 'n.', ipa: '/tɛ̃bʁ/', meaning: '邮票；音色',
    examples: [
      { fr: 'Je voudrais un carnet de douze timbres, s’il vous plaît.', zh: '请给我一本十二枚装的邮票。' },
      { fr: 'N’oublie pas de coller un timbre sur l’enveloppe.', zh: '别忘了在信封上贴邮票。' },
      { fr: 'Cette chanteuse a un timbre de voix magnifique.', zh: '这位女歌手的嗓音音色极美。' }
    ],
    antonyms: [],
    etymology: '源自希腊语 tympanon（鼓），原指印章/邮戳，后专指邮票。',
    commonMistake: { tag: '阴阳性误判', wrong: 'une timbre', right: 'un timbre（阳性！）', tip: '虽然以 e 结尾，但 timbre 是阳性名词，im 在 b 前读鼻化元音 /ɛ̃/。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_10_04', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'colis', article: 'un', gender: 'm', pos: 'n.', ipa: '/kɔ.li/', meaning: '包裹，快递',
    examples: [
      { fr: 'J’attends un colis qui doit arriver aujourd’hui.', zh: '我在等一个今天应该送到的快递包裹。' },
      { fr: 'Combien coûte l’envoi de ce colis vers la Chine ?', zh: '寄这个包裹到中国需要多少钱？' },
      { fr: 'Le facteur a déposé deux colis chez le gardien.', zh: '邮递员把两个包裹放在门房那里了。' }
    ],
    antonyms: [],
    etymology: '源自意大利语 collo（货运包件），单复数同形，词尾 s 静音。',
    commonMistake: { tag: '词尾 s 静音', wrong: '把 colis 读成 /kɔ.lis/', right: '读作 /kɔ.li/（词尾 s 不发音）', tip: '单数 un colis，复数 des colis，书写与发音都完全一致。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_10_05', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'banque', article: 'une', gender: 'f', pos: 'n.', ipa: '/bɑ̃k/', meaning: '银行',
    examples: [
      { fr: 'Je dois ouvrir un compte à la banque.', zh: '我得去银行开一个账户。' },
      { fr: 'La banque est ouverte du mardi au samedi matin.', zh: '银行周二至周六上午营业。' },
      { fr: 'Il retire de l’argent au distributeur de la banque.', zh: '他在银行的自动取款机上取钱。' }
    ],
    antonyms: [],
    etymology: '源自意大利语 banca（中世纪钱商换钱的长凳），阴性名词。',
    commonMistake: { tag: '相关高频词', wrong: '说“银行卡”时只说 carte de banque', right: '最地道说法是 une carte bancaire（简称 CB）', tip: '在法国刷卡付款常看到标识 CB，就是 Carte Bancaire 的缩写。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_10_06', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'argent', article: "l'", gender: 'm', pos: 'n.', ipa: '/aʁ.ʒɑ̃/', meaning: '钱，货币；银',
    examples: [
      { fr: 'Je n’ai pas assez d’argent liquide sur moi.', zh: '我身上带的现金不够。' },
      { fr: 'Il économise de l’argent pour son voyage en Europe.', zh: '他正在为欧洲之行攒钱。' },
      { fr: 'L’argent ne fait pas le bonheur.', zh: '金钱买不到幸福。（法语名言）' }
    ],
    antonyms: [],
    etymology: '源自拉丁语 argentum（白银），阳性不可数名词，元音开头定冠词省音为 l’argent。',
    commonMistake: { tag: '不可数单数', wrong: 'beaucoup des argents', right: 'beaucoup d’argent（永远用阳性单数）', tip: '表示金钱时 argent 是不可数单数名词，前面用部分冠词 de l’argent 或数量副词 + d’argent。' },
    conjugationPresent: null
  },
  {
    id: 'bw1_10_07', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'envoyer', article: null, gender: null, pos: 'v.', ipa: '/ɑ̃.vwa.je/', meaning: '寄，发送，派遣',
    examples: [
      { fr: 'Je t’envoie les documents par mail ce soir.', zh: '我今晚通过邮件把文件发给你。' },
      { fr: 'Nous envoyons une carte postale à nos parents.', zh: '我们给父母寄了一张明信片。' },
      { fr: 'Elle envoie un message à son amie.', zh: '她给朋友发了一条消息。' }
    ],
    antonyms: [{ word: 'recevoir', meaning: '收到，接收' }],
    etymology: '由 en + voie（道路）构成，意为“送上路”，单数与第三人称复数 y 变 i。',
    commonMistake: { tag: 'y 变 i 变位', wrong: 'J’envoye une lettre.', right: 'J’envoie une lettre.（-oyer 动词在静音 e 前 y 必须变 i）', tip: '单数和第三人称复数用 envoi-，只有 nous envoyons / vous envoyez 保留 y。' },
    conjugationPresent: ["j'envoie", 'tu envoies', 'il / elle envoie', 'nous envoyons', 'vous envoyez', 'ils / elles envoient']
  },
  {
    id: 'bw1_10_08', bookId: 'book_beiwai_1', lesson: '第10课：À la poste et à la banque', word: 'changer', article: null, gender: null, pos: 'v.', ipa: '/ʃɑ̃.ʒe/', meaning: '兑换（货币）；改变，更换',
    examples: [
      { fr: 'Où puis-je changer des yuans en euros ?', zh: '请问我在哪里可以把人民币换成欧元？' },
      { fr: 'Nous changeons de métro à la station République.', zh: '我们在共和国站换乘地铁。' },
      { fr: 'Le temps change très vite en montagne.', zh: '山里的天气变化非常快。' }
    ],
    antonyms: [{ word: 'garder', meaning: '保留，保持' }],
    etymology: '源自拉丁语 cambiare（交换），属于 -ger 特殊正字法第一组动词。',
    commonMistake: { tag: 'nous 变位保留 e 与搭配 de', wrong: 'Nous changons le train.', right: 'Nous changeons de train.（保留 e；“更换/换乘某物”用 changer de + 无冠词名词）', tip: '“换车/换衣服/换工作”一律用 changer de + 裸名词（changer de ligne, changer d’avis）。' },
    conjugationPresent: ['je change', 'tu changes', 'il / elle change', 'nous changeons', 'vous changez', 'ils / elles changent']
  }
];
