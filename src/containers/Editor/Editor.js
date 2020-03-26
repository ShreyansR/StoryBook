import React, { useState, useEffect} from "react";
import "./Editor.css";
import "tui-image-editor/dist/tui-image-editor.css";
import ImageEditor from "@toast-ui/react-image-editor";
import Button from "react-bootstrap/Button";
import {fstore, fireB} from "../../firebase-config"
import { Redirect } from 'react-router-dom'


const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");
const download = require("downloadjs");

const myTheme = {
  "menu.backgroundColor": "white",
  "common.backgroundColor": "#151515",
  "downloadButton.backgroundColor": "white",
  "downloadButton.borderColor": "white",
  "downloadButton.color": "black",
  "menu.normalIcon.path": icond,
  "menu.activeIcon.path": iconb,
  "menu.disabledIcon.path": icona,
  "menu.hoverIcon.path": iconc,
};

function Editor(props) {
  const [imageSrc, setImageSrc] = useState(props.location.state.data);
  const imageID = props.location.state.id;
  const storyID = props.location.state.sId;
  const isEditing = props.location.state.editing;
  const [redirect,setRedirect] = useState(false);
  const imageEditor = React.createRef();

  const saveImageToDisk = () => {
    const imageEditorInst = imageEditor.current.imageEditorInst;
    const data = imageEditorInst.toDataURL();
    if (data) {
      const mimeType = data.split(";")[0];
      const extension = data.split(";")[0].split("/")[1];

      var today = new Date(); 
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + '  ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

      if(isEditing){
        var docRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(storyID).collection("Pages").doc(imageID);
        docRef.set({
          url: data,
          default: false,
          date: date
        })
      }
      else{
        var docRef = fstore.collection("Users").doc(fireB.auth().currentUser.uid).collection("Stories").doc(storyID).collection("Pages").doc();
        docRef.set({
          url: data,
          default: false,
          date: date
        })
      }
      setRedirect(true);
    };
  }

  
  if (redirect === true) {
    return <Redirect to = {{
      pathname: '/Pages',
      state: {
        storyId: storyID
      }
    }} 
      />
  }

  return (
    <div className="home-page">
      <div className="center">
        <h1>Photo Editor</h1>
        <Button className='button' onClick={saveImageToDisk}>Save Image to Database</Button>
      </div>
      <ImageEditor
        includeUI={{
          loadImage: {
            path: imageSrc,
            name: "image",
          },
          theme: myTheme,
          menu: ["crop", "flip", "rotate", "draw", "shape", "text", "filter", "mask", "icon"],
          initMenu: "",
          uiSize: {
            height: `calc(100vh - 160px)`,
          },
          menuBarPosition: "left",
        }}
        cssMaxHeight={window.innerHeight}
        cssMaxWidth={window.innerWidth}
        selectionStyle={{
          cornerSize: 20,
          rotatingPointOffset: 70,
        }}
        usageStatistics={true}
        ref={imageEditor}
      />
    </div>
  );
}
export default Editor;