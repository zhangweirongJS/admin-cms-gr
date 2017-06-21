$(function () {
    //信息列表全反选
    $("#tab_01").find("#ckSelectAll1").click(function () {
        if ($(this).parent().find('input')[0].checked) {
            $("#tbpage1").find('input:checkbox').prop("checked", true);
        } else {
            $("#tbpage1").find('input:checkbox').prop("checked", false);
        }
    });
    $("#tab_02").find("#ckSelectAll2").click(function () {
        if ($(this).parent().find('input')[0].checked) {
            $("#tbpage2").find('input:checkbox').prop("checked", true);
        } else {
            $("#tbpage2").find('input:checkbox').prop("checked", false);
        }
    });
    $("#tab_03").find("#ckSelectAll3").click(function () {
        if ($(this).parent().find('input')[0].checked) {
            $("#tbpage3").find('input:checkbox').prop("checked", true);
        } else {
            $("#tbpage3").find('input:checkbox').prop("checked", false);
        }
    });

    //提箱计划全反选
    $('#example-3 .replace-inputs').find('input').click(function () {
        if ($(this).parent().find('input')[0].checked){
            $("#example-3 tbody").find('input:checkbox').prop("checked", true);
       }else {
            $("#example-3 tbody").find('input:checkbox').prop("checked", false);
        }
    });

    //更多信息下拉
    var $infomore = $(".infomore");
    $infomore.show();
    $(".infomore-btn > a").click(function () {
        if ($infomore.is(":visible")) {
            $infomore.hide(200);
            $(this).css("background","url(img/down.jpg) no-repeat");
        } else {
            $infomore.show(200);
            $(this).css("background","url(img/up.jpg) no-repeat");
        }
    });
    $('.kindz input').click(function () {
        if($(this)[0].checked){
            $('.kindc').prop("checked", true);
        }else {
            $('.kindc').prop("checked", false);
        }
    })


    //更多条件查询下拉
    var $showmore = $(".showmore:not(:first)");
    $showmore.hide();
    $(".showmore-btn > a").click(function () {
        if ($showmore.is(":visible")) {
            $showmore.hide(200);
            $(this).text("更多查询条件");
            $(this).append("<i class='fa fa-chevron-down'></i>");
            $(this).children("i").addClass("fa-chevron-down");
        } else {
            $showmore.show(200);
            $(this).text("收起");
            $(this).append("<i class='fa fa-chevron-up'></i>");
        }
    });


    //实时信息维护信息修改
    $(".modify").click(function () {
        $(".modify-cont").hide();
        $("#modify-info").show();
    });
    //实时信息维护信息新增
    $(".add-modify").click(function () {
        $(".modify-cont").hide();
        $("#add-modify-info").show();
    });


    //兑换信息资源步骤效果
    $("#dfinfo_01").find(".dfinfo_btn").click(function () {
        $("#dfinfo_01").hide();
        $("#dfinfo_02").show();
    });

    $("#dfinfo_02").find(".return").click(function () {
        $("#dfinfo_01").show();
        $("#dfinfo_02").hide();
    });

    $("#dfinfo_03").find(".return").click(function () {
        $("#dfinfo_02").show();
        $("#dfinfo_03").hide();
    });

    $(".next-step").click(function () {
        var money = $("#action-mon").find('input:radio[name="money"]:checked').val();
        if (money == null) {
            $(".next-step").attr("data-target", "#myModal1");
        }
        else {
            $("#dfinfo_03").show();
            $("#dfinfo_02").hide();
            return false;
        }
    });

    //文本框内容修改
    var txt1 = {};
    $(".xiugai").click(function () {
        txt1.sheng = $(".txt .sheng").text();   //获取.txt的文本内容
        txt1.shi = $(".txt .shi").text();       //获取.txt的文本内容
        txt1.qu = $(".txt .qu").text();         //获取.txt的文本内容
        txt1.txt02 = $(".txt.txt02").text();    //获取.txt的文本内容
        txt1.txt03 = $(".txt.txt03").text();    //获取.txt的文本内容
        txt1.txt04 = $(".txt.txt04").text();    //获取.txt的文本内容
        txt1.txt05 = $(".txt.txt05").text();    //获取.txt的文本内容
        txt1.txt06 = $(".txt.txt06").text();    //获取.txt的文本内容
        txt1.txt07 = $(".txt.txt07").text();    //获取.txt的文本内容
        txt1.txt08 = $(".txt.txt08").text();    //获取.txt的文本内容
        txt1.txt09 = $(".txt.txt09").text();    //获取.txt的文本内容

        var selectsheng = $('<select>' +
            '<option value="' + txt1.sheng + '">请选择</option>' +
            '<option value="' + txt1.sheng + '">重庆</option>' +
            '<option value="' + txt1.sheng + '">浙江省</option>' +
            '<option value="' + txt1.sheng + '">云南省</option>' +
            '<option value="' + txt1.sheng + '">新疆</option>' +
            '<option value="' + txt1.sheng + '">西藏</option>' +
            '<option value="' + txt1.sheng + '">天津</option>' +
            '<option value="' + txt1.sheng + '">四川省</option>' +
            '<option value="' + txt1.sheng + '">上海</option>' +
            '<option value="' + txt1.sheng + '">陕西省</option>' +
            '<option value="' + txt1.sheng + '">山西省</option>' +
            '<option value="' + txt1.sheng + '">山东省</option>' +
            '<option value="' + txt1.sheng + '">青海省</option>' +
            '<option value="' + txt1.sheng + '">宁夏</option>' +
            '<option value="' + txt1.sheng + '">内蒙古</option>' +
            '<option value="' + txt1.sheng + '">辽宁省</option>' +
            '<option value="' + txt1.sheng + '">江西省</option>' +
            '<option value="' + txt1.sheng + '">江苏省</option>' +
            '<option value="' + txt1.sheng + '">吉林省</option>' +
            '<option value="' + txt1.sheng + '">湖南省</option>' +
            '<option value="' + txt1.sheng + '">湖北省</option>' +
            '<option value="' + txt1.sheng + '">黑龙江省</option>' +
            '<option value="' + txt1.sheng + '">河南省</option>' +
            '<option value="' + txt1.sheng + '">河北省</option>' +
            '<option value="' + txt1.sheng + '">海南省</option>' +
            '<option value="' + txt1.sheng + '">贵州省</option>' +
            '<option value="' + txt1.sheng + '">广西省</option>' +
            '<option value="' + txt1.sheng + '">广东省</option>' +
            '<option value="' + txt1.sheng + '">甘肃省</option>' +
            '<option value="' + txt1.sheng + '">福建省</option>' +
            '<option value="' + txt1.sheng + '">北京</option>' +
            '<option value="' + txt1.sheng + '">安徽省</option>' +
            '</select>');     //定义变量select
        var selectshi = $('<select>' +
            '<option value="' + txt1.shi + '">请选择</option>' +
            '<option value="' + txt1.shi + '">营口市</option>' +
            '<option value="' + txt1.shi + '">铁岭市</option>' +
            '<option value="' + txt1.shi + '">沈阳市</option>' +
            '<option value="' + txt1.shi + '">盘锦市</option>' +
            '<option value="' + txt1.shi + '">辽阳市</option>' +
            '<option value="' + txt1.shi + '">锦州市</option>' +
            '<option value="' + txt1.shi + '">葫芦岛市</option>' +
            '<option value="' + txt1.shi + '">阜新市</option>' +
            '<option value="' + txt1.shi + '">抚顺市</option>' +
            '<option value="' + txt1.shi + '">丹东市</option>' +
            '<option value="' + txt1.shi + '">大连市</option>' +
            '<option value="' + txt1.shi + '">朝阳市</option>' +
            '<option value="' + txt1.shi + '">本溪市</option>' +
            '<option value="' + txt1.shi + '">鞍山市</option>' +
            '</select>');     //定义变量select
        var selectqu = $('<select>' +
            '<option value="' + txt1.qu + '">请选择</option>' +
            '<option value="' + txt1.qu + '">鲅鱼圈区</option>' +
            '<option value="' + txt1.qu + '">站前区</option>' +
            '<option value="' + txt1.qu + '">西市区</option>' +
            '<option value="' + txt1.qu + '">市辖区</option>' +
            '<option value="' + txt1.qu + '">老边区</option>' +
            '<option value="' + txt1.qu + '">盖州市</option>' +
            '<option value="' + txt1.qu + '">大石桥市</option>' +
            '</select>');     //定义变量select

        var input02 = $('<input type="text" value="' + txt1.txt02 + '" class="input"/>');     //定义变量input
        var input03 = $('<input type="text" value="' + txt1.txt03 + '" class="input"/>');     //定义变量input
        var input04 = $('<input type="text" value="' + txt1.txt04 + '" class="input"/>');     //定义变量input
        var input05 = $('<input type="text" value="' + txt1.txt05 + '" class="input"/>');     //定义变量input
        var input06 = $('<input type="text" value="' + txt1.txt06 + '" class="input"/>');     //定义变量input
        var input07 = $('<input type="text" value="' + txt1.txt07 + '" class="input"/>');     //定义变量input
        var input08 = $('<input type="text" value="' + txt1.txt08 + '" class="input"/>');     //定义变量input
        var input09 = $('<input type="text" value="' + txt1.txt09 + '" class="input"/>');     //定义变量input

        $(".txt .sheng").html(selectsheng); // 设置.txt的内容（定义的input）
        $(".txt .shi").html(selectshi);     // 设置.txt的内容（定义的input）
        $(".txt .qu").html(selectqu);       // 设置.txt的内容（定义的input）
        $(".txt.txt02").html(input02);       // 设置.txt的内容（定义的input）
        $(".txt.txt03").html(input03);       // 设置.txt的内容（定义的input）
        $(".txt.txt04").html(input04);       // 设置.txt的内容（定义的input）
        $(".txt.txt05").html(input05);       // 设置.txt的内容（定义的input）
        $(".txt.txt06").html(input06);       // 设置.txt的内容（定义的input）
        $(".txt.txt07").html(input07);       // 设置.txt的内容（定义的input）
        $(".txt.txt08").html(input08);       // 设置.txt的内容（定义的input）
        $(".txt.txt09").html(input09);       // 设置.txt的内容（定义的input）
        $(this).hide();
        $('.baocun').show();
        $('.quxiao').show();
    });

    $(".quxiao").click(function () {
        var txt2sheng = txt1.sheng;
        var txt2shi = txt1.shi;
        var txt2qu = txt1.qu;
        var txt202 = txt1.txt02;
        var txt203 = txt1.txt03;
        var txt204 = txt1.txt04;
        var txt205 = txt1.txt05;
        var txt206 = txt1.txt06;
        var txt207 = txt1.txt07;
        var txt208 = txt1.txt08;
        var txt209 = txt1.txt09;
        $(".txt .sheng").html(txt2sheng);   // 设置.txt的内容（定义的input）
        $(".txt .shi").html(txt2shi);       // 设置.txt的内容（定义的input）
        $(".txt .qu").html(txt2qu);         // 设置.txt的内容（定义的input）
        $(".txt.txt02").html(txt202);       // 设置.txt的内容（定义的input）
        $(".txt.txt03").html(txt203);       // 设置.txt的内容（定义的input）
        $(".txt.txt04").html(txt204);       // 设置.txt的内容（定义的input）
        $(".txt.txt05").html(txt205);       // 设置.txt的内容（定义的input）
        $(".txt.txt06").html(txt206);       // 设置.txt的内容（定义的input）
        $(".txt.txt07").html(txt207);       // 设置.txt的内容（定义的input）
        $(".txt.txt08").html(txt208);       // 设置.txt的内容（定义的input）
        $(".txt.txt09").html(txt209);       // 设置.txt的内容（定义的input）

        $(this).hide()
        $('.baocun').hide();
        $('.xiugai').show();
    });

});

