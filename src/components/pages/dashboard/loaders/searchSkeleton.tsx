export default function SearchSkeleton(){
    return(
         
          <>
          <div className="flex flex-row justify-between items-start sm:items-center gap-4 mt-8">
            <div>
                <div className="w-32 h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
                <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
            </div>
        </div><div className="w-80 h-10 mt-2 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse"></div>
        </>
    )
}