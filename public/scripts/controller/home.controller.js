// myApp.controller('HomeController', function ($scope, $sce) { // remnant from trying to post questions to dom via sanitize
myApp.controller('HomeController', function () {
    console.log('in home controller');

    // Code Readability notes:
    // q = question
    // a = answer
    // sa = short answer
    // mc = multiple choice
    // ca = correct answer (for multiple choice)
    // essay = essay (like SA, but longer char limit)

    const vm = this;
    vm.quiz = {data: []};
    vm.name = '';
    vm.tags = ['history', 'music'];
    vm.questions = []; // holds questions to push into quiz
    vm.currentMCQ = ''; // MC Question
    vm.currentMCA1 = ''; // MC Answers
    vm.currentMCA2 = '';
    vm.currentMCA3 = '';
    vm.currentMCA4 = '';
    vm.currentMCCA = ''; // MC Correct Answer
    vm.currentSAQ = ''; // SA Question
    vm.currentSAA = ''; // SA Answer/hints to grade on
    vm.currentEQ = ''; // Essay Question/Topic
    vm.currentEA = ''; // Essay Answer/hints to grade on

    // creates a multiple choice question to be inserted into questions array
    class MCQuestion {
        constructor (q, a1, a2, a3, a4, ca){
            this.question = q;
            this.ans1 = a1;
            this.ans2 = a2;
            this.ans3 = a3;
            this.ans4 = a4;
            this.correctAns = ca;
            this.type = 'mc';
        }
    }

    // pushes MC Q into Q array
    vm.pushMCQ = (q, a1, a2, a3, a4, ca) => {
        vm.newMCQuestion = new MCQuestion(q, a1, a2, a3, a4, ca);
        vm.questions.push(vm.newMCQuestion);
        console.log('loggin vm.newMCQuestion in pushMCQuestion -> ', vm.newMCQuestion);

        // clear the form for the next questions submission
        vm.currentMCQ = '';
        vm.currentMCA1 = '';
        vm.currentMCA2 = '';
        vm.currentMCA3 = '';
        vm.currentMCA4 = '';
        vm.currentMCCA = '';
    };

    // creates a SA Q to be inserted into Q array
    class ShortAnsQuestion {
        constructor (q, a) {
            this.question = q;
            this.ans = a;
            this.type = 'sa';
        }
    }

    // pushes SA Q into Q array
    vm.pushSAQ = (q, a) => {
        vm.newSAQuestion = new ShortAnsQuestion(q, a);
        vm.questions.push(vm.newSAQuestion);
        console.log('logging vm.newSAQuestion in pushShortAnsQuestion -> ', vm.newSAQuestion);
    };

    // creates Essay question to be pushed into Q array
    class Essay {
        constructor (q, a) {
            this.question = q;
            this.ans = a;
            this.type = 'essay';
        }
    }

    // pushes Essay question into Q array
    vm.pushEssayQ = (q, a) => {
        vm.newEQ = new Essay(q, a);
        vm.questions.push(vm.newEQ);
        console.log('logging vm.newEQ in pushEssayQ -> ', vm.newEQ);
        
    };

    // creates overarching 'Test' item which holds name, tags, and questions.
    // 'Test' item is equivalent to quiz.
    // entire 'Test'/quiz will be sent to backend for insertion into DB.
    class Test {
        constructor (name, tags, q){
            this.name = name; // name is to be a string
            this.tags = tags; // tags will be an array of string
            this.questions = q; // questions will be a class of either multiple choice, short answer, or essay. 
                                        // questions will be an array of objects of the above questions.
        }
    }

    vm.pushToQuiz = (name, tags, q) => {
        vm.newQuiz = new Test(name, tags, q);
        vm.quiz.data.push(vm.newQuiz);
        console.log('logging vm.quiz in pushToquiz => ', vm.quiz);
    };
});