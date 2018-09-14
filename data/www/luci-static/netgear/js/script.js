/**
 *  Material is a clean HTML5 theme for LuCI. It is based on luci-theme-bootstrap and MUI
 *
 *  luci-theme-material
 *      Copyright 2015 Lutty Yang <lutty@wcan.in>
 *
 *  Have a bug? Please create an issue here on GitHub!
 *      https://github.com/LuttyYang/luci-theme-material/issues
 *
 *  luci-theme-bootstrap:
 *      Copyright 2008 Steven Barth <steven@midlink.org>
 *      Copyright 2008 Jo-Philipp Wich <jow@openwrt.org>
 *      Copyright 2012 David Menting <david@nut-bolt.nl>
 *
 *  MUI:
 *      https://github.com/muicss/mui
 *
 *  Licensed to the public under the Apache License 2.0
 */


// (function() {
//     alert("hi");
// })(jQuery)


(function ($) {
	
     // 感谢 脚本之家 的未知作者 https://www.jb51.net/article/39704.htm
	function okit_$wait(selector,func,interval,times){
		console.log("start")
	    var _times = times || -1, //无数次
	    _interval = interval || 100, //20毫秒每次
	    _selector = selector, //选择器
	    _iIntervalID, //定时器id
		_self = $(_selector);

	    if( _self.length ){ //如果已经获取到了，就直接执行函数
	        func && func.call(_self);
	    } else {
	        _iIntervalID = setInterval(function() {
	            if(!_times) { //是0就退出
	            clearInterval(_iIntervalID);
	            }
	            _times <= 0 || _times--; //如果是正数就 --      
				console.log(_selector)
	            _self = $(_selector); //再次选择
	            if( _self.length ) { //判断是否取到
	            func && func.call(_self);
	            clearInterval(_iIntervalID);
	            }
	        }, _interval);
	    }
	}
	
     var exchange = function(a,b){
                     var n = a.next(), p = b.prev();
                     b.insertBefore(n);
                     a.insertAfter(p);
                   };
     
      // $('.brand').text("NetGEAR");
      $('.brand').attr("href","/cgi-bin/luci//admin/status/overview");

      var status = $("body [data-title='Status']")
      var system = $("body [data-title='System']").eq(0)
      var service = $("body [data-title='Services']")
      var qos = $("body [data-title=QOS]")
      var control = $("body [data-title=Control]")
      var network  = $("body [data-title='Network']")
      var static  = $("body [data-title='Bandwidth Monitor']")

      qos.text("质量")

      exchange(control.parent(),static.parent())
      exchange(service.parent(),qos.parent())
      exchange(system.parent(),static.parent())


	  network.parent().insertAfter(static.parent());
	  qos.parent().insertAfter(network.parent());


        var newLine_koolSoft = $("<li class='slide'>" +
		"<a class='menu' data-title='KoolSoft' href='/cgi-bin/luci/admin/koolsoft'>酷软</a>" + 
		"</li>");
        newLine_koolSoft.insertBefore(service.parent());
        // var koolSoft = $("body [data-title=KoolSoft]")
		
		function okit_jq_lia_deactive(sender){
			// sender.parent().parent().prev().css("background-color","rgb(133,129,216)")
			// sender.parent().parent().prev().css("color","white")
			 
			sender.parent().parent().children().removeClass('active')
			sender.parent().addClass('active')
			var storage=window.sessionStorage;

			storage.lastClick=sender[0].dataset.title;
		}
		
		function okit_jq_lia_deactive_awake(sender){
			// sender.parent().parent().prev().css("background-color","rgb(133,129,216)")
			// sender.parent().parent().prev().css("color","white")
			var storage = window.sessionStorage;
			sender.parent().parent().show()
			 
			sender.parent().parent().children().removeClass('active')
			sender.parent().addClass('active')
			
			if ( storage.lastClick=="KoolSoft.install"){
   			 okit_$wait("#app2-server1-advanced-tab",function(){
   			 	 this.click()
   			 })
			}
		}
		
		var c_href = window.location.href;

		if ($("body [value='登录']")){
			$("body [value='登录']").addClass("signIn")
			//attr("data-title",'page.signin.btn')　
			var reset_btn = $(".cbi-button.cbi-button-reset").eq(0)
			var exit_btn = $(".cbi-button-apply").eq(0)
			reset_btn.hide()
			exit_btn.hide()
  			 okit_$wait("body [data-title='Status']",function(){
				 reset_btn.show()
				 exit_btn.show()
  			 })	
		}
		
		
    $(document).ready(function(){
		var c_href = window.location.href;
		
		
	    var storage = window.sessionStorage;
		if ( storage.lastClick) {
			var name_of_last_click = storage.lastClick.split(".")[1]

			
			if ( storage.lastClick=="KoolSoft.install"){
				name_of_last_click = 'soft-center'
			}

		   	var match_last_click = c_href.indexOf(name_of_last_click)
			if (match_last_click>-1){
   			 okit_$wait("body [data-title='"+storage.lastClick+"']",function(){
   			 	 var last_selected_lia = $("body [data-title='"+storage.lastClick+"']")
   				 okit_jq_lia_deactive_awake(last_selected_lia)
   			 })	
			}					 
		}else {
		 	storage.lastClick = null;
		 }

		 
	     var koolSoft = $("body [data-title=KoolSoft]")
		 var list = 
		 $("<ul id='koolsoftSlide' class='slide-menu active' style='display: none;'>" +
			        "<li><a data-title='KoolSoft.install' >安装软件</a></li>" +
			 		"<li><a data-title='KoolSoft.memory' href='/cgi-bin/luci/admin/koolsoft#/Module_memory.asp'>内存管理</a></li>" +
			 		"<li><a data-title='KoolSoft.koolss' href='/cgi-bin/luci/admin/koolsoft#/Module_koolss.asp'>酸酸乳</a></li>" +
			 		"<li><a data-title='KoolSoft.koolproxy' href='/cgi-bin/luci/admin/koolsoft#/Module_koolproxy.asp'>去广告</a></li>" +
			 		"<li><a data-title='KoolSoft.fastdick' href='/cgi-bin/luci/admin/koolsoft#/Module_fastdick.asp'>迅雷快鸟</a></li>" +		
			 		"<li><a data-title='KoolSoft.aria2' href='/cgi-bin/luci/admin/koolsoft#/Module_aria2.asp'>Aria2</a></li>" +		
					"<li><a data-title='KoolSoft.aria2ng'>Aria2Ng</a></li>" +
			 		"<li><a data-title='KoolSoft.transmission' href='/cgi-bin/luci/admin/koolsoft#/Module_transmission.asp'>Transmission</a></li>" +		
		 "</ul>");
		 list.insertAfter(koolSoft);

 		 $(".main .main-left  .nav .menu").unbind();
 		 $(".main .main-left  .nav .menu").removeAttr("href");
		 $(".main .main-left  .nav .menu").bind('click', function() {
			 if ($(this).next().css("display")=="block") {
			 	$(this).next().hide()//css("display","none")
			 }else {
			    $(".main .main-left .nav .slide .slide-menu").hide()
			 	$(this).next().show()//css("display","block")
			 }
             // 对象转html
			 // var ul = $(this).next()
			 // var ul_html = ul[0].outerHTML
			 // console.log(ul[0].outerHTML)
			 // var visible = ul_html.match("display: none;")
			 // console.log(visible)

		 });
		 
		 // $(" li a").bind('click', function() {
		 // 			 $(this).parent().parent().prev().css("background-color","rgb(133,129,216)")
		 // 			 $(this).parent().parent().prev().css("color","white")
		 //
		 // }

		 
		 $("#koolsoftSlide li a").bind('click', function() {
			 okit_jq_lia_deactive($(this))
		 });
		 
		 $("body [data-title='KoolSoft.install']").bind('click', function() {
			 okit_jq_lia_deactive($(this))
			 window.location.href='/cgi-bin/luci/admin/koolsoft#/soft-center.asp'; 
			 okit_$wait("#app2-server1-advanced-tab",function(){
			 	 this.click()
			 })
		 });
		 
		 $("body [data-title='KoolSoft.aria2ng']").bind('click', function() {
			 okit_jq_lia_deactive($(this))
			  window.open('http://www.nasdiy.net/AriaNg/#!/downloading');
		 });
    })
	
    $(".main > .loading").fadeOut();

    /**
     * trim text, Remove spaces, wrap
     * @param text
     * @returns {string}
     */
    function trimText(text) {
        return text.replace(/[ \t\n\r]+/g, " ");
    }


    var lastNode = undefined;
    var mainNodeName = undefined;

    var nodeUrl = "";
    (function(node){
        if (node[0] == "admin"){
            luciLocation = [node[1], node[2]];
        }else{
            luciLocation = node;
        }

        for(var i in luciLocation){
            nodeUrl += luciLocation[i];
            if (i != luciLocation.length - 1){
                nodeUrl += "/";
            }
        }
    })(luciLocation);

    /**
     * get the current node by Burl (primary)
     * @returns {boolean} success?
     */
    function getCurrentNodeByUrl() {
        var ret = false;
        if (!$('body').hasClass('logged-in')) {
            luciLocation = ["Main", "Login"];
            return true;
        }

        $(".main > .main-left > .nav > .slide > .menu").each(function () {
            var ulNode = $(this);
            ulNode.next().find("a").each(function () {
                var that = $(this);
                var href = that.attr("href");

                if (href.indexOf(nodeUrl) != -1) {
                    ulNode.click();
                    ulNode.next(".slide-menu").stop(true, true);
                    lastNode = that.parent();
                    lastNode.addClass("active");
                    ret = true;
                    return true;
                }
            });
        });
        return ret;
    }

    /**
     * menu click
     */
    $(".main > .main-left > .nav > .slide > .menu").click(function () {
        var ul = $(this).next(".slide-menu");
        var menu = $(this);
        if (!ul.is(":visible")) {
            menu.addClass("active");
            ul.addClass("active");
            ul.stop(true).slideDown("fast");
        } else {
            ul.stop(true).slideUp("fast", function () {
                menu.removeClass("active");
                ul.removeClass("active");
            });
        }
        return false;
    });

    /**
     * hook menu click and add the hash
     */
    $(".main > .main-left > .nav > .slide > .slide-menu > li > a").click(function () {
        if (lastNode != undefined) lastNode.removeClass("active");
        $(this).parent().addClass("active");
        $(".main > .loading").fadeIn("fast");
        return true;
    });

    /**
     * fix menu click
     */
    $(".main > .main-left > .nav > .slide > .slide-menu > li").click(function () {
        if (lastNode != undefined) lastNode.removeClass("active");
        $(this).addClass("active");
        $(".main > .loading").fadeIn("fast");
        window.location = $($(this).find("a")[0]).attr("href");
        return false;
    });

    /**
     * get current node and open it
     */
    if (getCurrentNodeByUrl()) {
        mainNodeName = "node-" + luciLocation[0] + "-" + luciLocation[1];
        mainNodeName = mainNodeName.replace(/[ \t\n\r\/]+/g, "_").toLowerCase();
        $("body").addClass(mainNodeName);
    }
    $(".cbi-button-up").val("");
    $(".cbi-button-down").val("");


    /**
     * hook other "A Label" and add hash to it.
     */
    $("#maincontent > .container").find("a").each(function () {
        var that = $(this);
        var onclick = that.attr("onclick");
        if (onclick == undefined || onclick == "") {
            that.click(function () {
                var href = that.attr("href");
                if (href.indexOf("#") == -1) {
                    $(".main > .loading").fadeIn("fast");
                    return true;
                }
            });
        }
    });

    /**
     * Sidebar expand
     */
    var showSide = false;
    $(".showSide").click(function () {
        if (showSide) {
            $(".darkMask").stop(true).fadeOut("fast");
            $(".main-left").stop(true).animate({
                width: "0"
            }, "fast");
            $(".main-right").css("overflow-y", "auto");
            showSide = false;
        } else {
            $(".darkMask").stop(true).fadeIn("fast");
            $(".main-left").stop(true).animate({
                width: "15rem"
            }, "fast");
            $(".main-right").css("overflow-y", "hidden");
            showSide = true;
        }
    });


    $(".darkMask").click(function () {
        if (showSide) {
            showSide = false;
            $(".darkMask").stop(true).fadeOut("fast");
            $(".main-left").stop(true).animate({
                width: "0"
            }, "fast");
            $(".main-right").css("overflow-y", "auto");
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 921) {
            $(".main-left").css("width", "");
            $(".darkMask").stop(true);
            $(".darkMask").css("display", "none");
            showSide = false;
        }
    });

    /**
     * fix legend position
     */
    $("legend").each(function () {
        var that = $(this);
        that.after("<span class='panel-title'>" + that.text() + "</span>");
    });

    $(".cbi-section-table-titles, .cbi-section-table-descr, .cbi-section-descr").each(function () {
        var that = $(this);
        if (that.text().trim() == ""){
            that.css("display", "none");
        }
    });


    $(".main-right").focus();
    $(".main-right").blur();
    $("input").attr("size", "0");

    if (mainNodeName != undefined) {
        console.log(mainNodeName);
        switch (mainNodeName) {
            case "node-status-system_log":
            case "node-status-kernel_log":
                $("#syslog").focus(function () {
                    $("#syslog").blur();
                    $(".main-right").focus();
                    $(".main-right").blur();
                });
                break;
            case "node-status-firewall":
                var button = $(".node-status-firewall > .main fieldset li > a");
                button.addClass("cbi-button cbi-button-reset a-to-btn");
                break;
            case "node-system-reboot":
                var button = $(".node-system-reboot > .main > .main-right p > a");
                button.addClass("cbi-button cbi-input-reset a-to-btn");
                break;
        }
    }

})(jQuery);
