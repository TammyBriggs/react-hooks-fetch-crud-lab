import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function addQuestionToList(newQuestion) {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  }

  function deleteQuestionFromList(id) {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== id)
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDelete={deleteQuestionFromList} />
        ))}
      </ul>
      <QuestionForm addQuestionToList={addQuestionToList} />
    </section>
  );
}

export default QuestionList;
