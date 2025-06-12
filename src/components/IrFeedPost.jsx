import { useNavigate } from "react-router-dom";
function IrFeedPost() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/FeedPost")}>Ver Diarios</button>;
}
export default IrFeedPost;
