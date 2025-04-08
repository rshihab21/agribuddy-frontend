import { useNavigate } from "react-router-dom";

const AgriLearningCards = ({ agroTip }) => {
  const { image_url, category, date, title, id } = agroTip;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/agrilearningdetails/${id}`)}
      className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
    >
      <img
        className="w-full h-60 object-cover"
        src={image_url}
        alt="Trendy Container Plants"
      />
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="text-sm text-green-600 font-semibold uppercase">
            <p>{category}</p>
          </div>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      </div>
    </div>
  );
};

export default AgriLearningCards;
