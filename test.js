
const raidIcons = {
  final_day: 'https://raw.githubusercontent.com/minhao988/LostArk-Guide/main/kazeros.jpg',
  act4: 'fa-solid fa-skull',
  serca: 'fa-solid fa-water'
};


const allRaids = {
      act4: {
        title: '卡傑羅斯系列 四幕：毀滅堡壘',
        short: '四幕：毀滅堡壘',
        category: '卡傑羅斯討伐',
        desc: '第四幕是8人終局副本並携帶極具挑戰性的雙門遭遇戰，首領分別是Echidna初魅（第一道門）和Armoche阿莫什（第二道門）。<br> 裝備門檻（普通 1700，困難 1720），機制包含需求格擋、破壞、協同格擋以及特定的站位方式來克服破壞性的死亡。',
        theme: 'theme-act4',
        gates: {
            1: {
                name: 'Echidna初魅 1門',
                patterns: {
                    firstmeter: {
                    title: '第一階段 Meter機制',
                    list: [
                    { name: '1. 反制', desc: '\u2022 卡傑落雷后需求反制, 然後躲掉頭前高傷。', tips: '\u2022 Meter 打頭背適當躲避前後。 <br>\u2022 在TF模式下, 此需求協同反制。',isCounter: true, isDanger: true,videoId: 'BAr2CnAFJ2g' },
                    { name: '2. 鈎鎖黑球', desc: '\u2022 卡傑吸人去頭前格擋。', tips: '\u2022 在頭前抓好時機格擋或者用霸體躲在背後不用格擋。', isDanger: true, videoId: '7Gjtn-2tCXc' },
                    { name: '3. 十字', desc: '\u2022 卡傑位移隨機瞄準一位揮刀下十字', tips: '\u2022 看到卡傑出這招最安全的方式還是想辦法用空白或霸體免疫擊倒。', isDanger: true, videoId: 'L8BbG9KJJSc' }
                  ]},
                     overall: {
                    title: '綜合機制',
                    list: [
                    { name: '1. 星星', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。',tips:' \u2022 星星躲在綫和綫的外面就好。 <br>\u2022 在700内場不會有黑槍排火的情形。',isCounter: false, isDanger: true, videoId: 'WrSQp4Z-GCk' },
                    { name: '2. 圈圈', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。', tips: '\u2022 圈圈等他炸了内擴外的時候再進去裏面躲就好。<br>\u2022 在700内場不會有黑槍排火的情形。', isCounter: false, isDanger:true, videoId: 'bDJjmog6OJ8' }
              
                  ]},
                },
                mechanics: [
                    { hp: 'x360', title: '與我共舞', desc: '根據 Boss 翅膀顏色選擇對應門進入。', type: 'mech' }
                ]
            }
        }
    },
  final_day: {
        title: '卡傑羅斯系列 終幕：終結之日',
        short: '終幕： 終結之日',
        category: '卡傑羅斯討伐',
        desc: '終幕將會跟深淵大惡魔卡傑羅斯的最後決戰，首領在1-2門都是卡傑羅斯。<br> 裝備門檻（普通 1710，困難 1730, TF 1740）機制包含前面所有看過學過並需要學以致用。',
        theme: 'theme-final',
        gates: {
            1: {
                name: '深淵之主：卡傑羅斯 1門',
                youtubeId: "y8wsk0oEWWQ",
                patterns: {
                    firstmeter: {
                    title: '第一階段 Meter機制',
                    list: [
                    { name: '1. 反制', desc: '\u2022 卡傑落雷后需求反制, 然後躲掉頭前高傷。', tips: '\u2022 Meter 打頭背適當躲避前後。 <br>\u2022 在TF模式下, 此需求協同反制。',isCounter: true, isDanger: true,videoId: 'BAr2CnAFJ2g' },
                    { name: '2. 鈎鎖黑球', desc: '\u2022 卡傑吸人去頭前格擋。', tips: '\u2022 在頭前抓好時機格擋或者用霸體躲在背後不用格擋。', isDanger: true, videoId: '7Gjtn-2tCXc' },
                    { name: '3. 十字', desc: '\u2022 卡傑位移隨機瞄準一位揮刀下十字', tips: '\u2022 看到卡傑出這招最安全的方式還是想辦法用空白或霸體免疫擊倒。', isDanger: true, videoId: 'L8BbG9KJJSc' }
                  ]},
                     overall: {
                    title: '綜合機制',
                    list: [
                    { name: '1. 星星', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。',tips:' \u2022 星星躲在綫和綫的外面就好。 <br>\u2022 在700内場不會有黑槍排火的情形。',isCounter: false, isDanger: true, videoId: 'WrSQp4Z-GCk' },
                    { name: '2. 圈圈', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。', tips: '\u2022 圈圈等他炸了内擴外的時候再進去裏面躲就好。<br>\u2022 在700内場不會有黑槍排火的情形。', isCounter: false, isDanger:true, videoId: 'bDJjmog6OJ8' }
              
                  ]},
                  
                   phase1normal: {
                    title: '第一階段招式',
                    list: [
                    { name: '1. 刀劍', desc: '\u2022 卡傑揮刀 > 前方甩3條綫 > 砸後方分綫 > 砸前後', tips: '\u2022 側擊沒什麽問題 打頭背適當躲避前後', videoId: 'Q4ewwMjSQHI' },
                    { name: '2. 4槍連擊', desc: '\u2022 卡傑往前方射出兩次槍矛 > 往前方丟出大球 > 後續各小地板槍矛', tips: '\u2022 背後安全', isCounter: false, videoId: 'POgWxytwOAA' },
                    { name: '3. 右側甩左', desc: '\u2022 卡傑先往右側位攻擊， 接著攻擊左側270度。', tips: '\u2022 看到卡傑砸了右側后就跑去站右側', videoId: 'ilZzFsW1CII' },
                    { name: '4. 分身', desc: '\u2022 卡傑旁邊出現一堆分身劈隨機方向，然後卡傑會隨機劈兩次 然後往自己周圍划一圈。', tips: '\u2022 看好安全位置躲好 最後靠近卡傑的要記得躲避或者霸體。',  videoId: '3JtGtVrRlT0' },
                    { name: '5. 落雷抓人', desc: '\u2022 卡傑握球出現落雷, 接著卡傑要抓隨機一個人 (困難模式如果有人被抓到後續還會有個十字攻擊) 。', tips: '\u2022 只要看到卡傑開落雷就不要站頭。<br>\u2022 如果沒人被抓背後安全, 有人被抓的話最後就站背部側邊',  videoId: '635nAAElFSc' },
                    { name: '6. 2連格擋', desc: '\u2022 卡傑選擇一名玩家格擋2次 接著攻擊頭前扇形。', tips: '\u2022 此招式注意自己是不是有debuff負面狀態或者看身上有沒有暗器的標記, 知道是你就不要亂轉乖乖格擋。<br>\u2022 其他人不會格擋就別幫忙 只要有人失敗地上就有火。', videoId: 'ogivioxsS-U', isDanger: true },
                    { name: '7. 挥刀格挡', desc: '\u2022 卡傑揮刀后蓄力1秒后, 按格擋。', tips: '', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '8. 阿爾比恩', desc: '\u2022 卡傑退後往前戳, 旁邊會圍起來, 接著接著需求2人協同反制並排火 最後要有一位剩下的人去頭前反制。', tips: '\u2022 看到卡傑退後就不要在頭前被擊飛 <br>\u2022 通常這裏是讓輔助去做協同反制', videoId: 'Ktv7_IxW-bg', isDanger: true, isCounter: true }
                  ]},
                   phase1special: {
                    title: '第一階段 - 特殊招式 (1分鐘出一次)',
                    list: [
                    { name: '1. 白藍安全區', desc: '\u2022 卡傑丟槍在地板并且兩種火的顔色藍/白出來, 藍躲側白躲背——總共3次, 最後躲在卡傑頭前規避外圈爆炸。', tips: `\u2022 卡傑這個動作絕對會丟槍在6點鈡, 絕對不要站人(高傷)第一波炸內，第二波炸外。
                     <br>\u2022 記不住就跟隊友走, 記住3次后就躲頭前, 最好還是要學會自己看爲佳。`, videoId: 'Zz-DlbrKizI',  isDanger: true },
                    { name: '2. 雷電風暴', desc: '\u2022 卡傑丟槍在前方地板,接著會出現一堆雷和風暴。 <br>\u2022 玩家們遇到這招規避就好, 吃到有負面debuff就遠離其他人。', tips: '\u2022 不要貪心 debuff有間隔性麻痹和小爆炸圈。',  videoId: 'yXS1O_dnel8', isDanger: true },
                    { name: '3. 浮空炸圈', desc: '\u2022 卡傑浮空並丟下槍, 炸圈從内炸外 全部卡傑墜下來砸頭前270度(高傷)。', tips: '\u2022 直接出去等第一個内圈炸了再回來躲在卡傑的背。',  videoId: 'Qq3E-VVJQkc', isDanger: true }
                  ]},
                  phase700: {
                     
                    title: '700機制招式',
                    list: [
                          
                    { name: '1. 凌空墜', desc: '\u2022 卡傑朝隨機一名玩家上鈎再向下俯衝。', tips: '\u2022 此招式在地下室階段吃滿下俯衝會纍積很多能量槽。', videoId: 'HFkjS7_jvto' },
                    { name: '2. 上鈎格擋', desc: '\u2022 卡傑上鈎后接格擋。', tips: '\u2022 繞去背後可以無視格擋。', gif: 'purple_wave.gif', videoId: 'tb-pDiUhzm4' },
                    { name: '3. 迴旋格擋', desc: '\u2022 卡傑轉槍退後往前投擲迴旋槍, 槍回來插地板格擋。', tips: '\u2022 看到插地板才面對卡傑格擋',  videoId: 'aDCD1pFK8L4', isDanger: true },
                    { name: '4. 瞬移格擋', desc: '\u2022 卡傑揮劍瞬移后立刻出格擋。', tips: '\u2022 看到瞬移先下意識準備格。', videoId: 'AbCdEf12345', isJustGuard: true },
                    { name: '5. 快速反制', desc: '\u2022 卡傑瞬間出反制 失敗就會往前衝。', tips: '\u2022 基本在700機制全程留反制技等這個',  videoId: 'AbCdEf12345', isCounter: true },
                    { name: '6. 退後反制', desc: '\u2022 卡傑退後出反制 失敗就往前戳', tips: '\u2022 基本在700機制全程留反制技等這個。',  videoId: 'AbCdEf12345',  isCounter: true  },
                    { name: '7. 内場落雷', desc: '\u2022 卡傑出附近一堆落雷然後直接轉向玩家攻擊。', tips: '\u2022 基本在700機制全程留反制技等這個',  videoId: 'AbCdEf12345', isDanger: true }
                    ]},
                   basement: {
                     
                    title: '地下室招式',
                    list: [
                          
                    { name: '1. 凌空墜', desc: '\u2022 卡傑朝隨機一名玩家上鈎再向下俯衝。', tips: '\u2022 此招式只出現在700機制和地下室階段。<br>\u2022 此招式在地下室階段吃滿下俯衝會纍積很多能量槽。', videoId: 'HFkjS7_jvto' },
                       { name: '2. 生球', desc: '\u2022 卡傑生球往上鈎往前划外劍氣。', tips: '\u2022 拉球千萬不要拉在王脚下。', videoId: 'ustF5KiyR4U' },
                    { name: '3. 抓人', desc: '\u2022 跟第一階段抓人一樣 只是前置從落雷變成十字。', tips: '\u2022 看到十字就不要站頭前',  videoId: '6_0n1JwB_WI' },
                    { name: '4. 高舉丟槍', desc: '\u2022 卡傑高舉劍丟槍出現pizza攻擊，最後會挑隨機一名玩家射鐳射 。', tips: '\u2022 下意識集合貼背然後等王轉過來直接離開。', videoId: 'M6ZI2CLXgQ0'},
                    { name: '5. 協同DPS', desc: '\u2022 卡傑放槍在背後出現綫會擊倒你，第一個綫條過後需求協同反制，接著要在幾秒内把盾破掉。', tips: '\u2022 地上的綫很痛請務必躲避, 失敗就金人。',  videoId: '73E1sjZ0KI8', isCounter: true },
                    { name: '6. Pizza', desc: '\u2022 卡傑丟槍去中間自轉 躲pizza就好 最後需要兩次反制然後躲内圈。', tips: '\u2022 卡傑會在這個讓部分玩家出現減速debuff，如果有了盡量排火。',  videoId: 'Vq1Cp-TSsFI',  isCounter: true  },
                    { name: '7. 美杜莎', desc: '\u2022 卡傑舉著球讓每個人脚下都會掉5次攻擊， 結果第五下要按G格擋。', tips: '\u2022 靠近王的是快G，遠的會慢一秒',  videoId: 'W4RpEnajJBc', isDanger: true },
                      { name: '8. 火焰', desc: '\u2022 貼著卡傑邊吃火消debuff邊打癱瘓，途中會有格擋。', tips: '',  videoId: 're7kHzdgvfQ', isDanger: true },
                      { name: '9. 3連格擋', desc: '\u2022 卡傑浮空一下移動揮刀消失，接著玩家脚下會出現反重力，卡傑會3連隨機找目標格擋，失敗會有雷圈。', tips: '\u2022 這招盡可能集合排反重力后遠離人群, 然後自己看卡傑如果看你就格擋。',  videoId: '1rUoELiwE4Y', isDanger: true }
                   
                    ]},
                  phase300:{
                     title: '第三階段',
                    list: [
                          
                    { name: '1. 刹雅', desc: '\u2022 卡傑朝隨機一名玩家揮空氣刀10次, 最後一次攻擊範圍比較大, 隨後其他剛揮出去的劍氣收尾 。',tips: '', videoId: 'BcRxyziGtFw' },
                    { name: '2. 火風捲', desc: '\u2022 卡傑插地出現很多風圈把人捲起來, 接著他會退後朝一名玩家攻擊前方', tips: '\u2022 看到就立刻遠離, 這招蠻痛的。', videoId: 'vlefWZqtg_c', isDanger: true },
                    { name: '3. 上挑', desc: '\u2022 卡傑上挑接2刀划外劍氣, 地板還會出現星圖攻擊。', tips: '\u2022 看到上挑最好遠離或霸體',  videoId: 'dIkgsSYNVUM', isDanger: true },
                    { name: '4. 傳送', desc: '\u2022 卡傑浮空丟矛產生一堆炸圈消失, 出現在隨機一名玩家脚下。', tips: '\u2022 小地圖可提前知道出現位置。', videoId: 'xVplv6Or0i0' },
                    { name: '5. 藍翅膀', desc: '\u2022 卡傑後面甩出藍翅膀。',tips: '',  videoId: 'CvtokVC9EzA' },
                    { name: '6. 後條十字', desc: '\u2022 卡傑后挑浮空, 接著下來十字',tips: '',  videoId: 'W_LHcZJ8PE0' },
                    { name: '7. 癱瘓', desc: '\u2022 卡傑舉矛往下丟 出現直綫攻擊並出現癱瘓 癱瘓成功后躲左測避免被擊飛。',tips: '', videoId: 'd7WFg9mTnE8' },
                    { name: '8. 格擋', desc: '\u2022 卡傑面對其中一名玩家暴露黃光(格擋)戳並傳送在那名玩家後背扇形擊飛, 沒格擋成功會出現激光。',tips: '', videoId: 're7kHzdgvfQ'}
                   
                    ]},
                },
                
                  
                
                mechanics: [
                    { hp: '900', title: '抓人', desc: `\u2022 卡傑產生球追蹤附近玩家並抓起來，隨後出現反制。`, details: `\u2022 失敗反制，被抓的玩家們死亡。`, type: 'counter', videoId: 'DZ6vfIyhbIA' },
                    { hp: 'x700', title: '團隊癱瘓', desc: `\u2022 進入700機制會變成1打1的局面 所有玩家要在1分鐘内把卡傑的紫條癱瘓打掉, 最後從沒裂縫延伸位找出並站自己的安全區邊`, details: `\u2022 反制能提升癱瘓值 <br> \u2022 推薦旋風手雷`, type: 'stagger', videoId: 'PVcQhrsAAQs' },
                    { hp: 'x660', title: '接劍', desc: `\u2022 卡傑突然消失 真和假幻象同時出現在1/5/7/11位置 需要在真身位置接劍`, details: `\u2022 沒人接到團滅 <br>\u2022 接劍后要躲避後續鈎鎖的攻擊`, type: 'mech', videoId: 'P5A8ZnppIP4' },
                    { hp: 'x500', title: '破盾和安全區', desc: `\u2022 卡傑開鈎鎖和紅圈砸在每位玩家脚下 接著回中間進入動畫 玩家要在3輪内把卡傑的護盾破掉 <br>\u2022 期間要根據3名玩家頭上標記和地板如符合 根據700那名標記玩家的安全區去站位躲避 <br>
                        \u2022 困難模式下安全區前需要格擋中場`,
                     details: `\u2022 在普通困難模式下, 因玩家傷害極有可能在第一輪就打破盾 <br>所以普遍大家如果第一輪打不掉都會留個超絕免疫第一次傷害`, type: 'shield', videoId: '0ybcYOYbFxY' },
                    { hp: 'x380', title: '接劍/特殊聯動維', desc: `\u2022 卡傑突然丟槍矛去中場，玩家需要面對中場格擋。 <br>\u2022 隨後卡傑出現在12點，下面6點需要接劍。`, details: `\u2022 沒人接到團滅`, type: 'dps', videoId: 'eOCQUYk8ua8' },
                    { hp: 'x100', title: '困難模式限定 - 金球格擋', desc: `\u2022 全員會突然看到畫面出現一段文字，全員被上了無法格擋的負面debuff。<br>\u2022 卡傑會出華夫餅 期間場上生成最多4顆金球吃(吃了能解掉無法格擋的debuff) <br>\u2022 
                        隨後會出現一個安全區 1位有吃金球要在前面格擋卡傑，然後再出現第二個安全區再來一位去格擋 <br>\u2022 格擋成功就結束，失敗會再來一次。`, details: `\u2022 沒人格擋基本團滅 <br>\u2022 跟隊友溝通好誰先格擋`, type: 'wipe', videoId: 'xTKnNkgzdWk' }
                ]
            },
            2: {
                name: '大惡魔：卡傑羅斯 2門',
                youtubeId: "99ZhXs-SAx0", 
                patterns: {
                    firstmeter: {
                    title: '第一階段 Meter機制',
                    list: [
                    { name: '1. 反制', desc: '\u2022 卡傑落雷后需求反制, 然後躲掉頭前高傷。', tips: '\u2022 Meter 打頭背適當躲避前後。 <br>\u2022 在TF模式下, 此需求協同反制。',isCounter: true, isDanger: true,videoId: 'BAr2CnAFJ2g' },
                    { name: '2. 鈎鎖黑球', desc: '\u2022 卡傑吸人去頭前格擋。', tips: '\u2022 在頭前抓好時機格擋或者用霸體躲在背後不用格擋。', isDanger: true, videoId: '7Gjtn-2tCXc' },
                    { name: '3. 十字', desc: '\u2022 卡傑位移隨機瞄準一位揮刀下十字', tips: '\u2022 看到卡傑出這招最安全的方式還是想辦法用空白或霸體免疫擊倒。', isDanger: true, videoId: 'L8BbG9KJJSc' }
                  ]},
                     overall: {
                    title: '綜合機制',
                    list: [
                    { name: '1. 星星', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。',tips:' \u2022 星星躲在綫和綫的外面就好。 <br>\u2022 在700内場不會有黑槍排火的情形。',isCounter: false, isDanger: true, videoId: 'WrSQp4Z-GCk' },
                    { name: '2. 圈圈', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。', tips: '\u2022 圈圈等他炸了内擴外的時候再進去裏面躲就好。<br>\u2022 在700内場不會有黑槍排火的情形。', isCounter: false, isDanger:true, videoId: 'bDJjmog6OJ8' }
              
                  ]},
                },
                mechanics: [
                    { hp: 'x350', title: '反制風暴', desc: '全體 8 人必須在 6 點鐘位置站成一排進行連續 5 次完美反制。', type: 'wipe' }
                ]
            }
        }
    },
    serca: {
        title: '絕望女巫：賽爾卡',
        short: '絕望女巫：賽爾卡',
        category: '暗影襲擊系列',
        desc: '塞克利亞的牧師, 在絕望之際被暗影逮到機會附身',
        theme: 'theme-serca',
        gates: {
            1: {
                name: '賽爾卡 1門',
                 patterns: {
                    firstmeter: {
                    title: '第一階段 Meter機制',
                    list: [
                    { name: '1. 反制', desc: '\u2022 卡傑落雷后需求反制, 然後躲掉頭前高傷。', tips: '\u2022 Meter 打頭背適當躲避前後。 <br>\u2022 在TF模式下, 此需求協同反制。',isCounter: true, isDanger: true,videoId: 'BAr2CnAFJ2g' },
                    { name: '2. 鈎鎖黑球', desc: '\u2022 卡傑吸人去頭前格擋。', tips: '\u2022 在頭前抓好時機格擋或者用霸體躲在背後不用格擋。', isDanger: true, videoId: '7Gjtn-2tCXc' },
                    { name: '3. 十字', desc: '\u2022 卡傑位移隨機瞄準一位揮刀下十字', tips: '\u2022 看到卡傑出這招最安全的方式還是想辦法用空白或霸體免疫擊倒。', isDanger: true, videoId: 'L8BbG9KJJSc' }
                  ]},
                     overall: {
                    title: '綜合機制',
                    list: [
                    { name: '1. 星星', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。',tips:' \u2022 星星躲在綫和綫的外面就好。 <br>\u2022 在700内場不會有黑槍排火的情形。',isCounter: false, isDanger: true, videoId: 'WrSQp4Z-GCk' },
                    { name: '2. 圈圈', desc: '\u2022 每卡傑的槍buff到5層就會出一次星星或者圈圈, 根據圖形去躲避 頭上有黑槍就排火。', tips: '\u2022 圈圈等他炸了内擴外的時候再進去裏面躲就好。<br>\u2022 在700内場不會有黑槍排火的情形。', isCounter: false, isDanger:true, videoId: 'bDJjmog6OJ8' }
              
                  ]},
                 },
                mechanics: [
                    { hp: '全程', title: '氧氣瓶系統', desc: '氧氣歸零會持續扣血，尋找泡泡點回氧。', type: 'warning' }
                ]
            },
            2: {
                  name: '暗影烏鴉 2門',
                  patterns: {
                    firstmeter: {
                    title: '第一階段 Meter機制',
                    list: [
                    { name: '1. 反制', desc: '\u2022 卡傑落雷后需求反制, 然後躲掉頭前高傷。', tips: '\u2022 Meter 打頭背適當躲避前後。 <br>\u2022 在TF模式下, 此需求協同反制。',isCounter: true, isDanger: true,videoId: 'BAr2CnAFJ2g' },
                    { name: '2. 鈎鎖黑球', desc: '\u2022 卡傑吸人去頭前格擋。', tips: '\u2022 在頭前抓好時機格擋或者用霸體躲在背後不用格擋。', isDanger: true, videoId: '7Gjtn-2tCXc' },
                    { name: '3. 十字', desc: '\u2022 卡傑位移隨機瞄準一位揮刀下十字', tips: '\u2022 看到卡傑出這招最安全的方式還是想辦法用空白或霸體免疫擊倒。', isDanger: true, videoId: 'L8BbG9KJJSc' }
                  ]},
                  },
                  mechanics: [
                      { hp: '全程', title: '氧氣瓶系統', desc: '氧氣歸零會持續扣血，尋找泡泡點回氧。', type: 'warning' }
                  ]
              }
        }
    }
};

let currentRaidId = 'act4';
let expandedRaidId = null; // 記錄目前展開的 raid submenu

function getIcon(type) {
    const icons = {
        wipe: '<i class="fas fa-skull-crossbones text-red-500"></i>',
        mech: '<i class="fas fa-cog text-yellow-400"></i>',
        warning: '<i class="fas fa-exclamation-circle text-orange-400"></i>',
        dps: '<i class="fas fa-fire text-orange-600"></i>',
        survival: '<i class="fas fa-heartbeat text-green-400"></i>',
        // 👇 新增常用類型
        counter:   '<i class="fas fa-hand-fist text-sky-400"></i>',        // 反制
        stagger:   '<i class="fas fa-gauge-high text-purple-400"></i>',    // 破防 / 擊倒
        pattern:   '<i class="fas fa-diagram-project text-indigo-400"></i>', // 固定模式
        movement:  '<i class="fas fa-arrows-up-down-left-right text-blue-400"></i>', // 走位
        positioning:'<i class="fas fa-location-crosshairs text-cyan-400"></i>', // 站位
        debuff:    '<i class="fas fa-virus text-lime-400"></i>',           // 減益
        buff:      '<i class="fas fa-arrow-trend-up text-emerald-400"></i>', // 增益
        cleanse:   '<i class="fas fa-soap text-teal-400"></i>',            // 淨化
        shield:    '<i class="fas fa-shield-halved text-slate-300"></i>',   // 護盾
        timer:     '<i class="fas fa-hourglass-half text-amber-400"></i>',  // 倒數
        puzzle:    '<i class="fas fa-puzzle-piece text-fuchsia-400"></i>'  // 解謎
    };
    return icons[type] || '<i class="fas fa-info-circle text-gray-400"></i>';
}


function initSidebar() {
    const container = document.getElementById('sidebar-content');
    if (!container) return;

    // 清空舊元素，保留 gate-submenu
    Array.from(container.children).forEach(child => {
        if (child.id !== 'gate-submenu') child.remove();
    });

    const groupedRaids = groupRaidsByCategory();

    Object.entries(groupedRaids).forEach(([category, raids]) => {
        // 生成分類標題
        let catTitle = document.createElement('div');
        catTitle.className = 'sidebar-category px-6 py-2 text-xs font-bold text-slate-500 uppercase';
        catTitle.dataset.fullName = category;
        catTitle.innerText = category;
        container.appendChild(catTitle);

        // 🔹 category click 只切 raid
        catTitle.addEventListener('click', () => {
            const raidId = raids[0]?.id;
            if (!raidId) return;
            switchRaid(raidId);
        });

        // 生成 raid 按鈕 + submenu
     raids.forEach(raid => {
    const btn = document.createElement('button');
    btn.id = `btn-${raid.id}`;
    btn.className = 'sidebar-btn w-full flex items-center gap-2 px-6 py-3 text-slate-400 hover:bg-white/5 hover:text-white transition-all';
    btn.innerHTML = raidIcons[raid.id].startsWith('http')
        ? `<img src="${raidIcons[raid.id]}" class="sidebar-icon w-6 h-6 object-contain" />
           <span class="sidebar-text font-medium">${raid.short}</span>`
        : `<i class="${raidIcons[raid.id]} sidebar-icon"></i>
           <span class="sidebar-text font-medium">${raid.short}</span>`;
    btn.onclick = () => switchRaid(raid.id);
    container.appendChild(btn);

    // 生成空 submenu
    const submenu = document.createElement('div');
    submenu.className = 'gate-submenu-container pl-6 collapsed';
    submenu.id = `gate-submenu-${raid.id}`;
    container.appendChild(submenu);

    // 假設 submenu 裡有多個項目
    raid.submenu?.forEach(sub => {
        const subBtn = document.createElement('button');
        subBtn.className = 'submenu-btn w-full px-4 py-2 text-slate-400 hover:text-white hover:bg-white/5';
        subBtn.innerText = sub.name;
        subBtn.onclick = () => {
            switchRaid(raid.id, sub.id); // 切到 raid + submenu
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.add('sidebar-collapsed');
            }
          if ('scrollBehavior' in document.documentElement.style) {
    subBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
} else {
    subBtn.scrollIntoView(true);
}
        };
        submenu.appendChild(subBtn);
    });
});

    });
}


// ================== 選擇 raid ==================
function selectRaid(raidId) {
    if (!allRaids[raidId]) return;

    currentRaidId = raidId;
    const raid = allRaids[raidId];

    // 更新標題 / 描述 / breadcrumb
    document.getElementById('raid-title').innerHTML = raid.title;
    document.getElementById('raid-desc').innerHTML = raid.desc;
    document.getElementById('mobile-title').innerHTML = raid.short;
    document.getElementById('breadcrumb').innerHTML = raid.short;
  const mainBody = document.getElementById('main-body');
if (!mainBody) return;

applyTheme(raid.theme);

// 桌面版才需要 min-h-screen
if (window.innerWidth >= 768) {
  mainBody.classList.add('min-h-screen');
}

    // 生成 gate tabs
    const tabsContainer = document.getElementById('gate-tabs');
    tabsContainer.innerHTML = '';
    Object.keys(raid.gates).forEach(gId => {
        const btn = document.createElement('button');
        btn.id = `gate-tab-${gId}`;
        btn.className = 'gate-btn px-6 py-2.5 rounded-lg font-bold transition-all duration-300 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white';
        btn.innerText = `關卡 G${gId}`;
        btn.onclick = () => switchGate(parseInt(gId));
        tabsContainer.appendChild(btn);
    });

    // 預設第一關
    const firstGate = raid.gates[Object.keys(raid.gates)[0]];
    renderGateSubmenu(firstGate, raidId);
    switchGate(Object.keys(raid.gates)[0]);
}

function applyTheme(theme) {
  const app = document.getElementById('app');

  app.classList.remove(
    'theme-act4',
    'theme-final',
    'theme-serca'
  );

  app.classList.add(theme);
}
// ================== 切換 gate ==================
function switchGate(gateId) {
  const raid = allRaids[currentRaidId];
  const gate = raid.gates[gateId];
  if (!gate) return;

  document.querySelectorAll('.gate-btn')
    .forEach(btn => btn.classList.remove('active'));
  document.getElementById(`gate-tab-${gateId}`)?.classList.add('active');

  renderGateContent(gate);
  renderGateSubmenu(gate, currentRaidId);
}

function groupRaidsByCategory() {
    const groups = {};
    Object.entries(allRaids).forEach(([id, raid]) => {
        const cat = raid.category || '未分類';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push({ id, ...raid });
    });
    return groups;
}

function getShortName(name) {
    // 取中文前兩字
    const chineseChars = name.match(/[\u4e00-\u9fff]/g) || [];
    let shortName = chineseChars.slice(0, 2).join('');

    // 取英文單字首字母
    const englishWords = name.match(/[A-Za-z]+/g) || [];
    shortName += englishWords.map(w => w[0].toUpperCase()).join('');

    return shortName || name; // 防止空
}

function updateSidebarCategories(sidebarCollapsed) {
    const categories = document.querySelectorAll('.sidebar-category');

    categories.forEach(cat => {
        const fullName = cat.dataset.fullName;

        if (sidebarCollapsed) {
            // 使用縮寫
            const shortName = getShortName(fullName);
            cat.innerHTML = `<span class="sidebar-cat-text">${shortName}</span>`;
            cat.title = fullName; // 滑鼠 hover 顯示完整名稱

            cat.style.whiteSpace = 'nowrap';
            cat.style.overflow = 'visible';
        } else {
            // 展示完整名稱
            cat.innerHTML = `<span class="sidebar-cat-text">${fullName}</span>`;
            cat.title = '';
            cat.style.whiteSpace = '';
            cat.style.overflow = '';
        }
    });
}


function switchRaid(raidId) {
    const sidebar = document.getElementById('sidebar');
    const isCollapsed = sidebar.classList.contains('sidebar-collapsed');

    // 🔒 桌面收合：只切 raid，不碰 submenu
    if (isCollapsed) {
        expandedRaidId = null;

        document.querySelectorAll('.gate-submenu-container').forEach(el => {
            el.classList.add('collapsed');
            el.innerHTML = '';
        });

        document.querySelectorAll('.sidebar-btn')
            .forEach(b => b.classList.remove('active'));

        document.getElementById(`btn-${raidId}`)?.classList.add('active');
        selectRaid(raidId);
        return;
    }

    // ===== sidebar 展開 =====
    const currentSub = document.getElementById(`gate-submenu-${raidId}`);
    if (!currentSub) return;

    const isSame = expandedRaidId === raidId;

    document.querySelectorAll('.gate-submenu-container').forEach(el => {
        el.classList.add('collapsed');
        el.innerHTML = '';
    });

    document.querySelectorAll('.sidebar-btn')
        .forEach(b => b.classList.remove('active'));

    if (!isSame) {
        expandedRaidId = raidId;
        currentSub.classList.remove('collapsed');
        document.getElementById(`btn-${raidId}`)?.classList.add('active');
        selectRaid(raidId);
    } else {
        expandedRaidId = null;
    }
}



// ================== 渲染 gate 內容 ==================
function renderGateContent(gate) {
    const container = document.getElementById('gate-content');
    if (!container) return;
// src="https://www.youtube.com/embed/${gate.youtubeId}"
  let html = '';


if (gate.youtubeId) {
  html += `
<div class="main-video rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl relative mb-8" data-video="${gate.youtubeId}">
    <div class="video-overlay absolute inset-0 flex items-center justify-center
         bg-slate-900/80 cursor-pointer transition-opacity duration-300 z-10">
      <div class="text-center pointer-events-none">
        <i class="fab fa-youtube text-6xl text-red-600 mb-4"></i>
        <p class="text-slate-200 font-bold">
          點擊播放全流程影片
        </p>
      </div>
    </div>
</div>
`;
}
html += `
   
        <section id="section-mechanics" data-menu="mechanics">
            <h3 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                <span class="w-1.5 h-8 bg-yellow-500 rounded-full"></span>
                核心機制詳解 (Major Mechanics)
            </h3>
            <div class="space-y-6">
                ${gate.mechanics?.map((m, i) => `
                    <div id="mech-${i}" class="info-card rounded-xl p-6 shadow-lg border-l-4 ${m.type === 'wipe' ? 'border-l-red-600' : 'border-l-yellow-500'} break-words">
                        <div class="flex flex-col sm:flex-row gap-4">
                            <div class="flex-shrink-0 w-full sm:w-auto">
                                <div class="flex items-center gap-2 mb-2">
                                    <div class="text-2xl sm:text-3xl font-black text-yellow-500">${m.hp}</div>
                                    <div class="px-2 py-0.5 rounded bg-slate-800 text-[12px] font-bold text-center uppercase tracking-tighter">${m.type}</div>
                                </div>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 mb-2">
                                    ${getIcon(m.type)}
                                    <h4 class="text-xl sm:text-2xl font-bold text-slate-100">${m.title}</h4>
                                </div>
                                <p class="text-slate-300 text-sm sm:text-base leading-relaxed break-words mb-4">${m.desc}</p>
                                ${m.details ? `<div class="bg-yellow-950/30 border border-yellow-500/30 rounded-lg p-4 mb-4">
                                    <p class="text-yellow-400 font-black uppercase mb-1 text-[11px] sm:text-[12px] tracking-wider">提示</p>
                                    <p class="text-slate-300 text-sm leading-relaxed">${m.details}</p>
                                </div>` : ''}
                                ${m.videoId ? `<div class="relative w-full aspect-video sm:w-[520px] lg:w-[640px] sm:h-[292px] lg:h-[360px] cursor-pointer group bg-black/40 overflow-hidden rounded-lg" data-video="${m.videoId}">
                                    <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <i class="fab fa-youtube text-5xl text-red-600 opacity-90"></i>
                                        <span class="mt-2 video-title text-slate-300">${m.title} 機制</span>
                                    </div>
                                </div>` : ''}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <section id="section-patterns" data-menu="patterns">
            <h3 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                <span class="section-bar"></span>
                招式動作解析 (Patterns Guide)
            </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
 ${gate.patterns
  ? Object.entries(gate.patterns).map(([phaseKey, phase]) => `
    
    <div class="col-span-full">
      <h4 class="text-xl font-bold text-slate-200 mt-10 mb-4 flex items-center gap-3">
        <span class="h-4 w-1 bg-yellow-400 rounded"></span>
        ${phase.title}
      </h4>
    </div>

    ${phase.list.map((p, i) => `
      <div id="pattern-${phaseKey}-${i}" 
        class="pattern-card 
          ${p.isDanger ? 'danger' : ''} 
          ${p.isCounter ? 'counter' : ''} 
          ${p.isJustGuard ? 'justguard' : ''} 
          rounded-2xl">

        <div class="relative w-full aspect-video cursor-pointer group bg-black/40 overflow-hidden"
             data-video="${p.videoId || ''}">
          <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <i class="fab fa-youtube text-6xl text-red-600 opacity-80"></i>
            <span class="mt-2 video-title text-slate-300">
              ${p.name} 招式影片
            </span>
          </div>
        </div>

        <div class="p-5 text-[13px] md:text-[14px] lg:text-[15px]">
          <h4 class="pattern-title flex items-center gap-2">
            ${p.isDanger ? '<span class="pattern-danger-badge">DANGER</span>' : ''}
            ${p.isCounter ? '<span class="pattern-counter-badge">COUNTER</span>' : ''}
            ${p.isJustGuard ? '<span class="pattern-justguard-badge">JUST GUARD</span>' : ''}
            ${p.name}
          </h4>

          <p class="text-slate-300 mb-4 min-h-[32px]">
            ${p.desc}
          </p>

          <div class="bg-blue-950/30 border border-blue-500/30 rounded-lg p-3">
            <p class="text-blue-400 font-black uppercase mb-1 text-[11px] md:text-[12px]">
              應對方案
            </p>
            <p class="text-slate-400 italic text-[11px] md:text-[12px]">
              ${p.tips}
            </p>
          </div>
        </div>
      </div>
    `).join('')}

  `).join('')
  : ''
}
</div>
        </section>
    `;

    container.innerHTML = html;

    // 綁定影片點擊
    document.querySelectorAll('[data-video]').forEach(el => {
        el.addEventListener('click', function() {
            const videoId = this.dataset.video;
            if (!videoId) return;
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
            iframe.className = 'absolute inset-0 w-full h-full';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });
    // 主影片點擊播放
    document.querySelectorAll('.main-video').forEach(wrapper => {
        const overlay = wrapper.querySelector('.video-overlay');
        const videoId = wrapper.dataset.video;
        if (!videoId) return;
    
        overlay.addEventListener('click', () => {
            // 直接把 wrapper 內容換成 iframe
            wrapper.innerHTML = `
                <iframe
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1"
                    class="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            `;
        });
    });
}



function renderGateSubmenu(gate, raidId) {
    const container = document.getElementById(`gate-submenu-${raidId}`);
    if (!container) return;

    let html = `<div class="px-4 py-2 text-xs font-bold text-slate-500 uppercase">${gate.name}</div>`;

    // Mechanics
    if (gate.mechanics?.length) {
        html += `<div class="submenu-group">`;
        html += `<button class="submenu-btn phase-toggle">核心機制</button>`;
        html += `<div class="submenu-phase-container">`;
        html += gate.mechanics.map((m,i) => `
            <button class="submenu-sub" data-target="mech-${i}">${m.hp} ${m.title}</button>
        `).join('');
        html += `</div></div>`;
    }

    // Patterns 分 phase
    if (gate.patterns) {
        html += `<div class="submenu-group mt-2">`;

        Object.entries(gate.patterns).forEach(([phaseKey, phase]) => {
            html += `
            <button class="submenu-btn phase-toggle">${phase.title}</button>
            <div class="submenu-phase-container">
              ${phase.list.map((p,i) => `
                <button class="submenu-sub" data-target="pattern-${phaseKey}-${i}">${p.name}</button>
              `).join('')}
            </div>`;
        });

        html += `</div>`;
    }

    container.innerHTML = html;

    // 綁定 submenu 按鈕滾動
    container.querySelectorAll('[data-target]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // 綁定 phase toggle 折疊
    container.querySelectorAll('.phase-toggle').forEach(btn => {
        const phaseContainer = btn.nextElementSibling;
        if (!phaseContainer) return;
        btn.addEventListener('click', () => {
            phaseContainer.classList.toggle('collapsed');
        });
    });
}
  
function initScrollSpy() {
    const sidebarContainer = document.getElementById('sidebar-content');
    if (!sidebarContainer) return;

    let scrollSpySections = [];
    let scrollSpyBtns = [];

    // 重新抓取目前畫面上的 section & sidebar 按鈕
    function updateSpyElements() {
        scrollSpySections = Array.from(
            document.querySelectorAll('[data-menu], [id^="mech-"], [id^="pattern-"]')
        );

        scrollSpyBtns = Array.from(
            sidebarContainer.querySelectorAll('.submenu-btn, .submenu-sub')
        );
    }

    updateSpyElements();

    function onScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        let currentId = null;

        // 依照畫面由上往下找最後一個「已經超過頂部」的 section
        for (let i = 0; i < scrollSpySections.length; i++) {
            const section = scrollSpySections[i];
            const offsetTop =
                section.getBoundingClientRect().top + scrollY - 140; // header 偏移

            if (scrollY >= offsetTop) {
                currentId = section.id || section.dataset.menu;
            }
        }

        // 🔹 若最後一個 section 已進入視窗，強制指定為 active
        const lastSection = scrollSpySections[scrollSpySections.length - 1];
        if (lastSection) {
            const rect = lastSection.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                currentId = lastSection.id || lastSection.dataset.menu;
            }
        }

        if (!currentId) return;

        // sidebar 高亮處理
        scrollSpyBtns.forEach(btn => btn.classList.remove('active'));

        const activeBtn = sidebarContainer.querySelector(
            `.submenu-btn[data-target="${currentId}"], 
             .submenu-sub[data-target="${currentId}"]`
        );

        if (activeBtn) {
            activeBtn.classList.add('active');

            // 🔹 確保 activeBtn 在 sidebar 可視範圍內（避免抖動）
            const sidebarRect = sidebarContainer.getBoundingClientRect();
            const btnRect = activeBtn.getBoundingClientRect();

            if (btnRect.top < sidebarRect.top || btnRect.bottom > sidebarRect.bottom) {
                sidebarContainer.scrollTo({
                    top:
                        sidebarContainer.scrollTop +
                        (btnRect.top - sidebarRect.top) -
                        sidebarRect.height / 2 +
                        btnRect.height / 2,
                    behavior: 'smooth'
                });
            }
        }
    }

    // 🔹 window scroll
    window.addEventListener('scroll', onScroll, { passive: true });

    // 🔹 sidebar 點擊同步高亮
    sidebarContainer.addEventListener('click', e => {
        const btn = e.target.closest('[data-target]');
        if (!btn) return;

        const targetId = btn.dataset.target;
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        scrollSpyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 手機版自動收回 sidebar
        if (window.innerWidth < 768) {
            document.getElementById('sidebar')?.classList.remove('mobile-open');
            const overlay = document.getElementById('sidebar-overlay');
            if (overlay) overlay.style.display = 'none';
        }
    });

    // 🔹 submenu / gate 變動時自動重新抓 section
 let spyTimer;
const observer = new MutationObserver(() => {
    clearTimeout(spyTimer);
    spyTimer = setTimeout(() => {
        updateSpyElements();
        onScroll();
    }, 50);
});

    observer.observe(document.getElementById('main-body'), {
        childList: true,
        subtree: true
    });
}





document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
  
    expandedRaidId = currentRaidId;
    document.getElementById(`gate-submenu-${currentRaidId}`)?.classList.remove('collapsed');
    selectRaid(currentRaidId);

    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarToggle = document.getElementById('sidebar-toggle');

  // 手機 + 桌面通用
menuToggle?.addEventListener('click', () => {
    if (window.innerWidth < 768) {
        // 手機版漢堡：開關 sidebar
        const isOpen = sidebar.classList.toggle('mobile-open');
        sidebarOverlay.style.display = isOpen ? 'block' : 'none';
    } else {
        // 桌面版收合
        sidebar.classList.toggle('sidebar-collapsed');
        document.getElementById('main-body')?.classList.toggle('sidebar-collapsed');

        sidebarToggle.innerHTML = sidebar.classList.contains('sidebar-collapsed')
            ? '<i class="fas fa-angle-right"></i>'
            : '<i class="fas fa-angle-left"></i>';
    }
});

// overlay 點擊關閉 (手機)
sidebarOverlay?.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    sidebarOverlay.style.display = 'none';
});

