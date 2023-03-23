import Link from "next/link";
import { Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ExamsList() {
  const exams = useSelector((state) => state.ExamsReducer.exams);

  const getRedirectUrl = ({ status, id }) => {
    return status === "open" ? `/TakeExam/${id}` : `/ExamDetails/${id}`;
  };

  console.log(exams);

  return (
    <Container className="mt-5 exams-list">
      <ListGroup>
        {exams.map((exam) => {
          return (
            <ListGroup.Item key={exam.id}>
              <div className="d-flex w-100">
                <h5>{exam.name}</h5>
                <Link
                  href={getRedirectUrl(exam)}
                  className="btn btn-primary btn-sm"
                >
                  {exam.status === "open" ? "Take Exam" : "View Results"}
                </Link>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}
