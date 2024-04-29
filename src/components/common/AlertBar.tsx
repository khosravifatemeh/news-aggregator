import { Alert } from "@mui/material";

const AlertBar = ({ message, severity, onClose }) => {
  return (
    <Alert severity={severity} onClose={() => onClose}>
      {message}
    </Alert>
  );
};

export default AlertBar;
