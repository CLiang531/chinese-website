let info = {holidays:[
                {video:"情人节/七夕节", questions:["牛郎织女的故事跟哪一个节日有关系？", "牛郎和织女最后变成了什么？", "这节日什么时候发生"], ans_w:[["中秋节", "元宵节"],["鸟", "变成了太阳（所以月饼里是双簧）"],["阳历七月十四日", "农历七月十四日"]], ans_r:["七夕节", "星座，但隔着一个银河", "农历七月七日"]}, 
                {video:"中秋节", questions:["这节日什么时候发生？", "现在中秋节有些什么习俗？", "哪一个中秋节故事里没有药在里面？"], ans_w:[["农历八月五日", "农历八月十日"],["吃汤圆", "和朋友一起吃鼎泰丰"],["玉兔捣药", "嫦娥奔月"]], ans_r:["农历八月十五", "家聚在一起吃月饼", "武钢砍树"]},
                {video:"中秋节 (2)", questions:["后羿一共射了几个太阳？", "哪一个不是被人送他的奖励？"], ans_w:[["十", "一"],["长生不老药", "取嫦娥"]], ans_r:["九", "徒弟"]},
                {video:"端午节", questions:["粽子是用什么包的？", "屈原是谁？", "屈原为什么要跳河？"], ans_w:[["芭蕉叶", "茶叶"],["皇帝", "村民"],["因为家人去世", "没钱了，觉得没有意义活下去了"]], ans_r:["竹叶", "诗人", "被赶出皇帝身边产生了大量的失望"]},
                {video:"端午节 (2)", questions:["大家是是用了什么方法来保护屈原的尸体？", "屈原的故事形成了什么体育项目？"], ans_w:[["把他的尸体捞出来保存", "没有办法做出保护"],["骑马", "放风筝"]], ans_r:["往河里撒米和敲锣打鼓", "赛龙舟"]},
                {video:"中国年", questions:["年兽最怕的颜色是什么？", "和尚对奶奶的要求是什么？", "年兽喜欢吃什么？"], ans_w:[["黄色", "绿色"],["烧竹子", "逃离"],["饺子", "村民种的所有食物"]], ans_r:["红色", "包饺子", "人"]},
                {video:"元宵节", questions:["元宵还可以叫什么？", "天帝为什么生气？", "村庄是怎么装作已经被烧了？"], ans_w:[["只能叫元宵", "糯米"],["有些神仙悄悄地说了些坏话", "猎人大闹天宫让天帝彻底控制不住脾气"],["真的被烧了", "开枪"]], ans_r:["汤团（汤圆也可以）", "因为猎人把天帝亲爱的天鹅射死", "放烟火"]}],
        cuisine:[
                {video:"中国菜系", questions:["中国大菜系中分别有：", "哪一个算杨菜？", "粤菜口味属于："], ans_w:[["京菜，杨菜，沈菜，和川菜", "梅菜，青菜，荠菜，和白菜"],["水煮鱼", "梅干菜"],["麻辣，喜欢用辣椒", "比较闲", "特别甜"]], ans_r:["京菜，杨菜，粤菜，和川菜", "红烧狮子头", "清淡，爱用海鲜和煲汤"]},
                {video:"中国茶", questions:["中国第二最受欢迎的饮料是？", "茶有很多好处，但是在以下的选项里哪一个不是它的好处之一？", "是谁发现/推荐了茶？", "陆羽小时候经常生病。他的身体是怎么康复的？"], ans_w:[["水", "果汁", "酒"],["记性", "消化"],["鲁克", "陆亚"],["家长经常给他喝热水", "身体自己慢慢的好"]], ans_r:["茶", "美若天仙", "陆羽", "庙里的和尚用茶帮他治病"]}],
        famousfigures:[
                {video:"梅兰芳学京剧", questions:["梅兰芳练习什么剧？", "梅兰芳是怎么训练自己的？", "梅兰芳没演过哪一个角色？"], ans_w:[["韩剧", "连续剧", "元剧"],["请教了一位师傅", "他的父亲教的"],["虞姬", "杨贵妃"]], ans_r:["京剧", "放鸽子", "武则天"]},
                {video:"老舍", questions:["老舍干了什么让他成名？", "学生为什么会在老舍演讲时笑？", "丈夫为什么会看到太太的饺子惊呆？"], ans_w:[["相声演员", "歌手"],["不想给面子", "老舍把自己绊倒了"],["因为丈夫从来没有看到过饺子", "他是因为别的事而惊呆"]], ans_r:["著名现代作家", "因为他们听得懂中文", "太太包的饺子特别大"]},
                {video:"王羲之", questions:["王羲之是谁？", "他的水池是被什么染黑的？", "王羲之是怎么让老奶奶的扇子更值钱？"], ans_w:[["皇帝", "诗人"],["茶", "所有物品都在那个水池里洗"],["在上面画了一个太阳", "教她跟有利的推销方式"]], ans_r:["书法家", "墨", "写了些文字"]},
                {video:"孔子", questions:["孔子是：", "孔子开了一个什么样的学校?", "《弟子三千贤人七十》是什么意思？", "孔子生活在春秋末期，那时候不断的打仗，于是孔子最关心："], ans_w:[["优秀的父亲", "书法家", "诗人"],["国办官学", "公立学"],["孔子培养三千学生，还有七十个偶尔加入的人", "孔子交了三千个平民和七十个贵族孙子"],["忠实和爱国", "怎么逃避"]], ans_r:["思想家和教育家", "私学", "孔子教了三千，出色的有七十位", "长久安宁社会"]},
                {video:"孔子学琴", questions:["孔子为什么不想要换曲？", "孔子怎么知道曲子是周文王？"], ans_w:[["偷懒", "老师没有让他"],["乐师告诉了他", "曲子上标着的"]], ans_r:["没掌握好旋律，意思，和作者", "凭自己的深入理解"]},
                {video:"三人行 必有我师", questions:["《———》记下了孔子以前教育他学生的内容。", "孔子说黑夜先，还是白天？为什么？"], ans_w:[["论文", "伦茨"],["白天，白天代表着希望，必须领先黑暗", "都是共存的，别的地方的黑夜是另一地的白天"]], ans_r:["论语", "黑夜，盘古用斧子看开天和地后他的身体才有一部分变成了太阳"]}],
        architecture:[
                {video:"中国北京", questions:["哪一个城市是中国的首都？", "天安门广场是一个什么样的地方？", "北京什么时候被定为首都？"], ans_w:[["上海", "深圳", "广东"],["皇宫", "寺庙"],["清朝", "唐朝和元朝"]], ans_r:["北京", "城市中心", "明朝和秦朝"]},
                {video:"中国长城", questions:["为长城而丧命的人大概有多少？", "女生为什么会哭？之后又发生了什么？", "皇帝为什么要造长城？"], ans_w:[["一两个，比较安全", "几十到几百之间"],["因为搭长城太酷了，长城完全塌了", "被落单，长城的一段墙变成了她的坟墓"],["为了把普通人民和官分开", "秦始皇想要一个纪念他的建筑"]], ans_r:["成千上万", "发现丈夫去世了，据说长城被哭声震到了一大块", "为了防外国的敌军"]}],
        ethnicgroups:[
                {video:"中国人口和民族", questions:["中国一共有几个民族？", "中国最大的民族是哪一个？这个民族又占领了多少人口?", "哪一个人族会抛绣球？", "维吾尔族姑娘会怎么管理头发？"], ans_w:[["三十个", "七十八个"],["汉族，占中国人口百分十八十以下", "蒙古族，占中国人口百分之五十"],["回族", "苗族"],["未成年前几岁就扎几根辫子", "希望几岁出嫁就扎几根辫子", "鼻头散发，越长越好"]], ans_r:["五十六个", "汉族，占中国人口百分之九十二以上", "维吾尔族", "出嫁前几岁就扎几根辫子"]},
                {video:"中国人口和民族 (2)", questions:["蒙古族的带领人是谁？属于什么样的一个民族？", "藏族衣服有什么特点？", "傣族泼水节时，大家都会泼谁？"], ans_w:[["孔子，属于哲学家的民族", "老舍，属于定居(不经常搬家)民族", "梅兰芳，属于不吃任何肉的民族"],["为了生活方便，他们衣服故意缺一个袖子", "衣服又轻又薄"],["家长", "最年轻的人", "最年长的人"]], ans_r:["成吉思汗，属于游牧(经常搬家)民族", "衣服有袖子，但有一个不会穿", "最受欢迎的人"]}],
        fourgreatclassics:[
                {video:"武松打虎", questions:["武松是从哪一个故事来的？", "为什么好心人民告诉他不要晚上去？", "武松遇见了什么动物？"], ans_w:[["西游记", "水浒传", "红楼梦"],["因为武松打死的虎是皇帝的宠物，会被抓", "会幻想"],["熊猫", "孔雀"]], ans_r:["三国演义", "那里有老虎", "老虎"]},
                {video:"西游记", questions:["西游记故事有什么样的起源？", "西游记里的和尚为什么想去印度"], ans_w:[["作者的孩子在外地留学", "作者在打仗期间被逼到其他国家，但发现了很多知识"],["被他的庙逼出去的", "因为他的家人去世让他太难过"]], ans_r:["和尚十七年去印度带了一千三百三十五本书回来", "因为他问的问题没人能够回答"]},
                {video:"火烧赤壁", questions:["为什么要把曹操的船都连接起来？", "曹操为什么听庞统的话？"], ans_w:[["因为会让行动更难", "觉得这样好看"],["因为曹操无条件庞统", "他只是爱下命令"]], ans_r:["这样可以一起把所有船烧掉", "因为晕船是曹操正在发愁的问题"]}],
        other:[
                {video:"中国花", questions:["哪一个花被称为《花中之王》？", "女皇帝的名字是？", "为什么武则天打算把牡丹花赶到洛阳？"], ans_w:[["玫瑰", "向日葵", "莲花"],["孟连沁", "秦始范"],["她觉得牡丹太丑", "牡丹花粉让武则天过敏"]], ans_r:["牡丹", "武则天", "牡丹没有给女皇帝开"]},
                {video:"大熊猫", questions:["大熊猫食肉吗？", "大熊猫平常都什么样？", "熊猫最近有些什么危险？"], ans_w:[["只会吃竹子，不食肉", "熊猫跟以前一样，只吃肉"],["特别机灵", "脑袋真的很空白"],["爱破坏建筑和房子", "好吃懒做"]], ans_r:["大部分的时候吃竹子，但偶尔会吃竹鼠", "慵懒的，但其实挺聪明", "数量极少"]},
                {video:"中国功夫", questions:["《功夫》这词是谁取的？", "功夫是怎么被大众认知的？", "功夫是怎么发明的？"], ans_w:[["成龙", "龙卷风"],["YouTube上看到了", "抖音"],["李小龙自己研究的", "和尚打架时候发现的"]], ans_r:["李小龙", "李小龙和成龙片子来到了好莱坞", "和尚无聊开是学飞禽走兽的动作"]},
                {video:"塞翁失马", questions:["塞翁为什么会决定用他的慢马对付对方的快马？", "塞翁失马是:"], ans_w:[["他是真不想赢了", "随便挑的", "碰运气"],["事故", "四大名著之一"]], ans_r:["为了把自己的快马省下来", "成语"]},
                {video:"蔡伦造纸", questions:["中国四大发明是什么？", "以前富人是用什么写字的？穷人？", "蔡伦造的纸里包含了些什么？"], ans_w:[["茶，纸，活字印刷，火药", "丝，指南针，纸，活字印刷", "茶，丝，纸，活字印刷"],["纸，竹片", "竹片，木板"],["树皮和各种各样的浆糊", "树皮和树叶", "破布，树皮，丝"]], ans_r:["指南针，纸，活字印刷，火药", "丝，竹片", "旧渔网，破布，树皮，麻头"]},
                {video:"关于中国和美国的学校", questions:["中国学生和美国学生课后有什么不同？", "是/否：中国学生都在夏天放两个月的假期", "中国和美国小学生方式有什么不同？"], ans_w:[["中：没什么事情，美：工作", "中：和朋友吃饭，美：和朋友看电影"],["是"],["中国学生比较自作主张", "中美都差不多"]], ans_r:["中：报各种补习班，美：别的课外活动（俱乐部等等）", "否", "美国学校比较看重创作和自我探索"]},
                {video:"中国人眼中的颜色", questions:["中国人结婚的时候会用什么颜色？", "红色代表什么？", "古代时候谁可以穿黄色？", "亲人去世会在黑色的衣服上配哪一个颜色的花？"], ans_w:[["蓝色", "紫色"],["愤怒", "羡慕", "娇嫩"],["高层", "女子", "小孩"],["黑", "蓝", "绿"]], ans_r:["红色", "喜庆，吉祥", "只有皇帝", "白"]},
                {video:"中医中药", questions:["中药和西药有什么不同？", "扁鹊为什么会选择逃离？", "齐王在每一次扁鹊拜见他时，需要进行什么治疗？"], ans_w:[["都一样", "中药用化学，西药用植物", "中药效果更好"],["因为嫌扁鹊太烦，齐王把他吓走了", "扁鹊早就有打算离开"],["皮肤泡在热水里，喝汤药，针灸，没救了", "齐王从头到尾就没事"]], ans_r:["中药用植物，西药用化学", "他觉得齐王注定会去世，他不想要陪葬", "皮肤泡在热水里，针灸，喝汤药，没救了"]},
                {video:"龙的传说", questions:["龙长什么样子？", "龙保管农民的", "龙在古代也代表了"], ans_w:[["火鸡尾，鹿角，鱼鳞，鸡爪", "兔牙，蛇身，鹿角，鱼鳞"],["火", "土"],["汉子的威武", "中国的强大"]], ans_r:["蛇身，鹿角，鱼鳞，鸡爪", "水", "皇帝的权力"]}]}
