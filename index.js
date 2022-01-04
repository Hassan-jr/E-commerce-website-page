// add
$(".btn3").click( function(){
 var count=  $(".btn2").text();
 count ++;
 $(".btn2").text(count);
})
// subtract
$(".btn1").click( function(){
 var count1=  $(".btn2").text();
 count1--;
 if (count1>=0){
 $(".btn2").text(count1);
} else{
  $(".btn2").text("0");
}
})
//thumbils
$(".thum1").click(function(){
  $("img.shoes").attr("src","images/image-product-1.jpg");
})

$(".thum2").click(function(){
  $("img.shoes").attr("src","images/image-product-2.jpg");
})

$(".thum3").click(function(){
  $("img.shoes").attr("src","images/image-product-3.jpg");
})

$(".thum4").click(function(){
  $("img.shoes").attr("src","images/image-product-4.jpg");
})

//cart



$(".carticon").click(function(){
  $(".empty").toggle();
})

$(".pimg").click(function(){
  $(".profile").toggle();
  
})
