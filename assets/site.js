// Notemory landing page: language (Turkish / English, no cookies or storage: ?lang= in the address),
// scroll reveals (off with Reduce Motion), the App Store button. No trackers, no requests elsewhere.
(function () {
  "use strict";

  // Flip to true once the app is live on the App Store: the button then links to the store page.
  var APP_LIVE = false;

  var TR = {
    "skip": "İçeriğe geç",
    "nav.features": "Özellikler",
    "nav.plans": "Planlar",
    "nav.faq": "SSS",
    "nav.support": "Destek",
    "hero.sub": "Ders Kaydı ve Notlar",
    "hero.lead": "Dersi kaydet, Apple Pencil ile slaytlarının üzerine not al. Yazdığın bir yere dokun, hocanın o anda ne dediğini dinle. Yapay zekâ da hepsini, ilgili slaytı gösteren özetlere ve testlere dönüştürsün.",
    "store.small": "Çok yakında",
    "store.label": "App Store’da",
    "store.liveSmall": "App Store’dan",
    "store.liveLabel": "İndir",
    "hero.more": "Nasıl çalıştığını gör",
    "hero.note": "iPad için. Apple Pencil ile ya da parmağınla yazabilirsin; başlamak ücretsiz.",
    "rec.over": "Yazarken kaydet",
    "rec.title": "Dersin ses kaydı, slaytlarınla eşleşir.",
    "rec.lead": "Dersin slaytlarını içe aktar, kaydı başlat ve Apple Pencil ile üzerlerine not al. Hoca konuşurken ses kaydı iPad’inde yazıya dökülür; her cümle, o an ekranda hangi slaytın açık olduğunu bilir.",
    "rec.p1": "Türkçe ve İngilizce dersler anında yazıya dökülür, hepsi iPad’de",
    "rec.p2": "Ses kaydı iPad’inden hiç çıkmaz",
    "rec.p3": "Kalemler, yazının altında kalan fosforlu kalem, şekiller, bant, çıkartmalar ve metin kutuları",
    "ink.over": "Notuna dokun, dinle",
    "ink.title": "Not aldığın anda ne söylendiğini dinle.",
    "ink.lead": "Her çizgi, ses kaydındaki anını hatırlar. Dinle modunu aç, yuvarlak içine aldığın kelimeye dokun; kayıt tam o andan çalmaya başlasın. Notlarını, dersle birlikte yazıldıkları sırayla yeniden izle.",
    "ink.p1": "Dökümdeki bir satıra dokun, o sırada aldığın not öne çıksın",
    "ink.p2": "Hocanın “Bu sınavda çıkar” dediği yer slaytta kendiliğinden işaretlenir",
    "ink.p3": "Zoom, Teams ya da telefon ses kayıtlarını da içe aktar",
    "ai.over": "Kaynağını gösteren yapay zekâ",
    "ai.title": "Seni slayta götüren özetler ve testler.",
    "ai.lead": "Slaytların ve dersin özetini al; her madde hangi slayttan geldiğini gösterir. Yedi soru türünde test çöz; her cevaptan sonra “Slaytta Göster”, sorunun geldiği satırı işaretler.",
    "ai.p1": "Bilgi kartları, boşluklu kartlar ve şema kartları",
    "ai.p2": "Sınavların yaklaştıkça sıklaşan aralıklı tekrar",
    "ai.p3": "Kaynak gösteren “Notlarına Sor” (Pro)",
    "ai.chip": "Plus ve Pro",
    "math.over": "El yazısıyla matematik",
    "math.title": "El yazısından LaTeX’e, adım adım çözüme.",
    "math.lead": "El yazısı bir formülü kementle seç, düzenlenebilir LaTeX’e dönüşsün. Bir fonksiyonun grafiğini sayfaya ekle. Bir soruda takıldığında çözümü adım adım aç ya da kendi çözümündeki ilk hatalı satırı bulsun.",
    "math.p1": "Cornell, çizgili, kareli ve ajanda sayfaları; yazdıkça büyüyen tahtalar",
    "math.p2": "Sonradan düzenleyebileceğin formüller ve grafikler",
    "math.p3": "Adım adım çözüm ve “Çözümümü Kontrol Et” (Pro)",
    "topic.over": "Nerede olduğunu gör",
    "topic.title": "Zayıf noktalarını gösteren konu haritası.",
    "topic.lead": "Her ders, konularının haritasına dönüşür; testlerine ve tekrarlarına göre her konuyu ne kadar bildiğini gösterir. Zayıf konular kırmızıyla işaretlenir; tek dokunuşla tam o slaytlardan bir test başlatırsın.",
    "topic.p1": "Cevaplarına göre sıralanan zayıf slaytlar",
    "topic.p2": "Koyduğun yıldızlar ve soru işaretleri her derste bir arada",
    "topic.p3": "Her yerde arama: slaytlar, el yazısı, taranmış sayfalar ve dökümler",
    "exam.over": "Sınav modu",
    "exam.title": "Sınav gününe hazır, haftalık planınla.",
    "exam.lead": "Sınav programının fotoğrafını çek, sınavlar takvimine eklensin. Geri sayımı ve ne kadar hazır olduğunu gör, süreli sınav provasıyla kendini dene. Çalışma planı da tekrarları ve zayıf konuları derslerinin arasına yerleştirsin.",
    "exam.p1": "Her sınavdan önce hatırlatma",
    "exam.p2": "Tahmini notunu gösteren süreli sınav provası",
    "exam.p3": "Takvimine göre haftalık çalışma planı (Plus ve Pro)",
    "imp.over": "Elindeki dosyalarla başla",
    "imp.title": "PowerPoint, Word, PDF ve ses kayıtları.",
    "imp.lead": "Dersin PowerPoint ya da Word dosyasını ekle; konuşmacı notlarıyla birlikte iPad’inde dönüştürülsün. Zoom, Teams ya da telefonundan bir ses kaydını içe aktar: iPad’de yazıya dökülür ve slaytlarla eşleştirilir.",
    "imp.p1": "Dönüştürme iPad’de yapılır, hiçbir dosya yüklenmez",
    "imp.p2": "Uzun kayıtlar arka planda yazıya dökülmeye devam eder",
    "imp.p3": "Slayt eşleşmesini tek dokunuşla düzelt",
    "priv.over": "iCloud ve gizlilik",
    "priv.title": "Notların sana ait.",
    "priv.lead": "Kitaplığın iPad’inde durur; istersen kendi iCloud hesabınla bütün iPad’lerinde eşzamanlanır.",
    "priv.c1t": "iCloud eşzamanlama ve yedek",
    "priv.c1": "Slaytlar, notlar, defterler ve ses kayıtları kendi iCloud hesabınla eşzamanlanır. İki iPad’de aynı sayfaya not alsan da ikisindeki notlar korunur. İstediğin zaman yedek alabilirsin.",
    "priv.c2t": "Ses kaydı iPad’de kalır",
    "priv.c2": "Konuşma iPad’de yazıya dökülür. Ses kaydı hiçbir zaman yüklenmez.",
    "priv.c3t": "Yapay zekâ yalnızca sen istediğinde",
    "priv.c3": "Yapay zekâ özellikleri, sen onay verdikten sonra yalnızca o iş için gereken bilgiyi gönderir; içerik sunucumuzda saklanmaz.",
    "priv.c4t": "Uygulamada reklam yok",
    "priv.c4": "Notların, ses kayıtların ve dökümlerin reklam için asla paylaşılmaz. Bu sitede çerez ya da izleme aracı yok.",
    "plans.over": "Planlar",
    "plans.title": "Ücretsiz başla, yapay zekâyı istediğinde ekle.",
    "plans.lead": "Fiyatlar App Store’da kendi para biriminde gösterilir. Yıllık Plus ve Pro planları 7 gün ücretsiz denemeyle başlar; aylık planlarda deneme yoktur.",
    "plans.trial": "Yıllık: 7 gün ücretsiz",
    "plan.free": "Ücretsiz",
    "free.1": "3 defter ve 3 belge",
    "free.2": "Ses kaydı ve canlı döküm",
    "free.3": "Kalemle not, Dinle modu, arama",
    "free.4": "Hazır örnek ders",
    "lite.1": "Sınırsız defter ve belge",
    "lite.2": "Ücretsiz plandaki her şey",
    "lite.3": "Yapay zekâ özelliği yok",
    "plus.1": "Slaytları gösteren yapay zekâ özetleri",
    "plus.2": "Testler, bilgi kartları ve yeni tekrar soruları",
    "plus.3": "Çalışma planı ve konu haritası",
    "plus.4": "El yazısı matematiği LaTeX’e çevirme",
    "plus.5": "Fotoğraftan okunan sınav programı",
    "pro.1": "Plus’taki her şey, en yüksek kullanım hakkıyla",
    "pro.2": "Kendi slaytlarınla çalışan yapay zekâ öğretmen, sesli olarak da",
    "pro.3": "Adım adım çözüm",
    "pro.4": "Notlarına Sor ve sesli özetler",
    "pro.5": "El yazısı okuma ve yazılı cevapların değerlendirilmesi",
    "plans.note": "Yapay zekâ özelliklerinin aylık kullanım hakkı vardır; ne kadar kaldığını Ayarlar’da görebilirsin. Abonelikler kendiliğinden yenilenir; Apple Hesabı ayarlarından iptal edebilirsin.",
    "faq.over": "SSS",
    "faq.title": "Sorular",
    "q1": "Notemory hangi cihazlarda çalışır?",
    "a1": "iPadOS 26 veya daha yeni bir sürümü olan iPad’lerde. Yazmak için en rahatı Apple Pencil, ama parmağınla da yazabilirsin.",
    "q2": "Ders kaydım internete yükleniyor mu?",
    "a2": "Hayır. Ses kayıtları ve dökümler iPad’inde, eşzamanlamayı açarsan kendi iCloud hesabında kalır. Konuşma iPad’de yazıya dökülür.",
    "q3": "Hangi dillerdeki dersler yazıya dökülüyor?",
    "a3": "Türkçe ve İngilizce. Bir dilde ilk kez kayıt yaptığında Apple’ın konuşma modeli indirilebilir.",
    "q4": "Hesap gerekiyor mu?",
    "a4": "Hayır. Yapay zekâ özellikleri, bilgilendirmeyi kabul ettiğinde uygulamanın oluşturduğu anonim bir hesapla çalışır. Apple ile giriş isteğe bağlıdır; planını bütün cihazlarında korur.",
    "q7": "Ücretsiz deneme var mı?",
    "a7": "Evet, yıllık Plus ve Pro planları 7 gün ücretsiz başlar. Aylık planlarda deneme yoktur. Apple her Apple Hesabına bir deneme hakkı tanır.",
    "q5": "Abonelik bitince ne olur?",
    "a5": "Hiçbir şey silinmez. Ücretsiz planda her şeyi açabilir, okuyabilir, dinleyebilir ve dışa aktarabilirsin; en son düzenlediğin üç defter ve üç belge düzenlenebilir kalır.",
    "q6": "Kendi derslerimi eklemeden deneyebilir miyim?",
    "a6": "Evet. Hazır örnek derste slaytlar, dökümüyle birlikte bir ses kaydı, notlar, bir özet, bir test ve bilgi kartları var.",
    "cta.title": "Bir sonraki dersin aklında kalsın.",
    "foot.about": "iPad için ders notları ve yapay zekâ.",
    "foot.legal": "Yasal",
    "foot.terms": "Kullanım Koşulları",
    "foot.privacy": "Gizlilik Politikası",
    "foot.support": "Destek",
    "foot.other": "Diğer dilde",
    "foot.terms2": "Terms of Use",
    "foot.privacy2": "Privacy Policy",
    "foot.support2": "Support",
    "foot.contact": "İletişim",
    "foot.fine": "© 2026 Vela Systems. Apple, iPad, Apple Pencil ve iCloud, Apple Inc.’in ticari markalarıdır. Yazı tipleri: Bricolage Grotesque ve DM Sans (SIL Open Font License,",
    "alt.lecture": "Yuvarlak içine alınmış bir kelime, oynatma çubuğu ve canlı dökümle bir ders slaytı",
    "alt.ink": "“Glukokinaz” kelimesinin kırmızı kalemle yuvarlak içine alındığı slayt",
    "alt.summary": "Slaytların yanında, her maddesi slayt numarasını gösteren bir özet",
    "alt.quiz": "Cevaplanmış bir test sorusu ve sorunun geldiği yeri işaretleyen slayt",
    "alt.notebook": "Yazılı notlar ve iki formül içeren bir Cornell defter sayfası",
    "alt.course": "Konu haritasının olduğu bir ders sayfası; bir konu zayıf olarak işaretli",
    "alt.exam": "Bir sınav sayfası: 12 gün kaldı, hatırlatmalar ve ders",
    "alt.agenda": "Dersler, sınav ve çalışma önerileriyle haftanın ajandası",
    "alt.import": "Bir derse ses kaydı içe aktarma",
    "alt.simulation": "Süreli sınav provasını hazırlama: soru türleri, uzunluk ve zorluk",
    "meta.title": "Notemory: Ders Kaydı ve Notlar, iPad için",
    "meta.description": "Dersi kaydet, Apple Pencil ile slaytlarına not al, yazdığın yere dokunup o anı dinle. Seni slayta götüren özetler ve testler. iPad için."
  };
  var EN_LIVE = { "store.liveSmall": "Download on", "store.liveLabel": "the App Store" };

  var root = document.documentElement;
  var english = {}; // the page's own (English) texts, kept to switch back
  var textNodes = document.querySelectorAll("[data-i18n]");
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  textNodes.forEach(function (el) { english[el.dataset.i18n] = el.textContent; });
  altNodes.forEach(function (el) { english["alt:" + el.dataset.i18nAlt] = el.alt; });
  english["meta.title"] = document.title;
  var description = document.querySelector('meta[name="description"]');
  english["meta.description"] = description.content;
  document.querySelectorAll("[data-href-tr]").forEach(function (el) { el.dataset.hrefEn = el.getAttribute("href"); });

  function text(lang, key) {
    if (lang === "tr" && TR[key] !== undefined) return TR[key];
    if (EN_LIVE[key] !== undefined) return EN_LIVE[key];
    return english[key];
  }

  function apply(lang) {
    root.lang = lang;
    textNodes.forEach(function (el) {
      var value = text(lang, el.dataset.i18n);
      if (value !== undefined) el.textContent = value;
    });
    altNodes.forEach(function (el) {
      el.alt = lang === "tr" ? (TR[el.dataset.i18nAlt] || el.alt) : english["alt:" + el.dataset.i18nAlt];
    });
    document.querySelectorAll("img[data-shot]").forEach(function (img) {
      img.src = "assets/img/" + lang + "-" + img.dataset.shot + ".webp";
    });
    document.querySelectorAll("[data-href-tr]").forEach(function (el) {
      el.setAttribute("href", lang === "tr" ? el.dataset.hrefTr : el.dataset.hrefEn);
    });
    document.querySelectorAll("[data-lang-swap]").forEach(function (el) { el.lang = lang === "tr" ? "en" : "tr"; });
    document.title = text(lang, "meta.title");
    description.content = text(lang, "meta.description");
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    storeButtons(lang);
  }

  function storeButtons(lang) {
    document.querySelectorAll("[data-store]").forEach(function (a) {
      var small = a.querySelector('[data-i18n="store.small"]');
      var label = a.querySelector('[data-i18n="store.label"]');
      if (APP_LIVE) {
        a.removeAttribute("aria-disabled");
        a.removeAttribute("tabindex");
        small.textContent = text(lang, "store.liveSmall");
        label.textContent = text(lang, "store.liveLabel");
      } else {
        // Until the app is live: not a link anywhere yet.
        a.setAttribute("aria-disabled", "true");
        a.setAttribute("tabindex", "-1");
      }
    });
  }

  document.querySelectorAll("[data-store]").forEach(function (a) {
    a.addEventListener("click", function (e) { if (!APP_LIVE) e.preventDefault(); });
  });

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      var lang = b.dataset.lang;
      apply(lang);
      var url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    });
  });

  apply(root.lang === "tr" ? "tr" : "en");

  // The header gets a line once the page scrolls.
  var top = document.querySelector(".top");
  var onScroll = function () { top.classList.toggle("scrolled", window.scrollY > 8); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveals as sections come into view; with Reduce Motion everything is simply shown.
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll(".reveal:not(.in)");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("in"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); observer.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  }
})();
