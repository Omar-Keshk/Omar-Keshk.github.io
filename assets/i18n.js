/* Arabic / Russian / English switcher. */
(function () {
  var T = {
 "About": {
  "ar": "نبذة عني",
  "ru": "Обо мне"
 },
 "Research Projects": {
  "ar": "المشاريع البحثية",
  "ru": "Исследовательские проекты"
 },
 "Research Outputs": {
  "ar": "المخرجات البحثية",
  "ru": "Результаты исследований"
 },
 "History of Alexandria": {
  "ar": "تاريخ الإسكندرية",
  "ru": "История Александрии"
 },
 "Gallery": {
  "ar": "المعرض",
  "ru": "Галерея"
 },
 "Contact": {
  "ar": "تواصل معي",
  "ru": "Контакты"
 },
 "OmarKeshk": {
  "ar": "عمر<br>كشك",
  "ru": "Омар<br>Кешк"
 },
 "Nuclear Engineer": {
  "ar": "مهندس نووي",
  "ru": "Инженер-ядерщик"
 },
 "Researcher": {
  "ar": "باحث",
  "ru": "Исследователь"
 },
 "I am always happy to connect.": {
  "ar": "يسعدني دائمًا التواصل.",
  "ru": "Всегда рад новым контактам."
 },
 "Please feel free to reach out for research discussions, collaborations, academic opportunities, or conversations about nuclear science, engineering and the history of Alexandria.": {
  "ar": "يسعدني أن تتواصل معي للنقاشات البحثية أو التعاون أو الفرص الأكاديمية، أو للحديث عن العلوم النووية والهندسة وتاريخ الإسكندرية.",
  "ru": "Пишите мне по вопросам научных обсуждений, сотрудничества, академических возможностей или для разговора о ядерной науке, инженерии и истории Александрии."
 },
 "Email Me": {
  "ar": "راسلني عبر البريد",
  "ru": "Написать мне"
 },
 "© Omar Ahmed Keshk.": {
  "ar": "© عمر أحمد كشك.",
  "ru": "© Омар Ахмед Кешк."
 },
 "Contact | Omar Ahmed Keshk": {
  "ar": "تواصل | عمر أحمد كشك",
  "ru": "Контакты | Омар Ахмед Кешк"
 },
 "September to December 2025: Research internship (START programme) at JINR in Dubna, Russia.": {
  "ar": "<strong>من سبتمبر إلى ديسمبر 2025:</strong> تدريب بحثي (برنامج START) في JINR بدوبنا، روسيا.",
  "ru": "<strong>Сентябрь–декабрь 2025:</strong> исследовательская стажировка (программа START) в ОИЯИ, Дубна, Россия."
 },
 "October 2025: Presenting at the AYSS-2025 conference at JINR, Dubna.": {
  "ar": "<strong>أكتوبر 2025:</strong> عرض بحثي في مؤتمر AYSS-2025 بمعهد JINR في دوبنا.",
  "ru": "<strong>Октябрь 2025:</strong> выступление на конференции AYSS-2025 в ОИЯИ, Дубна."
 },
 "July 2025: Graduating with a B.S. in Nuclear and Radiation Engineering from Alexandria University.": {
  "ar": "<strong>يوليو 2025:</strong> التخرج بدرجة البكالوريوس في الهندسة النووية والإشعاعية من جامعة الإسكندرية.",
  "ru": "<strong>Июль 2025:</strong> окончание Александрийского университета со степенью бакалавра по ядерной и радиационной технике."
 },
 "January 2025: Completing regulatory training with ENNRA.": {
  "ar": "<strong>يناير 2025:</strong> إتمام تدريب تنظيمي مع هيئة الرقابة النووية والإشعاعية (ENNRA).",
  "ru": "<strong>Январь 2025:</strong> регуляторное обучение в ENNRA."
 },
 "Summer 2024: Attending the University of Michigan Nuclear Engineering Summer School.": {
  "ar": "<strong>صيف 2024:</strong> حضور المدرسة الصيفية للهندسة النووية بجامعة ميشيغان.",
  "ru": "<strong>Лето 2024:</strong> Летняя школа по ядерной технике Мичиганского университета."
 },
 "February 2024: Receiving the AUC/UCCD Engineering Program Scholarship.": {
  "ar": "<strong>فبراير 2024:</strong> الحصول على منحة برنامج الهندسة AUC/UCCD.",
  "ru": "<strong>Февраль 2024:</strong> получение стипендии инженерной программы AUC/UCCD."
 },
 "August 2023: Presenting a poster at the 16th UGRF and the 4th Egyptian Junior Researcher Competition, Nile University.": {
  "ar": "<strong>أغسطس 2023:</strong> عرض ملصق علمي في المؤتمر 16 UGRF والمسابقة المصرية الرابعة للباحثين الشباب، جامعة النيل.",
  "ru": "<strong>Август 2023:</strong> постер на 16-м UGRF и 4-м египетском конкурсе молодых исследователей, Университет Нила."
 },
 "2017 to 2019: Volunteering at the Planetarium Science Center, Bibliotheca Alexandrina.": {
  "ar": "<strong>2017 إلى 2019:</strong> تطوع في مركز علوم القبة السماوية بمكتبة الإسكندرية.",
  "ru": "<strong>2017–2019:</strong> волонтёрство в Научном центре «Планетарий», Bibliotheca Alexandrina."
 },
 "Gallery | Omar Ahmed Keshk": {
  "ar": "المعرض | عمر أحمد كشك",
  "ru": "Галерея | Омар Ахмед Кешк"
 },
 "Alexandria is one of the few cities in the world whose founder, founding date and original purpose are all known, and whose life has continued without a break for more than 2,300 years.": {
  "ar": "الإسكندرية من المدن القليلة في العالم التي يُعرف مؤسسها وتاريخ تأسيسها والغرض الأصلي منها، والتي استمرت الحياة فيها دون انقطاع لأكثر من 2300 عام.",
  "ru": "Александрия — один из немногих городов мира, у которого известны основатель, дата основания и первоначальное назначение и в котором жизнь продолжается без перерыва более 2300 лет."
 },
 "Why is the History of Alexandria Unique?": {
  "ar": "ما الذي يميّز تاريخ الإسكندرية؟",
  "ru": "Чем уникальна история Александрии?"
 },
 "Qaitbay Citadel, built in 1477 AD, stands on the site of the Pharos lighthouse. The Pharos was built around 280 BC, counted among the Seven Wonders of the Ancient World, and finally fell to earthquakes. Some of its stones were reused in the citadel.": {
  "ar": "تقف قلعة قايتباي، التي بُنيت عام 1477م، في موقع منارة فاروس. بُنيت المنارة نحو 280 ق.م وعُدّت من عجائب الدنيا السبع في العالم القديم، ثم سقطت في النهاية بفعل الزلازل، وأُعيد استخدام بعض أحجارها في القلعة.",
  "ru": "Цитадель Кайтбея, построенная в 1477 году, стоит на месте маяка Фарос. Фарос был построен около 280 г. до н. э., считался одним из семи чудес света и в итоге рухнул из-за землетрясений. Часть его камней использовали при строительстве цитадели."
 },
 "Alexandria combines a precise origin, a role as a capital, and an influence on world knowledge that few cities can match.": {
  "ar": "تجمع الإسكندرية بين أصل معروف بدقة، ودور كعاصمة، وتأثير في المعرفة العالمية قلّ أن تضاهيه مدينة أخرى.",
  "ru": "Александрия сочетает точно известное происхождение, роль столицы и влияние на мировое знание, с которым мало какой город может сравниться."
 },
 "More than 2,300 years of continuous urban life.Alexander the Great founded the city in 331 BC on the Mediterranean coast, opposite the island of Pharos. Its grid plan is traditionally credited to the architect Dinocrates of Rhodes, and the city has been inhabited ever since.": {
  "ar": "<strong>أكثر من 2300 عام من الحياة الحضرية المتصلة.</strong><br>أسس الإسكندر الأكبر المدينة عام 331 ق.م على ساحل البحر المتوسط قبالة جزيرة فاروس. وتُنسب خطتها الشبكية تقليديًا إلى المهندس دينوقراطيس الرودسي، ولم تنقطع الحياة فيها منذ ذلك الحين.",
  "ru": "<strong>Более 2300 лет непрерывной городской жизни.</strong><br>Александр Македонский основал город в 331 г. до н. э. на средиземноморском побережье напротив острова Фарос. Его регулярная планировка традиционно приписывается архитектору Динократу Родосскому, и с тех пор город не прекращал существовать."
 },
 "Capital of Egypt for roughly 950 years.From Ptolemy I, around 305 BC, through Roman and Byzantine rule, Alexandria was Egypt's capital until the Arab conquest of 641 AD, when the seat of government moved inland to Fustat.": {
  "ar": "<strong>عاصمة مصر لنحو 950 عامًا.</strong><br>منذ بطليموس الأول، نحو 305 ق.م، ومرورًا بالحكمين الروماني والبيزنطي، ظلت الإسكندرية عاصمة مصر حتى الفتح العربي عام 641م، حين انتقل مقر الحكم إلى الفسطاط في الداخل.",
  "ru": "<strong>Столица Египта примерно 950 лет.</strong><br>От Птолемея I, около 305 г. до н. э., и через римское и византийское правление Александрия оставалась столицей Египта до арабского завоевания в 641 г., когда центр управления переместился вглубь страны, в Фустат."
 },
 "A crossroads of peoples and ideas.Egyptians, Greeks, Jews, Romans, Christians and Muslims, and later Italians, Armenians and Levantines, all shaped the city. Its intellectual influence, from the Library to the Catechetical School, outlived its political role.": {
  "ar": "<strong>ملتقى للشعوب والأفكار.</strong><br>شارك في صنع المدينة المصريون والإغريق واليهود والرومان والمسيحيون والمسلمون، ثم الإيطاليون والأرمن والشوام. وقد تجاوز تأثيرها الفكري، من المكتبة إلى المدرسة اللاهوتية، دورَها السياسي.",
  "ru": "<strong>Перекрёсток народов и идей.</strong><br>Город формировали египтяне, греки, евреи, римляне, христиане и мусульмане, а позднее итальянцы, армяне и выходцы из Леванта. Его интеллектуальное влияние, от Библиотеки до Катехетической школы, пережило политическую роль."
 },
 "From the Ancient Library to Modern Science": {
  "ar": "من المكتبة القديمة إلى العلم الحديث",
  "ru": "От древней Библиотеки к современной науке"
 },
 "Under the early Ptolemies, Alexandria became the leading centre of learning in the Mediterranean world. The Mouseion, a research institution, and its Great Library gathered scholars and texts from across the known world.": {
  "ar": "في عهد البطالمة الأوائل، أصبحت الإسكندرية أبرز مراكز العلم في العالم المتوسطي. فقد جمع «الموسيون»، وهو مؤسسة بحثية، ومكتبته الكبرى العلماء والمخطوطات من أنحاء العالم المعروف.",
  "ru": "При первых Птолемеях Александрия стала ведущим центром науки в Средиземноморье. Мусейон, научное учреждение, и его Великая библиотека собрали учёных и тексты со всего известного мира."
 },
 "Scholars connected with the city include Euclid, who wrote the Elements; Eratosthenes, who estimated the circumference of the Earth around 240 BC; Herophilus, a pioneer of anatomy; Hero, who described early steam-powered and mechanical devices; and Ptolemy, whose Almagest shaped astronomy for more than a thousand years. The Library's decline was gradual, shaped by political turmoil and reduced support over several centuries, rather than a single fire.": {
  "ar": "من العلماء المرتبطين بالمدينة <strong>إقليدس</strong> مؤلف كتاب <em>الأصول</em>، و<strong>إراتوستينس</strong> الذي قدّر محيط الأرض نحو 240 ق.م، و<strong>هيروفيلوس</strong> رائد علم التشريح، و<strong>هيرون</strong> الذي وصف أجهزة ميكانيكية وبخارية مبكرة، و<strong>بطليموس</strong> الذي شكّل كتابه <em>المجسطي</em> علم الفلك لأكثر من ألف عام. وكان تراجع المكتبة تدريجيًا، بفعل الاضطرابات السياسية وتراجع الدعم عبر قرون، لا بسبب حريق واحد.",
  "ru": "С городом связаны <strong>Евклид</strong>, автор <em>«Начал»</em>; <strong>Эратосфен</strong>, оценивший окружность Земли около 240 г. до н. э.; <strong>Герофил</strong>, один из основателей анатомии; <strong>Герон</strong>, описавший ранние механические и паровые устройства; и <strong>Птолемей</strong>, чей <em>«Альмагест»</em> определял астрономию более тысячи лет. Упадок Библиотеки был постепенным, вызванным политическими потрясениями и сокращением поддержки на протяжении столетий, а не одним пожаром."
 },
 "The Bibliotheca Alexandrina, inaugurated in 2002 in memory of the ancient Library.": {
  "ar": "مكتبة الإسكندرية، افتُتحت عام 2002 تخليدًا لذكرى المكتبة القديمة.",
  "ru": "Bibliotheca Alexandrina, открытая в 2002 году в память о древней Библиотеке."
 },
 "This heritage is part of why nuclear science feels close to home for me. I study at Alexandria University, and from 2017 to 2019 I volunteered at the Planetarium Science Center of the Bibliotheca Alexandrina. The city's tradition of asking how nature works, measuring it and sharing the results is the one I hope to continue through my own work.": {
  "ar": "هذا الإرث جزء من سبب قربي من العلوم النووية. أدرس في جامعة الإسكندرية، وتطوعت من 2017 إلى 2019 في مركز علوم القبة السماوية بمكتبة الإسكندرية. وتقليد المدينة في التساؤل عن كيفية عمل الطبيعة وقياسها ومشاركة النتائج هو ما أتمنى أن أواصله من خلال عملي.",
  "ru": "Это наследие — одна из причин, почему ядерная наука мне близка. Я учусь в Александрийском университете, а в 2017–2019 годах был волонтёром в Научном центре «Планетарий» при Bibliotheca Alexandrina. Традицию города — спрашивать, как устроена природа, измерять и делиться результатами — я надеюсь продолжить в своей работе."
 },
 "Alexandria Across the Eras": {
  "ar": "الإسكندرية عبر العصور",
  "ru": "Александрия сквозь эпохи"
 },
 "Alexandria's history is often split into separate chapters: Greek, Roman, Islamic and modern. Here I follow it as one continuous story, in nine eras, each defined by its rulers, its trade and its place in Egypt and the Mediterranean.": {
  "ar": "كثيرًا ما يُقسَّم تاريخ الإسكندرية إلى فصول منفصلة: إغريقي وروماني وإسلامي وحديث. وهنا أتتبعه كقصة واحدة متصلة عبر <strong>تسعة عصور</strong>، يتحدد كل منها بحكامه وتجارته ومكانه في مصر والبحر المتوسط.",
  "ru": "Историю Александрии часто делят на отдельные главы: греческую, римскую, исламскую и современную. Здесь я прослеживаю её как единый рассказ в <strong>девяти эпохах</strong>, каждая из которых определяется правителями, торговлей и местом в Египте и Средиземноморье."
 },
"An artist's impression of the ancient Library of Alexandria.": {"ar": "تصور فني للمكتبة القديمة في الإسكندرية.", "ru": "Художественная реконструкция древней Александрийской библиотеки."},
"An illustrated map of ancient Alexandria with the Pharos island and its two harbours.": {"ar": "خريطة مصوّرة للإسكندرية القديمة تُظهر جزيرة فاروس وميناءيها.", "ru": "Иллюстрированная карта древней Александрии с островом Фарос и двумя гаванями."},
"Alexandria across its eras, in one image.": {"ar": "الإسكندرية عبر عصورها في صورة واحدة.", "ru": "Александрия сквозь эпохи в одном изображении."
 },
 "331 to 30 BC": {
  "ar": "331 إلى 30 ق.م",
  "ru": "331–30 гг. до н. э."
 },
 "Foundation and Ptolemaic Alexandria": {
  "ar": "التأسيس والإسكندرية البطلمية",
  "ru": "Основание и Александрия Птолемеев"
 },
 "Alexander the Great founded the city in 331 BC. Under Ptolemy I and his successors it became Egypt's capital and the Mediterranean's leading centre of learning, home to the Pharos lighthouse, the Mouseion and the Great Library. The era ended with Cleopatra VII.": {
  "ar": "أسس الإسكندر الأكبر المدينة عام 331 ق.م. وفي عهد بطليموس الأول وخلفائه أصبحت عاصمة مصر وأبرز مراكز العلم في البحر المتوسط، وفيها منارة فاروس والموسيون والمكتبة الكبرى. وانتهى العصر بكليوباترا السابعة.",
  "ru": "Александр Македонский основал город в 331 г. до н. э. При Птолемее I и его преемниках он стал столицей Египта и ведущим научным центром Средиземноморья, здесь находились маяк Фарос, Мусейон и Великая библиотека. Эпоха завершилась Клеопатрой VII."
 },
 "30 BC to 395 AD": {
  "ar": "30 ق.م إلى 395م",
  "ru": "30 г. до н. э. – 395 г."
 },
 "Roman Alexandria": {
  "ar": "الإسكندرية الرومانية",
  "ru": "Римская Александрия"
 },
 "Egypt became a Roman province and Alexandria one of the empire's greatest cities, exporting grain to Rome. It had large Greek, Egyptian and Jewish communities, hosted scholars such as Ptolemy, and became an early centre of Christianity. The Serapeum was destroyed in 391.": {
  "ar": "أصبحت مصر ولاية رومانية والإسكندرية من أعظم مدن الإمبراطورية، تصدّر القمح إلى روما. ضمت جاليات إغريقية ومصرية ويهودية كبيرة، واستضافت علماء مثل بطليموس، وصارت مركزًا مبكرًا للمسيحية. ودُمّر السرابيوم عام 391م.",
  "ru": "Египет стал римской провинцией, а Александрия — одним из величайших городов империи, откуда экспортировали зерно в Рим. Здесь жили большие греческие, египетские и еврейские общины, работали такие учёные, как Птолемей, и возник один из ранних центров христианства. Серапеум был разрушен в 391 г."
 },
 "395 to 641": {
  "ar": "395 إلى 641م",
  "ru": "395–641 гг."
 },
 "Byzantine Alexandria": {
  "ar": "الإسكندرية البيزنطية",
  "ru": "Византийская Александрия"
 },
 "A major Christian city and the seat of the Coptic Patriarchate. Philosophers such as Hypatia taught here in the early 400s, and theological disputes shaped the Church. Persian forces held the city from 619 to 629.": {
  "ar": "مدينة مسيحية كبرى ومقر البطريركية القبطية. درّس فيها فلاسفة مثل هيباتيا في أوائل القرن الخامس، وشكّلت الخلافات اللاهوتية مسار الكنيسة. واحتلتها القوات الفارسية من 619 إلى 629م.",
  "ru": "Крупный христианский город и резиденция Коптского патриарха. В начале V века здесь преподавали философы, такие как Гипатия, а богословские споры определяли судьбу Церкви. Персидские войска удерживали город с 619 по 629 г."
 },
 "641 to 969": {
  "ar": "641 إلى 969م",
  "ru": "641–969 гг."
 },
 "Arab Conquest and Early Islamic Period": {
  "ar": "الفتح العربي والعصر الإسلامي المبكر",
  "ru": "Арабское завоевание и раннеисламский период"
 },
 "The Arab army under Amr ibn al-As took the city in 641 to 642, and the capital moved inland to Fustat. Alexandria remained a major port, naval base and fortified coastal city under successive Islamic dynasties.": {
  "ar": "استولى الجيش العربي بقيادة عمرو بن العاص على المدينة في 641 إلى 642م، وانتقلت العاصمة إلى الفسطاط في الداخل. وظلت الإسكندرية ميناءً كبيرًا وقاعدة بحرية ومدينة ساحلية محصنة في ظل الدول الإسلامية المتعاقبة.",
  "ru": "Арабская армия под командованием Амра ибн аль-Аса взяла город в 641–642 гг., и столица переместилась вглубь страны, в Фустат. Александрия оставалась крупным портом, военно-морской базой и укреплённым прибрежным городом при сменявших друг друга исламских династиях."
 },
 "969 to 1250": {
  "ar": "969 إلى 1250م",
  "ru": "969–1250 гг."
 },
 "Fatimid and Ayyubid Alexandria": {
  "ar": "الإسكندرية في العصرين الفاطمي والأيوبي",
  "ru": "Александрия при Фатимидах и Айюбидах"
 },
 "A hub of Mediterranean and Indian Ocean trade and of Islamic learning, with scholars such as al-Silafi. The traveller Ibn Jubayr visited in 1183 and described the Pharos, which was still standing in part.": {
  "ar": "مركز للتجارة بين البحر المتوسط والمحيط الهندي وللعلم الإسلامي، وفيه علماء مثل السِّلَفي. وزارها الرحالة ابن جبير عام 1183م ووصف المنارة التي كانت لا تزال قائمة جزئيًا.",
  "ru": "Центр торговли между Средиземноморьем и Индийским океаном и исламской учёности, где работали такие учёные, как ас-Силяфи. Путешественник Ибн Джубайр посетил город в 1183 г. и описал Фарос, часть которого ещё стояла."
 },
 "1250 to 1517": {
  "ar": "1250 إلى 1517م",
  "ru": "1250–1517 гг."
 },
 "Mamluk Alexandria": {
  "ar": "الإسكندرية المملوكية",
  "ru": "Мамлюкская Александрия"
 },
 "The city was sacked by a Crusader fleet in 1365 and afterwards strengthened its defences. Sultan Qaitbay built the citadel on the Pharos site in 1477, using stone from the fallen lighthouse.": {
  "ar": "نهب أسطول صليبي المدينة عام 1365م، ثم عززت بعدها دفاعاتها. وبنى السلطان قايتباي القلعة في موقع المنارة عام 1477م مستخدمًا أحجار المنارة الساقطة.",
  "ru": "В 1365 г. город разграбил флот крестоносцев, после чего его укрепили. Султан Кайтбей построил цитадель на месте Фароса в 1477 г., использовав камни рухнувшего маяка."
 },
 "1517 to 1805": {
  "ar": "1517 إلى 1805م",
  "ru": "1517–1805 гг."
 },
 "Ottoman Alexandria and the French Expedition": {
  "ar": "الإسكندرية العثمانية والحملة الفرنسية",
  "ru": "Османская Александрия и французская экспедиция"
 },
 "After new sea routes to Asia reduced Mediterranean trade, Alexandria shrank to a small town. Napoleon's army landed in 1798, the Battle of the Nile followed, and British and Ottoman forces retook the city in 1801.": {
  "ar": "بعد أن قلّصت طرق البحر الجديدة إلى آسيا حركة التجارة في المتوسط، تقلصت الإسكندرية إلى بلدة صغيرة. ونزلت قوات نابليون عام 1798م، تلتها معركة النيل، ثم استعادت القوات البريطانية والعثمانية المدينة عام 1801م.",
  "ru": "После того как новые морские пути в Азию сократили торговлю в Средиземноморье, Александрия превратилась в небольшой город. В 1798 г. высадилась армия Наполеона, затем произошла битва на Ниле, а в 1801 г. британские и османские войска вернули город."
 },
 "1805 to 1952": {
  "ar": "1805 إلى 1952م",
  "ru": "1805–1952 гг."
 },
 "Muhammad Ali Dynasty and Cosmopolitan Alexandria": {
  "ar": "أسرة محمد علي والإسكندرية الكوزموبوليتانية",
  "ru": "Династия Мухаммеда Али и космополитичная Александрия"
 },
 "The Mahmoudiyah Canal, completed in 1820, reconnected the port to the Nile and the city boomed. Greek, Italian, Armenian, Jewish and Levantine communities shaped its culture, and writers such as Cavafy and Durrell made it famous. Alexandria University was founded in the late 1930s, and King Farouk left Egypt from the city in 1952.": {
  "ar": "أعادت ترعة المحمودية، التي اكتمل حفرها عام 1820م، ربط الميناء بالنيل فازدهرت المدينة. وشكّلت ثقافتها جاليات يونانية وإيطالية وأرمنية ويهودية وشامية، وجعلها كتّاب مثل كفافيس ودارِل مشهورة. وتأسست جامعة الإسكندرية في أواخر ثلاثينيات القرن العشرين، وغادر الملك فاروق مصر من المدينة عام 1952م.",
  "ru": "Канал Махмудия, завершённый в 1820 г., вновь соединил порт с Нилом, и город стремительно вырос. Его культуру формировали греческие, итальянские, армянские, еврейские и левантийские общины, а писатели, такие как Кавафис и Даррелл, сделали его знаменитым. Александрийский университет был основан в конце 1930-х годов, а король Фарук покинул Египет из этого города в 1952 г."
 },
 "1952 to today": {
  "ar": "1952 حتى اليوم",
  "ru": "1952 г. — наши дни"
 },
 "Alexandria in the Republic of Egypt": {
  "ar": "الإسكندرية في جمهورية مصر",
  "ru": "Александрия в Республике Египет"
 },
 "Egypt's main seaport and a major industrial and academic centre. The Bibliotheca Alexandrina opened in 2002 in memory of the ancient Library, and the Mediterranean coast to the west now hosts Egypt's first nuclear power plant project at El Dabaa.": {
  "ar": "أكبر ميناء بحري في مصر ومركز صناعي وأكاديمي كبير. افتُتحت مكتبة الإسكندرية عام 2002 تخليدًا للمكتبة القديمة، ويستضيف الساحل المتوسطي إلى الغرب منها الآن مشروع أول محطة نووية في مصر في الضبعة.",
  "ru": "Главный морской порт Египта, крупный промышленный и академический центр. Bibliotheca Alexandrina открылась в 2002 г. в память о древней Библиотеке, а на средиземноморском побережье к западу сейчас реализуется проект первой в Египте АЭС в Эль-Дабаа."
 },
 "From its foundation in 331 BC to today, Alexandria has been a capital, a port and a centre of learning in turn.": {
  "ar": "منذ تأسيسها عام 331 ق.م حتى اليوم، كانت الإسكندرية عاصمة وميناءً ومركزًا للعلم بالتناوب.",
  "ru": "От основания в 331 г. до н. э. до наших дней Александрия была то столицей, то портом, то центром науки."
 },
 "History of Alexandria | Omar Ahmed Keshk": {
  "ar": "تاريخ الإسكندرية | عمر أحمد كشك",
  "ru": "История Александрии | Омар Ахмед Кешк"
 },
 "Summary": {
  "ar": "نبذة مختصرة",
  "ru": "Кратко обо мне"
 },
 "My work focuses on nuclear safety, safeguards and security, with growing interest in radiation detection and AI for nuclear applications. I use simulation and data-driven tools, such as PCTRAN, HotSpot, GEANT4 and machine learning, to study how nuclear systems behave under normal and accident conditions.": {
  "ar": "يركّز عملي على الأمان النووي والضمانات والأمن، مع اهتمام متزايد بالكشف الإشعاعي والذكاء الاصطناعي في التطبيقات النووية. أستخدم أدوات المحاكاة والأدوات القائمة على البيانات، مثل PCTRAN وHotSpot وGEANT4 والتعلم الآلي، لدراسة سلوك المنظومات النووية في الظروف العادية وظروف الحوادث.",
  "ru": "Моя работа посвящена ядерной безопасности, гарантиям и физической защите, а также всё больше — детектированию излучения и ИИ в ядерных приложениях. Я использую инструменты моделирования и анализа данных, такие как PCTRAN, HotSpot, GEANT4 и машинное обучение, чтобы изучать поведение ядерных систем в штатных и аварийных условиях."
 },
 "Beyond research, I am passionate about the history of Alexandria, my home city, and how its long scientific tradition connects to modern nuclear science.": {
  "ar": "إلى جانب البحث، أهتم بتاريخ الإسكندرية، مدينتي، وبكيفية ارتباط تقاليدها العلمية العريقة بالعلوم النووية الحديثة.",
  "ru": "Помимо исследований, меня увлекает история Александрии, моего родного города, и то, как её давняя научная традиция связана с современной ядерной наукой."
 },
 "Download CV": {
  "ar": "تحميل السيرة الذاتية",
  "ru": "Скачать резюме"
 },
 "Education": {
  "ar": "التعليم",
  "ru": "Образование"
 },
 "Alexandria University": {
  "ar": "جامعة الإسكندرية",
  "ru": "Александрийский университет"
 },
 "M.Sc. in Nuclear and Radiation Engineering": {
  "ar": "ماجستير العلوم في الهندسة النووية والإشعاعية",
  "ru": "Магистр, ядерная и радиационная техника"
 },
 "Distinction, GPA 3.88/4.00": {
  "ar": "بتقدير امتياز، المعدل 3.88/4.00",
  "ru": "С отличием, GPA 3.88/4.00"
 },
 "Expected 2027": {
  "ar": "التخرج المتوقع 2027",
  "ru": "Выпуск ожидается в 2027"
 },
 "B.S. in Nuclear and Radiation Engineering": {
  "ar": "بكالوريوس العلوم في الهندسة النووية والإشعاعية",
  "ru": "Бакалавр, ядерная и радиационная техника"
 },
 "July 2025": {
  "ar": "يوليو 2025",
  "ru": "Июль 2025"
 },
 "Research Themes": {
  "ar": "محاور البحث",
  "ru": "Направления исследований"
 },
 "Safety, Safeguards and Detection for Nuclear Systems": {
  "ar": "الأمان والضمانات والكشف في المنظومات النووية",
  "ru": "Безопасность, гарантии и детектирование в ядерных системах"
 },
 "My research interests span reactor safety, nuclear safeguards and security, and radiation detection. I am interested in tools that help assess risk, understand accident consequences, and improve how radiation is measured and imaged.": {
  "ar": "تشمل اهتماماتي البحثية أمان المفاعلات والضمانات والأمن النووي والكشف الإشعاعي. وأهتم بالأدوات التي تساعد على تقييم المخاطر وفهم عواقب الحوادث وتحسين قياس الإشعاع وتصويره.",
  "ru": "Мои исследовательские интересы охватывают безопасность реакторов, ядерные гарантии и физическую защиту, а также детектирование излучения. Меня интересуют инструменты, помогающие оценивать риски, понимать последствия аварий и улучшать измерение и визуализацию излучения."
 },
 "This work combines simulation, Monte Carlo methods and, increasingly, machine learning.": {
  "ar": "يجمع هذا العمل بين المحاكاة وطرق مونت كارلو، ومؤخرًا بشكل متزايد التعلم الآلي.",
  "ru": "Эта работа сочетает моделирование, методы Монте-Карло и, всё чаще, машинное обучение."
 },
 "Reactor Safety & Accident Analysis": {
  "ar": "أمان المفاعلات وتحليل الحوادث",
  "ru": "Безопасность реакторов и анализ аварий"
 },
 "As a research assistant at Alexandria University, I work on nuclear safety, safeguards and security, including PCTRAN simulations of postulated accident scenarios and their environmental impact.": {
  "ar": "بصفتي باحثًا مساعدًا في جامعة الإسكندرية، أعمل على الأمان النووي والضمانات والأمن، ومن ذلك محاكاة سيناريوهات الحوادث المفترضة باستخدام PCTRAN وأثرها البيئي.",
  "ru": "Как научный ассистент Александрийского университета, я занимаюсь ядерной безопасностью, гарантиями и физической защитой, включая моделирование постулируемых аварийных сценариев в PCTRAN и их воздействия на окружающую среду."
 },
 "My thesis work combines HotSpot with machine learning for an SMR-PWR case study at El Negila.": {
  "ar": "تجمع رسالتي بين HotSpot والتعلم الآلي في دراسة حالة لمفاعل SMR-PWR في النجيلة.",
  "ru": "В моей диссертации HotSpot сочетается с машинным обучением в кейсе SMR-PWR в Эль-Негиле."
 },
 "Radiation Detection & Imaging": {
  "ar": "الكشف الإشعاعي والتصوير",
  "ru": "Детектирование излучения и визуализация"
 },
 "During my research internship at JINR in Dubna, I worked on a micro-SPECT system based on Timepix detectors, using coded-aperture collimation, iterative 3D reconstruction and GEANT4 Monte Carlo simulations.": {
  "ar": "خلال تدريبي البحثي في JINR بدوبنا عملت على منظومة micro-SPECT قائمة على كواشف Timepix، باستخدام كوليميتر بفتحة مشفرة وإعادة بناء ثلاثية الأبعاد تكرارية ومحاكاة مونت كارلو بـ GEANT4.",
  "ru": "Во время исследовательской стажировки в ОИЯИ в Дубне я работал над системой микро-SPECT на детекторах Timepix: кодированная апертура, итеративная 3D-реконструкция и моделирование методом Монте-Карло в GEANT4."
 },
 "AI for Nuclear Applications": {
  "ar": "الذكاء الاصطناعي في التطبيقات النووية",
  "ru": "ИИ в ядерных приложениях"
 },
 "My special studies thesis, Applications of AI in Nuclear Sectors, explored how AI is used across the nuclear sector. I continue this direction with Python machine-learning tools such as scikit-learn and TensorFlow.": {
  "ar": "استكشفت رسالة الدراسات الخاصة لدي، <em>Applications of AI in Nuclear Sectors</em>، كيفية استخدام الذكاء الاصطناعي في القطاع النووي. وأواصل هذا الاتجاه بأدوات التعلم الآلي في Python مثل scikit-learn وTensorFlow.",
  "ru": "Моя работа по специальным исследованиям, <em>Applications of AI in Nuclear Sectors</em>, изучала применение ИИ в ядерной отрасли. Это направление я продолжаю с помощью инструментов машинного обучения на Python, таких как scikit-learn и TensorFlow."
 },
 "Research Highlights": {
  "ar": "أبرز الأعمال البحثية",
  "ru": "Основные результаты"
 },
 "JINR Interest Journal, December 2023.": {
  "ar": "<strong>مجلة JINR Interest</strong>، ديسمبر 2023.",
  "ru": "<strong>JINR Interest Journal</strong>, декабрь 2023 г."
 },
 "AYSS-2025 Conference": {
  "ar": "مؤتمر AYSS-2025",
  "ru": "Конференция AYSS-2025"
 },
 "JINR, Dubna, October 27, 2025.": {
  "ar": "<strong>JINR، دوبنا</strong>، 27 أكتوبر 2025.",
  "ru": "<strong>ОИЯИ, Дубна</strong>, 27 октября 2025 г."
 },
 "Poster, 16th UGRF / 4th Egyptian Junior Researcher Competition, Nile University, August 2023.": {
  "ar": "ملصق علمي، <strong>المؤتمر 16 UGRF / المسابقة المصرية الرابعة للباحثين الشباب</strong>، جامعة النيل، أغسطس 2023.",
  "ru": "Постер, <strong>16-й UGRF / 4-й египетский конкурс молодых исследователей</strong>, Университет Нила, август 2023 г."
 },
 "All research outputs": {
  "ar": "كل المخرجات البحثية",
  "ru": "Все результаты исследований"
 },
 "Connecting the History of Alexandria": {
  "ar": "ربط تاريخ الإسكندرية بالحاضر",
  "ru": "Связывая историю Александрии с современностью"
 },
 "Beyond my research, I am drawn to the history of Alexandria, the city where I study and live. Founded in 331 BC, it hosted the ancient Library and Museum, and today it is home to the Bibliotheca Alexandrina.": {
  "ar": "إلى جانب بحثي، تجذبني قصة تاريخ الإسكندرية، المدينة التي أدرس فيها وأعيش. فقد أُسست عام 331 ق.م وضمّت المكتبة القديمة والموسيون، وهي اليوم موطن مكتبة الإسكندرية.",
  "ru": "Помимо исследований, меня привлекает история Александрии, города, где я учусь и живу. Основанный в 331 г. до н. э., он принял древнюю Библиотеку и Мусейон, а сегодня здесь находится Bibliotheca Alexandrina."
 },
 "I see Alexandria's scientific heritage as part of the same story as modern nuclear science. My history page follows the city across nine eras, from its foundation to the present day.": {
  "ar": "أرى أن التراث العلمي للإسكندرية جزء من القصة نفسها التي تروي العلوم النووية الحديثة. وتتبع صفحة التاريخ عندي المدينة عبر تسعة عصور، من تأسيسها حتى اليوم.",
  "ru": "Я вижу научное наследие Александрии частью той же истории, что и современная ядерная наука. Моя страница истории прослеживает город через девять эпох, от основания до наших дней."
 },
 "Read the history": {
  "ar": "اقرأ التاريخ",
  "ru": "Читать историю"
 },
 "Omar Ahmed Keshk | Nuclear Engineer & Researcher": {
  "ar": "عمر أحمد كشك | مهندس نووي وباحث",
  "ru": "Омар Ахмед Кешк | Инженер-ядерщик и исследователь"
 },
 "Publications": {
  "ar": "المنشورات",
  "ru": "Публикации"
 },
 "Theses": {
  "ar": "الرسائل العلمية",
  "ru": "Диссертации и дипломные работы"
 },
 "HotSpot and Machine Learning for an SMR-PWR Case Study at El Negila": {
  "ar": "HotSpot والتعلم الآلي: دراسة حالة لمفاعل SMR-PWR في النجيلة",
  "ru": "HotSpot и машинное обучение: кейс SMR-PWR в Эль-Негиле"
 },
 "Omar Ahmed Keshk. M.Sc. thesis, Alexandria University, in progress, expected 2027.": {
  "ar": "<strong>عمر أحمد كشك</strong>. رسالة ماجستير، جامعة الإسكندرية، قيد الإعداد، متوقعة 2027.",
  "ru": "<strong>Омар Ахмед Кешк</strong>. Магистерская диссертация, Александрийский университет, в процессе, ожидается в 2027 г."
 },
 "Omar Ahmed Keshk. B.S. project thesis, Alexandria University, 2025. Grade: Excellent.": {
  "ar": "<strong>عمر أحمد كشك</strong>. مشروع تخرج البكالوريوس، جامعة الإسكندرية، 2025. التقدير: امتياز.",
  "ru": "<strong>Омар Ахмед Кешк</strong>. Дипломный проект бакалавра, Александрийский университет, 2025 г. Оценка: Excellent."
 },
 "Omar Ahmed Keshk. B.S. special studies thesis, Alexandria University, 2025. Grade: Excellent.": {
  "ar": "<strong>عمر أحمد كشك</strong>. رسالة الدراسات الخاصة للبكالوريوس، جامعة الإسكندرية، 2025. التقدير: امتياز.",
  "ru": "<strong>Омар Ахмед Кешк</strong>. Работа по специальным исследованиям (бакалавриат), Александрийский университет, 2025 г. Оценка: Excellent."
 },
 "Presentations": {
  "ar": "العروض والمؤتمرات",
  "ru": "Выступления"
 },
 "JINR, Dubna, Russia. October 27, 2025.": {
  "ar": "<strong>JINR، دوبنا، روسيا</strong>. 27 أكتوبر 2025.",
  "ru": "<strong>ОИЯИ, Дубна, Россия</strong>. 27 октября 2025 г."
 },
 "Poster. 16th UGRF / 4th Egyptian Junior Researcher Competition, Nile University. August 2023.": {
  "ar": "ملصق علمي. <strong>المؤتمر 16 UGRF / المسابقة المصرية الرابعة للباحثين الشباب</strong>، جامعة النيل. أغسطس 2023.",
  "ru": "Постер. <strong>16-й UGRF / 4-й египетский конкурс молодых исследователей</strong>, Университет Нила. Август 2023 г."
 },
 "Research Outputs | Omar Ahmed Keshk": {
  "ar": "المخرجات البحثية | عمر أحمد كشك",
  "ru": "Результаты исследований | Омар Ахмед Кешк"
 },
 "Reactor Safety and Accident Analysis": {
  "ar": "أمان المفاعلات وتحليل الحوادث",
  "ru": "Безопасность реакторов и анализ аварий"
 },
 "As a research assistant in the Nuclear Engineering Department at Alexandria University, I work on nuclear safety, safeguards and security. A main part of this work is simulating postulated accident scenarios with PCTRAN and studying their environmental impact.": {
  "ar": "بصفتي باحثًا مساعدًا في قسم الهندسة النووية بجامعة الإسكندرية، أعمل على الأمان النووي والضمانات والأمن. ويتمثل جزء رئيسي من عملي في محاكاة سيناريوهات الحوادث المفترضة باستخدام PCTRAN ودراسة أثرها البيئي.",
  "ru": "Как научный ассистент кафедры ядерной техники Александрийского университета, я занимаюсь ядерной безопасностью, гарантиями и физической защитой. Важная часть работы — моделирование постулируемых аварийных сценариев в PCTRAN и изучение их воздействия на окружающую среду."
 },
 "These simulations help us understand how a plant responds during an accident, how consequences develop over time, and what they mean for people and the environment around the site.": {
  "ar": "تساعدنا هذه المحاكاة على فهم استجابة المحطة أثناء الحادث، وكيف تتطور العواقب مع الزمن، وماذا تعني للناس والبيئة حول الموقع.",
  "ru": "Эти расчёты помогают понять, как станция реагирует на аварию, как со временем развиваются последствия и что они означают для людей и окружающей среды вокруг площадки."
 },
 "HotSpot and Machine Learning for an SMR-PWR Case Study": {
  "ar": "HotSpot والتعلم الآلي: دراسة حالة لمفاعل SMR-PWR",
  "ru": "HotSpot и машинное обучение: кейс SMR-PWR"
 },
 "My thesis work studies a small modular reactor of the PWR type (SMR-PWR) as a case study at El Negila. It combines HotSpot, a code used to assess the consequences of radiological releases, with machine learning.": {
  "ar": "تدرس رسالتي مفاعلًا معياريًا صغيرًا من نوع PWR (SMR-PWR) كدراسة حالة في النجيلة. وتجمع بين HotSpot، وهو برنامج يُستخدم لتقييم عواقب الانبعاثات الإشعاعية، والتعلم الآلي.",
  "ru": "В моей диссертации в качестве кейса в Эль-Негиле рассматривается малый модульный реактор типа PWR (SMR-PWR). Работа сочетает HotSpot, программу для оценки последствий радиологических выбросов, и машинное обучение."
 },
 "The aim is to use data-driven models alongside physics-based simulation to support faster and more systematic safety assessment.": {
  "ar": "الهدف هو استخدام نماذج قائمة على البيانات إلى جانب المحاكاة الفيزيائية لدعم تقييم أمان أسرع وأكثر منهجية.",
  "ru": "Цель — использовать модели на основе данных наряду с физическим моделированием для более быстрой и системной оценки безопасности."
 },
 "Radiation Detection and Micro-SPECT at JINR": {
  "ar": "الكشف الإشعاعي وmicro-SPECT في JINR",
  "ru": "Детектирование излучения и микро-SPECT в ОИЯИ"
 },
 "In autumn 2025 I joined the Joint Institute for Nuclear Research (JINR) in Dubna, Russia, as a research intern in the START programme. I worked on a micro-SPECT imaging system based on Timepix detectors.": {
  "ar": "في خريف 2025 انضممت إلى المعهد المشترك للبحوث النووية (JINR) في دوبنا، روسيا، كمتدرب بحثي في برنامج START. وعملت على منظومة تصوير micro-SPECT قائمة على كواشف Timepix.",
  "ru": "Осенью 2025 года я присоединился к Объединённому институту ядерных исследований (ОИЯИ) в Дубне, Россия, в качестве стажёра-исследователя программы START. Я работал над системой визуализации микро-SPECT на детекторах Timepix."
 },
 "The work included coded-aperture collimation, iterative 3D reconstruction, and Monte Carlo simulation with GEANT4. I later presented at the AYSS-2025 conference at JINR.": {
  "ar": "شمل العمل كوليميتر بفتحة مشفرة وإعادة بناء ثلاثية الأبعاد تكرارية ومحاكاة مونت كارلو بـ GEANT4. وقدمت لاحقًا عرضًا في مؤتمر AYSS-2025 بمعهد JINR.",
  "ru": "Работа включала кодированную апертуру, итеративную 3D-реконструкцию и моделирование методом Монте-Карло в GEANT4. Позже я выступил на конференции AYSS-2025 в ОИЯИ."
 },
 "Spent Fuel Transmutation with an IEC Neutron Source": {
  "ar": "تحويل الوقود المستنفد باستخدام مصدر نيوترونات IEC",
  "ru": "Трансмутация отработавшего топлива с источником нейтронов IEC"
 },
 "My B.S. project thesis, graded Excellent, examined spent fuel transmutation using an inertial electrostatic confinement (IEC) device as a neutron source.": {
  "ar": "تناول مشروع تخرجي للبكالوريوس، بتقدير امتياز، تحويل الوقود المستنفد باستخدام جهاز الحجز الكهروستاتيكي القصوري (IEC) كمصدر للنيوترونات.",
  "ru": "Мой дипломный проект бакалавра, получивший оценку Excellent, был посвящён трансмутации отработавшего топлива с использованием устройства инерциального электростатического удержания (IEC) как источника нейтронов."
 },
 "Transmutation aims to convert long-lived radioactive materials into shorter-lived or stable ones, which could reduce the burden of long-term waste management.": {
  "ar": "يهدف التحويل النووي إلى تحويل المواد المشعة طويلة العمر إلى مواد أقصر عمرًا أو مستقرة، مما قد يخفف عبء إدارة النفايات على المدى الطويل.",
  "ru": "Трансмутация нацелена на превращение долгоживущих радиоактивных материалов в короткоживущие или стабильные, что может снизить нагрузку на долгосрочное обращение с отходами."
 },
 "AI Applications in the Nuclear Sector": {
  "ar": "تطبيقات الذكاء الاصطناعي في القطاع النووي",
  "ru": "Применение ИИ в ядерной отрасли"
 },
 "My special studies thesis, Applications of AI in Nuclear Sectors, also graded Excellent, explored how artificial intelligence is used across the nuclear field.": {
  "ar": "استكشفت رسالة الدراسات الخاصة لدي، <strong><em>Applications of AI in Nuclear Sectors</em></strong>، وقد نالت تقدير امتياز أيضًا، كيفية استخدام الذكاء الاصطناعي في المجال النووي.",
  "ru": "Моя работа по специальным исследованиям, <strong><em>Applications of AI in Nuclear Sectors</em></strong>, также получившая оценку Excellent, изучала применение искусственного интеллекта в ядерной области."
 },
 "I continue to build on this with machine learning in Python, using tools such as pandas, scikit-learn, TensorFlow and PyTorch.": {
  "ar": "وأواصل البناء على ذلك بالتعلم الآلي في Python، باستخدام أدوات مثل pandas وscikit-learn وTensorFlow وPyTorch.",
  "ru": "Я продолжаю развивать это направление, используя машинное обучение на Python и такие инструменты, как pandas, scikit-learn, TensorFlow и PyTorch."
 },
 "Future Directions": {
  "ar": "اتجاهات مستقبلية",
  "ru": "Планы на будущее"
 },
 "I plan to deepen the link between accident simulation, radiological consequence assessment and machine learning, and to continue work in radiation detection and imaging. Stay tuned for updates.": {
  "ar": "أخطط لتعميق الصلة بين محاكاة الحوادث وتقييم العواقب الإشعاعية والتعلم الآلي، ومواصلة العمل في الكشف الإشعاعي والتصوير. ترقبوا التحديثات.",
  "ru": "Я планирую углублять связь между моделированием аварий, оценкой радиологических последствий и машинным обучением и продолжать работу в области детектирования излучения и визуализации. Следите за обновлениями."
 },
 "Research Projects | Omar Ahmed Keshk": {
  "ar": "المشاريع البحثية | عمر أحمد كشك",
  "ru": "Исследовательские проекты | Омар Ахмед Кешк"
 }
};
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  var LS = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
             set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var TITLE = norm(document.title), recs = [], btns = [];
  var style = document.createElement('style');
  style.textContent = '.lang-switch{display:flex;gap:6px;margin-inline-start:14px}' +
    '.lang-switch button{background:transparent;color:var(--muted,#b6c2d4);border:1px solid var(--line,#2a3a55);border-radius:999px;padding:4px 10px;font:700 .8rem Inter,system-ui,sans-serif;cursor:pointer}' +
    '.lang-switch button[aria-pressed="true"]{color:var(--text,#fff);border-color:#55a7ff}' +
    '[lang="ar"] body,[lang="ar"] h1,[lang="ar"] h2,[lang="ar"] h3,[lang="ar"] p,[lang="ar"] a,[lang="ar"] li,[lang="ar"] figcaption{font-family:Cairo,Inter,system-ui,sans-serif!important}' +
    '[dir="rtl"] .profile-panel{border-right:0;border-left:1px solid var(--line)}' +
    '@media(max-width:1050px){[dir="rtl"] .profile-panel{border-left:0}}' +
    '[dir="rtl"] .education-content ul,[dir="rtl"] .gallery-item figcaption ul,[dir="rtl"] .history-points{padding-left:0;padding-right:20px}' +
    '[dir="rtl"] .output-number{margin-right:0;margin-left:6px}' +
    '[dir="rtl"] .alex-timeline{padding:0 22px 0 0;border-left:0;border-right:3px solid #55a7ff;text-align:right}' +
    '[dir="rtl"] .alex-timeline li{padding-left:0;padding-right:14px}' +
    '[dir="rtl"] .alex-timeline li::before{left:auto;right:-30px}';
  document.head.appendChild(style);
  function walk(el) {
    if (/^(SCRIPT|STYLE|NOSCRIPT|SVG)$/i.test(el.tagName)) return;
    var own = Array.prototype.some.call(el.childNodes, function (n) { return n.nodeType === 3 && n.textContent.trim(); });
    if (own) { var k = norm(el.textContent); if (T[k]) recs.push({ el: el, en: el.innerHTML, k: k }); return; }
    Array.prototype.forEach.call(el.children, walk);
  }
  Array.prototype.forEach.call(document.body.children, walk);
  function apply(l) {
    var d = document.documentElement;
    d.lang = l; d.dir = l === 'ar' ? 'rtl' : 'ltr';
    recs.forEach(function (r) { var v = l === 'en' ? null : (T[r.k] && T[r.k][l]); r.el.innerHTML = v || r.en; });
    document.title = l === 'en' ? TITLE : ((T[TITLE] && T[TITLE][l]) || TITLE);
    btns.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === l); });
    LS.set('lang', l);
  }
  var box = document.createElement('div');
  box.className = 'lang-switch';
  box.setAttribute('role', 'group'); box.setAttribute('aria-label', 'Language');
  [['ar', 'عربي'], ['en', 'EN'], ['ru', 'RU']].forEach(function (p) {
    var b = document.createElement('button');
    b.type = 'button'; b.textContent = p[1]; b.dataset.l = p[0];
    b.onclick = function () { apply(p[0]); };
    btns.push(b); box.appendChild(b);
  });
  var nav = document.querySelector('.nav') || document.querySelector('header');
  if (nav) nav.appendChild(box);
  if (!document.getElementById('cairo-font')) {
    var f = document.createElement('link');
    f.id = 'cairo-font'; f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap';
    document.head.appendChild(f);
  }
  var saved = LS.get('lang');
  apply(['ar', 'en', 'ru'].indexOf(saved) > -1 ? saved : 'en');
})();
