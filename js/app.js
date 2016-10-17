var score = 0;
var curQuestion=0;
var questions=[
	{
		title: 'What color is the sky?',
		answers: ['green','red','blue','purple'],
		correct: 2
	},{
		title: 'What color is the fire-truck?',
		answers: ['green','red','blue','purple'],
		correct: 1
	},{
		title: 'What color is the grass?',
		answers: ['green','red','blue','purple'],
		correct: 0
	},{
		title: 'What color is Barney the Dinosaur?',
		answers: ['green','red','blue','purple'],
		correct: 3
	}
];

$(document).ready(function(){
	showQuestion();
	$('.next').click(function(){
		var guess = $('.answers input[name="answer"]:checked').val();
		checkAnswer(guess);
	});
	$('.new-quiz').click(function(){
		newGame();
	});
});

function showQuestion(){
	$('.answers').html('');
	if(curQuestion == questions.length){
		showSummary();
	} else {
		var question = questions[curQuestion];
		$('main h2').text(question.title);
		for (var i = 0; i < question.answers.length; i++) {
			$('.answers').append('<p><input type="radio" name="answer" value="'+i+'">'+question.answers[i]+'</p>');
		}
	}
}

function checkAnswer(guess){
	var question = questions[curQuestion];
	if(guess == question.correct){
		score++;
	}
	curQuestion++;
	showQuestion();
}

function showSummary(){
	$('main').hide();
	$('.summary h2').text('You scored '+score+' of '+questions.length+' correct');
	$('.summary').show();
}

function newGame(){
	score = 0;
	curQuestion = 0;
	showQuestion();
	$('.summary').hide();
	$('main').show();
}