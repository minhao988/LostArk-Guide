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
        theme: 'raid-gradient-act4',
        gates: {
            1: {
                name: 'Echidna初魅 1門',
                patterns: [
                    { name: '混沌踐踏', desc: '全場地板變紅，隨機出現三處安全區。', tips: '注意 Boss 踩地第三下是全場擊飛，必須在安全區內。', gif: 'stomp.gif' }
                ],
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
        theme: 'raid-gradient-final',
        gates: {
            1: {
                name: '深淵之主：卡傑羅斯 1門',
                youtubeId: "y8wsk0oEWWQ",
                patterns: [
                    { name: '1. 刀劍', desc: '\u2022 卡傑揮刀 > 前方甩3條綫 > 砸後方分綫 > 砸前後', tips: '\u2022 側擊沒什麽問題 打頭背適當躲避前後', videoId: 'Q4ewwMjSQHI' },
                    { name: '2. 4槍連擊', desc: '\u2022 卡傑往前方射出兩次槍矛 > 往前方丟出大球 > 後續各小地板槍矛', tips: '\u2022 背後安全', isCounter: false, videoId: 'POgWxytwOAA' },
                    { name: '3. 右側甩左', desc: '\u2022 卡傑先往右側位攻擊， 接著攻擊左側270度。', tips: '\u2022 看到卡傑砸了右側后就跑去站右側', videoId: 'ilZzFsW1CII' },
                    { name: '4. 分身', desc: '\u2022 卡傑旁邊出現一堆分身劈隨機方向，然後卡傑會隨機劈兩次 然後往自己周圍划一圈。', tips: '\u2022 看好安全位置躲好 最後靠近卡傑的要記得躲避或者霸體。',  videoId: '3JtGtVrRlT0' },
                    { name: '5. 落雷抓人', desc: '\u2022 卡傑握球出現落雷, 接著卡傑要抓隨機一個人 (困難模式如果有人被抓到後續還會有個十字攻擊) 。', tips: '\u2022 只要看到卡傑開落雷就不要站頭。<br>\u2022 如果沒人被抓背後安全, 有人被抓的話最後就站背部側邊',  videoId: '635nAAElFSc' },
                    { name: '6. 阿爾比恩', desc: '\u2022 卡傑退後往前戳, 旁邊會圍起來, 接著接著需求2人協同反制並排火 最後要有一位剩下的人去頭前反制。', tips: '\u2022 看到卡傑退後就不要在頭前被擊飛 <br>\u2022 通常這裏是讓輔助去做協同反制', videoId: 'Ktv7_IxW-bg', isDanger: true, isCounter: true },
                    { name: '7. 白藍安全區', desc: '\u2022 卡傑丟槍在地板并且兩種火的顔色藍/白出來, 藍躲側白躲背——總共3次, 最後躲在卡傑頭前規避外圈爆炸。', tips: `\u2022 卡傑這個動作絕對會丟槍在6點鈡, 絕對不要站人(高傷)第一波炸內，第二波炸外。
                     <br>\u2022 記不住就跟隊友走, 記住3次后就躲頭前, 最好還是要學會自己看爲佳。`, videoId: 'Zz-DlbrKizI',  isDanger: true },
                    { name: '8. 雷電風暴', desc: '\u2022 卡傑丟槍在前方地板,接著會出現一堆雷和風暴。 <br>\u2022 玩家們遇到這招規避就好, 吃到有負面debuff就遠離其他人。', tips: '\u2022 不要貪心 debuff有間隔性麻痹和小爆炸圈。',  videoId: 'yXS1O_dnel8', isDanger: true },
                    { name: '9. 浮空炸圈', desc: '\u2022 卡傑浮空並丟下槍, 炸圈從内炸外 全部卡傑墜下來砸頭前270度(高傷)。', tips: '\u2022 直接出去等第一個内圈炸了再回來躲在卡傑的背。',  videoId: 'Qq3E-VVJQkc', isDanger: true },
                    { name: '10. 凌空墜', desc: '\u2022 卡傑朝隨機一名玩家上鈎再向下俯衝。', tips: '\u2022 此招式只出現在700機制和地下室階段。<br>\u2022 此招式在地下室階段吃滿下俯衝會纍積很多能量槽。', videoId: 'HFkjS7_jvto' },
                    { name: '11. 上鈎格擋', desc: '\u2022 卡傑上鈎后接格擋。', tips: '\u2022 此招式只出現在700機制 <br>\u2022 繞去背後可以無視格擋。', gif: 'purple_wave.gif', videoId: 'tb-pDiUhzm4' },
                    { name: '12. 迴旋格擋', desc: '\u2022 卡傑轉槍退後往前投擲迴旋槍, 槍回來插地板格擋。', tips: '\u2022 此招式只出現在700機制 <br><u2022> 看到插地板才面對卡傑格擋',  videoId: 'aDCD1pFK8L4', isDanger: true },
                    { name: '13. 瞬移格擋', desc: '\u2022 卡傑揮劍瞬移后立刻出格擋。', tips: '\u2022 此招式只出現在700機制。<br>\u2022 看到瞬移先下意識準備格。', videoId: 'AbCdEf12345', isJustGuard: true },
                    { name: '14. 快速反制', desc: '\u2022 卡傑瞬間出反制 失敗就會往前衝。', tips: '\u2022 此招式只出現在700機制。<br>\u2022 基本在700機制全程留反制技等這個',  videoId: 'AbCdEf12345', isCounter: true },
                    { name: '15. 退後反制', desc: '\u2022 卡傑退後出反制 失敗就往前戳', tips: '\u2022 此招式只出現在700機制。<br>\u2022 基本在700機制全程留反制技等這個。',  videoId: 'AbCdEf12345',  isCounter: true  },
                    { name: '16. 内場落雷', desc: '\u2022 卡傑出附近一堆落雷然後直接轉向玩家攻擊。', tips: '\u2022 此招式只出現在700機制。<br>\u2022 基本在700機制全程留反制技等這個',  videoId: 'AbCdEf12345', isDanger: true },
                    { name: '17. 2連格擋', desc: '\u2022 卡傑選擇一名玩家格擋2次 接著攻擊頭前扇形。', tips: '\u2022 此招式注意自己是不是有debuff負面狀態或者看身上有沒有暗器的標記, 知道是你就不要亂轉乖乖格擋。<br>\u2022 其他人不會格擋就別幫忙 只要有人失敗地上就有火。', videoId: 'ogivioxsS-U', isDanger: true },
                    { name: '18. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '19. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '20. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '21. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '22. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '23. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '24. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '25. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '26. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' },
                    { name: '27. 紫圈擴散', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' }
                ],
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
                patterns: [
                    { name: '1. 魔皇紅黑波', desc: 'Boss 手中出現紅/黑兩種能量旋渦。', tips: '紅內安全，黑外安全。觀察 Boss 腳下旋轉的光環顏色。', gif: 'red_black.gif' },
                    { name: '2. 魔箭雨', desc: 'Boss 向天空射箭，隨後場地落下大量帶有「眩暈」效果的箭矢。', tips: '地面的紅圈會預告落點，箭雨有兩波，第一波結束後不要立刻回位。', gif: 'demon_rain.gif' },
                    { name: '3. 抓人連打', desc: 'Boss 伸出手向前抓取。若抓到玩家，會進行連續重摔。', tips: '看到 Boss 手向後蓄力並發出黑煙時，立刻向側邊位移。被抓者需要隊友給予癱瘓。', gif: 'grab_slam.gif' }
                ],
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
        desc: '女巫描述待定，僅確認爲塞克利亞的牧師角色',
        theme: 'raid-gradient-serca',
        gates: {
            1: {
                name: '賽爾卡 1門',
                patterns: [
                    { name: '1. 急流噴射', desc: 'Boss 向隨機玩家噴射高速水柱，帶有強制擊退。', tips: '若背靠地圖邊緣會被推入海中秒殺。', gif: 'water_jet.gif' }
                ],
                mechanics: [
                    { hp: '全程', title: '氧氣瓶系統', desc: '氧氣歸零會持續扣血，尋找泡泡點回氧。', type: 'warning' }
                ]
            },
            2: {
                  name: '賽爾卡 2門',
                  patterns: [
                      { name: '1. 急流噴射', desc: 'Boss 向隨機玩家噴射高速水柱，帶有強制擊退。', tips: '若背靠地圖邊緣會被推入海中秒殺。', gif: 'water_jet.gif' }
                  ],
                  mechanics: [
                      { hp: '全程', title: '氧氣瓶系統', desc: '氧氣歸零會持續扣血，尋找泡泡點回氧。', type: 'warning' }
                  ]
              }
        }
    }
};
let currentScrollSpy = null;
let currentRaidId = 'final_day';
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

    // 先清空
  Array.from(container.children).forEach(child => {
    if (!child.id.startsWith('gate-submenu-')) child.remove();
});

    const groupedRaids = groupRaidsByCategory();

    Object.entries(groupedRaids).forEach(([category, raids]) => {
        // 生成分類標題
        let catTitle = document.createElement('div');
        catTitle.className = 'sidebar-category px-6 py-2 text-xs font-bold text-slate-500 uppercase';
        catTitle.dataset.fullName = category;
        catTitle.innerText = category;
        container.appendChild(catTitle);
      

catTitle.addEventListener('click', () => {
    if (!raids.length) return;

    const firstRaidId = raids[0].id;

    // 切換 raid
    switchRaid(firstRaidId);

    // 等 submenu 渲染完成再滾動到第一個 gate
    setTimeout(() => {
        const submenu = document.getElementById(`gate-submenu-${firstRaidId}`);
        if (!submenu) return;
        const firstGateBtn = submenu.querySelector('.submenu-btn, .submenu-sub');
        if (!firstGateBtn) return;

        // 計算正確 scrollTop
        const mainBody = document.getElementById('main-body');
        const topPos = firstGateBtn.getBoundingClientRect().top + mainBody.scrollTop - 120;

        mainBody.scrollTo({
            top: topPos,
            behavior: 'smooth'
        });

        // 樣式 active
        submenu.querySelectorAll('.submenu-btn, .submenu-sub').forEach(b => b.classList.remove('active'));
        firstGateBtn.classList.add('active');
    }, 50); // 與 renderGateSubmenu setTimeout 對齊
});
        // 生成 raid 按鈕
        raids.forEach(raid => {
            const btn = document.createElement('button');
            btn.id = `btn-${raid.id}`;
            btn.className = 'sidebar-btn w-full flex items-center gap-2 px-6 py-3 text-slate-400 hover:bg-white/5 hover:text-white transition-all';

            // 判斷是圖片還是 Font Awesome
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
    document.getElementById('main-body').className =
        raid.theme + (window.innerWidth >= 768 ? ' min-h-screen transition-all duration-500' : ' transition-all duration-500');

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






// ================== 切換 raid (展開/收合) ==================
function switchRaid(raidId) {
const sidebarEl = document.getElementById('sidebar');
const isCollapsed = sidebarEl.classList.contains('sidebar-collapsed');

  // 🔥 收合狀態：只切內容，不動 submenu
  if (isCollapsed) {
    expandedRaidId = raidId;
    selectRaid(raidId);
    return;
  }

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
    ${gate.patterns?.map((p,i) => `
        <div id="pattern-${i}" class="pattern-card 
            ${p.isDanger ? 'danger' : ''} 
            ${p.isCounter ? 'counter' : ''} 
            ${p.isJustGuard ? 'justguard' : ''} 
            rounded-2xl">
            
            <div class="relative w-full aspect-video cursor-pointer group bg-black/40 overflow-hidden" data-video="${p.videoId || ''}">
                <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <i class="fab fa-youtube text-6xl text-red-600 opacity-80"></i>
                    <span class="mt-2 video-title text-slate-300">${p.name}招式影片</span>
                </div>
            </div>
            
            <div class="p-5 text-[13px] md:text-[14px] lg:text-[15px]">
                <h4 class="pattern-title flex items-center gap-2">
                    ${p.isDanger ? '<span class="pattern-danger-badge">DANGER</span>' : ''}
                    ${p.isCounter ? '<span class="pattern-counter-badge">COUNTER</span>' : ''}
                    ${p.isJustGuard ? '<span class="pattern-justguard-badge">JUST GUARD</span>' : ''}
                    ${p.name}
                </h4>
                
                <p class="text-slate-300 mb-4 min-h-[32px]">${p.desc}</p>
                
                <div class="bg-blue-950/30 border border-blue-500/30 rounded-lg p-3">
                    <p class="text-blue-400 font-black uppercase mb-1 text-[11px] md:text-[12px]">應對方案</p>
                    <p class="text-slate-400 italic text-[11px] md:text-[12px]">${p.tips}</p>
                </div>
            </div>
        </div>
    `).join('')}
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

    if (gate.mechanics?.length) {
        html += `
          <div class="submenu-group">
            <button class="submenu-btn" data-target="section-mechanics">核心機制</button>
            ${gate.mechanics.map((m,i) => `
                <button class="submenu-sub pl-10" data-target="mech-${i}">${m.hp} ${m.title}</button>
            `).join('')}
          </div>
        `;
    }

    if (gate.patterns?.length) {
        html += `
          <div class="submenu-group mt-2">
            <button class="submenu-btn" data-target="section-patterns">招式解析</button>
            ${gate.patterns.map((p,i) => `
                <button class="submenu-sub pl-10" data-target="pattern-${i}">${p.name}</button>
            `).join('')}
          </div>
        `;
    }

    container.innerHTML = html;

    // 🔹 綁定 submenu 按鈕點擊
    setTimeout(() => {
        const submenuBtns = container.querySelectorAll('[data-target]');
        submenuBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetEl = document.getElementById(btn.dataset.target);
                if (!targetEl) return;

                container.classList.remove('collapsed');

                const mainBody = document.getElementById('main-body');
                mainBody.scrollTo({
                    top: targetEl.offsetTop - 120,
                    behavior: 'smooth'
                });

                submenuBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                if (window.innerWidth < 768) {
                    document.getElementById('sidebar')?.classList.remove('mobile-open');
                    document.getElementById('sidebar-overlay').style.display = 'none';
                }
            });
        });
    }, 50);
}

function initScroll(container) {
    if (!container) return;

    const mainBody = document.getElementById('main-body');
    if (!mainBody) return;

    // 🔥 先移除舊的 scrollSpy
    if (currentScrollSpy) {
        mainBody.removeEventListener('scroll', currentScrollSpy);
        currentScrollSpy = null;
    }

    const scrollBtns = () =>
        Array.from(container.querySelectorAll('.submenu-btn, .submenu-sub'));

    const onScroll = () => {
        let activeBtn = null;

        scrollBtns().forEach(btn => {
            const target = document.getElementById(btn.dataset.target);
            if (!target) return;

            const offsetTop =
                target.offsetTop - 140;

            if (mainBody.scrollTop >= offsetTop) {
                activeBtn = btn;
            }
        });

        scrollBtns().forEach(b => b.classList.remove('active'));
        if (activeBtn) activeBtn.classList.add('active');
    };

    currentScrollSpy = onScroll;
    mainBody.addEventListener('scroll', onScroll, { passive: true });

    onScroll();
}



document.addEventListener('DOMContentLoaded', () => {
   initSidebar();
selectRaid(currentRaidId);
expandedRaidId = currentRaidId;
document.getElementById(`gate-submenu-${currentRaidId}`)?.classList.remove('collapsed');

    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    // 🔹 手機版漢堡打開 sidebar
    menuToggle?.addEventListener('click', () => {
        sidebar.classList.add('mobile-open');
        sidebarOverlay.style.display = 'block';
    });

    // 🔹 點 overlay 關閉 sidebar (手機)
    sidebarOverlay?.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        sidebarOverlay.style.display = 'none';
    });

    // 🔹 桌面版收合 sidebar
  sidebarToggle?.addEventListener('click', () => {
    if (window.innerWidth >= 768) {
        // 桌面收合
        sidebar.classList.toggle('sidebar-collapsed');
        document.getElementById('main-body')?.classList.toggle('sidebar-collapsed');
        sidebarToggle.innerHTML = sidebar.classList.contains('sidebar-collapsed')
            ? '<i class="fas fa-angle-right"></i>'
            : '<i class="fas fa-angle-left"></i>';

        updateSidebarCategories(sidebar.classList.contains('sidebar-collapsed'));

        document.querySelectorAll('.gate-submenu-container').forEach(el => {
            if (sidebar.classList.contains('sidebar-collapsed')) {
                el.classList.add('collapsed');
            } else if (expandedRaidId === el.id.replace('gate-submenu-', '')) {
                el.classList.remove('collapsed');
            }
        });
    } else {
        // 🔹 手機版直接關閉 sidebar + overlay
        sidebar.classList.remove('mobile-open');
        sidebarOverlay.style.display = 'none';
    }
});

  

let isScrolling;

document.getElementById('main-body')?.addEventListener('scroll', () => {
    sidebar?.classList.add('scrolling');
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        sidebar?.classList.remove('scrolling');
    }, 100);
});




});
