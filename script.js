const allRaids = {
    final_day: {
        title: '卡澤羅斯終章：終結之日',
        short: '終結之日',
        desc: '與大惡魔卡澤羅斯的最終對決，決定亞克拉西亞的命運。',
        theme: 'raid-gradient-final',
        gates: {
            1: {
                name: '深淵之主 (Abyss Lord)',
                video: 'https://www.youtube.com/results?search_query=lost+ark+kazeros+final+day+gate+1',
                patterns: [
                    { name: '暗影突襲', desc: 'Boss點名突擊背後。' },
                    { name: '深淵鎖鏈', desc: '拉扯玩家至中心。' }
                ],
                mechanics: [
                    { hp: 'x280', title: '深淵凝視', desc: '背對機制，失敗則石化。', type: 'mech' },
                    { hp: 'x200', title: '雙界隔離', desc: '隊伍分組，深淵組打癱瘓，現實組引球。', type: 'wipe' }
                ]
            },
            2: {
                name: '大惡魔 卡澤羅斯',
                video: 'https://www.youtube.com/results?search_query=lost+ark+kazeros+final+day+gate+2',
                patterns: [
                    { name: '魔皇波', desc: '紅黑交替衝擊波。' }
                ],
                mechanics: [
                    { hp: 'x350', title: '6點集合 Clash', desc: '全員集體反制，需連續成功。', type: 'wipe' },
                    { hp: 'x0', title: '真·魔皇形態', desc: '進入最終狂暴階段。', type: 'dps' }
                ]
            }
        }
    },
    act4: {
        title: '卡澤羅斯第四幕：天災之始',
        short: '第四幕',
        desc: '面對從混沌中湧出的遠古天災，阻止大陸的崩壞。',
        theme: 'raid-gradient-act4',
        gates: {
            1: {
                name: '混沌之門守衛',
                video: 'https://www.youtube.com/results?search_query=lost+ark+kazeros+act+4+gate+1',
                patterns: [{ name: '混沌踐踏', desc: '大範圍地震波，需Space免疫。' }],
                mechanics: [
                    { hp: 'x150', title: '元素共鳴', desc: '依照顏色進入對應傳送門。', type: 'mech' },
                    { hp: 'x80', title: '核心粉碎', desc: '打掉場地四周的能量核心。', type: 'wipe' }
                ]
            }
        }
    },
    serca: {
        title: '深淵之主：賽爾卡 (Serca)',
        short: '賽爾卡',
        desc: '來自深海最底層的恐懼，操控水流與寒冰的古老存在。',
        theme: 'raid-gradient-serca',
        gates: {
            1: {
                name: '深海祭壇',
                video: 'https://www.youtube.com/results?search_query=lost+ark+serca+gate+1',
                patterns: [{ name: '水龍捲', desc: '隨機追蹤三名玩家。' }],
                mechanics: [
                    { hp: 'x100', title: '氧氣管理', desc: '需站在氣泡點補充氧氣。', type: 'warning' },
                    { hp: 'x50', title: '潮汐衝擊', desc: '躲避巨浪，尋找高地避難。', type: 'survival' }
                ]
            }
        }
    }
};

let currentRaid = 'final_day';
let currentGate = 1;

function getIcon(type) {
    const icons = {
        wipe: '<i class="fas fa-skull text-red-500"></i>',
        mech: '<i class="fas fa-crosshair text-yellow-400"></i>',
        warning: '<i class="fas fa-exclamation-triangle text-orange-400"></i>',
        dps: '<i class="fas fa-sword text-blue-400"></i>',
        survival: '<i class="fas fa-shield-alt text-green-400"></i>'
    };
    return icons[type] || '<i class="fas fa-info-circle text-gray-400"></i>';
}

function selectRaid(raidKey) {
    if (!allRaids[raidKey]) return;
    currentRaid = raidKey;
    currentGate = 1;

    // 更新 Sidebar 按鈕樣式
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${raidKey}`);
    if (activeBtn) activeBtn.classList.add('active');

    const raid = allRaids[raidKey];
    document.getElementById('main-body').className = raid.theme + ' min-h-screen transition-all duration-500';
    document.getElementById('raid-title').innerText = raid.title;
    document.getElementById('raid-desc').innerText = raid.desc;
    document.getElementById('mobile-title').innerText = raid.short;

    // 生成 Gate Tabs
    const tabsContainer = document.getElementById('gate-tabs');
    tabsContainer.innerHTML = '';
    Object.keys(raid.gates).forEach(gId => {
        const btn = document.createElement('button');
        btn.id = `gate-tab-${gId}`;
        btn.className = 'gate-btn px-5 py-2 rounded-full font-semibold transition-all duration-200 border border-white/10 text-slate-400 hover:bg-white/10';
        btn.innerText = `G${gId}`;
        btn.onclick = () => switchGate(parseInt(gId));
        tabsContainer.appendChild(btn);
    });

    switchGate(1);

    // 手機版自動收起側邊欄
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 768) {
        sidebar.classList.add('-translate-x-full');
    }
}

function switchGate(gateId) {
    const raid = allRaids[currentRaid];
    const gate = raid.gates[gateId];
    if (!gate) return;

    currentGate = gateId;

    // 更新 Tab 樣式
    document.querySelectorAll('.gate-btn').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`gate-tab-${gateId}`);
    if (activeTab) activeTab.classList.add('active');

    // 更新影片連結
    const videoBtn = document.getElementById('video-link');
    if (videoBtn) videoBtn.href = gate.video || '#';

    // 更新內容區域
    let html = `
        <div class="flex items-center gap-3 pb-4 border-b border-white/10 mt-4">
            <h3 class="text-2xl font-semibold text-white">${gate.name}</h3>
        </div>
        <div>
            <h4 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2"><i class="fas fa-bolt text-yellow-400"></i> 常駐小招</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${gate.patterns.map(p => `
                    <div class="bg-white/5 border border-white/5 rounded p-3">
                        <span class="font-bold text-slate-200 block mb-1">${p.name}</span>
                        <span class="text-sm text-slate-400">${p.desc}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div>
            <h4 class="text-lg font-bold text-red-300 mb-3 flex items-center gap-2"><i class="fas fa-skull"></i> 核心機制</h4>
            <div class="grid gap-4">
                ${gate.mechanics.map(m => `
                    <div class="bg-black/40 backdrop-blur-sm border border-white/5 rounded-lg p-5 hover:border-white/20 transition-all">
                        <div class="flex gap-4">
                            <div class="w-20 flex-shrink-0 pt-1 font-bold text-yellow-400 text-sm">${m.hp}</div>
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-2">
                                    ${getIcon(m.type)}
                                    <h4 class="font-bold text-lg text-slate-100">${m.title}</h4>
                                </div>
                                <p class="text-slate-300 text-sm leading-relaxed">${m.desc}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    document.getElementById('gate-content').innerHTML = html;
}

// 側邊欄開關
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sidebar = document.getElementById('sidebar');

if (menuToggle) menuToggle.onclick = () => sidebar.classList.remove('-translate-x-full');
if (menuClose) menuClose.onclick = () => sidebar.classList.add('-translate-x-full');

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    selectRaid('final_day');
});
