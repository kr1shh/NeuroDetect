import "./Analyze.scss";
import { useState, useRef } from "react";

const Analyze = () => {
  const [isdragging, setIsDragging] = useState(false);
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files;

    if (file.length === 0) return;
    for (let i = 0; i < file.length; i++) {
      setImage({
        name: file[i].name,
        url: URL.createObjectURL(file[i]),
      });
    }
  };

  const handleDelete = () => {
    setImage(null);
  };

  console.log("image : ", image);

  return (
    <>
      <div className="_analyze">
        <div className="upload" style={image ? { border: "none" } : {}}>
          {image ? (
            <div className="image-container">
              <button onClick={handleDelete}>Delete</button>
              <img src={image.url} alt={image.name} />
            </div>
          ) : isdragging ? (
            <span>Drop Image Here</span>
          ) : (
            <p>
              Drag and drop your image here or &nbsp;
              <span
                style={{ cursor: "pointer" }}
                role="button"
                onClick={selectFile}
              >
                Browse
              </span>
            </p>
          )}

          <input
            type="file"
            ref={fileInputRef}
            accept="image/jpg, image/jpeg, image/png"
            onChange={handleFileChange}
          />
        </div>
        <button onClick="">Analyze</button>
      </div>
    </>
  );
};

export default Analyze;
