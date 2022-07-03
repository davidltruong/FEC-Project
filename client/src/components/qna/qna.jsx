import React from 'react';
import SearchBar from './searchbar.jsx';
import QuestionAnswer from './questionAnswer.jsx';
import BottomButtons from './bottomButtons.jsx';
import data from '../../data/sampleData.js';
import $ from 'jquery';


class Qna extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: data.questions
    };
  }

  //props.productId = 71697

  // componentDidMount() {
  //   //get request to get all question/answers
  //   $.get(url, (data) => {
  //     //do sort with data then add to state
  //   });
  // }

  render() {
    return (
      <div>
        <div>QNA</div><br></br>
        <SearchBar /><br></br>
        <QuestionAnswer questions={this.state.questions.results} /><br></br>
        <BottomButtons />
      </div>
    );
  }
}

export default Qna;



// module.exports.questions = {
//   "product_id": "71697",
//   "results": [
//       {
//           "question_id": 641727,
//           "question_body": "Would this work well for deer hunting? ",
//           "question_date": "2022-06-09T00:00:00.000Z",
//           "asker_name": "Tyler93",
//           "question_helpfulness": 4,
//           "reported": false,
//           "answers": {
//               "5986024": {
//                   "id": 5986024,
//                   "body": "I hide in the woods all the time in my camo onesie and no one has ever noticed me!",
//                   "date": "2022-06-09T00:00:00.000Z",
//                   "answerer_name": "sneakyPete",
//                   "helpfulness": 2,
//                   "photos": []
//               },
//               "5986042": {
//                   "id": 5986042,
//                   "body": "Works perfect!",
//                   "date": "2022-06-11T00:00:00.000Z",
//                   "answerer_name": "jack543!",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "5986043": {
//                   "id": 5986043,
//                   "body": "So well!",
//                   "date": "2022-06-12T00:00:00.000Z",
//                   "answerer_name": "jack543!",
//                   "helpfulness": 0,
//                   "photos": []
//               },
//               "5986044": {
//                   "id": 5986044,
//                   "body": "so awesome!",
//                   "date": "2022-06-12T00:00:00.000Z",
//                   "answerer_name": "jack543!",
//                   "helpfulness": 0,
//                   "photos": []
//               }
//           }
//       },
//       {
//           "question_id": 641722,
//           "question_body": "Why did you like the product or not?",
//           "question_date": "2022-06-07T00:00:00.000Z",
//           "asker_name": "Example: jackson11!",
//           "question_helpfulness": 2,
//           "reported": false,
//           "answers": {
//               "5986022": {
//                   "id": 5986022,
//                   "body": "People can't see me coming in my new camo onesie!!",
//                   "date": "2022-06-09T00:00:00.000Z",
//                   "answerer_name": "seakySam",
//                   "helpfulness": 1,
//                   "photos": []
//               }
//           }
//       }
//   ]
// };

// module.exports.answers = {
//   "question": "641727",
//   "page": 1,
//   "count": 5,
//   "results": [
//       {
//           "answer_id": 5986024,
//           "body": "I hide in the woods all the time in my camo onesie and no one has ever noticed me!",
//           "date": "2022-06-09T00:00:00.000Z",
//           "answerer_name": "sneakyPete",
//           "helpfulness": 2,
//           "photos": []
//       },
//       {
//           "answer_id": 5986042,
//           "body": "Works perfect!",
//           "date": "2022-06-11T00:00:00.000Z",
//           "answerer_name": "jack543!",
//           "helpfulness": 0,
//           "photos": []
//       },
//       {
//           "answer_id": 5986043,
//           "body": "So well!",
//           "date": "2022-06-12T00:00:00.000Z",
//           "answerer_name": "jack543!",
//           "helpfulness": 0,
//           "photos": []
//       },
//       {
//           "answer_id": 5986044,
//           "body": "so awesome!",
//           "date": "2022-06-12T00:00:00.000Z",
//           "answerer_name": "jack543!",
//           "helpfulness": 0,
//           "photos": []
//       }
//   ]
// };