import { useRouter } from "next/router";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateExam } from "@/redux/exams/action-creators";

export default function CreateExam() {
  const exams = useSelector((state) => state.ExamsReducer.exams);
  const router = useRouter();
  const [form, setForm] = useState({
    id: 0,
    type: "Examen",
    name: "New exam",
    status: "open",
    createdByUserId: 0,
    questions: [
      {
        id: 0,
        type: "radio",
        label: "Cit e 1+1",
        answers: [
          {
            label: 1,
            value: 1,
            point: 0,
            id: 0,
          },
          {
            label: 2,
            value: 2,
            point: 80,
            id: 1,
          },
        ],
      },
      {
        id: 1,
        type: "textarea",
        label: "Descrieti ABC",
      },
    ],
  });
  const dispatch = useDispatch();

  const addExam = () => {
    const examsToSubmit = exams;
    const newExam = { ...form, id: examsToSubmit.length + 1 };
    examsToSubmit.push(newExam);

    dispatch(updateExam(examsToSubmit));

    router.push("/Exams");
  };

  const getQuestionField = (question) => {
    switch (question.type) {
      case "textarea":
        return (
          <div className="form-group">
            <label> {question.label}:</label>
            <textarea name={question.id} disabled></textarea>
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
                    disabled
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

  return (
    <div className="container">
      <h3 className="text-center w-100">Create Exam</h3>
      <Form className="submit-exam card mt-5">
        <div className="card-content">
          <h5 className="border-bottom text-center w-100">
            Title: {form.name}
          </h5>
          {form?.questions?.map((question) => (
            <Row className="my-3 border-bottom pb-4" key={question.id}>
              {getQuestionField(question)}
            </Row>
          ))}
          <div className="btn btn-primary btn-sm" onClick={() => addExam()}>
            Add
          </div>
        </div>
      </Form>
    </div>
  );
}
