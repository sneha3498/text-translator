import { use } from "react"
import { useState } from "react"
import axios from "axios"
const express = require("express")

function App(){
  const [textInput, setTextInput] = useState("")
  const[selectValue,setSelectValue] = useState("")
  const handleTextTranslator = async () => {
    try{
      const options = {
        method: 'POST',
        url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
        headers: {
          'x-rapidapi-key': '52b0160510mshc6c4dfaa6bf6186p19190cjsn5f22b4482b60',
          'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          from: "${textInput}",
          to: "${selectValue}",
          text:"Hello People"
        }
      };
      const response = await axios.request(options) 
      console.log(response)
      
      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      
      
     } catch(error){
        console.log(error?.data)

      }
    }
  
console.log(textInput)
console.log(selectValue)
    return(
    <div className="h-screen w-screen bg-slate-200 flex">
      <div className="flex items-center justify-center flex-col gap-y-10 text-3xl text-zinc-700">
        <h1 className="text-3xl text-zinc-700">
          Text-Translator
        </h1>
        <div className="flex items-center justify-center flex-col gap-y-5">
          <textarea name="input-text" className="bg-white h-30 w-500 border border-bg-slatr-700 outline-none rounded-lg text-lg " onChange={(e) => setTextInput(e.target.value)}/>
          <textarea name="input-text" className="bg-white h-30 w-500 border border-bg-slatr-700 outline-none rounded-lg text-lg px-5 py-2" />
        </div>
        <div>
          <label htmlFor="options">Converted Into:</label>
          <select className="bg-white px-2 py-1 rounded-lg border border-zinc-700 outline-none cursor-pointer " onChange={(e) => setSelectValue(e.target.value)}>
            <option value="">Select</option>
            <option value="hi">Hindi </option>
            <option value="de">German</option>
            <option></option>
          </select>
        </div>
        <button className="bg-slate-700 text-slate-100mx-auto w-[500px] py-2 rounded-lg cursor-pointer" onClick={handleTextTranslator}>Translate</button>
      </div>

    </div>
  )
}
export default App