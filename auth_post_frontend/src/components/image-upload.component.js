import React, { Component } from "react";
import UploadService from "../services/file-upload.service";
//import ImageUploader from "react-images-upload";



export default class UploadImages extends Component {
  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      currentFile: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",

      imageInfos: [],
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        imageInfos: response.data,
      });
    });
  }

  selectFile(event) {
    this.setState({
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: ""
    });
  }

  upload() {
    this.setState({
      progress: 0,
    });

    UploadService.upload(this.state.currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          imageInfos: files.data,
        });
      })
      .catch((err) => {
        this.setState({
          progress: 0,
          message: "Could not upload the image!",
          currentFile: undefined,
        });
      });
  }

  triggerDelete(img, index){
    if(window.confirm("Are you sure you want to delete this task?")){
       let files = [...this.img.files]
       files.splice(index, 1);
       this.setState({files: files})}
    }

  render() {
    const {
      currentFile,
      previewImage,
      progress,
      message,
      imageInfos,
    } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" accept="image/*" onChange={this.selectFile} />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!currentFile}
              onClick={this.upload}
            >
              Upload
            </button>
          </div>
        </div>

        {currentFile && (
          <div className="progress my-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}

        {message && (
          <div className="alert alert-secondary mt-3" role="alert">
            {message}
          </div> 
        )}

        <div className="card mt-3">
          <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {imageInfos &&
              imageInfos.map((img, index) => (
                <li className="list-group-item" key={index}><h4>Name & Url</h4> 
                <a href={img.url}> [{img.name}, <br/>{img.url}]</a>
        <br/>
				<br/>
          
          <button onClick={()=>{this.triggerDelete(this.deleteImg, index)}
             }> Delete </button>
        
	      <br/>
        <br/>

         <button
              className="btn btn-success btn-sm"
              onClick={(e)=>{
                this.deleteItem = item => () => {
                  const filter = getter => val => getter(val) !== item.imageInfos
                  this.setState({
                    res: this.state.res.filter(filter(({imageInfos})=>imageInfos)),
                    selectedItems: this.state.selectedItems.filter(
                      filter(imageInfos=>imageInfos)
                    )
                  })
                }
             }}>
              delete
            </button>
		
                </li>
              ))}
          </ul>
          
        </div>


      </div>
    );
  }
 }

/*
<button
              className="btn btn-success btn-sm"
              onClick={(e)=>{
                e.preventDefault();
                this.triggerDelete(img, index);
             }}>
              delete
            </button>
            
              <button className="btn btn-danger mr-2" onClick={()=>{                this.confirmDeletion(this.deleteRecord, index)}
             }> Delete </button>*/

               /*<ImageUploader
              withIcon={false}
              withPreview={true}
              label=""
              buttonText="Upload Images"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            />*/