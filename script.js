const allRaids = {
    final_day: {
        title: '卡澤羅斯終章：終結之日',
        short: '終結之日',
        desc: '與深淵大惡魔卡澤羅斯的最後決戰。這場戰鬥要求極高的輸出壓力和極致的機制執行力。',
        theme: 'raid-gradient-final',
        gates: {
            1: {
                name: '深淵之主：阿勃萊修 (Gate 1)',
                patterns: [
                    { name: '暗影突襲 (Shadow Strike)', desc: 'Boss 消失並鎖定一名玩家，隨後從其背後出現進行重擊。', tips: '被點名者頭上有紅眼標記，閃避動作需在 Boss 顯形的一瞬間施放。', gif: 'shadow_strike.gif' },
                    { name: '深淵反制 (Counter Rush)', desc: 'Boss 全身閃爍藍光，向前方連續衝刺三次。', tips: '第一次衝刺後即可準備反制。若錯過第一次，可在第二或第三次閃紅光時反擊。', gif: 'counter_rush.gif', isCounter: true },
                    { name: '引力坍縮 (Gravity Well)', desc: 'Boss 召喚巨大的黑暗黑洞，吸引所有玩家向中心移動並引爆。', tips: '往外圍跑，或使用具備「強霸體 (Super Armor)」的技能免疫吸引效果。', gif: 'gravity_well.gif' },
                    { name: '紫圈擴散 (Purple Wave)', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif' }
                ],
                mechanics: [
                    { hp: 'x280', title: '深淵凝視', desc: 'Boss 瞬移到中心，放出紅光。', details: '必須「背對」Boss，否則會被石化。', type: 'mech' },
                    { hp: 'x200', title: '雙界隔離', desc: '戰場分裂成影界與實體。', details: '奇數隊員影界打癱，偶數隊員實體引球。', type: 'wipe' }
                ]
            },
            2: {
                name: '復活的魔皇：卡澤羅斯 (Gate 2)',
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
        desc: '混沌裂縫被強行撕開，這是一個考驗團隊協作移動與屬性相克的副本。',
        theme: 'raid-gradient-act4',
        gates: {
            1: {
                name: '裂縫守護者 (Gate 1)',
                patterns: [
                    { name: '混沌踐踏', desc: '全場地板變紅，隨機出現三處安全區。', tips: '注意 Boss 踩地第三下是全場擊飛，必須在安全區內。', gif: 'stomp.gif' },
                    { name: '屬性光束', desc: 'Boss 對最遠的兩名玩家發射追蹤光束。', tips: '兩名被點名玩家需將光束引導至場邊的「屬性碑」，利用相克顏色破除護盾。', gif: 'beam.gif' }
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
        desc: '沉睡在寂靜海洋底部的巨獸。氧氣條管理與水流推進是本關的核心。',
        theme: 'raid-gradient-serca',
        gates: {
            1: {
                name: '海潮祭壇 (Gate 1)',
                patterns: [
                    { name: '急流噴射', desc: 'Boss 向隨機玩家噴射高速水柱，帶有強制擊退。', tips: '若背靠地圖邊緣會被推入海中秒殺。', gif: 'water_jet.gif' },
                    { name: '泡沫陷阱', desc: 'Boss 在場地隨機灑下巨大水球。', tips: '被水球碰到會被禁錮並浮空。需隊友攻擊水球才能脫困。', gif: 'bubble_trap.gif' }
                ],
                mechanics: [
                    { hp: '全程', title: '氧氣瓶系統', desc: '氧氣歸零會持續扣血，尋找泡泡點回氧。', type: 'warning' }
                ]
            }
        }
    }
};

let currentRaid = 'final_day';

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

function selectRaid(raidKey) {
    if (!allRaids[raidKey]) return;
    currentRaid = raidKey;
    
    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${raidKey}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    const raid = allRaids[raidKey];
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
    const raid = allRaids[currentRaid];
    const gate = raid.gates[gateId];
    if (!gate) return;

    document.querySelectorAll('.gate-btn').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`gate-tab-${gateId}`);
    if (activeTab) activeTab.classList.add('active');

    let html = `<div class="rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl relative group">
                    <div class="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                        <div class="text-center">
                            <i class="fab fa-youtube text-6xl text-red-600 mb-4"></i>
                            <p class="text-slate-200 font-bold">此處載入 ${gate.name} 全關卡流程影片</p>
                        </div>
                    </div>
                </div>`;

    // 機制與小招解析
    // 這裡可照之前 html 生成邏輯
    document.getElementById('gate-content').innerHTML = html;
}

// Sidebar toggle
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sidebar = document.getElementById('sidebar');
if (menuToggle) menuToggle.onclick = () => sidebar.classList.remove('-translate-x-full');
if (menuClose) menuClose.onclick = () => sidebar.classList.add('-translate-x-full');

window.addEventListener('DOMContentLoaded', () => {
    selectRaid('final_day');
});
