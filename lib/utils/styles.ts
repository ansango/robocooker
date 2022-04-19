const generateRandomGradient = () => {
  const colors = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-blue-500 to-purple-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
    "bg-gradient-to-r from-pink-500 to-red-500",
    "bg-gradient-to-r from-red-500 to-orange-500",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export { generateRandomGradient };
