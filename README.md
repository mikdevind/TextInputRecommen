# TextInputRecommendation Documentation

TextInputRecommendation adalah library sederhana untuk menambahkan fitur rekomendasi otomatis pada input teks. Library ini memudahkan pengguna dalam memilih data yang sesuai dari daftar yang disediakan dengan fitur interaktif dan mudah dikustomisasi.

---

## Fitur Utama

1. **Rekomendasi Otomatis**
   - Menampilkan daftar rekomendasi berdasarkan teks yang diinputkan pengguna.

2. **Dukungan untuk Input Teks Tunggal**
   - Mendukung satu elemen input per inisialisasi.

3. **Interaksi yang Responsif**
   - Menyesuaikan posisi dan ukuran kotak rekomendasi secara otomatis.

4. **Penghapusan Tag HTML**
   - Mencegah injeksi kode HTML dengan membersihkan tag dari data rekomendasi.

5. **Kustomisasi Mudah**
   - Mudah menambahkan gaya atau logika tambahan untuk kotak rekomendasi.

---

## Instalasi

1. **Tambahkan Library ke Proyek Anda**
   Tambahkan file `TextInputRecommen.js` ke dalam proyek Anda dengan cara menyertakan script berikut di file HTML:

```html
<script type="text/javascript" src="TextInputRecommen.js"></script>
```

2. **Tambahkan Elemen Input di HTML**
   Pastikan elemen input memiliki ID atau class untuk dikenali oleh library.

Contoh:

```html
<input type="text" id="inputField" placeholder="Ketik sesuatu...">
```

---

## Contoh Penggunaan

### Langkah 1: Siapkan Elemen Input dan Data Rekomendasi
Gunakan elemen HTML input yang ingin dilengkapi dengan fitur rekomendasi.

Contoh HTML:

```html
<input type="text" id="inputField" placeholder="Cari nama...">
```

Data rekomendasi disiapkan dalam format array.

Contoh JavaScript:

```javascript
const recommendations = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
```

### Langkah 2: Inisialisasi TextInputRecommen.js
Panggil library `TextInputRecommen` dengan selector elemen input dan data rekomendasi.

Contoh JavaScript:

```javascript
new TextInputRecommen("#inputField", recommendations);
```

### Hasil Akhir
Ketika pengguna mengetik di dalam input, daftar rekomendasi yang relevan akan muncul di bawah input, memudahkan mereka untuk memilih opsi yang sesuai.

---

## Tips

- **Gunakan Data yang Relevan**: Pastikan daftar rekomendasi relevan dengan kebutuhan pengguna untuk meningkatkan pengalaman.
