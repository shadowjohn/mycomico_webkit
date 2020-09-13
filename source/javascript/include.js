

String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")};


  
function getWindowSize(){
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;      
  }
  var a=new Object();
  a['width']=myWidth;
  a['height']=myHeight;
  return a;
}

//我的ajax
function myAjax(url,postdata)
{
  var tmp = $.ajax({
      url: url,
      type: "POST",
      data: postdata,
      async: false
   }).responseText;
  return tmp;
}
function myAjax_async(url,postdata,func)
{
  $.ajax({
      url: url,
      type: "POST",
      data: postdata,
      async: true,
      success: function(html){
        func(html);        
      }
  });  
}
//自然滑動機
function div_motion(domid)
{
	var pre_name="3WA_"+new Date().getTime();
	
    window[pre_name+'paperdown']=0;
    window[pre_name+'motion']=0;
    $("#"+domid).mousedown(function(event){
      if(window[pre_name+'paperdown']!=0)
      {		
		  $("#"+domid).stop();
	  }
      window[pre_name+'startmovetime']=new Date().getTime();
      window[pre_name+'paperdown']=1;
      window[pre_name+'moveX']=event.pageX;
      window[pre_name+'moveY']=event.pageY;
      window[pre_name+'motion']=0;                          
    });
    $("#"+domid).mouseup(function(){
	   window[pre_name+'endmovetime']=new Date().getTime();
	   window[pre_name+'lastX']=this.scrollLeft;
	   window[pre_name+'lastY']=this.scrollTop;
	   var orz=window[pre_name+'endmovetime']-window[pre_name+'startmovetime'];       
	   if(orz>=15){
		 orz=0;    
		 window[pre_name+'paperdown']=0; 
		 window[pre_name+'motion']=0;    
	   }
	   else
	   {
		 orz=15-orz;                                
		 window[pre_name+'motion']=1;
		 $("#"+domid).animate({ 
		   'scrollLeft':(window[pre_name+'lastX']+(window[pre_name+'lastX']-window[pre_name+'moveSX'])/0.1),
		   'scrollTop':(window[pre_name+'lastY']+(window[pre_name+'lastY']-window[pre_name+'moveSY'])/0.05)
		 },{
			duration:orz*100,
			query:false,
			complete:function(){
			window[pre_name+'paperdown']=0;
			window[pre_name+'motion']=0;			                 					 	
		   }
		 });
	   }   
    });
    $("#"+domid).mousemove(function(event){
      if(window[pre_name+'paperdown']==1&&window[pre_name+'motion']==0)
      {
        window[pre_name+'startmovetime']=new Date().getTime();
        window[pre_name+'moveSX']=this.scrollLeft;
        window[pre_name+'moveSY']=this.scrollTop;
                
        this.scrollLeft-=(event.pageX-window[pre_name+'moveX']);
        this.scrollTop-=(event.pageY-window[pre_name+'moveY']);
        window[pre_name+'moveX']=event.pageX;
        window[pre_name+'moveY']=event.pageY;
      }
    });
}

$.fn.outerHTML = function(s) {
  return (s) ? $(this).replaceWith(s) : $(this).clone().wrap('<p>').parent().html();
} 

  function size_hum_read($size){
      /* Returns a human readable size */
  	$size = parseInt($size);
    var $i=0;
    var $iec = new Array();
    var $iec_kind="B,KB,MB,GB,TB,PB,EB,ZB,YB";
    $iec=explode(',',$iec_kind);
    while (($size/1024)>1) {
      $size=$size/1024;
      $i++;
    }
    return sprintf("%s%s",substr($size,0,strpos($size,'.')+4),$iec[$i]);
  }
	$(document).ready(function() {
		//mouse_init();
		
	});

  function my_ids_mix(ids)
  {
    var m=new Array();
    m=explode(",",ids);
    var data=new Array();    
    for(i=0,max_i=m.length;i<max_i;i++)
    {
      array_push(data,m[i]+"="+encodeURIComponent($("#"+m[i]).val()));
    }
    return implode('&',data);
  }  
  function my_names_mix(indom)
  {
    var m=new Array();
    var names=$(indom).find('*[req="group[]"]');    
    for(i=0,max=names.length;i<max;i++)
    {
      array_push(m,$(names[i]).attr('name')+"="+encodeURIComponent($(names[i]).val()));
    }
    return implode('&',m);
  }

