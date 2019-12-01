import React from "react";

const Dashboard = () => {
  return (
    <div className="columns">
      <div className="column">
        <div className="notification is-info">
          <h1 className="title is-size-4">Bulma?</h1>
          <p className="is-size-5">
            Bulma is a modern CSS framework from @jgthms, based on Flexbox.
            Using Bulma,
          </p>
        </div>
      </div>
      <div className="column">
        <div className="notification is-primary">
          <h1 className="title is-size-4">Bulma?</h1>
          <p className="is-size-5">
            Bulma is a modern CSS framework from @jgthms, based on Flexbox.
            Using Bulma
          </p>
        </div>
      </div>
      <div className="column">
        <div className="notification is-warning">
          <h1 className="title is-size-4">Bulma?</h1>
          <p className="is-size-5">
            Bulma is a modern CSS framework from @jgthms, based on Flexbox.
            Using Bulma\
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
