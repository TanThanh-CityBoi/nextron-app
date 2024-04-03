const Carousel = () => {
    return (
        <div className="snap-x mx-auto snap-mandatory h-80 flex w-96 small-scrollbar overflow-x-scroll overflow-y-hidden">
            <div className="snap-start bg-primary-200 w-96 flex-shrink-0 h-80 flex items-center justify-center text-8xl">
                1
            </div>
            <div className="snap-start bg-red-200 w-96 flex-shrink-0 h-80 flex items-center justify-center text-8xl">
                2
            </div>
        </div>
    );
};

export default Carousel;
