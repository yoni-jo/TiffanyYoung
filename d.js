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

        let px = scrollY * 0.005
        let gray = scrollY * 0.08
        top_content.style.filter = `blur(${px}px) grayscale(${gray}%)`
        top_content.style.animation = 'fadein'

            ++px;
        ++gray;
    } else {

        top_content.style.filter = 'blur(0)grayscale(0)'
    }

})


//스크롤시 자연스럽게 애니메이션 효과
const bg_news = document.querySelector('#bg_news'); // 스크린 창
const section = document.querySelectorAll('section');
const shop_button=document.querySelector('.shop_button')
const section_array = [];
let count=0;
const section_height=[];

section.forEach(sections => { //세션별 높이값 구해서 배열로 담기
   
    section_array.push(sections)
    section_height.push(section_array[count].offsetHeight)
   
    count++;

})
window.addEventListener('scroll', () => {

    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

    
    
    show(scrollLocation, bg_news, top_content)
    console.log(scrollLocation)
    if(scrollLocation>=section_height[0]+section_height[1] - 200){
        console.log(shop_button)
        shop_button.classList.add('showup')
    }
});
// bgnews부분
function show(a, b, c) {

    if (a >= c.offsetHeight - 200) {
        b.classList.remove('section_hide')
        b.classList.add('section_show')
    } else if (a < c.offsetHeight - 200) {
        b.classList.add('section_hide')
        b.classList.remove('section_show')
    }

}