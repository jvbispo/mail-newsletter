import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./styles.scss";

const StoriesListPage = () => {


  return (
    <div className="container">
      <h1 className="title">Created stories</h1>

      <ul className="story-list">
        <li className="story-card">
          <Link to={`/admin/story/${1}`}>
            <span>
              <strong>Id:</strong>
              01
            </span>
            <span>
              <strong>Published:</strong>false
            </span>
            <span>
              <strong>Scheduled date:</strong>01/01/2021
            </span>
            <span>
              <strong>CreatedAt:</strong>01/01/2021
            </span>
          </Link>
        </li>

        <li className="story-card">
          <Link to={`/admin/story/${1}`}>
            <span>
              <strong>Id:</strong>
              01
            </span>
            <span>
              <strong>Published:</strong>false
            </span>
            <span>
              <strong>Scheduled date:</strong>01/01/2021
            </span>
            <span>
              <strong>CreatedAt:</strong>01/01/2021
            </span>
          </Link>
        </li>

        <li className="story-card">
          <Link to={`/admin/story/${1}`}>
            <span>
              <strong>Id:</strong>
              01
            </span>
            <span>
              <strong>Published:</strong>false
            </span>
            <span>
              <strong>Scheduled date:</strong>01/01/2021
            </span>
            <span>
              <strong>CreatedAt:</strong>01/01/2021
            </span>
          </Link>
        </li>
      </ul>

      <Link type="button" to="admin/story/new" className="add-button">
        <Add />
      </Link>
    </div>
  );
};

export { StoriesListPage };
