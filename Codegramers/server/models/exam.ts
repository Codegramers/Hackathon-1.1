import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/* Required using mongo hook with TS */
interface IExam extends mongoose.Document {
  subject: string;
  maxMarks: string;
  marksObtained?: string;
  questions: [
    {
      question: string;
      correctAnswers: [];
      incorrectAnswers?: [];
      marks: string;
    }
  ];
  examDate: Date;
}

const examSchema = new mongoose.Schema<IExam>({
  subject: {
    required: true,
    type: String,
  },
  maxMarks: {
    required: true,
    type: String,
  },
  marksObtained: {
    // required: true,
    type: String,
  },
  /*
   * MCQ
   * Single integer type
   * One line ()
   */
  questions: {
    required: true,
    type: [
      {
        question: String,
        correctAnswers: [],
        incorrectAnswers: [],
        mark: String,
      },
    ],
  },

  examDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  // correctAnswers: {
  //   type: [],
  //   required: true,
  // },
  // incorrectAnswers: {
  //   type: [],
  //   required: true,
  //   default: [],
  // },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
