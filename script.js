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
                    { name: '暗影突襲 (Shadow Strike)', desc: 'Boss 消失並鎖定一名玩家，隨後從其背後出現進行重擊。', tips: '被點名者頭上有紅眼標記，閃避動作需在 Boss 顯形的一瞬間施放。', gif: 'shadow_strike.gif' },
                    { name: '深淵反制 (Counter Rush)', desc: 'Boss 全身閃爍藍光，向前方連續衝刺三次。', tips: '第一次衝刺後即可準備反制。若錯過第一次，可在第二或第三次閃紅光時反擊。', gif: 'counter_rush.gif', isCounter: true },
                    { name: '引力坍縮 (Gravity Well)', desc: 'Boss 召喚巨大的黑暗黑洞，吸引所有玩家向中心移動並引爆。', tips: '往外圍跑，或使用具備「強霸體 (Super Armor)」的技能免疫吸引效果。', gif: 'gravity_well.gif' },
                    { name: '紫圈擴散 (Purple Wave)', desc: 'Boss 拍地產生向外擴散的圓環能量波。', tips: '遵循「內-外-內」的躲避節奏。第一波炸內，第二波炸外。', gif: 'purple_wave.gif' }
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
    const map = {
        wipe: 'fa-skull-crossbones text-red-500',
        mech: 'fa-cog text-yellow-400',
        warning: 'fa-exclamation-circle text-orange-400'
    };
    return `<i class="fas ${map[type] || 'fa-info-circle text-gray-400'}"></i>`;
}

/* Sidebar */
function initSidebar() {
    const container = document.getElementById('sidebar-content');
    container.innerHTML = '';

    Object.entries(allRaids).forEach(([id, r]) => {
        const btn = document.createElement('button');
        btn.id = `btn-${id}`;
        btn.className =
            'sidebar-btn w-full text-left px-6 py-3 text-slate-400 hover:bg-white/5';
        btn.textContent = r.short;
        btn.onclick = () => selectRaid(id);
        container.appendChild(btn);
    });
}

/* Select Raid */
function selectRaid(id) {
    currentRaidId = id;
    const raid = allRaids[id];

    document.querySelectorAll('.sidebar-btn')
        .forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${id}`)?.classList.add('active');

    document.getElementById('main-body').className =
        raid.theme + ' min-h-screen transition-all duration-500';

    document.getElementById('raid-title').innerText = raid.title;
    document.getElementById('raid-desc').innerText = raid.desc;
    document.getElementById('breadcrumb').innerText = raid.short;
    document.getElementById('mobile-title').innerText = raid.short;

    const tabs = document.getElementById('gate-tabs');
    tabs.innerHTML = '';

    Object.keys(raid.gates).forEach(gid => {
        const btn = document.createElement('button');
        btn.className =
            'gate-btn px-5 py-2 rounded-lg border border-white/10 text-slate-400';
        btn.textContent = `Gate ${gid}`;
        btn.onclick = () => switchGate(parseInt(gid));
        btn.id = `gate-tab-${gid}`;
        tabs.appendChild(btn);
    });

    switchGate(1);

    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
    }
}

/* Switch Gate */
function switchGate(gid) {
    const gate = allRaids[currentRaidId].gates[gid];
    if (!gate) return;

    document.querySelectorAll('.gate-btn')
        .forEach(b => b.classList.remove('active'));
    document.getElementById(`gate-tab-${gid}`)?.classList.add('active');

    const html = `
<div class="rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 relative">
    <div class="video-overlay absolute inset-0 flex items-center justify-center bg-black/70 cursor-pointer">
        <div class="text-center">
            <i class="fab fa-youtube text-6xl text-red-600 mb-4"></i>
            <p class="text-white font-bold">點擊播放 ${gate.name}</p>
        </div>
    </div>
</div>

<section>
    <h3 class="text-2xl font-bold mb-4 text-white">核心機制</h3>
    ${gate.mechanics.map(m => `
        <div class="p-5 rounded-xl bg-slate-800/40 border-l-4 border-yellow-500">
            <div class="flex items-center gap-2 mb-2">
                ${getIcon(m.type)}
                <strong class="text-white">${m.title}</strong>
            </div>
            <p class="text-slate-400 text-sm">${m.desc}</p>
        </div>
    `).join('')}
</section>
`;

    const container = document.getElementById('gate-content');
    container.innerHTML = html;

    /* Video click */
    const overlay = container.querySelector('.video-overlay');
    overlay.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.src =
            `https://www.youtube.com/embed/${gate.youtubeId}?autoplay=1&mute=1`;
        iframe.className = 'w-full h-full absolute inset-0';
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        overlay.parentElement.appendChild(iframe);
        overlay.remove();
    });

    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* Init */
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    selectRaid('final_day');

    const sidebar = document.getElementById('sidebar');
    document.getElementById('menu-toggle').onclick =
        () => sidebar.classList.remove('-translate-x-full');
    document.getElementById('menu-close').onclick =
        () => sidebar.classList.add('-translate-x-full');
});
