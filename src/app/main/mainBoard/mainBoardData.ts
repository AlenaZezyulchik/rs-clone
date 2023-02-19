export interface IMainDataType {
  screen: string,
  title: string,
  descriptionEn: string,
  descriptionRu: string,
  class: string,
}

export const mainData = [
  {
    screen: "https://img.freepik.com/premium-photo/young-female-student-making-notes-in-copybook-while-looking-through-online-data_274679-38256.jpg",
    title: "Write a note",
    descriptionEn: "Write notes and save all important information along with a shared app",
    descriptionRu: "Пишите заметки и сохраняйте всю важную информацию вместе c нашим приложением",
    class: "board__note"
  },
  {
    screen: "https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?format=jpg&width=960",
    title: "Create a to-do list",
    descriptionEn: "Create a to-do list, a shopping list and you will never forget about the important",
    descriptionRu: "Создайте список дел, список покупок и вы никогда не забудете о важном",
    class: "board__todo"
  },
  {
    screen: "https://zannakeithley.com/wp-content/uploads/2022/03/Vision-Board-2-min-576x1024.png",
    title: "Create my wish board",
    descriptionEn: "Dream, visualize and create a wish board according to your goals",
    descriptionRu: "Мечтайте, визуализируйте и создавайте доску желаний в соответствии c вашими целями",
    class: "board__board"
  },
  {
    screen: "https://i.pinimg.com/474x/a3/c6/18/a3c6185a9c02b4a5010e16f4b8c4048b.jpg",
    title: "listen to music",
    descriptionEn: "Choose and listen to your favorite tracks with the Evernote app",
    descriptionRu: "Выбирайте и слушайте любимые треки c помощью приложения Evernote",
    class: "board__music"
  }
];