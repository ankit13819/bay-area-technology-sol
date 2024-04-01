import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
const Right: React.FC = ({ promptData }) => {
  useEffect(() => {}, []);
  return (
    <div className="main-card">
      {promptData.map((item) => (
        <Card className="card" key={item.id}>
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default Right;
