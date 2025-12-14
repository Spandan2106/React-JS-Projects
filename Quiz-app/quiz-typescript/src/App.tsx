//App.tsx

import React, { useState, useEffect, useCallback } from "react";
import './App.css';
interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris",
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: "JavaScript",
    },
    {
        question: "What is The full form of HTML?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
    },
    {
        question: "Which organ in the human body is responsible for pumping blood?",
        options: ["Lungs", "Liver", "Heart", "Kidneys"],
        answer: "Heart",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        answer: "Au",
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare",
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide",
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: "Diamond",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan",
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        answer: "Avocado",
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        answer: "Hydrogen",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
    },
    {
        question: "Which continent is the Sahara Desert located on?",
        options: ["Asia", "Africa", "Australia", "South America"],
        answer: "Africa",
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C",
    },
    {
        question: "Which instrument measures atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        answer: "Barometer",    
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Euro", "Won"],
        answer: "Yen",
    },
    {
        question: "Which organelle is known as the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        answer: "Mitochondria",
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
        answer: "Mount Everest",
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Steve Jobs"],
        answer: "Charles Babbage",
    },
    {
        question: "What is the main gas found in the Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
        answer: "Nitrogen",
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Saturn",
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Heart", "Lungs"],
        answer: "Skin",
    },
    {
        question: "Which scientist proposed the laws of motion?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton",
    },
    {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        answer: "H2O",
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "UK", "Russia"],
        answer: "Brazil",
    },
    {
        question: "What is the primary language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: "Portuguese",
    },
    {
        question: "Which vitamin is produced when the skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
        answer: "Antarctic Desert",
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
        answer: "Alexander Graham Bell",
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Tofu", "Seaweed", "Miso Paste", "Rice"],
        answer: "Miso Paste",
    },
    {
        question: "Which planet is closest to the sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: "Mercury",
    },
    {
        question: "What is the process by which plants make their food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Germination"],
        answer: "Photosynthesis",
    },
    {
        question: "Which famous scientist formulated the laws of planetary motion?",
        options: ["Johannes Kepler", "Galileo Galilei", "Isaac Newton", "Nicolaus Copernicus"],
        answer: "Johannes Kepler",
    },
    {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Molecule", "Cell", "Organ"],
        answer: "Cell",
    },
    {
        question: "Which country is the largest by land area?",
        options: ["Canada", "China", "Russia", "USA"],
        answer: "Russia",
    },
    {
        question: "What is the main component of the sun?",
        options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        answer: "Hydrogen",
    },
    {
        question: "Which artist is famous for the painting 'Starry Night'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
        answer: "Vincent van Gogh",
    },
    {
        question: "What is the largest bone in the human body?",
        options: ["Femur", "Tibia", "Humerus", "Skull"],
        answer: "Femur",
    },
    {
        question: "Which planet is known for its prominent ring system?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Saturn",
    },
    {
        question: "What is the chemical symbol for sodium?",
        options: ["S", "Na", "So", "N"],
        answer: "Na",
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["India", "China", "Japan", "Mongolia"],
        answer: "China",
    },
    {
        question: "What is the primary function of red blood cells?",
        options: ["Fight infections", "Carry oxygen", "Clot blood", "Produce hormones"],
        answer: "Carry oxygen",
    },
    {
        question: "Who is the author of '1984'?",
        options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Jules Verne"],
        answer: "George Orwell",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        answer: "Jupiter",
    },
    {
        question: "Which element is essential for the formation of bones and teeth?",
        options: ["Iron", "Calcium", "Potassium", "Magnesium"],
        answer: "Calcium",
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Newton", "Einstein", "Galileo", "Tesla"],
        answer: "Einstein",
    },
];

