import React from "react";

const Loader = () => {
  return (
    <div class="ui segment">
      <div class="ui active transition visible inverted dimmer">
        <div class="content">
          <div class="ui inverted text loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
