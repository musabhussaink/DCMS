var Validation = function () {
    var totalMarks = $("#t_Mark").val();
    var flip = 0;
    $('[name="obtMarks"]').each(function () {
        var temp = parseInt($(this).val());
        if (temp > parseInt(totalMarks)) {
            flip = 1;
        }
    });
    if (flip == 1) {
        alert("Value of obtained marks cannot be greater than total marks! ");
        return false;
    }
    var tem = 0;
    $('[name="t_Marks"]').each(function () {
        tem += parseInt($(this).val());
    });
    if (tem > totalMarks) {
        alert("Sum of individual question marks cannot exceed total marks! ");
        return false;
    }

    var tem = 0;
    var flip1 = 0;
    $("input[name='Question-1']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-1").val());
        if (t > qno) {
            flip1 = 1;
        }
    });
    $("input[name='Question-2']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-2").val());
        if (t > qno) {
            flip1 = 2;
        }
    });
    $("input[name='Question-3']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-3").val());
        if (t > qno) {
            flip1 = 3;
        }
    });
    $("input[name='Question-4']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-4").val());
        if (t > qno) {
            flip1 = 4;
        }
    });
    $("input[name='Question-5']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-5").val());
        if (t > qno) {
            flip1 = 5;
        }
    });
    $("input[name='Question-6']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-6").val());
        if (t > qno) {
            flip1 = 6;
        }
    });
    $("input[name='Question-7']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-7").val());
        if (t > qno) {
            flip1 = 7;
        }
    });
    $("input[name='Question-8']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-8").val());
        if (t > qno) {
            flip1 = 8;
        }
    });
    $("input[name='Question-9']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-9").val());
        if (t > qno) {
            flip1 = 9;
        }
    });
    $("input[name='Question-10']").each(function () {
        var t = parseInt($(this).val());
        var qno = parseInt($("#QNO-10").val());
        if (t > qno) {
            flip1 = 10;
        }
    });
    if (flip1 != 0) {
        alert("Marks entered in column Q" + flip1 + "(obt) exceed its total marks!");
        return false;
    }
}