const App: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState < number > (0);
    const [score, setScore] = useState < number > (0);
    const [showResult, setShowResult] = useState < boolean > (false);
    const [showBlackHolePopup, setShowBlackHolePopup] = useState < boolean > (false);
    const [showNavigation, setShowNavigation] = useState < boolean > (false);
    const [answeredQuestions, setAnsweredQuestions] = useState < boolean[] > (new Array(questions.length).fill(false));
    const [selectedAnswers, setSelectedAnswers] = useState < (string | null)[] > (new Array(questions.length).fill(null));
    const [showSubmitConfirm, setShowSubmitConfirm] = useState < boolean > (false);
    const [timeLeft, setTimeLeft] = useState < number > (10);

    const handleNextQuestion = useCallback(() => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setTimeLeft(10);
        }
        // Removed auto-submit when reaching the end
    }, [currentQuestion]);

    useEffect(() => { // Handles the timer logic
        if (showResult) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    handleNextQuestion();
                    return 10; // Reset for next question
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [showResult, handleNextQuestion]);

    const handleBlackHoleClick = () => {
        setShowBlackHolePopup(true);
        setTimeout(() => setShowBlackHolePopup(false), 3000); // Hide after 3 seconds
    };

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setTimeLeft(10);
        setShowNavigation(false);
        setAnsweredQuestions(new Array(questions.length).fill(false));
        setSelectedAnswers(new Array(questions.length).fill(null));
        setShowSubmitConfirm(false);
    };

    const handleNavigateToQuestion = (index: number) => {
        setCurrentQuestion(index);
        setTimeLeft(10);
        setShowNavigation(false);
    };

    const handleSubmitQuiz = () => {
        setShowSubmitConfirm(true);
    };

    const confirmSubmit = () => {
        // Calculate score based on selected answers
        let finalScore = 0;
        selectedAnswers.forEach((answer, index) => {
            if (answer === questions[index].answer) {
                finalScore++;
            }
        });
        setScore(finalScore);
        setShowResult(true);
        setShowSubmitConfirm(false);
    };

    const cancelSubmit = () => {
        setShowSubmitConfirm(false);
    };

    const handleAnswer = (option: string) => {
        setSelectedAnswers(prev => {
            const newSelected = [...prev];
            newSelected[currentQuestion] = option;
            return newSelected;
        });
        setAnsweredQuestions(prev => {
            const newAnswered = [...prev];
            newAnswered[currentQuestion] = true;
            return newAnswered;
        });
        handleNextQuestion();
    };

    return (
        <div className="container">
            <div className="solar-system">
                <div className="sun"></div>
                <div className="planet mercury"></div>
                <div className="planet venus"></div>
                <div className="planet earth"></div>
                <div className="planet mars"></div>
            </div>
            <div className="black-hole" onClick={handleBlackHoleClick}></div>
            <div className="shooting-star"></div>
            <div className="quizBox">
                    {showResult ? (
                        <div>
                            <div className="resultContainer">
                                <h2 className="questionTitle">Quiz Completed!</h2>
                                <p>
                                    Your Score: {score} / {questions.length}
                                </p>
                                {score / questions.length > 0.5 ? (
                                    <p className="resultMessage success">Congrats! 🎉🚀🌟 You did great!</p>
                                ) : (
                                    <p className="resultMessage failure">Next time make better! 💪📚</p>
                                )}
                                <button
                                    className="restartButton"
                                    onClick={() => {
                                        setCurrentQuestion(0);
                                        setScore(0);
                                        setShowResult(false);
                                        setTimeLeft(10);
                                    }}
                                >
                                    Restart Quiz
                                </button>
                            </div>
                            <div className="answers-review">
                                <h3>All Correct Answers:</h3>
                                {questions.map((q, index) => (
                                    <div key={index} className="answer-item">
                                        <p><strong>Q{index + 1}:</strong> {q.question}</p>
                                        <p><strong>Correct Answer:</strong> {q.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="quiz-controls">
                                <button className="nav-button" onClick={() => setShowNavigation(!showNavigation)}>
                                    {showNavigation ? 'Hide' : 'Navigate'} Questions
                                </button>
                                <div className="control-buttons">
                                    <button className="submit-button" onClick={handleSubmitQuiz}>
                                        Submit Quiz
                                    </button>
                                    <button className="restart-button" onClick={handleRestart}>
                                        Restart Quiz
                                    </button>
                                </div>
                            </div>
                            {showNavigation && (
                                <div className="navigation-matrix">
                                    {questions.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`nav-question ${index === currentQuestion ? 'active' : ''} ${answeredQuestions[index] ? 'answered' : 'unanswered'}`}
                                            onClick={() => handleNavigateToQuestion(index)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            )}
                            <h2 className="questionTitle">{questions[currentQuestion].question}</h2>
                            <p className="timer">Time Left: {timeLeft}s</p>
                            <div className="optionsContainer">
                                {questions[currentQuestion].options.map((option) => (
                                    <button
                                        key={option}
                                        className={`optionButton ${selectedAnswers[currentQuestion] === option ? 'selected' : ''}`}
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
            </div>
            {showSubmitConfirm && (
                <div className="submit-confirm-overlay">
                    <div className="submit-confirm-dialog">
                        <h3>Submit Quiz?</h3>
                        <p>You have answered {answeredQuestions.filter(a => a).length} out of {questions.length} questions.</p>
                        {answeredQuestions.filter(a => a).length === questions.length ? (
                            <p>🎉 All questions completed! Ready to submit?</p>
                        ) : (
                            <p>⚠️ Some questions are unanswered. Submit anyway?</p>
                        )}
                        <div className="confirm-buttons">
                            <button className="confirm-yes" onClick={confirmSubmit}>Yes, Submit</button>
                            <button className="confirm-no" onClick={cancelSubmit}>No, Continue</button>
                        </div>
                    </div>
                </div>
            )}
            {showBlackHolePopup && (
                <div className="black-hole-popup">
                    <h3>Current Progress</h3>
                    <p>Score: {score} / {questions.length}</p>
                    <p>Question: {currentQuestion + 1} / {questions.length}</p>
                </div>
            )}
        </div>
    );
};
export default App;