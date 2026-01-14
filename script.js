const allRaids = {
    final_day: {
        title: '卡澤羅斯終幕',
        short: '終結之日',
        category: '卡澤羅斯討伐戰 (Kazeros)',
        desc: '與深淵大惡魔卡澤羅斯的最後決戰。',
        theme: 'raid-gradient-final',
        gates: {
            1: {
                name: '深淵之主：卡傑羅斯 (Gate 1)',
                youtubeId: 'y8wsk0oEWWQ',
                patterns: [
                    {
                        name: '暗影突襲',
                        desc: 'Boss 消失後從背後出現。',
                        tips: '注意紅眼標記。',
                    }
                ],
                mechanics: [
                    {
                        hp: 'x700',
                        title: '團隊癱瘓',
                        desc: '每人 1v1 打紫條。',
                        type: 'mech'
                    }
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
