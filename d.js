// 햄버거버튼 이벤트
const hb_button = document.querySelector(".hb_button")
const input = document.querySelector('#hb_button')
const menu = document.querySelector('.hide')


hb_button.addEventListener('click', () => {
    if (menu.className === 'hide') {

        menu.classList.remove('hide')
        menu.classList.toggle('show')
    } else {

        menu.classList.remove('show')
        menu.classList.toggle('hide')
    }

});

// 스크롤 내렸을때 헤더부분 이벤트

const gnb = document.getElementById('gnb');
const menu_gnb = document.getElementById('menu_gnb')
const img = document.querySelector('.img')
const top_content = document.querySelector('#top_content')
const contentHeight = top_content.scrollHeight;
window.addEventListener('scroll', function () {
    if (window.scrollY >= '150') {
        gnb.classList.add('gnb_hide')
        menu_gnb.classList.add('change')
        img.setAttribute('src', 'img/site-logo-dark.png')

    } else {

        gnb.classList.remove('gnb_hide')
        menu_gnb.classList.remove('change')
        img.setAttribute('src', 'img/site-logo.png')
    }



    let px = 0;
    let gray = 0;
    if (window.scrollY >= '300') {
        
        let px = scrollY*0.005
        let gray = scrollY*0.08
        top_content.style.filter = `blur(${px}px) grayscale(${gray}%)`
        top_content.style.animation = 'fadein'

        ++px;
        ++gray;
    } else {

        top_content.style.filter = 'blur(0)grayscale(0)'
    }

})


//스크롤시 자연스럽게 애니메이션 효과

window.addEventListener('scroll', () => {
	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
	const bg_news = document.querySelector('#bg_news'); // 스크린 창
    const top_content = document.querySelector('#top_content');
   
   if(scrollLocation>=top_content.offsetHeight - 200){
    bg_news.classList.remove('section_hide')
    bg_news.classList.add('section_show')
   }
  else if(scrollLocation<top_content.offsetHeight - 200){
    bg_news.classList.add('section_hide')
    bg_news.classList.remove('section_show')
  }
   
});