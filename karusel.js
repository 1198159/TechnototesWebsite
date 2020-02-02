let slider = document.querySelectorAll('li'), // memilih semua slider (total slider 5 gambar)
    bingkai = document.querySelector('.bingkai'),
    bodyLeft = document.body.offsetWidth,
    bodyTop = document.body.offsetHeight,
    transition = 500, // nilai transisi setiap animasi
    loop = 1, // loop dimulai dari gambar ke-2 atau index ke-1
    cek, intId,
    areaSlider = document.querySelector('ul'); 

function totArea() {
  // membuat auto center position untuk Slider
  if (document.body.offsetWidth < 940) {
    bingkai.style.transform = 'scale(' + (document.body.offsetWidth/(940+100)) + ')'; // 940px + 100px
    bingkai.style.left = ((document.body.offsetWidth/2) - (areaSlider.offsetWidth/2)) + 'px';
    bingkai.style.top = ((document.body.offsetHeight/2) - (areaSlider.offsetHeight/2)) + 'px';
    }
  areaSlider.style.width = slider.length * 100 + '%'; // agar width UL menjadi 940px X 5 (banyaknya slider)
  areaSlider.style.transition = transition + 'ms ease-in-out';
  bingkai.style.transition = transition + 'ms ease-in';

  // fungsi cek yaitu mendapatkan int ID untuk setiap Slider
  // Jika sudah mencapai jumlah keseluruhan Slider
  // Maka akan kembali ke slider awal (index = 0)
  cek = () => {
    if (loop === slider.length) loop = 0;
    counter(loop++);
  }

  // fungsi interval selama 5 detik (slide berganti gambar)
  intId = setInterval(cek, 5000);

  // fungsi yang menjalankan pergantian slide gambar
  // selain itu membuat responsive ukuran layar saat di perkecil atau diperbesar
  // mengikuti nilai waktu interval sebesar 5 detik

  function counter(n) {
    // membutuhkan nilai body width dan height baru
    // ini hanya berfungsi jika ukuran layar browser berubah mengecil/membesar
    const newBodyLeft = document.body.offsetWidth,
          newBodyTop = document.body.offsetHeight;


    // fungsi IF digunakan jika ukuran layar browser diperkecil
    if (newBodyLeft < bodyLeft) {
      if (document.body.offsetWidth < 940) { // angka 940 didapat dari ukuran width setiap slider
        bingkai.style.transform = 'scale(' + (document.body.offsetWidth/(940+100)) + ')'; // ditambah 100 agar seimbang sisi kanan dan atas
      }
      // untuk mendapatkan posisi tengah jika ukuran layar browser berubah
      bingkai.style.left = ((document.body.offsetWidth/2) - (slider[n].offsetWidth/2)) + 'px';
      bingkai.style.top = ((document.body.offsetHeight/2) - (slider[n].offsetHeight/2)) + 'px';
    } else {
      // ini kebalikannya, jika ukuran layar diperbesar
      // maka bingkai tetap dengan lebar 940x380 px (scale=1)
      // jika ukuran layar browser lebih kecil maka nilai scale kurang dari 1
      if (document.body.offsetWidth < 940) {
        bingkai.style.transform = 'scale(' + (document.body.offsetWidth/(940+100)) + ')'; // nilai scale kurang dari 1
      } else {
        bingkai.style.transform = 'scale(1)';
      }
      bingkai.style.left = ((newBodyLeft/2) - (slider[n].offsetWidth/2)) + 'px';
      bingkai.style.top = ((newBodyTop/2) - (slider[n].offsetHeight/2)) + 'px';
    }

    // Animasi slides
    // saat berganti slide

    // Arah animasi untuk slider pertama
    if (n === 0) {
      areaSlider.style.left = -slider[n].offsetLeft + 70 + 'px';
      setTimeout(() => {
        areaSlider.style.left = -slider[n].offsetLeft - 100 + 'px'
      }, (1.02 * transition));
      setTimeout(() => {
        areaSlider.style.left = -slider[n].offsetLeft + 'px'
      }, (1.8 * transition));
    } else {
      areaSlider.style.left = -slider[n].offsetLeft - 70 + 'px';
      setTimeout(() => {
        areaSlider.style.left = -slider[n].offsetLeft + 50 + 'px'
      }, (1.02 * transition));
      setTimeout(() => {
        areaSlider.style.left = -slider[n].offsetLeft + 'px'
      }, (1.8 * transition));
    }
    console.log(n)
  }
}
totArea();
