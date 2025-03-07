import React from "react";

const SubmitButton = () => {
  return (
    <button type="submit" className="submit-button">
      Regístrarse
      <style jsx>{`
        .submit-button {
          border-radius: 25px;
          background-color: rgba(255, 103, 9, 1);
          border: 1px solid rgba(0, 0, 0, 1);
          min-height: 100px;
          width: 499px;
          max-width: 100%;
          padding: 27px 10px;
          font-size: 32px;
          color: rgba(0, 0, 0, 1);
          font-weight: 700;
          text-align: center;
          cursor: pointer;
          margin: 37px auto;
        }

        @media (max-width: 991px) {
          .submit-button {
            width: 100%;
          }
        }
      `}</style>
    </button>
  );
};

export default SubmitButton;
