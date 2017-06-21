/**
 * 鍔熻兘璇存槑:		澶嶉€夋/鍗曢€夋鐨勫叏閫夊弽閫変互鍙婃枃瀛楃偣鍑绘帶鍒剁殑鎻掍欢
 * @author:		vivy <lizhiziyan@qq.com>
 * @time:		2016-08-22 11:15:30
 * @version:		V1.1.0
 * @js璋冪敤鏂规硶[澶嶉€夋]锛�
 * $("#id").selectCheck({
* 	parentSelect:"p",//鏀寔鏂囧瓧涔熼€変腑鐨勬爣绛撅紝渚嬪瓙涓椂P鏍囩锛屾牴鎹叿浣撴儏鍐垫崲鎴恖i,div绛夈€備笉闇€瑕佽鎺у埗鏃惰涓簄ull
* 	allId: 'checkAll',//鍏ㄩ€夊弽閫塱nput鐨処D,濡傛灉涓嶉渶瑕佸叏閫夊弽閫夛紝鍒欒缃负nul
* 	toggleClass: 'check_span--checked',//鏀瑰彉鐨勬牱寮忓悕锛岄拡瀵逛緥瀛愪腑鐨勫閫夋鏍峰紡缇庡寲
* 	checkCallBack:function(obj,bool){}//閫夋嫨涔嬪悗鍥炶皟鍑芥暟,杩斿洖obj鐨勬槸鍚﹂€変腑
* })
 * @js璋冪敤鏂规硶[鍗曢€夋]锛�
 * $("#id").selectRadio({
* 	parentSelect:"p",//鏀寔鏂囧瓧涔熼€変腑鐨勬爣绛撅紝渚嬪瓙涓椂P鏍囩锛屾牴鎹叿浣撴儏鍐垫崲鎴恖i,div绛夈€備笉闇€瑕佽鎺у埗鏃惰涓簄ull
* 	toggleClass: 'radio_span--checked'//鏀瑰彉鐨勬牱寮忓悕锛岄拡瀵逛緥瀛愪腑鐨勫閫夋鏍峰紡缇庡寲
* })
 *
 */
(function($) {
    $.fn.extend({
        selectCheck: function(f) {
            var g = {
                parentSelect: "p",
                allId: 'checkAll',
                toggleClass: 'check_span--checked',
                checkCallBack: function(a, b) {}
            };
            var f = $.extend(g, f);

            function checkAll(a, b, c, d) {
                var o = f;
                var e = $("#" + o.allId);
                if (o.checkCallBack && $.isFunction(o.checkCallBack)) {
                    o.checkCallBack.call(this, d, c)
                }
                if (b.attr("id") == o.allId) {
                    if (c) {
                        a.prop("checked", true);
                        a.parent().addClass(o.toggleClass);
                        b.prop("checked", true)
                    } else {
                        a.removeAttr("checked");
                        a.parent().removeClass(o.toggleClass);
                        b.removeAttr("checked")
                    }
                } else {
                    if (!c) {
                        b.removeAttr("checked");
                        b.parent().removeClass(o.toggleClass);
                        e.parent().removeClass(o.toggleClass);
                        e.removeAttr("checked")
                    } else {
                        b.prop("checked", true);
                        b.parent().addClass(o.toggleClass);
                        for (var i = 0; i < a.length; i++) {
                            if (a[i].checked == false && a[i].id != o.allId) return
                        }
                        e.parent().addClass(o.toggleClass);
                        e.prop("checked", true)
                    }
                }
            }
            return this.each(function() {
                var o = f;
                var b = $(this);
                var c = this;
                var d = $('input:checkbox', b);
                if (o.parentSelect) {
                    d.parents(o.parentSelect).click(function(e) {
                        if (o.allId) {
                            var a = $(this).find("input:checkbox");
                            if ($(e.target).attr("type") == "checkbox") checkAll(d, $(e.target), e.target.checked, b);
                            else checkAll(d, a, !a.is(":checked"), b)
                        } else {
                            if ($(e.target).attr("type") == "checkbox") {
                                $(e.target).parent().toggleClass(o.toggleClass);
                                if (o.checkCallBack && $.isFunction(o.checkCallBack)) {
                                    o.checkCallBack.call(c, b, e.target.checked)
                                }
                            } else {
                                $('input:checkbox', $(this)).parent().toggleClass(o.toggleClass);
                                if (o.checkCallBack && $.isFunction(o.checkCallBack)) {
                                    o.checkCallBack.call(c, b, $('input:checkbox', $(this)).is(":checked"))
                                }
                            }
                        }
                    });
                    return
                }
                d.click(function() {
                    if (o.allId) {
                        checkAll(d, $(this), this.checked.obj)
                    } else {
                        $(this).parent().toggleClass(o.toggleClass);
                        if (o.checkCallBack && $.isFunction(o.checkCallBack)) {
                            o.checkCallBack.call(c, b, this.checked)
                        }
                    }
                })
            })
        },
        selectRadio: function(c) {
            var d = {
                parentSelect: "p",
                toggleClass: 'radio_span--checked'
            };
            var c = $.extend(d, c);
            return this.each(function() {
                var o = c;
                var a = $(this);
                var b = $('input:radio', a);
                if (o.parentSelect) {
                    b.parents(o.parentSelect).click(function(e) {
                        b.parent().removeClass(o.toggleClass);
                        if ($(e.target).attr("type") == "radio") $(e.target).parent().addClass(o.toggleClass);
                        else $("input:radio", $(this)).parent().addClass(o.toggleClass)
                    });
                    return
                }
                b.click(function() {
                    b.parent().removeClass(o.toggleClass);
                    $(this).parent().addClass(o.toggleClass)
                })
            })
        }
    })
})(jQuery);






/**
 * Created by Administrator on 2017/4/17.
 */
