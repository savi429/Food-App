const ShimmerUi = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="w-[250px] h-65 flex-row md:w-[300px] md:h-80 flex md:flex-col gap-3 dark:bg-slate-700"
        >
          <div class="h-40 bg-gray-300 animate-pulse dark:bg-slate-700"></div>
          <div class="p-4">
            <div class="h-4 w-1/2 bg-gray-300 mb-2 animate-pulse"></div>
            <div class="h-4 w-1/4 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShimmerUi;
