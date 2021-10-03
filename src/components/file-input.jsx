import React from "react";

const FileInput = React.forwardRef(
  ({ id = "file-id", children, ...other }, ref) => {
    return (
      <label style={{ cursor: "pointer" }} htmlFor={id}>
        <input
          id={id}
          type="file"
          style={{ display: "none" }}
          ref={ref}
          {...other}
        />
        {children}
      </label>
    );
  }
);

export default FileInput;
