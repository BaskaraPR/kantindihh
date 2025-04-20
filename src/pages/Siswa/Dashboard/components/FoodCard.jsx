function FoodCard({ image, title, description, price }) {
  return (
    <div className="w-[250px] bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-[250px] object-cover" />
      <div className="p-3 flex flex-col gap-1">
        <h3 className="font-bold text-base text-black">{title}</h3>
        <p className="text-sm text-gray-600 leading-snug line-clamp-2">
          {description}
        </p>
        <p className="font-bold text-sm text-black">Rp. {price}</p>
      </div>
    </div>
  );
}
export default FoodCard;
