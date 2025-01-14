import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Checkbox,
  Typography,
  Button,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const QuizComponent = ({ title, data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [prev, setPrev] = useState(null);
  const [isRandom, setIsRandom] = useState(true);

  // Function to load a new random question
  const getRandomQuestion = () => {
    setPrev(currentQuestionIndex);
    if (isRandom) {
      const randomIndex = Math.floor(Math.random() * data?.length);
      setCurrentQuestionIndex(randomIndex);
      setShowAnswer(false); // Reset answer visibility
      setUserAnswer(""); // Reset user's input
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowAnswer(false); // Reset answer visibility
      setUserAnswer("");
    }
  };

  const currentQuestion = data[currentQuestionIndex];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePrevious = () => {
    if (isRandom) {
      setCurrentQuestionIndex(prev);
    } else {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleOptionSelect = () => {};

  return (
    <>
      <AppBar>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "secondary.main" }}>
            <Tabs
              variant="fullWidth"
              textColor="secondary"
              indicatorColor="secondary"
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{ height: "60px" }}
            >
              <Tab
                label="Practice"
                sx={{ fontFamily: "outfit" }}
                color="secondary"
                {...a11yProps(0)}
              />
              <Tab
                label="Study"
                sx={{ fontFamily: "outfit" }}
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
        </Box>
      </AppBar>

      <CustomTabPanel value={value} index={0}>
        <div
          style={{
            padding: "20px",
            paddingTop: "60px",
            maxWidth: "500px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Box align="center">
            <h1
              style={{
                backgroundColor: "#f2e5d7",
                color: "#162719",
                width: "fit-content",
                borderRadius: "5px",
                padding: "2px 10px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {title}
            </h1>{" "}
            <Switch
              color="secondary"
              checked={isRandom}
              onChange={(e) => setIsRandom(e.target.checked)}
            />
          </Box>

          <h2 style={{ color: "#f2e5d7" }}>
            Random Question
            <br />
            <small  style={{ fontWeight: 300, fontSize: "12px" }}>
              {currentQuestionIndex + 1} of {data?.length}
            </small>
          </h2>

          <div style={{ margin: "20px 0", fontSize: "18px", color: "#f2e5d7" }}>
            <strong>Question:</strong> {currentQuestion.question}
          </div>
          {currentQuestion.options ? (
            // Display multiple-choice options if available
            <div style={{ marginBottom: "20px" }}>
              {currentQuestion.options.map((option, index) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <Checkbox
                    color="secondary"
                    sx={{
                      "&.MuiCheckbox-root": { borderColor: "secondary.main" },
                    }}
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  />
                  <Typography sx={{ color: "secondary.main" }}>
                    {" "}
                    {option}
                  </Typography>
                </Box>
              ))}
            </div>
          ) : (
            <>
              <input
                type="text"
                placeholder="Write your answer here"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                style={{
                  padding: "10px",
                  width: "100%",
                  marginBottom: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </>
          )}

          <button
            onClick={() => handlePrevious()}
            disabled={prev === null }
            style={{
              padding: "10px 20px",
              backgroundColor: "orange",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
              ...((prev === null) && {
                backgroundColor: "#dedede",
                opacity: 0.5,
              }),
            }}
          >
            Prev Question
          </button>
          <button
            onClick={getRandomQuestion}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28A745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Next Question
          </button>
          <button
            onClick={() => setShowAnswer(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            Reveal Answer
          </button>

          {showAnswer && (
            <div
              style={{ marginTop: "20px", fontSize: "18px", color: "#FF6347" }}
            >
              <strong>Correct Answer:</strong> {currentQuestion.answer}
            </div>
          )}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div
          style={{
            padding: "20px",
            paddingTop: "60px",
            maxWidth: "500px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Box align="center">
            <h1
              style={{
                backgroundColor: "#f2e5d7",
                color: "#162719",
                width: "fit-content",
                borderRadius: "5px",
                padding: "2px 10px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {title}
            </h1>
          </Box>
          <Box sx={{ mt: 3 }}>
            <h2 style={{ color: "#f2e5d7" }}>All Questions</h2>
            {data?.map((item, index) => (
              <Box sx={{}}>
                <p
                  style={{
                    margin: "20px 0",
                    fontSize: "18px",
                    color: "#f2e5d7",
                  }}
                >
                  <strong>Question {index + 1}:</strong> {item?.question}
                </p>
                {
                 item?.options && (
                  <>
                      {item.options.map((option, index) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <Checkbox
                    color="secondary"
                    sx={{
                      "&.MuiCheckbox-root": { borderColor: "secondary.main" },
                    }}
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                  />
                  <Typography sx={{ color: "secondary.main" }}>
                    {" "}
                    {option}
                  </Typography>
                </Box>
              ))}
                  </>
                 )
                }
                <p
                  style={{
                    margin: "20px 0",
                    fontSize: "18px",
                    color: "#f2e5d7",
                  }}
                >
                  <strong style={{ textDecoration: "initial" }}>
                    Answer :
                  </strong>{" "}
                  {item?.answer}
                </p>
              </Box>
            ))}
          </Box>
        </div>
      </CustomTabPanel>

      <Box align="center" sx={{ mt: 2 }}>
        <Link to="/">
          <Button variant="contained" sx={{ textTransform: "initial" }}>
            Back Home
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default QuizComponent;
