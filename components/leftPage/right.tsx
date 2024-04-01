import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
const Right: React.FC = () => {
  const [promptData, setPromptData] = useState<any[]>([]);

  useEffect(() => {
    //fetching prompts data
    fetch("https://demo6396395.mockable.io/prompts")
      .then((response) => response.json())
      .then((data) => setPromptData(data))
      .catch((error) => console.log("Error Fetching from promptData", error));
  }, []);
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
