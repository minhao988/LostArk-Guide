const raidData = {
    1: {
        name: '深淵之主 (Abyss Lord)',
        video: 'https://www.youtube.com/results?search_query=lost+ark+kazeros+final+day+gate+1+guide',
        patterns: [
            { name: '暗影突襲', desc: 'Boss化為黑影隨機突襲一名玩家背後。' },
            { name: '深淵鎖鏈', desc: '地板出現鎖鏈將玩家拉向中心。' }
        ],
        mechanics: [
            { hp: 'x280', title: '深淵凝視', desc: '背對Boss', type: 'mech' }
        ]
    },
    2: {
        name: '大惡魔 卡澤羅斯 (Kazeros)',
        video: 'https://www.youtube.com/results?search_query=lost+ark+kazeros+final+day+gate+2+guide',
        patterns: [],
        mechanics: []
    }
};

function getIcon(type) {
    const icons = {
        wipe: '<i class="fas fa-skull text-red-500"></i>',
        mech: '<i class="fas fa-crosshair text-yellow-400"></i>',
        dps: '<i class="fas fa-sword text-blue-400"></i>',
        survival: '<i class="fas fa-shield-alt text-green-400"></i>',
        warning: '<i class="fas fa-exclamation-triangle text-orange-400"></i>',
        phase: '<i class="fas fa-sync text-purple-400"></i>'
    };
    return icons[type] || '<i class="fas fa-info-circle text-gray-400"></i>';
}

function switchGate(gateId) {
    const data = raidData[gateId];

    document.querySelectorAll('.gate-btn')
        .forEach(btn => btn.classList.remove('active'));

    document.getElementById(`gate-tab-${gateId}`)
        .classList.add('active');

    document.getElementById('video-link').href = data.video;

    document.getElementById('gate-content').innerHTML = `
        <h3 class="text-2xl font-bold">${data.name}</h3>
    `;
}

/* sidebar */
document.getElementById('menu-toggle')
    ?.addEventListener('click', () =>
        document.getElementById('sidebar')
            .classList.remove('-translate-x-full')
    );

document.getElementById('menu-close')
    ?.addEventListener('click', () =>
        document.getElementById('sidebar')
            .classList.add('-translate-x-full')
    );

window.onload = () => switchGate(1);
