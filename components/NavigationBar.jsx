import React from "react";
import {
  ChatBubbleBottomCenterIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

function NavigationBar({ authAction, onBackHome, authType }) {
  return (
    <div className="fixed bg-white p-3 top-0 z-10 w-full">
      <div className="flex items-center ">
        <button
          type="button"
          className="flex items-center"
          onClick={onBackHome}
        >
          <ChatBubbleBottomCenterIcon className="h-8 w-8 mr-2 text-purple-600" />
          <h1 className="text-3xl font-bold">React Forum</h1>
        </button>

        <button
          type="button"
          onClick={authAction}
          className="ml-auto border-2 border-purple-600 rounded-md px-4 font-semibold text-purple-600 text-lg"
        >
          <p>{authType}</p>
        </button>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  authAction: PropTypes.func.isRequired,
  onBackHome: PropTypes.func.isRequired,
  authType: PropTypes.string.isRequired,
};

export default NavigationBar;
