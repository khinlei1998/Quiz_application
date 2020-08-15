<template>
  <div id="app">
   <h3>Vue Quiz</h3>
    
    <h3 v-show="questionindex != questions.length">Question:{{this.questionno}}/{{ questions.length}} </h3>
    <div
      id="bes_border"
      class="container-fluid"
      v-show="index == questionindex"
      v-for="(question, index) in questions"
      :key="question.text"
    >
      <h2>{{ question.text }}</h2>

      <p
        v-for="(response, index) in questions[index].responses"
        :key="response.id"
        @click="clickanswer(response.id)"
        :class="{ red: response.id == selectedanswer }"
      >
        {{ response.text }} {{ index.text }}
      </p>
      <button
        class="btn btn-success"
        @click="next()"
        v-show="questionindex != questions.length"
      >
        Next
      </button>
    </div>

    <div id="showresult" v-show="questionindex === questions.length">
      Total Score:{{ score }} / {{ questions.length }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionindex: 0,
      questionno:1,
      nextbutton: false,
      score: 0,
      selectedanswer: "null",
      selected: "false",
      correctQuestion: [],
      //  userResponses:Array(this.questions.length).fill(null) ,

      // 1
      questions: [
        {
              id: 1,
          text: "How many novels did the Bronte sisters write in total?",

          responses: [
            { id: 1, text: "Six", correct:false},
            
            { id: 2, text: "Seven", correct: true },
            { id: 3, text: "Eight",  correct:false},
            { id: 4, text: "Nine",correct:false },
          ],
        },

        

        {
            id: 2,
          text: "Which is the India's largest and the oldest museum?",

          responses: [
            { id: 5, text: "	Indian Museum, Kolkata", correct: true },
            
            { id: 6, text: "National Museum, New Delhi", correct: false },
            { id: 7, text: "Allahabad Museum", correct: false },
            { id: 8, text: "Salar Jung Museum, Hyderabad", correct: false },
          ],
        },

        {
            id: 3,
          text: "What is the longest that an elephant has ever lived?",

          responses: [
            { id: 9, text: "	17 years", correct: false },
            
            { id: 10, text: "49 years", correct: false },
            { id: 11, text: "86 years ", correct: true },
            { id: 12, text: "142 years", correct: false },
          ],
        },

         {
            id: 4,
          text: "Which of these animals does NOT appear in the Chinese zodiac?",

          responses: [
            { id: 13, text: "	Bear", correct: false },
            
            { id: 14, text: "Rabbit", correct: false },
            { id: 15, text: "Dragon ", correct: true },
            { id: 16, text: "Dog", correct: false },
          ],
        },

         {
            id: 5,
          text: "What is the longest river in France?",

          responses: [
            { id: 17, text: "	Loire", correct: true },
            
            { id: 18, text: "Seine", correct: false },
            { id: 19, text: "Rhone ", correct: false },
            { id: 20, text: "Gironde", correct: false },
          ],
        },

           {
            id: 6,
            text: "Which U.S. state is known as the sunflower state?",

            responses: [
              { id: 21, text: "	Florida", correct: false },
              
              { id: 22, text: "California", correct: false },
              { id: 23, text: "Maine ", correct: false },
              { id: 24, text: "Kansas", correct: true },
            ],
          },

         {
            id: 7,
          text: "What language is the most spoken worldwide?",

          responses: [
            { id: 25, text: "	Chinese", correct: true },
            
            { id: 26, text: "Spanish", correct: false },
            { id: 27, text: "Arabic ", correct: false },
            { id: 28, text: "English", correct: false },
          ],
        },

        {
            id: 8,
          text: "Which ocean is the largest?",

          responses: [
            { id: 29, text: "	Indian", correct: false },
            
            { id: 30, text: "Pacific", correct: true },
            { id: 31, text: "Atlantic ", correct: false },
            { id: 32, text: "Arctic", correct: false },
          ],
        },

        {
            id: 9,
          text: "Who painted the Mona Lisa?",

          responses: [
            { id: 33, text: "	Van Gogh", correct: false },
            
            { id: 34, text: " Da Vinci", correct: true },
            { id: 35, text: " Picasso ", correct: false },
            { id: 36, text: "Monet", correct: false },
          ],
        },

        {
            id: 10,
          text: "How many degrees are in a circle?",

          responses: [
            { id: 37, text: "360", correct: true },
            
            { id: 38, text: "  180", correct: false },
            { id: 39, text: " 150 ", correct: false },
            { id: 40, text: "359", correct: false },
          ],
        },
      ],
     
    };
  },

  methods: {
    clickanswer: function(id) {
    
      
      var i;
      var j;
      for(i = 0; i < this.questions.length; i++) {
        console.log(this.questions.length);
      	for(j =0; j < this.questions[i].responses.length; j++) {
        	if(this.questions[i].responses[j].id == id) {
            // alert('hello')
                if(this.questions[i].responses[j].correct) {
                    //  alert(this.questions[i].id);
                    // console.log('correct');
                    if(!this.correctQuestion.includes(this.questions[i].id)) {
                        this.correctQuestion.push(this.questions[i].id);
                        this.score += 1;
                    }
                    break;
                }
                else {
                    if(this.correctQuestion.includes(this.questions[i].id)) { 
                      // alert(this.questions[i].id);
                        // console.log('incorrect');
                             this.correctQuestion = this.correctQuestion.filter(correctResponse => correctResponse != this.questions[i].id);
                        this.score -= 1;
                        break;
                    }
                }
            }
        }
      }
      

      this.nextbutton = true;
      this.selectedanswer = id;
    },

    next: function() {
      if (this.questionindex < this.questions.length) {
        this.questionindex++;
        this.questionno++;
      } else {
        console.log("false");
      }
    },
  },
};
</script>

<style scoped>
#app {
 
  width: 100%;
  padding:56px;
 


 
}
#bes_border {
  border: 1px solid black;
   box-shadow: 5px 10px 18px #888888;
  padding: 15px;
  background-color: black;
  border-radius: 15px;
  color: white;
  text-decoration: white;
  margin-top: 40px;
  
}

p {
  border: 3px solid gray;
  height: 45px;
  width: 40%;
  border-radius: 25px;
  text-align: center;
  margin-left: 25%;
  margin-top: 20px;
  
  
}
/* p:hover{
  background-color: #D1D1D1;
} */
.red {
  background-color: grey;
}
h2 {
  text-align: center;
  margin-top: 10px;
}
.btn-success {
  margin-left: 65%;
}
.btn-success[data-v-7ba5bd90] {
    margin-left: 75%;
}
#showresult{
  text-align: center;
   border: 1px solid black;
}
</style>
