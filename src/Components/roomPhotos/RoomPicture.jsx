import React, { useState } from 'react';
import DocumentImg from "../../Assets/img/Document.png";
import Button from '../Button';
import Crosssmall from '../../Assets/img/Cross-small.png';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../context/contextStore';

function RoomPicture() {
  const { state, dispatch } = useFormContext();
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [images, setImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleImages = (e) => {
    const files = e.target.files;

    // Convert FileList to Array and map to URLs
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setDisplayImages((prevImages) => [...prevImages, ...newImages])

    Array.from(e.target.files).forEach(file => {
      setImages((prevImages) => [...prevImages, {img: file, main: false}]);
     })
  };

  const handleDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    setDisplayImages(updatedImages);

    // If the deleted image was the one clicked, reset the clickedIndex
    if (index === clickedIndex) {
      setClickedIndex(-1);
    }
  };

  const handleSubmit = () => {
    if (images.length < 1) {
      setFormErrors({ photos: 'Please upload at least 1 photos.' });
      return;
    }

    console.log("This is the data from the picture components", images);
    navigate('/contact/area-photos');
    dispatch({ type: "SET_ROOM_PICTURE", payload: images });
  };

  return (
    <div>
      <div
        style={{ fontFamily: `'Poppins', sans-serif` }}
        className="w-full md:w-[1000px] h-screen md:h-[600px] pt-5 overflow-x-hidden overflow-y-auto"
      >
        <div className="border-b-[1px] border-slate-300">
          <h3 className="text-[35px] tracking-wider font-[600] text-slate-800">
            Room Photos
          </h3>
          <p className="text-[18px] tracking-wider font-[400] text-slate-600 py-2">
            Upload at least 5 photos of the rooms of your property
          </p>
        </div>
        {/* Upload Your photo */}
        <div className="pt-4">
          <div className="w-full border-[1px] border-dashed py-5 rounded-lg bg-[#fff7f7] border-[#ff5f63]">
            <div className="w-[200px] md:w-[300px] mx-auto cursor-pointer text-center">
              <label htmlFor="photo" className="cursor-pointer">
                <img
                  src={DocumentImg}
                  alt="doc_img"
                  className="w-[40px] mx-auto"
                />
                <p className="text-sm mt-2 font-[600]">
                  <span className="text-[#ff5f63] underline">
                    Click to upload
                  </span>{" "}
                  or Drag and drop photos
                </p>
                <p className="text-center text-sm text-slate-600">
                  maximum size 30 MB
                </p>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  className="w-[0px]"
                  onChange={handleImages}
                  multiple // Allow multiple file selection
                />
              </label>
            </div>
          </div>
        </div>
        <div className="border-y-[1px] border-slate-300  my-2">
          <p className="text-[17px] text-slate-600 font-[400] py-2">
            Choose a photo that will make a good impression, Drag and move
            photo in order of your choice
          </p>
        </div>
        <div>
          <div className="grid grid-rows-1 md:grid-cols-3 gap-x-1 gap-y-2">
            {displayImages.map((img, index) => (
              <div
                key={index}
                onClick={() => {
                  setImages(prevImages => {
                    return prevImages.map((img, i) => {
                      if (i === clickedIndex+1) {
                        return { img, main: true };
                      } else {
                        return { img, main: false };
                      }
                    });
                  });
                  setClickedIndex(index);
                }}
                className={`w-full md:w-[320px] h-[250px] cursor-pointer relative rounded-lg ${
                  index === clickedIndex
                    ? "border-[3px] border-[#ff6a6e]"
                    : "border-none"
                }`}
              >
                <img
                  src={img}
                  alt="random_pic"
                  className="w-full h-full rounded-md"
                />
                <div
                  onClick={() => handleDelete(index)}
                  className="absolute top-2 right-2 bg-[#d1b9ba] cursor-pointer rounded-full p-1"
                >
                  <img
                    src={Crosssmall}
                    alt="cross-sign"
                    className="text-slate-100"
                  />
                </div>
                <div className="absolute top-2 left-2 w-[30px] h-[30px] cursor-pointer bg-[#fff] rounded-full  border-[2px] border-[#ff6a6e]">
                  {index === clickedIndex ? (
                    <div className="bg-[#ff6a6e] mx-auto my-1  rounded-full w-[20px] h-[20px]"></div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
        <div className="mt-2" onClick={handleSubmit}>
          <Button />
        </div>
    
      {formErrors.photos && <p className="text-red-500">{formErrors.photos}</p>}
    </div>
  );
}

export default RoomPicture;
