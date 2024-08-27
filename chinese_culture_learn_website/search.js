// data
var videos = [{category: "Holidays", jump:"holiday-jump", vidList:[{name:"情人节/七夕节", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E6%83%85%E4%BA%BA%E8%8A%82Vid.mp4?v=1687141445272", 
                                              poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E6%83%85%E4%BA%BA%E8%8A%82.png?v=1687141309066",
                                              chinese:"七夕节是中国的情人节。这个录像介绍的是牛郎和织女的故事得上部分。牛郎和织女的故事就是情人节的故事。这个节日发生在每阴历年的七月初七。",
                                              english:"Qixi Festival is China's Valentine's Day. This Festival has a story of two star-crossed lovers that can only meet once  a year. This recording gives you an introduction to the beginning of this story. This holiday occurs on the seven day of the seventh month of the lunar calendar."},
                                             {name:"中秋节", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E7%A7%8B%E8%8A%82%20Vid.mp4?v=1687141389020", 
                                              poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E7%A7%8B%E8%8A%82.png?v=1687141316711",
                                              chinese:"中秋节是中国人欢迎秋天到来的节日。每农历八月十五都会过这个节日。他们特有的食物是月饼。这个节日是对着月亮祭拜的节日。当然，月亮也有很多故事。这个录像介绍的就是一些月亮的故事。",
                                              english:"The Moon Festival, or Mid-Autumn Festival, is a festival made to welcome the fall season. It's also a time to pray to the moon, and it happens on the fifteenth day of the eight month lunar calendar. The moon has many stories, and this recording talks about these stories. A special festival food that they eat on this day is called mooncake."},
                                             {name:"中秋节 (2)", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E7%A7%8B%E8%8A%82(2).vid.mp4?v=1687142391560", 
                                              poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E7%A7%8B%E8%8A%82%20(2).png?v=1687142348968",
                                              chinese:"中秋节是在每年的农历八月十五发生的。这个节日的来源得从嫦娥奔月的故事说起。这个录像讲的就是这个故事的开头。",
                                              english:"The Moon Festival/Mid-Autumn Festival happpens on the fifteenth day of the eigth month every lunar year. This video talks about the beginning of how this holiday came to be."},
                                             {name:"端午节", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E7%AB%AF%E5%8D%88%E8%8A%82%E3%80%82Vid.mp4?v=1687141548617", 
                                              poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E7%AB%AF%E5%8D%88%E8%8A%82.png?v=1687141315877",
                                              chinese:"端午节是每阴历年的五月初五发生。端午节的两个习俗，赛龙舟和吃粽子，都是为了纪念一位伟大的诗人-屈原。屈原的故事是怎样的呢？",
                                              english:"The Dragon Boat Festival is a holiday occurring every lunar year on the fifth day of the fifth month. The Dragon Boat Festival's two customs, dragon boat racing and eating a festival food called Zongzi, are done to honor a famous poet, Qu Yuan. So what was the story behind this poet and this holiday? "},
                                             {name:"端午节 (2)", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E7%AB%AF%E5%8D%88%E8%8A%822.vid.mp4?v=1687142381637", 
                                              poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E7%AB%AF%E5%8D%88%E8%8A%82%20(2).png?v=1687142348482",
                                              chinese:"端午节这个节日是为了纪念伟大的诗人，屈原。这个节日的来历也有很多不同的说法。这个录音就是讲端午节的来历故事之一。",
                                              english:"The Dragon Boat festival is celebrated to remember a famous poet, Qu Yuan. The story of how this holiday came to be is varied, and this video talks about one of the variations."},
                                             {name:"中国年", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E5%B9%B4.vid.mp4?v=1687141534728", 
                                              poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E5%B9%B4.png?v=1687141311530",
                                              chinese:"中国年是中国最隆重的节日。这个时候很多华侨会赶回家乡和家人一起吃一顿丰盛的晚餐。你也会发现，那时候的中国，到处都是红色，很多人也会吃饺子。那是为什么呢？有一个故事，就是讲中国年的起源。",
                                              english:"Chinese New Year is easily one of China's most popular holidays. Chinese immigrants from all across the world will take a trip back to their homeland to eat with their families. If you visit during this time, you will also notice that red is everywhere, and that many people are eating dumplings. Why is that? There's a story that talks about how Chinese New Year and its customs came to be. "},
                                             {name:"元宵节", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E5%85%83%E5%AE%B5%E8%8A%82.vid.mp4?v=1687141306116", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%85%83%E5%AE%B5%E8%8A%82.png?v=1687141317109",
                                             chinese:"元宵节是每个农历正月十五发生的一个节日，是用来欢迎年的结束。元宵节在美国的费城也会举行。这个节日的来源非常有趣，这个视屏就是介绍元宵节和这个节日的来历。",
                                             english:"The Lantern Festival happens every lunar year at the fifteenth day of the first month. This holiday is to celebrate the end of the New Year. The Lantern Festival also happens once every year in Philadelphia. The story of how this holiday came to be is very interesting, and this video talks about that story. "}]},
              {category: "Cuisine", jump:"cuisine-jump", vidList:[{name:"中国菜系", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E9%A5%AE%E9%A3%9F%E6%96%87%E5%8C%96%20Vid.mp4?v=1687141433551", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E9%A5%AE%E9%A3%9F%E6%96%87%E5%8C%96.png?v=1687141308673",
                                             chinese:"中国有四大菜系 - 京菜，杨菜，粤菜，和川菜。这个视屏介绍的就是中国的四大菜系。",
                                             english:"China has four main types of cuisines-Beijing, Shanghai，Canton, and Sichuan. This video introduces you to all four of them."},
                                            {name:"中国茶", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E8%8C%B6%20Vid.mp4?v=1687141360173", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E8%8C%B6.png?v=1687141307076",
                                             chinese:"茶是世界上最普通的一种饮料。你知道吗，茶其实是中国最早当成饮料喝得！这个录音讲的就是介绍茶的。茶现在已经宣传到了世界各地了，他们也有他们各自的喝法了。",
                                             english:"Tea is a popular drink around the world. China is the earliest country to consider tea a drink, and now it is everywhere, each country with their own special way of drinking it. This video introduces tea to you."}]},
              {category: "Famous Figures", jump:"famous-jump", vidList:[{name:"梅兰芳学京剧", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E6%A2%85%E5%85%B0%E8%8A%B3%20Vid.mp4?v=1687141457037", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E6%A2%85%E5%85%B0%E8%8A%B3.png?v=1687141309452",
                                             chinese:"京剧非常有名。梅兰芳就是其中一位的京剧大师，也是最有名的一位。下面介绍的就是梅兰芳学京剧的故事。",
                                             english:"Beijing opera is very popular in China. Mei Lanfang, a popular opera artist, is arguably one of the best ones. This video talks about him exclusively."},
                                            {name:"老舍", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E8%80%81%E8%88%8D%20Vid.mp4?v=1687141504649", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E8%80%81%E8%88%8D.png?v=1687141310684",
                                             chinese:"老舍是个非常有名的现代作家。他不但是一位有名的作家，他也是特别幽默的一位。我来给大家介绍一下老舍。",
                                             english:"Lao She is a popular novelist, and also a very humorous individual. This video will give you an introduction to him."},
                                            {name:"王羲之", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E7%8E%8B%E7%BE%B2%E4%B9%8B%20Vid.mp4?v=1687141493577", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E7%8E%8B%E7%BE%B2%E4%B9%8B.png?v=1687141310273",
                                             chinese:"王羲之是一位非常有名的书法家。他也有很多特别有趣的故事，比如以鹅为师和题扇桥的故事。我给大家讲讲这些故事。",
                                             english:"Wang Xizhi is a famous Chinese calligrapher. He has many interesting and even funny stories about him. This video will talk about a few popular stories of him."},
                                            {name:"孔子", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E5%AD%94%E5%AD%90%E3%80%82vid.mp4?v=1687141605643", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%AD%94%E5%AD%90.png?v=1687141313154",
                                             chinese:"孔子是一位非常有名的思想家和教育家。他的理想我们现在还在用。这个录音就是讲孔子这为伟大的思想家。",
                                             english:"Confucius is a famous philosopher. In fact, his philosophy is still being used today. This video will talk a bit about this famous philosopher. "},
                                            {name:"孔子学琴", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%AD%94%E5%AD%90%E5%AD%A6%E7%90%B4.vid.mp4?v=1687141267446", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%AD%94%E5%AD%90%E5%AD%A6%E7%90%B4.png?v=1687141315086",
                                             chinese:"孔子是一位非常有名的思想家和教育家。孔子也通常会向别人学习。我讲的故事就是孔子有一次在一位乐师那里学曲子的故事。",
                                             english:"Confucius is a famous philosopher. He also learns from others. The video talks about one time where Confucious was learning from a music teacher."},
                                            {name:"三人行 必有我师", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%89%E4%BA%BA%E8%A1%8C%20%E5%BF%85%E6%9C%89%E6%88%91%E5%B8%88.vid.mp4?v=1687141282490", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%89%E4%BA%BA%E8%A1%8C%20%E5%BF%85%E6%9C%89%E6%88%91%E5%B8%88.png?v=1687141315497",
                                             chinese:"孔子是一位非常有名的思想家和教育家。《论语》这本书记下来一些他跟他学生讲的一些内容。其中一个就是三人行，必有我师。这个录音讲的就是这个道理是从哪里来的。讲的是这个故事的开头。",
                                             english:"Confucius is a famous philosopher.  Analects is a book that records some of what Confucious taught his students. One of them is \"When three people are walking together, I am sure to find teaches among them.\" The video talks about the begining of how this saying came to be about."}]},
              {category: "Architecture", jump:"architecture-jump", vidList:[{name:"中国北京", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E5%8C%97%E4%BA%AC%20Vid.mp4?v=1687141378438", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E5%8C%97%E4%BA%AC.png?v=1687141307471",
                                             chinese:"北京是中国的首都，北京有特别特别多的名胜古迹。像长城，紫禁城，天安门广场等等，都是有名的北京建筑。这个就是介绍一些北京的名胜古迹。",
                                             english:"Beijing is China's capital, and it has many popular tourist spots, such as the Great Wall, Tienanmen Square, the Forbidden City, and more. This video will take you to some of these places and introduce you to them."},
                                            {name:"中国长城", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E9%95%BF%E5%9F%8E%20Vid.mp4?v=1687141345207", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E9%95%BF%E5%9F%8E.png?v=1687141306619",
                                             chinese:"中国长城被称为万里长城，是一个非常伟大的建筑。这么伟大的建筑在那么久以前造出来，究竟是怎样造出来的？",
                                             english:"The Great Wall of China is a very famous Chinese architecture. Such a long wall built that long ago was no easy feat. So how was it done?"}]},
              {category: "Ethnic Groups", jump:"ethnic-jump", vidList:[{name:"中国人口和民族", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%8F%A3%E5%92%8C%E6%B0%91%E6%97%8F%20Vid.mp4?v=1687141330671", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%8F%A3%E5%92%8C%E6%B0%91%E6%97%8F.png?v=1687141316314",
                                             chinese:"中国是人口数量最多的一个国家。中国人也是一个多民族的国家。中国最大的民族是汉族。那么，别的民族有些什么？有高山族，苗族，傣族，回族，维吾尔族，壮族等等。我给大家介绍一下中国人口和他的一些民族。",
                                             english:"China has a large portion of the world's entire population. They also have many ethnic groups, with the biggest being the Han nationality, but they also have many other smaller ones. This video will talk a bit about China's population and some of their smaller ethnic groups."},
                                            {name:"中国人口和民族 (2)", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%8F%A3%E5%92%8C%E6%B0%91%E6%97%8F2.vid.mp4?v=1687142369059", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%8F%A3%E5%92%8C%E6%B0%91%E6%97%8F%20(2).png?v=1687142348090",
                                             chinese:"中国既是一个人多的国家也是一个多民族的国家。除了汉族以外，中国有很多少数民族，这就是继续介绍一些民族。",
                                             english:"China has both a lot of people and a lot of ethnicities. The biggest ethnic group is the Han Chinese. This video will talk a bit about the other, smaller ethnic groups."}]},
              {category: "4 Great Classics", jump:"classic-jump", vidList:[{name:"武松打虎", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E9%95%BF%E5%9F%8E%20Vid.mp4?v=1687141345207", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E6%AD%A6%E6%9D%BE%E6%89%93%E8%99%8E.png?v=1687134018292",
                                             chinese:"武松打虎是《水浒传》中的一个环节。《水浒传》这个小说是作家施耐庵写的。《水浒传》成为了中国古典四大名著之一。这本书也被翻译了不少次。",
                                             english:"<i>All Men are Brothers</i> is a very popular story, and is one of the Four Great Chinese Classics. It has a part inside the story where WuSong beats a tiger. This story also has been translated many times."},
                                            {name:"火烧赤壁", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E7%81%AB%E7%83%A7%E8%B5%A4%E5%A3%81.vid.mp4?v=1687141256672", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E7%81%AB%E7%83%A7%E8%B5%A4%E5%A3%81.png?v=1687141314709",
                                             chinese:"《三国演义》，《红楼梦》，《水浒传》，和《西游记》都是中国古典四大名著。中国《三国演义》的《火烧赤壁》非常有名。这就是给大家讲《火烧赤壁》的故事。",
                                             english:"<i>Journey to the West, All Men are Brothers, Romance of the Three Kingdoms,</i>and <i>Dream of the Red Chamber</i> are the Four Great Classical Novels of China. <i>Battle of Chibi</i> (or <i>Battle of Red Cliffs</i>) is a part of the Romance of the Three Kingdoms. This video talks about that battle."},
                                            {name:"西游记", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E8%A5%BF%E6%B8%B8%E8%AE%B0.vid.mp4?v=1687141653585", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E8%A5%BF%E6%B8%B8%E8%AE%B0.png?v=1687141314327",
                                             chinese:"《西游记》是一个非常有名的小说。这个故事讲的是一位和尚名叫唐僧想到西方去取经。那这个故事是从哪里来的呢？听说是一位和尚想去西方的印度学习佛经和佛教。我给大家介绍的就是这个故事的来历。",
                                             english:"<i>Journey to the West</i> is a popular story in China. It talks of a monk called Tang Seng who wanted to go to the West to learn. Where did this story come from?  It's said that there was a monk long ago who wanted to travel to India to learn more about Buddhism. This short video talks a bit about this."}]},
              {category: "Other", jump:"other-jump", vidList:[{name:"大熊猫", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E5%A4%A7%E7%86%8A%E7%8C%ABVid.mp4?v=1687141477104", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%A4%A7%E7%86%8A%E7%8C%AB.png?v=1687141309896",
                                             chinese:"熊猫也叫猫熊，是中国的国宝。这个动物数量极少，中国也是唯一有熊猫的国家。熊猫这个动物是个非常慵懒调皮的动物。这个视屏介绍的就是熊猫。",
                                             english:"Pandas are one of China's exclusive animals, with it being the only country to have a population of them. The ones you see out of China probably came from China as well. Pandas are endangered, so you won't see them very often. This video introduces a bit about them."},
                                          {name:"中国功夫", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%8A%9F%E5%A4%ABVid.mp4?v=1687141401383", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%8A%9F%E5%A4%AB.png?v=1687141307876",
                                             chinese:"功夫片是全世界人民的喜爱。功夫据说是因为李小龙的功夫片宣传到好莱坞才得到了推广和喜爱。这个录像介绍的就是功夫的来历。",
                                             english:"Kung fu movies are popular all across the world. Some say it's because of Bruce Lee and his Kung fu movies that made it popular. So, how did Kung fu come about? This video talks about the story behind the first Kung fu."},
                                          {name:"塞翁失马", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%A1%9E%E7%BF%81%E5%A4%B1%E9%A9%AC%20Vid.mp4?v=1687141414348", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%A1%9E%E7%BF%81%E5%A4%B1%E9%A9%AC.png?v=1687141308273",
                                             chinese:"很多人常常认为，发生好事可能产生坏的结果，坏事也可能产生好的结果。塞翁失马这个故事就是专门说这个道理的。",
                                             english:"A lot of people believe that bad things can have good consequences, and good things can result in bad consequences. This video talks about a story that introduces this idea."},
                                          {name:"蔡伦造纸", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E8%94%A1%E4%BC%A6%E9%80%A0%E7%BA%B8%20Vid.mp4?v=1687141522284", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E8%94%A1%E4%BC%A6%E9%80%A0%E7%BA%B8.png?v=1687141311132",
                                             chinese:"纸现在是非常普通的一样东西，到处都是。可是，很久很久以前，并没纸。那么，纸究竟是怎样造出来的呢？",
                                             english:"Paper is one of the most common things to have now, and each of us have a plethora of it. Long, long ago, however, that wasn't the case. So how was paper made?"},
                                          {name:"关于中国和美国的学校", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E5%85%B3%E4%BA%8E%E7%BE%8E%E5%9B%BD%E5%92%8C%E4%B8%AD%E5%9B%BD%E5%AD%A6%E6%A0%A1%E3%80%82vid.mp4?v=1687141590024", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E5%85%B3%E4%BA%8E%E7%BE%8E%E5%9B%BD%E5%92%8C%E4%B8%AD%E5%9B%BD%E5%AD%A6%E6%A0%A1.png?v=1687141312746",
                                             chinese:"美国和中国的学校有很多不同的地点，从他们的教育方到他们的课后活动，都有不同点。这个录像讲的就是关于他们的一些不同点。",
                                             english:"American and Chinese schools are very different, from the way they teach their students to what they do after class. This video will talk a bit about how they're different."},
                                          {name:"中国人眼中的颜色", src:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9C%BC%E4%B8%AD%E7%9A%84%E9%A2%9C%E8%89%B2%E3%80%82vid.mp4?v=1687141574683", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9C%BC%E4%B8%AD%E7%9A%84%E9%A2%9C%E8%89%B2.png?v=1687141312341",
                                             chinese:"中国人，像很多别的国家，认为不同颜色有不同的含义。可是，他认为这些颜色代表的含义又不同。那么，中国人眼中的颜色会是什么样的呢？",
                                             english:"China, like many countries, have different colors representing different meanings. However, the meanings they represent are different. So, what do these colors mean to them?"},
                                          {name:"中医中药", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%8C%BB%E4%B8%AD%E8%8D%AF.vid.mp4?v=1687141563744", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%8C%BB%E4%B8%AD%E8%8D%AF.png?v=1687141311931",
                                             chinese:"中药和西药有很多的不同点。不但是他们制作方式不同，而且他们理论也不同。中医治病救人的故事有很多，比如扁鹊和齐王的故事。",
                                             english:"Chinese medicine and American/Western medicine have many differences. There are also many stories regarding Chinese medicines. This video will talk about one of them."},
                                          {name:"龙的传说", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E9%BE%99%E7%9A%84%E4%BC%A0%E8%AF%B4.vid.mp4?v=1687141624361", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E9%BE%99%E7%9A%84%E4%BC%A0%E8%AF%B4.png?v=1687141313550",
                                             chinese:"在西方，很多电影和书会把龙描述成一个邪恶的怪兽，可是中国人对于龙的想法就不同。那么，中国人的心目中里，龙是怎么样的呢？",
                                             english:"In many western movies and books, dragons are evil and destructive. However, that doesn't remain the same when we go to China. So how do the Chiense perceive dragons then?"},
                                          {name:"中国花", src:"https://cdn.glitch.me/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E8%8A%B1.vid.mp4?v=1687141643532", 
                                             poster:"https://cdn.glitch.global/953d561d-7854-4385-b485-b4dc13981631/%E4%B8%AD%E5%9B%BD%E8%8A%B1.png?v=1687141313935",
                                             chinese:"在美国，过情人节那天人一般会送玫瑰。过母亲节那天，妈妈都会得到她们孩子送给他的康乃馨。那么在中国，他们有十大名花。这些十大名花都是什么呢？",
                                             english:"During Valentine‘s Day in America, people will often give each other roses. During Mother's Day, mothers will often be given carnations from their children. In China, there are 10 flowers that are the most popular. Which ones are they? "}]},]