let current = []

function read_input(){
        current = []
        if(document.getElementById("holiday-cat").checked){
                current.push(info["holidays"])
        }
        if(document.getElementById("cuisine-cat").checked){
                current.push(info["cuisine"])
        }
        if(document.getElementById("famous-cat").checked){
                current.push(info["famousfigures"])
        }
        if(document.getElementById("architecture-cat").checked){
                current.push(info["architecture"])
        }
        if(document.getElementById("ethnic-cat").checked){
                current.push(info["ethnicgroups"])
        }
        if(document.getElementById("classics-cat").checked){
                current.push(info["fourgreatclassics"])
        }
        if(document.getElementById("other-cat").checked){
                current.push(info["other"])
        }
        
        if(current.length == 0){
                document.getElementById("msg").innerHTML = "Please select a checkbox before choosing a game"
        }
        else{
                document.getElementById("msg").innerHTML = ""
        }
}

function activity_start(){
        // remove flex attribute?
        read_input()
        let game = document.getElementById("game");
        game.innerHTML = "";
        let activity_div = document.createElement("div");
        activity_div.setAttribute("id", "activity-div");
        activity_div.setAttribute("class", "activity-q question-padding");

        let btn_div = document.createElement("div");
        btn_div.setAttribute("id", "btn-div");
        let reset_btn = document.createElement("button");
        reset_btn.setAttribute("id", "reset");
        reset_btn.innerHTML = "Reset";
        let next_btn = document.createElement("button");
        next_btn.setAttribute("id", "next");
        next_btn.innerHTML = "Next";
        let answer_btn = document.createElement("button");
        answer_btn.setAttribute("id", "answer");
        answer_btn.innerHTML = "Answer";

        btn_div.style.width = "310px";
        btn_div.style.margin = "auto";
        btn_div.append(reset_btn);
        btn_div.append(next_btn);
        btn_div.append(answer_btn);
        game.append(activity_div);
        game.append(document.createElement("br"));
        game.append(document.createElement("br"));
        game.append(btn_div);
        game.append(document.createElement("br"));
        game.removeAttribute("class");
        
        document.getElementById("reset").addEventListener("click", reset);
}

