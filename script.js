document.addEventListener('DOMContentLoaded', () => {
    const storeData = {
        channels: {
            title: 'قنوات بث مباشر',
            icon: 'fa-solid fa-satellite-dish',
            apps: [
                { name: "Yacine TV", url: "https://yacinetvblack.ytvplayer.tv/", icon: "https://i.ibb.co/Wv9BsnjL/yacine-tv-icon.png" },
                { name: "OTTO TV", url: "https://otto-tv.store/OTTOTV_1.11.6.apk", icon: "https://i.ibb.co/ksByPZv6/otto-tv-icon.png" },
                { name: "Yacine TV Black", url: "https://yacinetvblack.ytvplayer.tv/", icon: "https://i.ibb.co/8Lzt7Y3w/yacine-tv-black-icon.jpg" },
                { name: "General TV", url: "https://genraltv.app/", icon: "https://i.ibb.co/nTnB5RY/genral-tv-icon.png" },
                { name: "Drama Live", url: "https://dramalive-app.com/", icon: "https://i.ibb.co/1GPpDjXF/drama-live-icon.webp" },
                { name: "Ostora TV", url: "https://alostora-tv.com/", icon: "https://i.ibb.co/Kcy7rGJS/ostora-tv-icon.jpg" },
                { name: "Cricfy TV", url: "https://www.mediafire.com/file/haewc9tqhkynr53/CRICFy_v6.1.apk/file", icon: "https://i.ibb.co/35rSVwDv/cricfy-tv-icon.webp" },
                { name: "RBTV77", url: "https://getrbtv77.com/", icon: "https://i.ibb.co/1JbNmMX0/RBTV77-Apk.png" },
                { name: "Zerda Live", url: "https://www.zerdaliveapp.xyz/", icon: "https://i.ibb.co/Lzzxx0y5/zerda-live-icon-tv.jpg" },
                { name: "Blink Streamz", url: "https://www.blinkstreamz.com/", icon: "https://i.ibb.co/spNY6Fcn/Blink-Streamz-icon.png" },
                { name: "Cast X", url: "https://cast-x.site/", icon: "https://i.ibb.co/MynwyjwT/cast-x.jpg" },
                { name: "Rapid Streamz", url: "https://www.rapidstreamz.app/", icon: "https://i.ibb.co/fYWGwqd5/Rapid-Streamz-icon.png" },
                { name: "Streamfire", url: "https://pixeldrain.com/api/filesystem/EM6TZXCh", icon: "https://i.ibb.co/zvzSSCg/streamfire-icon.png" },
                { name: "Sportsfire", url: "https://pixeldrain.com/api/filesystem/bJgTC1aw", icon: "https://apktime.com/charts/sportsfire-170723.png" },
                { name: "Aya TV", url: "https://filez30.b-cdn.net/Ayatv.one%203.15%20(No%20ads).apk", icon: "https://i.ibb.co/6Msgpvk/Aya-tv.jpg" },
                { name: "Sportzfy TV", url: "https://www.mediafire.com/file/xf5b3kimo8u22jd/Sportzfy_v13.apk/file", icon: "https://i.ibb.co/B5Zx9vfq/Sportzfy-Tv.jpg" },
                { name: "Airmax TV", url: "https://www.airmaxtv.de/", icon: "https://i.ibb.co/s9FKxs7g/Air-Max-TV-icon.jpg" },
                { name: "HD Streamz", url: "https://hdstreamzz.org/file/HD_STREAMZ_Latest_Official.apk", icon: "https://i.ibb.co/R4V1P1ft/HD-Streamz.jpg" },
                { name: "SportzX TV", url: "https://www.mediafire.com/file_premium/e0ckb65vji5crzj/SportzX_v2.1_new.apk/file", icon: "https://i.ibb.co/4gmryKnG/Sportz-X-TV-v2-1.jpg" },
                { name: "شعاع التلفاز", url: "https://download1652.mediafire.com/ffhlz5eazusgb5otYAhSNOe0mFzWFTzbZI9tU3CI9L2RGyvgzg1tSVNAplgMsiJhoQgSQXFSYkU4_gdqcvgPX_Uo7STmgJvrDb8ynE7Jgvg0rlKLk05fw9uVlykKVPT5ZYLbrmutS0Cqlkm907SCe72ZJ98Khs6kxvSBqR4iGp2N/rwky417vl2ew944/%D8%B4%D8%B9%D8%A7%D8%B9+%D8%A7%D9%84%D8%AA%D9%84%D9%81%D8%A7%D8%B2_4.0.2.apk", icon: "" },
            ]
        },
        movies: {
            title: 'أفلام ومسلسلات',
            icon: 'fa-solid fa-film',
            apps: [
                { name: "Nuvio", url: "https://nuvio-app.com/", icon: "https://i.ibb.co/dJXwdJ0F/Nuvio-icon.png" },
                { name: "HDO Box", url: "https://hdobox-app.com/", icon: "https://i.ibb.co/MTFqdsy/HDO-Box-APK.webp" },
                { name: "MovieBox", url: "https://movieboxs.app/", icon: "https://i.ibb.co/Sw2qv84X/movi-box.webp" },
                { name: "Time Movies", url: "https://tmovies.app/", icon: "https://i.ibb.co/nstV17Xn/time-Movies.webp" },
                { name: "NetMirror", url: "https://netmirror.gg/1/en", icon: "https://i.ibb.co/j92G4rkS/netmirror.webp" },
                { name: "Netfly", url: "https://netflyapp.com/", icon: "https://i.ibb.co/hkrTC7b/Icon-netfly.jpg" },
                { name: "CloudStream", url: "https://www.cloudstream-app.com/", icon: "https://i.ibb.co/vC5M0yw8/110591699.png" },
                { name: "OnStream", url: "https://www.onstream-apk.com/", icon: "https://i.ibb.co/n57thMv/31ac-SBTXMf-L-1.webp" },
                { name: "Stremio", url: "https://www.stremio.com/downloads", icon: "https://i.ibb.co/jvqGvqqT/13152917.png" },
                { name: "FlixVision", url: "https://linktr.ee/flixvision", icon: "https://i.ibb.co/DHcFbxDC/Flix-Vision.png" },
                { name: "FilmPlus", url: "https://filmplus.app/", icon: "https://i.ibb.co/JjZC5xBQ/film-plus.png" },
                { name: "StreamFlix", url: "https://github.com/streamflix-reborn/streamflix/releases", icon: "https://i.ibb.co/1tJMsYxH/stream-flix.webp" },
                { name: "CinemaHD", url: "https://cinema-hd.app/", icon: "https://i.ibb.co/1gW74j5/photo.webp" },
                { name: "BeeTV", url: "https://beeetv.com/", icon: "https://i.ibb.co/zVyp1s1B/beetv-app-full-1588140408.webp" },
                { name: "TeaTV", url: "https://teatvpro.net/", icon: "https://i.ibb.co/Q5YCHCL/12740431.webp" },
                { name: "Drama World", url: "https://dramaworld.aflamilive.com/", icon: "https://i.ibb.co/1ftTSDhj/dw.webp" },
                { name: "MYCima VIP", url: "https://mycimavip.com/", icon: "https://i.ibb.co/WWdGfs2t/548290b31f46056944f74702985915e8f79d2517-1.webp" },
                { name: "SeeDrama", url: "https://seedrama.vip/", icon: "https://i.ibb.co/M5pjfCH6/images.jpg" },
                { name: "Action TV", url: "https://action-tv-app.com/index.html", icon: "https://i.ibb.co/VYKz9zpn/action-tv.webp" },
                { name: "Drama Slayer", url: "https://dramaslayer.app/", icon: "https://i.ibb.co/ycbkLLkV/cropped-drama-slayer-apk.png" },
                { name: "LokLok TV", url: "https://www.lokloktv.com/", icon: "https://i.ibb.co/N6wPSzTd/47b272f7d177da984b0f8d07e2d73ae69b24ce2b5791c4c2a78047197b634db7-200.webp" },
                { name: "HiTV", url: "https://hitvs.app/", icon: "https://i.ibb.co/67gTSwpT/HITV.webp" },
                { name: "Kodi", url: "https://kodi.tv/download/android/", icon: "https://i.ibb.co/QF8g0q3C/kodi.webp" },
                { name: "Nova TV", url: "https://www.novatvapk.com/nova.apk", icon: "https://i.ibb.co/rR1wXgH0/com-nova-tv.webp" },
                { name: "Netflix (Mod)", url: "https://github.com/aidanmacgregor/Netflix_ATV_L3_DRM_Uncertified_Mod", icon: "https://i.ibb.co/bRMP8rkS/netflix.webp" },
                { name: "Shahid TV", url: "https://www.apkmirror.com/apk/mbc-group/shahid-android-tv/", icon: "https://i.ibb.co/XfkdGLZ2/image.webp" },
                { name: "Fassel HD", url: "https://www.fasselhd.com/", icon: "https://i.ibb.co/Rpx6WFH5/Fasel-HD-180x180.webp" },
                { name: "EgyBest", url: "https://eegebest.com/", icon: "https://i.ibb.co/7dsV53t5/Egy-Best.webp" },
                { name: "قصة عشق", url: "https://3isk.app/", icon: "https://i.ibb.co/6030QG1n/image.jpg" },
                { name: "FarGa", url: "https://farga.cam/FarGa.apk", icon: "https://i.ibb.co/Y405tX8C/farga.jpg" },
                { name: "أوسكار تيفي", url: "https://oscartv-app.com/", icon: "https://i.ibb.co/DHFc6hNs/applogo-228x228.webp" },
                { name: "تركمود", url: "https://turkmood.com/", icon: "https://i.ibb.co/6cfvgY4x/ICON.jpg" },
            ]
        },
        anime: {
            title: 'أنمي',
            icon: 'fa-solid fa-dragon',
            apps: [
                { name: "Anime Slayer", url: "https://animeslayertv.com/", icon: "https://i.ibb.co/gsddh2R/Icon-com-anslayer.jpg" },
                { name: "Animefyi", url: "https://animeifytv.com/", icon: "https://i.ibb.co/Mk2bXL65/animefyi.webp" },
                { name: "Anime Witcher", url: "https://www.animewitchertv.com/", icon: "https://i.ibb.co/DHbM66sk/image.webp" },
                { name: "Anime TV", url: "https://animetv.amarullz.com/apk", icon: "https://i.ibb.co/CKw4SHj1/anime-tv.webp" },
                { name: "SaikouTV", url: "https://github.com/kemuriXD/SaikouTV/releases", icon: "https://i.ibb.co/bMXtWW6R/saikou.webp" },
                { name: "Anifox", url: "https://www.anifox.net/", icon: "https://i.ibb.co/tTjMDyNN/anifox.webp" },
                { name: "Anilab", url: "https://anilab.to/", icon: "https://i.ibb.co/B2Swbytp/Anime-Labe.webp" },
                { name: "AnimeTV (APK)", url: "https://download848.mediafire.com/ayj3tunr2zngZtToNTDZ7ukGYIEvbUjMtNCNektV6rd60jp-z_Fq0URM63zVe4l9oQttNE4HxC_7s9rTd2nuTlG0ICiB8Eqv0giZV0cXoUTn1TK0yd_9S1TvOSfvN26HPvkbIMEjLRHGO6GXiZwMByBdicMF2BfFNYhg68UJr5tT/ozzxbpwpf0hs27e/animetv-6.5.0.apk", icon: "https://i.ibb.co/CKw4SHj1/anime-tv.webp" },
                { name: "أنيماتو", url: "https://github.com/Yokij8/012/releases/download/1.0.2/animatoo.apk", icon: "" },
            ]
        },
        iptv: {
            title: 'مشغلات IPTV',
            icon: 'fa-solid fa-tower-broadcast',
            apps: [
                { name: "IPTV Smarters Pro", url: "https://www.iptvsmarters.com/", icon: "https://i.ibb.co/d0jWcjfX/ea014d4b61d36715d08a1dc5408923a6-icon.png" },
                { name: "TiviMate", url: "https://tivimate.com/", icon: "https://i.ibb.co/DPQ4Z8Dp/tv-mate-icon.png" },
                { name: "IBO Player", url: "https://iboplayer.com/downloads", icon: "https://i.ibb.co/8Wv7ZcM/ibo-player-icon.webp" },
                { name: "SmartIPTV", url: "https://iptv.app/howto/android/files/SmartIPTV.apk", icon: "https://i.ibb.co/LXF30v07/siptv-logo.png" },
                { name: "Ott Player", url: "https://ottplayer.tv/soft/android", icon: "https://i.ibb.co/wNDFfCB5/ott.webp" },
                { name: "VLC Media Player", url: "https://get.videolan.org/vlc-android/3.5.4/VLC-Android-3.5.4-armeabi-v7a.apk", icon: "" },
            ]
        },
        social: {
            title: 'سوشل ميديا وتطبيقات أخرى',
            icon: 'fa-solid fa-share-nodes',
            apps: [
                { name: "Smart Tube", url: "https://smarttubeapp.github.io/", icon: "https://i.ibb.co/bM855JYK/smart-tube.webp" },
                { name: "NoTubeTV", url: "https://github.com/ycngmn/NoTubeTV/releases/tag/v0.0.3", icon: "https://i.ibb.co/Q7YQQw6f/Notube-icon.jpg" },
                { name: "TizenTube", url: "https://www.mediafire.com/file/mlrbhjui1t8wgan/TizenTube_v1.08_icon_name_YouTube_white.apk/file", icon: "https://i.ibb.co/prJ19WvY/IMG-20260207-164621-548.jpg" },
                { name: "TikTok TV", url: "https://www.mediafire.com/file/k95ld3z9257sa4d/com.tiktok.tv-12.3.7.1.apk/file", icon: "https://i.ibb.co/tprZhvsQ/tiktok-tv.webp" },
                { name: "YouTube Kids", url: "https://d.apkpure.com/b/APK/com.google.android.apps.youtube.kids?version=latest", icon: "https://i.ibb.co/QsNYgTm/youtube-kids.webp" },
                { name: "YouTube TV", url: "https://youtube-for-android-tv.ar.uptodown.com/android/download", icon: "https://i.ibb.co/NnC6K3dM/youtube.webp" },
                { name: "WhatsApp TV", url: "https://www.apkmirror.com/apk/whatsapp-inc/", icon: "https://i.ibb.co/rG9WwJd2/whasapp.png" },
                { name: "Telegram TV", url: "https://t.me/atv_datv/2864", icon: "https://i.ibb.co/8LxP1MRJ/Telegram-tv.webp" },
            ]
        },
        tools: {
            title: 'أدوات الشاشة',
            icon: 'fa-solid fa-wrench',
            apps: [
                { name: "Downloader", url: "https://downloader-tv.com/", icon: "https://i.ibb.co/TMzYfnwm/Downloader-logo.png" },
                { name: "Chrome Browser", url: "https://clck.ru/3R3sJg", icon: "https://i.ibb.co/jkX7Kkxq/Google-Chrome-Browser.webp" },
                { name: "Play Store Shortcut", url: "https://archive.org/download/play-store-atv-shortcut/Play_Store_ATV_Shortcut.apk", icon: "https://i.ibb.co/TxgR8kMt/Gooogle-Play-Store-Short-Cut.webp" },
                { name: "Set Orientation", url: "https://d.apkpure.com/b/APK/com.googlecode.eyesfree.setorientation?version=latest", icon: "https://i.ibb.co/q35g3XF4/set-orientation-icon.png" },
                { name: "Remote Adb Shell", url: "https://github.com/cgutman/RemoteAdbShell/releases", icon: "https://i.ibb.co/jZwDbs3k/remote-adb-shell.png" },
                { name: "Fast Task Killer", url: "https://www.techdoctoruk.com/sdm_downloads/fast-task-killer-3-1-0/", icon: "https://i.ibb.co/bDZkt2L/fast-task-killer.png" },
                { name: "BrowseHere", url: "#", icon: "" },
            ]
        },
        stores: {
            title: 'متاجر بديلة',
            icon: 'fa-solid fa-store',
            apps: [
                { name: "Aurora Store", url: "https://auroraoss.com/downloads/AuroraStore/Latest/latest.apk", icon: "https://i.ibb.co/3myYq7q2/aurora-store.webp" },
                { name: "Aptoide TV", url: "https://tv.aptoide.com/", icon: "https://i.ibb.co/4RCyhGt8/aptoide-tv-icon.webp" },
                { name: "Emotn Store", url: "https://www.emotnstore.com/", icon: "https://i.ibb.co/F9yCQgt/emotn-store.webp" },
            ]
        }
    };

    const container = document.getElementById('appsContainer');
    const searchInput = document.getElementById('searchInput');
    const categoryNav = document.getElementById('categoryNav');

    // Build all sections
    function buildStore() {
        Object.entries(storeData).forEach(([catId, category]) => {
            const section = document.createElement('section');
            section.className = 'app-section';
            section.setAttribute('data-category', catId);

            const header = document.createElement('div');
            header.className = 'section-title';
            header.innerHTML = `<h2><i class="${category.icon}"></i> ${category.title} <span class="app-count">${category.apps.length}</span></h2>`;
            section.appendChild(header);

            const grid = document.createElement('div');
            grid.className = 'apps-grid';

            category.apps.forEach((app, index) => {
                const card = document.createElement('a');
                card.href = app.url;
                card.target = '_blank';
                card.className = 'app-card';
                card.setAttribute('data-name', app.name.toLowerCase());
                card.style.animationDelay = `${index * 0.05}s`;

                const iconHTML = app.icon
                    ? `<img src="${app.icon}" alt="${app.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
                    : '';
                const fallbackIcon = `<div class="app-icon-fallback" style="${app.icon ? 'display:none' : 'display:flex'}"><i class="${category.icon}"></i></div>`;

                card.innerHTML = `
                    <div class="app-icon-img">
                        ${iconHTML}
                        ${fallbackIcon}
                    </div>
                    <h3 class="app-title">${app.name}</h3>
                    <div class="download-btn">
                        <i class="fa-solid fa-download"></i> تحميل
                    </div>
                `;
                grid.appendChild(card);
            });

            section.appendChild(grid);
            container.appendChild(section);
        });
    }

    // Category filtering
    categoryNav.addEventListener('click', (e) => {
        const btn = e.target.closest('.cat-btn');
        if (!btn) return;
        const cat = btn.dataset.cat;

        categoryNav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.app-section').forEach(sec => {
            sec.style.display = (cat === 'all' || sec.dataset.category === cat) ? 'block' : 'none';
        });

        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.app-card').forEach(c => c.style.display = '');
    });

    // Search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();

            if (term) {
                categoryNav.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            } else {
                categoryNav.querySelector('[data-cat="all"]').classList.add('active');
            }

            document.querySelectorAll('.app-section').forEach(section => {
                let hasVisible = false;
                section.querySelectorAll('.app-card').forEach(card => {
                    const name = card.getAttribute('data-name');
                    const match = !term || name.includes(term);
                    card.style.display = match ? '' : 'none';
                    if (match) hasVisible = true;
                });
                section.style.display = (!term || hasVisible) ? 'block' : 'none';
            });
        });
    }

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    buildStore();

    document.querySelectorAll('.app-card').forEach((card, i) => {
        observer.observe(card);
    });
});
