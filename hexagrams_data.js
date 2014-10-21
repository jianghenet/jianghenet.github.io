/*
* JSON Data for ☯
*/
zhouyi = {
	rand_above: function(){
		return this.setting.egiht_trigram[Math.floor(Math.random() * 7)];
	},
	rand_below: function(){
		return this.setting.egiht_trigram[Math.floor(Math.random() * 7)];
	},

	rand_hexagram: function(){
		var above = this.rand_above();
		var below = this.rand_below();
		console.log(above.trigram, below.trigram);
		var dd = this.hexagrams["hexagram" + above.trigram + below.trigram];
		return dd;
	},

	test_show_all: function(){
		for(var i=0; i<7; i++){
			for(var j=0; j<7; j++){
				var dd = this.hexagrams["hexagram" + i + j];
				if(!!!dd){
					console.log(i,j)
				}
			}
		}
	},

	show_a_random_hexagram:function() {
		var xx = this.rand_hexagram();
		return xx.name + "\n" + xx.guaci + "\n" + xx.tuanyue + "\n" + xx.xiangyue;
	},

	setting: {
		egiht_trigram: [
		{
			name: "乾",
			symbol: "☰",
			represent: "天",
			bin_trigram: [1,1,1],
			trigram: "7"
		},
		{
			name: "兑",
			symbol: "☱",
			represent: "泽",
			bin_trigram: [1,1,0],
			trigram: "6"
		},
		{
			name: "离",
			symbol: "☲",
			represent: "火",
			bin_trigram: [1,0,1],
			trigram: "5"
		},
		{
			name: "震",
			symbol: "☳",
			represent: "雷",
			bin_trigram: [1,0,0],
			trigram: "4"
		},
		{
			name: "巽",
			symbol: "☴",
			represent: "风",
			bin_trigram: [0,1,1],
			trigram: "3"
		},
		{
			name: "坎",
			symbol: "☵",
			represent: "水",
			bin_trigram: [0,1,0],
			trigram: "2"
		},
		{
			name: "艮",
			symbol: "☶",
			represent: "山",
			bin_trigram: [0,0,1],
			trigram: "1"
		},
		{
			name: "坤",
			symbol: "☷",
			represent: "地",
			bin_trigram: [0,0,0],
			trigram: "0"
		}
		]
	},
	hexagrams: {
		hexagram77: {
			above: [1,1,1],
			below: [1,1,1],
			name: "乾",
			symbol: "䷀",
			guaci: "乾元亨利贞",
			tuanyue: "彖曰大哉乾元万物资始乃统天云行雨施品物流形大明终始六位时成时乘六龙以御天乾道变化各正性命保合大和乃利贞首出庶物万国威宁",
			xiangyue: "象曰天行健君子以自强不息潜龙勿用阳在下也见龙在田德施普也终日乾乾反复道也或跃在渊进无咎也飞龙在天大人造也亢龙有悔盈不可久也用九天德不可为首也",
			yaocis: [{yaoci: "初九潜龙勿用",xiangyue: null},{yaoci: "九二见龙在田利见大人",xiangyue: null},{yaoci: "九三君子终日乾乾夕惕若厉无咎",xiangyue: null},{yaoci:"九四或跃在渊无咎",xiangyue: null},{yaoci:"九五飞龙在天利见大人",xiangyue: null},{yaoci:"上九亢龙有悔",xiangyue: null}],
		    yong:{yaoci: "用九见群龙无首吉",xiangyue: null},
			wenyanyue: "文言曰元者善之长也亨者嘉之会也利者义之和也贞者事之干也君子体仁足以长人嘉会足以合礼利物足以和义贞固足以干事君子行此四德者故曰乾元亨利贞初九曰潜龙勿用何谓也子曰龙德而隐者也不易乎世不成乎名遯世无闷不见是而无闷乐则行之忧则违之确乎其不可拔潜龙也九二曰见龙在田利见大人何谓也子曰龙德而正中者也庸言之信庸行之谨闲邪存其诚善世而不伐德博而化易曰见龙在田利见大人君德也九三曰君子终日乾乾夕惕若厉无咎何谓也子曰君子进德修业忠信所以进德也修辞立其诚所以居业也知至至之可与言几也知终终之可与存义也是故居上位而不骄在下位而不忧故乾乾因其时而惕虽危无咎矣 九四曰或跃在渊无咎何谓也子曰上下无常非为邪也进退无恒非离群也君子进德修业欲及时也故无咎九五曰飞龙在天利见大人何谓也子曰同声相应同气相求水流湿火就燥云従龙风従虎圣人作而万物睹本乎天者亲上本乎地者亲下则各従其类也上九曰亢龙有悔何谓也子曰贵而无位高而无民贤人在下位而无辅是以动而有悔也潜龙勿用下也见龙在田时舍也终日乾乾行事也或跃在渊自试也飞龙在天上治也亢龙有悔穷之灾也乾元用九天下治也潜龙勿用阳气潜藏见龙在田天下文明终日乾乾与时偕行或跃在渊乾道乃革飞龙在天乃位乎天德亢龙有悔与时偕极乾元用九乃是天则乾元者始而亨者也利贞者性情也乾始能以美利利天下不言所利大矣哉大哉乾乎刚健中正纯粹精也六爻发挥旁通情也时乘六龙以御天也云行雨施天下平也君子以成德为行日可见之行也潜之为言也隐而未见行而未成是以君子弗用也君子学以聚之问以辩之宽以居之仁以行之易曰见龙在田利见大人君德也九三重刚而不中上不在天下不在田故乾乾因其时而惕虽危无咎矣九四重刚而不中上不在天下不在田中不在人故或之或之者疑之也故无咎夫大人者与天地合其德与日月合其明与四时合其序与鬼神合其吉凶先天而天弗违后天而奉天时天且弗违而况于人乎况于鬼神乎亢之为言也知进而不知退知存而不知亡知得而不知丧其唯圣人乎知进退存亡而不失其正者其唯圣人乎"
		},
		hexagram00 :{
			above: [0,0,0],
			below:[0,0,0],
			name: "坤",
			symbol: "䷁",
			guaci: "坤元亨利牝马之贞君子有攸往先迷後得主利西南得朋东北丧朋安贞吉",
			tuanyue: "彖曰至哉坤元万物资生乃顺承天坤厚载物德合无疆含弘光大品物咸亨牝马地类行地无疆柔顺利贞君子君子攸行先迷失道後顺得常西南得朋乃与类行东北丧朋乃终有庆安贞之吉应地无疆",
			xiangyue: "象曰地势坤君子以厚德载物",
			yaocis: [{yaoci:"初六履霜坚冰至",xiangyue: "象曰履霜坚冰阴始凝也驯致其道至坚冰也"},{yaoci: "六二直方大不习无不利",xiangyue:"象曰六二之动直以方也不习无不利地道光也"},{yaoci:"六三含章可贞或従王事无成有终",xiangyue:"象曰含章可贞以时发也或従王事知光大也"},{yaoci:"六四括囊无咎无誉",xiangyue:"象曰括囊无咎慎不害也"},{yaoci:"六五黄裳元吉",xiangyue:"象曰黄裳元吉文在中也"},{yaoci:"上六龙战于野其血玄黄",xiangyue:"象曰龙战于野共道穷也"}],
			yong:{yaoci:"用六利永贞",xiangyue: "象曰用六永贞以大终也"},
			wenyanyue:"文言曰坤至柔而动也刚至静而德方后得主而有常含万物而化光坤道其顺乎承天而时行积善之家必有余庆积不善之家必有余殃臣弑其君子弑其父非一朝一夕之故其所由来者渐矣由辩之不早辩也易曰履霜坚冰至盖言顺也直其正也方其义也君子敬以直内义以方外敬义立而德不孤直方大不习无不利则不疑其所行也阴虽有美含之以従王事弗敢成也地道也妻道也臣道也地道无成而代有终也天地变化草木蕃天地闭贤人隐易曰括囊无咎无誉盖言谨也君子黄中通理正位居体美在其中而畅于四支发于事业美之至也阴疑于阳必战为其嫌于无阳也故称龙焉犹未离其类也故称血焉夫玄黄者天地之杂也天玄而地黄"
		},
	    
		hexagram24: {
			above: [0,1,0],
			below: [1,0,0],
			name:"屯",
			symbol: "䷂",
			guaci:"屯元亨利贞勿用有攸往利建侯",
			tuanyue: "彖曰屯刚柔始交而难生动乎险中大亨贞雷雨之动满盈天造草昧宜寻建侯而不宁",
			xiangyue:"象曰云雷屯君子以经纶",
			yaocis:[{yaoci:"初九磐桓利居贞利建侯", xiangyue: "象曰虽磐桓志行正也以贵下贱大得民也"},{yaoci:"六二屯如邅如乘马班如匪寇婚媾女子贞不字十年乃字", xiangyue: "象曰六二之难乘刚也十年乃字反常也"},{yaoci:"六三即鹿无虞惟入于林中君子几不如舍往吝", xiangyue: "象曰即鹿无虞以従禽也君子舍之往吝穷也"},{yaoci:"六四乘马班如求婚媾往吉无不利", xiangyue: "象曰求而往明也"},{yaoci:"九五屯其膏小贞吉大贞凶", xiangyue: "象曰屯其膏施未光也"},{yaoci:"上六乘马班如泣血涟如", xiangyue: "象曰泣血涟如何可长也"}],
			wenyanyue: null,
			yong: null
		},
	    hexagram12: {
	    	above: [0,0,1],
	    	below: [0,1,0],
	    	name:"蒙",
	    	symbol: "䷃",
	    	guaci:"蒙亨匪我求童蒙童蒙求我初筮告再三渎渎则不告利贞",
	    	tuanyue:"彖曰蒙山下有险险而止蒙蒙亨以亨行时中也匪我求童蒙童蒙求我志应也初筮告以刚中也再三渎渎则不告渎蒙也蒙以养正圣功也",
	    	xiangyue:"象曰山下出泉蒙君子以果行育德",
			yaocis:[{yaoci:"初六发蒙利用刑人用说桎梏以往吝", xiangyue: "象曰利用刑人以正法也"},{yaoci:"九二包蒙吉纳妇吉子克家", xiangyue: "象曰子克家刚柔节也"},{yaoci:"六三勿用取女见金夫不有躬无攸利", xiangyue: "象曰勿用取女行不顺也"},{yaoci:"六四困蒙吝", xiangyue: "象曰困蒙之吝独远实也"},{yaoci:"六五童蒙吉", xiangyue: "象曰童蒙之吉顺以巽也"},{yaoci:"上九击蒙不利为寇利御寇", xiangyue: "象曰利用御寇上下顺也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram27: {
			above:[0,1,0],
			below: [1,1,1],
			name: "需",
			symbol: "䷄",
			guaci:"需有孚光亨贞吉利涉大川",
			tuanyue:"彖曰需须也险在前也刚健而不陷其义不困穷矣需有孚光亨贞吉位乎天位以正中也利涉大川往有功也",
			xiangyue:"象曰云上于天需君子以饮食宴乐",
			yaocis:[{yaoci:"初九需于郊利用恒无咎", xiangyue: "象曰需于郊不犯难行也利用恒无咎未失常也"},{yaoci:"九二需于沙小有言终吉", xiangyue: "象曰需于沙衍在中也虽小有言以终吉也"},{yaoci:"九三需于泥致寇至", xiangyue: "象曰需于泥灾在外也自我致寇敬慎不败也"},{yaoci:"六四需于血出自穴", xiangyue: "象曰需于血顺以听也"},{yaoci:"九五需于酒食贞吉", xiangyue: "象曰酒食贞吉以中正也"},{yaoci:"上六入于穴有不速之客三人来敬之终吉", xiangyue: "象曰不速之客来敬之终吉虽不当位未大失也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram72: {
			above: [1,1,1],
			below: [0,1,0],
			name:"讼",
			symbol: "䷅",
			guaci:"讼有孚窒惕中吉终凶利见大人不利涉大川",
			tuanyue:"彖曰讼上刚下险险而健讼讼有孚窒惕中吉刚来而得中也终凶讼不可成也利见大人尚中正也不利涉大川入于渊也",
			xiangyue:"象曰天与水违行讼君子以作事谋始",
			yaocis:[{yaoci:"初六不永所事小有言终吉", xiangyue: "象曰不永所事讼不可长也虽小有言其辩明也"},{yaoci:"九二不克讼归而逋其邑人三百户无眚", xiangyue: "象曰不克讼归逋窜也自下讼上患至掇也"},{yaoci:"六三食旧德贞厉终吉或従王事无成", xiangyue: "象曰食旧德従上吉也"},{yaoci:"九四不克讼复既命渝安贞吉", xiangyue: "象曰复即命渝安贞不失也"},{yaoci:"九五讼元吉", xiangyue: "象曰讼元吉以中正也"},{yaoci:"上九或锡之鞶带终朝三褫之", xiangyue: "象曰以讼受服亦不足敬也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram02: {
			above:[0,0,0],
			below:[0,1,0],
			name:"师",
			symbol:"䷆",
			guaci:"师贞丈人吉无咎",
			tuanyue:"彖曰师众也贞正也能以众正可以王矣刚中而应行险而顺以此毒天下而民従之吉又何咎矣",
			xiangyue:"象曰地中有水师君子以容民畜众",
			yaocis:[{yaoci:"初六师出以律否臧凶", xiangyue: "象曰师出以律失律凶也"},{yaoci:"九二在师中吉无咎王三锡命", xiangyue: "象曰在师中吉承天宠也王三锡命怀万邦也"},{yaoci:"六三师或舆尸凶", xiangyue: "象曰师或舆尸大无功也"},{yaoci:"六四师左次无咎", xiangyue: "象曰左次无咎未失常也"},{yaoci:"六五田有禽利执言无咎长子帅师弟子舆尸贞凶", xiangyue: "象曰长子帅师以中行也弟子舆尸使不当也"},{yaoci:"上六大君有命开国承家小人勿用", xiangyue: "象曰大君有命以正功也小人勿用必乱邦也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram20: {
			above: [0,1,0],
			below: [0,0,0],
			name: "比",
			symbol:"䷇",
			guaci:"比吉原筮元永贞无咎不宁方来后夫凶",
			tuanyue:"彖曰比吉也比辅也下顺従也原筮元永贞无咎以刚中也不宁方来上下应也后夫凶其道穷也",
			xiangyue:"象曰地上有水比先王以建万国亲诸侯",
			yaocis:[{yaoci:"初六有孚比之无咎有孚盈缶终来有它吉", xiangyue: "象曰比之初六有它吉也"},{yaoci:"六二比之自内贞吉", xiangyue: "象曰比之自内不自失也"},{yaoci:"六三比之匪人", xiangyue: "象曰比之匪人不亦伤乎"},{yaoci:"六四外比之贞吉", xiangyue: "象曰外比于贤以従上也"},{yaoci:"九五显比王用三驱失前禽邑人不诫吉", xiangyue: "象曰显比之吉位正中也舍逆取顺失前禽也邑人不诫上使中也"},{yaoci:"上六比之无首凶", xiangyue: "象曰比之无首无所终也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram37: {
			above: [0,1,1],
			below: [1,1,1],
			name: "小畜",
			symbol:"䷈",
			guaci:"小畜亨密云不雨自我西郊",
			tuanyue:"彖曰小畜柔得位而上下应之曰小畜健而巽刚中而志行乃亨密云不雨尚往也自我西郊施未行也",
			xiangyue:"象曰风行天上小畜君子以懿文德",
			yaocis:[{yaoci:"初九复自道何其咎吉", xiangyue: "象曰复自道其义吉也"},{yaoci:"九二牵复吉", xiangyue: "象曰牵复在中亦不自失也"},{yaoci:"九三舆说辐夫妻反目", xiangyue: "象曰夫妻反目不能正室也"},{yaoci:"六四有孚血去惕出无咎", xiangyue: "象曰有孚惕出上合志也"},{yaoci:"九五有孚挛如富以其邻", xiangyue: "象曰有孚挛如不独富也"},{yaoci:"上九既雨既处尚德载妇贞厉月几望君子征凶", xiangyue: "象曰既雨既处德积载也君子征凶有所疑也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram76: {
			above: [1,1,1],
			below: [1,1,0],
			name: "履",
			symbol:"䷉",
			guaci:"履履虎尾不咥人亨",
			tuanyue:"彖曰履柔履刚也说而应乎乾是以履虎尾不咥人亨刚中正履帝位而不疚光明也",
			xiangyue:"象曰上天下泽履君子以辨上下定民志",
			yaocis:[{yaoci:"初九素履往无咎", xiangyue: "象曰素履之往独行愿也"},{yaoci:"九二履道坦坦幽人贞吉", xiangyue: "象曰幽人贞吉中不自乱也"},{yaoci:"六三眇能视跛能履履虎尾咥人凶武人为于大君", xiangyue: "象曰眇能视不足以有明也跛能履不足以与行也咥人之凶位不当也武人为于大君志刚也"},{yaoci:"九四履虎尾愬愬终吉", xiangyue: "象曰愬愬终吉志行也"},{yaoci:"九五夬履贞厉", xiangyue: "象曰夬履贞厉位正当也"},{yaoci:"上九视履考祥其旋元吉", xiangyue: "象曰元吉在上大有庆也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram07: {
			above: [0,0,0],
			below: [1,1,1],
			name: "泰",
			symbol:"䷊",
			guaci:"泰小往大来吉亨",
			tuanyue:"彖曰泰小往大来吉亨则是天地交而万物通也上下交而其志同也内阳而外阴内健而外顺内君子而外小人君子道长小人道消也",
			xiangyue:"象曰天地交泰后以财成天地之道辅相天地之宜以左右民",
			yaocis:[{yaoci:"初九拔茅茹以其汇征吉", xiangyue: "象曰拔茅征吉志在外也"},{yaoci:"九二包荒用冯河不遐遗朋亡得尚于中行", xiangyue: "象曰包荒得尚于中行以光大也"},{yaoci:"九三无平不陂无往不复艰贞无咎勿恤其孚于食有福", xiangyue: "象曰无往不复天地际也"},{yaoci:"六四翩翩不富以其邻不戒以孚", xiangyue: "象曰翩翩不富皆失实也不戒以孚中心愿也"},{yaoci:"六五帝乙归妹以祉元吉", xiangyue: "象曰以祉元吉中以行愿也"},{yaoci:"上六城复于隍勿用师自邑告命贞吝", xiangyue: "象曰城复于隍其命乱也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram70: {
			above: [1,1,1],
			below: [0,0,0],
			name: "否",
			symbol:"䷋",
			guaci:"否否之匪人不利君子贞大往小来",
			tuanyue:"彖曰否之匪人不利君子贞大往小来则是天地不交而万物不通也上下不交而天下无邦也内阴而外阳内柔而外刚内小人而外君子小人道长君子道消也",
			xiangyue:"象曰天地不交否君子以俭德辟难不可荣以禄",
			yaocis:[{yaoci:"初六拔茅茹以其汇贞吉亨", xiangyue: "象曰拔茅贞吉志在君也"},{yaoci:"六二包承小人吉大人否亨", xiangyue: "象曰大人否亨不乱群也"},{yaoci:"六三包羞", xiangyue: "象曰包羞位不当也"},{yaoci:"九四有命无咎畴离祉", xiangyue: "象曰有命无咎志行也"},{yaoci:"九五休否大人吉其亡其亡系于苞桑", xiangyue: "象曰大人之吉位正当也"},{yaoci:"上九倾否先否后喜", xiangyue: "象曰否终则倾何可长也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram75: {
			above: [1,1,1],
			below: [1,0,1],
			name: "同人",
			symbol:"䷌",
			guaci:"同人同人于野亨利涉大川利君子贞",
			tuanyue:"彖曰同人柔得位得中而应乎乾曰同人同人曰同人于野亨利涉大川乾行也文明以健中正而应君子正也唯君子为能通天下之志",
			xiangyue: "象曰天与火同人君子以类族辨物",
			yaocis:[{yaoci:"初九同人于门无咎", xiangyue: "象曰出门同人又谁咎也"},{yaoci:"六二同人于宗吝", xiangyue: "象曰同人于宗吝道也"},{yaoci:"九三伏戎于莽升其高陵三岁不兴", xiangyue: "象曰伏戎于莽敌刚也三岁不兴安行也"},{yaoci:"九四乘其墉弗克攻吉", xiangyue: "象曰乘其墉义弗克也其吉则困而反则也"},{yaoci:"九五同人先号咷而后笑大师克相遇", xiangyue: "象曰同人之先以中直也大师相遇言相克也"},{yaoci:"上九同人于郊无悔", xiangyue: "象曰同人于郊志未得也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram57: {
			above: [1,0,1],
			below: [1,1,1],
			name: "大有",
			symbol:"䷍",
			guaci:"大有元亨",
			tuanyue:"彖曰大有柔得尊位大中而上下应之曰大有其德刚健而文明应乎天而时行是以元亨",
			xiangyue:"象曰火在天上大有君子以遏恶扬善顺天休命",
			yaocis:[{yaoci:"初九无交害匪咎艰则无咎", xiangyue: "象曰大有初九无交害也"},{yaoci:"九二大车以载有攸往无咎", xiangyue: "象曰大车以载积中不败也"},{yaoci:"九三公用亨于天子小人弗克", xiangyue: "象曰公用亨于天子小人害也"},{yaoci:"九四匪其彭无咎", xiangyue: "象曰匪其彭无咎明辨晰也"},{yaoci:"六五厥孚交如威如吉", xiangyue: "象曰厥孚交如信以发志也威如之吉易而无备也"},{yaoci:"上九自天祐之吉无不利", xiangyue: "象曰大有上吉自天祐也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram01: {
			above: [0,0,0],
			below: [0,0,1],
			name: "谦",
			symbol:"䷎",
			guaci:"谦亨君子有终",
			tuanyue:"彖曰谦亨天道下济而光明地道卑而上行天道亏盈而益谦地道变盈而流谦鬼神害盈而福谦人道恶盈而好谦谦尊而光卑而不可逾君子之终也",
			xiangyue:"象曰地中有山谦君子以裒多益寡称物平施",
			yaocis:[{yaoci:"初六谦谦君子用涉大川吉", xiangyue: "象曰谦谦君子卑以自牧也"},{yaoci:"六二鸣谦贞吉", xiangyue: "象曰鸣谦贞吉中心得也"},{yaoci:"九三劳谦君子有终吉", xiangyue: "象曰劳谦君子万民服也"},{yaoci:"六四无不利捴谦", xiangyue: "象曰无不利捴谦不违则也"},{yaoci:"六五不富以其邻利用侵伐无不利", xiangyue: "象曰利用侵伐征不服也"},{yaoci:"上六鸣谦利用行师征邑国", xiangyue: "象曰鸣谦志未得也可用行师征邑国也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram40: {
			above: [1,0,0],
			below: [0,0,0],
			name: "豫",
			symbol:"䷏",
			guaci:"豫利建侯行师",
			tuanyue:"彖曰豫刚应而志行顺以动豫豫顺以动故天地如之而况建侯行师乎天地以顺动故日月不过而四时不忒圣人以顺动则刑罚清而民服豫之时义大矣哉",
			xiangyue:"象曰雷出地奋豫先王以作乐崇德殷荐之上帝以配祖考",
			yaocis:[{yaoci:"初六鸣豫凶", xiangyue: "象曰初六鸣豫志穷凶也"},{yaoci:"六二介于石不终日贞吉", xiangyue: "象曰不终日贞吉以中正也"},{yaoci:"六三盱豫悔迟有悔", xiangyue: "象曰盱豫不悔位不当也"},{yaoci:"九四由豫大有得勿疑朋盍簪", xiangyue: "象曰由豫大有得志大行也"},{yaoci:"六五贞疾恒不死", xiangyue: "象曰六五贞疾乘刚也恒不死中未亡也"},{yaoci:"上六冥豫成有渝无咎", xiangyue: "象曰冥豫在上何可长也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram64: {
			above: [1,1,0],
			below: [1,0,0],
			name: "随",
			symbol:"䷐",
			guaci:"随元亨利贞无咎",
			tuanyue:"彖曰随刚来而下柔动而说随大亨贞无咎而天下随时随时之义大矣哉",
			xiangyue:"象曰泽中有雷随君子以向晦入宴息",
			yaocis:[{yaoci:"初九官有渝贞吉出门交有功", xiangyue: "象曰官有渝従正吉也出门交有功不失也"},{yaoci:"六二系小子失丈夫", xiangyue: "象曰系小子弗兼与也"},{yaoci:"六三系丈夫失小子随有求得利居贞", xiangyue: "象曰系丈夫志舍下也"},{yaoci:"九四随有获贞凶有孚在道以明何咎", xiangyue: "象曰随有获其义凶也有孚在道明功也"},{yaoci:"九五孚于嘉吉", xiangyue: "象曰孚于嘉吉位正中也"},{yaoci:"上六拘系之乃従维之王用亨于西山", xiangyue: "象曰拘系之上穷也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram13: {
			above: [0,0,1],
			below: [0,1,1],
			name: "蛊",
			symbol:"䷑",
			guaci:"蛊元亨利涉大川先甲三日后甲三日",
			tuanyue:"彖曰蛊刚上而柔下巽而止蛊蛊元亨而天下治也利涉大川往有事也先甲三日后甲三日终则有始天行也",
			xiangyue:"象曰山下有风蛊君子以振民育德",
			yaocis:[{yaoci:"初六干父之蛊有子考无咎厉终吉", xiangyue: "象曰干父之蛊意承考也"},{yaoci:"九二干母之蛊不可贞", xiangyue: "象曰干母之蛊得中道也"},{yaoci:"九三干父之蛊小有悔无大咎", xiangyue: "象曰干父之蛊终无咎也"},{yaoci:"六四裕父之蛊往见吝", xiangyue: "象曰裕父之蛊往未得也"},{yaoci:"六五干父之蛊用誉", xiangyue: "象曰干父用誉承以德也"},{yaoci:"上九不事王侯高尚其事", xiangyue: "象曰不事王侯志可则也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram06: {
			above: [0,0,0],
			below: [1,1,0],
			name: "临",
			symbol:"䷒",
			guaci:"临元亨利贞至于八月有凶",
			tuanyue:"彖曰临刚浸而长说而顺刚中而应大亨以正天之道也至于八月有凶消不久也",
			xiangyue:"象曰泽上有地临君子以教思无穷容保民无疆",
			yaocis:[{yaoci:"初九咸临贞吉", xiangyue: "象曰咸临贞吉志行正也"},{yaoci:"九二咸临吉无不利", xiangyue: "象曰咸临吉无不利未顺命也"},{yaoci:"六三甘临无攸利既忧之无咎", xiangyue: "象曰甘临位不当也既忧之咎不长也"},{yaoci:"六四至临无咎", xiangyue: "象曰至临无咎位当也"},{yaoci:"六五知临大君之宜吉", xiangyue: "象曰大君之宜行中之谓也"},{yaoci:"上六敦临吉无咎", xiangyue: "象曰敦临之吉志在内也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram30: {
			above: [0,1,1],
			below: [0,0,0],
			name: "观",
			symbol:"䷓",
			guaci:"观盥而不荐有孚颙若",
			tuanyue:"彖曰大观在上顺而巽中正以观天下观盥而不荐有孚颙若下观而化也观天之神道而四时不忒圣人以神道设教而天下服矣",
			xiangyue:"象曰风行地上观先王以省方观民设教",
			yaocis:[{yaoci:"初六童观小人无咎君子吝", xiangyue: "象曰初六童观小人道也"},{yaoci:"六二窥观利女贞", xiangyue: "象曰窥观女贞亦可丑也"},{yaoci:"六三观我生进退", xiangyue: "象曰观我生进退未失道也"},{yaoci:"六四观国之光利用宾于王", xiangyue: "象曰观国之光尚宾也"},{yaoci:"九五观我生君子无咎", xiangyue: "象曰观我生观民也"},{yaoci:"上九观其生君子无咎", xiangyue: "象曰观其生志未平也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram54: {
			above: [1,0,1],
			below: [1,0,0],
			name: "噬嗑",
			symbol:"䷔",
			guaci:"噬嗑亨利用狱",
			tuanyue:"彖曰颐中有物曰噬嗑噬嗑而亨刚柔分动而明雷电合而章柔得中而上行虽不当位利用狱也",
			xiangyue:"象曰雷电噬嗑先王以明罚敕法",
			yaocis:[{yaoci:"初九屦校灭趾无咎", xiangyue: "象曰屦校灭趾不行也"},{yaoci:"六二噬肤灭鼻无咎", xiangyue: "象曰噬肤灭鼻乘刚也"},{yaoci:"六三噬腊肉遇毒小吝无咎", xiangyue: "象曰遇毒位不当也"},{yaoci:"九四噬干胏得金矢利艰贞吉", xiangyue: "象曰利艰贞吉未光也"},{yaoci:"六五噬干肉得黄金贞厉无咎", xiangyue: "象曰贞厉无咎得当也"},{yaoci:"上九何校灭耳凶", xiangyue: "象曰何校灭耳聪不明也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram15: {
			above: [0,0,1],
			below: [1,0,1],
			name: "贲",
			symbol:"䷕",
			guaci:"贲亨小利有攸往",
			tuanyue:"彖曰贲亨柔来而文刚故亨分刚上而文柔故小利有攸往刚柔交错天文也文明以止人文也观乎天文以察时变观乎人文以化成天下",
			xiangyue:"象曰山下有火贲君子以明庶政无敢折狱",
			yaocis:[{yaoci:"初九贲其趾舍车而徒", xiangyue: "象曰舍车而徒义弗乘也"},{yaoci:"六二贲其须", xiangyue: "象曰贲其须与上兴也"},{yaoci:"九三贲如濡如永贞吉", xiangyue: "象曰永贞之吉终莫之陵也"},{yaoci:"六四贲如皤如白马翰如匪寇婚媾", xiangyue: "象曰六四当位疑也匪寇婚媾终无尤也"},{yaoci:"六五贲于丘园束帛戋戋吝终吉", xiangyue: "象曰六五之吉有喜也"},{yaoci:"上九白贲无咎", xiangyue: "象曰白贲无咎上得志也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram10: {
			above: [0,0,1],
			below: [0,0,0],
			name: "剥",
			symbol:"䷖",
			guaci:"剥不利有攸往",
			tuanyue:"彖曰剥剥也柔变刚也不利有攸往小人长也顺而止之观象也君子尚消息盈虚天行也",
			xiangyue:"象曰山附于地剥上以厚下安宅",
			yaocis:[{yaoci:"初六剥床以足蔑贞凶", xiangyue: "象曰剥床以足以灭下也"},{yaoci:"六二剥床以辨蔑贞凶", xiangyue: "象曰剥床以辨未有与也"},{yaoci:"六三剥之无咎", xiangyue: "象曰剥之无咎失上下也"},{yaoci:"六四剥床以肤凶", xiangyue: "象曰剥床以肤切近灾也"},{yaoci:"六五贯鱼以宫人宠无不利", xiangyue: "象曰以宫人宠终无尤也"},{yaoci:"上九硕果不食君子得舆小人剥庐", xiangyue: "象曰君子得舆民所载也小人剥庐终不可用也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram04: {
			above: [0,0,0],
			below: [1,0,0],
			name: "复",
			symbol:"䷗",
			guaci:"复亨出入无疾朋来无咎反复其道七日来复利有攸往",
			tuanyue:"彖曰复亨刚反动而以顺行是以出入无疾朋来无咎反复其道七日来复天行也利有攸往刚长也复其见天地之心乎",
			xiangyue:"象曰雷在地中复先王以至日闭关商旅不行后不省方",
			yaocis:[{yaoci:"初九不远复无祗悔元吉", xiangyue: "象曰不远之复以修身也"},{yaoci:"六二休复吉", xiangyue: "象曰休复之吉以下仁也"},{yaoci:"六三频复厉无咎", xiangyue: "象曰频复之厉义无咎也"},{yaoci:"六四中行独复", xiangyue: "象曰中行独复以従道也"},{yaoci:"六五敦复无悔", xiangyue: "象曰敦复无悔中以自考也"},{yaoci:"上六迷复凶有灾眚用行师终有大败以其国君凶至于十年不克征", xiangyue: "象曰迷复之凶反君道也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram74: {
			above: [1,1,1],
			below: [1,0,0],
			name: "无妄",
			symbol:"䷘",
			guaci:"无妄元亨利贞其匪正有眚不利有攸往",
			tuanyue:"彖曰无妄刚自外来而为主于内动而健刚中而应大亨以正天之命也其匪正有眚不利有攸往无妄之往何之矣天命不祐行矣哉",
			xiangyue:"象曰天下雷行物与无妄先王以茂对时育万物",
			yaocis:[{yaoci:"初九无妄往吉", xiangyue: "象曰无妄之往得志也"},{yaoci:"六二不耕获不菑畬则利用攸往", xiangyue: "象曰不耕获未富也"},{yaoci:"六三无妄之灾或系之牛行人之得邑人之灾", xiangyue: "象曰行人得牛邑人灾也"},{yaoci:"九四可贞无咎", xiangyue: "象曰可贞无咎固有之也"},{yaoci:"九五无妄之疾勿药有喜", xiangyue: "象曰无妄之药不可试也"},{yaoci:"上九无妄行有眚无攸利", xiangyue: "象曰无妄之行穷之灾也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram17: {
			above: [0,0,1],
			below: [1,1,1],
			name: "大畜",
			symbol:"䷙",
			guaci:"大畜利贞不家食吉利涉大川",
			tuanyue:"彖曰大畜刚健笃实辉光日新其德刚上而尚贤能止健大正也不家食吉养贤也利涉大川应乎天也",
			xiangyue:"象曰天在山中大畜君子以多识前贤往行以畜其德",
			yaocis:[{yaoci:"初九有厉利已", xiangyue: "象曰有厉利已不犯灾也"},{yaoci:"九二舆说輹", xiangyue: "象曰舆说輹中无尤也"},{yaoci:"九三良马逐利艰贞曰闲舆卫利有攸往", xiangyue: "象曰利有攸往上合志也"},{yaoci:"六四童牛之牿元吉", xiangyue: "象曰六四元吉有喜也"},{yaoci:"六五豮豕之牙吉", xiangyue: "象曰六五之吉有庆也"},{yaoci:"上九何天之衢亨", xiangyue: "象曰何天之衢道大行也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram14: {
			above: [0,0,1],
			below: [1,0,0],
			name: "颐",
			symbol:"䷚",
			guaci:"颐贞吉观颐自求口实",
			tuanyue:"彖曰颐贞吉养正则吉也观颐观其所养也自求口实观其自养也天地养万物圣人养贤以及万民颐之时大矣哉",
			xiangyue:"象曰山下有雷颐君子以慎言语节饮食",
			yaocis:[{yaoci:"初九舍尔灵龟观我朵颐凶", xiangyue: "象曰观我朵颐亦不足贵也"},{yaoci:"六二颠颐拂经于丘颐征凶", xiangyue: "象曰六二征凶行失类也"},{yaoci:"六三拂颐贞凶十年勿用无攸利", xiangyue: "象曰十年勿用道大悖也"},{yaoci:"六四颠颐吉虎视眈眈其欲逐逐无咎", xiangyue: "象曰颠颐之吉上施光也"},{yaoci:"六五拂经居贞吉不可涉大川", xiangyue: "象曰居贞之吉顺以従上也"},{yaoci:"上九由颐厉吉利涉大川", xiangyue: "象曰由颐厉吉大有庆也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram63: {
			above: [1,1,0],
			below: [0,1,1],
			name: "大过",
			symbol:"䷛",
			guaci:"大过栋挠利有攸往亨",
			tuanyue:"彖曰大过大者过也栋挠本末弱也刚过而中巽而说行利有攸往乃亨大过之时大矣哉",
			xiangyue:"象曰泽灭木大过君子以独立不惧遯世无闷",
			yaocis:[{yaoci:"初六藉用白茅无咎", xiangyue: "象曰藉用白茅柔在下也"},{yaoci:"九二枯杨生稊老夫得其女妻无不利", xiangyue: "象曰老夫女妻过以相与也"},{yaoci:"九三栋桡凶", xiangyue: "象曰栋桡之凶不可以有辅也"},{yaoci:"九四栋隆吉有它吝", xiangyue: "象曰栋隆之吉不桡乎下也"},{yaoci:"九五枯杨生华老妇得其士夫无咎无誉", xiangyue: "象曰枯杨生华何可久也无妇士夫亦可丑也"},{yaoci:"上六过涉灭顶凶无咎", xiangyue: "象曰过涉之凶不可咎也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram22: {
			above: [0,1,0],
			below: [0,1,0],
			name: "坎",
			symbol:"䷜",
			guaci:"习坎有孚维心亨行有尚",
			tuanyue:"彖曰习坎重险也水流而不盈行险而不失其信维心亨乃以刚中也行有尚往有功也天险不可升也地险山川丘陵也王公设险以守其国险之时用大矣哉",
			xiangyue:"象曰水洊至习坎君子以常德行习教事",
			yaocis:[{yaoci:"初六习坎入于坎窞凶", xiangyue: "象曰习坎入坎失道凶也"},{yaoci:"九二坎有险求小得", xiangyue: "象曰求小得未出中也"},{yaoci:"六三来之坎坎险且枕入于坎窞勿用", xiangyue: "象曰来之坎坎终无功也"},{yaoci:"六四樽酒簋贰用缶纳约自牖终无咎", xiangyue: "象曰樽酒簋贰刚柔际也"},{yaoci:"九五坎不盈祗既平无咎", xiangyue: "象曰坎不盈中未大也"},{yaoci:"上六系用徽纆窴于丛棘三岁不得凶", xiangyue: "象曰上六失道凶三岁也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram55: {
			above: [1,0,1],
			below: [1,0,1],
			name: "离",
			symbol:"䷝",
			guaci:"离利贞亨畜牝牛吉",
			tuanyue:"彖曰离丽也日月丽乎天百谷草木丽乎土重明以丽乎正乃化成天下柔丽乎中正故是以畜牝牛吉也",
			xiangyue:"象曰明两作离大人以继明照于四方",
			yaocis:[{yaoci:"初九履错然敬之无咎", xiangyue: "象曰履错之敬以辟咎也"},{yaoci:"六二黄离元吉", xiangyue: "象曰黄离元吉得中道也"},{yaoci:"九三日昃之离不鼓缶而歌则大耋之嗟凶", xiangyue: "象曰日昃之离何可久也"},{yaoci:"九四突如其来如焚如死如弃如", xiangyue: "象曰突如其来如无所容也"},{yaoci:"六五出涕沱若戚嗟若吉", xiangyue: "象曰六五之吉离王公也"},{yaoci:"上九王用出征有嘉折首获匪其丑无咎", xiangyue: "象曰王用出征以正邦也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram61: {
			above: [1,1,0],
			below: [0,0,1],
			name: "咸",
			symbol:"䷞",
			guaci:"咸亨利贞取女吉",
			tuanyue:"彖曰咸感也柔上而刚下二气感应以相与止而说男下女是以亨利贞取女吉也天地感而万物化生圣人感人心而天下和平观其所感而天地万物之情可见矣",
			xiangyue:"象曰山上有泽咸君子以虚受人",
			yaocis:[{yaoci:"初六咸其拇", xiangyue: "象曰咸其拇志在外也"},{yaoci:"六二咸其腓凶居吉", xiangyue: "象曰虽凶居吉顺不害也"},{yaoci:"九三咸其股执其随往吝", xiangyue: "象曰咸其股亦不处也志在随人所执下也"},{yaoci:"九四贞吉悔亡憧憧往来朋従尔思", xiangyue: "象曰贞吉悔亡未感害也憧憧往来未光大也"},{yaoci:"九五咸其脢无悔", xiangyue: "象曰咸其脢志末也"},{yaoci:"上六咸其辅颊舌", xiangyue: "象曰咸其辅颊舌滕口说也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram43: {
			above: [1,0,0],
			below: [0,1,1],
			name: "恒",
			symbol:"䷟",
			guaci:"恒亨无咎利贞利有攸往",
			tuanyue:"彖曰恒久也刚上而柔下雷风相与巽而动刚柔皆应恒恒亨无咎利贞久于其道也天地之道恒久而不已也利有攸往终则有始也日月得天而能久照四时变化而能久成圣人久于其道而天下化成观其所恒而天地万物之情可见矣",
			xiangyue:"象曰雷风恒君子以立不易方",
			yaocis:[{yaoci:"初六浚恒贞凶无攸利", xiangyue: "象曰浚恒之凶始求深也"},{yaoci:"九二悔亡", xiangyue: "象曰九二悔亡能久中也"},{yaoci:"九三不恒其德或承之羞贞吝", xiangyue: "象曰不恒其德无所容也"},{yaoci:"九四田无禽", xiangyue: "象曰久非其位安得禽也"},{yaoci:"六五恒其德贞妇人吉夫子凶", xiangyue: "象曰妇人贞吉従一而终也夫子制义従妇凶也"},{yaoci:"上六振恒凶", xiangyue: "象曰振恒在上大无功也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram71: {
			above: [1,1,1],
			below: [0,0,1],
			name: "遯",
			symbol:"䷠",
			guaci:"遯亨小利贞",
			tuanyue:"彖曰遯亨遯而亨也刚当位而应与时行也小利贞浸而长也遯之时义大矣哉",
			xiangyue:"象曰天下有山遯君子以远小人不恶而严",
			yaocis:[{yaoci:"初六遯尾厉勿用有攸往", xiangyue: "象曰遯尾之厉不往何灾也"},{yaoci:"六二执之用黄牛之革莫之胜说", xiangyue: "象曰执用黄牛固志也"},{yaoci:"九三系遯有疾厉畜臣妾吉", xiangyue: "象曰系遯之厉有疾惫也畜臣妾吉不可大事也"},{yaoci:"九四好遯君子吉小人否", xiangyue: "象曰君子好遯小人否也"},{yaoci:"九五嘉遯贞吉", xiangyue: "象曰嘉遯贞吉以正志也"},{yaoci:"上九肥遯无不利", xiangyue: "象曰肥遯无不利无所疑也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram47: {
			above: [1,0,0],
			below: [1,1,1],
			name: "大壮",
			symbol:"䷡",
			guaci:"大壮利贞",
			tuanyue:"彖曰大壮大者壮也刚以动故壮大壮利贞大者正也正大而天地之情可见矣",
			xiangyue:"象曰雷在天上大壮君子以非礼弗履",
			yaocis:[{yaoci:"初九壮于趾征凶有孚", xiangyue: "象曰壮于趾其孚穷也"},{yaoci:"九二贞吉", xiangyue: "象曰九二贞吉以中也"},{yaoci:"九三小人用壮君子用罔贞厉羝羊触藩羸其角", xiangyue: "象曰小人用壮君子以罔也"},{yaoci:"九四贞吉悔亡藩决不羸壮于大舆之輹", xiangyue: "象曰藩决不羸尚往也"},{yaoci:"六五丧羊于易无悔", xiangyue: "象曰丧羊于易位不当也"},{yaoci:"上六羝羊触藩不能退不能遂无攸利艰则吉", xiangyue: "象曰不能退不能遂不详也艰则吉咎不长也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram50: {
			above: [1,0,1],
			below: [0,0,0],
			name: "晋",
			symbol:"䷢",
			guaci:"晋康侯用锡马蕃庶昼日三接",
			tuanyue:"彖曰晋进也明出地上顺而丽乎大明柔进而上行是以康侯用锡马蕃庶昼日三接也",
			xiangyue:"象曰明出地上晋君子以自昭明德",
			yaocis:[{yaoci:"初六晋如摧如贞吉罔孚裕无咎", xiangyue: "象曰晋如摧如独行正也裕无咎未受命也"},{yaoci:"六二晋如愁如贞吉受兹介福于其王母", xiangyue: "象曰受兹介福以中正也"},{yaoci:"六三众允悔亡", xiangyue: "象曰众允之志上行也"},{yaoci:"九四晋如鼫鼠贞厉", xiangyue: "象曰鼫鼠贞厉位不当也"},{yaoci:"六五悔亡失得勿恤往吉无不利", xiangyue: "象曰失得勿恤往有庆也"},{yaoci:"上九晋其角维用伐邑厉吉无咎贞吝", xiangyue: "象曰维用伐邑道未光也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram05: {
			above: [0,0,0],
			below: [1,0,1],
			name: "明夷",
			symbol:"䷣",
			guaci:"明夷利艰贞",
			tuanyue:"彖曰明入地中明夷内文明而外柔顺以蒙大难文王以之利艰贞晦其明也内难而能正其志箕子以之",
			xiangyue:"象曰明入地中明夷君子以莅众用晦而明",
			yaocis:[{yaoci:"初九明夷于飞垂其翼君子于行三日不食有攸往主人有言", xiangyue: "象曰君子于行义不食也"},{yaoci:"六二明夷夷于左股用拯马壮吉", xiangyue: "象曰六二之吉顺以则也"},{yaoci:"九三明夷于南狩得其大首不可疾贞", xiangyue: "象曰南狩之志乃得大也"},{yaoci:"六四入于左腹获明夷之心于出门庭", xiangyue: "象曰入于左腹获心意也"},{yaoci:"六五箕子之明夷利贞", xiangyue: "象曰箕子之贞明不可息也"},{yaoci:"上六不明晦初登于天后入于地", xiangyue: "象曰初登于天照四国也后入天地失则也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram35: {
			above: [0,1,1],
			below: [1,0,1],
			name: "家人",
			symbol:"䷤",
			guaci:"家人利女贞",
			tuanyue:"彖曰家人女正位乎内男正位乎外男女正天地之大义也家人有严君焉父母之谓也父父子子兄兄弟弟夫夫妇妇而家道正正家而天下定矣",
			xiangyue:"象曰风自火出家人君子以言有物而行有恒",
			yaocis:[{yaoci:"初九闲有家悔亡", xiangyue: "象曰闲有家志未变也"},{yaoci:"六二无攸遂在中馈贞吉", xiangyue: "象曰六二之吉顺以巽也"},{yaoci:"九三家人嗃嗃悔厉吉妇子嘻嘻终吝", xiangyue: "象曰家人嗃嗃未失也妇子嘻嘻失家节也"},{yaoci:"九四富家大吉", xiangyue: "象曰富家大吉顺在位也"},{yaoci:"九五王假有家勿恤吉", xiangyue: "象曰王假有家交相爱也"},{yaoci:"上九有孚威如终吉", xiangyue: "象曰威如之吉反身之谓也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram56: {
			above: [1,0,1],
			below: [1,1,0],
			name: "睽",
			symbol:"䷥",
			guaci:"睽小事吉",
			tuanyue:"彖曰睽火动而上泽动而下二女同居其志不同行说而丽乎明柔进而上行得中而应乎刚是以小事吉天地睽而其事同也男女睽而其志通也万物睽而其事类也睽之时用大矣哉",
			xiangyue:"象曰上火下泽睽君子以同而异",
			yaocis:[{yaoci:"初九悔亡丧马勿逐自复见恶人无咎", xiangyue: "象曰见恶人以辟咎也"},{yaoci:"九二遇主于巷无咎", xiangyue: "象曰遇主于巷未失道也"},{yaoci:"六三见舆曳其牛掣其人天且劓无初有终", xiangyue: "象曰见舆曳位不当也无初有终遇刚也"},{yaoci:"九四睽孤遇元夫交孚厉无咎", xiangyue: "象曰交孚无咎志行也"},{yaoci:"六五悔亡厥宗噬肤往何咎", xiangyue: "象曰厥宗噬肤往有庆也"},{yaoci:"上九睽孤见豕负涂载鬼一车先张之弧后说之弧匪寇婚媾往遇雨则吉", xiangyue: "象曰遇雨之吉群疑亡也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram21: {
			above: [0,1,0],
			below: [0,0,1],
			name: "蹇",
			symbol:"䷦",
			guaci:"蹇利西南不利东北利见大人贞吉",
			tuanyue:"彖曰蹇难也险在前也见险而能止知矣哉蹇利西南往得中也不利东北其道穷也利见大人往有功也当位贞吉以正邦也蹇之时用大矣哉",
			xiangyue:"象曰山上有水蹇君子以反身修德",
			yaocis:[{yaoci:"初六往蹇来誉", xiangyue: "象曰往蹇来誉宜待也"},{yaoci:"六二王臣蹇蹇匪躬之故", xiangyue: "象曰王臣蹇蹇终无尤也"},{yaoci:"九三往蹇来反", xiangyue: "象曰往蹇来反内喜之也"},{yaoci:"六四往蹇来连", xiangyue: "象曰往蹇来连当位实也"},{yaoci:"九五大蹇朋来", xiangyue: "象曰大蹇朋来以中节也"},{yaoci:"上六往蹇来硕吉利见大人", xiangyue: "象曰往蹇来硕志在内也利见大人以従贵也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram42: {
			above: [1,0,0],
			below: [0,1,0],
			name: "解",
			symbol:"䷧",
			guaci:"解利西南无所往其来复吉有攸往夙吉",
			tuanyue:"彖曰解险以动动而免乎险解解利西南往得众也其来复吉乃得中也有攸往夙吉往有功也天地解而雷雨作雷雨作而百果草木皆甲坼解之时大矣哉",
			xiangyue:"象曰雷雨作解君子以赦过宥罪",
			yaocis:[{yaoci:"初六无咎", xiangyue: "象曰刚柔之际义无咎也"},{yaoci:"九二田获三狐得黄矢贞吉", xiangyue: "象曰九二贞吉得中道也"},{yaoci:"六三负且乘致寇至贞吝", xiangyue: "象曰负且乘亦可丑也自我致戎又谁咎也"},{yaoci:"九四解而拇朋至斯孚", xiangyue: "象曰解而拇未当位也"},{yaoci:"六五君子维有解吉有孚于小人", xiangyue: "象曰君子有解小人退也"},{yaoci:"上六公用射隼于高墉之上获之无不利", xiangyue: "象曰公用射隼以解悖也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram16: {
			above: [0,0,1],
			below: [1,1,0],
			name: "损",
			symbol:"䷨",
			guaci:"损有孚元吉无咎可贞利有攸往曷之用二簋可用享",
			tuanyue:"彖曰损损下益上其道上行损而有孚元吉无咎可贞利有攸往曷之用二簋可用享二簋应有时损刚益柔有时损益盈虚与时偕行",
			xiangyue:"象曰山下有泽损君子以惩忿窒欲",
			yaocis:[{yaoci:"初九已事遄往无咎酌损之", xiangyue: "象曰已事遄往尚合志也"},{yaoci:"九二利贞征凶弗损益之", xiangyue: "象曰九二利贞中以为志也"},{yaoci:"六三三人行则损一人一人行则得其友", xiangyue: "象曰一人行三则疑也"},{yaoci:"六四损其疾使遄有喜无咎", xiangyue: "象曰损其疾亦可喜也"},{yaoci:"六五或益之十朋之龟弗克违元吉", xiangyue: "象曰六五元吉自上祐也"},{yaoci:"上九弗损益之无咎贞吉利有攸往得臣无家", xiangyue: "象曰弗损益之大得志也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram34: {
			above: [0,1,1],
			below: [1,0,0],
			name: "益",
			symbol:"䷩",
			guaci:"益利有攸往利涉大川",
			tuanyue:"彖曰益损上益下民说无疆自上下下其道大光利有攸往中正有庆利涉大川木道乃行益动而巽日进无疆天施地生其益无方凡益之道与时偕行", 
			xiangyue: "象曰风雷益君子以见善则迁有过则改",
			yaocis:[{yaoci:"初九利用为大作元吉无咎", xiangyue: "象曰元吉无咎下不厚事也"},{yaoci:"六二或益之十朋之龟弗克违永贞吉王用享于帝吉", xiangyue: "象曰或益之自外来也"},{yaoci:"六三益之用凶事无咎有孚中行告公用圭", xiangyue: "象曰益用凶事固有之也"},{yaoci:"六四中行告公従利用为依迁国", xiangyue: "象曰告公従以益志也"},{yaoci:"九五有孚惠心勿问元吉有孚惠我德", xiangyue: "象曰有孚惠心勿问之矣惠我德大得志也"},{yaoci:"上九莫益之或击之立心勿恒凶", xiangyue: "象曰莫益之偏辞也或击之自外来也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram67: {
			above: [1,1,0],
			below: [1,1,1],
			name: "夬",
			symbol:"䷪",
			guaci:"夬扬于王庭孚号有厉告自邑不利即戎利有攸往",
			tuanyue:"彖曰夬决也刚决柔也健而说决而和扬于王庭柔乘五刚也孚号有厉其危乃光也告自邑不利即戎所尚乃穷也利有攸往刚长乃终也",
			xiangyue:"象曰泽上于天夬君子以施禄及下居德则忌",
			yaocis:[{yaoci:"初九壮于前趾往不胜为咎", xiangyue: "象曰不胜而往咎也"},{yaoci:"九二惕号莫夜有戎勿恤", xiangyue: "象曰有戎勿恤得中道也"},{yaoci:"九三壮于頄有凶君子夬夬独行遇雨若濡有愠无咎", xiangyue: "象曰君子夬夬终无咎也"},{yaoci:"九四臀无肤其行次且牵羊悔亡闻言不信", xiangyue: "象曰其行次且位不当也闻言不信聪不明也"},{yaoci:"九五苋陆夬夬中行无咎", xiangyue: "象曰中行无咎中未光也"},{yaoci:"上六无号终有凶", xiangyue: "象曰无号之凶终不可长也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram73: {
			above: [1,1,1],
			below: [0,1,1],
			name: "姤",
			symbol:"䷫",
			guaci:"姤女壮勿用取女",
			tuanyue:"彖曰姤遇也柔遇刚也勿用取女不可与长也天地相遇品物咸章也刚遇中正天下大行也女后之时义大矣哉",
			xiangyue:"象曰天下有风姤后以施命诰四方",
			yaocis:[{yaoci:"初六系于金柅贞吉有攸往见凶羸豕孚蹢躅", xiangyue: "象曰系于金柅柔道牵也"},{yaoci:"九二包有鱼无咎不利宾", xiangyue: "象曰包有鱼义不及宾也"},{yaoci:"九三臀无肤其行次且厉无大咎", xiangyue: "象曰其行次且行未牵也"},{yaoci:"九四包无鱼起凶", xiangyue: "象曰无鱼之凶远民也"},{yaoci:"九五以杞包瓜含章有陨自天", xiangyue: "象曰九五含章中正也有陨自天志不舍命也"},{yaoci:"上九女后其角吝无咎", xiangyue: "象曰姤其角上穷吝也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram60: {
			above: [1,1,0],
			below: [0,0,0],
			name: "萃",
			symbol:"䷬",
			guaci:"萃亨王假有庙利见大人亨利贞用大牲吉利有攸往",
			tuanyue:"彖曰萃聚也顺以说刚中而应故聚也王假有庙致孝享也利见大人亨聚以正也用大牲吉利有攸往顺天命也观其所聚而天地万物之情可见矣",
			xiangyue:"象曰泽上于地萃君子以除戎器戒不虞",
			yaocis:[{yaoci:"初六有孚不终乃乱乃萃若号一握为笑勿恤往无咎", xiangyue: "象曰乃乱乃萃其志乱也"},{yaoci:"六二引吉无咎孚乃利用禴", xiangyue: "象曰引吉无咎中未变也"},{yaoci:"六三萃如嗟如无攸利往无咎小吝", xiangyue: "象曰往无咎上巽也"},{yaoci:"九四大吉无咎", xiangyue: "象曰大吉无咎位不当也"},{yaoci:"九五萃有位无咎匪孚元永贞悔亡", xiangyue: "象曰萃有位志未光也"},{yaoci:"上六赍咨涕洟无咎", xiangyue: "象曰赍咨涕洟未安上也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram03: {
			above: [0,0,0],
			below: [0,1,1],
			name: "升",
			symbol:"䷭",
			guaci:"升元亨用见大人勿恤南征吉",
			tuanyue:"彖曰柔以时升巽而顺刚中而应是以大亨用见大人勿恤有庆也南征吉志行也",
			xiangyue:"象曰地中生木升君子以顺德积小以高大",
			yaocis:[{yaoci:"初六允升大吉", xiangyue: "象曰允升大吉上合志也"},{yaoci:"九二孚乃利用禴无咎", xiangyue: "象曰九二之孚有喜也"},{yaoci:"九三升虚邑", xiangyue: "象曰升虚邑无所疑也"},{yaoci:"六四王用亨于岐山吉无咎", xiangyue: "象曰王用亨于岐山顺事也"},{yaoci:"六五贞吉升阶", xiangyue: "象曰贞吉升阶大得志也"},{yaoci:"上六冥升利于不息之贞", xiangyue: "象曰冥升在上消不富也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram62: {
			above: [1,1,0],
			below: [0,1,0],
			name: "困",
			symbol:"䷮",
			guaci:"困亨贞大人吉无咎有言不信",
			tuanyue:"彖曰困刚掩也险以说因而不失其所亨其唯君子乎贞大人吉以刚中也有言不信尚口乃穷也",
			xiangyue:"象曰泽无水困君子以致命遂志",
			yaocis:[{yaoci:"初六臀困于株木入于幽谷三岁不觌", xiangyue: "象曰入于幽谷幽不明也"},{yaoci:"九二困于酒食朱绂方来利用享祀征凶无咎", xiangyue: "象曰困于酒食中有庆也"},{yaoci:"六三困于石据于蒺藜入于其宫不见其妻凶", xiangyue: "象曰据于蒺藜乘刚也入于其宫不见其妻不祥也"},{yaoci:"九四来徐徐困于金车吝有终", xiangyue: "象曰来徐徐志在下也虽不当位有与也"},{yaoci:"九五劓刖困于赤绂乃徐有说利用祭祀", xiangyue: "象曰劓刖志未得也乃徐有说以中直也利用祭祀受福也"},{yaoci:"上六困于葛藟于臲曰动悔有悔征吉", xiangyue: "象曰困于葛藟未当也动悔有悔吉行也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram23: {
			above: [0,1,0],
			below: [0,1,1],
			name: "井",
			symbol:"䷯",
			guaci:"井改邑不改井无丧无得往来井井汔至亦未繘井羸其瓶凶",
			tuanyue:"彖曰巽乎水而上水井井养而不穷也改邑不改井乃以刚中也汔至亦未繘井未有功也羸其瓶是以凶也",
			xiangyue:"象曰木上有水井君子以劳民劝相",
			yaocis:[{yaoci:"初六井泥不食旧井无禽", xiangyue: "象曰井泥不食下也占井无禽时舍也"},{yaoci:"九二井谷射鲋瓮敝漏", xiangyue: "象曰井谷射鲋无与也"},{yaoci:"九三井渫不食为我心恻可用汲王明并受其福", xiangyue: "象曰井渫不食行恻也求王明受福也"},{yaoci:"六四井甃无咎", xiangyue: "象曰井甃无咎修井也"},{yaoci:"九五井洌寒泉食", xiangyue: "象曰寒泉之食中正也"},{yaoci:"上六井收勿幕有孚元吉", xiangyue: "象曰元吉在上大成也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram65: {
			above: [1,1,0],
			below: [1,0,1],
			name: "革",
			symbol:"䷰",
			guaci:"革已日乃孚元亨利贞悔亡",
			tuanyue:"彖曰革水火相息二女同居其志不相得曰革已日乃孚革而信之文明以说大亨以正革而当其悔乃亡天地革而四时成汤武革命顺乎天而应乎人革之时大矣哉",
			xiangyue:"象曰泽中有火革君子以治历明时",
			yaocis:[{yaoci:"初九巩用黄牛之革", xiangyue: "象曰巩用黄牛不可以有为也"},{yaoci:"六二巳日乃革之征吉无咎", xiangyue: "象曰巳日革之行有嘉也"},{yaoci:"九三征凶贞厉革言三就有孚", xiangyue: "象曰革言三就又何之矣"},{yaoci:"九四悔亡有孚改命吉", xiangyue: "象曰改命之吉信志也"},{yaoci:"九五大人虎变未占有孚", xiangyue: "象曰大人虎变其文炳也"},{yaoci:"上六君子豹变小人革面征凶居贞吉", xiangyue: "象曰君子豹变其文蔚也小人革面顺以従君也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram53: {
			above: [1,0,1],
			below: [0,1,1],
			name: "鼎",
			symbol:"䷱",
			guaci:"鼎元吉亨",
			tuanyue:"彖曰鼎象也以木巽火亨饪也圣人亨以享上帝而大亨以养圣贤巽而耳目聪明柔进而上行得中而应乎刚是以元亨",
			xiangyue:"象曰木上有火鼎君子以正位凝命",
			yaocis:[{yaoci:"初六鼎颠趾利出否得妾以其子无咎", xiangyue: "象曰鼎颠趾未悖也利出否以従贵也"},{yaoci:"九二鼎有实我仇有疾不我能即吉", xiangyue: "象曰鼎有实慎所之也我仇有疾终无尤也"},{yaoci:"九三鼎耳革其行塞雉膏不食方雨亏悔终吉", xiangyue: "象曰鼎耳革失其义也"},{yaoci:"九四鼎折足覆公餗其形渥凶", xiangyue: "象曰覆公餗信如何也"},{yaoci:"六五鼎黄耳金铉利贞", xiangyue: "象曰鼎黄耳中以为实也"},{yaoci:"上九鼎玉铉大吉无不利", xiangyue: "象曰玉铉在上刚柔节也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram44: {
			above: [1,0,0],
			below: [1,0,0],
			name: "震",
			symbol:"䷲",
			guaci:"震亨震来虩虩笑言哑哑震惊百里不丧匕鬯",
			tuanyue:"彖曰震亨震来虩虩恐致福也笑言哑哑后有则也震惊百里惊远而惧迩也不丧匕鬯出可以守宗庙社稷以为祭主也",
			xiangyue:"象曰洊雷震君子以恐惧修省",
			yaocis:[{yaoci:"初九震来虩虩后笑言哑哑吉", xiangyue: "象曰震来虩虩恐致福也笑言哑哑后有则也"},{yaoci:"六二震来厉亿丧贝跻于九陵勿逐七日得", xiangyue: "象曰震来厉乘刚也"},{yaoci:"六三震苏苏震行无眚", xiangyue: "象曰震苏苏位不当也"},{yaoci:"九四震遂泥", xiangyue: "象曰震遂泥未光也"},{yaoci:"六五震往来厉意无丧有事", xiangyue: "象曰震往来厉危行也其事在中大无丧也"},{yaoci:"上六震索索视矍矍征凶震不于其躬于其邻无咎婚媾有言", xiangyue: "象曰震索索中未得也虽凶无咎畏邻戒也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram11: {
			above: [0,0,1],
			below: [0,0,1],
			name: "艮",
			symbol:"䷳",
			guaci:"艮艮其背不获其身行其庭不见其人无咎",
			tuanyue:"彖曰艮止也时止则止时行则行动静不失其时其道光明艮其止止其所也上下敌应不相与也是以不获其身行其庭不见其人无咎也",
			xiangyue:"象曰兼山艮君子以思不出其位",
			yaocis:[{yaoci:"初六艮其趾无咎利永贞", xiangyue: "象曰艮其趾未失正也"},{yaoci:"六二艮其腓不拯其随其心不快", xiangyue: "象曰不拯其随未退听也"},{yaoci:"九三艮其限列其夤厉熏心", xiangyue: "象曰艮其限危熏心也"},{yaoci:"六四艮其身无咎", xiangyue: "象曰艮其身止诸躬也"},{yaoci:"六五艮其辅言有序悔亡", xiangyue: "象曰艮其辅以中正也"},{yaoci:"上九敦艮吉", xiangyue: "象曰敦艮之吉以厚终也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram31: {
			above: [0,1,1],
			below: [0,0,1],
			name: "渐",
			symbol:"䷴",
			guaci:"渐女归吉利贞",
			tuanyue:"彖曰渐之进也女归吉也进得位往有功也进以正可以正邦也其位刚得中也止而巽动不穷也",
			xiangyue:"象曰山上有木渐君子以居贤德善俗",
			yaocis:[{yaoci:"初六鸿渐于干小子厉有言无咎", xiangyue: "象曰小子之厉义无咎也"},{yaoci:"六二鸿渐于磐饮食衎衎吉", xiangyue: "象曰饮食衎衎不素饱也"},{yaoci:"九三鸿渐于陆夫征不复妇孕不育凶利御寇", xiangyue: "象曰夫征不复离群丑也妇孕不育失其道也利用御寇顺相保也"},{yaoci:"六四鸿渐于木或得其桷无咎", xiangyue: "象曰或得其桷顺以巽也"},{yaoci:"九五鸿渐于陵妇三岁不孕终莫之胜吉", xiangyue: "象曰终莫之胜吉得所愿也"},{yaoci:"上九鸿渐于陆其羽可用为仪吉", xiangyue: "象曰其羽可用为仪吉不可乱也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram46: {
			above: [1,0,0],
			below: [1,1,0],
			name: "归妹",
			symbol:"䷵",
			guaci:"归妹征凶无攸利",
			tuanyue:"彖曰归妹天地之大义也天地不交而万物不兴归妹人之终始也说以动所归妹也征凶位不当也无攸利柔乘刚也",
			xiangyue: "象曰泽上有雷归妹君子以永终知敝",
			yaocis:[{yaoci:"初九归妹以娣跛能履征吉", xiangyue: "象曰归妹以娣以恒也跛能履吉相承也"},{yaoci:"九二眇能视利幽人之贞", xiangyue: "象曰利幽人之贞未变常也"},{yaoci:"六三归妹以须反归以娣", xiangyue: "象曰归妹以须未当也"},{yaoci:"九四归妹愆期迟归有时", xiangyue: "象曰愆期之志有待而行也"},{yaoci:"六五帝乙归妹其君之袂不如其娣之袂良月几望吉", xiangyue: "象曰帝乙归妹不如其娣之袂良也其位在中以贵行也"},{yaoci:"上六女承筐无实士刲羊无血无攸利", xiangyue: "象曰上六无实承虚筐也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram45: {
			above: [1,0,0],
			below: [1,0,1],
			name: "丰",
			symbol:"䷶",
			guaci:"丰亨王假之勿忧宜日中",
			tuanyue:"彖曰丰大也明以动故丰王假之尚大也勿忧宜日中宜照天下也日中则昃月盈则食天地盈虚与时消息而况于人乎况于鬼神乎",
			xiangyue:"象曰雷电皆至丰君子以折狱致刑",
			yaocis:[{yaoci:"初九遇其配主虽旬无咎往有尚", xiangyue: "象曰虽旬无咎过旬灾也"},{yaoci:"六二丰其蔀日中见斗往得疑疾有孚发若吉", xiangyue: "象曰有孚发若信以发志也"},{yaoci:"九三丰其沛日中见沫折其右肱无咎", xiangyue: "象曰丰其沛不可大事也折其右肱终不可用也"},{yaoci:"九四丰其蔀日中见斗遇其夷主吉", xiangyue: "象曰丰其蔀位不当也日中见斗幽不明也遇其夷主吉行也"},{yaoci:"六五来章有庆誉吉", xiangyue: "象曰六五之吉有庆也"},{yaoci:"上六丰其屋蔀其家窥其户阒其无人三岁不觌凶", xiangyue: "象曰丰其屋天际翔也窥其户阒其无人自藏也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram51: {
			above: [1,0,1],
			below: [0,0,1],
			name: "旅",
			symbol:"䷷",
			guaci:"旅小亨旅贞吉",
			tuanyue:"彖曰旅小亨柔得中乎外而顺乎刚止而丽乎明是以小亨旅贞吉也旅之时义大矣哉",
			xiangyue:"象曰山上有火旅君子以明慎用刑而不留狱",
			yaocis:[{yaoci:"初六旅琐琐斯其所取灾", xiangyue: "象曰旅琐琐志穷灾也"},{yaoci:"六二旅即次怀其资得童仆贞", xiangyue: "象曰得童仆贞终无尤也"},{yaoci:"九三旅焚其次丧其童仆贞厉", xiangyue: "象曰旅焚其次亦以伤矣以旅与下其义丧也"},{yaoci:"九四旅于处得其资斧我心不快", xiangyue: "象曰旅于处未得位也得其资斧心未快也"},{yaoci:"六五射雉一矢亡终以誉命", xiangyue: "象曰终以誉命上逮也"},{yaoci:"上九鸟焚其巢旅人先笑后号咷丧牛于易凶", xiangyue: "象曰以旅在上其义焚也丧牛于易终莫之闻也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram33: {
			above: [0,1,1],
			below: [0,1,1],
			name: "巽",
			symbol:"䷸",
			guaci:"巽小亨利有攸往利见大人",
			tuanyue:"彖曰重巽以申命刚巽乎中正而志行柔皆顺乎刚是以小亨利有攸往利见大人",
			xiangyue:"象曰随风巽君子以申命行事",
			yaocis:[{yaoci:"初六进退利武人之贞", xiangyue: "象曰进退志疑也利武人之贞志治也"},{yaoci:"九二巽在床下用史巫纷若吉无咎", xiangyue: "象曰纷若之吉得中也"},{yaoci:"九三频巽吝", xiangyue: "象曰频巽之吝志穷也"},{yaoci:"六四悔亡田获三品", xiangyue: "象曰田获三品有功也"},{yaoci:"九五贞吉悔亡无不利无初有终先庚三日后庚三日吉", xiangyue: "象曰九五之吉位正中也"},{yaoci:"上九巽在床下丧其资斧贞凶", xiangyue: "象曰巽在床下上穷也丧其资斧正乎凶也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram66: {
			above: [1,1,0],
			below: [1,1,0],
			name: "兑",
			symbol:"䷹",
			guaci:"兑亨利贞",
			tuanyue:"彖曰兑说也刚中而柔外说以利贞是以顺乎天而应乎人说以先民民忘其劳说以犯难民忘其死说之大民劝矣哉",
			xiangyue:"象曰丽泽兑君子以朋友讲习",
			yaocis:[{yaoci:"初九和兑吉", xiangyue: "象曰和兑之吉行未疑也"},{yaoci:"九二孚兑吉悔亡", xiangyue: "象曰孚兑之吉信志也"},{yaoci:"六三来兑凶", xiangyue: "象曰来兑之凶位不当也"},{yaoci:"九四商兑未宁介疾有喜", xiangyue: "象曰九四之喜有庆也"},{yaoci:"九五孚于剥有厉", xiangyue: "象曰孚于剥位正当也"},{yaoci:"上六引兑", xiangyue: "象曰上六引兑未光也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram32: {
			above: [0,1,1],
			below: [0,1,0],
			name: "涣",
			symbol:"䷺",
			guaci:"涣亨王假有庙利涉大川利贞",
			tuanyue:"彖曰涣亨刚来而不穷柔得位乎外而上同王假有庙王乃在中也利涉大川乘木有功也",
			xiangyue:"象曰风行水上涣先王以享于帝立庙",
			yaocis:[{yaoci:"初六用拯马壮吉", xiangyue: "象曰初六之吉顺也"},{yaoci:"九二涣奔其机悔亡", xiangyue: "象曰涣奔其机得愿也"},{yaoci:"六三涣其躬无悔", xiangyue: "象曰涣其躬志在外也"},{yaoci:"六四涣其群元吉涣有丘匪夷所思", xiangyue: "象曰涣其群元吉光大也"},{yaoci:"九五涣汗其大号涣王居无咎", xiangyue: "象曰王居无咎正位也"},{yaoci:"上九涣其血去逖出无咎", xiangyue: "象曰涣其血远害也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram26: {
			above: [0,1,0],
			below: [1,1,0],
			name: "节",
			symbol:"䷻",
			guaci:"节亨苦节不可贞",
			tuanyue:"彖曰节亨刚柔分而刚得中苦节不可贞其道穷也说以行险当位以节中正以通天地节而四时成节以制度不伤财不害民",
			xiangyue:"象曰泽上有水节君子以制数度议德行",
			yaocis:[{yaoci:"初九不出户庭无咎", xiangyue: "象曰不出户庭知通塞也"},{yaoci:"九二不出门庭凶", xiangyue: "象曰不出门庭凶失时极也"},{yaoci:"六三不节若则嗟若无咎", xiangyue: "象曰不节之嗟又谁咎也"},{yaoci:"六四安节亨", xiangyue: "象曰安节之亨承上道也"},{yaoci:"九五甘节吉往有尚", xiangyue: "象曰甘节之吉居位中也"},{yaoci:"上六苦节贞凶悔亡", xiangyue: "象曰苦节贞凶其道穷也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram36: {
			above: [0,1,1],
			below: [1,1,0],
			name: "中孚",
			symbol:"䷼",
			guaci:"中孚豚鱼吉利涉大川利贞",
			tuanyue:"彖曰中孚柔在内而刚得中说而巽孚乃化邦也豚鱼吉信及豚鱼也利涉大川乘木舟虚也中孚以利贞乃应乎天也",
			xiangyue:"象曰泽上有风中孚君子以议狱缓死",
			yaocis:[{yaoci:"初九虞吉有它不燕", xiangyue: "象曰初九虞吉志未变也"},{yaoci:"九二鸣鹤在阴其子和之我有好爵吾与尔靡之", xiangyue: "象曰其子和之中心愿也"},{yaoci:"六三得敌或鼓或罢或泣或歌", xiangyue: "象曰或鼓或罢位不当也"},{yaoci:"六四月几望马匹亡无咎", xiangyue: "象曰马匹亡绝类上也"},{yaoci:"九五有孚挛如无咎", xiangyue: "象曰有孚挛如位正当也"},{yaoci:"上九翰音登于天贞凶", xiangyue: "象曰翰音登于天何可长也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram41: {
			above: [1,0,0],
			below: [0,0,1],
			name: "小过",
			symbol:"䷽",
			guaci:"小过亨利贞可小事不可大事飞鸟遗之音不宜上宜下大吉",
			tuanyue:"彖曰小过小者过而亨也过以利贞与时行也柔得中是以小事吉也刚失位而不中是以不可大事也有飞鸟之象焉飞鸟遗之音不宜上宜下大吉上逆而下顺也",
			xiangyue:"象曰山上有雷小过君子以行过乎恭丧过乎哀用过乎俭",
			yaocis:[{yaoci:"初六飞鸟以凶", xiangyue: "象曰飞鸟以凶不可如何也"},{yaoci:"六二过其祖遇其妣不及其君遇其臣无咎", xiangyue: "象曰不及其君臣不可过也"},{yaoci:"九三弗过防之従或戕之凶", xiangyue: "象曰従或戕之凶如何也"},{yaoci:"九四无咎弗过遇之往厉必戒勿用永贞", xiangyue: "象曰弗过遇之位不当也往厉必戒终不可长也"},{yaoci:"六五密云不雨自我西郊公弋取彼在穴", xiangyue: "象曰密云不雨已上也"},{yaoci:"上六弗遇过之飞鸟离之凶是谓灾眚", xiangyue: "象曰弗遇过之已亢也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram25: {
			above: [0,1,0],
			below: [1,0,1],
			name: "既济",
			symbol:"䷾",
			guaci:"既济亨小利贞初吉终乱",
			tuanyue:"彖曰既济亨小者亨也利贞刚柔正而位当也初吉柔得中也终止则乱其道穷也",
			xiangyue:"象曰水在火上既济君子以思患而豫防之",
			yaocis:[{yaoci:"初九曳其轮濡其尾无咎", xiangyue: "象曰曳其轮义无咎也"},{yaoci:"六二妇丧其茀勿逐七日得", xiangyue: "象曰七日得以中道也"},{yaoci:"九三高宗伐鬼方三年克之小人勿用", xiangyue: "象曰三年克之惫也"},{yaoci:"六四繻有衣袽终日戒", xiangyue: "象曰终日戒有所疑也"},{yaoci:"九五东邻杀牛不如西邻之禴祭实受其福", xiangyue: "象曰东邻杀牛不如西邻之时也实受其福吉大来也"},{yaoci:"上六濡其首厉", xiangyue: "象曰濡其首厉何可久也"}],
			wenyanyue: null,
			yong: null
		},
		hexagram52: {
			above: [1,0,1],
			below: [0,1,0],
			name: "未济",
			symbol:"䷿",
			guaci:"未济亨小狐汔济濡其尾无攸利",
			tuanyue:"彖曰未济亨柔得中也小狐汔济未出中也濡其尾无攸利不续终也虽不当位刚柔应也",
			xiangyue:"象曰火在水上未济君子以慎辨物居方",
			yaocis:[{yaoci:"初六濡其尾吝", xiangyue: "象曰濡其尾亦不知极也"},{yaoci:"九二曳其轮贞吉", xiangyue: "象曰九二贞吉中以行正也"},{yaoci:"六三未济征凶利涉大川", xiangyue: "象曰未济征凶位不当也"},{yaoci:"九四贞吉悔亡震用伐鬼方三年有赏于大国", xiangyue: "象曰贞吉悔亡志行也"},{yaoci:"六五贞吉无悔君子之光有孚吉", xiangyue: "象曰君子之光其辉吉也"},{yaoci:"上九有孚于饮酒无咎濡其首有孚失是", xiangyue: "象曰饮酒濡首亦不知节也"}],
			wenyanyue: null,
			yong: null
		}
	}
}