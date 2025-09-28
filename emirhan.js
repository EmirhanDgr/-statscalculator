const emirhan = {
  ortalama: function (sayilar) {
    if (!Array.isArray(sayilar) || sayilar.length === 0) return 0;
    let toplam = sayilar.reduce((acc, current) => acc + current, 0);
    return toplam / sayilar.length;
  },

  sigmakitle: function (sayilar) {
    if (sayilar.length <= 1) return 0;
    const ortalama = this.ortalama(sayilar);
    const pay = sayilar.reduce(
      (toplam, x) => toplam + Math.pow(x - ortalama, 2),
      0
    );
    return Math.sqrt(pay / sayilar.length);
  },

  sigmaornek: function (sayilar) {
    if (sayilar.length <= 1) return 0;
    const ortalama = this.ortalama(sayilar);
    const pay = sayilar.reduce(
      (toplam, x) => toplam + Math.pow(x - ortalama, 2),
      0
    );
    return Math.sqrt(pay / (sayilar.length - 1));
  },

  sigmakare: function (sayilar) {
    return Math.pow(this.sigmakitle(sayilar), 2);
  },

  skare: function (sayilar) {
    return Math.pow(this.sigmaornek(sayilar), 2);
  },

  medyan: function (sayilar) {
    if (!Array.isArray(sayilar) || sayilar.length === 0) return 0;
    const sirali = [...sayilar].sort((a, b) => a - b);
    const ortancaIndex = Math.floor(sirali.length / 2);
    return sirali.length % 2 !== 0
      ? sirali[ortancaIndex]
      : (sirali[ortancaIndex - 1] + sirali[ortancaIndex]) / 2;
  },

  mod: function (sayilar) {
    if (!Array.isArray(sayilar) || sayilar.length === 0) return null;
    const frekans = {};
    let maxFreq = 0;
    let modDeger = [];
    sayilar.forEach((sayi) => {
      frekans[sayi] = (frekans[sayi] || 0) + 1;
      if (frekans[sayi] > maxFreq) maxFreq = frekans[sayi];
    });
    for (let key in frekans) {
      if (frekans[key] === maxFreq) modDeger.push(Number(key));
    }
    return modDeger.length === sayilar.length ? null : modDeger;
  },

  seror: function (sayilar) {
    if (!Array.isArray(sayilar) || sayilar.length <= 1) return 0;
    return this.sigmaornek(sayilar) / Math.sqrt(sayilar.length);
  },

  q1: function (sayilar) {
    if (!Array.isArray(sayilar) || sayilar.length === 0) return 0;
    const sirali = [...sayilar].sort((a, b) => a - b);
    const mid = Math.floor(sirali.length / 2);
    const altYarim = sirali.slice(0, mid);
    return this.medyan(altYarim);
  },

  q2: function (sayilar) {
    return this.medyan(sayilar);
  },

  q3: function (sayilar) {
    if (!Array.isArray(sayilar) || sayilar.length === 0) return 0;
    const sirali = [...sayilar].sort((a, b) => a - b);
    const mid = Math.floor(sirali.length / 2);
    const ustYarim =
      sirali.length % 2 === 0 ? sirali.slice(mid) : sirali.slice(mid + 1);
    return this.medyan(ustYarim);
  },

  iqr: function (sayilar) {
    return (this.q3(sayilar) - this.q1(sayilar)) / 2;
  },
};