function dialogOn(message,functionAction)
{  
  $.mybox({
    is_background_touch_close:false,
    message : message,
    css : {
      'border' : '2px solid #fff',
      'background-color' : '#ded',
      'color' : '#000',
      'padding':'15px'
    },    
    onBlock : function() {            
      functionAction();
      //$("*[id^='mybox_div']").corner();      
    }           
  });
}

function dialogOff()
{
  $.unmybox();
}

function basename(filepath)
{
  m=explode("/",filepath);
  mdata = explode("?",end(m));  
  return mdata[0];
}
function mainname(filepath)
{
  filepath = basename(filepath);
  mdata=explode(".",filepath);
  return mdata[0];
}
function subname(filepath)
{
  filepath = basename(filepath);
  m=explode(".",filepath);
  return end(m);
}                


function get_between($data,$s_begin,$s_end)
{
  /*
    $a = "abcdefg";
    echo get_between($a, "cde", "g");
    // get "f"
  */
  $s = $data;
  $start = strpos($s,$s_begin);
  $new_s = substr($s,$start + strlen($s_begin));
  $end = strpos($new_s,$s_end);
  return substr($s,$start + strlen($s_begin), $end);
} 
  function is_string_like($data,$find_string){
/*
  is_string_like($data,$fine_string)

  $mystring = "Hi, this is good!";
  $searchthis = "%thi% goo%";

  $resp = string_like($mystring,$searchthis);


  if ($resp){
     echo "milike = VERDADERO";
  } else{
     echo "milike = FALSO";
  }

  Will print:
  milike = VERDADERO

  and so on...

  this is the function:
*/
  $tieneini=0;
  if($find_string=="") return 1;
  $vi = explode("%",$find_string);
  $offset=0;
  for($n=0,$max_n=count($vi);$n<$max_n;$n++){
      if($vi[$n]== ""){
          if($vi[0]== ""){
                 $tieneini = 1;
          }
      } else {
          $newoff=strpos($data,$vi[$n],$offset);
          if($newoff!==false){
              if(!$tieneini){
                  if($offset!=$newoff){
                      return false;
                  }
              }
              if($n==$max_n-1){
                  if($vi[$n] != substr($data,strlen($data)-strlen($vi[$n]), strlen($vi[$n]))){
                      return false;
                  }

              } else {
                  $offset = $newoff + strlen($vi[$n]);
               }
          } else {
              return false;
          }
      }
  }
  return true;
}
function getRadioBox_val(dom_name)
{
  //return array
  var arr=new Array();
  for(var i=0,max_i=$($("*[name='"+dom_name+"']")).size();i<max_i;i++)
  {
    if($($("*[name='"+dom_name+"']")[i]).prop('checked'))
    {
      array_push(arr,$($("*[name='"+dom_name+"']")[i]).val());
    }
  }
  return arr;
}
function getCheckBox_req(dom_name)
{
  //return array
    var arr = new Array();
    var doms = $("input[name='"+dom_name+"']:checked");
    for (i = 0, max_i = doms.size(); i < max_i; i++) {
        array_push(arr, doms.eq(i).attr('req'));
    }    
    return arr;
}
function getCheckBox_val(dom_name) {
    //return array
    /*var arr = new Array();
    for (var i = 0, max_i = $($("*[name='" + dom_name + "']")).size(); i < max_i; i++) {
        if ($($("*[name='" + dom_name + "']")[i]).prop('checked')) {
            array_push(arr, $($("*[name='" + dom_name + "']")[i]).val());
        }
    }*/

    var arr = new Array();
    var doms = $("input[name='"+dom_name+"']:checked");
    for (i = 0, max_i = doms.size(); i < max_i; i++) {
        array_push(arr, doms.eq(i).val());
    }    
    return arr;
}

