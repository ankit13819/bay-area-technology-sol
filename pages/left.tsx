import React, { useEffect, useState } from "react";
import Left from "@/components/leftPage/left";
import Right from "@/components/leftPage/right";
import Header from "@/components/header";
import { fetchData } from "./api/api";

interface BoardResponse {
  boards: any[];
}
interface Prompt {
  name: String;
  id: number;
}

type PromptResponse = Prompt[];

const LeftPage: React.FC = () => {
  const [boardData, setBoardData] = useState<any[]>([]);
  const [promptData, setPromptData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    //fetching boards data
    fetchData<BoardResponse>("https://demo6396395.mockable.io/bcf-boards")
      .then((response) => {
        setBoardData(response.data.boards);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error Fetching Data from Board", error);
        setLoading(false);
      });

    //fetching prompts data
    fetchData<PromptResponse>("https://demo6396395.mockable.io/prompts")
      .then((res) => {
        setPromptData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log("Error Fetching from promptData", error));
  }, []);
  return (
    <div>
      <Header />
      {loading ? (
        <div className="loading-spinner-container">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="card-container">
          <Left boardData={boardData} />
          <Right promptData={promptData} />
        </div>
      )}
    </div>
  );
};
export default LeftPage;
