function Total()
{
    var TotalScore = 0;
    var Gap_fillingScore = 0;
    var Single_ChoiceScore = 0;
    var Multiple_ChoiceScore = 0;
    var JudgeScore = 0;
    var Brief_AnswerScore = 0;

    //填空题

    if(document.getElementById("UML_FullName").value==='统一建模语言'){
        Gap_fillingScore+=5;
    }
    if(document.getElementById("feature_1").value==='封装性'){
        Gap_fillingScore+=5;
    }
    if(document.getElementById("feature_2").value==='继承性'){
        Gap_fillingScore+=5;
    }
    if(document.getElementById("feature_3").value==='多态性'){
        Gap_fillingScore+=5;
    }

    //单选题
    if(document.getElementsByName("radio-choice-1")[1].checked){
        Single_ChoiceScore+=10;
    }
    if(document.getElementsByName("radio-choice-2")[0].checked){
        Single_ChoiceScore+=10;
    }

    //多选题
    if(document.getElementsByName("multi-choice-1")[0].checked&&document.getElementsByName("multi-choice-1")[1].checked
    &&document.getElementsByName("multi-choice-1")[3].checked){
        Multiple_ChoiceScore+=10;
    }

    if(document.getElementsByName("multi-choice-2")[0].checked&&document.getElementsByName("multi-choice-2")[1].checked
    &&document.getElementsByName("multi-choice-2")[2].checked){
        Multiple_ChoiceScore+=10;
    }

    //判断题
    if(document.getElementsByName("true-false-choice-1")[1].checked){
        JudgeScore+=10;
    }
    if(document.getElementsByName("true-false-choice-2")[0].checked){
        JudgeScore+=10;
    }

    //简答题
    if(document.getElementById("Breif_Answer").value==='模型是对现实世界的简化和抽象，模型是对所研究的系统、过程事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'){
        Brief_AnswerScore+=20;
    }

    TotalScore=Gap_fillingScore+Single_ChoiceScore+Multiple_ChoiceScore+JudgeScore+Brief_AnswerScore;

    //按钮
    alert('您所得分数为：'+TotalScore+'分！');
   
}