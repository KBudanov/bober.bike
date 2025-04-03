const _0x2439e7=_0x53ca;function _0x4727(){const _0x158867=['#tgIdd','1580CuZCMi','1319003LPAbWo','&text=','#description','256BbTMqX','1212gVAVUI','135750ltegnH','2453776Rcuhaf','\x20rgba(178,\x20100,\x2071,\x201)','%0A\x0a\x20\x20\x20\x20\x20\x20Problem\x20description:\x20','background-color','8173RJCuIV','28KxSWoU','/sendMessage?chat_id=','913510FeQbvo','https://api.telegram.org/bot','val','#number','6gDrDYz','159333xAcORs','post','%0A\x0a','#name','81tdEOZf','\x0a\x20\x20\x20\x20\x20\x20NEW\x20ORDER\x20%0A\x0a\x20\x20\x20\x20\x20\x20Name:\x20','none','#ready'];_0x4727=function(){return _0x158867;};return _0x4727();}function _0x53ca(_0x258046,_0x38fa76){const _0x472766=_0x4727();return _0x53ca=function(_0x53cabe,_0x2884d5){_0x53cabe=_0x53cabe-0x1cb;let _0x21bd22=_0x472766[_0x53cabe];return _0x21bd22;},_0x53ca(_0x258046,_0x38fa76);}(function(_0x4e45c0,_0x47eb48){const _0x122229=_0x53ca,_0x43271f=_0x4e45c0();while(!![]){try{const _0x42a847=parseInt(_0x122229(0x1df))/0x1*(parseInt(_0x122229(0x1e3))/0x2)+-parseInt(_0x122229(0x1d6))/0x3*(parseInt(_0x122229(0x1cf))/0x4)+-parseInt(_0x122229(0x1d1))/0x5*(parseInt(_0x122229(0x1d5))/0x6)+parseInt(_0x122229(0x1e0))/0x7+parseInt(_0x122229(0x1e6))/0x8+parseInt(_0x122229(0x1da))/0x9*(parseInt(_0x122229(0x1e5))/0xa)+parseInt(_0x122229(0x1ce))/0xb*(-parseInt(_0x122229(0x1e4))/0xc);if(_0x42a847===_0x47eb48)break;else _0x43271f['push'](_0x43271f['shift']());}catch(_0x1c2fb2){_0x43271f['push'](_0x43271f['shift']());}}}(_0x4727,0x2e65c),$(_0x2439e7(0x1dd))['on']('click',function(){const _0x43af2b=_0x2439e7;$('#ready')['css'](_0x43af2b(0x1cd),_0x43af2b(0x1cb));let _0x1c3f3f=0x394a52df,_0x1f32f1=0x1861a6388,_0x4be2fc='7778420619:AAGdw0nns0aoXuSQcc-Fi0-1G53eFpHgPh8',_0x3eef94=_0x43af2b(0x1dc),_0x226ceb=$(_0x43af2b(0x1d9))[_0x43af2b(0x1d3)]();$(_0x43af2b(0x1d9))['val']('');let _0x4c75e7=$('#number')[_0x43af2b(0x1d3)]();$(_0x43af2b(0x1d4))[_0x43af2b(0x1d3)](''),_0x3eef94=$(_0x43af2b(0x1de))[_0x43af2b(0x1d3)](),$(_0x43af2b(0x1de))['val']('');let _0x4ebdf2=$(_0x43af2b(0x1e2))[_0x43af2b(0x1d3)]();$(_0x43af2b(0x1e2))[_0x43af2b(0x1d3)]('');if(!_0x226ceb)return;if(!_0x4c75e7)return;let _0x52dffc=_0x43af2b(0x1db)+_0x226ceb+'%0A\x0a\x20\x20\x20\x20\x20\x20Phone\x20Number:\x20'+_0x4c75e7+'%0A\x0a\x20\x20\x20\x20\x20\x20Telegram\x20ID:\x20'+_0x3eef94+_0x43af2b(0x1cc)+_0x4ebdf2+_0x43af2b(0x1d8),_0x30e800=_0x43af2b(0x1d2)+_0x4be2fc+'/sendMessage?chat_id='+_0x1c3f3f+_0x43af2b(0x1e1)+_0x52dffc,_0x5eb26d=_0x43af2b(0x1d2)+_0x4be2fc+_0x43af2b(0x1d0)+_0x1f32f1+'&text='+_0x52dffc;$[_0x43af2b(0x1d7)](_0x30e800),$['post'](_0x5eb26d);}));



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    loop: true, // Зациклене прокручування
    autoplay: {
      delay: 2000, // Час між прокрутками (у мілісекундах)
      disableOnInteraction: false, // Не зупиняти при взаємодії
    },
    speed: 1000, // Швидкість анімації (у мілісекундах)
  });

  $(".mobileNav").toggle();

  function nav(x) {
    x.classList.toggle("change");
    $(".mobileNav").toggle();
}

function hidenav(){
  $(".mobileNav").toggle();
}