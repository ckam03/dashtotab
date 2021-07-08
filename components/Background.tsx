import React, { useState } from "react";


let reader: any;
const Background = () => {
  const [value, setValue] = useState<string>("Unsplash");
  const [background, setBackground] = useState<File | string>();

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

 
  const handleBackgroundChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files;
    if (!file) {

      reader = new FileReader();
      reader.onloadend = () => {
        setBackground(reader.result)
      }
      
      reader.readAsDataURL(file)
  
    }
    console.log(background)
  }
  return (
    <div className="flex flex-col">
      <select
        className="w-52 border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-lg shadow-sm"
        name="backgrounds"
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      >
        <option value="Unsplash">Unsplash</option>
        <option value="upload">Upload Images</option>
      </select>
      {value === "Unsplash" ? (
        <div className="">
          
        </div>
      ) : (
        <input className="w-52 text-sm pt-2" id="backgroundInput" accept="image/*" onChange={handleBackgroundChange} type="file" />
      )}
    </div>
  );
};

export default Background;
