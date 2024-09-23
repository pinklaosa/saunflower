import { useRef, useState, useEffect } from "react";
import ImageUploader from "@/components/ImageUploader";
import DraggableElement from "@/components/DraggableElement";

export default function PhotoEditor() {
  const [image, setImage] = useState(null);
  const [elements, setElements] = useState([]); // State to track all added elements
  const canvasRef = useRef(null); // Reference to the canvas element
  const containerRef = useRef(null); // Reference to the container
  const [canvasBounds, setCanvasBounds] = useState({}); // Store canvas bounds

  // Function to handle image upload
  const handleImageUpload = (dataUrl) => {
    setImage(dataUrl);
  };

  // Function to add a new draggable element
  const handleAddElement = (type) => {
    const elementSrc = getElementSource(type);
    setElements((prevElements) => [
      ...prevElements,
      { id: Date.now(), src: elementSrc, x: 50, y: 50 }, // Add a new element at default position
    ]);
  };

  // Utility function to get the source image based on the type of element
  const getElementSource = (type) => {
    switch (type) {
      case "flower":
        return "/assets/flower.png"; // Replace with actual image paths
      case "plant":
        return "/assets/plant.png";
      case "pot":
        return "/assets/pot.png";
      default:
        return "/assets/plant.png"; // Default to flower if no valid type
    }
  };

  // Set the canvas bounds after the image is loaded
  useEffect(() => {
    if (image) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.src = image;

      img.onload = () => {
        // Clear the canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the uploaded image onto the canvas
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Set the canvas bounds to restrict draggable elements
        const containerRect = containerRef.current.getBoundingClientRect();
        setCanvasBounds({
          width: containerRect.width,
          height: containerRect.height,
        });
      };
    }
  }, [image]);

  // Save image with draggable elements drawn onto the canvas
  const saveImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = image;

    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Draw each element onto the canvas
      elements.forEach((element) => {
        const elementImg = new Image();
        elementImg.src = element.src;

        elementImg.onload = () => {
          ctx.drawImage(elementImg, element.x, element.y, 100, 100); // Draw element on the canvas
        };
      });

      // Delay saving to ensure all elements are drawn
      setTimeout(() => {
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "edited-photo.png";
        link.click();
      }, 100);
    };
  };

  return (
    <div>
      <ImageUploader onImageUpload={handleImageUpload} />

      {/* Container for the canvas and draggable elements */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "500px",
          height: "500px",
          border: "1px solid black",
        }}
      >
        <canvas
          ref={canvasRef}
          width={500}
          height={500}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
        />

        {image && (
          <>
            {/* Render all draggable elements */}
            {elements.map((element) => (
              <DraggableElement
                key={element.id}
                src={element.src}
                defaultPosition={{ x: element.x, y: element.y }}
                bounds={canvasBounds} // Pass canvas bounds to restrict draggable area
                updatePosition={(newPos) =>
                  setElements((prev) =>
                    prev.map((el) =>
                      el.id === element.id
                        ? { ...el, x: newPos.x, y: newPos.y }
                        : el
                    )
                  )
                }
              />
            ))}
          </>
        )}
      </div>

      <div>
        {/* <button onClick={() => handleAddElement('flower')}>Add Flower</button> */}
        <button onClick={() => handleAddElement("plant")}>Add Plant</button>
        <button onClick={() => handleAddElement("pot")}>Add Pot</button>
      </div>

      <button onClick={saveImage}>Save Image</button>
    </div>
  );
}
