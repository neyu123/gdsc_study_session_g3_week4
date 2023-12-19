import React from "react";
import Groupmemberslist from "./Groupmemberslist";

const App = () => {
  const groupMembers = [
    { name: "YEABSIRA" },
    { name: "WONDIFRAW" },
    { name: "SAMUEL" },
    { name: "SAMSON" },
    { name: "SAMRAWIT" },
    { name: "RUTH" },
    { name: "RAHEL" },
    { name: "NATNAEL" },
    { name: "NETSANET" },
    { name: "NIYAT" },
  ];

  return (
    <div>
      <h1>My Group</h1>
      <Groupmemberslist members={groupMembers} />
    </div>
  );
};

export default App;