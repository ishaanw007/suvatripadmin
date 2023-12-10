import React, { useState } from "react";
import DocumnetImg from "../../Assets/img/Document.png";
import Button from "../Button";
import { useFormContext } from "../../context/contextStore";

function Doc() {
  const { state, dispatch } = useFormContext();
  const [selectedDocument, setSelectedDocument] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDocumentChange = (event) => {
    setSelectedDocument(event.target.value);
  };

  const handleFileChange = (event) => {
    // Assuming you only want to handle a single file
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  async function submitFormDatatoServer(formData) {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const response = await fetch("http://localhost:5000/api/post", {
        method: "POST",
        body: formData,
        config,
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpload = () => {
    const newdata = {
      document: selectedDocument,
      file: selectedFile,
    };
    console.log("This data from the document componets", newdata);
    dispatch({ type: "SET_DOCUMENT", payload: newdata });

    // post request to server post all form data
    const formData = new FormData();
    formData.append("contactDetails", JSON.stringify(state.contactDetails));
    formData.append("basicDetails", JSON.stringify(state.basicDetails));
    formData.append("picture", JSON.stringify(state.picture));
    formData.append("facility", JSON.stringify(state.facility));
    formData.append("roomSetup", JSON.stringify(state.roomSetup));
    formData.append("ratePlan", JSON.stringify(state.ratePlan));
    formData.append("hotelRules", JSON.stringify(state.hotelRules));
    formData.append("paymentPolicy", JSON.stringify(state.paymentPolicy));
    formData.append("parking", JSON.stringify(state.parking));
    formData.append("transportation", JSON.stringify(state.transportation));
    formData.append("document", JSON.stringify(state.document));
    // function to post data to server
    console.log("This is the data from the document componets", formData);
    submitFormDatatoServer(formData);
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
                className="w-[0px]"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="mt-3" onClick={handleUpload}>
        <Button />
      </div>
    </div>
  );
}

export default Doc;
