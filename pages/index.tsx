import axios from "axios";

export default function Home() {
  const handleClickButton = async () => {
    try {
      const response = await axios.post("/login", {
        email: "seokiis@naver.com",
        password: "1234",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={handleClickButton}>Click me!</button>;
}
