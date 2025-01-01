class TextInputRecommen {
  constructor(inputSelector, recommendations) {
    this.inputField = document.querySelector(inputSelector);
    this.recommendations = recommendations;
    this.recommendationBox = this.createRecommendationBox();

    this.init();
  }

  // Membuat elemen rekomendasi
  createRecommendationBox() {
    const recommendationBox = document.createElement('div');
    recommendationBox.classList.add('recommendations');
    Object.assign(recommendationBox.style, {
      position: 'absolute',
      top: `${this.inputField.offsetTop + this.inputField.offsetHeight}px`,
      left: `${this.inputField.offsetLeft}px`,
      width: `${this.inputField.offsetWidth}px`,
      maxHeight: '300px',
      overflowY: 'auto',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      zIndex: '1000',
      borderRadius: '4px',
      display: 'none',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Memberikan efek pop-up
    });
    document.body.appendChild(recommendationBox);
    return recommendationBox;
  }

  // Inisialisasi event listener
  init() {
    this.inputField.addEventListener('input', () => this.handleInput());
    this.inputField.addEventListener('focus', () => this.handleFocus());
    document.addEventListener('click', (e) => this.handleOutsideClick(e));
    window.addEventListener('resize', () => this.updateRecommendationBoxPosition());
  }

  // Menangani input dari pengguna
  handleInput() {
    const query = this.inputField.value.toLowerCase();
    const matches = this.recommendations.filter((item) =>
      item.toLowerCase().includes(query)
    );
    this.updateRecommendations(matches);
  }

  // Menampilkan semua rekomendasi ketika input aktif
  handleFocus() {
    this.updateRecommendations(this.recommendations);
  }
  removeHtmlTags(input) {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
  }
  decodeHtmlEntities(str) {
    // Decode numeric entities (e.g., &#039; -> ')
    str = str.replace(/&#(\d+);/g, function(match, code) {
        return String.fromCharCode(parseInt(code, 10));
    });

    // Decode hexadecimal numeric entities (e.g., &#x27; -> ')
    str = str.replace(/&#x([0-9A-Fa-f]+);/g, function(match, code) {
        return String.fromCharCode(parseInt(code, 16));
    });

    // Decode named entities (e.g., &lt; -> <)
    const entityMap = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&#47;': '/',
        '&#96;': '`',
        '&nbsp;': ' ',
        '&iexcl;': '¡',
        '&cent;': '¢',
        '&pound;': '£',
        '&yen;': '¥',
        '&copy;': '©',
        '&reg;': '®',
        '&divide;': '÷',
        '&times;': '×',
        // You can add more HTML entities here if needed
    };

    str = str.replace(/&[a-zA-Z0-9#]+;/g, function(match) {
        return entityMap[match] || match;
    });

    return str;
  }
  // Memperbarui daftar rekomendasi
  updateRecommendations(matches) {
    this.recommendationBox.innerHTML = '';
    if (matches.length > 0) {
      this.recommendationBox.style.display = 'block';
      matches.forEach((match) => {
        const div = document.createElement('div');
        div.innerHTML = this.removeHtmlTags(match);
        Object.assign(div.style, {
          padding: '10px',
          cursor: 'pointer',
          borderBottom: '1px solid #f0f0f0',
        });
        div.addEventListener('click', () => {
          this.inputField.value = this.decodeHtmlEntities(match);
          this.recommendationBox.style.display = 'none';
        });
        this.recommendationBox.appendChild(div);
      });
    } else {
      this.recommendationBox.style.display = 'none';
    }
  }

  // Mengatur ulang posisi dan ukuran kotak rekomendasi saat jendela berubah ukuran
  updateRecommendationBoxPosition() {
    Object.assign(this.recommendationBox.style, {
      top: `${this.inputField.offsetTop + this.inputField.offsetHeight}px`,
      left: `${this.inputField.offsetLeft}px`,
      width: `${this.inputField.offsetWidth}px`,
    });
  }

  // Menangani klik di luar area input
  handleOutsideClick(e) {
    if (!e.target.isSameNode(this.inputField) && !this.recommendationBox.contains(e.target)) {
      this.recommendationBox.style.display = 'none';
    }
  }
}
