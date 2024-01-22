const getInitialData = () => [
  {
    id: 1,
    title: "Belajar Bahasa Inggris",
    body: "Memberdalam bahasa inggris",
    createdAt: "2022-04-14T04:27:34.572Z",
    isDone: false,
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
