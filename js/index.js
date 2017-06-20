window.onload=function(){
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    /*autoplay:true,
    speed:2000,*/
       // 如果需要分页器
    pagination: '.swiper-pagination',
  })
	var Iscroll=new IScroll("#wrapper",{
			scrollY:true
	})
	
}
