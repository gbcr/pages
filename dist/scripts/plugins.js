function getURLParameter(t){return decodeURI((RegExp(t+"=(.+?)(&|$)").exec(location.search)||[,null])[1])}function getSocialPlugins(){!function(t){var i=t.getElementsByTagName("SCRIPT")[0],e=t.createElement("SCRIPT");e.type="text/javascript",e.async=!0,e.src="//assets.pinterest.com/js/pinit.js",i.parentNode.insertBefore(e,i)}(document),function(t,i,e){var s,n=t.getElementsByTagName(i)[0];t.getElementById(e)||(s=t.createElement(i),s.id=e,s.src="//connect.facebook.net/de_DE/all.js#xfbml=1",n.parentNode.insertBefore(s,n))}(document,"script","facebook-jssdk"),!function(t,i,e){var s,n=t.getElementsByTagName(i)[0],a=/^http:/.test(t.location)?"http":"https";t.getElementById(e)||(s=t.createElement(i),s.id=e,s.src=a+"://platform.twitter.com/widgets.js",n.parentNode.insertBefore(s,n))}(document,"script","twitter-wjs")}+function(t){"use strict";var i=function(i,e){this.options=e,this.$body=t(document.body),this.$element=t(i),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(i){var e=this,s=t.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var s=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(e.$body),e.$element.show().scrollTop(0),s&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:i});s?e.$element.find(".modal-dialog").one(t.support.transition.end,function(){e.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(300):e.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(i){i&&i.preventDefault(),i=t.Event("hide.bs.modal"),this.$element.trigger(i),this.isShown&&!i.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(i){var e=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t('<div class="modal-backdrop '+s+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!i)return;n?this.$backdrop.one(t.support.transition.end,i).emulateTransitionEnd(150):i()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){e.removeBackdrop(),i&&i()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,a).emulateTransitionEnd(150):a()}else i&&i()},i.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var i=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),i};var e=t.fn.modal;t.fn.modal=function(e,s){return this.each(function(){var n=t(this),a=n.data("bs.modal"),o=t.extend({},i.DEFAULTS,n.data(),"object"==typeof e&&e);a||n.data("bs.modal",a=new i(this,o)),"string"==typeof e?a[e](s):o.show&&a.show(s)})},t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=e,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var e=t(this),s=e.attr("href"),n=t(e.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),e.data());e.is("a")&&i.preventDefault(),n.modal(a,this).one("hide",function(){e.is(":visible")&&e.trigger("focus")})})}(jQuery),+function(t){"use strict";var i=function(e,s){this.options=t.extend({},i.DEFAULTS,s),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$window.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=t(document).height(),s=this.$window.scrollTop(),n=this.$element.offset(),a=this.options.offset,o=a.top,r=a.bottom;"object"!=typeof a&&(r=o=a),"function"==typeof o&&(o=a.top(this.$element)),"function"==typeof r&&(r=a.bottom(this.$element));var d=null!=this.unpin&&s+this.unpin<=n.top?!1:null!=r&&n.top+this.$element.height()>=e-r?"bottom":null!=o&&o>=s?"top":!1;if(this.affixed!==d){null!=this.unpin&&this.$element.css("top","");var h="affix"+(d?"-"+d:""),c=t.Event(h+".bs.affix");this.$element.trigger(c),c.isDefaultPrevented()||(this.affixed=d,this.unpin="bottom"==d?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(h).trigger(t.Event(h.replace("affix","affixed"))),"bottom"==d&&this.$element.offset({top:n.top}))}}};var e=t.fn.affix;t.fn.affix=function(e){return this.each(function(){var s=t(this),n=s.data("bs.affix"),a="object"==typeof e&&e;n||s.data("bs.affix",n=new i(this,a)),"string"==typeof e&&n[e]()})},t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=e,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),e=i.data();e.offset=e.offset||{},e.offsetBottom&&(e.offset.bottom=e.offsetBottom),e.offsetTop&&(e.offset.top=e.offsetTop),i.affix(e)})})}(jQuery),function(t,e,s,n){function a(i,e){this.element=i,this.options=t.extend({},d,e),this._defaults=d,this._name=r,this.maxSlides=this.options.images.length,this.init()}function o(){var t,i=s.createElement("p"),a={WebkitTransform:"-webkit-transform",MozTransform:"-moz-transform"};s.body.insertBefore(i,null);for(var o in a)i.style[o]!==n&&(i.style[o]="translate3d(1px,1px,1px)",t=e.getComputedStyle(i).getPropertyValue(a[o]));return s.body.removeChild(i),t!==n&&t.length>0&&"none"!==t}var r="Kenburns",d={images:[],duration:400,fadeSpeed:500,scale:1,ease3d:"cubic-bezier(.81, 0, .26, 1)",onLoadingComplete:function(){},onSlideComplete:function(){},onListComplete:function(){},getSlideIndex:function(){return c}},h={},c=0;a.prototype.init=function(){var e=this.options.images;this.width=t(this.element).width(),this.height=t(this.element).height(),this.has3d=o();for(i in e)h["image"+i]={},h["image"+i].loaded=!1,this.attachImage(e[i],"image"+i,i);var s=t("<div/>");s.addClass("loader"),s.css({position:"absolute","z-index":1e4}),t(this.element).prepend(s)},a.prototype.attachImage=function(i,e,s){var n=this,a=t("<div/>");a.attr("class","kb-slide"),a.css({opacity:0});var o=t("<img />");o.attr("src",i),o.attr("alt",e),a.html(o),this.has3d&&(o.css({"-webkit-transform-origin":"left top"}),o.css({"-moz-transform-origin":"left top"}),o.css({"-webkit-transform":"scale("+n.options.scale+") translate3d(0,0,0)"}),o.css({"-moz-transform":"scale("+n.options.scale+") translate3d(0,0,0)"})),this.doTransition=this.has3d?this.transition3d:this.transition,o.load(function(){h["image"+s].element=this,h["image"+s].loaded=!0,h["image"+s].width=t(this).width(),h["image"+s].width=t(this).height(),n.insertAt(s,a),n.resume(s)})},a.prototype.resume=function(i){0==i&&(this.startTransition(0),t(this.element).find(".loader").hide()),i==this.holdup&&(t("#status").html(""),t(this.element).find(".loader").hide(),this.startTransition(this.holdup)),1==this.checkLoadProgress()&&(t(this.element).find(".stalled").each(function(){t(this).css({opacity:1,"z-index":1}),t(this).removeClass("stalled")}),this.options.onLoadingComplete())},a.prototype.checkLoadProgress=function(){var t=!0;for(i=0;i<this.maxSlides;i++)0==h["image"+i].loaded&&(t=!1);return t},a.prototype.wait=function(){clearInterval(this.interval),t("#status").html("loading"),t(this.element).find(".loader").show();var i=h["image"+(c-1)].element;t(i).parent().stop(!0,!0),t(i).parent().addClass("stalled")},a.prototype.startTransition=function(t){var i=this;c=t,i.doTransition(),this.interval=setInterval(function(){c<i.maxSlides-1?c++:c=0,0==h["image"+c].loaded?(i.holdup=c,i.wait()):i.doTransition()},this.options.duration)},a.prototype.chooseCorner=function(){var i=this.options.scale,e=h["image"+c].element,s=e.height/e.width,n=Math.floor(t(this.element).width()*(1/i)),a=Math.floor(t(this.element).width()*s*(1/i));t(e).width(n),t(e).height(a);var o=t(this.element).width(),r=t(this.element).height(),d=[{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}],l=Math.floor(4*Math.random()),f=d[l];d.splice(l,1);var p=d[Math.floor(3*Math.random())],m={startX:f.x*(o-n*i),startY:f.y*(r-a*i),endX:p.x*(o-n),endY:p.y*(r-a)};return m},a.prototype.transition3d=function(){var i=this,e=this.options.scale,s=h["image"+c].element,n=this.chooseCorner();t(s).css({"-webkit-transition":"none"}),t(s).css({"-moz-transition":"none"}),t(s).css({"-webkit-transform":"scale("+e+") translate3d("+n.startX+"px,"+n.startY+"px,0)"}),t(s).css({"-moz-transform":"scale("+e+") translate3d("+n.startX+"px,"+n.startY+"px,0)"}),t(s).parent().css({opacity:0,"z-index":"3"}),t(s).parent().animate({opacity:1},i.options.fadeSpeed),t(s).css({"-webkit-transition":"-webkit-transform "+(i.options.duration+i.options.fadeSpeed)+"ms "+i.options.ease3d}),t(s).css({"-moz-transition":"-moz-transform "+(i.options.duration+i.options.fadeSpeed)+"ms "+i.options.ease3d}),t(s).css({"-webkit-transform":"scale(1) translate3d("+n.endX+"px,"+n.endY+"px,0)"}),t(s).css({"-moz-transform":"scale(1) translate3d("+n.endX+"px,"+n.endY+"px,0)"}),this.transitionOut(),this.options.onSlideComplete()},a.prototype.transition=function(){var i=this,e=this.options.scale,s=h["image"+c].element,n=t(s).width(),a=t(s).height(),o=this.chooseCorner();t(s).css({left:o.startX,top:o.startY,width:n*e,height:a*e}),t(s).animate({left:o.endX,top:o.endY,width:n,height:a},i.options.duration+i.options.fadeSpeed),t(s).parent().css({opacity:0,"z-index":3}),t(s).parent().animate({opacity:1},i.options.fadeSpeed),this.transitionOut(),this.options.onSlideComplete()},a.prototype.transitionOut=function(){var i=this,e=h["image"+c].element;t(e).parent().delay(i.options.duration).animate({opacity:0},i.options.fadeSpeed,function(){t(this).css({"z-index":1})})},a.prototype.insertAt=function(i,e){var s=t(this.element).children().size();0>i&&(i=Math.max(0,s+1+i));t(this.element).append(e);s>i&&t(this.element).children().eq(i).before(t(this.element).children().last())},t.fn[r]=function(i){return this.each(function(){t.data(this,"plugin_"+r)||t.data(this,"plugin_"+r,new a(this,i))})}}(jQuery,window,document),function(t){t.fn.mostSlider=function(i){function e(){s=setInterval(function(){a.next()},n.pauseTime+n.aniSpeed)}var s,n=t.extend({animation:"fade",aniSpeed:1e3,aniMethod:"auto",aniFallback:!0,background_center:!1,autoPlay:!0,pauseTime:3e3,metrics:{width:0,height:0},solidHeight:!1,thumbnails:!1,thumb_bg:!1,navigation:!0,hideArrows:!0,linkable:!1,transparancy:!1,contentClass:"content",sbsContent:!1,contentAniDelay:300,responsive_images:!1,responsive_break_tablet:481,responsive_break_desktop:1024,socialButtons:!1,socialUrl:"",twitterID:""},i),a=this,o=(a.width(),0),r=n.metrics.height/n.metrics.width,d=a.children(),h=d.length,c=1,l="right",f=!1,p=!1,m=!1;switch((t("html").is(".ie6, .ie7, .ie8")||t("body").is(".ie6, .ie7, .ie8"))&&(m=!0),n.aniMethod){case"jQuery":n.aniMethod="jQuery";break;case"css":t("html").hasClass("csstransitions")||1!=n.aniFallback||(n.aniMethod="jQuery");break;case"auto":n.aniMethod=t("html").hasClass("csstransitions")?"css":"jQuery"}if(a.css({position:"relative",width:"100%","line-height":"0"}),a.children().each(function(i){if(n.responsive_images=!0){var e=t(window).width();t(this).find("img[data-responsive-images='true']").each(function(){e>=n.responsive_break_desktop?t(this).attr("src",t(this).attr("data-image-desktop")):e>=n.responsive_break_tablet&&t(this).attr("src",t(this).attr("data-image-tablet"))})}if(t(this).css({width:"100%",height:"auto","line-height":"auto",position:"absolute","z-index":0,display:"none",overflow:"hidden"}).attr("id",i+1),"css"==n.aniMethod&&"fade"==n.animation&&t(this).css({opacity:0,display:"block"}),t(this).is("iframe")&&t(this).css({width:a.find("#1").width(),height:a.find("#1").height()}),t(this).find("> img:only-child").css({width:"100%",height:"auto"}),t(this).find("> a > img:only-child").css({width:"100%",height:"auto"}),t(this).find("img.portrait").length>0&&(t(this).find("img.portrait").css({width:"auto",height:"100%"}),n.transparancy=!0),t(this).find("img.bg").length>0&&(1==n.background_center&&n.metrics.width>0&&""!=n.metrics.width&&n.metrics.height>0&&""!=n.metrics.height?(t(this).css({"background-image":"url("+t(this).find("img.bg").attr("src")+")","background-repeat":"no-repeat","background-position":"center center","background-size":"cover","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover"}),m&&t(this).css({filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+t(this).find("img.bg").attr("src")+",sizingMethod='scale')","-ms-filter":'"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+t(this).find("img.bg").attr("src")+",sizingMethod='scale')\""}),t(this).find("img.bg").hide()):t(this).find("img.bg").css({width:"100%",height:"auto"})),1==n.socialButtons){t(this).prepend('<div class="social" />');var s="none";if(void 0!=t(this).attr("data-social")&&(s=t(this).attr("data-social")),s.indexOf("facebook")>=0&&""!=n.twitterID){var o=document.URL,r=parseInt(i)+1;o=o.indexOf("?")>0?o+"&slider="+r:o+"?slider="+r,o=o.replace(/\:/g,"%3A").replace(/\//g,"%2F").replace(/\=/g,"%3D").replace(/\?/g,"%3F").replace(/\-/g,"%2D"),t(this).find(".social").prepend('<div id="facebook"><iframe src="//www.facebook.com/plugins/like.php?href='+o+'&amp;width=130&amp;height=21&amp;colorscheme=light&amp;layout=button_count&amp;data-layout=simple&amp;action=like&amp;show_faces=false&amp;send=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:130px; height:21px;" allowTransparency="true"></iframe></div>')}if(s.indexOf("pinterest")>=0&&""!=n.socialUrl&&1==t(this).find(".pinterest").length){var o=n.socialUrl.replace(/:/g,"%3A").replace(/\//g,"%2F"),d=t(this).find(".pinterest"),h=d.get(0).src.replace(/:/g,"%3A").replace(/\//g,"%2F"),c=d.attr("alt");"undefined"==c&&(c=""),t(this).find(".social").prepend('<div id="pinterest"><a href="//pinterest.com/pin/create/button/?url='+o+"&media="+h+"&description="+c+'" data-pin-do="buttonPin" data-pin-config="none"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a></div>')}if(s.indexOf("twitter")>=0&&""!=n.twitterID){var o=document.URL,r=parseInt(i)+1;o.indexOf("?")>0&&o.search("slider=")>0?(slider_url=o.substr(o.search("slider="),8),o=o.replace(slider_url,"slider="+r)):o=o.indexOf("?")>0&&o.search("slider=")<0?o+"&slider="+r:o+"?slider="+r,t(this).find(".social").prepend('<div id="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-text="'+o+'" data-url="'+o+'" data-via="'+n.twitterID+'" data-lang="de" data-count="none">Twittern</a></div>')}}}),a.wrapInner("slide"==n.animation?'<div style="position:relative;width:100%;height:100%;" id="slides-wrapper"><div id="slides" style="position:absolute;width:100%;height:100%;overflow:hidden;line-height:0;" /></div>':'<div id="slides" style="line-height:0;overflow:hidden;" />'),this.init=function(){if(a.css("display","block"),n.metrics.width>0&&n.metrics.height>0)if(a.width()<n.metrics.width&&0==n.solidHeight){var t=r*a.width();a.find("#slides").css("height",t).children().css("height",t),"slide"==n.animation&&a.css("height",t)}else a.find("#slides").css("height",n.metrics.height).children().css("height",n.metrics.height);else{var t=a.find("#slides #1").height();a.css("height",t).find("#slides").css("height",t)}p=!0,o=a.width()},t(window).resize(function(){if(o!=a.width())if(n.metrics.width>0&&n.metrics.height>0)if(a.width()<n.metrics.width&&0==n.solidHeight){var t=r*a.width();a.find("#slides").css("height",t).children().css("height",t)}else a.find("#slides").css("height",n.metrics.height).children().css("height",n.metrics.height);else{var t=a.find("#slides #1").height();a.css("height",t).find("#slides").css("height",t)}}),a.find(".center").each(function(){t(this).css("display:","inline-block")}),a.find(".fade").each(function(){t(this).css({opacity:0,margin:0})}),a.find(".from-top").each(function(){t(this).css({opacity:0,"margin-top":"-20px"})}),a.find(".from-bottom").each(function(){t(this).css({opacity:0,"margin-top":"20px"})}),a.find(".from-left").each(function(){t(this).css({opacity:0,"margin-left":"-30px","margin-right":"30px"})}),a.find(".from-right").each(function(){t(this).css({opacity:0,"margin-left":"30px"})}),1==n.navigation){a.append('<div id="bullets" />');for(var u=1;h>=u;u++)a.find("#bullets").append(1==n.thumbnails?1==n.thumb_bg?'<div class="bullet" style="background-image:url('+a.find("#slides #"+u).attr("data-thumb")+');" id="'+u+'"></div>':'<div class="bullet" id="'+u+'"><img src="'+a.find("#slides #"+u).attr("data-thumb")+'" /></div>':'<div class="bullet" id="'+u+'" />'),1==u&&t("#bullets > #1").addClass("selected");a.prepend('<div id="left" class="slider-nav" /><div id="right" class="slider-nav" />'),1==n.hideArrows&&(a.find(".slider-nav").css("opacity",0),a.mouseenter(function(){if("jQuery"==n.aniMethod)a.find(".slider-nav").animate({opacity:1},200);else if("css"==n.aniMethod){var t=a.find(".slider-nav");t.css({transition:"opacity 200ms ease",opacity:1})}}),a.mouseleave(function(){if("jQuery"==n.aniMethod)a.find(".slider-nav").animate({opacity:0},200);else if("css"==n.aniMethod){var t=a.find(".slider-nav");t.css({opacity:0})}}))}1==n.facebook&&1==n.socialButtons&&a.prepend('<div id="fb-root"></div>');var g=a.find("#slides > *");if(this.goTo=function(t){0==f&&(f=!0,a.queue(function(){function i(){1==n.transparancy?(d.css("z-index",5).fadeIn(n.aniSpeed),p.css("z-index",5).fadeOut(n.aniSpeed,function(){a.showInner(c),a.hideInner(r),f=!1})):d.css("z-index",5).fadeIn(n.aniSpeed,function(){p.css("display","none"),a.showInner(c),a.hideInner(r),f=!1})}function e(){var t=!1;1==n.transparancy?(d.css({transition:"opacity "+n.aniSpeed+"ms linear","z-index":5,opacity:1}),p.css({transition:"opacity "+n.aniSpeed+"ms linear","z-index":5,opacity:0}).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){0==t&&(p.css({"z-index":0,transition:""}),d.css({transition:""}),a.showInner(c),a.hideInner(r),f=!1,t=!0)})):d.css({transition:"opacity "+n.aniSpeed+"ms ease","z-index":5,opacity:1}).bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){0==t&&(d.css({transition:""}),p.css({transition:"","z-index":0,opacity:0}),a.showInner(c),a.hideInner(r),f=!1,t=!0)})}function s(){switch(l){case"right":d.css({"margin-left":p.width(),display:"block"}).animate({"margin-left":0},n.aniSpeed),p.css("margin-left",0).animate({"margin-left":-1*p.width()},n.aniSpeed,function(){p.css({"z-index":0,display:"none"}),a.showInner(c),a.hideInner(r),f=!1});break;case"left":d.css({"margin-left":-1*p.width(),display:"block"}).animate({"margin-left":0},n.aniSpeed),p.css("margin-left",0).animate({"margin-left":p.width()},n.aniSpeed,function(){p.css({"z-index":0,display:"none"}),a.showInner(c),a.hideInner(r),f=!1})}}function o(){var t=!1;switch(l){case"right":var i=p.width();d.css({"margin-left":i,display:"block"}),p.css({"margin-left":0,display:"block"}),setTimeout(function(){d.css({transition:"margin "+n.aniSpeed+"ms ease-in-out","margin-left":0,"z-index":10}),p.css({transition:"margin "+n.aniSpeed+"ms ease-in-out","margin-left":-1*i+"px"})},0),g.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){0==t&&(p.css({display:"none",margin:""}),d.css({"margin-left":0,transition:"",display:"block"}),a.showInner(c),a.hideInner(r),f=!1,t=!0)});break;case"left":var i=p.width();d.css({"margin-left":-1*i,display:"block"}),p.css({"margin-left":0,display:"block"}),setTimeout(function(){d.css({transition:"margin "+n.aniSpeed+"ms ease-in-out","margin-left":0,"z-index":10}),p.css({transition:"margin "+n.aniSpeed+"ms ease-in-out","margin-left":i+"px"})},0),g.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){0==t&&(p.css({display:"none",margin:""}),d.css({"margin-left":0,transition:"",display:"block"}),a.showInner(c),a.hideInner(r),f=!1,t=!0)})}}var r=c;if(t=parseInt(t),h>=t&&t>0&&t!=c&&null!=t&&""!=t)switch(c=t,a.hideInner(c),a.find("#bullets > #"+r).removeClass("selected"),a.find("#bullets > #"+c).addClass("selected"),a.find("#slides #"+r).css("z-index",0),n.animation){case"fade":var d=a.find("#slides #"+c),p=a.find("#slides #"+r);switch(n.aniMethod){case"jQuery":i();break;case"css":e()}break;case"slide":var d=a.find("#slides #"+c),p=a.find("#slides #"+r);switch(n.aniMethod){case"jQuery":s();break;case"css":o()}}else console.log("ERROR in goTo Function: "+t+" is an unvalid index. (mostSlider)");return a.clearQueue(),a}))},this.next=function(){var t;return t=h>c?c+1:1,l="right",a.goTo(t),a},this.prev=function(){var t;return t=1>=c?h:c-1,l="left",a.goTo(t),a},this.showInner=function(i){var e=0;1==n.sbsContent&&(e=n.contentAniDelay);var s=0;return a.find("#"+i+" ."+n.contentClass).each(function(){var i=t(this);setTimeout(function(){i.hasClass("fade")?"jQuery"==n.aniMethod?i.animate({opacity:1}):"css"==n.aniMethod&&i.css({transition:"opacity 400ms ease-in-out",opacity:1}):i.hasClass("from-top")?"jQuery"==n.aniMethod?i.animate({"margin-top":"0px",opacity:1}):"css"==n.aniMethod&&setTimeout(function(){i.css({transition:"margin-top 400ms ease-in-out, opacity 400ms ease-in-out","margin-top":"0px",opacity:1})},0):i.hasClass("from-bottom")?"jQuery"==n.aniMethod?i.animate({"margin-top":"0px",opacity:1}):"css"==n.aniMethod&&setTimeout(function(){i.css({transition:"margin-top 400ms ease-in-out, opacity 400ms ease-in-out","margin-top":"0px",opacity:1})},0):i.hasClass("from-left")?"jQuery"==n.aniMethod?i.animate({"margin-right":"0px","margin-left":"0px",opacity:1}):"css"==n.aniMethod&&setTimeout(function(){i.css({transition:"margin-left 400ms ease-in-out, margin-right 400ms ease-in-out, opacity 400ms ease-in-out","margin-left":"0px","margin-right":"0px",opacity:1})},0):i.hasClass("from-right")&&("jQuery"==n.aniMethod?i.animate({"margin-left":"0px",opacity:1}):"css"==n.aniMethod&&setTimeout(function(){i.css({transition:"margin-left 400ms ease-in-out, opacity 400ms ease-in-out","margin-left":"0px",opacity:1})},0))},s),s+=e}),a},this.hideInner=function(t){return a.find("#"+t+" .fade").css({opacity:0,margin:0}),a.find("#"+t+" .from-top").css({opacity:0,"margin-top":"-20px"}),a.find("#"+t+" .from-bottom").css({opacity:0,"margin-top":"20px"}),a.find("#"+t+" .from-left").css({opacity:0,"margin-left":"-30px","margin-right":"30px"}),a.find("#"+t+" .from-right").css({opacity:0,"margin-left":"30px"}),a},a.find("#right").click(function(){a.next(),1==n.autoPlay&&(clearInterval(s),e())}),a.find("#left").click(function(){a.prev(),1==n.autoPlay&&(clearInterval(s),e())}),a.find(".bullet").click(function(){l=t(this).attr("id")>c?"right":"left",a.goTo(t(this).attr("id")),1==n.autoPlay&&(clearInterval(s),e())}),1==n.autoPlay&&e(),1==n.socialButtons&&getSocialPlugins(),"jQuery"==n.aniMethod?a.find("#slides #"+c).css("display","block"):"css"==n.aniMethod&&a.find("#slides #"+c).css("fade"==n.animation?{opacity:1,"z-index":5}:{display:"block","z-index":10}),a.find("#bullets #"+c).addClass("selected"),a.showInner(c),1==n.linkable){var b=getURLParameter("slider");b>0&&h>=b&&a.goTo(b)}var y=a.find("img").length;return a.find("img").load(function(){0==p&&a.init()}).each(function(i){this.complete&&i==y-1&&t(this).load()}),a}}(jQuery);