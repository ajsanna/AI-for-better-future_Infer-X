import {useEffect, useRef} from "react"
import * as images from "../assets/data/images";
import "../assets/css/LiveView.css";

export default function LiveView() {
  const inputFileRef = useRef(null); 
  const imgViewRef = useRef(null);

  useEffect(() => {
      const fileInput = inputFileRef.current;
      
      if (fileInput) {
        fileInput.addEventListener("change", uploadImage);
      }
  
      return () => {
        if (fileInput) {
          fileInput.removeEventListener("change", uploadImage);
        }
      };
    }, []);
  
    function uploadImage(event) {
      const file = event.target.files[0];
      if (!file) return;
    
      if (imgViewRef.current) {
        const imgLink = URL.createObjectURL(file);
        imgViewRef.current.style.backgroundImage = `url(${imgLink})`;
      }
    
      const formData = new FormData();
      formData.append("file", file); 
    
      console.log("Uploading file:", file.name);
    
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData, 
      })
        .then((response) => response.json())
        .then((data) => console.log("Upload successful:", data))
        .catch((error) => console.error("Error uploading file:", error));
    }

  return (
    <>
      <div className="live_view">
        <div className='weld_info_card' style={{paddingTop: '0'}}>
          <label htmlFor="input-file" id="drop-area">
            <input type="file" accept="image/*" id="input-file" hidden ref={inputFileRef} />
            <div
              id="img-view"
              ref={imgViewRef}
              style={{
                backgroundImage: `url(${images.steel_welding})`,
              }}>
              <p className="drag_drop">Drag and drop or click here to upload image</p>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}