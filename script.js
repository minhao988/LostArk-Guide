let currentRaidId = 'final_day';

/* ---------- ICON ---------- */
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

/* ---------- SIDEBAR ---------- */
function initSidebar() {
    const container = document.getElementById('sidebar-content');
    container.innerHTML = '';

    const categories = [...new Set(Object.values(allRaids).map(r => r.category))];

    categories.forEach(cat => {
        const catDiv = document.createElement('div');
        catDiv.innerHTML =
            `<div class="px-6 py-2 text-xs font-bold text-slate-500 uppercase">${cat}</div>`;

        Object.entries(allRaids).forEach(([id, raid]) => {
            if (raid.category !== cat) return;

            const btn = document.createElement('button');
            btn.id = `btn-${id}`;
            btn.className =
                'sidebar-btn w-full px-6 py-3 text-left text-slate-400 hover:text-white hover:bg-white/5 flex justify-between items-center transition';
            btn.innerHTML = `<span>${raid.short}</span><i class="fas fa-chevron-right text-xs"></i>`;
            btn.onclick = () => selectRaid(id);
            catDiv.appendChild(btn);
        });

        container.appendChild(catDiv);
    });
}

/* ---------- RAID ---------- */
function selectRaid(raidId) {
    const raid = allRaids[raidId];
    if (!raid) return;

    currentRaidId = raidId;

    document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${raidId}`)?.classList.add('active');

    document.getElementById('main-body').className =
        `${raid.theme} min-h-screen transition-all duration-500`;

    document.getElementById('raid-title').innerText = raid.title;
    document.getElementById('raid-desc').innerText = raid.desc;
    document.getElementById('breadcrumb').innerText = raid.short;
    document.getElementById('mobile-title').innerText = raid.short;

    const tabs = document.getElementById('gate-tabs');
    tabs.innerHTML = '';

    Object.keys(raid.gates).forEach(gId => {
        const btn = document.createElement('button');
        btn.id = `gate-tab-${gId}`;
        btn.className =
            'gate-btn px-5 py-2 rounded-lg font-bold border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition';
        btn.innerText = `關卡 G${gId}`;
        btn.onclick = () => switchGate(+gId);
        tabs.appendChild(btn);
    });

    switchGate(1);

    if (window.innerWidth < 768) {
        document.getElementById('sidebar').classList.add('-translate-x-full');
    }
}

/* ---------- GATE ---------- */
function switchGate(gateId) {
    const gate = allRaids[currentRaidId].gates[gateId];
    if (!gate) return;

    document.querySelectorAll('.gate-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`gate-tab-${gateId}`)?.classList.add('active');

    const html = `
    <!-- VIDEO -->
    <div class="rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 shadow-2xl relative">
        <div class="video-overlay absolute inset-0 flex items-center justify-center bg-slate-900/80 cursor-pointer">
            <div class="text-center">
                <i class="fab fa-youtube text-6xl text-red-600 mb-4"></i>
                <p class="text-slate-200 font-bold">此處載入 ${gate.name} 完整攻略影片</p>
            </div>
        </div>
    </div>

    <!-- MECHANICS -->
    <section>
        <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
            <span class="w-1.5 h-8 bg-yellow-500 rounded"></span>
            核心機制詳解
        </h3>

        <div class="space-y-6">
            ${gate.mechanics.map(m => `
                <div class="info-card rounded-xl p-6 border-l-4 ${m.type === 'wipe' ? 'border-red-600' : 'border-yellow-500'}">
                    <div class="flex gap-6">
                        <div>
                            <div class="text-2xl font-black text-yellow-500">${m.hp}</div>
                            <div class="text-[10px] uppercase">${m.type}</div>
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-2">
                                ${getIcon(m.type)}
                                <h4 class="font-bold">${m.title}</h4>
                            </div>
                            <p class="text-sm text-slate-400">${m.desc}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>

    <!-- PATTERNS -->
    <section>
        <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
            <span class="w-1.5 h-8 bg-blue-500 rounded"></span>
            招式動作解析
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${gate.patterns.map(p => `
                <div class="rounded-2xl border border-white/10 bg-slate-800/40 overflow-hidden">
                    <div class="h-40 flex items-center justify-center text-xs text-slate-500">
                        [動畫示意圖]
                    </div>
                    <div class="p-5">
                        <h4 class="font-bold text-blue-300 mb-2">
                            ${p.isCounter ? '<span class="mr-2 text-[10px] bg-blue-600 px-2 py-0.5 rounded">COUNTER</span>' : ''}
                            ${p.name}
                        </h4>
                        <p class="text-xs text-slate-300 mb-3">${p.desc}</p>
                        <div class="bg-blue-950/30 p-3 rounded text-xs text-slate-400">
                            ${p.tips}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </section>
    `;

    const content = document.getElementById('gate-content');
    content.innerHTML = html;

    /* VIDEO CLICK */
    const overlay = content.querySelector('.video-overlay');
    overlay?.addEventListener('click', () => {
        const container = overlay.parentElement;
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${gate.youtubeId}?autoplay=1&mute=1`;
        iframe.className = 'absolute inset-0 w-full h-full';
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
        overlay.remove();
    });

    content.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    selectRaid('final_day');

    const sidebar = document.getElementById('sidebar');
    document.getElementById('menu-toggle')?.addEventListener('click',
        () => sidebar.classList.remove('-translate-x-full'));
    document.getElementById('menu-close')?.addEventListener('click',
        () => sidebar.classList.add('-translate-x-full'));
});
