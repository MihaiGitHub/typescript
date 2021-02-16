import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <h1>Guest List!</h1>
      <GuestList />
      <hr />
      <h1>User Search!</h1>
      <UserSearch />
      <hr />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
