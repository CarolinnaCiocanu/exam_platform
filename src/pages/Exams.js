import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Exams() {
  const user = useSelector((state) => state.AuthReducer.user);
  const navigate = useNavigate();
}
