include('js/hoverSprite.js');
include('js/googleMap.js');
//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript" ></script>'); 
}
//------DocReady-------------
$(document).ready(function(){ 
    if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
    
     $('ul#menu').superfish({
          delay:       800,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false
        }); 
});
  
 //------WinLoad-------------  
$(window).load(function(){  
 if(($.browser.msie) && ($.browser.version <= 8)){
    $('.scroll1').cScroll({showTrack:false});
     $('.scroll2').cScroll({showTrack:false});
     $('.scroll3').cScroll({showTrack:false});
     $('.scroll4').cScroll({showTrack:false});
     
 	$('.Btns1 > .upBtn').click(function(){
 			$('.scroll1').cScroll('up');
 			return false
 		})
 	$('.Btns1 > .downBtn').click(function(){
 			$('.scroll1').cScroll('down');
 			return false
 		})
        
      	$('.Btns2 > .upBtn').click(function(){
 			$('.scroll2').cScroll('up');
 			return false
 		})
 	$('.Btns2 > .downBtn').click(function(){
 			$('.scroll2').cScroll('down');
 			return false
 		})   
        
  	$('.Btns3 > .upBtn').click(function(){
 			$('.scroll3').cScroll('up');
 			return false
 		})
 	$('.Btns3 > .downBtn').click(function(){
 			$('.scroll3').cScroll('down');
 			return false
 		})      
    
      	$('.Btns4 > .upBtn').click(function(){
 			$('.scroll3').cScroll('up');
 			return false
 		})
 	$('.Btns4 > .downBtn').click(function(){
 			$('.scroll4').cScroll('down');
 			return false
 		})  
 }else{
    $('.Btns1').css({"display":"none"});
    $('.Btns2').css({"display":"none"});
    $('.Btns3').css({"display":"none"});
    $('.Btns4').css({"display":"none"});
    
    $('.scroll1').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle',
	})

     $('.scroll2').cScroll({
   		duration:700,
   		step:100,
   		trackCl:'track',
   		shuttleCl:'shuttle',
   	})
    
    $('.scroll3').cScroll({
   		duration:700,
   		step:100,
   		trackCl:'track',
   		shuttleCl:'shuttle',
   	})
    
    $('.scroll4').cScroll({
   		duration:700,
   		step:100,
   		trackCl:'track',
   		shuttleCl:'shuttle',
   	})
   
 }
 
 $('#more1').hover(
    function(){
         $(this).stop().animate({color:"#fff"},700,'easeOutExpo');
    },
    function(){
        $(this).stop().animate({color:"#000"},700,'easeOutExpo');
    }
 )
 
  $('.formBtnSpr').hover(
    function(){
         $(this).stop().animate({color:"#fff"},700,'easeOutExpo');
    },
    function(){
        $(this).stop().animate({color:"#000"},700,'easeOutExpo');
    }
 )

    $(".trackBg").animate({rotate:"-26.5"},0);
    $(".shuttle").animate({rotate:"0"},0);
  
  	$('#bgStretch')
		.bgStretch({		       
			align:'rightBottom',
			navigs:$('.bgNav').navigs({autoPlay:8000})
		}).sImg({
			spinner:$('.gall_spinner').hide()
		})
  
  $('#more1').sprites({method:'gStretch',hover:true});
  $('.formBtnSpr').sprites({method:'gStretch',hover:true});
  
navInit();
function navInit(){ //diagonal submenu initialization
    subRepos(1);
    subRepos(2);
    subRepos(3);
    subRepos(4);
    subRepos(5);
    subRepos(6);
}

function subRepos(_liNum){
    var currLi = $('#menu > li').eq(_liNum);
    
    var stepLeft = -13, newLeft, dX = -32;

         var navItems = $('#menu > li').eq(_liNum).find('.submenu_1 >li')
         navItems.each(function(index){
            
              newLeft = (stepLeft*index)+dX+"px";
              
             $(this).css({left:newLeft});

         }); 

}

///////////////////////////////////////////////
$('.menu > ul >li').eq(0).css({'display':'none'});  
	var content=$('#content'),
		nav=$('.menu');
		
  
    	$('#content').tabs({
		preFu:function(_){

            _.li.find(".titlePlane").css({left:"-1700px","display":'none'});		
            _.li.find(".contentPlane").css({left:"-1700px","display":'none'});
            
            _.li.find(".title").css({left:"-1700px","display":'none'});
            _.li.find(".containerContent").css({left:"-1700px","display":'none'});
            
            		
		}
		,actFu:function(_){			
			if(_.curr){
               	    _.curr.find(".title").css({"display":'block'}).stop(true, true).delay(700).animate({left:"0px"},700,'easeOutExpo');
			 	   _.curr.find(".containerContent").css({"display":'block'}).stop(true, true).delay(600).animate({left:"0px"},900,'easeOutExpo');
                
				    _.curr.find(".titlePlane").css({"display":'block'}).stop(true, true).delay(600).animate({left:"0px"},700,'easeOutExpo');
				    _.curr.find(".contentPlane").css({"display":'block'}).stop(true, true).delay(500).animate({left:"0px"},700,'easeOutExpo');
                

                if ((_.n == 0) && ((_.pren>0) || (_.pren==undefined))){
                     $(".splashHolder").stop(true, true).delay(200).animate({left:"360px"},700,'easeOutExpo');
                }

                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){
                     $(".splashHolder").stop(true, true).animate({left:"1700px"},700,'easeInExpo');
                }
            }
        
			if(_.prev){
   
                 _.prev.find(".title").stop(true, true).delay(80).animate({left:"-1700px"},200,'easeInSine',function(){
                    $(this).css({"display":'none'});
                 });
				_.prev.find(".containerContent").stop(true, true).delay(80).animate({left:"-1700px"},200,'easeInSine',function(){
                    $(this).css({"display":'none'});
                 });
                 
                 _.prev.find(".titlePlane").stop(true, true).delay(150).animate({left:"-1700px"},300,'easeInSine',function(){
                    $(this).css({"display":'none'});
                 });
                 _.prev.find(".contentPlane").stop(true, true).delay(150).animate({left:"-1700px"},300,'easeInSine',function(){
                    $(this).css({"display":'none'});
                 });

             }
   
		}
	})	
    
	nav.navs({
			useHash:true,
             hoverIn:function(li){
             
              $("> a", li).stop(true, true).animate({color:"#545454"},500,'easeOutExpo');
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                   
                         $("> a", li).stop(true, true).animate({color:"#fff"},500,'easeOutExpo');  
                    } 
                } 
		})
        
		.navs(function(n){			
			$('#content').tabs(n);

		})
  ///////////////////////////////  
   	var h_cont=400;
	function centrRepos() {
		var h=$(window).height();
		if (h>(h_cont+40)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=20;
			h_new=h_cont+40;
		}

	}
	centrRepos();
	$(window).resize(centrRepos);

    } //window function
) //window load