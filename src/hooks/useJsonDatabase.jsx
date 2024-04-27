import { useState } from "react";
import jsonData from "../data/data.json";

const useJsonDatabase = () => {
  const [data, setData] = useState(jsonData);
  const [isLoading, setIsLoading] = useState(false);

  const getObjectData = (objectName) => data[objectName] || [];

  const getDataById = (objectName, id) => {
    const objectData = getObjectData(objectName);

    return objectData.find((item) => item.id === id);
  };

  const addData = (objectName, newData) => {
    setIsLoading(true);

    const updatedData = {
      ...data,
      [objectName]: [...getObjectData(objectName), newData],
    };

    setData(updatedData);
    setIsLoading(false);
  };

  const updateData = (objectName, id, updatedData) => {
    setIsLoading(true);

    const objectData = getObjectData(objectName);
    const updatedList = objectData.map((item) =>
      item.id === id ? updatedData : item
    );

    const updatedDataObject = { ...data, [objectName]: updatedList };

    setData(updatedDataObject);
    setIsLoading(false);
  };

  const deleteData = (objectName, id) => {
    setIsLoading(true);

    const objectData = getObjectData(objectName);
    const updatedList = objectData.filter((item) => item.id !== id);
    const updatedDataObject = { ...data, [objectName]: updatedList };

    setData(updatedDataObject);
    setIsLoading(false);
  };

  return {
    getObjectData,
    getDataById,
    addData,
    updateData,
    deleteData,
    isLoading,
  };
};

export default useJsonDatabase;
