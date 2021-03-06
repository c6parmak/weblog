 function handleResponse() {}

function jsonpResp(e) {}
var gfyCollection = function() {
    function t(e, t) {
        if (t.getElementsByClassName) {
            return t.getElementsByClassName(e)
        } else {
            var n = [];
            var r = t.getElementsByTagName("*");
            for (var i = 0; i < r.length; i++) {
                if ((" " + r[i].className + " ").indexOf(" " + e + " ") > -1) {
                    n.push(r[i])
                }
            }
            return n
        }
    }

    function n() {
        elem_coll = t("gfyitem", document);
        for (var e = 0; e < elem_coll.length; e++) {
            var n = new gfyObject(elem_coll[e]);
            n.init()
        }
    }

    function r() {
        return e
    }
    var e = [];
    return {
        init: n,
        get: r
    }
}();
var gfyObject = function(e) {
    function z(e, t) {
        if (t.getElementsByClassName) {
            return t.getElementsByClassName(e)
        } else {
            var n = [];
            var r = t.getElementsByTagName("*");
            for (var i = 0; i < r.length; i++) {
                if ((" " + r[i].className + " ").indexOf(" " + e + " ") > -1) {
                    n.push(r[i])
                }
            }
            return n
        }
    }

    function W(e) {
        F = e;
        gfyFrameRate = F.frameRate
    }

    function X() {
        P = 1;
        a = document.createElement("video");
        a.className = "gfyVid";
        a.autoplay = true;
        a.loop = true;
        a.poster = true;
        a.controls = true;
        if (ct() - 2 > gfyWidth) {
            a.width = gfyWidth;
            a.height = gfyHeight;
            b.width = gfyWidth;
            b.height = gfyHeight
        }
        source2 = document.createElement("source");
        source2.src = gfyWebmUrl;
        source2.type = "video/webm";
        source2.className = "webmsource";
        a.appendChild(source2);
        source = document.createElement("source");
        source.src = gfyMp4Url;
        source.type = "video/mp4";
        source.className = "mp4source";
        a.appendChild(source);
        a.style.position = "absolute";
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 0;
        a.style.padding = 0;
        a.style.zIndex = 25;
        t.appendChild(a);
        a.addEventListener("error", kt, true);
        a.onmouseover = yt;
        a.onmouseout = bt
    }

    function V() {
        f = document.createElement("img");
        f.className = "gfyGif";
        f.src = gfyGifUrl;
        b.width = 0;
        b.height = 0;
        f.style.position = "absolute";
        f.style.top = 0;
        f.style.left = 0;
        f.style.border = 0;
        f.style.padding = 0;
        f.style.zIndex = 25;
        t.appendChild(f);
        f.onmouseover = yt;
        f.onmouseout = bt
    }

    function $() {
        parentElem = t.parentNode;
        replaceElem = document.createElement("div");
        replaceElem.className = t.className;
        replaceElem.style.cssText = t.style.cssText;
        parentElem.insertBefore(replaceElem, t);
        parentElem.removeChild(t);
        wrapperElem = replaceElem;
        wrapperElem.style.display = "inline-block";
        t.style.padding = 0;
        t = document.createElement("div");
        wrapperElem.appendChild(t);
        t.style.width = gfyWidth + "px";
        t.style.position = "relative";
        t.style.padding = 0;
        t.style.zIndex = 5;
        t.style.height = gfyHeight + U + "px";
        J();
        K();
        Q()
    }

    function J() {
        y = document.createElement("canvas");
        y.className = "gfyDotCanvas oTrans oShow";
        y.style.position = "absolute";
        y.style.right = 0;
        y.style.top = "5px";
        y.width = 35;
        y.height = 35;
        y.style.zIndex = 30;
        if (!I) {
            y.style.display = "none"
        }
        t.appendChild(y)
    }

    function K() {
        b = document.createElement("canvas");
        b.className = "gfyPreLoadCanvas";
        b.style.position = "absolute";
        b.style.top = 0;
        b.style.left = 0;
        b.width = gfyWidth;
        b.height = gfyHeight;
        b.height = gfyHeight;
        b.style.cssText = "position: absolute; z-index: 22; top: 0px; left: 0px; -webkit-filter: blur(2px);";
        t.appendChild(b)
    }

    function Q() {
        i = document.createElement("div");
        i.className = "gfyCtrlBox";
        s = document.createElement("img");
        s.className = "gfyCtrlPause";
        s.src = "http://assets.gfycat.com/img/pause.png";
        s.width = 15;
        s.height = 15;
        s.style.marginLeft = "10px";
        s.style.marginTop = "12px";
        s.style.borderStyle = "none";
        i.appendChild(s);
        a1 = document.createElement("a");
        ctrlReverse = document.createElement("img");
        ctrlReverse.className = "gfyCtrlReverse";
        ctrlReverse.src = "http://assets.gfycat.com/img/reverse3.png";
        ctrlReverse.width = 15;
        ctrlReverse.height = 15;
        ctrlReverse.style.marginLeft = "6px";
        ctrlReverse.style.marginTop = "12px";
        ctrlReverse.style.borderStyle = "none";
        a1.appendChild(ctrlReverse);
        i.appendChild(a1);
        a2 = document.createElement("a");
        o = document.createElement("img");
        o.className = "gfyCtrlSlower";
        o.src = "http://assets.gfycat.com/img/slower.png";
        o.width = 15;
        o.height = 15;
        o.style.marginLeft = "13px";
        o.style.marginTop = "12px";
        o.style.borderStyle = "none";
        a2.appendChild(o);
        i.appendChild(a2);
        a3 = document.createElement("a");
        u = document.createElement("img");
        u.className = "gfyCtrlFaster";
        u.src = "http://assets.gfycat.com/img/faster.png";
        u.width = 15;
        u.height = 15;
        u.style.marginLeft = "4px";
        u.style.marginTop = "12px";
        u.style.borderStyle = "none";
        a3.appendChild(u);
        i.appendChild(a3);
        r = document.createElement("div");
        r.className = "gfyCtrlTabPull";
        pullTabImg = document.createElement("img");
        pullTabImg.src = "http://assets.gfycat.com/img/pulltabsmaller.png";
        pullTabImg.style.borderStyle = "0";
        r.appendChild(pullTabImg);
        r.style.position = "absolute";
        r.style.right = "0";
        r.style.bottom = "-21px";
        r.style.margin = "0";
        r.style.padding = "0";
        r.style.borderStyle = "none";
        r.style.width = "36px";
        r.style.height = "21px";
        i.style.position = "absolute";
        i.style.right = "0px";
        i.style.bottom = U + "px";
        i.style.height = "40px";
        i.style.width = "102px";
        i.style.backgroundColor = "#0054a5";
        i.style.zIndex = "10";
        i.style.margin = "0";
        i.style.display = "none";
        i.style.lineHeight = "0";
        i.appendChild(r);
        i.setAttribute("id", "ctr" + n);
        t.appendChild(i)
    }

    function G() {
        gfyInfo = document.createElement("div");
        gfyInfo.className = "gfyInfo oTrans oHide";
        h = document.createElement("div");
        h.className = "gfyInfoItem";
        h.innerHTML = "Gif Size: " + rt(gfyGifSize);
        gfyInfo.appendChild(h);
        gfySize = document.createElement("div");
        gfySize.className = "gfyInfoItem";
        gfySize.innerHTML = "Gfy Size: " + rt(gfyMp4Size);
        gfyInfo.appendChild(gfySize);
        g = document.createElement("div");
        g.className = "gfyInfoItem";
        g.innerHTML = "Compression: " + Math.round(10 * gfyGifSize / gfyMp4Size) / 10 + " to 1";
        gfyInfo.appendChild(g);
        v = document.createElement("div");
        v.className = "gfyInfoItem";
        v.innerHTML = "Views: " + gfyViews;
        gfyInfo.appendChild(v);
        t.appendChild(gfyInfo)
    }

    function Y() {
        P = 0;
        t.removeChild(a)
    }

    function Z() {
        t.removeChild(f)
    }

    function et() {
        if (P == 1) {
            if (a.paused) {
                s.src = "http://assets.gfycat.com/img/pause.png";
                u.src = "http://assets.gfycat.com/img/faster.png";
                o.src = "http://assets.gfycat.com/img/slower.png";
                u.onclick = At;
                o.onclick = Lt
            }
            Y();
            V();
            l.src = l.src.replace(/gif-icon/g, "film-icon");
            i.style.display = "none";
            ot(true);
            Ft()
        } else {
            Z();
            X();
            l.src = l.src.replace(/film-icon/g, "gif-icon");
            Ht()
        }
    }

    function tt() {
        Z();
        X()
    }

    function nt() {
        Y();
        V()
    }

    function rt(e) {
        var t = -1;
        var n = [" kB", " MB"];
        do {
            e = e / 1024;
            t++
        } while (e > 1024);
        return Math.max(e, .1).toFixed(1) + n[t]
    }

    function it() {
        if (document.selection) {
            var e = document.body.createTextRange();
            e.moveToElementText(this);
            e.select()
        } else {
            if (window.getSelection) {
                var e = document.createRange();
                e.selectNode(this);
                window.getSelection().addRange(e)
            }
        }
    }

    function st() {
        var e = z("mp4source", a)[0].src;
        if (e.indexOf("zippy") > -1) {
            j = "#99cf2c";
            dotRed = 50;
            dotGreen = 105;
            dotBlue = 0
        } else {
            if (e.indexOf("fat") > -1) {
                j = "#fdc428";
                dotRed = 210;
                dotGreen = 153;
                dotBlue = 0
            } else {
                dotRed = 163;
                dotGreen = 7;
                dotBlue = 0;
                j = "#cd312a"
            }
        }
    }

    function ot(e) {
        if (typeof gfyMp4Size === "undefined") {
            return st()
        }
        var t;
        if (e == true) {
            t = gfyGifSize
        } else {
            t = gfyMp4Size
        } if (t < 1e6) {
            j = "#99cf2c";
            dotRed = 50;
            dotGreen = 105;
            dotBlue = 0
        } else {
            if (t < 2e6) {
                j = "#fdc428";
                dotRed = 210;
                dotGreen = 153;
                dotBlue = 0
            } else {
                dotRed = 163;
                dotGreen = 7;
                dotBlue = 0;
                j = "#cd312a"
            }
        }
    }

    function ut(e, t) {
        return (" " + e.className + " ").indexOf(" " + t + " ") > -1
    }

    function at(e, t) {
        e.className = e.className.replace(/(^\s+|\s+$)/g, "");
        return ut(e, t) ? false : e.className += " " + t
    }

    function ft(e, t) {
        return e.className = (" " + e.className + " ").replace(" " + t + " ", " ")
    }

    function lt() {
        var e = false;
        (function(t) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|android|ipad|playbook|silk|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) {
                e = true
            }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return e
    }

    function ct() {
        if (window.outerWidth) {
            return window.outerHeight
        } else {
            return document.body.clientWidth
        }
    }

    function ht() {
        n = t.getAttribute("data-id");
        data = t.getAttribute("data-controls");
        if (data == "false") {
            q = false
        } else {
            q = true
        }
        data = t.getAttribute("data-dot");
        if (data == "false") {
            I = false
        } else {
            I = true
        }
        data = t.getAttribute("data-perimeter");
        if (data == "true") {
            R = true
        } else {
            R = false
        } if (R) {
            U = 60
        }
        loadJSONP("http://gfycat.com/cajax/get/" + n, function(e) {
            if (e) {
                pt(e)
            } else {}
        })
    }

    function pt(e) {
        F = e.gfyItem;
        gfyWidth = F.width;
        gfyHeight = F.height;
        gfyMp4Url = F.mp4Url;
        gfyWebmUrl = F.webmUrl;
        gfyFrameRate = F.frameRate;
        gfyGifUrl = F.gifUrl;
        $();
        //if (lt() || !document.createElement("video").canPlayType) {
        //    V();
        //    at(l, "oShow");
        //    ft(l, "oHide")
        //} else {
            X()
        //}
        r.onmouseover = wt;
        r.onmouseout = Et;
        i.onmouseover = St;
        i.onmouseout = xt;
        t.onmouseover = yt;
        t.onmouseout = bt;
        s.onclick = Tt;
        o.onclick = Lt;
        u.onclick = At;
        ctrlReverse.onclick = Ct;
        ot();
        k.drawLoadingBeat()
    }

    function dt() {
        if (N || !I && !q) {
            return false
        } else {
            N = true;
            C = false;
            clearTimeout(A);
            A = setTimeout(function() {
                k.showOpacityStep()
            }, 5)
        }
    }

    function vt() {
        if (C || !I && !q) {
            return false
        } else {
            N = false;
            C = true;
            clearTimeout(A);
            A = setTimeout(function() {
                k.hideOpacityStep()
            }, 5)
        }
    }

    function mt() {
        if (D) {
            at(B, "oHide");
            ft(B, "oShow");
            D = false
        } else {
            B.style.display = "block";
            at(B, "oShow");
            ft(B, "oHide");
            D = true
        }
        gt()
    }

    function gt() {
        setTimeout(function() {
            at(t, "foo");
            ft(t, "foo")
        }, 10)
    }

    function yt() {
        S = 1;
        dt()
    }

    function bt() {
        S = 0;
        setTimeout(function() {
            k.checkGfyExtras()
        }, 1e3)
    }

    function wt() {
        w = 1;
        Dt()
    }

    function Et() {
        w = 0;
        setTimeout(function() {
            k.checkCtrl()
        }, 400)
    }

    function St() {
        E = 1
    }

    function xt() {
        E = 0;
        setTimeout(function() {
            k.checkCtrl()
        }, 400)
    }

    function Tt() {
        if (a.paused) {
            a.play();
            this.src = "http://assets.gfycat.com/img/pause.png";
            u.src = "http://assets.gfycat.com/img/faster.png";
            o.src = "http://assets.gfycat.com/img/slower.png";
            u.onclick = At;
            o.onclick = Lt
        } else {
            a.pause();
            this.src = "http://assets.gfycat.com/img/play.png";
            u.src = "http://assets.gfycat.com/img/stepforward.png";
            o.src = "http://assets.gfycat.com/img/stepbackward.png";
            u.onclick = Ot;
            o.onclick = Mt
        }
    }

    function Nt() {
        var e = this.parentNode.parentNode.parentNode;
        var t = e.getElementsByTagName("video")[0];
        var n = -.125;
        t.pause();
        t.setAttribute("data-playbackRate", setInterval(function r() {
            t.currentTime += n;
            if (t.currentTime <= .126) {
                t.currentTime = t.duration
            }
            return r
        }(), 125))
    }

    function Ct() {
        s.src = "http://assets.gfycat.com/img/pause.png";
        u.src = "http://assets.gfycat.com/img/faster.png";
        o.src = "http://assets.gfycat.com/img/slower.png";
        u.onclick = At;
        o.onclick = Lt;
        a.pause();
        var e = z("mp4source", a)[0];
        var t = z("webmsource", a)[0];
        if (x) {
            e.src = e.src.replace(/-reverse\.mp4/g, ".mp4");
            t.src = t.src.replace(/-reverse\.webm/g, ".webm");
            x = false
        } else {
            e.src = e.src.replace(/-android/g, "");
            e.src = e.src.replace(/\.mp4/g, "-reverse.mp4");
            t.src = t.src.replace(/\.webm/g, "-reverse.webm");
            x = true
        }
        a.playbackRate = 1;
        a.load();
        a.play();
        k.drawLoadingBeat()
    }

    function kt(e) {
        if (a.networkState == HTMLMediaElement.NETWORK_NO_SOURCE) {
            t.style.backgroundColor = "rgb(242,222,222)";
            t.style.borderColor = "rgb(238,211,215)";
            t.style.borderStyle = "solid";
            t.style.borderWidth = "1px";
            t.style.padding = "10px";
            t.style.color = "rgb(185, 74, 72)";
            t.innerHTML = "Oops! We can't reach this gfy. Is your <b>network</b> working? <br><br>We'd love to here from you if there is a problem on our end.  Sorry!<br><br>You can try directly <a href='" + gfyGifUrl + "'>here</a>."
        }
    }

    function Lt() {
        if (a.playbackRate <= 1) {
            a.playbackRate = a.playbackRate / 2
        } else {
            a.playbackRate--
        }
    }

    function At() {
        if (a.playbackRate <= 1) {
            a.playbackRate = a.playbackRate * 2
        } else {
            a.playbackRate++
        }
    }

    function Ot() {
        if (window.opera) {
            var e = a.onplay;
            a.onplay = function() {
                a.pause();
                a.onplay = e
            };
            a.play()
        } else {
            a.currentTime += 1 / gfyFrameRate
        }
    }

    function Mt() {
        a.currentTime -= 1 / gfyFrameRate
    }

    function _t() {
        if (a.playbackRate <= 1) {
            var e = a.playbackRate / 2;
            var t = a.playbackRate * 2
        } else {
            var e = a.playbackRate - 1;
            var t = a.playbackRate + 1
        }
        var n = "#";
        if (x) {
            n = n + "?direction=reverse";
            var r = "&"
        } else {
            var r = "?"
        } if (a.playbackRate != 1) {
            n = n + r + "speed=" + a.playbackRate
        }
        o.parentNode.href = n;
        u.parentNode.href = n;
        ctrlReverse.parentNode.href = n
    }

    function Dt() {
        if (T) {
            return false
        } else {
            T = true;
            clearTimeout(L);
            L = setTimeout(function() {
                k.showCtrlStep()
            }, 5)
        }
    }

    function Pt() {
        if (T) {
            return false
        } else {
            T = true;
            clearTimeout(L);
            L = setTimeout(function() {
                k.hideCtrlStep()
            }, 5)
        }
    }

    function Ht() {
        ot();
        a.load();
        var e = navigator.userAgent.toLowerCase();
        if (e.indexOf("android") > -1) {
            a.loop = false;
            a.addEventListener("load", function() {
                a.play()
            }, false);
            a.addEventListener("ended", function() {
                a.currentTime = .1;
                a.play()
            }, false)
        }
        a.play();
        M = 0;
        if (!_) {
            k.drawLoadingBeat()
        }
    }

    function Bt() {
        return;
        var e = jt("speed");
        var t = jt("direction");
        if (e) {
            a.playbackRate = e
        }
        if (t && t == "reverse") {
            if (!x) {
                Ct()
            }
        }
    }

    function jt(e) {
        var t = window.document.URL.toString();
        if (t.indexOf("?") > 0) {
            var n = t.split("?");
            var r = n[1].split("&");
            var i = new Array(r.length);
            var s = new Array(r.length);
            var o = 0;
            for (o = 0; o < r.length; o++) {
                var u = r[o].split("=");
                i[o] = u[0];
                if (u[1] != "") {
                    s[o] = unescape(u[1])
                } else {
                    s[o] = "No Value"
                }
            }
            for (o = 0; o < r.length; o++) {
                if (i[o] == e) {
                    return s[o]
                }
            }
            return 0
        }
    }

    function Ft() {
        try {
            b.getContext("2d").clearRect(0, 0, b.width, b.height);
            var e = y.getContext("2d");
            e.clearRect(0, 0, 50, 50);
            e.beginPath();
            e.fillStyle = j;
            e.arc(25, 5, 5, 0, Math.PI * 2, false);
            e.lineTo(25, 5);
            e.closePath();
            e.fill()
        } catch (t) {}
    }
    var t = e;
    var n;
    var r;
    var i;
    var s;
    var o;
    var u;
    var a;
    var f;
    var l;
    var c;
    var h;
    var p;
    var d;
    var v;
    var m;
    var g;
    var y;
    var b;
    var w;
    var E;
    var S;
    var x = false;
    var T = false;
    var N = false;
    var C = false;
    var k = this;
    var L;
    var A;
    var O;
    var M = 0;
    var _ = 0;
    var D = 0;
    var P = 0;
    var H;
    var B;
    var j;
    var F;
    var I;
    var q;
    var R;
    var U = 0;
    this.checkCtrl = function() {
        if (w || E) {} else {
            Pt()
        }
    };
    this.checkGfyExtras = function() {
        if (S || w || E) {} else {
            vt()
        }
    };
    this.showOpacityStep = function() {
        N = true;
        C = false;
        if (q) {
            i.style.opacity = parseFloat(i.style.opacity) + .1
        }
        if (!_ && I) {
            y.style.opacity = parseFloat(y.style.opacity) + .1
        }
        if (y.style.opacity >= 1 && i.style.opacity >= 1 || q && !I && i.style.opacity >= 1 || !q && I && y.style.opacity >= 1) {
            if (I) {
                y.style.opacity = 1
            }
            if (q) {
                i.style.opacity = 1
            }
            N = false
        } else {
            clearTimeout(A);
            A = setTimeout(function() {
                k.showOpacityStep()
            }, 5)
        }
    };
    this.hideOpacityStep = function() {
        C = true;
        N = false;
        if (q) {
            i.style.opacity = parseFloat(i.style.opacity) - .005
        }
        if (!_) {
            y.style.opacity = parseFloat(y.style.opacity) - .005
        }
        if (y.style.opacity <= 0 && i.style.opacity <= 0 || q && !I && i.style.opacity <= 0 || !q && I && y.style.opacity <= 0) {
            if (q) {
                i.style.opacity = 0
            }
            y.style.opacity = 0;
            C = false
        } else {
            clearTimeout(A);
            A = setTimeout(function() {
                k.hideOpacityStep()
            }, 5)
        }
    };
    this.showCtrlStep = function() {
        T = true;
        curBottom = parseInt(i.style.bottom);
        if (isNaN(curBottom)) {
            curBottom = U
        }
        if (curBottom > U - parseInt(i.style.height)) {
            curBottom = curBottom - 4;
            if (curBottom < U - parseInt(i.style.height)) {
                curBottom = U - parseInt(i.style.height)
            }
            i.style.bottom = curBottom + "px";
            clearTimeout(L);
            L = setTimeout(function() {
                k.showCtrlStep()
            }, 5)
        } else {
            T = false
        }
    };
    this.hideCtrlStep = function() {
        T = true;
        curBottom = parseInt(i.style.bottom);
        if (curBottom < U) {
            curBottom = curBottom + 4;
            if (curBottom > U) {
                curBottom = U
            }
            i.style.bottom = curBottom + "px";
            clearTimeout(L);
            L = setTimeout(function() {
                k.hideCtrlStep()
            }, 5)
        } else {
            T = false
        }
    };
    this.drawLoadingBeat = function() {
        _ = 1;
        var e = a.buffered;
        var t = a.duration;
        var n = 0;
        try {
            var r = e.start(0);
            var s = e.end(0);
            var n = s / t;
            var o = y.getContext("2d");
            o.clearRect(0, 0, 50, 50);
            o.beginPath();
            o.fillStyle = "#555555";
            o.arc(16, 16, 14, 0, Math.PI * 2, false);
            o.lineTo(16, 16);
            o.closePath();
            o.fill();
            o.beginPath();
            o.fillStyle = j;
            o.arc(16, 16, 15, 0, Math.PI * n * 2, false);
            o.lineTo(16, 16);
            o.closePath();
            o.fill()
        } catch (u) {
            try {
                var o = b.getContext("2d");
                var f = b.width;
                var l = b.height;
                o.clearRect(0, 0, f, l);
                o.beginPath();
                o.fillStyle = "#333";
                var c = Math.min(f, l) / 2;
                var h = o.createRadialGradient(f / 2, l / 2, 0, f / 2, l / 2, c);
                h.addColorStop(0, "#ddd");
                h.addColorStop(1, "#fff");
                c = Math.max(f, l);
                var p = 3 * Math.PI / 2 + 2 * Math.PI * M / 10 % (2 * Math.PI);
                o.arc(f / 2, l / 2, c, 3 * Math.PI / 2, p, false);
                o.lineTo(f / 2, l / 2);
                o.closePath();
                o.fillStyle = "#888";
                o.strokeStyle = "#111";
                o.lineWidth = 4;
                o.stroke();
                o.fill();
                o.beginPath();
                c = Math.min(f, l) * 6 / 16;
                o.arc(f / 2, l / 2, c, 0, 2 * Math.PI, false);
                o.strokeStyle = "#ccc";
                o.stroke();
                o.beginPath();
                c = Math.min(f, l) * 7 / 16;
                o.arc(f / 2, l / 2, c, 0, 2 * Math.PI, false);
                o.strokeStyle = "#ccc";
                o.stroke();
                o.lineWidth = 2;
                o.strokeStyle = "#111";
                o.beginPath();
                o.moveTo(0, l / 2);
                o.lineTo(f, l / 2);
                o.stroke();
                o.beginPath();
                o.moveTo(f / 2, 0);
                o.lineTo(f / 2, l);
                o.stroke();
                o.font = l / 2 + "px Arial";
                o.fillStyle = "#111";
                o.fillText(parseInt(M / 10) + 1, f / 2 - l / 8, 3 / 4 * l);
                M++;
                var d = new Array;
                var v = new Array;
                for (var m = 0; m < f / 4; m++) {
                    d.x = (M * 5 + m) % f;
                    d.y = l / 8 * Math.sin(d.x * 8 * Math.PI / f);
                    v.x = f - d.x;
                    v.y = l / 8 * Math.sin(v.x * 8 * Math.PI / f + Math.PI)
                }
                b.style.webkitFilter = "blur(2px)";
                i.style.display = "none";
                o = y.getContext("2d");
                o.clearRect(0, 0, 50, 50);
                o.beginPath();
                var g = M * 15 % 125;
                var w = g + dotRed;
                var E = g + dotGreen;
                var S = g + dotBlue;
                o.fillStyle = "rgb(" + w + "," + E + "," + S + ")";
                o.arc(25, 5, 5, 0, Math.PI * 2, false);
                o.lineTo(25, 5);
                o.closePath();
                o.fill()
            } catch (u) {}
        }
        if (!(n >= .98)) {
            setTimeout(function() {
                k.drawLoadingBeat()
            }, 100)
        } else {
            try {
                M = 0;
                _ = 0;
                if (q) {
                    i.style.display = "block"
                }
                b.getContext("2d").clearRect(0, 0, b.width, b.height);
                var o = y.getContext("2d");
                o.clearRect(0, 0, 50, 50);
                o.beginPath();
                o.fillStyle = j;
                o.arc(25, 5, 5, 0, Math.PI * n * 2, false);
                o.lineTo(25, 5);
                o.closePath();
                o.fill();
                setTimeout(function() {
                    k.checkGfyExtras()
                }, 1e3);
                Bt()
            } catch (u) {}
        }
    };
    return {
        init: ht,
        refresh: Ht,
        setGfyItem: W
    }
};
var gfyCounter = function() {
    function t() {
        var t = document.URL;
        var n = /.*\/(.*)/;
        m = n.exec(document.URL);
        e = m[1];
        return e
    }

    function n() {
        t();
        if (e == "account") {
            return
        }
        var n = document.createElement("SCRIPT");
        n.src = "http://tracking.gfycat.com/viewCount/" + e;
        document.getElementsByTagName("HEAD")[0].appendChild(n)
    }
    var e;
    return {
        getId: t,
        callCounter: n
    }
}();
window.onload = function() {
    gfyCollection.init()
};
var loadJSONP = function() {
    var e = 0;
    return function(t, n, r) {
        var i = "_jsonp_" + e++;
        if (t.match(/\?/)) {
            t += "&callback=" + i
        } else {
            t += "?callback=" + i
        }
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = t;
        window[i] = function(e) {
            n.call(r || window, e);
            document.getElementsByTagName("head")[0].removeChild(s);
            s = null;
            delete window[i]
        };
        document.getElementsByTagName("head")[0].appendChild(s)
    }
}()
