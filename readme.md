# İstatistiksel Hesap Makinesi

Bu proje temel düzeydeki istatistiksel hesaplamaları hazır kütüphaneler kullanmadan "emirhan.js" dosyasına tanımladığım formüllerle hesaplayan bir hesap makinesidir. Girdiğiniz veriler doğrultusunda toplamda 10 ölçümün tek tuşla hesaplanmasıyla kolaylık ve hız kazanmak amaçlanmıştır.

## Matematiksel Formüller

### 1. Ortalama (Mean)

$$
\bar{x} = \frac{1}{n} \sum_{i=1}^{n} x_i
$$

---

### 2. Kitle Standart Sapması (Population Standard Deviation σ)

$$
\sigma = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(x_i - \mu)^2}
$$

---

### 3. Örneklem Standart Sapması (Sample Standard Deviations s)

$$
s = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2}
$$

---

### 4. Kitle Varyansı (Population Variance σ²)

$$
\sigma^2 = \frac{1}{N} \sum_{i=1}^{N}(x_i - \mu)^2
$$

---

### 5. Örneklem Varyansı (Sample Variance s²)

$$
s^2 = \frac{1}{n-1} \sum_{i=1}^{n}(x_i - \bar{x})^2
$$

---

### 6. Standart Hata (Standard Error)

$$
SE = \frac{s}{\sqrt{n}}
$$

---

### 7. Mod (Mode)

En çok tekrar eden değer(ler).  
Eğer tüm değerler eşit frekansta ise mod yoktur.

---

### 8. Medyan (Median)

Veriler küçükten büyüğe sıralandıktan sonra ortadaki değer:

- \( n \) tek → ortadaki eleman
- \( n \) çift → ortadaki iki elemanın ortalaması

---

### 9. Çeyreklikler (Quartiles)

$$
Q_1 = \text{alt yarının medyanı}
$$

$$
Q_2 = \text{ortanca değer}
$$

$$
Q_3 = \text{üst yarının medyanı}
$$

---

### 10. Çeyrek Sapma

$$
 = \frac{Q_3 - Q_1}{2}
$$
