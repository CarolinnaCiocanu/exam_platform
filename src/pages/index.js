import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Examns platform</title>
        <meta
          name="description"
          content="This is an applicationf for students and teachers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homepage-intro">
        <div className="homepage-description">
          <h1>
            Courses & Quizz <br /> Done in 5 minutes
          </h1>
          <h4>Easily create and take exams on our platform</h4>
          <Link className="btn btn-primary btn-lg" href="/exams">
            See All
          </Link>
        </div>
      </div>
    </>
  );
}
