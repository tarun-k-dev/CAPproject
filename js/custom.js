(function() {
    var cx = '012971019331610648934:m2tou3_miwy';
    var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
    gcse.src = 'https://www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
    })();
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-3855518-1', 'auto');
    ga('require', 'displayfeatures');
    ga('require', 'GTM-WJ88MZ5');
    ga('send', 'pageview');

    function w3_open() {
        var x = document.getElementById("myAccordion");
        if (x.style.display === 'none') {
          x.style.display = 'block';
        } else {
          x.style.display = 'none';
        }
      }
      function w3_close() {
        document.getElementById("myAccordion").style.display = "none";
      }
      function open_xs_menu(x) {
        if (document.getElementById("sectionxs_" + x).innerHTML == "") {
          document.getElementById("sectionxs_" + x).innerHTML = document.getElementById("nav_" + x).innerHTML;
        } else {
          document.getElementById("sectionxs_" + x).innerHTML = "";
        }
      }
      function w3_open_nav(x) {
        if (document.getElementById("nav_" + x).style.display == "block") {
          w3_close_nav(x);
        } else {
          w3_close_nav("tutorials");
          w3_close_nav("references");
          w3_close_nav("examples");
          w3_close_nav("exercises");
          document.getElementById("nav_" + x).style.display = "block";
          if (document.getElementById("navbtn_" + x)) {
            document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "none";
            document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "inline";
          } 
          if (x == "search") {
            if (document.getElementById("gsc-i-id1")) {document.getElementById("gsc-i-id1").focus(); }
          }
        }
      }
      function w3_close_all_nav() {
        w3_close_nav("tutorials");
        w3_close_nav("references");
        w3_close_nav("examples");
        w3_close_nav("exercises");
        w3_close();
      }
      function w3_close_nav(x) {
        document.getElementById("nav_" + x).style.display = "none";
        if (document.getElementById("navbtn_" + x)) {
          document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "inline";
          document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "none";
        }
      }
      function changecodetheme() {
        var cc = document.body.className;
        if (cc.indexOf("darktheme") > -1) {
          document.body.className = cc.replace("darktheme", "");
          localStorage.setItem("preferredmode", "light");
        } else {
          document.body.className += " darktheme";
          localStorage.setItem("preferredmode", "dark");
        }
      }
      function open_translate(elmnt) {
        var a = document.getElementById("google_translate_element");
        if (a.style.display == "") {
          a.style.display = "none";
          elmnt.innerHTML = "<i class='fa'>&#xe801;</i>";
        } else {
          a.style.display = "";
          if (window.innerWidth > 830) {
            a.style.width = "20%";
          } else {
            a.style.width = "60%";
          }
          elmnt.innerHTML = "<span style='font-family:verdana;font-weight:bold;display:inline-block;width:21px;text-align:center;'>X</span>";
        }
      }
      function open_search(elmnt) {
        var a = document.getElementById("googleSearch");
        document.getElementById("navbtn_tutorials").style.visibility = "visible";
        if (a.style.display == "") {
          a.style.display = "none";
          elmnt.innerHTML = "<i class='fa'>&#xe802;</i>";    
        } else {
          a.style.display = "";  
          if (window.innerWidth > 1000) {
            a.style.width = "40%";
          } else if (window.innerWidth >768) {
            document.getElementById("navbtn_tutorials").style.visibility = "hidden";
            a.style.width = "80%";    
          } else {
            a.style.width = "80%";
          }
          if (document.getElementById("gsc-i-id1")) {document.getElementById("gsc-i-id1").focus(); }
          elmnt.innerHTML = "<span style='font-family:verdana;font-weight:bold;display:inline-block;width:23px;text-align:center;'>X</span>";
        }
      }
      function googleTranslateElementInit() {
        new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false,    
        gaTrack: true,
        gaId: 'UA-3855518-1',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
      function clickFBLike() {
        document.getElementById("fblikeframe").style.display='block';
        document.getElementById("popupDIV").innerHTML = "<iframe src='/fblike.asp?r=" + Math.random() + "' frameborder='no' style='height:200px;width:250px;'></iframe><br><button onclick='hideFBLike()' class='w3-button w3-dark-grey w3-hover-black'>Close</button>";
      }
      function hideFBLike() {
        document.getElementById("fblikeframe").style.display='none';
      }
      if (window.addEventListener) { 
        document.getElementById("main").addEventListener("click", w3_close_all_nav, true);
        document.getElementById("mySidenav").addEventListener("click", w3_close_all_nav, true);
        document.getElementById("main").addEventListener("wheel", w3_close_all_nav, true);
        document.getElementById("main").addEventListener("touchstart", w3_close_all_nav, true);
      } else if (window.attachEvent) {         
        document.getElementById("main").attachEvent("onclick", w3_close_all_nav);
        document.getElementById("mySidenav").attachEvent("onclick", w3_close_all_nav);
      }

      
      function loginCircle(xx, yy, r, aD) {
        var aR = (aD-90) * Math.PI / 180.0;
        return {
          x: xx + (r * Math.cos(aR)),
          y: yy + (r * Math.sin(aR))
        };
      }
      function loginDrawCircle(x, y, r, sa, ea){
          var s = loginCircle(x, y, r, ea);
          var e = loginCircle(x, y, r, sa);
          var f = ea - sa <= 180 ? "0" : "1";
          return ["M", s.x, s.y, "A", r, r, 0, f, 0, e.x, e.y].join(" ");
      }
      function login_user(event) {
        event.preventDefault();
        var xhttp = new XMLHttpRequest(), a, b, f, f2, valid = 1;
        f = document.forms["loginform"];
        a = f["n"];
        b = f["p"];
        if (a.value == "") {
          a.style.backgroundColor = "#ffcccc";
          valid = 0;
        }
        if (b.value == "") {
          b.style.backgroundColor = "#ffcccc";
          valid = 0;
        }
        if (valid == 0) {return false;}
        document.getElementById('login_submit_button').focus();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "OK") {
              a.value = "";
              b.value = "";
              w3_close_nav("login");
              loadUser();
            } else if (this.responseText == "OK2") {
              document.getElementById("loginerrordiv").innerHTML = "Your account has not been verified yet";
              document.getElementById("loginerrordiv").style.display = "block";
            } else if (this.responseText == "NOSUCHUSER") {
              a.style.backgroundColor = "#ffcccc";
              b.style.backgroundColor = "#ffcccc";
              document.getElementById("loginerrordiv").innerHTML = "Wrong Username or Password";
              document.getElementById("loginerrordiv").style.display = "block";
            } else {
              document.getElementById("loginerrordiv").innerHTML = "Ooops! Something went wrong...";
              document.getElementById("loginerrordiv").style.display = "block";
            }
          }
        };
        xhttp.open("POST", "https://mypage.w3schools.com/mypage/login_user.php", true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("n=" + encodeURIComponent(a.value) + "&p=" + encodeURIComponent(b.value));
      
      }
      
      function login_inputGetsFocus(elmnt) {
        document.forms["loginform"]["n"].style.backgroundColor = "#fff";
        document.forms["loginform"]["p"].style.backgroundColor = "#fff";
        if (document.getElementById("loginerrordiv")) {
          document.getElementById("loginerrordiv").style.display = "none";
        }
      }
      
      loadUser();
      //activateElse();
      function loadUser() {
        var x, y, pos, foldername, filename, typ, pathname = window.location.pathname;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            x = this.responseText;
            if (x == "A") {
              console.log(x);
              activateElse();
            } else if (x == "B") {
              console.log(x);
              activateMYPAGE(x, y);
            } else {
              activateElse();
              console.log("Z");
            }
          }
        };
        xhttp.open("POST", MyLearning.getUrl('api.meta_for_default'), true);
      //xhttp.open("POST", "https://mypage.w3schools.com/mypage/beta_for_default.php", true);
        xhttp.withCredentials = true;
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
      }
      function activateMYPAGE(cc, obj) {
        var x, degrees = 0, txt = "", txt2 = "", color1 = "rgba(76, 175, 80, 0.1)", color2 = "rgba(76, 175, 80, 1)";
        var a = document.getElementById("w3loginbtn");
        var b = document.getElementById("mypagediv");
        if (a) a.style.display = "none";
        if (b) {
          if (cc == "Q") {
            color1 = "rgba(44, 156, 202, 0.1)";
            color2 = "rgba(44, 156, 202, 1)";
          }
          b.style.display = "block";
          txt += "<a href='https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fmy-learning.w3schools.com%2F'>";
          //txt += "<a href='https://mypage.w3schools.com/mypage/default.php'>";
          txt += "<img src='/images/mypagelogo32x32.png' alt='MYPAGE' style='position:absolute;top:18px;right:28px'>";
          txt += '<svg style="position:absolute;top:0;right:0;height:70px;width:70px">';
          txt += '<path id="mypage_circle1" fill="none" stroke="' + color1 + '" stroke-width="4"/>';
          txt += '<path id="mypage_circle2" fill="none" stroke="' + color2 + '" stroke-width="4"/>';
          txt += '</svg>';
          txt += '</a>';
          b.innerHTML = "&nbsp;" + txt;
          document.getElementById("mypage_circle1").setAttribute("d", loginDrawCircle(26, 35, 24, 0, 359.99));
          document.getElementById("mypage_circle2").setAttribute("d", loginDrawCircle(26, 35, 24, 0, degrees));
        }
      }
      function activateElse() {
        var a = document.getElementById("mypagediv");
        var b = document.getElementById("w3loginbtn");
        if (a) a.style.display = "none";
        if (b) b.style.display = "inline";
      }
      
      w3CodeColor();
      (
      function setThemeMode() {
        var x = localStorage.getItem("preferredmode");
        if (x == "dark") {
          document.body.className += " darktheme";
        }
      })();