import mulumba from '/images/mulumba.png';

export default function ResponsiveCard({ image, title, year, monthly_per, monthly_amnt, monthly_per_text, monthly_amnt_text, url }) {
  // Using a placeholder image since mulumba wasn't provided

  return (
    <a href={url} target='_blank'>
      <div className="font-Grotesk w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 sm:p-5 sticky top-20">
      <div className="bg-[#191919] w-full rounded-3xl sm:rounded-4xl overflow-hidden">
        {/* Image Container */}
        <div className="h-64 sm:h-72 md:h-80 lg:h-96 border-8 sm:border-10 md:border-12 lg:border-14 border-[#191919] overflow-hidden rounded-3xl sm:rounded-4xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transform transition-transform duration-200 hover:scale-110"
          />
        </div>

        {/* Content Container */}
        <div className="text-[#F8FAFC] p-4 sm:p-5 md:p-6">
          {/* Title */}
          <h2 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-100 leading-tight mb-2 sm:mb-3">
            {title}
          </h2>

          {/* Year */}
          <h3 className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6">{year}</h3>

          {/* Statistics */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
            <div className="flex-1">
              <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl text-white">{monthly_per}</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                {monthly_per_text}
              </p>
            </div>
            <div className="flex-1">
              <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl text-white">{monthly_amnt}</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                {monthly_amnt_text}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:w-[40rem] lg:h-10 lg:relative">
          <div
            className="absolute inset-x-15 lg:inset-x-10 top-0 items-center bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-3/9 lg:w-3/4 blur-sm" 
          />
          <div
            className="absolute inset-x-15 lg:inset-x-10 top-0 items-center bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/9 lg:w-3/4" 
          />
          <div
            className="absolute inset-x-20 lg:inset-x-45 items-center top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/4 lg:w-1/4 blur-sm" 
          />
          <div
            className="absolute inset-x-20 lg:inset-x-45 items-center top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4 lg:w-1/4" 
          />
      </div> */}
    </div>
    </a>

  )
}
