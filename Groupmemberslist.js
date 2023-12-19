import React from "react";

const Groupmemberslist = ({ members }) => {
  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Groupmemberslist;