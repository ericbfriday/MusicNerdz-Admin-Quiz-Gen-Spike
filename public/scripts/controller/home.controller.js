myApp.controller('HomeController', function ($scope, $sce) {
    console.log('in home controller');

    var vm = this;

    // the $sce.trustAsHtml is required to allow the functions or expressions to display the ngMaterial formatting/inputs.
    vm.multipleChoiceTemplate = $sce.trustAsHtml(`
    <div class="multipleChoiceQuestion">Multiple Choice:
        <div>
            <md-input-container><label>Question:</label>
                <input ng-model="hc.quiz.data[i].question">
            </md-input-container></div>
            a)<md-input-container><label>Potential Answer 1</label>
                <input ng-model="hc.quiz.data[i].potentialAnswer1">
            </md-input-container>
            b)<md-input-container><label>Potential Answer 2</label>
                <input ng-model="hc.quiz.data[i].potentialAnswer2">
            </md-input-container>
            c) <md-input-container><label>Potential Answer 3</label>
                <input ng-model="hc.quiz.data[i].potentialAnswer3">
            </md-input-container>
            d)<md-input-container><label>Potential Answer 4</label>
                <input ng-model="hc.quiz.data[i].potentialAnswer4">
            </md-input-container>
        </div>
    </div>`);
    vm.shortAnswerTemplate = $sce.trustAsHtml(`
    <div>Short Answer: 
        <md-input-container><label>Question:</label>
            <input ng-model="hc.quiz.data[i].question">
        </md-input-container>
        <md-input-container><label>Notes or Answer</label>
            <input ng-model="hc.quiz.data[i].answer">
        </md-input-container></div>`);
    vm.essayTemplate = $sce.trustAsHtml(`
    <div>Essay:
        <md-input-container>
            <label>Essay Title/Question</label>
            <input ng-model="hc.quiz.data[i].question">
        </md-input-container>
        <md-input-container>
                <label>Essay Notes & Answers</label>
                <input ng-model="hc.quiz.data[i].answer">
            </md-input-container>
        <br>
    </div>`);
    vm.questionCounter = 0;

    // example of the quiz object holding various questions.
    // quiz object to hold information and then be sent to router for processing & INSERT into db
    vm.quiz = {
        name: '',
        tags: [],
        data: [{
            type: 'multipleChoice',
            question: 'What did the fox say?',
            potentialAnswer1: 'Meow',
            potentialAnswer2: 'Bark',
            potentialAnswer3: 'Neigh',
            potentialAnswer4: 'NANANANANANANANANANA',
            answer: 'NANANANANANANANANANA' // possibly have answer simply be A, B, C, D
        },{
            type: 'multipleChoice',
            question: 'Imagine all the people, ________.',
            potentialAnswer1: 'living in harmony',
            potentialAnswer2: 'fighting in senseless wars',
            potentialAnswer3: 'eating potatoes',
            potentialAnswer4: '42',
            answer: 'living in harmony' // possibly have answer simply be A, B, C, D
        },{
            type: 'shortAnswer',
            question: 'Summarize the most recent Rick & Morty episode in two sentences or less.',
            answer: 'It was a fantastic masterpiece of drama and comedy. Beth drank wine while R&M went on an adventure.'
            // possibly have notes about what the instructor should look for instead of 'answer'?
        },{
            type: 'essay',
            question: 'Why did the chicken cross the road?',
            answer: 'To get to the other side.' // answer should simply be main points for the instructor to grade from
        }]
    };

    vm.newMultipleChoice = () => {
        console.log('newMultipleChoice() activated!! :)');
        
    };
});