import http from "../http-imgupload";

class FileDeleteService {
    delete(file, onDeleteProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onDeleteProgress,
    });
  }

  deleteFiles() {
    return http.delete("/files");
  }
}

export default new FileDeleteService();