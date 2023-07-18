import React from "react";
import {
  ChatBubbleBottomCenterIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

function NavigationBar({ logout, onBackHome }) {
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
          onClick={logout}
          className="ml-auto border-2 border-purple-600 rounded-md px-2 font-semibold text-purple-600 text-lg"
        >
          <div className="flex items-center">
            <ArrowRightOnRectangleIcon className="h-6 w-6 mr-2" />
            <p>Logout</p>
          </div>
        </button>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
  onBackHome: PropTypes.func.isRequired,
};

export default NavigationBar;
