import "./Supporters.css";
import { SupporterData } from "../Components/SidebarData";

export default function Supporters() {
  return (
    <div className="container">
      <ul>
        {SupporterData.map((sup, key) => {
          return (
            <div className="card">
              <li key={key}>
                <img className="logo-image" src={sup.logo} alt={sup.title} />
                <h1>{sup.title}</h1>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
