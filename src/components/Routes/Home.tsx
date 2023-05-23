import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";

const Home: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  useDescriptionTitle("Organize your tasks", "Toutes les tâches");
  return <LayoutRoutes title="Toutes les tâches" tasks={tasks}></LayoutRoutes>;
};

export default Home;
