import { FunctionComponent } from "preact";

type State = {
  name: string;
};

const Header: FunctionComponent<State> = ({ name }) => {
  return (
    <header class="header-container">
      <div class="header-content">
        <span class="user-name">{name}</span>
        <a href={"/login"} class="logout-button">
          Logout
        </a>
      </div>
    </header>
  );
};

export default Header;
