import React from "react";
import Left from "@/components/leftPage/left";
import Right from "@/components/leftPage/right";
import Header from "@/components/header";

const LeftPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="card-container">
        <Left />
        <Right />
      </div>
    </div>
  );
};
export default LeftPage;
