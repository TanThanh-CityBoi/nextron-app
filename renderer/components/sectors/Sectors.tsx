const Sectors = () => {
   const sectors = [
      {
         name: "Nước Tinh khiết",
         thumbnail: "https://sonhawater.com/wp-content/uploads/2020/01/nuoc-aquafina.jpg",
      },
      {
         name: "Nước Có Gas",
         thumbnail:
            "https://cafebiz.cafebizcdn.vn/zoom/700_438/2016/coca-cola-commercial-photography-1463360698380-crop-1463360708561.jpg",
      },
      {
         name: "Sản Phẩm Thiên Nhiên",
         thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbK0Kc97KlOULff3-iG2M7gURK-vxE5DYEGg&usqp=CAU",
      },
   ];

   return (
      <div className="flex gap-5 p-4">
         {sectors.map((item, id) => {
            return (
               <button
                  key={id}
                  className="flex items-center rounded-full bg-primary-200 shadow-lg p-1"
               >
                  <div className="relative rounded-full aspect-square min-h-10 min-w-10">
                     <img
                        className="absolute object-cover rounded-full h-full w-full"
                        src={item.thumbnail}
                        alt="sector.img"
                     ></img>
                  </div>
                  <div className="flex items-center ps-2 pe-3">
                     <h5 className="line-clamp-1 font-semibold">{item.name}</h5>
                  </div>
               </button>
            );
         })}
      </div>
   );
};

export default Sectors;
