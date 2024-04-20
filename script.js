const questions = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'Which of the following is not a programming language?',
      options: ['Python', 'HTML', 'Java', 'C++'],
      answer: 'HTML'
    },
    {
    question: 'What is the output of the following Java code?\n\npublic class Main {\n  public static void main(String[] args) {\n    int x = 5;\n    int y = 10;\n    int z = x + y;\n    System.out.println("Sum: " + z);\n  }\n}',
    options: ['Sum: 15', 'Sum: 510', 'Error', 'None of the above'],
    answer: 'Sum: 15'
  },
  {
    question: 'What is the purpose of the "static" keyword in Java?',
    options: ['To create static variables', 'To create static methods', 'To allocate memory to objects', 'All of the above'],
    answer: 'All of the above'
  },
  {
    question: 'What is the difference between ArrayList and LinkedList in Java?',
    options: ['ArrayList uses dynamic arrays, LinkedList uses doubly linked lists', 'ArrayList is faster than LinkedList', 'LinkedList uses dynamic arrays, ArrayList uses doubly linked lists', 'There is no difference'],
    answer: 'ArrayList uses dynamic arrays, LinkedList uses doubly linked lists'
  },
  {
    question: 'Write a Java program to find the factorial of a number using recursion.',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    answer: `public class Factorial {
  public static void main(String[] args) {
    int number = 5;
    long result = factorial(number);
    System.out.println("Factorial of " + number + " = " + result);
  }
  
  public static long factorial(int n) {
    if (n == 0 || n == 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
}`
  },
  {
    question: 'What is the output of the following code?\n\npublic class MyClass {\n  public static void main(String[] args) {\n    int x = 5;\n    int y = 2;\n    System.out.println(x + y * 2);\n  }\n}',
    options: ['1) 9', '2) 10', '3) 11', '4) 12'],
    answer: '3) 11'
  },
  {
    question: 'Which of the following is not a valid Java identifier?',
    options: ['1) _helloWorld', '2) $123', '3) 1variable', '4) myVariable'],
    answer: '3) 1variable'
  },
  {
    question: 'What keyword is used to prevent method overriding in Java?',
    options: ['1) final', '2) static', '3) abstract', '4) private'],
    answer: '1) final'
  },
  {
    question: 'Which Java keyword is used to create a subclass?',
    options: ['1) class', '2) super', '3) extends', '4) subclass'],
    answer: '3) extends'
  },
  {
    question: 'What is the correct way to declare a constant in Java?',
    options: ['1) const int MY_CONSTANT = 10;', '2) final int MY_CONSTANT = 10;', '3) static int MY_CONSTANT = 10;', '4) constant int MY_CONSTANT = 10;'],
    answer: '2) final int MY_CONSTANT = 10;'
  },
  {
    question: 'What is the default value of a boolean variable in Java?',
    options: ['1) true', '2) false', '3) null', '4) 0'],
    answer: '2) false'
  },
  {
    question: 'What does the keyword "super" refer to in Java?',
    options: ['1) Refers to the superclass object', '2) Refers to the subclass object', '3) Refers to the current object', '4) Refers to a static variable'],
    answer: '1) Refers to the superclass object'
  },
  {
    question: 'What will be the output of the following code?\n\nint x = 10;\nSystem.out.println(x++);',
    options: ['1) 10', '2) 11', '3) 9', '4) Error'],
    answer: '1) 10'
  },
  {
    question: 'What is the correct syntax to create an array in Java?',
    options: ['1) int[] numbers = new int[];', '2) int[] numbers = new int[10];', '3) int[] numbers;', '4) numbers[] = new int[10];'],
    answer: '2) int[] numbers = new int[10];'
  },
  {
    question: 'Which Java access modifier is used for variables and methods that are accessible within the same package?',
    options: ['1) public', '2) private', '3) protected', '4) default'],
    answer: '4) default'
  },
  {
    question: 'What is the correct way to convert a string to uppercase in Java?',
    options: ['1) str.toUpperCase()', '2) str.convertToUpperCase()', '3) str.toUpper()', '4) str.makeUpperCase()'],
    answer: '1) str.toUpperCase()'
  },
  {
    question: 'What is the purpose of the "this" keyword in Java?',
    options: ['1) Refers to the superclass object', '2) Refers to the subclass object', '3) Refers to the current object', '4) Refers to a static variable'],
    answer: '3) Refers to the current object'
  },
  {
    question: 'Which statement is used to exit a loop in Java?',
    options: ['1) stop', '2) exit', '3) break', '4) return'],
    answer: '3) break'
  },
  {
    question: 'What is the output of the following code?\n\nSystem.out.println(Math.round(9.5));',
    options: ['1) 9', '2) 10', '3) 9.5', '4) 10.0'],
    answer: '2) 10'
  },
  {
    question: 'Which Java keyword is used to handle exceptions?',
    options: ['1) try', '2) catch', '3) finally', '4) throw'],
    answer: '1) try'
  },
  {
    question: 'What is the correct syntax to define a method in Java?',
    options: ['1) method void myMethod() {}', '2) myMethod() {}', '3) void myMethod() {}', '4) myMethod {}'],
    answer: '3) void myMethod() {}'
  },
  {
    question: 'What is the output of the following code?\n\nint x = 6;\nint y = x++ + ++x;\nSystem.out.println(y);',
    options: ['1) 12', '2) 13', '3) 14', '4) 15'],
    answer: '2) 13'
  },
  {
    question: 'Which Java keyword is used to define a subclass-specific behavior?',
    options: ['1) class', '2) extends', '3) this', '4) super'],
    answer: '4) super'
  },
  {
    question: 'What is the purpose of the "new" keyword in Java?',
    options: ['1) To create a new instance of a class', '2) To initialize a variable', '3) To define a method', '4) To declare a constructor'],
    answer: '1) To create a new instance of a class'
  },
  {
    question: 'What will be the output of the following code?\n\nint x = 5;\nint y = x-- + --x;\nSystem.out.println(y);',
    options: ['1) 9', '2) 10', '3) 11', '4) 12'],
    answer: '1) 9'
  },
  {
    question: 'What is the correct way to declare a method that does not return any value in Java?',
    options: ['1) void myMethod() {}', '2) int myMethod() {}', '3) String myMethod() {}', '4) myMethod {}'],
    answer: '1) void myMethod() {}'
  },
  {
    question: 'Which Java keyword is used to prevent a method from being overridden in a subclass?',
    options: ['1) static', '2) final', '3) abstract', '4) private'],
    answer: '2) final'
  },
  {
    question: 'What is the correct way to create an object of a class in Java?',
    options: ['1) MyClass myObj = MyClass();', '2) MyClass myObj = new MyClass();', '3) MyClass myObj;', '4) new MyClass myObj;'],
    answer: '2) MyClass myObj = new MyClass();'
  },
  {
    question: 'Which Java data type is used to store a single character?',
    options: ['1) char', '2) string', '3) character', '4) byte'],
    answer: '1) char'
  },
  {
    question: 'What is the output of the following code?\n\nSystem.out.println(Math.sqrt(16));',
    options: ['1) 4', '2) 5', '3) 16', '4) 256'],
    answer: '1) 4'
  },
  {
    question: 'Which Java keyword is used to implement multiple inheritance?',
    options: ['1) extends', '2) implements', '3) extends and implements', '4) none of the above'],
    answer: '4) none of the above'
  },
  {
    question: 'What is the output of the following code?\n\nString str1 = "Hello";\nString str2 = "Hello";\nSystem.out.println(str1 == str2);',
    options: ['1) true', '2) false', '3) compile-time error', '4) runtime error'],
    answer: '1) true'
  },
  {
    question: 'What is the correct way to declare a constant in Java?',
    options: ['1) const int MY_CONSTANT = 10;', '2) final int MY_CONSTANT = 10;', '3) static int MY_CONSTANT = 10;', '4) constant int MY_CONSTANT = 10;'],
    answer: '2) final int MY_CONSTANT = 10;'
  },
  {
    question: 'Which Java keyword is used to create an interface?',
    options: ['1) interface', '2) extends', '3) implements', '4) class'],
    answer: '1) interface'
  },
  {
    question: 'What is the output of the following code?\n\nSystem.out.println(Math.abs(-5));',
    options: ['1) -5', '2) 5', '3) 0', '4) Error'],
    answer: '2) 5'
  },
  {
    question: 'What is the correct way to access an instance variable in Java?',
    options: ['1) Using this.variableName', '2) Using ClassName.variableName', '3) Using super.variableName', '4) Using variableName directly'],
    answer: '4) Using variableName directly'
  },
  {
    question: 'What is the purpose of the "break" statement in Java?',
    options: ['1) To terminate the current loop or switch case', '2) To skip the next iteration of a loop', '3) To return a value from a method', '4) To throw an exception'],
    answer: '1) To terminate the current loop or switch case'
  },
  {
    question: 'Which Java keyword is used to define a method that cannot be overridden?',
    options: ['1) final', '2) static', '3) abstract', '4) private'],
    answer: '1) final'
  },
    // Add more questions here
  ];
  
  const examContainer = document.getElementById('exam-container');
  const questionsDiv = document.getElementById('questions');
  const timerSpan = document.getElementById('timer-display'); // Changed id to match HTML
  const submitBtn = document.getElementById('submit-button'); // Changed id to match HTML
  
  let timeLeft = 30 * 60; // 30 minutes in seconds
  
  function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            clearInterval(timerInterval);
            submitExam(); // Add this line to automatically submit the exam
        }
    }, 1000);
}

  
  function displayQuestions() {
    questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
      q.options.forEach(option => {
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = `question${index}`;
        radioBtn.value = option;
        questionDiv.appendChild(radioBtn);
        const label = document.createElement('label');
        label.textContent = option;
        questionDiv.appendChild(label);
      });
      questionsDiv.appendChild(questionDiv);
    });
  }
  
  function submitExam() {
    // Collect selected answers
    const selectedAnswers = [];
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    radioButtons.forEach(radioBtn => {
      selectedAnswers.push({
        question: radioBtn.name.replace('question', ''),
        answer: radioBtn.value
      });
    });
  
    // Compare selected answers with correct answers
    const score = selectedAnswers.reduce((totalScore, selectedAnswer) => {
      const questionIndex = parseInt(selectedAnswer.question);
      if (questionIndex >= 0 && questionIndex < questions.length) {
        if (selectedAnswer.answer === questions[questionIndex].answer) {
          return totalScore + 1;
        }
      }
      return totalScore;
    }, 0);
  
    // Display the score or correct answers
    const resultMessage = `You scored ${score} out of ${questions.length}.`;
    alert(resultMessage);
  
    // Review incorrect answers if any
    const incorrectAnswers = selectedAnswers.filter(selectedAnswer => {
      const questionIndex = parseInt(selectedAnswer.question);
      return !(questionIndex >= 0 && questionIndex < questions.length &&
        selectedAnswer.answer === questions[questionIndex].answer);
    });
  
    if (incorrectAnswers.length > 0) {
      let reviewMessage = 'Incorrect Answers:\n\n';
      incorrectAnswers.forEach(incorrectAnswer => {
        reviewMessage += `Question: ${questions[incorrectAnswer.question].question}\n`;
        reviewMessage += `Your Answer: ${incorrectAnswer.answer}\n`;
        reviewMessage += `Correct Answer: ${questions[incorrectAnswer.question].answer}\n\n`;
      });
      alert(reviewMessage);
    }
  }
  
  displayQuestions();
  startTimer();
  
  submitBtn.addEventListener('click', () => {
    submitExam();
  });
  