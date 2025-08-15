module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        skybg: "#EAF5FF",
        skyTop: "#F2FAFF",
        bubbleBlue: "#DCEBFF",
        bubbleGray: "#EFF2F6",
        chatFooter: "#EAF4FF"
      },
      boxShadow: {
        card: "0 8px 30px rgba(62, 104, 150, 0.15)",
        chat: "0 24px 60px rgba(0,0,0,0.18)",
        soft: "0 10px 30px rgba(0,0,0,0.12)"
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px"
      }
    },
  },
  plugins: [],
};
