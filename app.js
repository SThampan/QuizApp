var currentIndex=0;
var noSelectionMessage='Please select an answer';
var wrongSelectionMessage='Wrong Answer. Correct Answer is ';
var rightSelectionMessage=' is the right Answer';
var currentQuestion;
var correctAnswer;
var right=0;
var wrong=0;
var questionBank=[
{
	'index':  1 ,
	'question':'The brightness of light and volume of sound is associated with which wave characteristic',
	'answers' :[{'option': 'A','Answer':'Amplitude' , 'correct':'true' ,'selected' :'false' },
	{'option': 'B','Answer':'Frequency' , 'correct':'false' ,'selected' :'false'},
	{'option': 'C','Answer':'Resonance' , 'correct':'false' ,'selected' :'false'},
	{'option': 'D','Answer':'Wave Speed' , 'correct':'false' ,'selected' :'false'},
	{'option': 'E','Answer':'Oscillation' , 'correct':'false' ,'selected' :'false'},

]
},
{
	'index':  2 ,
	'question':'Which Scientist thought that light could be thought of as packets of Energy?',
	'answers' :[{'option': 'A','Answer':'Albert Einstein' , 'correct':'true' ,'selected' :'false' },
	{'option': 'B','Answer':'Albert Michelson' , 'correct':'false' ,'selected' :'false'},
	{'option': 'C','Answer':'James Maxwell' , 'correct':'false' ,'selected' :'false'},
	{'option': 'D','Answer':'Ernest Rutherford' , 'correct':'false' ,'selected' :'false'},
	{'option': 'E','Answer':'JJ Thomson' , 'correct':'false' ,'selected' :'false'},

]
},
{
	'index':  3 ,
	'question':'In drinking soda or water through a straw we make use of',
	'answers' :[{'option': 'A','Answer':'Capillary Action' , 'correct':'false' ,'selected' :'false' },
	{'option': 'B','Answer':'Surface Tension' , 'correct':'false' ,'selected' :'false'},
	{'option': 'C','Answer':'Atmospheric Pressure' , 'correct':'true' ,'selected' :'false'},
	{'option': 'D','Answer':'Bernouilli\'s principle' , 'correct':'false' ,'selected' :'false'},
	{'option': 'E','Answer':'None of these' , 'correct':'false' ,'selected' :'false'},

]
},
{
	'index':  4 ,
	'question':'In vacuum object has no',
	'answers' :[{'option': 'A','Answer':'Bouyant Force' , 'correct':'true' ,'selected' :'false' },
	{'option': 'B','Answer':'mass' , 'correct':'false' ,'selected' :'false'},
	{'option': 'C','Answer':'weight' , 'correct':'false' ,'selected' :'false'},
	{'option': 'D','Answer':'temperature' , 'correct':'false' ,'selected' :'false'},
	{'option': 'E','Answer':'All of these' , 'correct':'false' ,'selected' :'false'},

]
},
{
	'index':  5 ,
	'question':'Which law states that entropy of a system always increases until it reached Equilibrium?',
	'answers' :[{'option': 'A','Answer':'Coulomb\'s law' , 'correct':'false' ,'selected' :'false' },
	{'option': 'B','Answer':'Faraday\'s law' , 'correct':'false' ,'selected' :'false'},
	{'option': 'C','Answer':'First Law of Thermodyamics' , 'correct':'false' ,'selected' :'false'},
	{'option': 'D','Answer':'Lenz\'s Law' , 'correct':'false' ,'selected' :'false'},
	{'option': 'E','Answer':'Second Law of Thermodyamics' , 'correct':'true' ,'selected' :'false'},

]
}];
// Watch for and handle form submissions