// 🔹 桌面版收合 / 展開 < 按鈕
sidebarToggle?.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        // 桌面版收合
        const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');
        document.getElementById('main-body')?.classList.toggle('sidebar-collapsed');

        // icon 切換
        sidebarToggle.innerHTML = isCollapsed
            ? '<i class="fas fa-angle-right"></i>'
            : '<i class="fas fa-angle-left"></i>';

        // 更新 sidebar 文字（短名 / 全名）
        updateSidebarCategories(isCollapsed);

        // submenu 處理
        document.querySelectorAll('.gate-submenu-container').forEach(el => {
            if (isCollapsed) {
                el.classList.add('collapsed');
            } else if (expandedRaidId === el.id.replace('gate-submenu-', '')) {
                el.classList.remove('collapsed');
            }
        });
    } else {
        // 🔹 手機版也能用 < 關掉 sidebar
        sidebar.classList.remove('mobile-open');
        sidebarOverlay.style.display = 'none';
    }
});



 initScrollSpy();
  

let isScrolling;
document.getElementById('main-body').addEventListener('scroll', () => {
    sidebar.classList.add('scrolling');

    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        sidebar.classList.remove('scrolling');
    }, 100); // 滾動停止 100ms 移除
});



document.querySelectorAll('.phase-title').forEach(title => {
  title.addEventListener('click', () => {
    const targetId = title.dataset.collapse;
    const content = document.getElementById(targetId);
    if (!content) return;

    const chevron = title.querySelector('.fa-chevron-down');

    if (content.classList.contains('open')) {
      content.classList.remove('open');
      content.classList.add('collapsed');
      chevron.classList.remove('rotate');
    } else {
      content.classList.add('open');
      content.classList.remove('collapsed');
      chevron.classList.add('rotate');
    }
  });
});  
  

});
