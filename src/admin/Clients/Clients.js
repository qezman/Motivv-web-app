import { FaBars } from "react-icons/fa";
import SideBar from "../SideBar";
import SearchCont from "../SearchCont";

const ClientsPage = () => {
  return (
    <section className="container-component">
    
      <SideBar />

      <article className="right-section">
        <SearchCont />
      </article>
    </section>
  );
};
export default ClientsPage;
