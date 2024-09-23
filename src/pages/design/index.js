import React, { useRef } from "react";
import PhotoEditor from "@/components/PhotoEditor";

// Design component
const Design = () => {
  const editorRef = useRef(null); // Reference to the PhotoEditor component

  // Function to clear the editor
  const clearEditor = () => {
    if (editorRef.current && editorRef.current.clear) {
      editorRef.current.clear(); // Call the clear method from PhotoEditor
    } else {
      console.warn("Clear method not found on PhotoEditor component");
    }
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome to the Design Area</h1>
        <PhotoEditor ref={editorRef} {...editorProps} />
        <div style={styles.buttonContainer}>
          <button style={styles.clearButton} onClick={clearEditor}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    backgroundColor: "#ffffff", // White background
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    width: "90%",
    margin: "auto",
    overflow: "hidden",
  },
  header: {
    fontSize: "2.5rem",
    color: "#333333", // Dark gray text
    marginBottom: "30px",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  clearButton: {
    padding: "12px 25px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#4CAF50", // Green color
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  clearButtonHover: {
    backgroundColor: "#45a049", // Darker green on hover
    transform: "translateY(-2px)", // Small lift effect
  },
  '@media (max-width: 600px)': {
    header: {
      fontSize: "2rem",
    },
    clearButton: {
      fontSize: "0.9rem",
      padding: "10px 20px",
    },
  },
};

// Props for PhotoEditor
const editorProps = {
  width: 800,
  height: 600,
  theme: "light", // Change to light theme for better contrast
};

export default Design;
