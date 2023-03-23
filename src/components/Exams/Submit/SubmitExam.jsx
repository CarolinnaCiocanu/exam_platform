import { useRouter } from "next/router";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateExam } from "@/redux/exams/action-creators";

export default function SubmitExam() {
  const exams = useSelector((state) => state.ExamsReducer.exams);
  const router = useRouter();
  const { id } = router.query;
  const exam = exams.filter((exam) => exam.id === parseInt(id))[0];
  const [form, setForm] = useState({});
  const dispatch = useDispatch();

  const getQuestionField = (question) => {
    switch (question.type) {
      case "textarea":
        return (
          <div className="form-group">
            <label> {question.label}:</label>
            <textarea name={question.id} onChange={handleOnChanges}></textarea>
          </div>
        );

      case "radio":
        return (
          <div key="inline-radio">
            <div className="form-group">
              <label>{question.label}</label>
              {question.answers.map((answer) => {
                return (
                  <Form.Check
                    inline
                    name={question.id}
                    type={question.type}
                    key={answer.id}
                    label={answer.label}
                    value={answer.value}
                    onChange={handleOnChanges}
                  ></Form.Check>
                );
              })}
            </div>
          </div>
        );
      default:
        return;
    }
  };

  const handleOnChanges = (e) => {
    setForm((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const submitExam = () => {
    let points = 0;

    exam.questions.map((question) => {
      if (!question.answers && form[question.id].length > 10) {
        points += 10;
      } else {
        points += parseInt(form[question.id]);
      }
    });

    const examToUpdate = {
      ...exam,
      status: "closed",
      points: points,
    };

    let examsToUpdate = exams.filter((exam) => exam.id !== examToUpdate.id);
    examsToUpdate.push(examToUpdate);

    dispatch(updateExam(examsToUpdate));

    router.push("/Exams");
  };

  return (
    exam && (
      <div className="container">
        <Form className="submit-exam card mt-5">
          <div className="card-content">
            <h5 className="border-bottom">Title: {exam.name}</h5>
            {exam?.questions?.map((question) => (
              <Row className="my-3 border-bottom pb-4" key={question.id}>
                {getQuestionField(question)}
              </Row>
            ))}
            <div
              className="btn btn-primary btn-sm"
              onClick={() => submitExam()}
            >
              Submit
            </div>
          </div>
        </Form>
      </div>
    )
  );
}
