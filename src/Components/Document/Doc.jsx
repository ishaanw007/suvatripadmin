import React, { useState } from "react";
import DocumnetImg from "../../Assets/img/Document.png";
import PdfIcon from "../../Assets/icon/PDF_file_icon.svg";
import DocIcon from "../../Assets/icon/PDF_file_icon.svg";
import Button from "../Button";
import { useFormContext } from "../../context/contextStore";

function Doc() {
  const { state, dispatch } = useFormContext();
  const [selectedDocument, setSelectedDocument] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedDoc, setUploadedDoc] = useState(null);
  const [warning, setWarning] = useState('');

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedDoc(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setUploadedDoc(null);
    }
  };

  async function postData(formData) {
    try {
      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      console.log(formData, 'this is form data');
      const response = await fetch('http://localhost:8000/hotel/create-hotel', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during network request:', error);
    }
  }





  function isObjectEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
        return false; // If any property is not empty, return false
      }
    }
    return true; // If all properties are empty, return true
  }
  
  function handleUpload() {
    // Check if any required field is empty
    if (
      isObjectEmpty(state.contactDetails) ||
      isObjectEmpty(state.basicDetails) ||
      isObjectEmpty(state.picture) ||
      isObjectEmpty(state.roomPicture) ||
      isObjectEmpty(state.areaPicture) ||
      isObjectEmpty(state.facility) ||
      isObjectEmpty(state.roomSetup) ||
      isObjectEmpty(state.ratePlan) ||
      isObjectEmpty(state.hotelRules) ||
      isObjectEmpty(state.paymentPolicy) ||
      isObjectEmpty(state.parking) ||
      isObjectEmpty(state.transportation) ||
      !selectedDocument ||
      !selectedFile
    ) {
      setWarning('Please fill in all required fields before submitting.');
      return;
    }
  
    const formData = new FormData();
    formData.append('documentType', selectedDocument);
    formData.append('file', selectedFile);
  
    // Append other form data
    formData.append('contactDetails', JSON.stringify(state.contactDetails));
    formData.append('basicDetails', JSON.stringify(state.basicDetails));
    for (let i = 0; i < state.picture.length; i++) {
      formData.append('picture', state.picture[i]);
    }
    for (let i = 0; i < state.roomPicture.length; i++) {
      formData.append('roomPicture', state.roomPicture[i]);
    }
    for (let i = 0; i < state.areaPicture.length; i++) {
      formData.append('areaPicture', state.areaPicture[i]);
    }
    formData.append('facility', JSON.stringify(state.facility));
    formData.append('roomSetup', JSON.stringify(state.roomSetup));
    formData.append('ratePlan', JSON.stringify(state.ratePlan));
    formData.append('hotelRules', JSON.stringify(state.hotelRules));
    formData.append('paymentPolicy', JSON.stringify(state.paymentPolicy));
    formData.append('parking', JSON.stringify(state.parking));
    formData.append('transportation', JSON.stringify(state.transportation));
    formData.append('email', 'xyz@gmail.com');
  
    postData(formData);
  }
  

const renderFileTypeIcon = () => {
  if (selectedFile) {
    switch (true) {
      case selectedFile.type.startsWith("image/"):
        return (
          <img
            src={uploadedDoc}
            alt="uploaded_img"
            className="w-[100%] max-h-[300px] mx-auto mt-2"
          />
        );
      case selectedFile.name.endsWith(".pdf"):
        return (
          <img src={PdfIcon} alt="pdf_icon" className="w-[40px] mx-auto" />
        );
      case selectedFile.name.endsWith(".doc") ||
        selectedFile.name.endsWith(".docx"):
        return (
          <img src={DocIcon} alt="doc_icon" className="w-[40px] mx-auto" />
        );
      // Add cases for other file types if needed
      default:
        return null;
    }
  }
  return null;
};

  return (
    <div
      style={{ fontFamily: `'Poppins', sans-serif` }}
      className="w-full md:w-[1000px] pt-5"
    >
      <div className="border-b-[1px] border-slate-300 py-2">
        <h3 className="text-[35px] tracking-wider font-[600] text-slate-800">
          Document
        </h3>
        <p className="text-[18px] tracking-wider font-[400] text-slate-600 py-2">
          Add your contact information
        </p>
      </div>
      <div className="border-b-[1px] border-slate-300 py-1">
        <p className="text-[16px] font-[600] my-2 text-slate-700 uppercase pt-1">
          Attach Document
        </p>
        <input
          type="radio"
          id="pan"
          name="document"
          value="Pan"
          checked={selectedDocument === "Pan"}
          onChange={handleDocumentChange}
        />
        <label htmlFor="pan" className="mx-1 my-1 text-slate-500">
          Pan
        </label>
        <br />
        <input
          type="radio"
          id="card"
          name="document"
          value="Card"
          checked={selectedDocument === "Card"}
          onChange={handleDocumentChange}
        />
        <label htmlFor="card" className="mx-1 my-1 text-slate-500">
          Card
        </label>
        <br />
      </div>

      <div className="py-4">
        <div className="w-full border-[1px] border-dashed py-5 rounded-lg bg-[#fff7f7] border-[#ff5f63]">
          <div className="w-full md:w-[300px] mx-auto">
            <label htmlFor="document">
              {uploadedDoc ? (
                // Display the uploaded document
                <div>
                  <p className="text-sm mt-2 font-[600]">Uploaded Document:</p>
                  {renderFileTypeIcon()}
                </div>
              ) : (
                // Display the upload area
                <div>
                  <img
                    src={DocumnetImg}
                    alt="doc_img"
                    className="w-[40px] mx-auto"
                  />
                  <p className="text-sm mt-2 font-[600]">
                    <span className="text-[#ff5f63] underline">
                      Click to upload
                    </span>{" "}
                    or Drag and drop document
                  </p>
                  <p className="text-center text-sm text-slate-600">
                    maximum size 30 MB
                  </p>
                  <input
                    type="file"
                    name="document"
                    id="document"
                    accept=".pdf, .doc, .docx, image/*"
                    className="w-[0px]"
                    onChange={handleFileChange}
                  />
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
      {/* Warning Message */}

      {warning && (

        <div className="text-red-500 text-sm font-bold">{warning}</div>

      )}
      <div className="mt-3" onClick={handleUpload}>
      <div className='w-full text-center md:w-auto float-right'>
            <button type="button" className='bg-[#ff5f63] w-[250px] py-2 rounded-md text-white'>Submit </button>
        </div>
      </div>
    </div>
  );
}

export default Doc;
