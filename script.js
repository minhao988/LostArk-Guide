
const allRaids = {
    final_day: {
        title: '卡澤羅斯終幕',
        short: '終結之日',
        category: '卡澤羅斯討伐戰 (Kazeros)',
        desc: '與深淵大惡魔卡澤羅斯的最後決戰。這場戰鬥要求極高的輸出壓力和極致的機制執行力。',
        theme: 'raid-gradient-final',
        gates: {
            1: {
                name: '深淵之主：卡傑羅斯 (Gate 1)',
                youtubeId: "y8wsk0oEWWQ",
                patterns: [
                    { name: '刀劍 (blade line)', desc: 'Boss 揮刀 > 前方甩3條綫 > 砸後方分綫 > 砸前後', tips: '側擊沒什麽問題 打頭背適當躲避前後', gif: 'shadow_strike.gif', videoId: 'Q4ewwMjSQHI' },
                    { name: '4槍連擊 (4 Spear)', desc: 'Boss 往前方射出兩次槍矛 > 往前方丟出大球 > 後續各小地板槍矛', tips: '背後安全', gif: 'counter_rush.gif', isCounter: false, videoId: 'POgWxytwOAA' },
                    { name: '引力坍縮 (Gravity Well)', desc: 'Boss 召喚巨大的黑暗黑洞，吸引所有玩家向中心移動並引爆。', tips: '往外圍跑，或使用具備「強霸體 (Super Armor)」的技能免疫吸引效果。', gif: 'gravity_well.gif', videoId: 'AbCdEf12345' },
                    { name: '紫圈擴散 (Purple Wave)', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif', videoId: 'AbCdEf12345' }
                ],
                mechanics: [
                    { hp: '900', title: '抓人', desc: 'Boss 產生球追蹤玩家並抓起來 隨後出現反制。', details: '失敗反制, 造成被抓的玩家們死亡。', type: 'mech' },
                    { hp: 'x700', title: '團隊癱瘓', desc: '戰場變成1打1的局面 所有玩家要在1分鐘内把紫條癱瘓打掉。', details: '反制能提升癱瘓值。', type: 'mech' },
                    { hp: 'x500', title: '接劍', desc: '王突然消失 真和假幻象同時出現在1/5/7/11位置 需要在真身位置接劍', details: '失敗團滅，接劍后要躲避後續鈎鎖', type: 'mech' }
                ]
            },
            2: {
                name: '復活的魔皇：卡澤羅斯 (Gate 2)',
                youtubeId: "99ZhXs-SAx0", 
                patterns: [
                    { name: '魔皇紅黑波', desc: 'Boss 手中出現紅/黑兩種能量旋渦。', tips: '紅內安全，黑外安全。觀察 Boss 腳下旋轉的光環顏色。', gif: 'red_black.gif' },
                    { name: '魔箭雨 (Demon Rain)', desc: 'Boss 向天空射箭，隨後場地落下大量帶有「眩暈」效果的箭矢。', tips: '地面的紅圈會預告落點，箭雨有兩波，第一波結束後不要立刻回位。', gif: 'demon_rain.gif' },
                    { name: '抓人連打 (Grab & Slam)', desc: 'Boss 伸出手向前抓取。若抓到玩家，會進行連續重摔。', tips: '看到 Boss 手向後蓄力並發出黑煙時，立刻向側邊位移。被抓者需要隊友給予癱瘓。', gif: 'grab_slam.gif' }
                ],
                mechanics: [
                    { hp: 'x350', title: '反制風暴', desc: '全體 8 人必須在 6 點鐘位置站成一排進行連續 5 次完美反制。', type: 'wipe' }
                ]
            }
        }
    },
    act4: {
        title: '第四幕：天災之始',
        short: '第四幕',
        category: '卡澤羅斯討伐戰 (Kazeros)',
        desc: '混沌裂縫被強行撕開，這是一個考驗團隊協作移動與屬性相克的副本。',
        theme: 'raid-gradient-act4',
        gates: {
            1: {
                name: '裂縫守護者 (Gate 1)',
                patterns: [
                    { name: '混沌踐踏', desc: '全場地板變紅，隨機出現三處安全區。', tips: '注意 Boss 踩地第三下是全場擊飛，必須在安全區內。', gif: 'stomp.gif' }
                ],
                mechanics: [
                    { hp: 'x120', title: '元素共鳴', desc: '根據 Boss 翅膀顏色選擇對應門進入。', type: 'mech' }
                ]
            }
        }
    },
    serca: {
        title: '深淵之主：賽爾卡',
        short: '賽爾卡',
        category: '深淵副本系列 (Abyss)',
        desc: '沉睡在寂靜海洋底部的巨獸。氧氣條管理與水流推進是本關的核心。',
        theme: 'raid-gradient-serca',
        gates: {
            1: {
                name: '海潮祭壇 (Gate 1)',
                patterns: [
                    { name: '急流噴射', desc: 'Boss 向隨機玩家噴射高速水柱，帶有強制擊退。', tips: '若背靠地圖邊緣會被推入海中秒殺。', gif: 'water_jet.gif' }
                ],
                mechanics: [
                    { hp: '全程', title: '氧氣瓶系統', desc: '氧氣歸零會持續扣血，尋找泡泡點回氧。', type: 'warning' }
                ]
            }
        }
    }
};

let currentRaidId = 'final_day';

function getIcon(type) {
    const icons = {
        wipe: '<i class="fas fa-skull-crossbones text-red-500"></i>',
        mech: '<i class="fas fa-cog text-yellow-400"></i>',
        warning: '<i class="fas fa-exclamation-circle text-orange-400"></i>',
        dps: '<i class="fas fa-fire text-orange-600"></i>',
        survival: '<i class="fas fa-heartbeat text-green-400"></i>'
    };
    return icons[type] || '<i class="fas fa-info-circle text-gray-400"></i>';
}

function initSidebar() {
    const container = document.getElementById('sidebar-content');
    if (!container) return;
    container.innerHTML = '';
    const categories = [...new Set(Object.values(allRaids).map(r => r.category))];

    categories.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.innerHTML = `<div class="px-6 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">${cat}</div>`;
        Object.entries(allRaids).forEach(([id, data]) => {
            if (data.category === cat) {
                const btn = document.createElement('button');
                btn.id = `btn-${id}`;
                btn.className = 'sidebar-btn w-full text-left px-6 py-3 text-slate-400 hover:bg-white/5 hover:text-white flex items-center justify-between transition-all';
                btn.innerHTML = `<span class="font-medium">${data.short}</span><i class="fas fa-chevron-right text-xs"></i>`;
                btn.onclick = () => selectRaid(id);
                catDiv.appendChild(btn);
            }
        });
        container.appendChild(catDiv);
    });
}

