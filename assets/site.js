// Notemory landing page: language (Turkish / English, no cookies or storage: ?lang= in the address),
// scroll reveals (off with Reduce Motion), the App Store button. No trackers, no requests elsewhere.
(function () {
  "use strict";

  // Flip to true once the app is live on the App Store: the button then links to the store page.
  var APP_LIVE = false;

  var TR = {
    "skip": "İçeriğe geç",
    "nav.features": "Özellikler", "nav.plans": "Planlar", "nav.faq": "SSS", "nav.support": "Destek",
    "hero.sub": "Ders Kaydı ve Notlar",
    "hero.lead": "Dersi kaydet, Apple Pencil ile slaytlarının üzerine yaz; el yazına dokun, o an hocanın ne dediğini dinle. Yapay zekâ bunları tam slayta işaret eden özetlere ve testlere dönüştürsün.",
    "store.small": "Çok yakında", "store.label": "App Store’da",
    "store.liveSmall": "İndir", "store.liveLabel": "App Store’dan",
    "hero.more": "Nasıl çalıştığını gör",
    "hero.note": "iPad için; Apple Pencil ile ya da parmağınla. Ücretsiz başla.",
    "rec.over": "Yazarken kaydet",
    "rec.title": "Ders, slaytlarınla eş zamanlı.",
    "rec.lead": "Dersin slaytlarını içe aktar, kaydı başlat ve Apple Pencil ile üzerlerine yaz. Deşifre, hoca konuşurken iPad’inde yapılır; her kelime o an ekranda hangi slaytın olduğunu bilir.",
    "rec.p1": "Türkçe veya İngilizce canlı deşifre, cihazda",
    "rec.p2": "Ses iPad’inden hiç çıkmaz",
    "rec.p3": "Kalemler, yazının arkasında kalan fosforlu kalem, şekiller, bant, çıkartmalar, metin kutuları",
    "ink.over": "Mürekkebine dokun",
    "ink.title": "Yazdığın an ne söylendiyse onu dinle.",
    "ink.lead": "Her çizgi kayıttaki anını hatırlar. Dinle’yi aç, yuvarlak içine aldığın kelimeye dokun, kayıt tam oradan çalsın. Notlarını dersle birlikte, yazıldıkları gibi yeniden oynat.",
    "ink.p1": "Deşifredeki bir satıra dokun, o sırada yazdığın mürekkep parlasın",
    "ink.p2": "Hocanın “bu sınavda çıkar” dediği yer slaytta kendiliğinden işaretlenir",
    "ink.p3": "Zoom, Teams ya da telefon kayıtlarını da içe aktar",
    "ai.over": "Kaynağını gösteren yapay zekâ",
    "ai.title": "Slayta geri dönen özetler ve testler.",
    "ai.lead": "Slaytların ve dersin, her maddesi kendi slaytını gösteren özetini al. Yedi soru türünde test çöz; her cevaptan sonra “Slaytta Göster” sorunun geldiği satırı işaretler.",
    "ai.p1": "Bilgi kartları, boşluklu kartlar ve diyagram kartları",
    "ai.p2": "Sınavlarından önce sıklaşan aralıklı tekrar",
    "ai.p3": "Kaynak gösteren “Notlarına Sor” (Pro)",
    "ai.chip": "Plus ve Pro",
    "math.over": "Matematik, yazılı ve çözümlü",
    "math.title": "El yazısından LaTeX’e. Adım adım çözüm.",
    "math.lead": "El yazısı bir formülü kementle seç, düzenlenebilir LaTeX’e dönüşsün. Bir fonksiyonun grafiğini sayfaya ekle. Takıldığın soruda çözümü adım adım aç ya da kendi çözümündeki ilk yanlış satırı bulsun.",
    "math.p1": "Cornell, çizgili, kareli ve ajanda kâğıtları; yazdıkça büyüyen beyaz tahtalar",
    "math.p2": "Sonra düzenleyebileceğin formüller ve grafikler",
    "math.p3": "Adım adım çözüm ve “Çözümümü Kontrol Et” (Pro)",
    "topic.over": "Nerede olduğunu bil",
    "topic.title": "Zayıf noktalarınla bir konu haritası.",
    "topic.lead": "Her ders, konularının bir haritasına dönüşür; testlerine ve tekrarlarına göre her konuyu ne kadar bildiğini gösterir. Zayıf konular kırmızıya döner, tek dokunuşla tam o slaytlardan test başlar.",
    "topic.p1": "Cevaplarından sıralanan zayıf slaytlar",
    "topic.p2": "Koyduğun yıldızlar ve soru işaretleri ders ders toplanır",
    "topic.p3": "Her şeyde arama: slaytlar, el yazısı, taramalar, deşifreler",
    "exam.over": "Sınav modu",
    "exam.title": "Sınav gününe hazır, haftanın planıyla.",
    "exam.lead": "Sınav programının fotoğrafını çek, sınavlar senin için eklensin. Geri sayımı ve ne kadar hazır olduğunu gör, süreli sınav provasıyla çalış; çalışma planı tekrarları ve zayıf konuları derslerinin arasına yerleştirsin.",
    "exam.p1": "Her sınavdan önce hatırlatmalar",
    "exam.p2": "Tahmini notla süreli sınav provası",
    "exam.p3": "Takvimine göre haftalık çalışma planı (Plus ve Pro)",
    "imp.over": "Elindekini getir",
    "imp.title": "PowerPoint, Word, PDF ve ders kayıtları.",
    "imp.lead": "Dersin PowerPoint ya da Word dosyasını bırak, konuşmacı notlarıyla birlikte iPad’inde dönüştürülsün. Zoom, Teams ya da telefonundan bir kaydı içe aktar: cihazda deşifre edilir ve slaytlarla eşleştirilir.",
    "imp.p1": "iPad’de dönüştürülür, hiçbir şey yüklenmez",
    "imp.p2": "Uzun kayıtların deşifresi arka planda sürer",
    "imp.p3": "Slayt eşleşmesini tek dokunuşla düzelt",
    "priv.over": "iCloud ve gizlilik",
    "priv.title": "Notların senin.",
    "priv.lead": "Kütüphanen iPad’inde, istersen kendi iCloud’unda, bütün iPad’lerinde durur.",
    "priv.c1t": "iCloud eşitleme ve yedekler",
    "priv.c1": "Slaytlar, mürekkep, defterler ve kayıtlar kendi iCloud’unla eşitlenir. İki cihaz buluştuğunda ikisinin mürekkebi de korunur. İstediğin zaman yedek al.",
    "priv.c2t": "Ses iPad’de kalır",
    "priv.c2": "Konuşma cihazda yazıya çevrilir. Ders sesi hiçbir zaman yüklenmez.",
    "priv.c3t": "Yapay zekâ yalnızca istediğinde",
    "priv.c3": "Yapay zekâ özellikleri, sen onay verdikten sonra yalnızca o özelliğin ihtiyacı olanı gönderir; içerik sunucumuzda saklanmaz.",
    "priv.c4t": "Uygulamada reklam yok",
    "priv.c4": "Notların, kayıtların ve deşifrelerin reklam için asla paylaşılmaz. Bu sitede çerez ya da izleyici yok.",
    "plans.over": "Planlar",
    "plans.title": "Ücretsiz başla. Yapay zekâyı istediğinde ekle.",
    "plans.lead": "Fiyatlar App Store’da kendi para biriminde görünür. Plus ve Pro 7 günlük ücretsiz denemeyle başlar.",
    "plans.trial": "7 gün ücretsiz",
    "plan.free": "Ücretsiz", "free.1": "3 defter ve 3 belge", "free.2": "Kayıt ve canlı deşifre", "free.3": "Kalemle notlar, Dinle modu, arama", "free.4": "Hazır örnek ders",
    "lite.1": "Sınırsız defter ve belge", "lite.2": "Ücretsiz’deki her şey", "lite.3": "Yapay zekâ özelliği yok",
    "plus.1": "Slayta işaret eden yapay zekâ özetleri", "plus.2": "Testler, bilgi kartları ve yeni tekrar soruları", "plus.3": "Çalışma planı ve konu haritası", "plus.4": "El yazısı matematikten LaTeX’e", "plus.5": "Fotoğraftan okunan sınav programı",
    "pro.1": "Plus’taki her şey, en büyük hakla", "pro.2": "Kendi slaytlarında yapay zekâ öğretmen, sesli de", "pro.3": "Adım adım çözüm", "pro.4": "Notlarına Sor, sesli özetler", "pro.5": "El yazısı okuma, yazılı cevapların değerlendirilmesi",
    "plans.note": "Yapay zekâ özelliklerinin aylık hakkı vardır; ne kadar kaldığını Ayarlar gösterir. Abonelikler kendiliğinden yenilenir ve Apple Hesabı ayarlarından iptal edilebilir.",
    "faq.over": "SSS", "faq.title": "Sorular",
    "q1": "Notemory hangi cihazlarda çalışır?", "a1": "iPadOS 26 veya sonrası yüklü iPad’lerde. Yazmak için en iyisi Apple Pencil, ama parmağınla da yazabilirsin.",
    "q2": "Ders sesim yükleniyor mu?", "a2": "Hayır. Kayıtlar ve deşifreler iPad’inde, eşitlemeyi açarsan kendi iCloud’unda kalır. Konuşma cihazda yazıya çevrilir.",
    "q3": "Hangi diller deşifre ediliyor?", "a3": "Türkçe ve İngilizce. Bir dildeki ilk kayıt, Apple’ın konuşma modelini indirebilir.",
    "q4": "Hesap gerekiyor mu?", "a4": "Hayır. Yapay zekâ özellikleri, bilgilendirmeyi kabul ettikten sonra uygulamanın oluşturduğu anonim bir hesapla çalışır. Apple ile giriş isteğe bağlıdır ve planını bütün cihazlarında tutar.",
    "q5": "Abonelik bitince ne olur?", "a5": "Hiçbir şey silinmez. Ücretsiz planda her şeyi açabilir, okuyabilir, dinleyebilir ve dışa aktarabilirsin; en son düzenlenen üç defter ve üç belge düzenlenebilir kalır.",
    "q6": "Kendi derslerimi eklemeden deneyebilir miyim?", "a6": "Evet. Hazır örnek derste slaytlar, deşifresiyle bir kayıt, notlar, bir özet, bir test ve bilgi kartları var.",
    "cta.title": "Bir sonraki dersin, hatırlanmış.",
    "foot.about": "iPad için ders notları ve yapay zekâ.",
    "foot.legal": "Yasal", "foot.terms": "Kullanım Koşulları", "foot.privacy": "Gizlilik Politikası", "foot.support": "Destek",
    "foot.other": "Diğer dilde", "foot.terms2": "Terms of Use", "foot.privacy2": "Privacy Policy", "foot.support2": "Support",
    "foot.contact": "İletişim",
    "foot.fine": "© 2026 Vela Systems. Apple, iPad, Apple Pencil ve iCloud, Apple Inc.’in ticari markalarıdır. Yazı tipleri: Bricolage Grotesque ve DM Sans (SIL Open Font License,",
    "alt.lecture": "Yuvarlak içine alınmış bir kelime, oynatma çubuğu ve canlı deşifreyle bir ders slaytı",
    "alt.ink": "“Glukokinaz” kelimesinin kırmızı mürekkeple yuvarlak içine alındığı slayt",
    "alt.summary": "Slaytların yanında, her maddesi slayt numarasını gösteren bir özet",
    "alt.quiz": "Cevaplanmış bir test sorusu ve geldiği yeri işaretleyen slayt",
    "alt.notebook": "Yazılmış notlar ve iki formülle bir Cornell defter sayfası",
    "alt.course": "Konu haritasıyla bir ders sayfası, bir konu zayıf olarak işaretli",
    "alt.exam": "Bir sınav sayfası: 12 gün kaldı, hatırlatmalar ve ders",
    "alt.agenda": "Dersler, sınav ve çalışma önerileriyle haftanın ajandası",
    "alt.import": "Bir derse ders kaydı içe aktarma",
    "alt.simulation": "Süreli sınav provasını hazırlama: soru türleri, uzunluk ve zorluk",
    "meta.title": "Notemory: Ders Kaydı ve Notlar, iPad için",
    "meta.description": "Dersi kaydet, Apple Pencil ile slaytlarına yaz, mürekkebine dokunup o anı dinle. Tam slayta işaret eden özetler ve testler. iPad için."
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