function print_table($ra,$fields,$headers,$classname)
{    
  $classname=(typeof($classname)=="undefined"||$classname=='')?'':" class='"+$classname+"' ";
  if(typeof($fields)=="undefined"||$fields==''||$fields=='*')
  {      

      $tmp=sprintf("<table %s border='1' cellspacing='0' cellpadding='0'>",$classname);
      $tmp+="<thead><tr>";
      for(var k in $ra[0])
      {
        $tmp+=sprintf("<th>%s</th>",k);
      }
      $tmp+="</tr></thead>";
      $tmp+="<tbody>";
      for($i=0,$max_i=count($ra);$i<$max_i;$i++)
      {
        $tmp+="<tr>";
        for(var k in $ra[$i])
        {
          $tmp+=sprintf("<td field=\"%s\">%s</td>",k,$ra[$i][k]);
        }
        $tmp+="</tr>";
      }
      $tmp+="</tbody>";
      $tmp+="</table>";
      return $tmp;
  }
  else
  {
    $tmp=sprintf("<table %s border='1' cellspacing='0' cellpadding='0'>",$classname);
    $tmp+="<thead><tr>";
    $mheaders=explode(',',$headers);
    for(var k in $mheaders)
    {
      $tmp+=sprintf("<th>%s</th>",$mheaders[k]);
    }
    $tmp+="</tr></thead>";
    $tmp+="<tbody>";
    $m_fields=explode(',',$fields);
    for($i=0,$max_i=count($ra);$i<$max_i;$i++)
    {
      $tmp+="<tr>";
      for(var k in $m_fields)
      {
        $tmp+=sprintf("<td field=\"%s\">%s</td>",k,$ra[$i][$m_fields[k]]);
      }
      $tmp+="</tr>";
    }
    $tmp+="</tbody>";
    $tmp+="</table>";
    return $tmp;
  }
}
function myW(html,func,cssOption){
  if( typeof(window['myW_t'])=="undefined")
  {
     window['myW_t']=0;
  }
  $.fn.center = function () {
      this.css("position","absolute");
      this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
      this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
      return this;
  }  
  var t = time()+"_"+window['myW_t']++;
  var id = "myW_"+t;
  $("body").append("<div id='"+id+"'></div>");  
  $("#"+id).css({
    'z-index':time(),
    'padding':'3px',
    'background-color':'#fff',
    'color':'black',
    'border':'2px solid #00f'
  });
  if(typeof(cssOption)!="undefined" && typeof(cssOption)=="object"){
    for(var k in cssOption)
    {
      $("#"+id).css(k,cssOption[k]);
    }
  }
  html = str_replace("{myW_id}",id,html);  
  $("#"+id).html(html);
  $(window).bind("scroll",{id:id},function(event){
    $("#"+event.data.id).center();
  });  
  $("#"+id).center();
  func(id);
  return id;
}
function smallComment(message,seconds,is_need_motion,cssOptions)
{
	//畫面的1/15	
	if($("#mysmallComment").length==0)
	{    
		$("body").append("<div id='mysmallComment'><span class='' id='mysmallCommentContent'></span></div>");
		$("#mysmallComment").css({
			'display':'none',
			'position':'fixed',
			'left':'0px',
			'right':'0px',
			'padding':'15px',
			'bottom':'3em',
			'z-index':new Date().getTime(),
			'text-align':'center',
			'opacity':0.8,
      'pointer-events':'none'
		});
		$("#mysmallCommentContent").css({									
			'color':'#fff',
			'background-color':'#000',
      'padding':'10px',
      'border':'3px solid #fff',
      'pointer-events':'none'				
		});
    $("#mysmallCommentContent").css(cssOptions);
		/*
		$("#mysmallComment").css({
			'left': (wh['width']-$("#mysmallComment").width())/2+'px' 
		});
		*/

		//$("#mysmallComment").corner();
	}  
  var mlen = strlen(strip_tags(message));
  var font_size="16px";
  if(mlen>=10)
  {
    font_size="12px";
  }
  $("#mysmallCommentContent").css({
    'font-size':font_size
  });		
	$("#mysmallCommentContent").html(message);
	if(is_need_motion==true)
	{
		$("#mysmallComment").stop();
		$("#mysmallComment").fadeIn("slow");
    clearTimeout(window['smallComment_TIMEOUT']);
		window['smallComment_TIMEOUT']=setTimeout(function(){
			$("#mysmallComment").fadeOut('fast');
		},seconds);
	}
	else
	{
    $("#mysmallComment").stop();
		$("#mysmallComment").show();
    clearTimeout(window['smallComment_TIMEOUT']);
		window['smallComment_TIMEOUT']=setTimeout(function(){
			$("#mysmallComment").hide();
		},seconds);
	}
}