var vidClass = "flex-container"
var vidType = "video/mp4"

function buildVideo(vid_obj){
    let vid_header = document.createElement("h3")
    vid_header.innerHTML = vid_obj.name
    let flex_div = document.createElement("div")
    flex_div.setAttribute("class", vidClass)
    let video = document.createElement("video")
    video.setAttribute("controls", "controls")
    video.setAttribute("controlslist", "nodownload")
    video.setAttribute("class", "video")
    video.setAttribute("poster", vid_obj.poster)
    let vid_src = document.createElement("source")
    vid_src.setAttribute("src", vid_obj.src)
    vid_src.setAttribute("type", vidType)
    video.appendChild(vid_src)
    flex_div.appendChild(video)
    let p_element = document.createElement("p")
    p_element.innerHTML = vid_obj.chinese + "<br><br>" + vid_obj.english
    flex_div.appendChild(p_element)
    return [vid_header, flex_div]
}

function buildList(vid_list){
    document.getElementById("message").innerHTML = ""
    let vids = document.getElementById("videos")
    for(let i = 0; i < vid_list.length; i++){
        let vid_obj = vid_list[i]
        let ret_vid = buildVideo(vid_obj)
        vids.appendChild(ret_vid[0])
        vids.appendChild(ret_vid[1])
    }
}

