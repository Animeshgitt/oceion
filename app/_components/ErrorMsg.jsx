import React from "react";

const ErrorMsg = ({ msg }) => msg ? (
    <p className="text-red-500 text-[10px] font-bold mt-1 animate-pulse uppercase">{msg}</p>
  ) : null;

  export default ErrorMsg;