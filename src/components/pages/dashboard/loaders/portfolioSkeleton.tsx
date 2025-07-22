export default function PortfolioSkeleton(){
    return(
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <div className="w-48 h-8 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="w-24 h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
            <div className="w-32 h-10 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
          <div>
            <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
            <div className="w-16 h-10 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
          <div>
            <div className="w-16 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse mb-2"></div>
            <div className="w-40 h-6 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    )
}