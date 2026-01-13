const raidData = {
            1: {
                name: '深淵之主 (Abyss Lord)',
                video: 'https://www.youtube.com/results?search_query=lost+ark+kazeros+final+day+gate+1+guide',
                patterns: [
                    { name: '暗影突襲', desc: 'Boss化為黑影隨機突襲一名玩家背後。被點名者頭上會有標記，需立刻位移拉開距離。' },
                    { name: '深淵鎖鏈', desc: '地板出現鎖鏈將玩家拉向中心。如果不交解控技能(Space/技能)掙脫，會被秒殺。' }
                ],
                mechanics: [
                    { hp: 'x280', title: '深淵凝視', desc: 'Boss瞬移至中央。全體玩家需背對Boss，否則會被石化並受到鉅額傷害。', type: 'mech' },
                    { hp: 'x200', title: '雙界隔離', desc: '隊伍被強制分為「深淵」與「現實」兩組。深淵組打癱瘓，現實組引導光球。', type: 'wipe' },
                    { hp: 'x110', title: '毀滅之握', desc: 'Boss巨手拍擊地板。需站在裂痕縫隙安全區。隨後會有全屏衝擊波。', type: 'survival' },
                    { hp: 'x50', title: '終焉倒數', desc: '螢幕出現倒數計時。需在時間結束前將Boss血量壓至x0。', type: 'dps' }
                ]
            },
            2: {
                name: '大惡魔 卡澤羅斯 (Kazeros)',
                video: 'https://www.youtube.com/results?search_query=lost+ark+kazeros+final+day+gate+2+guide',
                patterns: [
                    { name: '魔皇波 (紅/黑)', desc: '紅色向外擴散(內圈安全)，黑色向內收縮(外圈安全)。' },
                    { name: '抓取處決', desc: 'Boss單手抓人。如果沒有隊友幫忙打癱瘓，被抓者會被直接秒殺。' }
                ],
                mechanics: [
                    { hp: '全程', title: '侵蝕值', desc: '被擊中會增加侵蝕條，滿了會被魅惑。需定期踩場地邊緣光柱淨化。', type: 'warning' },
                    { hp: 'x350', title: '6點鐘集合 (Clash)', desc: 'Boss衝向6點方向。全體8人需集合分擔傷害並連續反制。', type: 'wipe' },
                    { hp: 'x240', title: '魔皇降臨', desc: '腳下出現藍色光圈。所有人必須分散，不能重疊，否則秒殺。', type: 'mech' },
                    { hp: 'x120', title: '時空崩塌', desc: '場地碎裂，需利用鉤鎖在浮空石塊間移動躲避雷射。', type: 'phase' },
                    { hp: 'x0', title: 'The First', desc: '血量歸零後復活進入真·魔皇形態。需輸出最後的本體。', type: 'dps' }
                ]
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
            document.querySelectorAll('.gate-btn').forEach(btn => btn.classList.remove('active'));
            document.getElementById(`gate-tab-${gateId}`).classList.add('active');
            document.getElementById('video-link').href = data.video;

            let html = `
                <div class="flex items-center gap-3 pb-4 border-b border-white/10 mt-4">
                    <h3 class="text-2xl font-semibold text-white">${data.name}</h3>
                </div>

                <div>
                    <h4 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">
                        <i class="fas fa-bolt text-yellow-400"></i> 常駐小招
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        ${data.patterns.map(p => `
                            <div class="bg-white/5 border border-white/5 rounded p-3">
                                <span class="font-bold text-slate-200 block mb-1">${p.name}</span>
                                <span class="text-sm text-slate-400">${p.desc}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <h4 class="text-lg font-bold text-red-300 mb-3 flex items-center gap-2">
                        <i class="fas fa-skull"></i> 核心機制
                    </h4>
                    <div class="grid gap-4">
                        ${data.mechanics.map(m => `
                            <div class="bg-black/40 backdrop-blur-sm border border-white/5 rounded-lg p-5 hover:border-white/20 transition-all">
                                <div class="flex flex-col md:flex-row md:items-start gap-4">
                                    <div class="flex-shrink-0 w-24 pt-1">
                                        <span class="inline-block px-3 py-1 rounded text-sm font-bold bg-slate-800 text-yellow-400">
                                            ${m.hp}
                                        </span>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-2">
                                            ${getIcon(m.type)}
                                            <h4 class="font-bold text-lg ${m.type === 'wipe' ? 'text-red-400' : 'text-slate-100'}">${m.title}</h4>
                                        </div>
                                        <p class="text-slate-300 text-sm md:text-base">${m.desc}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="mt-8 bg-slate-800/50 rounded-xl p-6 border border-white/10">
                    <h4 class="flex items-center gap-2 font-bold text-xl mb-4 text-blue-300">
                        <i class="fas fa-clock"></i> 通用站位法則 (x3 Rule)
                    </h4>
                    <p class="text-sm text-slate-300 mb-4">1號(3點), 2號(6點), 3號(9點), 4號(12點)。這是拓荒必記的基本功。</p>
                </div>
            `;
            document.getElementById('gate-content').innerHTML = html;
        }

     document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('menu-close');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
        });
    }

    // 初始化 gate 內容
    switchGate(1);
});