function selectRaid(raidId) {
    if (!allRaids[raidId]) return;
    currentRaidId = raidId;

    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${raidId}`);
    if (activeBtn) activeBtn.classList.add('active');

    const raid = allRaids[raidId];
    document.getElementById('main-body').className = raid.theme + ' min-h-screen transition-all duration-500';
    document.getElementById('raid-title').innerText = raid.title;
    document.getElementById('raid-desc').innerText = raid.desc;
    document.getElementById('mobile-title').innerText = raid.short;
    document.getElementById('breadcrumb').innerText = raid.short;

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

    switchGate(1);
    if (window.innerWidth < 768) document.getElementById('sidebar').classList.add('-translate-x-full');
}

function switchGate(gateId) {
    const raid = allRaids[currentRaidId];
    const gate = raid.gates[gateId];
    if (!gate) return;

    document.querySelectorAll('.gate-btn').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`gate-tab-${gateId}`);
    if (activeTab) activeTab.classList.add('active');

    let html = `
    <div class="max-w-4xl xl:max-w-5xl mx-auto mb-12 md:mb-16">
        <div class="rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl relative group">
          <iframe
        class="w-full h-full"
        src="https://www.youtube.com/embed/${gate.youtubeId}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>

<div class="video-overlay absolute inset-0 flex items-center justify-center bg-slate-900/80 cursor-pointer">

                <div class="text-center">
                    <i class="fab fa-youtube text-6xl text-red-600 mb-4"></i>
                    <p class="text-slate-200 font-bold">此處載入 ${gate.name} 完整攻略影片</p>
                </div>
            </div>
        </div>
        </div>

   <section>
    <h3 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
        <span class="w-1.5 h-8 bg-yellow-500 rounded-full"></span>
        核心機制詳解 (Major Mechanics)
    </h3>
    <div class="space-y-6">
        ${gate.mechanics.map(m => `
        <div class="info-card rounded-xl p-6 shadow-lg border-l-4
            ${m.type === 'wipe' ? 'border-l-red-600' : 'border-l-yellow-500'} 
            break-words">
            <div class="flex flex-col sm:flex-row gap-4">
                
                <!-- 左側 HP + Type -->
                <div class="flex-shrink sm:flex-shrink-0 w-full sm:w-auto">
                    <div class="flex items-center gap-2 mb-2">
                        <div class="text-2xl font-black text-yellow-500">${m.hp}</div>
                        <div class="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-center uppercase tracking-tighter">
                            ${m.type}
                        </div>
                    </div>
                </div>

                <!-- 右側標題 + 描述 -->
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-2">
                        ${getIcon(m.type)}
                        <h4 class="text-xl font-bold text-slate-100 truncate">${m.title}</h4>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed break-words">${m.desc}</p>
                </div>

            </div>
        </div>
        `).join('')}
    </div>
</section>

        <section>
            <h3 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">

                <span class="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                招式動作解析 (Action Guide)
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${gate.patterns.map(p => `
                    <div class="bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden hover:bg-slate-800/60 transition-all">
                   <div
                          class="relative w-full aspect-video cursor-pointer group bg-black/40 overflow-hidden"
                          data-video="${p.videoId || ''}"
                        >
                          <!-- 置中 overlay（只負責 icon + 文字） -->
                          <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <i class="fab fa-youtube text-4xl text-red-600 opacity-80"></i>
                            <span class="mt-2 text-[10px] text-slate-300">
                              點擊觀看招式影片
                            </span>
                          </div>
                        </div>
                    </div>
                        <div class="p-5">
                            <h4 class="font-bold text-blue-300 mb-2 flex items-center gap-2">
                                ${p.isCounter ? '<span class="bg-blue-600 text-[8px] px-1.5 py-0.5 rounded text-white">COUNTER</span>' : ''}
                                ${p.name}
                            </h4>
                            <p class="text-slate-300 text-xs mb-4 min-h-[32px]">${p.desc}</p>
                            <div class="bg-blue-950/30 border border-blue-500/30 rounded-lg p-3">
                                <p class="text-blue-400 text-[10px] font-black uppercase mb-1">應對方案</p>
                                <p class="text-slate-400 text-xs italic">${p.tips}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    document.getElementById('gate-content').innerHTML = html;
const overlay = document.querySelector('.video-overlay');
if (overlay) {
    overlay.addEventListener('click', function() {
        const container = this.parentElement; // 這是保持 aspect-video 的父元素
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${gate.youtubeId}?autoplay=1&mute=1`;
        iframe.className = "w-full h-full absolute top-0 left-0"; // 撐滿父容器
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
        this.remove(); // 移除 overlay
    });
}
    document.querySelectorAll('[data-video]').forEach(el => {
    el.addEventListener('click', function () {
        const videoId = this.dataset.video;
        if (!videoId) return;

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
        iframe.className = 'absolute inset-0 w-full h-full';
        iframe.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        this.innerHTML = '';
        this.appendChild(iframe);
    });
});
}



document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    selectRaid('final_day');

    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle) menuToggle.onclick = () => sidebar.classList.remove('-translate-x-full');
    if (menuClose) menuClose.onclick = () => sidebar.classList.add('-translate-x-full');
});
