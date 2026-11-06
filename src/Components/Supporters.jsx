import "./Supporters.css";
import { SupporterData } from "../Components/SidebarData";

const SupporterCard = ({ title, logo }) => (
  <li className="supporter-card">
    <div className="supporter-logo-box">
      <img className="supporter-logo" src={logo} alt={`${title} logo`} />
    </div>
    <p className="supporter-name">{title}</p>
  </li>
);

export default function Supporters() {
  return (
    <section className="supporters-container">
      <h1>Thank you</h1>
      <p className="supporters-intro">
        Stonehaven Amateur Swimming Club are delighted to thank the following
        companies for their generous donations and support. These contributions
        make a real difference to the quality of programme we can provide to our
        swimmers, and we are incredibly grateful for the support.
      </p>
      <ul className="supporters-grid">
        {SupporterData.map((supporter, i) => (
          <SupporterCard key={i} {...supporter} />
        ))}
      </ul>
    </section>
  );
}
