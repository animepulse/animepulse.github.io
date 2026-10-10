
/* AnimePulse application module 1 */
const anime=[
{id:1,title:"Solo Leveling",year:2024,genres:["Экшен","Фэнтези","Приключения"],rating:"8.7",symbol:"⚔",image:"https://cdn.myanimelist.net/images/anime/1733/142687l.jpg",c1:"#51234f",c2:"#101b3d",desc:"Охотник Сон Джин-у получает загадочную систему, которая позволяет ему становиться сильнее.",status:"Завершён сезон"},
{id:2,title:"Атака титанов",year:2013,genres:["Экшен","Драма","Фэнтези"],rating:"9.1",symbol:"巨",image:"https://cdn.myanimelist.net/images/anime/10/47347l.jpg",c1:"#8c452d",c2:"#242c3a",desc:"Люди сражаются за выживание за стенами, защищающими их от гигантских титанов.",status:"Завершено"},
{id:3,title:"Твоё имя",year:2016,genres:["Романтика","Драма"],rating:"8.8",symbol:"☄",image:"https://cdn.myanimelist.net/images/anime/5/87048l.jpg",c1:"#e77c71",c2:"#344d83",desc:"Два подростка загадочным образом меняются телами и пытаются найти друг друга.",status:"Фильм"},
{id:4,title:"Магическая битва",year:2020,genres:["Экшен","Фэнтези"],rating:"8.6",symbol:"呪",image:"https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",c1:"#27666a",c2:"#29204b",desc:"Юдзи Итадори вступает в мир проклятий и опасных магических сражений.",status:"Несколько сезонов"},
{id:5,title:"Фрирен",year:2023,genres:["Фэнтези","Приключения","Драма"],rating:"9.0",symbol:"✦",image:"https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",c1:"#5b9c9b",c2:"#35416f",desc:"Эльфийская волшебница заново открывает ценность времени и человеческих отношений.",status:"Продолжается"},
{id:6,title:"Хоримия",year:2021,genres:["Романтика"],rating:"8.1",symbol:"♡",image:"https://cdn.myanimelist.net/images/anime/1695/111486l.jpg",c1:"#ef9eae",c2:"#59436e",desc:"Хори и Миямура открывают друг другу настоящих себя за пределами школьных образов.",status:"Завершён сезон"},
{id:7,title:"Вайолет Эвергарден",year:2018,genres:["Драма","Приключения"],rating:"8.7",symbol:"✉",image:"https://cdn.myanimelist.net/images/anime/1795/95088l.jpg",c1:"#83a8b8",c2:"#374a73",desc:"Бывшая солдатка учится понимать чувства людей, помогая им писать письма.",status:"Завершено"},
{id:8,title:"Реинкарнация безработного",year:2021,genres:["Фэнтези","Приключения","Драма"],rating:"8.3",symbol:"魔",image:"https://cdn.myanimelist.net/images/anime/1530/117776l.jpg",c1:"#b17b3b",c2:"#583d58",desc:"Мужчина получает второй шанс в магическом мире и пытается прожить новую жизнь иначе.",status:"Несколько сезонов"}
];

