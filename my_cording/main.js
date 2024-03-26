//search logo
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//검색창 누르면 실행
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

//input에 focus되어지면 실행
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//focus가 해제되면 실행(blur 실행)
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

