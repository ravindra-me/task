import { useParams } from "react-router-dom";
import Setting from "./Setting";
function Common(props) {
  const { tabName } = useParams();
  switch (tabName) {
    case "products":
      return (
        <div className="content-container">
          <h1 className="primary-heading"> {tabName} </h1>
        </div>
      );
    case "customers":
      return (
        <div className="content-container">
          <h1 className="primary-heading"> {tabName} </h1>
        </div>
      );
    case "demoscripts":
      return (
        <div className="content-container">
          <h1 className="primary-heading"> {tabName} </h1>
        </div>
      );
    case "salesteam":
      return (
        <div className="content-container">
          <h1 className="primary-heading"> {tabName} </h1>
        </div>
      );
    case "demos":
      return (
        <div className="content-container">
          <h1 className="primary-heading"> {tabName} </h1>
        </div>
      );
    case "settings":
      return <Setting />;
    default:
      return (
        <div className="content-container">
          <h1 className="primary-heading">Products</h1>
        </div>
      );
  }
}

export default Common;