const films=[
{id:101,title:"Интерстеллар",year:2014,genres:["Фантастика","Драма","Приключения"],rating:"8.7",image:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxeW0nv0.jpg",desc:"Группа исследователей отправляется за пределы Солнечной системы в поисках нового дома для человечества."},
{id:102,title:"Начало",year:2010,genres:["Фантастика","Боевик","Триллер"],rating:"8.8",image:"https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",desc:"Команда специалистов проникает в чужие сны, чтобы выполнить почти невозможное задание."},
{id:103,title:"Оппенгеймер",year:2023,genres:["Драма","История","Биография"],rating:"8.3",image:"https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",desc:"История физика Роберта Оппенгеймера и создания атомной бомбы во время Второй мировой войны."},
{id:104,title:"Дюна: Часть вторая",year:2024,genres:["Фантастика","Приключения","Боевик"],rating:"8.5",image:"https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",desc:"Пол Атрейдес объединяется с фременами и продолжает путь, который изменит судьбу Арракиса."},
{id:105,title:"Мстители: Финал",year:2019,genres:["Боевик","Фантастика","Приключения"],rating:"8.4",image:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",desc:"Оставшиеся в живых герои собираются вместе, чтобы исправить последствия катастрофы и вернуть надежду."},
{id:106,title:"Человек-паук: Нет пути домой",year:2021,genres:["Боевик","Фантастика","Приключения"],rating:"8.2",image:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",desc:"После раскрытия личности Питера Паркера магия открывает двери в опасные альтернативные реальности."},
{id:107,title:"Джон Уик 4",year:2023,genres:["Боевик","Триллер","Криминал"],rating:"7.6",image:"https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",desc:"Джон Уик ищет способ обрести свободу, сталкиваясь с новыми противниками по всему миру."},
{id:108,title:"Форсаж 10",year:2023,genres:["Боевик","Криминал","Приключения"],rating:"5.7",image:"https://image.tmdb.org/t/p/w500/fiVW06jE7z9xn2KMkc8XjcwM9yt.jpg",desc:"Доминик Торетто и его семья сталкиваются с врагом, который хочет заставить их заплатить за прошлое."},
{id:109,title:"Аватар: Путь воды",year:2022,genres:["Фантастика","Приключения","Боевик"],rating:"7.5",image:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",desc:"Джейк и Нейтири защищают семью и знакомятся с народом океанских рифов на Пандоре."},
{id:110,title:"Тёмный рыцарь",year:2008,genres:["Боевик","Криминал","Драма"],rating:"9.0",image:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",desc:"Бэтмен пытается защитить Готэм от Джокера — преступника, стремящегося погрузить город в хаос."},
{id:111,title:"Паразиты",year:2019,genres:["Триллер","Драма","Комедия"],rating:"8.5",image:"https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",desc:"Бедная семья постепенно проникает в жизнь богатого дома, и эта хитрая игра приводит к неожиданным последствиям."},
{id:112,title:"Грань будущего",year:2014,genres:["Фантастика","Боевик"],rating:"7.9",image:"https://image.tmdb.org/t/p/w500/h3weAFgg06GqchI2xDfufim6f4.jpg",desc:"Военный оказывается во временной петле и снова переживает один и тот же бой с инопланетными захватчиками."}
];
let activeGenre="Все",showFavorites=false,favorites=new Set();
try{const savedFavorites=JSON.parse(localStorage.getItem("animepulse-favorites")||"[]");if(Array.isArray(savedFavorites))favorites=new Set(savedFavorites.filter(id=>Number.isInteger(id)&&anime.some(a=>a.id===id)))}catch(e){favorites=new Set()}
const $=id=>document.getElementById(id);
const escapeHTML=value=>String(value??"").replace(/[&<>"\']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","\'":"&#39;"}[ch]));
document.addEventListener("error",e=>{if(e.target instanceof HTMLImageElement&&e.target.hasAttribute("data-hide-on-error"))e.target.style.display="none"},true);
function saveFavorites(){try{localStorage.setItem("animepulse-favorites",JSON.stringify([...favorites]))}catch(e){}}
function render(){const q=$("search").value.trim().toLowerCase();const items=anime.filter(a=>(activeGenre==="Все"||a.genres.includes(activeGenre))&&(!q||(a.title+" "+a.genres.join(" ")+" "+a.desc).toLowerCase().includes(q))&&(!showFavorites||favorites.has(a.id)));$("listTitle").textContent=showFavorites?"Избранное":activeGenre==="Все"?"Популярное":activeGenre;$("resultCount").textContent=items.length+" тайтл(ов)";$("favCount").textContent=favorites.size;
$("catalog").innerHTML=items.length?items.map(a=>'<article class="card"><div class="poster" style="--c1:'+escapeHTML(a.c1)+';--c2:'+escapeHTML(a.c2)+'" data-symbol="'+escapeHTML(a.symbol)+'"><img class="poster-img" src="'+escapeHTML(a.image)+'" alt="Постер аниме '+escapeHTML(a.title)+'" loading="lazy" data-hide-on-error><span class="rank">★ '+escapeHTML(a.rating)+'</span><div class="poster-title">'+escapeHTML(a.title)+'</div></div><div class="info"><div class="meta">'+escapeHTML(a.year)+' · '+a.genres.map(escapeHTML).join(" / ")+'</div><div class="desc">'+escapeHTML(a.desc)+'</div><div class="card-actions"><button data-details="'+a.id+'">Подробнее ↗</button><button class="fav" data-fav="'+a.id+'">'+(favorites.has(a.id)?"♥":"♡")+'</button></div></div></article>').join(""):'<div class="empty">Ничего не найдено.<br>Попробуй другое название или жанр.</div>'}
$("filters").addEventListener("click",e=>{const b=e.target.closest("button[data-genre]");if(!b)return;activeGenre=b.dataset.genre;showFavorites=false;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));render()});
$("catalog").addEventListener("click",e=>{const fav=e.target.closest("[data-fav]");if(fav){const id=Number(fav.dataset.fav);favorites.has(id)?favorites.delete(id):favorites.add(id);saveFavorites();render();return}const d=e.target.closest("[data-details]");if(d)openDetails(Number(d.dataset.details))});
$("searchBtn").addEventListener("click",()=>{showFavorites=false;render()});$("search").addEventListener("input",()=>{showFavorites=false;render()});
$("favoritesToggle").addEventListener("click",()=>{showFavorites=!showFavorites;activeGenre="Все";document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x.dataset.genre==="Все"));render()});
function openDetails(id){
const a=anime.find(x=>x.id===id);if(!a)return;
if(!$("modal").classList.contains("show"))history.pushState({animePulseDetail:id},"","#anime-"+id);
document.body.classList.add("modal-open");
const yt='https://www.youtube.com/results?search_query='+encodeURIComponent(a.title+' anime trailer');
$("modalTitle").textContent="";
$("modalBody").innerHTML='<div class="detail-layout"><div class="detail-copy"><h3>'+escapeHTML(a.title)+'</h3><div class="meta">'+escapeHTML(a.year)+' · ★ '+escapeHTML(a.rating)+' · '+escapeHTML(a.status)+'</div><div class="detail-genres">'+a.genres.map(g=>'<span class="tag">'+escapeHTML(g)+'</span>').join("")+'</div><p class="detail-description">'+escapeHTML(a.desc)+'</p></div><img class="detail-poster" src="'+escapeHTML(a.image)+'" alt="Постер аниме '+escapeHTML(a.title)+'" data-hide-on-error></div><section class="anime-player"><h4>Смотреть аниме</h4><div class="player-shell"><iframe class="yummyani-frame" title="Плеер YummyAnime" src="about:blank" sandbox="allow-scripts allow-same-origin allow-forms allow-presentation" referrerpolicy="no-referrer" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="display:none"></iframe><div class="player-glow"></div><div class="player-center"><button class="player-big-play" type="button" aria-label="Открыть видео">▶</button><div class="player-title">Выбери озвучку и источник</div><div class="player-subtitle">Видеоплеер AnimePulse · доступность серий зависит от выбранного источника</div></div><div class="player-controls"><button class="player-control" type="button" aria-label="Воспроизведение">▶</button><div class="player-track"><span></span></div><span class="player-time">--:--</span><button class="player-control" type="button" aria-label="Громкость">🔊</button><button class="player-control" type="button" aria-label="Полный экран">⛶</button></div></div><section class="episode-picker"><h4>Выбор серии</h4><div class="episode-grid" id="episodeGrid"><button class="episode-btn active" type="button" data-episode="1">1</button><button class="episode-btn" type="button" data-episode="2">2</button><button class="episode-btn" type="button" data-episode="3">3</button><button class="episode-btn" type="button" data-episode="4">4</button><button class="episode-btn" type="button" data-episode="5">5</button><button class="episode-btn" type="button" data-episode="6">6</button><button class="episode-btn" type="button" data-episode="7">7</button><button class="episode-btn" type="button" data-episode="8">8</button><button class="episode-btn" type="button" data-episode="9">9</button><button class="episode-btn" type="button" data-episode="10">10</button><button class="episode-btn" type="button" data-episode="11">11</button><button class="episode-btn" type="button" data-episode="12">12</button></div><p class="episode-note" id="episodeNote">Выбрана серия 1 из 12. Выбор серии обновляет поиск для выбранной озвучки.</p></section><label class="voice-label" for="voiceSelect">Озвучка / источник</label><div class="voice-options"><button class="voice-option active" type="button" data-voice="AniLibria">AniLibria</button><button class="voice-option" type="button" data-voice="YummyAnime">YummyAnime</button><button class="voice-option" type="button" data-voice="AniStar">AniStar</button><button class="voice-option" type="button" data-voice="AnimeVost">AnimeVost</button><button class="voice-option" type="button" data-voice="Узбекская озвучка" style="display:inline-flex!important;visibility:visible!important;opacity:1!important">🇺🇿 Oʻzbekcha / Узбекская озвучка</button><button class="voice-option" type="button" data-voice="Субтитры">Субтитры</button><button class="voice-option" type="button" data-voice="Оригинал">Оригинал</button></div><div class="player-source-row"><a class="player-source-btn" id="playerSourceLink" href="#" target="_blank" rel="noopener noreferrer">Найти видео ↗</a><span class="player-source-note" id="playerSourceNote">Выбран источник AniLibria. Откроется поиск по названию аниме и выбранной озвучке.</span></div></section><section class="media-section"><h4>Фотографии</h4><p class="media-hint">Листай галерею горизонтально слева направо.</p><div class="media-strip"><div class="media-tile"><img src="'+escapeHTML(a.image)+'" alt="Постер '+escapeHTML(a.title)+'"><span>Постер аниме</span></div><div class="media-tile"><img src="'+escapeHTML(a.image)+'" alt="Кадр '+escapeHTML(a.title)+'"><span>Изображение / кадр</span></div><div class="media-tile"><img src="'+escapeHTML(a.image)+'" alt="Иллюстрация '+escapeHTML(a.title)+'"><span>Иллюстрация</span></div></div><h4 style="margin-top:18px">Видео и отрывки</h4><p class="media-hint">Карточки видео тоже прокручиваются слева направо.</p><div class="media-strip"><a class="media-tile" href="'+yt+'" target="_blank" rel="noopener noreferrer"><div class="media-video-thumb"><span class="media-play">▶</span></div><span>Смотреть трейлер · '+escapeHTML(a.title)+'</span></a><a class="media-tile" href="'+yt+'" target="_blank" rel="noopener noreferrer"><div class="media-video-thumb"><span class="media-play">▶</span></div><span>Найти видеоотрывки</span></a></div></section><section class="comments-section"><h4>Комментарии</h4><p class="comments-intro">Комментарии общие для всех посетителей. Чтобы написать комментарий, войди в GitHub — это помогает защитить обсуждение от спама.</p><div id="sharedComments"><p class="comments-empty">Загрузка общей системы комментариев…</p></div></section>';
const commentsMount=$("sharedComments");commentsMount.innerHTML="";const commentsScript=document.createElement("script");commentsScript.src="https://utteranc.es/client.js";commentsScript.setAttribute("repo","animepulse/animepulse.github.io");commentsScript.setAttribute("issue-term","title");commentsScript.setAttribute("label","comments");commentsScript.setAttribute("theme","github-dark");commentsScript.crossOrigin="anonymous";commentsScript.referrerPolicy="no-referrer";commentsScript.async=true;commentsMount.appendChild(commentsScript);
const sourceLink=$("playerSourceLink"),sourceNote=$("playerSourceNote"),voiceButtons=document.querySelectorAll(".voice-option");let selectedEpisode=1,selectedVoice="AniLibria";function updateSource(){const q=a.title+" серия "+selectedEpisode+" "+selectedVoice+" озвучка смотреть";const yummyUrl="https://ru.yummyani.me/catalog/item/pererozhdenie-aristokrata-so-sposobnostyu-analiza-2026-05-02";const yummyFrame=document.querySelector(".yummyani-frame");if(selectedVoice==="YummyAnime"){sourceLink.href=yummyUrl;sourceLink.textContent="Открыть YummyAnime ↗";sourceNote.textContent="Пробуем открыть страницу YummyAnime внутри плеера. Если источник запрещает встраивание, нажми «Открыть YummyAnime».";if(yummyFrame){yummyFrame.src=yummyUrl;yummyFrame.style.display="block";}document.querySelector(".player-center").style.display="none";document.querySelector(".player-controls").style.display="none";}else{sourceLink.href="https://www.youtube.com/results?search_query="+encodeURIComponent(q);sourceLink.textContent="Найти видео ↗";sourceNote.textContent="Выбрано: серия "+selectedEpisode+", озвучка "+selectedVoice+". Сейчас это поиск видео; прямой поток серии не подключён.";if(yummyFrame){yummyFrame.src="about:blank";yummyFrame.style.display="none";}document.querySelector(".player-center").style.display="";document.querySelector(".player-controls").style.display="";}}
function selectVoice(voice){selectedVoice=voice;voiceButtons.forEach(b=>b.classList.toggle("active",b.dataset.voice===voice));updateSource();}
voiceButtons.forEach(b=>b.addEventListener("click",()=>selectVoice(b.dataset.voice)));document.querySelectorAll(".episode-btn").forEach(b=>b.addEventListener("click",()=>{selectedEpisode=Number(b.dataset.episode);document.querySelectorAll(".episode-btn").forEach(x=>x.classList.toggle("active",x===b));$("episodeNote").textContent="Выбрана серия "+selectedEpisode+" из 12. Поиск будет учитывать выбранную серию и озвучку.";updateSource();}));selectVoice("AniLibria");const playerBox=document.querySelector(".player-shell"),playButtons=document.querySelectorAll(".player-big-play,.player-control");playButtons.forEach(b=>b.addEventListener("click",()=>{sourceLink.click()}));
$("modal").classList.add("show");$("modal").scrollTop=0;document.querySelector("#modal .modal-box").scrollTop=0;
}
function closeDetails(useHistory=true){
if(!$("modal").classList.contains("show"))return;
if(useHistory&&history.state&&history.state.animePulseDetail){history.back();return;}
$("modal").classList.remove("show");document.body.classList.remove("modal-open");
}
window.addEventListener("popstate",()=>{if($("modal").classList.contains("show")){closeDetails(false);return}if($("filmsView").classList.contains("open")){if($("filmDetail").classList.contains("open")){renderFilms();return}$("filmsView").classList.remove("open");$("filmsView").setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");return}});
$("closeModal").addEventListener("click",()=>closeDetails());$("modal").addEventListener("click",e=>{if(e.target===$("modal"))closeDetails()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDetails()});
const filmsUz={
101:{title:"Interstellar",genres:["Fantastika","Drama","Sarguzasht"],desc:"Tadqiqotchilar guruhi insoniyat uchun yangi makon topish maqsadida Quyosh tizimidan tashqariga yo‘l oladi."},
102:{title:"Boshlanish",genres:["Fantastika","Jangari","Triller"],desc:"Mutaxassislar jamoasi deyarli imkonsiz vazifani bajarish uchun boshqa odamlarning tushlariga kiradi."},
103:{title:"Oppengeymer",genres:["Drama","Tarix","Biografiya"],desc:"Fizik Robert Oppengeymer va Ikkinchi jahon urushi davrida atom bombasining yaratilishi haqidagi hikoya."},
104:{title:"Dyuna: Ikkinchi qism",genres:["Fantastika","Sarguzasht","Jangari"],desc:"Pol Atreyd fremenlar bilan birlashib, Arrakis taqdirini o‘zgartiradigan yo‘lni davom ettiradi."},
105:{title:"Qasoskorlar: Intiho",genres:["Jangari","Fantastika","Sarguzasht"],desc:"Omon qolgan qahramonlar falokat oqibatlarini tuzatish va umidni qaytarish uchun birlashadi."},
106:{title:"O‘rgimchak odam: Uyga yo‘l yo‘q",genres:["Jangari","Fantastika","Sarguzasht"],desc:"Piter Parkerning shaxsi oshkor bo‘lgach, sehr xavfli muqobil olamlarga eshik ochadi."},
107:{title:"Jon Uik 4",genres:["Jangari","Triller","Jinoyat"],desc:"Jon Uik ozodlikka erishish yo‘lini izlar ekan, butun dunyo bo‘ylab yangi raqiblarga duch keladi."},
108:{title:"Forsaj 10",genres:["Jangari","Jinoyat","Sarguzasht"],desc:"Dominik Toretto va uning oilasi o‘tmish uchun ulardan qasos olmoqchi bo‘lgan dushmanga qarshi turadi."},
109:{title:"Avatar: Suv yo‘li",genres:["Fantastika","Sarguzasht","Jangari"],desc:"Jeyk va Neytiri oilasini himoya qiladi hamda Pandoradagi okean riflari xalqi bilan tanishadi."},
110:{title:"Qora ritsar",genres:["Jangari","Jinoyat","Drama"],desc:"Betmen Gotemni shaharni tartibsizlikka botirmoqchi bo‘lgan Jokerdan himoya qilishga urinadi."},
111:{title:"Parazitlar",genres:["Triller","Drama","Komediya"],desc:"Kambag‘al oila asta-sekin boylar uyining hayotiga kirib boradi va bu ayyor reja kutilmagan oqibatlarga olib keladi."},
112:{title:"Kelajak chegarasi",genres:["Fantastika","Jangari"],desc:"Harbiy vaqt halqasiga tushib qoladi va o‘zga sayyoralik bosqinchilarga qarshi bir jangni qayta-qayta boshdan kechiradi."}
};
function filmDisplay(f){return currentLang==="uz"?(filmsUz[f.id]||f):f}
function renderFilms(){
const q=$("filmSearch").value.trim().toLowerCase();
const items=films.filter(f=>f.type!=="anime"&&!/аниме|anime|мультфильм|анимационн/i.test(f.title+" "+f.desc)&&((f.title+" "+f.genres.join(" ")+" "+f.desc+" "+(filmsUz[f.id]?[filmsUz[f.id].title,filmsUz[f.id].genres.join(" "),filmsUz[f.id].desc].join(" "):"")).toLowerCase().includes(q)));
$("filmCount").textContent=items.length+(currentLang==="uz"?" ta film":" фильмов");
$("filmsGrid").style.display="";$("filmsTitle").style.display="";$("filmCount").style.display="";
$("filmDetail").classList.remove("open");
$("filmsGrid").innerHTML=items.length?items.map(f=>{const d=filmDisplay(f);return '<article class="card"><div class="poster" style="--c1:#5b2b42;--c2:#17223d"><img class="poster-img" src="'+escapeHTML(f.image)+'" alt="Постер '+escapeHTML(d.title)+'" loading="lazy" data-hide-on-error><span class="rank">★ '+escapeHTML(f.rating)+'</span><div class="poster-title">'+escapeHTML(d.title)+'</div></div><div class="info"><div class="meta">'+escapeHTML(f.year)+' · '+d.genres.map(escapeHTML).join(" / ")+'</div><div class="desc">'+escapeHTML(d.desc)+'</div><div class="card-actions"><button data-film-details="'+f.id+'">'+(currentLang==="uz"?"Batafsil ↗":"Подробнее ↗")+'</button></div></div></article>'}).join(""):'<div class="empty">'+(currentLang==="uz"?"Film topilmadi. Boshqa nom yoki janrni sinab ko‘ring.":"Фильмы не найдены. Попробуй другое название или жанр.")+'</div>';
}
function openFilmDetails(id){
const f=films.find(x=>x.id===id);if(!f)return;const d=filmDisplay(f);
if(!$("filmDetail").classList.contains("open"))history.pushState({animePulseFilms:true,animePulseFilmDetail:id},"","#film-"+id);
$("filmsGrid").style.display="none";$("filmsTitle").style.display="none";$("filmCount").style.display="none";$("filmDetail").classList.add("open");
$("filmDetailContent").innerHTML='<div class="film-detail-layout"><div><div class="eyebrow">ANIMEPULSE FILM</div><h2>'+escapeHTML(d.title)+'</h2><div class="meta">'+escapeHTML(f.year)+' · ★ '+escapeHTML(f.rating)+' · '+(currentLang==="uz"?"To‘liq metrajli film":"Полнометражный фильм")+'</div><div class="detail-genres">'+d.genres.map(g=>'<span class="tag">'+escapeHTML(g)+'</span>').join("")+'</div><p>'+escapeHTML(d.desc)+'</p><div class="film-actions"><a class="player-source-btn" href="https://www.youtube.com/results?search_query='+encodeURIComponent(f.title+" anime movie")+'" target="_blank" rel="noopener noreferrer">'+(currentLang==="uz"?"Treylerni topish ↗":"Найти трейлер ↗")+'</a></div><p class="media-hint">'+(currentLang==="uz"?"Bu tugma treyler qidiruvini ochadi; filmning o‘zi AnimePulse’da joylashtirilmagan.":"Кнопка открывает поиск трейлеров; сам фильм не размещён на AnimePulse.")+'</p></div><img class="film-detail-poster" src="'+escapeHTML(f.image)+'" alt="Постер '+escapeHTML(f.title)+'" data-hide-on-error></div>';
$("filmsView").scrollTop=0;
}
$("openFilms").addEventListener("click",()=>{$("languageMenu").classList.remove("open");$("menuButton").setAttribute("aria-expanded","false");if(!$("filmsView").classList.contains("open"))history.pushState({animePulseFilms:true},"","#films");$("filmsView").classList.add("open");$("filmsView").setAttribute("aria-hidden","false");document.body.classList.add("modal-open");$("filmSearch").value="";renderFilms();$("filmsView").scrollTop=0});
$("closeFilms").addEventListener("click",()=>{if(history.state&&history.state.animePulseFilms){history.back();return}$("filmsView").classList.remove("open");$("filmsView").setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")});
$("filmSearch").addEventListener("input",renderFilms);
$("filmsGrid").addEventListener("click",e=>{const b=e.target.closest("[data-film-details]");if(b)openFilmDetails(Number(b.dataset.filmDetails))});
$("backToFilms").addEventListener("click",()=>{if(history.state&&history.state.animePulseFilmDetail){history.back();return}renderFilms()});
$("year").textContent=new Date().getFullYear();render();


/* AnimePulse application module 2 */
const translations = {
uz: {
"favorites":"Sevimlilar","Избранное":"Sevimlilar","ТВОЙ МИР АНИМЕ":"SENING ANIME OLAMING","heroEyebrow":"SENING ANIME OLAMING","heroTitle":"Keyingi\ntarang hikoyangni top.","heroText":"Yangi olamlarni kashf et, sevimli animelaringni saqla va shaxsiy kolleksiyangni yarat.",
"searchPlaceholder":"Nomi yoki janri...","search":"Qidirish","popular":"Mashhur","all":"Barchasi","fantasy":"Fantastika","action":"Jangari","romance":"Romantika","drama":"Drama","adventure":"Sarguzasht","titleCount":"ta anime","nothing":"Hech narsa topilmadi.","tryAgain":"Boshqa nom yoki janrni sinab ko‘r.",
"note":"AnimePulse demo-loyihasi. Bu tavsiyalar katalogi, seriallarni tomosha qilish sayti emas. Posterlar MyAnimeList CDN orqali yuklanadi. Rasm vaqtincha ochilmasa, kartada rangli fon ko‘rinadi.",
"footer":"AnimePulse © ","fan":"· Sanab o‘tilgan asarlarning huquq egalariga aloqasi bo‘lmagan muxlislar loyihasi.",
"close":"Yopish ×","watch":"Animeni tomosha qilish","choose":"Ovoz va manbani tanlang","playerDesc":"AnimePulse video pleeri · seriyalar mavjudligi tanlangan manbaga bog‘liq",
"episodes":"Qismni tanlash","episodeSelected":"Tanlangan qism","of":"/ 12. Tanlov tanlangan ovoz uchun qidiruvni yangilaydi.",
"voice":"Ovoz / manba","findVideo":"Videoni topish ↗","sourceChosen":"Tanlangan manba","searchOnly":"Hozircha bu video qidiruvi; qismning to‘g‘ridan-to‘g‘ri oqimi ulanmagan.",
"photos":"Rasmlar","galleryHint":"Galereyani chapdan o‘ngga suring.","poster":"Anime posteri","frame":"Kadr / tasvir","video":"Video va lavhalar","videoHint":"Video kartalarini ham chapdan o‘ngga surish mumkin.","trailer":"Treylerni ko‘rish · ","findClips":"Video lavhalarini topish","comments":"Izohlar","commentsIntro":"Izohlar barcha tashrif buyuruvchilar uchun umumiy. Izoh yozish uchun GitHub orqali kiring — bu spamdan himoya qilishga yordam beradi.",
"commentsLoading":"Umumiy izohlar tizimi yuklanmoqda…","AniLibria":"AniLibria","AniStar":"AniStar","AnimeVost":"AnimeVost","Субтитры":"Subtitrlar","Оригинал":"Original",
"Solo Leveling":"Solo Leveling","Атака титанов":"Titanlarga hujum","Твоё имя":"Sening isming","Магическая битва":"Sehrli jang","Фрирен":"Frieren","Хоримия":"Horimiya","Вайолет Эвергарден":"Violet Evergarden","Реинкарнация безработного":"Ishsizning qayta tug‘ilishi",
"Охотник Сон Джин-у получает загадочную систему, которая позволяет ему становиться сильнее.":"Ovchi Son Jin-U kuchayishiga imkon beruvchi sirli tizimga ega bo‘ladi.",
"Люди сражаются за выживание за стенами, защищающими их от гигантских титанов.":"Odamlar ularni ulkan titanlardan himoya qiluvchi devorlar ortida omon qolish uchun kurashadi.",
"Два подростка загадочным образом меняются телами и пытаются найти друг друга.":"Ikki o‘smir sirli tarzda tanalarini almashtirib, bir-birini topishga urinadi.",
"Юдзи Итадори вступает в мир проклятий и опасных магических сражений.":"Yudzi Itadori la’natlar va xavfli sehrli janglar olamiga kiradi.",
"Эльфийская волшебница заново открывает ценность времени и человеческих отношений.":"Elf sehrgar vaqt va insoniy munosabatlarning qadrini qaytadan anglaydi.",
"Хори и Миямура открывают друг другу настоящих себя за пределами школьных образов.":"Xori va Miyamura maktabdagi obrazlaridan tashqarida haqiqiy qiyofalarini bir-biriga ochadi.",
"Бывшая солдатка учится понимать чувства людей, помогая им писать письма.":"Sobiq askar odamlarga xat yozishda yordam berib, ularning hislarini tushunishni o‘rganadi.",
"Мужчина получает второй шанс в магическом мире и пытается прожить новую жизнь иначе.":"Bir erkak sehrli olamda ikkinchi imkoniyatga ega bo‘lib, yangi hayotini boshqacha yashashga urinadi.",
"Фэнтези":"Fantastika","Экшен":"Jangari","Романтика":"Romantika","Драма":"Drama","Приключения":"Sarguzasht",
"Завершён сезон":"Mavsum yakunlangan","Завершено":"Yakunlangan","Фильм":"Film","Несколько сезонов":"Bir necha mavsum","Продолжается":"Davom etmoqda",
"Подробнее ↗":"Batafsil ↗","Найди свою":"Keyingi","следующую историю.":"hikoyangni top.","Название или жанр...":"Nomi yoki janri...","Найти":"Qidirish","Популярное":"Mashhur","Все":"Barchasi"
}
};
let currentLang = "ru";try{const savedLanguage=localStorage.getItem("animepulse-language");if(savedLanguage==="ru"||savedLanguage==="uz")currentLang=savedLanguage}catch(e){}
function tr(s){return currentLang==="uz" && translations.uz[s] ? translations.uz[s] : s}
function translateStatic(){
document.documentElement.lang=currentLang==="uz"?"uz":"ru";
document.title=currentLang==="uz"?"AnimePulse — anime katalogi":"AnimePulse — каталог аниме";
document.querySelector('[data-i18n="favorites"]').textContent=tr("Избранное");
$("search").placeholder=tr("Название или жанр...");
$("search").setAttribute("aria-label",tr("Название или жанр..."));
$("searchBtn").textContent=tr("Найти");
document.querySelector(".eyebrow").textContent=tr("ТВОЙ МИР АНИМЕ");
document.querySelector(".hero h1").innerHTML=currentLang==="uz"?"Keyingi<br>hikoyangni top.":"Найди свою<br>следующую историю.";
document.querySelector(".hero p").textContent=currentLang==="uz"?translations.uz.heroText:"Открывай новые миры, сохраняй любимые тайтлы и собирай личную коллекцию аниме.";
document.querySelector(".note").textContent=tr("Демо-проект AnimePulse. Это каталог-рекомендатель, а не сайт для просмотра серий. Постеры загружаются с CDN MyAnimeList. Если изображение временно недоступно, карточка покажет цветной фон.");
document.querySelector("footer").innerHTML='AnimePulse © <span id="year">'+new Date().getFullYear()+'</span> '+tr("· Фанатский проект, не связанный с правообладателями перечисленных произведений.");
document.querySelectorAll(".filter").forEach(b=>{const g=b.dataset.genre;const key=({"Все":"Все","Фэнтези":"Фэнтези","Экшен":"Экшен","Романтика":"Романтика","Драма":"Драма","Приключения":"Приключения"})[g];b.textContent=tr(key)});
document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===currentLang));
}
function translateFilms(){
const uz=currentLang==="uz";
$("filmsSectionLabel").textContent=uz?"/ Kinolar":"/ Фильмы";
$("closeFilms").textContent=uz?"← Animelarga qaytish":"← Назад к аниме";
$("filmSearch").placeholder=uz?"Film nomi yoki janri bo‘yicha qidirish…":"Найти фильм по названию или жанру…";
$("filmSearch").setAttribute("aria-label",$("filmSearch").placeholder);
$("filmsTitle").textContent=uz?"Mashhur filmlar":"Популярные фильмы";
$("filmsGrid").querySelectorAll("[data-film-details]").forEach(b=>b.textContent=uz?"Batafsil ↗":"Подробнее ↗");
if(!$("filmDetail").classList.contains("open")) $("filmsHeroTitle").textContent=uz?"To‘liq metrajli kino":"Полнометражное кино";
}
document.querySelectorAll("[data-film-lang]").forEach(b=>b.addEventListener("click",()=>{setLanguage(b.dataset.filmLang)}));
function setLanguage(lang){
currentLang=lang;try{localStorage.setItem("animepulse-language",lang)}catch(e){}
translateStatic();render();translateFilms();
if($("filmsView").classList.contains("open")&&$("filmDetail").classList.contains("open")){const hashMatch=location.hash.match(/#film-(\d+)/);const filmId=Number((history.state&&history.state.animePulseFilmDetail)|| (hashMatch&&hashMatch[1]) || 0);if(filmId)openFilmDetails(filmId);else renderFilms()}
if($("modal").classList.contains("show")){const id=Number(location.hash.replace("#anime-",""));if(id)openDetails(id)}
$("languageMenu").classList.remove("open");$("menuButton").setAttribute("aria-expanded","false");
}
$("menuButton").addEventListener("click",()=>{const open=$("languageMenu").classList.toggle("open");$("menuButton").setAttribute("aria-expanded",String(open))});
$("languageMenu").addEventListener("click",e=>{const b=e.target.closest("[data-lang]");if(b)setLanguage(b.dataset.lang)});
document.addEventListener("click",e=>{if(!e.target.closest(".menu-wrap"))$("languageMenu").classList.remove("open")});


/* AnimePulse application module 3 */
translateStatic();translateFilms();const originalRender=render;
render=function(){originalRender();if(currentLang!=="uz")return;
$("listTitle").textContent=showFavorites?"Sevimlilar":tr(activeGenre);
$("resultCount").textContent=$("resultCount").textContent.replace(" тайтл(ов)"," ta anime");
document.querySelectorAll("#catalog .card").forEach(card=>{
const title=card.querySelector(".poster-title");if(title)title.textContent=tr(title.textContent);
const meta=card.querySelector(".meta");if(meta){meta.textContent=meta.textContent.replace("Фэнтези","Fantastika").replace("Экшен","Jangari").replace("Романтика","Romantika").replace("Драма","Drama").replace("Приключения","Sarguzasht")}
const desc=card.querySelector(".desc");if(desc)desc.textContent=tr(desc.textContent);
const details=card.querySelector("[data-details]");if(details)details.textContent="Batafsil ↗";
});
if(!$("catalog").querySelector(".card"))$("catalog").innerHTML='<div class="empty">Hech narsa topilmadi.<br>Boshqa nom yoki janrni sinab ko‘r.</div>';
};
const originalOpenDetails=openDetails;
openDetails=function(id){originalOpenDetails(id);if(currentLang!=="uz")return;
const root=$("modalBody");
root.querySelectorAll(".detail-copy h3").forEach(x=>x.textContent=tr(x.textContent));
root.querySelectorAll(".detail-description").forEach(x=>x.textContent=tr(x.textContent));
root.querySelectorAll(".anime-player h4").forEach(x=>{if(x.textContent==="Смотреть аниме")x.textContent="Animeni tomosha qilish";else if(x.textContent==="Выбор серии")x.textContent="Qismni tanlash"});
const texts=[["Выбери озвучку и источник","Ovoz va manbani tanlang"],["Видеоплеер AnimePulse · доступность серий зависит от выбранного источника","AnimePulse video pleeri · seriyalar tanlangan manbaga bog‘liq"],["Озвучка / источник","Ovoz / manba"],["Найти видео ↗","Videoni topish ↗"],["Фотографии","Rasmlar"],["Листай галерею горизонтально слева направо.","Galereyani chapdan o‘ngga suring."],["Видео и отрывки","Video va lavhalar"],["Карточки видео тоже прокручиваются слева направо.","Video kartalarini ham chapdan o‘ngga surish mumkin."],["Комментарии","Izohlar"],["Комментарии общие для всех посетителей. Чтобы написать комментарий, войди в GitHub — это помогает защитить обсуждение от спама.","Izohlar barcha tashrif buyuruvchilar uchun umumiy. Izoh yozish uchun GitHub orqali kiring — bu spamdan himoya qiladi."]];
root.querySelectorAll("h4,p,label,a,span,button,div").forEach(el=>{if(el.children.length===0){for(const [a,b] of texts)if(el.textContent.trim()===a)el.textContent=b}});
root.querySelectorAll(".voice-option").forEach(b=>{if(b.dataset.voice==="Узбекская озвучка")b.textContent="Oʻzbekcha";if(b.dataset.voice==="Субтитры")b.textContent="Subtitrlar";if(b.dataset.voice==="Оригинал")b.textContent="Original"});
root.querySelectorAll(".tag").forEach(x=>x.textContent=tr(x.textContent));
};
