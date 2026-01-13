// 攻略數據中心
const allRaids = {
    final_day: { /* 你的 final_day 資料保持不變 */ },
    act4: { /* act4 資料 */ },
    serca: { /* serca 資料 */ }
};

let currentRaidId = 'final_day';

// 小圖示對應
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

// 初始化側邊欄
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

// 選擇副本
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

// 切換關卡
function switchGate(gateId) {
    const raid = allRaids[currentRaidId];
    const gate = raid.gates[gateId];
    if (!gate) return;

    document.querySelectorAll('.gate-btn').forEach(btn => btn.classList.remove('active'));
    const activeTab = document.getElementById(`gate-tab-${gateId}`);
    if (activeTab) activeTab.classList.add('active');

    let html = `
        <!-- 影片區 -->
        <div class="rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl relative group">
            <div class="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                <div class="text-center">
                    <i class="fab fa-youtube text-6xl text-red-600 mb-4"></i>
                    <p class="text-slate-200 font-bold">此處載入 ${gate.name} 完整攻略影片</p>
                </div>
            </div>
        </div>

        <!-- 核心機制 -->
        <section>
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="w-1.5 h-8 bg-yellow-500 rounded-full"></span>
                核心機制詳解 (Major Mechanics)
            </h3>
            <div class="space-y-6">
                ${gate.mechanics.map(m => `
                    <div class="info-card rounded-xl p-6 shadow-lg border-l-4 ${m.type === 'wipe' ? 'border-l-red-600' : 'border-l-yellow-500'}">
                        <div class="flex flex-col md:flex-row gap-6">
                            <div class="flex-shrink-0">
                                <div class="text-2xl font-black text-yellow-500 mb-1">${m.hp}</div>
                                <div class="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-center uppercase tracking-tighter">${m.type}</div>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-3">
                                    ${getIcon(m.type)}
                                    <h4 class="text-xl font-bold text-slate-100">${m.title}</h4>
                                </div>
                                <p class="text-slate-400 text-sm leading-relaxed">${m.desc}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>

        <!-- 招式解析 -->
        <section>
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span class="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                招式動作解析 (Action Guide)
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${gate.patterns.map(p => `
                    <div class="bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden hover:bg-slate-800/60 transition-all">
                        <div class="h-40 pattern-gif-placeholder flex items-center justify-center">
                            <p class="text-[10px] text-slate-500 italic">[動畫示意圖佔位]</p>
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
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    selectRaid('final_day');

    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle) menuToggle.onclick = () => sidebar.classList.remove('-translate-x-full');
    if (menuClose) menuClose.onclick = () => sidebar.classList.add('-translate-x-full');
});
