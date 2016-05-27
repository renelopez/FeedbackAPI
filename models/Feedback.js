var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
  name: String,
  position: String,
  recruiter: String,
  candidate: String,
  reviewer: String,
  customer: String,
  type: String,
  score: String,
  comments: String,
  creationDate: {type: Date, default: Date.now}
});


var FeedbackModel = mongoose.model('Feedback', feedbackSchema);

function createDefaultFeedbacks() {
  FeedbackModel.find({}).exec(function (err, collection) {
    if (collection.length === 0) {
      FeedbackModel.create(
          {
            name: 'Vesta Developer for Telcel',
            position: '.Net Developer',
            recruiter: 'Jennifer Mugford',
            candidate: 'Oscar Perez',
            reviewer: 'Rene Lopez',
            customer: 'Vesta',
            type: 'Phone Interview',
            score: '9.0',
            comments: 'It was good, I liked it.',
            creationDate: new Date().toLocaleDateString()
          });
          FeedbackModel.create(
              {
                name: 'FMI Developer for Pharma',
                position: 'Java Developer',
                recruiter: 'Karla Montoya',
                candidate: 'Negrito Medina',
                reviewer: 'Joe Zepeda',
                type: 'Practice Interview',
                customer: 'Foundation Medicine',
                score: '7.0',
                comments: 'Great but needs more.',
                creationDate: new Date().toLocaleDateString()
              });
          FeedbackModel.create(
              {
                name: 'Java Bofi for Backend',
                position: 'Java Developer',
                recruiter: 'Francisca Molina',
                customer: 'Bank Of Internet',
                type: 'Practice Interview',
                candidate: 'Jimena Sanchez',
                reviewer: 'Francisco Lopez',
                score: '10.0',
                comments: 'Awesome, I liked it.',
                creationDate: new Date().toLocaleDateString()
              })
    }
  })

}

exports.createDefaultFeedbacks = createDefaultFeedbacks;