function generate_question(){
        let topic = current[parseInt(Math.random() * current.length)];
        let video = topic[parseInt(Math.random() * topic.length)];
        let question_number = parseInt(Math.random() * video.questions.length);
        let all_ans = []
        for(let i = 0; i < video.ans_w[question_number].length; i++){
                all_ans.push(video.ans_w[question_number][i]);
        }
        all_ans.push(video.ans_r[question_number])
        let question = [video.questions[question_number], all_ans, video.ans_r[question_number]]
        console.log(question)
        return question;
}

function reveal_answer(choices, right){
        for(let i = 0; i < choices.length; i++){
                if(choices[i].innerHTML === right){
                        choices[i].style.backgroundColor = "#A3FF90"
                }
                else{
                        choices[i].style.backgroundColor = "#FF9090"
                }

        }
}   

function next_set(){
        let activity_div = document.getElementById("activity-div");
        activity_div.innerHTML = "";
        activity_div.style.borderColor = "#ED5736";
        activity_div.append(document.createElement("br"));
        let q_div = document.createElement("div");
        let question = generate_question();
        let q_question = document.createElement("p");
        q_question.innerHTML = question[0];
        q_div.append(q_question);
        let q_mult_choice = [];
        let alphabet = ["A. ", "B. ", "C. ", "D. "]
        let init_size = question[1].length;
        for(let i = 0; i < init_size; i++){
                q_mult_choice.push(document.createElement("p"));
                q_mult_choice[i].setAttribute("class", "checks");
                q_mult_choice[i].setAttribute("id", String(i));
                let index = parseInt(Math.random() * question[1].length);
                q_mult_choice[i].innerHTML = alphabet[i] + question[1][index];
                if(question[1][index] === question[2]){
                        question[2] = alphabet[i] + question[1][index];
                        console.log(question[2]);
                }
                question[1] = question[1].slice(0, index).concat(question[1].slice(index + 1));
                q_div.append(q_mult_choice[i]);
        }
        activity_div.append(q_div);
        activity_div.append(document.createElement("br"));
        q_div.addEventListener("click", (evt) => check_answer(evt, q_mult_choice, question[2]));
        document.getElementById("answer").addEventListener("click", () => {reveal_answer(q_mult_choice, question[2])});
        return q_div;
}

