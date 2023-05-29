import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("Tâches d'aujourd'hui", "Tâches d'aujourd'hui");

  return (
    <LayoutRoutes title="Tâches d'aujourd'hui" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
