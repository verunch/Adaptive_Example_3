$(document).ready(function(){
  var data1 = [
      
      {img1:"image/absolute.png",img2:"image/slider_1.jpg"},
      {img1:"image/absolute.png",img2:"image/slider_1.jpg"},
      {img1:"image/absolute.png",img2:"image/slider_1.jpg"},
      {img1:"image/absolute.png",img2:"image/slider_1.jpg"},
      {img1:"image/absolute.png",img2:"image/slider_1.jpg"}, 
      {img1:"image/absolute.png",img2:"image/slider_1.jpg"},
      {img1:"image/absolute.png",img2:"image/slider_1.jpg"}
  
    ];

    
     $('#Slider1').tmpl(data1).appendTo('.responsive');

$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
   autoplay:true,
    autoplaySpeed:2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


var data = [
      
      {row1: "Мобильное",row2:"приложение для",row3:"умного кошелька",img:"image/slider_2.png",text1:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores nam?",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil alias repellendus eveniet. Eius nobis, nisi aliquid delectus quos, animi aperiam molestiae culpa exercitationem architecto fugit dolor. Deleniti in tempore perferendis."},
      {row1: "Мобильное",row2:"приложение для",row3:"умного кошелька",img:"image/slider_2.png",text1:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores nam?",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt totam quidem, ducimus nesciunt, nam ratione nihil enim vel fuga, unde at ut? Excepturi soluta rerum at quaerat vitae quos, aliquid."},
      {row1: "Мобильное",row2:"приложение для",row3:"умного кошелька",img:"image/slider_2.png",text1:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores nam?",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum soluta officiis nulla, quibusdam nostrum non enim commodi optio. Deserunt sunt mollitia perspiciatis tempore dolor consectetur. Obcaecati esse ut autem voluptatibus!"},
      {row1: "Мобильное",row2:"приложение для",row3:"умного кошелька",img:"image/slider_2.png",text1:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores nam?",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam dolor perferendis praesentium cumque nobis neque, fugit numquam sed obcaecati a esse expedita optio, quibusdam aspernatur unde, illum, dignissimos eos!"},
      {row1: "Мобильное",row2:"приложение для",row3:"умного кошелька",img:"image/slider_2.png",text1:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores nam?",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quos porro doloremque ipsum dignissimos exercitationem minus voluptate, iusto nesciunt facilis quasi explicabo ut, fugiat aliquam soluta sed rerum! Dolores, nemo."},
      {row1: "Мобильное",row2:"приложение для",row3:"умного кошелька",img:"image/slider_2.png",text1:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores nam?",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, repellendus. Libero aperiam odio, maiores, iusto esse quos consequatur tenetur sed vero illum dignissimos, veniam! Vero corporis omnis velit ipsa eligendi!"},
      {row1: "Мобильное",row2:"приложение для",row3:"умного кошелька",img:"image/slider_2.png",text1:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores nam?",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur aliquid, laudantium ratione a illo doloremque possimus consequatur. Inventore laboriosam, nemo voluptates reprehenderit velit, error aperiam facere amet, sed, omnis perspiciatis!"}
  
    ];

    
     $('#SliderDots1').tmpl(data).appendTo('.SliderDots1');





$('.SliderDots1').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



var data3 = [
      
      {img:"image/slider_3.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi "},
      {img:"image/slider_3.png",text:"Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex hic blanditiis nam sapiente facere officia iure! Ea obcaecati iusto hic officia placeat voluptate explicabo doloribus eligendi. Architecto, vel rem officiis. ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doipsmodi aperiam iusto suscipit illum sequi ut sint, per iloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do"},
      {img:"image/slider_3.png",text:"Lorem ipsmodi aperiam iusto suscipit illum sequi Lorem ipsum dolor sit amet, consectetur adipisicing elit. At expedita iure eligendi, laudantium tempore a repellat nisi, excepturi illum delectus beatae distinctio, dolores reprehenderit ipsum. Vero reiciendis nihil facilis, deleniti. ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum docati esse ut autem voluptatibus!"},
      {img:"image/slider_3.png",text:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi beatae hic, repudiandae asperiores perspiciatis rem voluptas, non veniam qui repellat error quam perferendis, velit nihil esse itaque ratione tempore ad? autem, porro, molestiae labore dolores Lorem ipsum dode, illum, dignissimos eos!"},
      {img:"image/slider_3.png",text:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do sed Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate assumenda similique nobis quas dolorem est obcaecati, quo, aspernatur laborum iusto distinctio vero voluptatibus nulla perspiciatis optio inventore necessitatibus! Eligendi, laborum.rerum!Lorem> Dolores, nemo."},
      {img:"image/slider_3.png",text:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum dois velit ipsa eligendi!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum labore soluta dicta, obcaecati aspernatur recusandae quae eaque enim? Fugiat laboriosam dolore repudiandae dolor facere adipisci, cumque sequi vero assumenda nostrum."},
      {img:"image/slider_3.png",text:"Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do aperiam facere amet, sed, omnis perspiciatis!Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corporis ab, laboriosam consequuntur deleniti, distinctio aperiam expedita minus tenetur quasi minima, architecto doloribus dolorum ea earum facilis blanditiis nisi obcaecati!"}
  
    ];

    
     $('#SliderDots2').tmpl(data3).appendTo('.SliderDots2');





$('.SliderDots2').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
   autoplay:true,
    autoplaySpeed:2000,
    
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});

var data4 = [
      
      {img:"image/slider_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate architecto cum, laborum pariatur deserunt corporis alias delectus sunt ratione. ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusamus, consequatur laborum quisquam dolore optio consectetur, non molestias deleniti ullam voluptate delectus tenetur assumenda alias pariatur. Rem explicabo impedit ea.ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate. Corrupti nam cum voluptate nisi amet eligendi ad voluptatum, alias, numquam architecto nemo non maiores culpa minus consequatur quibusdam, exercitationem.Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do Deleniti in tempore perferendis "},
      {img:"image/slider_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate architecto cum, laborum pariatur deserunt corporis alias delectus sunt ratione. ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusamus, consequatur laborum quisquam dolore optio consectetur, non molestias deleniti ullam voluptate delectus tenetur assumenda alias pariatur. Rem explicabo impedit ea.ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate. Corrupti nam cum voluptate nisi amet eligendi ad voluptatum, alias, numquam architecto nemo non maiores culpa minus consequatur quibusdam, exercitationem.Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do Deleniti in tempore perferendis "},   
      {img:"image/slider_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate architecto cum, laborum pariatur deserunt corporis alias delectus sunt ratione. ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusamus, consequatur laborum quisquam dolore optio consectetur, non molestias deleniti ullam voluptate delectus tenetur assumenda alias pariatur. Rem explicabo impedit ea.ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate. Corrupti nam cum voluptate nisi amet eligendi ad voluptatum, alias, numquam architecto nemo non maiores culpa minus consequatur quibusdam, exercitationem.Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do Deleniti in tempore perferendis "},  
      {img:"image/slider_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate architecto cum, laborum pariatur deserunt corporis alias delectus sunt ratione. ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusamus, consequatur laborum quisquam dolore optio consectetur, non molestias deleniti ullam voluptate delectus tenetur assumenda alias pariatur. Rem explicabo impedit ea.ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate. Corrupti nam cum voluptate nisi amet eligendi ad voluptatum, alias, numquam architecto nemo non maiores culpa minus consequatur quibusdam, exercitationem.Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do Deleniti in tempore perferendis "},    
      {img:"image/slider_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate architecto cum, laborum pariatur deserunt corporis alias delectus sunt ratione. ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusamus, consequatur laborum quisquam dolore optio consectetur, non molestias deleniti ullam voluptate delectus tenetur assumenda alias pariatur. Rem explicabo impedit ea.ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate. Corrupti nam cum voluptate nisi amet eligendi ad voluptatum, alias, numquam architecto nemo non maiores culpa minus consequatur quibusdam, exercitationem.Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do Deleniti in tempore perferendis "},    
      {img:"image/slider_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate architecto cum, laborum pariatur deserunt corporis alias delectus sunt ratione. ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusamus, consequatur laborum quisquam dolore optio consectetur, non molestias deleniti ullam voluptate delectus tenetur assumenda alias pariatur. Rem explicabo impedit ea.ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate. Corrupti nam cum voluptate nisi amet eligendi ad voluptatum, alias, numquam architecto nemo non maiores culpa minus consequatur quibusdam, exercitationem.Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do Deleniti in tempore perferendis "},    
      {img:"image/slider_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate architecto cum, laborum pariatur deserunt corporis alias delectus sunt ratione. ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusamus, consequatur laborum quisquam dolore optio consectetur, non molestias deleniti ullam voluptate delectus tenetur assumenda alias pariatur. Rem explicabo impedit ea.ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate. Corrupti nam cum voluptate nisi amet eligendi ad voluptatum, alias, numquam architecto nemo non maiores culpa minus consequatur quibusdam, exercitationem.Lorem ipsmodi aperiam iusto suscipit illum sequi ut sint, perferendis doloremque in quidem autem, porro, molestiae labore dolores Lorem ipsum do Deleniti in tempore perferendis "}
  
    ];

    
     $('#SliderDots2').tmpl(data4).appendTo('.SliderDots3');





$('.SliderDots3').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



var dataBlog=[
{img:"image/pers_img.png",h:"Заголовок статьи",paragraph:"Первый обзац статьи.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate", href:""},
{img:"image/pers_img.png",h:"Заголовок статьи",paragraph:"Первый обзац статьи.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate", href:""},
{img:"image/pers_img.png",h:"Заголовок статьи",paragraph:"Первый обзац статьи.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate", href:""}

]



 $('#Blog').tmpl(dataBlog).appendTo('#tabs-6');






var dataList=[
{img:"image/six_small_1.png",img2:"image/six_small_2.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate"},
{img:"image/six_small_3.png",img2:"image/six_small_4.png",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate"},
{img:"image/six_small_5.png",img2:""                      ,text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate",text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos beatae, libero dolorum atque. Eveniet, ducimus quaerat modi aliquam quia voluptate"}

]



 $('#List').tmpl(dataList).appendTo('#list');


 var dataWork=[

{img:"image/sev2_img_1.png",text:"Pадиус поиска от 5 до 50 метров в зависимости от  наличия преград."},
{img:"image/sev2_img_2.png",text:"Работает без подзарядки 100 дней. Удобная замена батарейке."},
{img:"image/sev2_img_3.png",text:"Громкость звукового сигнала 90dB."}, 
{img:"image/sev2_img_4.png",text:"Приложение совместимо с iOS 7.0+ и Android 4.3+"},
{img:"image/sev2_img_5.png",text:"Энергосберегающий модуль беспроводной связи Bluetooth &#174; 4.0 Low Energy"}



 ]


 $('#Work').tmpl(dataWork).appendTo('.seventh_2>div');


});


$( function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
    $( function() {
    $( "#tabs_vertical" ).tabs().addClass( "ui-tabs_vertical ui-helper-clearfix" );
    $( "#tabs_vertical li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  } );

  } );




    function processErrorFirst(id, errorMessage, display) {
      var error = document.getElementById(id + '_error');
          error.innerHTML = errorMessage;
          error.style.display = display;
    }
    
      var tel = document.getElementById('telfirst');
      tel.onkeypress = function(evt) {
        var result = /\d/.test(String.fromCharCode(evt.keyCode));
          if (!result) {
          processError(tel.id, 'Номер телефона введён неправильно!', 'inline'); 
          evt.preventDefault();
        } 
      }
    

function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('mailsecond').value;
    var valid = re.test(myMail);
    if (valid) output = '';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}
 
function ValidPhone() {
    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('telsecond').value;
    var valid = re.test(myPhone);
    if (valid) output = '';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}  


 
function processError(id, errorMessage, display) {
      var error = document.getElementById(id + '_error');
          error.innerHTML = errorMessage;
          error.style.display = display;
    }
    
    window.onload = function(evt) {
      var input = document.getElementById('mail');
      input.onfocus = function(evt) {
        processError(input.id, '', 'none');
      }

      input.onblur = function(evt) {
        var result = /^[a-zA-Z]+[a-zA-Z0-9\_\-\.]+@[a-zA-Z0-9\.]{2,}\.[a-zA-Z]{2,5}$/.test(input.value);
        if (!result) {
          processError(input.id, 'Адрес электронной почты введён неправильно!', 'inline');
        }       
      }
      var tel = document.getElementById('tel');
      tel.onkeypress = function(evt) {
        var result = /\d/.test(String.fromCharCode(evt.keyCode));
          if (!result) {
          processError(tel.id, 'Номер телефона введён неправильно!', 'inline'); 
          evt.preventDefault();
        } 
      }
    }


