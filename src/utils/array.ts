export const toggleObjectByAttribute = <T extends { [key: string]: any }>(array: T[], key:string, value: any): T[] => {
    const updatedArray = [...array];
  
    const existingObjectIndex = updatedArray.findIndex((obj) => obj[key] === value);
  
    if (existingObjectIndex !== -1) {
      updatedArray.splice(existingObjectIndex, 1);
    } else {
      const newObject: T = { [key]: value } as T;
      updatedArray.push(newObject);
    }
  
    return updatedArray;
  };
  