function questions_init(){
        activity_start();
        next_set();
        document.getElementById("next").addEventListener("click", () => {next_set()});
}

function check_answer(evt, choices, right){
        let targetID = parseInt(evt.target.id);
        if(choices[targetID].innerHTML === right){
                document.getElementById("activity-div").style.borderColor = "#03AC13";
        }
        else{
                document.getElementById("activity-div").style.borderColor = "#E3242B";
        }
}

function create_activity_btn(type, id, class_param, value){
        let frame = document.createElement("div");
        frame.setAttribute("class", "activity-item");
        let btn = document.createElement("input");
        btn.setAttribute("type", type);
        btn.setAttribute("id", id);
        btn.setAttribute("class", class_param);
        btn.setAttribute("value", value);
        frame.append(btn);
        return frame;
}

function reset(){
        let game = document.getElementById("game");
        game.innerHTML = "";
        // let matching = create_activity_btn("button", "matching", "activity-header", "Matching");
        // game.append(matching);
        let questions = create_activity_btn("button", "questions", "activity-header", "Questions");
        game.append(questions);
        game.setAttribute("class", "activity-panel fade-left");
        link_activity_btn()
}

// function match_init(){
//         activity_start()
//         let activity_div = document.getElementById("activity-div");
// }

// function crossword_init(){
//         activity_start()
//         let game = document.getElementById("game");
// }   

//document.getElementById("crossword").addEventListener("click", crossword_init)
function link_activity_btn(){
        //document.getElementById("matching").addEventListener("click", match_init)
        document.getElementById("questions").addEventListener("click", questions_init)
        document.getElementById("msg").innerHTML = ""
}
link_activity_btn()