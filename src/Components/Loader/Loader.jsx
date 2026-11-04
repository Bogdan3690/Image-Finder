import { CircleLoader } from "react-spinners";

export const Loader = ({ loading }) => {
  return (
    <>
    <CircleLoader area-label="loading-spinner" loading={loading} cssOverride={{display: "block", width: "42px",  margin: "0 auto" }}  color="#6366f1" speedMultiplier={1.45} />
    </>
  );
};
