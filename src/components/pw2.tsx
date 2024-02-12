// import React, { ChangeEvent, SetStateAction, useState, useEffect } from "react";

// function PasswordField({ onEndTesting }: RulesProps) {
//   // Other state variables...

//   const [startTime1, setStartTime1] = useState<number | null>(null);
//   const [endTime1, setEndTime1] = useState<number | null>(null);
//   const [elapsedTime1, setElapsedTime1] = useState<number | null>(null);

//   const [startTime2, setStartTime2] = useState<number | null>(null);
//   const [endTime2, setEndTime2] = useState<number | null>(null);
//   const [elapsedTime2, setElapsedTime2] = useState<number | null>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (startTime1 && endTime1) {
//         const elapsed = Date.now() - startTime1;
//         setElapsedTime1(elapsed);
//       }
//       if (startTime2 && endTime2) {
//         const elapsed = Date.now() - startTime2;
//         setElapsedTime2(elapsed);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [startTime1, endTime1, startTime2, endTime2]);

//   const handleFocus1 = () => {
//     setStartTime1(Date.now());
//   };

//   const handleBlur1 = () => {
//     if (startTime1) {
//       setEndTime1(Date.now());
//     }
//   };

//   const handleFocus2 = () => {
//     setStartTime2(Date.now());
//   };

//   const handleBlur2 = () => {
//     if (startTime2) {
//       setEndTime2(Date.now());
//     }
//   };

//   const handleNextClick = () => {
//     // Other logic...
//     if (pw1 === samplePasswords[1]) {
//       // Correct password entered
//       // Stop the timer
//       setEndTime1(Date.now());
//       // Calculate elapsed time
//       const elapsed = endTime1 ? endTime1 - startTime1 : null;
//       setElapsedTime1(elapsed);
//       // Other logic...
//     }
//     if (pw2 === samplePasswords[2]) {
//       // Correct password entered
//       // Stop the timer
//       setEndTime2(Date.now());
//       // Calculate elapsed time
//       const elapsed = endTime2 ? endTime2 - startTime2 : null;
//       setElapsedTime2(elapsed);
//       // Other logic...
//     }
//   };

//   const handleReset = () => {
//     // Reset timers
//     setStartTime1(null);
//     setEndTime1(null);
//     setElapsedTime1(null);
//     setStartTime2(null);
//     setEndTime2(null);
//     setElapsedTime2(null);
//     // Other logic...
//   };

//   // Other components...

//   return (
//     <>
//       {/* Other JSX */}
//       <input
//         type={pw1Controller}
//         onFocus={handleFocus1}
//         onBlur={handleBlur1}
//         // Other props...
//       />
//       <input
//         type={pw2Controller}
//         onFocus={handleFocus2}
//         onBlur={handleBlur2}
//         // Other props...
//       />
//       <button onClick={handleNextClick}>Next</button>
//       <button onClick={handleReset}>Reset</button>
//       {/* Other JSX */}
//     </>
//   );
// }
