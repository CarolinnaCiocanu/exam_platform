import { useRouter } from "next/router";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Details() {
  const exams = useSelector((state) => state.ExamsReducer.exams);
  const router = useRouter();
  const { id } = router.query;
  const exam = exams.filter((exam) => exam.id === parseInt(id))[0];

  const getClass = (points) => {
    if (points > 80) {
      return "status bg-success text-white";
    }

    if (points < 80 && points > 50) {
      return "status bg-warning";
    }

    return "status bg-danger text-white";
  };

  return exam && exam.status === "closed" ? (
    <>
      <Card className="m-auto mt-5" style={{ width: "18rem" }}>
        <Card.Body>
          <Row>
            <Col>
              {" "}
              <b>Type:</b> {exam.type}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <b>Title:</b> {exam.name}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <b>Created By:</b> {exam.createdByUserId}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <b>Earned points:</b> {exam.points}
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="exam-status">
              <b>Status:</b>{" "}
              <div className={getClass(exam.points)}>
                {exam.points > 80
                  ? "Very Good"
                  : exam.points < 80 && exam.points > 50
                  ? "Good"
                  : "Exam is not passed"}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className=" exams-redirect">
        <Link href="/Exams" className="mx-auto btn btn-sm btn-primary">
          Go To Exams
        </Link>
      </div>
    </>
  ) : (
    <Row>
      <p className="text-center alert alert-warning">
        Sorry: data not found. <Link href="/">Go to Homepage</Link>
      </p>
    </Row>
  );
}
