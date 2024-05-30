import React from "react";
import "./Spinner.css";
import { PuffLoader } from "react-spinners";

interface Props {
  isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
  return (
    <>
      <div id="loading-spinner">
        <PuffLoader color="#36d7b7" loading={isLoading} size={35} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    </>
  );
};

export default Spinner;
