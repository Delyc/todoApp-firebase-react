export const validateEmail = (text) => {
    if (text.includes("@")) {
      return true;
    } else {
      return false;
    }
  };
  
  export const validatePassword = (text) => {
    if (text.length > 7) {
      return true;
    } else {
      return false;
    }
  };
  
  export const validateRequired = (text) => {
    if (text.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  export const isNewTaskFormValid = (newTaskIsValid) => {
    return newTaskIsValid.author &&
      newTaskIsValid.name &&
      newTaskIsValid.description &&
      newTaskIsValid.dueDate &&
      newTaskIsValid.priority
      ? true
      : false;
  };