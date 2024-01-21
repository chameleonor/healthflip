export const cardStyle = {
  width: "250px",
  minWidth: "250px",
  height: "100%",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
  },
};

export const iconStyle = {
  position: "absolute",
  bottom: 10,
  right: 10,
};

export const icon = {
  opacity: 0.2,
  transition: "background-color 298ms ease-in-out",
  "&:hover": {
    cursor: "pointer",
    opacity: 1,
  },
};
