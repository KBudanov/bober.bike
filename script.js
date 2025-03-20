$("#ready").on("click", function() {
    let tgId = 961172191;
   // let tgId2 = 961172191;
    let botToken = '7778420619:AAGdw0nns0aoXuSQcc-Fi0-1G53eFpHgPh8';

    let tgIdd = "none";

    let name = $("#name").val() 
    $("#name").val('');
    let number = $("#number").val()
    $("#number").val('');
    tgIdd = $("#tgIdd").val()
    $("#tgIdd").val('');
    let description = $("#description").val()
    $("#description").val('');

    let orderText = `
NEW ORDER %0A
Name: ${name}%0A
Phone Number: ${number}%0A
Telegram ID: ${tgIdd}%0A
Problem description: ${description}%0A
`;


let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}`;
   // let botUrl2 = `https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${tgId2}&caption=${orderText}`;

    $.post(botUrl)
   // $.post(botUrl2)
})



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
  });