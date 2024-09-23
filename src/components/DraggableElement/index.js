import Draggable from "react-draggable";

export default function DraggableElement({
  src,
  defaultPosition,
  bounds,
  updatePosition,
}) {
  const handleStop = (e, data) => {
    const newPosition = { x: data.x, y: data.y };
    updatePosition(newPosition); // Pass the new position to the parent component
  };

  return (
    <Draggable
      defaultPosition={defaultPosition}
      onStop={handleStop}
      bounds={{
        left: 0,
        top: 0,
        right: bounds.width - 100,
        bottom: bounds.height - 100,
      }}
    >
      <img
        src={src}
        alt="element"
        style={{
          position: "absolute", // Make it absolute relative to the container
          zIndex: 2, // Ensure it's above the canvas
          width: "100px",
          height: "100px",
          cursor: "move",
        }}
      />
    </Draggable>
  );
}