function reset(){
    let vids = document.getElementById("videos")
    document.getElementById("search").value = ""
    document.getElementById("message").innerHTML = ""
    vids.innerHTML = ""
    for(let cat_i = 0; cat_i < videos.length; cat_i++){
        let category_header = document.createElement("h2")
        category_header.setAttribute("id", videos[cat_i].jump)
        category_header.innerHTML = videos[cat_i].category
        vids.appendChild(category_header)
        buildList(videos[cat_i].vidList)
    }
}

function search(){
    let vids = document.getElementById("videos")
    let search_val = document.getElementById("search").value
    let matches = []
    if(search_val === ""){
        let no_result = document.createElement("p")
        no_result.innerHTML = "Please type something in and then press Search."
        let msg = document.getElementById("message")
        msg.innerHTML = ""
        msg.appendChild(no_result)
        return
    }
    for(let i = 0; i < videos.length; i++){
        for(let j = 0; j < videos[i].vidList.length; j++){
            if((videos[i].vidList[j].name).toLowerCase().includes(search_val.toLowerCase()) ||
               (videos[i].vidList[j].chinese).toLowerCase().includes(search_val.toLowerCase()) ||
               (videos[i].vidList[j].english).toLowerCase().includes(search_val.toLowerCase())){
                matches.push(videos[i].vidList[j])
            }
        }
    }
    if(matches.length === 0){
        let no_result = document.createElement("p")
        no_result.innerHTML = "No matches were found. The search keyword must be contained in the video's title or description."
        let msg = document.getElementById("message")
        msg.innerHTML = ""
        msg.appendChild(no_result)
    }
    else{
        vids.innerHTML = ""
        buildList(matches)
    }
}

document.getElementById("reset-btn").addEventListener("click", reset)
document.getElementById("search-btn").addEventListener("click", search)