$('#js-quiz-form').submit(function(event){
	console.log("Submitted");
	event.preventDefault();
	var selectedOption=$( "input:checked" ).val();
	if (selectedOption==undefined)
	$('.message').text(noSelectionMessage);
	else
	{
		if (selectedOption!==correctAnswer.option)
		{
			$('.message').text(wrongSelectionMessage + correctAnswer.option);
			$('.message').css("color", "red");
			wrong = wrong+1;
		}
		else
			{ 
			$('.message').text(selectedOption+rightSelectionMessage);
			$('.message').css("color", "green");
			right = right+1;
			}
	if(currentIndex===questionBank.length)
	{
		$('.button-submit-answer').removeClass("show"); 	
		$('.button-submit-answer').addClass("hidden");
		$('.button-next-question').removeClass("show");
 		$('.button-next-question').addClass("hidden");
 		$('.button-last-question').removeClass("hidden");
 		$('.button-last-question').addClass("show");
	}
	else
	{
	$('.button-submit-answer').removeClass("show"); 	
	$('.button-submit-answer').addClass("hidden");
 	$('.button-next-question').removeClass("hidden");
 	$('.button-next-question').addClass("show");
 }
 	$('.results').text("Correct :"+right + "        Incorrect : "+ wrong);
 	jQuery("input[name='answers']").each(function(i) {
            jQuery(this).attr('disabled', 'disabled');
        });
 	}
 
})

$('#js-button-next-question').click(function(event){
	event.preventDefault();
	currentIndex=parseInt(currentIndex)+1;
	showQuestion(questionBank,currentIndex);
})
$('#js-button-last-question').click(function(event){
	event.preventDefault();
	$('#questionList').removeClass("show");
 	$('#questionList').addClass("hidden");
 	$('#js-results-page').removeClass("hidden");
 	$('#js-results-page').addClass("show");
 	$('#js-button-last-question').removeClass("show");
 	$('#js-button-last-question').addClass("hidden");
 	$('#js-button-retry').removeClass("hidden");
 	$('#js-button-retry').addClass("show");
 	var score=(right/questionBank.length)*100;
 	if (score>=50)
 	{
 		$('.js-results').text("Congratulations!!! You have Passed with a score of "+score+'%');
 		$('.js-results').css("color","green");
 	}
 	else
 	{
 		$('.js-results').text("Sorry. Your score is "+score +'%. Minimum Score Required to Pass is 50%');
 		$('.js-results').css("color","red");
		$('#js-retry').removeClass("hidden");
 		$('#js-retry').addClass("show");
 	}
		$('.js-correct').text("Number of Correct Answers : "+right);
		$('.js-correct').css("color","green");
		$('.js-wrong').css("color","red");
 		$('.js-wrong').text("Number of Wrong Answers : "+wrong);
 	
})
$('#js-button-retry').click(function(event){
	event.preventDefault();
	currentIndex=1;
	right=0;
	wrong=0;
	$('#js-results-page').removeClass("show");
 	$('#js-results-page').addClass("hidden");
 	$('#js-button-last-question').removeClass("show");
 	$('#js-button-last-question').addClass("hidden");
 	$('#js-button-retry').removeClass("show");
 	$('#js-button-retry').addClass("hidden");
	showQuestion(questionBank,currentIndex);
})
$(function() {
   showQuestion(questionBank,1);
})
var showQuestion=function(questionBank,index)
{
	 currentQuestion=questionBank.find(function(item)
	{
	return item.index===index;
	});
	
 	$('.question-current').text(currentQuestion.index+'.'+currentQuestion.question+'?');
 	var currentOptions=currentQuestion.answers;
 	currentOptions.forEach(function (item)
 	{
 		var option='#'+'option'+item.option;
 		
 		$(option).html(item.option+') '+item.Answer);
 		$('#option-'+item.option).prop("checked",false);
 	})
 	$('#questionList').removeClass("hidden");
 	$('#questionList').addClass("show");
 	currentIndex=currentQuestion.index;
 	correctAnswer=currentOptions.find(function(item){ return item.correct==='true';});
 	$('.statistics').text("Question "+currentIndex+" of "+questionBank.length);
 	$('.results').text("Correct :"+right + "        Incorrect : "+ wrong);
 	$('.message').text('');
 	 	$('.button-next-question').removeClass("show");
 	$('.button-next-question').addClass("hidden");
 	$('.button-submit-answer').removeClass("hidden");
 	$('.button-submit-answer').addClass("show");
 	jQuery("input[name='answers']").each(function(i) {
 		jQuery(this).removeAttr('disabled');
            jQuery(this).attr('enabled', 'enabled');
        });
 
}