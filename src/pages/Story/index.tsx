import "./styles.scss";
import { Editor } from "@tinymce/tinymce-react";
import { ArrowBack } from "@material-ui/icons";
import { Link } from "react-router-dom";

const StoryPage = () => {
  return (
    <div className="container">
      <section className="action-section">
        <Link to='/admin/stories' id="back-button"><ArrowBack/> </Link>
        <button id="save-button">SAVE</button>
      </section>

      <section className="content-section">
        <div className="title-div">
          <h1>Create/Edit story</h1>
          <div className="id-div">
            <strong>ID: 32</strong>
          </div>
        </div>

        <div className="schedule-input-div">
          <span>Select email sending date:</span>
          <input type="date" />
        </div>
        <div className="rich-text-div">
          <span>Mail text:</span>
          <Editor
            apiKey="4aisem7wvexp6xcafgqjx7uxx6inb6qmu4m7p7701e1ln2qw"
            initialValue="<p>Initial content</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image",
                "charmap print preview anchor help",
                "searchreplace visualblocks code",
                "insertdatetime media table paste wordcount",
              ],
              toolbar: `undo redo | formatselect | bold italic | \
                alignleft aligncenter alignright | \
                bullist numlist outdent indent | help`,
            }}

            // onChange={this.handleEditorChange}
          />
        </div>
      </section>
    </div>
  );
};

export { StoryPage };
